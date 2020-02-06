---
id: 'how-do-i-change-the-colors-fonts-and-general-layout-of-my-listed-blog'
title: How do I change the colors, fonts, and general layout of my Listed blog?
sidebar_label: Customize Styles
---
You can use CSS to stylize your blog as you see fit.

**To stylize your blog with custom CSS:**

1. Create a new note in Standard Notes, and call it `theme.css` (name can be anything).
2. Use the following metadata structure, overriding any of the variables with your desired color values.
  ```
  ---
  metatype: css
  ---

  :root {
    --dimmed-text-color: rgb(170, 170, 170);
    --dimmed-border-color: rgb(233, 233, 233);
    --background-color: white;
    --body-text-color: black;
    --post-title-color: var(--body-text-color);
    --post-date-color: var(--body-text-color);
    --post-text-color: var(--body-text-color);
    --page-menu-link-color: var(--body-text-color);
    --header-author-name: var(--body-text-color);
    --header-listed-name: var(--dimmed-text-color);
    --more-from-border-color: var(--dimmed-border-color);
    --bio-color: var(--body-text-color);
    --wordcount-color: var(--dimmed-text-color);
    --website-color: var(--dimmed-text-color);
    --twitter-color: var(--dimmed-text-color);
    --link-color: #086dd6;
    --header-border-color: var(--dimmed-border-color);
  }
  ```

---

A list of pre-defined CSS colors can be found [here](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).

---

Note that you can also specify custom CSS here as well:
  ```
  ---
  metatype: css
  ---

  html, body {
    font-family: "Avenir Next", sans-serif;
  }

  .post-content {
    border: 1px solid red;
  }
  ```
