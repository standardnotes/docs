module.exports = {
  mainSidebar: {
    Developers: [
      {
        'Self Hosting': [
          'self-hosting/getting-started',
          'self-hosting/infrastructure-overview',
          'self-hosting/docker',
          'self-hosting/configuration-options',
          'self-hosting/https-support',
          'self-hosting/updating',
        ],
      },
      {
        API: [
          'specification/encryption',
          'specification/sync',
          'specification/auth',
        ],
      },
      {
        Extensions: [
          'extensions/intro',
          {
            type: 'category',
            label: 'Editors',
            items: [
              'extensions/editors',
              'extensions/editors-getting-started',
              'extensions/editorkit',
              'extensions/stylekit',
            ],
          },
          'extensions/local-setup',
          'extensions/themes',
          'extensions/actions',
          'extensions/publishing',
        ],
      },
    ],
    Editors: [
      'usage/bold-editor',
      'usage/markdown-basic',
      'usage/markdown-math',
      'usage/markdown-pro',
      'usage/secure-spreadsheets',
      'usage/task-editor',
    ],
    Listed: [
      'listed/about',
      'listed/register',
      'listed/settings',
      'listed/publish',
      'listed/subscribers',
      'listed/guestbook',
      'listed/options',
      'listed/styles',
    ],
  },
  secondSidebar: {
    Troubleshooting: [
      'troubleshooting/reset-apps',
      'troubleshooting/import-backups',
    ],
  },
};
