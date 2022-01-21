module.exports = {
  siteMetadata: {
    title: 'Example site',
    siteUrl: 'https://www.yourdomain.tld',
    description: 'A sample Gatsby site following the frontendmasters course',
    image:
      'https://marketing-media.cloudinary.net/image/upload/c_fill,w_770/dpr_1.0,f_auto,fl_lossy,q_auto/v1/Web_Assets/blog/Gatsby_Video.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {},
    },
  ],
};
