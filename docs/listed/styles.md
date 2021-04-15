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

1. Create a new note in Standard Notes and call it `theme.css` (name can be anything).
2. Use the metadata structure below, overriding any of the variables with your desired color values.
3. Publish the note to your blog (the note won't actually appear in your blog, but the style changes will apply immediately).

```css
---
metatype: css
---

:root {
  --dimmed-text-color: rgba(24, 24, 24, 0.16);
  --dimmed-border-color: #f8f9fc;
  --background-color: #f8f9fc;
  --body-text-color: #181818;
  --post-title-color: var(--body-text-color);
  --post-date-color: var(--body-text-color);
  --post-text-color: var(--body-text-color);
  --page-menu-link-color: var(--link-color);
  --header-author-name: #00208f;
  --header-listed-name: #00208f;
  --more-from-border-color: var(--dimmed-border-color);
  --bio-color: var(--body-text-color);
  --wordcount-color: #00208f;
  --website-color: var(--link-color);
  --twitter-color: var(--link-color);
  --link-color: #00208f;
  --header-border-color: #00208f;
  --post-code-background-color: #f7f7f9;
  --post-code-border-color: #e1e1e8;
  --card-post-background-color: #f8f9fc;
  --card-post-border-color: rgba(24, 24, 24, 0.16);
  --post-background-color: #fff;
  --author-posts-background-color: #fff;
  --more-posts-background-color: #f8f9fc;
  --more-posts-post-background-color: #fff;
  --footer-background-color: var(--background-color);
  --footer-border-top-color: rgba(24, 24, 24, 0.16);
  --callout-background-color: #fff;
  --callout-success-border-color: #1aa772;
  --callout-warning-border-color: #f28b52;
  --callout-info-border-color: #1aa772;
  --scroll-to-top-background-color: #f8f9fc;
  --scroll-to-top-border-color: 1px solid rgba(24, 24, 24, 0.16);
  --scroll-to-top-border-color-hover: #181818;
  --scroll-to-top-icon-color: #181818;
  --blockquote-border-left-color: rgba(24, 24, 24, 0.36);
  --guestbook-border-left-color: rgba(24, 24, 24, 0.16);
  --author-header-info-links-separator-color: rgba(24, 24, 24, 0.16);
  --author-footer-background-color: #fff;
}
```

A list of pre-defined CSS colors can be found on the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).  
You can create the perfect colors using [Adobe's Color Wheel](https://color.adobe.com/create/color-wheel).

You can also specify custom CSS here as well. Here are some examples.

## Examples

### Custom Fonts

You can use custom fonts like this:

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
