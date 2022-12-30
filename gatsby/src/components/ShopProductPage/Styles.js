import styled from 'styled-components';

export const ShopProductPageStyles = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2em;
  margin-bottom: 3em;
`;

export const ProductWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  gap: 2em;
`;

export const ProductInfo = styled.div`
  width: 60%;
  padding: 0 2em;
`;

export const ProductInfoTitle = styled.h2`
  font-size: 2.25em;
  font-weight: 600;
  text-transform: uppercase;
`;

export const ProductOptionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5em;
  margin: 0;

  li {
    list-style-type: none;
    margin: 0;
  }
`;

export const ProductOptionButton = styled.button`
  padding: 0.25em 0.5em;
  color: ${(props) =>
    props.selected ? 'var(--black)' : 'var(--black-lightest)'};
  border: 1px solid
    ${(props) => (props.selected ? 'var(--black)' : 'var(--black-lightest)')};
  border-radius: 4px;
  font-size: 1em;
  font-weight: 300;

  &:hover {
    color: var(--primary-blue);
    border: 1px solid var(--primary-blue);
  }
`;
