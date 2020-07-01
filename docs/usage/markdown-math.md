---
id: 'markdown-math'
title: Markdown Math
sidebar_label: Markdown Math
---

## Introduction

The Markdown Math editor (aka Math Editor) is a [derived editor](https://standardnotes.org/help/77/what-are-editors) for Standard Notes. It is derived from the [Upmath](https://github.com/parpalak/upmath.me) editor by [Roman Parpalak](https://github.com/parpalak).

## Features

- KaTeX
- Markdown

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
| Blockquote         | \> quote                                     |
| H1                 | # Heading                                    |
| H2                 | ## Heading                                   |
| H3                 | ### Heading                                  |
| H4                 | #### Heading                                 |
| Section Breaks     | `---` or `***`                               |

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

## $\KaTeX$

This editor requires double dollar signs. For example, `$$\int_0^\infty f(x)dx$$` or `$$\pi$$` should yield $$\int_0^\infty f(x)dx$$ and $$\pi$$.

For display mode KaTeX, use double dollar signs on new lines. For example,:

```latex
Text

$$
\int_0^\infty f(x)dx
$$

More Text
```

should yield:

Text

$$
\int_0^\infty f(x)dx
$$

More Text

### $\KaTeX$ Tables

Please see [here](https://katex.org/docs/supported.html) and [here](https://katex.org/docs/support_table.html) for tables of all the functions and symbols that $\KaTeX$ supports.

## License

[GNU Affero General Public License v3.0](https://github.com/sn-extensions/math-editor/blob/master/LICENSE)

## Development

This editor uses Grunt to compile.

## Further Resources

- [GitHub](https://github.com/sn-extensions/math-editor)
