import { PortableText } from '@portabletext/react';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../Buttons';
import Hero from '../Hero';
import Banner from '../Layout/Banner';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import GlobalStyles from '../Layout/styles/GlobalStyles';
import Typography from '../Layout/styles/Typography';
import WorkGrid from '../WorkGrid';
import WorkItem from '../WorkItem';

const HeroStyles = styled.div`
  margin: 64px auto;
  max-width: 970px;
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 48px;

  & > div > h1 {
    font-size: 4em;
    font-weight: 400;
  }

  & > div > p {
    font-size: 1.3em;
    line-height: 1.4;
    margin-bottom: 36px;

    & strong {
      font-weight: 400;
    }

    & a {
      color: var(--black);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .gatsby-image-wrapper {
    user-select: none;
  }
`;

const CategoryContainer = styled.div`
  margin-bottom: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid var(--medium-grey);

  &:last-of-type {
    border-bottom: none;
  }
`;

const HomePageHeader = styled(Header)`
  max-width: 970px;
  margin-left: auto;
  margin-right: auto;
`;

export default function HomePage({ pageContent: { home, series, works } }) {
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
        <HeroStyles>
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
        </HeroStyles>
        <Hero heroContent={home.hero} />
        <div style={{ maxWidth: '970px', margin: '32px auto' }}>
          {categories.map((category) => (
            <CategoryContainer key={category.id}>
              <h2 style={{ fontSize: '2.2em', marginBottom: '24px' }}>
                {category.name}
              </h2>
              <WorkGrid>
                {category.items.map((item) => (
                  <WorkItem
                    imageData={item.images}
                    key={item.id}
                    link={item.slug.current}
                    name={item.name}
                  />
                ))}
              </WorkGrid>
              <PrimaryButton
                internal
                link={category.slug.current}
                text={`See all ${category.name}`}
              />
            </CategoryContainer>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
