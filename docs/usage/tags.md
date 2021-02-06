---
title: Smart Tags
sidebar_label: Smart Tags
description: How to use the Standard Notes tags extension.
keywords:
  - standard notes
  - docs
  - notes app
  - end-to-end encryption
  - tags
image: /img/logo.png
hide_title: false
hide_table_of_contents: false
---

Questions:

- How do I view a list of untagged notes (and create other dynamic filters)?

## Introduction

With the [Folders](https://standardnotes.org/extensions/folders) extension, you can create "smart tags" that organize your notes according to pre-defined filters.

For example, suppose you wanted to see a list of all notes that do not have a tag associated with them. You can do this by creating a smart tag.

## Creating A Smart Tag

1. Activate the [Folders](https://standardnotes.org/extensions/folders) extension.
1. Within the Folders extension, click on Views, then press the + button.
1. Copy and paste the follow smart tag syntax :

   ```
   !["Untagged", "tags.length", "=", 0]
   ```

1. Press enter on your keyboard.

At this point, you should see an item called "Untagged" under **Views**. You can select this item to view a list of your untagged notes.

## Understanding The Smart Tag Syntax

Smart tags can be used to construct any kind of simple query. The components of the smart tag syntax are as follows:

`!`: Indicates the start of a smart tag

`[...]`: A JSON array

- The first item in the JSON array is the display label.
- The second item is the note property you are targeting.
- The third is the comparison operator.
- And the last is the expected value.

## More Examples

Show all notes that have tags that start with the letter b:

```
!["B-tags", "tags", "includes", ["title", "startsWith", "b"]]
```

Show all notes that have tags `Blog.Scheduled` or `Blog.Published`:

```
!["Blog Scheduled or Published", "tags", "includes", ["title", "in", ["Blog.Scheduled", "Blog.Published"]]]
```

Show all notes whose title starts with Foo:

```
!["Foo Notes", "title", "startsWith", "Foo"]
```

Show notes that are pinned:

```
!["Pinned", "pinned", "=", true]
```

Show notes that are not pinned:

```
!["Not Pinned", "pinned", "=", false]
```

Show notes that have been updated within the last day:

```
!["Last Day", "updated_at", ">", "1.days.ago"]
```

Show notes whose text has more than 500 characters:

```
!["Long", "text.length", ">", 500]
```

### Compound Predicates

You can use compound and/or predicates to combine multiple queries. For example, to show all notes that are pinned and locked:

```
!["Pinned & Locked", "ignored", "and", [["pinned", "=", true], ["locked", "=", true]]]
```

Show all notes that are protected or pinned:

```
!["Protected or Pinned", "ignored", "or", [["content.protected", "=", true], ["pinned", "=", true]]]
```

Show all notes that have tags `Blog.Scheduled` or `Blog.Published`.

```
!["Blog Scheduled or Published", "ignored", "or", [["tags", "includes", ["title", "=", "Blog.Scheduled"]], ["tags", "includes", ["title", "=", "Blog.Published"]]]]
```

You can also use the not predicate to negate an expression. For example, to show all notes that do not have the `Unread` tag:

```
!["Read", "ignored", "not", ["tags", "includes", ["title", "=", "Unread"]]]
```

The not predicate can be combined with the compound operators. For example, to show all notes that have the `Blog` tag but not the `Blog.Published` one:

```
!["Blog Unpublished", "ignored", "and", [["tags", "includes", ["title", "=", "Blog"]], ["", "not", ["tags", "includes", ["title", "=", "Blog.Published"]]]]]
```

## Attributes

Here are a list of note attributes that can be queried:

- `title`
- `title.length`
- `text`
- `text.length`
- `tags`
- `updated_at`
- `created_at`
- `pinned`
- `content.protected`

If constructing a filter that queries tags, you can use the following tag attributes:

- `title`
- `title.length`
- `updated_at`
- `created_at`

Note that smart tags always query notes, and so the query you're building refers to notes firstmost. You reference tags by referring to a note's tags:

```
!["B-tags", "tags", "includes", ["title", "startsWith", "b"]]
```

Get all notes whose tags includes a title that starts with the letter b.

## Operators

Here are a list of operators that can be used to construct filters. The operator is typically the third parameter in the filter syntax.

- `=`
- `>`
- `<`
- `>=`
- `<=`
- `startsWith`
- `in` ("whether a value is in a list of values")
- `includes` ("includes sub filter")
- `matches` (regex pattern)
- `and` (for compound filters)
- `or` (for compound filters)
- `not` (negates the expected value, property is ignored)
