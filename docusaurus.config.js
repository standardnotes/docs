const baseUrl = '/newdocs/';
module.exports = {
  title: 'Standard Notes Documentation',
  tagline: 'Extend Your Notes App',
  url: 'https://standardnotes.github.io',
  baseUrl, // See const baseUrl above. baseUrl: '/newdocs/',
  favicon: 'img/icon.png',//'img/favicon.ico',
  organizationName: 'standardnotes', // Usually your GitHub org/user name. Originally 'facebook'
  projectName: 'newdocs', // Usually your repo name. Originally 'docusaurus'
  themeConfig: {
    navbar: {
      title: 'Documentation',
      logo: {
        alt: 'Standard Notes Logo',
        src: 'img/icon.png',
      },
      links: [
        //{to: 'self-hosting/getting-started', label: 'Self Host', position: 'left'},
        //{to: 'extensions/intro', label: 'Extensions', position: 'left'},
        //{to: 'specification/encryption', label: 'Specification', position: 'left'},
        //{to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://standardnotes.org/',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://blog.standardnotes.org', 
          label: 'Blog', 
          position: 'right'},
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
      style: 'light',// 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'Self Host a Sync Server',
              to: '/self-hosting/getting-started',
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
              label: 'Help \& Contact',
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
      copyright: `Copyright © ${new Date().getFullYear()} Standard Notes`, // My Project, Inc. Built with Docusaurus.`,
    },
  },
  scripts: [
    {
      src:
        `${baseUrl}fathom.js`,
      async: true,
    },
    {
      src:
        `${baseUrl}matomo.js`,
      async: true,
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/standardnotes/newdocs/edit/master/',
          routeBasePath: '',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
