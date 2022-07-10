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

export default function HomePage({ home, series, works }) {
  const allCategories = home.categories.map((category) => {
    const seriesInCategory = series.nodes.filter(
      (s) => s.category.id === category.id
    );
    const worksInCategory = works.nodes.filter(
      (w) => w.category.id === category.id
    );

    const categoryItems = [...seriesInCategory, ...worksInCategory]
      .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
      .slice(0, 3);

    return {
      id: category.id,
      name: category.name,
      slug: category.slug,
      items: categoryItems,
    };
  });

  const categories = allCategories.filter((category) => category.items.length);

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
            src="../assets/images/chris_hero.jpg"
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
          {categories.map((category) => (
            <CategoryContainer key={category.id}>
              <h2 style={{ fontSize: '2.2em', marginBottom: '24px' }}>
                {category.name}
              </h2>
              <CardGrid>
                {category.items.map((item) => (
                  <CardGridItem
                    imageData={item.images}
                    key={item.id}
                    link={item.slug.current}
                    name={item.name}
                  />
                ))}
              </CardGrid>
              <PrimaryButton
                internal
                link={category.slug.current}
                text={`All ${category.name}`}
              />
            </CategoryContainer>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
