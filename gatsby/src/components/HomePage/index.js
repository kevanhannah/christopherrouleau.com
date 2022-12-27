import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { PortableText } from '@portabletext/react';
import GlobalStyles from '../shared/GlobalStyles';
import Typography from '../shared/Typography';
import Banner from '../shared/Banner';
import CartDrawer from '../shared/CartDrawer';
import Footer from '../shared/Footer';
import { PrimaryButton } from '../shared/Buttons';
import Hero from './Hero';
import CardGrid from '../shared/CardGrid';
import CardGridItem from '../shared/CardGrid/CardGridItem';
import {
  CategoryContainer,
  HomePageHeader,
  HomePageIntroStyles,
} from './Styles';
import PageOverlay from '../shared/PageOverlay';

export default function HomePage({ categoryContents, home }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <CartDrawer />
      <PageOverlay />
      <Banner />
      <HomePageHeader />
      <main>
        <HomePageIntroStyles>
          <div>
            <h1 style={{ fontWeight: '700' }}>{home.greeting}</h1>
            <PortableText value={home.introduction} />
            <PrimaryButton internal link="/about" text="Say hi" />
          </div>
          <GatsbyImage
            alt={home.introImage.alt}
            image={home.introImage.asset.gatsbyImageData}
            style={{
              boxShadow: '0.5em 0.5em 0 var(--primary-blue-darker)',
              userSelect: 'none',
            }}
          />
        </HomePageIntroStyles>
        <Hero heroContent={home.hero} />
        <div style={{ maxWidth: '60.75em', margin: '0 auto' }}>
          {categoryContents.map((contents) => (
            <CategoryContainer key={contents.id}>
              <h2>{contents.name}</h2>
              <CardGrid>
                {contents.items.map((item) => (
                  <CardGridItem
                    imageData={item.images}
                    key={item.id}
                    link={item.slug.current}
                    name={item.name}
                  />
                ))}
              </CardGrid>
              {contents.linkToMore && (
                <PrimaryButton
                  internal
                  link={contents.slug.current}
                  text={`All ${contents.name}`}
                />
              )}
            </CategoryContainer>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
