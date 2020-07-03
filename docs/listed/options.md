---
title: 'Per-Post Options'
sidebar: 'Per-post Options'
---

You can add the following metadata structure to the beginning of your note to select options for each note:

```md
---
option: value
---

Your story...
```

## Custom Dates

To change the date that appears on your post, add this metadata to the beginning of your note:

```md
---
created_at: 2020-06-30 17:08:05
---

Your story...
```

## Canonical URL

If you are importing a post from another location (such as Medium or another blog), you may want to oset a [canonical URL](https://en.wikipedia.org/wiki/Canonical_link_element). To do so, add this metadata to the beginning of your note:

```md
---
canonical: https://mysite.com/blog/1/post-im-importing
---

Your story...
```

## Hide Post

To hide a post from your main blog, add this metadata to the beginning of your note:

```md
---
hidden: true
---

Your story...
```

You can also hide the body of all your stories from the main feed so that only titles show using CSS:

1. Follow the steps to [create a CSS theme](/listed/styles) for your blog.

2. Add the following CSS:

```css
---
metatype: css
---

.post-body {
  display: none;
}

#single-post-show .post-body {
  display: inline;
}
```

## Separate Pages

To add a separate page (e.g., for Contact information or a photo gallery), add this metadata to the beginning of your note:

```md
---
page: true
---

Your story...
```

1. Publish the note to your blog.

The title of your note will be used as the page title and as the link text in the navigation menu of your blog.

## JSON

To server your note as a JavaScript Object Notation (JSON) file (e.g., to [publish an extension](/extensions/publishing)), add this metadata to the beginning of your note:

```md
---
metatype: json
---
```

JSON notes are always published as private links.
