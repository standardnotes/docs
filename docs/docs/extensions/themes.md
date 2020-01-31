---
id: themes
title: Themes
sidebar_label: Themes
---
Themes allow you to customize the look and feel of the Standard Notes app on all platforms.

You can view the [source code](https://github.com/sn-extensions/solarized-dark-theme) of our official themes in order to best understand how to create your own theme.

For how to install a theme, please see [Publishing](/extensions/publishing).

## Creating a theme

Themes are simple CSS files which override a few variables to style the look of the application. **CSS themes will automatically work on mobile.** Your CSS file should contain content similar to the below.

_Note that font and font sizes do not apply to mobile; only desktop/web._

```
:root {
  --sn-stylekit-base-font-size: 14px;

  --sn-stylekit-font-size-p: 1.0rem;
  --sn-stylekit-font-size-editor: 1.21rem;

  --sn-stylekit-font-size-h6: 0.8rem;
  --sn-stylekit-font-size-h5: 0.9rem;
  --sn-stylekit-font-size-h4: 1.0rem;
  --sn-stylekit-font-size-h3: 1.1rem;
  --sn-stylekit-font-size-h2: 1.2rem;
  --sn-stylekit-font-size-h1: 1.3rem;

  --sn-stylekit-neutral-color: #989898;
  --sn-stylekit-neutral-contrast-color: white;

  --sn-stylekit-info-color: #086DD6;
  --sn-stylekit-info-contrast-color: white;

  --sn-stylekit-success-color: #2B9612;
  --sn-stylekit-success-contrast-color: white;

  --sn-stylekit-warning-color: #f6a200;
  --sn-stylekit-warning-contrast-color: white;

  --sn-stylekit-danger-color: #F80324;
  --sn-stylekit-danger-contrast-color: white;

  --sn-stylekit-shadow-color: #C8C8C8;
  --sn-stylekit-background-color: white;
  --sn-stylekit-border-color: #e3e3e3;
  --sn-stylekit-foreground-color: black;

  --sn-stylekit-contrast-background-color: #F6F6F6;
  --sn-stylekit-contrast-foreground-color: #2e2e2e;
  --sn-stylekit-contrast-border-color: #e3e3e3;

  --sn-stylekit-secondary-background-color: #F6F6F6;
  --sn-stylekit-secondary-foreground-color: #2e2e2e;
  --sn-stylekit-secondary-border-color: #e3e3e3;

  --sn-stylekit-secondary-contrast-background-color: #e3e3e3;
  --sn-stylekit-secondary-contrast-foreground-color: #2e2e2e;
  --sn-styleki--secondary-contrast-border-color: #a2a2a2;

  --sn-stylekit-editor-background-color: var(--sn-stylekit-background-color);
  --sn-stylekit-editor-foreground-color: var(--sn-stylekit-foreground-color);

  --sn-stylekit-paragraph-text-color: #454545;

  --sn-stylekit-input-placeholder-color: rgb(168, 168, 168);
  --sn-stylekit-input-border-color: #e3e3e3;

  --sn-stylekit-scrollbar-thumb-color: #dfdfdf;
  --sn-stylekit-scrollbar-track-border-color: #E7E7E7;

  --sn-stylekit-general-border-radius: 2px;

  --sn-stylekit-monospace-font: "Ubuntu Mono", courier, monospace;
  --sn-stylekit-sans-serif-font: -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
}
```

### Reloading Mobile Themes

The mobile app will download a theme once and cache it indefinitely. If you're installing your own mobile theme and make changes, you can press and hold on the theme name in the list to bring up the option to re-download the theme from the server.

# Licensing

Our themes are provided open-source mainly for educational and quality purposes. You're free to install them on your own servers, but please consider subscribing to [Standard Notes Extended](https://standardnotes.org/extensions) to help sustain future development of the Standard Notes ecosystem.
