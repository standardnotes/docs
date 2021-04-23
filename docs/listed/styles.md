---
slug: styles/
id: 'styles'
title: How do I change the colors, fonts, and general layout of my Listed blog?
sidebar_label: Customize Styles
description: How to customize styles (colors, fonts, and general layout) of your Listed blog.
keywords:
  - standard notes
  - docs
  - notes app
  - end-to-end encryption
  - listed blogging platform
  - customize styles
image: /img/logo.png
hide_title: false
hide_table_of_contents: false
---

<!-- Copied from https://standardnotes.org/help/66/how-do-i-change-the-colors-fonts-and-general-layout-of-my-listed-blog -->

import CanonicalUrl from '../../src/components/CanonicalUrl';

<CanonicalUrl
 canonicalUrl="https://standardnotes.org/help/66/how-do-i-change-the-colors-fonts-and-general-layout-of-my-listed-blog"
/>

You can use custom CSS to stylize your Listed blog.

## How to stylize your Listed blog with custom CSS

1. Go to the [settings](./settings.md) for your Listed blog, scroll down to **Appearance**, click **Enable custom CSS**, and click **Save changes**.
2. Create a new note in Standard Notes and call it `listed-theme.css` (the name can be anything).
3. Copy the following metadata structure and CSS, then paste it into your note.
4. Change any of the variables with your desired color values.
5. [Publish the note to your blog.](./publish.md) The note will be published as a private note, so it won't appear on your blog, but the custyle changes will apply immediately.

```css
---
metatype: css
---

:root {
  --border: 1px solid rgba(24, 24, 24, 0.16);
  --color-default: #f8f9fc;
  --color-primary: #00208f;
  --color-primary-opacity-8: rgba(0, 32, 143, 0.08);
  --color-neutral: #fff;
  --color-neutral-darker: #f7f7f9;
  --color-contrast: #181818;
  --color-contrast-opacity-8: rgba(24, 24, 24, 0.08);
  --color-contrast-opacity-16: rgba(24, 24, 24, 0.16);
  --color-contrast-opacity-36: rgba(24, 24, 24, 0.36);
  --color-contrast-opacity-86: rgba(24, 24, 24, 0.86);
  --background-color: var(--color-default);
  --dimmed-text-color: var(--color-contrast-opacity-16);
  --dimmed-border-color: var(--color-default);
  --body-text-color: var(--color-contrast);
  --post-title-color: var(--body-text-color);
  --post-date-color: var(--body-text-color);
  --post-text-color: var(--body-text-color);
  --page-menu-link-color: var(--link-color);
  --header-author-name: var(--color-primary);
  --header-listed-name: var(--color-primary);
  --more-from-border-color: var(--dimmed-border-color);
  --bio-color: var(--body-text-color);
  --wordcount-color: var(--color-primary);
  --website-color: var(--link-color);
  --twitter-color: var(--link-color);
  --link-color: var(--color-primary);
  --header-border-color: var(--color-primary);
  --post-code-background-color: #f7f7f9;
  --post-code-border-color: #e1e1e8;
  --card-post-background-color: var(--color-default);
  --card-post-border: var(--border);
  --post-background-color: var(--color-neutral);
  --author-posts-background-color: var(--color-neutral);
  --more-posts-background-color: var(--color-default);
  --more-posts-post-background-color: var(--color-neutral);
  --footer-background-color: var(--background-color);
  --footer-border-top-color: var(--color-contrast-opacity-16);
  --callout-background-color: var(--color-neutral);
  --callout-success-border-color: #1aa772;
  --callout-warning-border-color: #f28b52;
  --callout-info-border-color: #1aa772;
  --scroll-to-top-background-color: var(--color-default);
  --scroll-to-top-border: var(--border);
  --scroll-to-top-border-color-hover: var(--color-contrast);
  --author-footer-background-color: var(--color-neutral);
  --scroll-to-top-icon-color: var(--color-contrast);
  --blockquote-border-left-color: var(--color-contrast-opacity-36);
  --guestbook-border-left-color: var(--color-contrast-opacity-16);
  --author-header-info-links-separator-color: var(--color-contrast-opacity-16);
}
```

### Dark Theme

Listed has a dark theme when your operating system has dark mode enabled. To customize the colors of the dark theme, copy the following CSS, paste it into the same note that you created above, change any of the variables with your desired color values, then [update the published post](/listed/publish/#updating-a-published-post).

```css
@media (prefers-color-scheme: dark) {
  :root {
    --border: 1px solid hsla(0, 0%, 100%, 0.16);
    --color-default: #20202a;
    --color-primary: #93c0ff;
    --color-primary-opacity-8: rgba(147, 192, 255, 0.08);
    --color-neutral: #181818;
    --color-neutral-darker: #20202a;
    --color-contrast: #fff;
    --color-contrast-opacity-8: hsla(0, 0%, 100%, 0.08);
    --color-contrast-opacity-16: hsla(0, 0%, 100%, 0.16);
    --color-contrast-opacity-36: hsla(0, 0%, 100%, 0.36);
    --color-contrast-opacity-86: hsla(0, 0%, 100%, 0.86);
    --post-code-background-color: #20202a;
    --post-code-border-color: #20202a;
  }
}
```

### Colors

A list of pre-defined CSS colors can be found on the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).  
You can find the perfect colors using [Adobe's Color Wheel](https://color.adobe.com/create/color-wheel).

## Custom CSS Examples

You can use additional CSS to further customize the appearance of your Listed blog. Below are some examples.

### Custom Fonts

The default font for headers is Merriweather and the default font for paragraphs is Roboto. You can import and declare custom fonts (e.g., Open Sans) like this:

```css
/* Import the font */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

/* Declare the font family */
.h1,
.h2,
.h3,
.h4,
.h5 {
  font-family: Merriweather, serif;
}
body {
  font-family: 'Open Sans', Roboto, sans-serif;
}
```

### Cover Style

There are two built-in cover styles: Default and Condensed.

If you use the Default cover style, then the author image is on the left and the author text is on the right. If you want to get a full width image on top and have the author text appear underneath the image, then you can use something like this:

```css
/* For Default Cover Style */
@media (min-width: 992px) {
  /* Makes the author image appear above the author text instead of on the left */
  .header-author-info__items {
    flex-direction: column;
  }

  /* Makes the author image full width */
  .header-image-container {
    width: 100%;
    min-width: 100%;
    margin-right: unset;
    margin-bottom: inherit;
    /* Adjust the Height as needed */
    height: 368px;
  }
}
```

### Layout Style

There are two built-in layout styles: Default (list view) or Cards.

If you want to make the font size of your cards smaller, use something like this:

#### Card Post Title Font Size

```css
/** To make the font size of the titles in the cards smaller */
#author-posts .post-title {
  font-size: 1em;
  line-height: 1.5em;
}
```

#### Card Width

By default, there are four cards per row on large screens. If you want three cards per row, use something like this:

```css
@media (min-width: 992px) {
  #author-posts .author-post {
    width: calc(33% - 16px);
    margin-right: 16px;
  }
}
```

### Content Width

You can restrict the width of your post content like this:

```css
/* Restricts the max-width to 700px*/
.post-content {
  max-width: 700px;
}
```

If you want to center your content, set the left and right margins to `auto`:

```css
.post-content {
  /* Restricts the max-width to 700px*/
  max-width: 700px;
  /* Centers the contents */
  margin-left: auto;
  margin-right: auto;
}

/* For viewing a single post */
.single-post-show .post-content {
  /* Removes excess padding */
  padding-left: 0px;
  padding-right: 0px;
}
```
