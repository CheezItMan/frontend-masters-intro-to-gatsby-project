import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

export const query = graphql`
  query CocktailQuery {
    file(name: { eq: "cocktail" }) {
      childImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
  }
`;

const AboutPage = ({ data }) => {
  return (
    <>
      <Layout title="About this site">
        <GatsbyImage image={getImage(data.file)} alt="Cocktail image" />
        <h1>About Folx</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </Layout>
    </>
  );
};

export default AboutPage;
