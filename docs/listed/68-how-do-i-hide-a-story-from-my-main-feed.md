---
id: 'how-do-i-hide-a-story-from-my-main-feed'
title: How do I hide a story from my main feed?
sidebar_label: Hide a story from main feed
---

1. Use the following metadata structure at the beginning of your note:

```
---
hidden: true
---
Your story...
```

2. Publish the note to your blog.

You can also hide the body of all your stories from the main feed so that only titles show using CSS:

1. Follow the steps to [create a CSS theme](/help/66) for your blog.

2. Add the following CSS:

```
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
