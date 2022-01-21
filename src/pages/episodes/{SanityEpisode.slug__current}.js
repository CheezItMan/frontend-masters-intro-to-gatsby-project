import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout';

export const query = graphql`
  query SanityEpisodeQuery($id: String!) {
    sanityEpisode(id: { eq: $id }) {
      title
      description
      slug {
        current
      }
      youtubeID
      date(fromNow: true)
      image {
        asset {
          gatsbyImageData(placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`;

const Episode = ({ data }) => {
  return (
    <Layout
      title={data.sanityEpisode.title}
      description={data.sanityEpisode.description}
      image={data.sanityEpisode.image.asset.gatsbyImageData}
      alt={data.sanityEpisode.title}
    >
      <h1>{data.sanityEpisode.title}</h1>
      <p>
        Posted:
        {data.sanityEpisode.date} - {data.sanityEpisode.description}
      </p>
      <ul>
        <li>
          <a
            href={`https://learnwithjason.dev/${data.sanityEpisode.slug.current}`}
          >
            Watch on Youtube
          </a>
        </li>
      </ul>
    </Layout>
  );
};

export default Episode;
