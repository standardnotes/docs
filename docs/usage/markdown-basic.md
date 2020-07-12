---
id: 'markdown-basic'
title: Markdown Basic Editor
sidebar_label: Markdown Basic
description: How to use the Standard Notes Markdown Basic editor.
keywords:
  - standard notes
  - docs
  - notes app
  - end-to-end encryption
  - markdown basic
image: /img/logo.png
hide_title: false
hide_table_of_contents: false
---

## Introduction

Markdown Basic is a [custom editor](https://standardnotes.org/help/77/what-are-editors) for Standard Notes. It uses Markdown-It to parse Markdown.

## Features

- Markdown-It
- Syntax Highlighting
- Task Lists
- Footnotes

## Style Guide

| Result             | Markdown                                     |
| :----------------- | :------------------------------------------- |
| **Bold**           | \*\*text\*\* or \_\_text\_\_                 |
| _Emphasize_        | \*text\* or \_text\_                         |
| ~~Strike-through~~ | \~\~text\~\~                                 |
| Link               | [text]\(http://)                             |
| Image              | ![text]\(http://)                            |
| `Inline Code`      | \`code\`                                     |
| Code Block         | \`\`\`language <br></br>code <br></br>\`\`\` |
| Unordered List     | \* item <br></br> - item <br></br> + item    |
| Ordered List       | 1. item                                      |
| Task List          | `- [ ] Task` or `- [x] Task`                 |
| Blockquote         | \> quote                                     |
| H1                 | # Heading                                    |
| H2                 | ## Heading                                   |
| H3                 | ### Heading                                  |
| H4                 | #### Heading                                 |
| Section Breaks     | `---` or `***`                               |

## Tables

Colons can be used to align columns.  
Copy this into your editor to see what it renders:

```
| Tables           |      Are      |   Cool    |
| ---------------- | :-----------: | --------: |
| col 2 is         |   centered    |    \$149   |
| col 3 is         | right-aligned |    \$4.17  |
| privacy is       |    neat       |    \$2.48  |
| rows don't need to  |be pretty|     what? |
| the last line is | unnecessary   |   really?
| one more         |    row        |   Yay! 😆
```

## Footnotes

The Markdown Basic editor supports footnotes. The footnote links do not work properly on mobile. Copy this into your note to see how they're used:

```md
You can create footnote references that are short[^1] or long.[^2]
You can also create them inline.^[which may be easier,
since you don't need to pick an identifier and move down to type the note]
The footnotes are automatically numbered at the bottom of your note,
but you'll need to manually number your superscripts.
Make sure to count your variable[^variable] footnotes.[^5]

[^1]: Here's a footnote.
[^2]: Here’s a footnote with multiple blocks.

  Subsequent paragraphs are indented to show that they belong to the previous footnote.

  { eight spaces for some code }

  The whole paragraph can be indented, or just the first
  line. In this way, multi-paragraph footnotes work like
  multi-paragraph list items.

This paragraph won’t be part of the footnote, because it
isn’t indented.

[^variable]: The variable footnote is the fourth footnote.
[^5]: This is the fifth footnote.
```

#### Not yet available:

- Superscript
- Subscript
- Printing
- Custom Fonts

## License

[GNU Affero General Public License v3.0](https://github.com/sn-extensions/markdown-basic/blob/master/LICENSE)

## Development

This editor uses Webpack to compile.

## Further Resources

- [GitHub](https://github.com/sn-extensions/markdown-basic/)
