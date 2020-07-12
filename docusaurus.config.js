const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: 'Standard Notes Documentation',
  tagline: 'Extend Your Notes App',
  url: 'https://docs.standardnotes.org',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'standardnotes', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: 'f2899fea0369aeea336963e48a0e46dc',
      indexName: 'standardnotes',
    },
    image: 'img/logo.png',
    announcementBar: {
      id: 'supportus',
      content:
        '⭐️ Star us on <a target="_blank" rel="noopener noreferrer" href="https://github.com/standardnotes">GitHub</a>! ⭐️', //
    },
    navbar: {
      hideOnScroll: true,
      title: 'Standard Notes',
      logo: {
        alt: 'Standard Notes Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          href: 'https://standardnotes.org/',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://blog.standardnotes.org',
          label: 'Blog',
          position: 'right',
        },
        {
          href: 'https://standardnotes.org/help',
          label: 'Help',
          position: 'right',
        },
        {
          href: 'https://github.com/standardnotes/',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://github.com/sn-extensions/',
          label: 'Extensions',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'Self Host a Sync Server',
              to: '/self-hosting/getting-started',
            },
            {
              label: 'Listed Blogging Platform',
              to: '/listed/about',
            },
            {
              label: 'Build an Extension',
              to: '/extensions/intro',
            },
            {
              label: 'Specifications',
              to: '/specification/encryption',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Join our Slack',
              href: 'https://standardnotes.org/slack',
            },
            {
              label: 'Community Forum',
              href: 'https://forum.standardnotes.org/',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Help & Contact',
              href: 'https://blog.standardnotes.org',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/standardnotes',
            },
            {
              label: 'Reddit',
              href: 'https://reddit.com/r/standardnotes',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://standardnotes.org">Standard Notes</a>`, // My Project, Inc. Built with Docusaurus.`,
    },
  },
  stylesheets: [
    {
      href: '/katex/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq',
      crossorigin: 'anonymous',
    },
  ],
  scripts: [
    {
      src: `/matomo.js`,
      async: true,
      defer: true,
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          homePageId: 'welcome',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/standardnotes/docs/edit/master/',
          routeBasePath: '/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
