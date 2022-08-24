import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { PortableText } from '@portabletext/react';
import GlobalStyles from '../shared/GlobalStyles';
import Typography from '../shared/Typography';
import Banner from '../shared/Banner';
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

export default function HomePage({ categoryContents, home }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Banner />
      <HomePageHeader />
      <main>
        <HomePageIntroStyles>
          <div>
            <h1>{home.greeting}</h1>
            <PortableText value={home.introduction} />
            <PrimaryButton internal link="/about" text="Say hi" />
          </div>
          <GatsbyImage
            alt={home.introImage.alt}
            image={home.introImage.asset.gatsbyImageData}
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
