export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "title": "Standard Notes Documentation",
      "logo": {
        "alt": "Standard Notes Logo",
        "src": "img/icon.png"
      },
      "links": [
        {
          "to": "docs/self-hosting/getting-started",
          "label": "Self Host",
          "position": "left"
        },
        {
          "to": "docs/extensions/intro",
          "label": "Extensions",
          "position": "left"
        },
        {
          "to": "docs/specification/encryption",
          "label": "Specification",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://blog.standardnotes.org",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://standardnotes.org/",
          "label": "Website",
          "position": "right"
        },
        {
          "href": "https://standardnotes.org/help",
          "label": "Help",
          "position": "right"
        },
        {
          "href": "https://github.com/standardnotes/",
          "label": "GitHub",
          "position": "right"
        },
        {
          "href": "https://github.com/sn-extensions/",
          "label": "Extensions",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "blue",
      "links": [
        {
          "title": "Resources",
          "items": [
            {
              "label": "Self Host a Sync Server",
              "to": "docs/self-hosting"
            },
            {
              "label": "Build an Extension",
              "to": "docs/extensions/"
            },
            {
              "label": "Specifications",
              "to": "/docs/specification"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Join our Slack",
              "href": "https://standardnotes.org/slack"
            },
            {
              "label": "Community Forum",
              "href": "https://forum.standardnotes.org/"
            }
          ]
        },
        {
          "title": "Support",
          "items": [
            {
              "label": "Help & Contact",
              "href": "https://blog.standardnotes.org"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/standardnotes"
            },
            {
              "label": "Reddit",
              "href": "https://reddit.com/r/standardnotes"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 Standard Notes"
    }
  },
  "title": "Standard Notes",
  "tagline": "A safe place for your notes, thoughts, and life's work",
  "url": "https://standardnotes.github.io",
  "baseUrl": "/newdocs/",
  "favicon": "img/icon.png",
  "organizationName": "standardnotes",
  "projectName": "newdocs",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "C:\\Users\\theod\\OneDrive\\Documents\\GitHub\\standardnotes\\newdocs\\sidebars.js",
          "editUrl": "https://github.com/standardnotes/newdocs/"
        },
        "theme": {
          "customCss": "C:\\Users\\theod\\OneDrive\\Documents\\GitHub\\standardnotes\\newdocs\\src\\css\\custom.css"
        }
      }
    ]
  ]
};