module.exports = {
  mainSidebar: {
    'Standard Notes Docs': ['welcome'],
    Usage: [
      'usage/general',
      'usage/install-extensions',
      {
        type: 'category',
        label: 'Mobile',
        items: ['usage/mobile'],
      },
      {
        type: 'category',
        label: 'Editors',
        items: [
          'usage/what-are-editors',
          'usage/bold-editor',
          'usage/markdown-basic',
          'usage/markdown-math',
          'usage/markdown-pro',
          'usage/secure-spreadsheets',
          'usage/task-editor',
        ],
      },
      {
        type: 'category',
        label: 'Folders and Tags',
        items: ['usage/folders', 'usage/tags', 'usage/autocomplete-tags'],
      },
      {
        type: 'category',
        label: 'Actions',
        items: ['usage/action-bar', 'usage/github-push'],
      },
      {
        type: 'category',
        label: 'Data Care',
        items: [
          'usage/backups',
          'usage/email-backups',
          'usage/cloud-backups',
          'usage/note-history',
        ],
      },
      {
        type: 'category',
        label: 'FileSafe',
        items: ['usage/filesafe', 'usage/filesafe-aws'],
      },
      {
        type: 'category',
        label: 'Two-factor Authentication',
        items: [
          'usage/2fa',
          'usage/2fa-store-secret-key',
          'usage/2fa-lost-secret-key',
        ],
      },
    ],
    Listed: [
      'listed/about',
      'listed/register',
      'listed/publishing',
      'listed/settings',
      'listed/subscribers',
      'listed/guestbook',
      'listed/styles',
      'listed/options',
    ],
    'Self-Hosting a Sync Server': [
      'self-hosting/getting-started',
      'self-hosting/heroku',
      'self-hosting/ec2-nginx',
      'self-hosting/raspberry-pi',
      'self-hosting/managing-options',
      'self-hosting/https-support',
    ],
    'Building Extensions': [
      'extensions/intro',
      'extensions/building-an-extension',
      {
        type: 'category',
        label: 'Editors',
        items: ['extensions/editorkit', 'extensions/stylekit'],
      },
      'extensions/local-setup',
      'extensions/themes',
      'extensions/actions',
      'extensions/publishing',
    ],
    Specification: [
      'specification/encryption',
      'specification/encryption-003',
      'specification/sync',
    ],
    Contribute: ['contribute'],
  },
  secondSidebar: {
    Troubleshooting: [
      'troubleshooting/reset-apps',
      'troubleshooting/import-backups',
    ],
  },
};
