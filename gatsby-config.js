module.exports = {
  pathPrefix: '/gatsby-starter-level-2',
  siteMetadata: {
    title: 'Level 2',
    titleTemplate: '%s · Level 2',
    image: '/images/logo.png',
    author: 'Max Mustermann',
    description: 'Gatsby starter to quickly setup your portfolio and boost it to the next level.',
    url: 'https://knochenmark.github.io',
    paginationPageSize: 4, // Amount of posts displayed per listing page.
    // Config for the hero section
    hero: {
      introduction: "hey it's me",
      tagline: 'Design. Code. Experiment',
      description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore
      et dolore magna aliquyam erat, sed diam voluptua.`,
      // Config for the Call to Action button (both props must be truthy strings)
      ctaLabel: 'View Documentation',
      ctaLink: 'https://github.com/Knochenmark/gatsby-starter-level-2/blob/master/README.md',
    },
    contact: {
      phone: '+49 1234 5678910',
      email: 'maxmustermann@gmail.com',
      address: 'Friesenstr. 123, Berlin, Germany',
      text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore
      et dolore magna aliquyam erat, sed diam voluptua.`,
    },
    // Config for the navigation links
    menuLinks: [
      {
        name: 'About',
        link: '/#about',
      },
      {
        name: 'Projects',
        link: '/#projects',
      },
      {
        name: 'Blog',
        link: '/#blog',
      },
      {
        name: 'Contact',
        link: '/#contact',
      },
      // Uncomment for development purposes
      // {
      //   name: 'Tags',
      //   link: '/tags',
      // },
    ],
  },
  plugins: [
    `gatsby-plugin-stylus`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'projects',
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'about',
        path: `${__dirname}/content/about`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
