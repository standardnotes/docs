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
    announcementBar: {
      id: 'supportus',
      content:
        '⭐️ Star us on <a target="_blank" rel="noopener noreferrer" href="https://github.com/standardnotes">GitHub</a>! ⭐️', //
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    hideableSidebar: true,
    image: 'img/logo.png',
    navbar: {
      hideOnScroll: true,
      title: 'Standard Notes',
      logo: {
        alt: 'Standard Notes Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://standardnotes.org/',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://standardnotes.org/help',
          label: 'Help',
          position: 'right',
        },
        {
          href: 'https://blog.standardnotes.org',
          label: 'Blog',
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
              label: 'Self-host a Sync Server',
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
            {
              label: 'Listed Blogging Platform',
              href: 'https://listed.to',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Help & Contact',
              href: 'https://standardnotes.org/help',
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
      href: '/katex/v0.12.0/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
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
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/standardnotes/docs/edit/master/',
          routeBasePath: '/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/extensions/intro', // string
            from: [
              // string | string[]
              '/extensions/introduction',
              '/extensions/components/',
              '/extensions/',
              '/extensions/intro-to-extensions/',
            ],
          },
          {
            to: '/self-hosting/getting-started',
            from: [
              '/self-hosting/',
              '/self-hosting/getting-started-with-self-hosting',
            ],
          },
          {
            to: '/specification/encryption/',
            from: ['/specification/'],
          },
        ],
      },
    ],
    'docusaurus-plugin-sass',
  ],
};
