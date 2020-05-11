---
id: 'append-editor'
title: Append Editor
sidebar_label: Append Editor
---

## Introduction
The Append Editor is a [custom editor](https://standardnotes.org/help/77/what-are-editors). It supports Markdown $\KaTeX$. 

Features include:
- [GitHub flavored Markdown](https://guides.github.com/features/mastering-markdown/) via [Unified/Remark](https://github.com/remarkjs/remark)
- LaTeX via hosted [KaTeX](https://github.com/KaTeX/KaTeX)
- Emojis via [emoji codes](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)
- Google Code and GitHub Gist flavored Syntax Highlighting via [highlight.js](https://github.com/highlightjs/highlight.js) stylesheets
- Read notes by default to prevent accidentally editing previous notes
- Append text to notes without exposing previous notes
- Notes are stored in plaintext (great for longevity)
- Changes to note in the Edit mode are automatically saved
- Text in the Append mode is automatically saved without automatically appending
- Edit mode is available with and without viewing
- If Edit mode and View mode are both on, text is rendered live
- Option to turn View mode off to improve editor performance when editing long notes
- Buttons to scroll to top and bottom of the note
- Helpful questions to prompt writing

## Keyboard Shortcuts
| Result             | Windows/Linux                         | macOS
| :------------      | :-----------------------------------  | :------------------
| Toggle Edit Mode   | Ctrl + E                              | ⌘ + E
| Toggle Append Mode    | Ctrl + U                              | ⌘ + U
| Toggle View Mode      | Ctrl + P                              | ⌘ + P
| Escape Edit/View Mode | Escape                             | Escape

## Style Guide
| Result             | Markdown                                     | Shortcut*          |
| :------------      | :------------------------------------------- | :--------          |
| **Bold**           | \*\*text\*\* or \_\_text\_\_                 | Ctrl/⌘ + B        |                 
| *Emphasize*        | \*text\* or \_text\_                         | Ctrl/⌘ + I        |
| ~~Strike-through~~ | \~text\~ or \~\~text\~\~                     |  ❔
| Link 	             | [text]\(http://) 	                          | Ctrl/⌘ + K
| Image              | ![text]\(http://) 	                          | Ctrl/⌘ + Alt + I
| `Inline Code` 	   | \`code\` 	                                  | ❔
| Code Block 	       | \`\`\`code\`\`\` 	                          | 4 spaces 
| Unordered List     | * item <br></br> - item <br></br> + item     | 	Ctrl/⌘ + L
| Ordered List 	     | 1. item                                      | Ctrl/⌘ + Alt + L 
| Task List          | `- [] Task` or `- [x] Task`                  | N/A
| Blockquote 	       | \> quote 	                                  | Ctrl + ' or Ctrl + "
| H1 	               | # Heading 	                                  | Ctrl/⌘ + H
| H2 	               | ## Heading 	                                | Ctrl/⌘ + H (×2)
| H3 	               | ### Heading 	                                | Ctrl/⌘ + H (×3)

*The shortcuts are currently available only on the Desktop app and Chrome based web apps such as Google Chrome and the latest Microsoft Edge. 

### Line Breaks
To have a line break without a paragraph, you will need to add two spaces, called trailing spaces, to the end of your sentence. This line is separate, but is considered to be within the same paragraph. To create a new paragraph, skip two lines.

### $\KaTeX$

For inline KaTeX, use single or double dollar signs inline. For example, `$\int_0^\infty f(x)dx$` or `$$\pi$$` should yield $\int_0^\infty f(x)$ and $\pi$.

For display mode KaTeX, use double dollar signs on new lines. For example,: 

```latex
$$
\int_0^\infty f(x)dx
$$
```

should yield: 

$$
\int_0^\infty f(x)dx
$$

#### $\KaTeX$ Tables

The tables for $\KaTeX$ are availble [here](https://katex.org/docs/supported.html) and [here](https://katex.org/docs/support_table.html).

### Table of Contents
You can create a table of contents: 

```md
#### Table of Contents
```

### Lists

The Append Editor supports unordered and ordered lists, but does not mix them well if they're both on the first level. Copy this into your editor to see what it creates:

```md
1. First ordered list item
1. Another item.   
  a. Two spaces for lettered list  
  b. Add two trailing spaces to create new lettered item  
  c. Third lettered list
   - Three or four spaces for unordered sub sublist  
   - Three or four spaces for unordered sub sublist
   1. Three or four spaces for ordered sub sublist 
  a. Lett
    1. Ordered list on same level
* Unordered List
   1. Ordered sublist  
    - Unordered sub sublist  
      - Unordered sublist   
        1. Seven spaces for ordered sub sub sub sub list 
        1. Seven spaces for ordered sub sub sub sub list 
  1. Numbered list doesn't resume 
```

### Tables
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

### Footnotes

The Append Editor supports footnotes. Copy this into your note to see how they're used: 

```md
You can create footnote references that are short[^1] or long.[^2] 
You can also create them inline.^[which may be easier, 
since you don't need to pick an identifier and move down to type the note] 
The footnotes are automatically numbered at the bottom of your note, 
but you'll need to manually number your superscripts. 
Make sure to count your variable[^variable] footnotes.[^5]

[^1]: Here's a footnote.

[^2]: Here’s a footnote with multiple blocks.

    Subsequent paragraphs are indented to show that they
belong to the previous footnote.

        { eight spaces for some code }

    The whole paragraph can be indented, or just the first
    line.  In this way, multi-paragraph footnotes work like
    multi-paragraph list items.

This paragraph won’t be part of the footnote, because it
isn’t indented.

[^variable]: The variable footnote is the fourth footnote.

[^5]: This is the fifth footnote.
```


## Further Resources

