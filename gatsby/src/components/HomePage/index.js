import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { PortableText } from '@portabletext/react';
import GlobalStyles from '../Layout/styles/GlobalStyles';
import Typography from '../Layout/styles/Typography';
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
          <StaticImage
            src="../../assets/images/chris_hero.jpg"
            alt="Christopher Rouleau"
            placeholder="blurred"
            loading="eager"
            width={400}
            aspectRatio={16 / 9}
            layout="constrained"
          />
        </HomePageIntroStyles>
        <Hero heroContent={home.hero} />
        <div style={{ maxWidth: '970px', margin: '0 auto' }}>
          {categoryContents.map((contents) => (
            <CategoryContainer key={contents.id}>
              <h2 style={{ fontSize: '2.2em' }}>{contents.name}</h2>
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
