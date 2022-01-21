import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
const AboutPage = () => {
  return (
    <>
      <Layout title="About this site">
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
