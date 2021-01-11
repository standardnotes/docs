---
slug: /usage/
id: general
title: General Usage
sidebar_label: General Usage
description: How to use the Standard Notes app.
keywords:
  - standard notes
  - notes app
  - end-to-end encryption
  - usage
image: /img/logo.png
hide_title: false
hide_table_of_contents: false
---

## Keyboard Shortcuts

### Edit

| Result                            | Windows/Linux    | Mac                 |
| :-------------------------------- | :--------------- | :------------------ |
| Undo                              | Ctrl + Z         | ⌘ + Z               |
| Redo                              | Ctrl + Y         | ⌘ + Y               |
| Cut                               | Ctrl + X         | ⌘ + X               |
| Copy                              | Ctrl + C         | ⌘ + C               |
| Paste                             | Ctrl + V         | ⌘ + V               |
| Paste and Match Style\*           | Ctrl + Shift + V | ⌘ + Shift + V       |
| Select All                        | Ctrl + A         | ⌘ + A               |
| Jump to the beginning of the note | Ctrl + Home      | ⌘ + Home or ⌘ + Up  |
| Jump to the end of the note       | Ctrl + End       | ⌘ + End or ⌘ + Down |

\*Paste and Match Style only works with Rich Text Editors such as the Bold and Plus editors

### View

| Result                 | Windows/Linux             | Mac                    |
| :--------------------- | :------------------------ | :--------------------- |
| Reload                 | Ctrl + R                  | ⌘ + R                  |
| Toggle Developer Tools | Ctrl + Shift + I          | ⌘ + Shift + I          |
| Actual Size            | Ctrl + 0                  | ⌘ + 0                  |
| Zoom In                | Ctrl + Shift + `+` (plus) | ⌘ + Shift + `+` (plus) |
| Zoom Out               | Ctrl + `-` (minus)        | ⌘ + `-` (minus)        |
| Toggle Full Screen     | F11                       | F11                    |
| Hide Menu Bar\*        | Alt + M                   | Alt + M                |

\*The Hide Menu Bar shortcut is available only when not using the Themed Menu Bar (window decoration). To toggle the Themed Menu Bar on Windows and Linux, visit **☰** > View > Themed Menu Bar.

### Window

| Result   | Windows/Linux | Mac   |
| :------- | :------------ | :---- |
| Minimize | Ctrl + M      | ⌘ + M |
| Close    | Ctrl + W      | ⌘ + W |

### Reserved

These keyboard shortcuts have not been implemented but are reserved for future use. Developers who are interested in implementing keyboard shortcuts for their extensions should avoid using these shortcuts.

- Ctrl/⌘ + `T`
- Ctrl/⌘ + Shift + `F`
- Ctrl/⌘ + Shift + `L`

## Note Options

What does it mean to lock or protect a note?

<!-- Copied from https://standardnotes.org/help/54/what-does-it-mean-to-lock-or-protect-a-note -->

Here is a list of available options on a note and what they represent:

| Option            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :---------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Pin**           | Pinning a note will anchor it to the top of your list of notes, sorted according to the global sort order (specified in your _Options_).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Archive**       | Archiving a note will stash your note and hide it from your usual interface. Archived notes can be found by choosing the reserved _Archived_ view in the tags panel. Archiving a note does not affect or improve performance, as the note is still saved and loaded, but not displayed in the list of all notes or within a particular tag. Archiving is useful for notes that no longer contain actionable data, but want to be preserved for historical purposes. For example, if a note contains a list of todos, and you've completed all the todos, archiving the note would make sense.                                                                                                               |
| **Lock**          | Locking a note will put it read-only mode, which means it can't be edited or deleted until you unlock it. This is to prevent accidental modification of sensitive notes, like passwords or credentials that aren't likely to change often.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Protect**       | Protecting a note marks the note as sensitive, and will make it so that additional privileges are required to view the note. Privileges are managed by the main _Privileges feature_, which you can manage on web or desktop via **Account → Manage Privileges** and on mobile via **Settings → Manage Privileges**. Inside the privileges management window, you'll see a row named _View Protected Notes_. By checking both the Account Password and Local Passcode boxes for that row, you will make it so that both the account password and your local passcode will be required to view any notes marked as _Protected_. Protecting a note will automatically hide its preview in your list of notes. |
| **Preview**       | On web and desktop, selecting the Preview option will toggle whether to hide or show the note preview in the list of notes. You can hide previews for a particular note if you'd like to conserve vertical space in your list of notes, or to hide sensitive data. However, we recommend _Protecting_ a note if you'd like to hide sensitive information.                                                                                                                                                                                                                                                                                                                                                   |
| **Move to Trash** | Moving a note to the trash will mark the note as deleted, and remove it from your interface. However, your note will still exist in your Trash, which you can access from your list of Views. From the trash, you can restore the note, or choose to delete it permanently. You can also empty the entirety of your trash by choosing **Options → Empty Trash** from the note editor panel.                                                                                                                                                                                                                                                                                                                 |
