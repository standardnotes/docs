---
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

You can use CSS to stylize your blog as you see fit.

### To stylize your blog with custom CSS:

1. Create a new note in Standard Notes, and call it `theme.css` (name can be anything).
2. Use the metadata structure below, overriding any of the variables with your desired color values.
3. Publish the note to your blog (the note won't actually appear in your blog, but the style changes will apply immediately)

```css
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
You can create the perfect colors using [Adobe's Color Wheel](https://color.adobe.com/create/color-wheel)

---

Note that you can also specify custom CSS here as well:

```css
---
metatype: css
---

html,
body {
  font-family: 'Avenir Next', sans-serif;
}

.post-content {
  border: 1px solid red;
}
```

## Examples

You can restrict the width of your entire Listed blog like this:

```css
html,
body {
  max-width: 875px;
}
```

or you can restrict the width of only your content (and not the header), like this:

```css
#content-container {
  max-width: 700px;
}
```

If you want to center your content, you'll want to add auto-widths for your left and right margins like this:

```css
#content-container {
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}
```
