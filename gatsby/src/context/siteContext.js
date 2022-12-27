import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Client from 'shopify-buy';

const SHOPIFY_CHECKOUT_STORAGE_KEY = 'shopify:checkoutId';

const client = Client.buildClient({
  domain: process.env.GATSBY_MYSHOPIFY_URL,
  storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_API,
});

const initialStoreState = {
  checkout: {
    lineItems: [],
  },
  cartIsOpen: false,
  isAdding: false,
  shopifyClient: client,
};

const StoreContext = createContext({
  store: initialStoreState,
  setStore: () => null,
});

function createNewCheckout(store) {
  return store.shopifyClient.checkout.create();
}

function fetchCheckout(store, id) {
  return store.shopifyClient.checkout.fetch(id);
}

function setCheckoutInState(checkout, setStore) {
  const isBrowser = typeof window !== 'undefined';
  if (isBrowser) {
    localStorage.setItem(SHOPIFY_CHECKOUT_STORAGE_KEY, checkout.id);
  }

  setStore((prevState) => ({ ...prevState, checkout }));
}

function StoreContextProvider({ children }) {
  const [store, setStore] = useState(initialStoreState);
  const [initStore, setInitStore] = useState(false);

  useEffect(() => {
    if (initStore === false) {
      const initializeCheckout = async () => {
        // Check for an existing cart
        const isBrowser = typeof window !== 'undefined';
        const existingCheckoutId = isBrowser
          ? localStorage.getItem(SHOPIFY_CHECKOUT_STORAGE_KEY)
          : null;

        if (existingCheckoutId) {
          try {
            const checkout = await fetchCheckout(store, existingCheckoutId);
            // Make sure none of the items in this cart have been deleted from Shopify
            if (checkout.lineItems.some((lineItem) => !lineItem.variant)) {
              throw new Error(
                'Invalid line item in checkout. This variant was probably deleted from Shopify'
              );
            }

            // Make sure this cart hasn’t already been purchased.
            if (!checkout.completedAt) {
              setCheckoutInState(checkout, setStore);
              return;
            }
          } catch (e) {
            localStorage.setItem(SHOPIFY_CHECKOUT_STORAGE_KEY, null);
          }
        }

        const newCheckout = await createNewCheckout(store);
        setCheckoutInState(newCheckout, setStore);
      };
      initializeCheckout();
      setInitStore(true);
    }
  }, [store, setStore, store.shopifyClient.checkout, initStore]);

  const StoreContextProviderValue = useMemo(
    () => ({ store, setStore }),
    [store, setStore]
  );

  return (
    <StoreContext.Provider value={StoreContextProviderValue}>
      {children}
    </StoreContext.Provider>
  );
}

function useStore() {
  const { store } = useContext(StoreContext);
  return store;
}

function useAdding() {
  const {
    store: { isAdding },
  } = useContext(StoreContext);
  return isAdding;
}

function useCartCount() {
  const {
    store: { checkout },
  } = useContext(StoreContext);

  let count = 0;
  if (checkout.lineItems) {
    count = checkout.lineItems.reduce(
      (runningTotal, item) => item.quantity + runningTotal,
      0
    );
  }

  return count;
}

function useCartTotals() {
  const {
    store: { checkout },
  } = useContext(StoreContext);

  const currencyCode = checkout.totalPrice
    ? checkout.totalPrice.currencyCode
    : null;
  const tax = checkout.totalTax
    ? `${Number(checkout.totalTax.amount).toFixed(2)}`
    : '-';
  const total = checkout.totalPrice
    ? `${Number(checkout.totalPrice.amount).toFixed(2)}`
    : '-';

  return {
    currencyCode,
    tax,
    total,
  };
}

function useCartItems() {
  const {
    store: { checkout },
  } = useContext(StoreContext);

  return checkout.lineItems;
}

function useAddItemToCart() {
  const {
    store: { checkout, shopifyClient },
    setStore,
  } = useContext(StoreContext);

  async function addItemToCart(variantId, quantity) {
    if (variantId === '' || !quantity) {
      console.error('Both a size and quantity are required.');
      return;
    }

    setStore((prevState) => ({ ...prevState, isAdding: true }));

    const checkoutId = checkout.id;
    const lineItemsToAdd = [{ variantId, quantity }];

    const newCheckout = await shopifyClient.checkout.addLineItems(
      checkoutId,
      lineItemsToAdd
    );

    setStore((prevState) => ({
      ...prevState,
      checkout: newCheckout,
      cartIsOpen: true,
      isAdding: false,
    }));
  }

  return addItemToCart;
}

function useRemoveItemFromCart() {
  const {
    store: { checkout, shopifyClient },
    setStore,
  } = useContext(StoreContext);

  async function removeItemFromCart(itemId) {
    const newCheckout = await shopifyClient.checkout.removeLineItems(
      checkout.id,
      [itemId]
    );

    setStore((prevState) => ({ ...prevState, checkout: newCheckout }));
  }

  return removeItemFromCart;
}

function useAddCoupon() {
  const {
    store: { checkout, shopifyClient },
    setStore,
  } = useContext(StoreContext);

  async function addCoupon(coupon) {
    const newCheckout = await shopifyClient.checkout.addDiscount(
      checkout.id,
      coupon
    );

    setStore((prevState) => ({ ...prevState, checkout: newCheckout }));
  }

  return addCoupon;
}

function useRemoveCoupon() {
  const {
    store: { checkout, shopifyClient },
    setStore,
  } = useContext(StoreContext);

  async function removeCoupon(coupon) {
    const newCheckout = await shopifyClient.checkout.removeDiscount(
      checkout.id,
      coupon
    );

    setStore((prevState) => ({ ...prevState, checkout: newCheckout }));
  }

  return removeCoupon;
}

function useCheckout() {
  const {
    store: { checkout },
  } = useContext(StoreContext);

  return () => {
    window.open(checkout.webUrl);
  };
}

function useToggleCart() {
  const {
    store: { cartIsOpen },
    setStore,
  } = useContext(StoreContext);

  async function toggleCart() {
    setStore((prevState) => ({ ...prevState, cartIsOpen: !cartIsOpen }));
  }

  return toggleCart;
}

export {
  client,
  StoreContextProvider,
  useCartTotals,
  useCartItems,
  useAddItemToCart,
  useStore,
  useAdding,
  useCartCount,
  useRemoveItemFromCart,
  useAddCoupon,
  useRemoveCoupon,
  useCheckout,
  useToggleCart,
};
