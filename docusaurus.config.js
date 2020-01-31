module.exports = {
  title: 'Standard Notes',
  tagline: 'A safe place for your notes, thoughts, and life\'s work',
  url: 'https://standardnotes.github.io',
  baseUrl: '/newdocs/',
  favicon: 'img/icon.png',//'img/favicon.ico',
  organizationName: 'standardnotes', // Usually your GitHub org/user name. Originally 'facebook'
  projectName: 'newdocs', // Usually your repo name. Originally 'docusaurus'
  themeConfig: {
    navbar: {
      title: 'Standard Notes Documentation',
      logo: {
        alt: 'Standard Notes Logo',
        src: 'img/icon.png',
      },
      links: [
        {to: 'docs/self-hosting/getting-started', label: 'Self Host', position: 'left'},
        {to: 'docs/extensions/intro', label: 'Extensions', position: 'left'},
        {to: 'docs/specification/encryption', label: 'Specification', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://blog.standardnotes.org', 
          label: 'Blog', 
          position: 'left'},
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
      style: 'blue',// 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'Self Host a Sync Server',
              to: 'docs/self-hosting',
            },
            {
              label: 'Build an Extension',
              to: 'docs/extensions/',
            },
            {
              label: 'Specifications',
              to: '/docs/specification',
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
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/standardnotes/newdocs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
