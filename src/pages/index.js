import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import { imageWrapper } from '../styles/index.module.css';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          slug
          frontmatter {
            title
            date(fromNow: true)
            description
          }
        }
      }
      allSanityEpisode(
        sort: { fields: date, order: DESC }
        filter: { youtubeID: { ne: null } }
        limit: 20
      ) {
        nodes {
          id
          title
          guest {
            name
          }
          gatsbyPath(filePath: "/episodes/{SanityEpisode.slug__current}")
        }
      }
    }
  `);

  const posts = data.allMdx.nodes;
  const episodes = data.allSanityEpisode.nodes;

  return (
    <>
      <Layout>
        <div className={imageWrapper}>
          <StaticImage
            src="../images/ivana-la-61jg6zviI7I-unsplash.jpg"
            alt="Corgi image"
            placeholder="dominantColor"
            width={300}
            height={300}
          />
        </div>
        <h1>Hello World</h1>
        <Link to="/about">About</Link>
        <h2>Recent blog posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={post.slug}>{post.frontmatter.title}</Link>
              <small> posted: {post.frontmatter.date}</small>
            </li>
          ))}
        </ul>

        <h2>
          Latest episodes of <em>Learn With Jason</em>
        </h2>
        <ul>
          {episodes.map((episode) => (
            <li key={episode.id}>
              <Link to={episode.gatsbyPath}>
                {episode.title} (with {episode.guest?.[0]?.name})
              </Link>
            </li>
          ))}
        </ul>
        <a href="https://www.learnwithjason.dev/">
          Watch all episodes of <em>Learn With Jason</em>
        </a>
      </Layout>
    </>
  );
};

export default IndexPage;
