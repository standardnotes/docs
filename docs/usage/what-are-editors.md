---
slug: what-are-editors/
id: what-are-editors
title: What are editors?
sidebar_label: What are editors?
description: What are editors in Standard Notes?
keywords:
  - standard notes
  - docs
  - notes app
  - end-to-end encryption
  - What are editors?
image: /img/logo.png
hide_title: false
hide_table_of_contents: false
---

<!-- Copied from https://standardnotes.com/help/77/what-are-editors -->

import CanonicalUrl from '../../src/components/CanonicalUrl';

<CanonicalUrl
 canonicalUrl="https://standardnotes.com/help/77/what-are-editors"
/>

## Introduction

Editors are sort of “apps” for Standard Notes. Like apps, editors are self-contained applications that allow you to edit your notes with the proper tool for the job. This allows “notes” to be a flexible concept in Standard Notes. Many of your notes will be simple plain text. But others can be spreadsheets, task managers, Markdown documents, or even a 2FA authenticator app. This allows you to keep all sorts of text and documents all in one safe place, rather than having to spread your information across several services with varying security protections.

There are largely three types of editors: plain, custom, and derived.

## Plain editor

There is only one plain editor in Standard Notes, and we call that the…Plain Editor. The plain editor delivers the platform-specific native editing experience that is built into your system. This is essentially a fail-proof, indestructible editor that the entire software world has agreed to keep as stable as possible. This comes out of the box on all Standard Notes apps, and no installation is required. This editor is the founding staple of Standard Notes, and one that is guaranteed to never change.

For our web and desktop app, this is the classic, ever-reliable HTML textarea. On iOS, this is the UITextView. And on Android, this is the TextView component.

## Custom editors

Custom editors are ones that we build in-house. They’re largely very context-specific applications that tend to focus on delivering the most fundamental experience possible. Keeping these editors simple allows them to retain stability levels close to that of the plain editor, but also offer features beyond what you can accomplish with just a simple text box.

There are three editors in this category: Markdown Basic, TokenVault, and Task Editor. These are editors that we build, maintain, and improve on directly. When you have a feature or issue for one of these editors, there’s a high likelihood that we are able to act on those features, if they correlate to our own long-term roadmap.

## Derived editors

Derived editors are complex pieces of software developed by specialized software companies, organizations, and individuals not formally affiliated with Standard Notes. These are editors that offer compelling user experiences, and solve complex code and engineering feats that would take a dedicated team many years to build. These editors offer functions that are beyond our own defined software scope. For example, we focus more on offering a secure, consistent, and easy-to-use software application on all your devices for managing and securing your notes. Building complex and intricate spreadsheet software, on the other hand, is not in our general area of technical focus, and we prefer instead to rely on the specialized work of other talented people.

Derived editors are derived from either open-source or commercial software projects. After studying a product and deciding it would offer a compelling user experience for Standard Notes, we first acquire a commercial license to use the product (or use the open-source license if applicable). We then study the source code and network behavior of each software we license to ensure there is no unwanted behavior. Then, we build a small wrapper on top of the product, which allows the editor and Standard Notes to communicate between each other to save data in a permission-based, controlled, and isolated manner.

There are eight editors in this category: Bold Editor, Markdown Pro, Markdown Minimist, Secure Spreadsheets, Plus Editor, Markdown Math, Code Editor, and Vim Editor. These are editors that we do not build, maintain, and improve on directly. When you have a feature or issue for one of these editors, there’s a low likelihood that we are able to act on those features. Rather, we would likely work together to forward the issue to the software maker. We do however keep this software up to date with vendor releases.

To see the entire list of editors we offer, visit our [Extended page](https://standardnotes.com/extensions).
