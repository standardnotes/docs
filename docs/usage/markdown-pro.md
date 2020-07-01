---
id: 'markdown-pro'
title: Markdown Pro
sidebar_label: Markdown Pro
---

## Introduction

The Markdown Pro editor (aka Advanced Markdown Editor) is a [derived editor](https://standardnotes.org/help/77/what-are-editors) for Standard Notes. It is derived from the [Easy Markdown Editor](https://github.com/Ionaru/easy-markdown-editor) which uses [Codemirror](https://github.com/codemirror/codemirror).

## Features

- Markdown
- Three views: Edit, Split, and Preview
- Keyboard Shortcuts
- Inline styling

## Keyboard Shortcuts

| Result              | Shortcut         |
| :------------------ | :--------------- |
| Toggle Preview      | Ctrl/⌘ + P       |
| Toggle Side-by-Side | Ctrl/⌘ + Alt + P |

## Style Guide

| Result             | Markdown                                  | Shortcut                            |
| :----------------- | :---------------------------------------- | :---------------------------------- |
| **Bold**           | \*\*text\*\* or \_\_text\_\_              | Ctrl/⌘ + B                          |
| _Emphasize_        | \*text\* or \_text\_                      | Ctrl/⌘ + I                          |
| ~~Strike-through~~ | \~text\~ or \~\~text\~\~                  | ❔                                  |
| Link               | [text]\(http://)                          | Ctrl/⌘ + K                          |
| Image              | ![text]\(http://)                         | Ctrl/⌘ + Alt + I                    |
| `Inline Code`      | \`code\`                                  | ❔                                  |
| `Code Block`       | \`\`\`code\`\`\`                          | Ctrl/⌘ + Alt + C or tab or 7 spaces |
| Unordered List     | \* item <br></br> - item <br></br> + item | Ctrl/⌘ + L                          |
| Ordered List       | 1. item                                   | Ctrl/⌘ + Alt + L                    |
| Remove List        |                                           | Ctrl/⌘ + E                          |
| Blockquote         | \> quote                                  | Ctrl + ' or Ctrl + "                |
| H1                 | # Heading                                 | Ctrl/⌘ + H                          |
| H2                 | ## Heading                                | Ctrl/⌘ + H (×2)                     |
| H3                 | ### Heading                               | Ctrl/⌘ + H (×3)                     |

### Lists

Enter a space in front of the asterisk or number to indent the list.  
Copy this into your editor to see what it creates:

```
1. First ordered list item
2. Another item
 * One space for unordered sub-list item
 - One space for another sub-list item
    * Press tab for sub-sub-list item
  		1. Two tabs for sub-sub-sub list item 😀
1. Actual numbers don't matter, just that it's a number
 1. One space for ordered sub-list item
 1. One space for another sub-list item
    * Press Tab
    1. One tab
	    * Two tabs. You got it! 👏
4. And another item. Success! 🎉
```

## Tables

Colons can be used to align columns.  
Copy this into your editor to see what it creates:

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

#### Not yet available:

- Footnotes
- Superscript
- Subscript
- Syntax Highlighting
- Printing
- Custom Fonts

## License

[GNU Affero General Public License v3.0](https://github.com/standardnotes/advanced-markdown-editor/blob/master/LICENSE)

## Development

This editor uses Gulp to compile.

## Further Resources

- [GitHub](https://github.com/standardnotes/advanced-markdown-editor)
