---
slug: backups/
id: backups
title: Create and Import Backups
sidebar_label: Backups
description: How to create and import backups of your Standard Notes data.
keywords:
  - standard notes
  - docs
  - notes app
  - end-to-end encryption
  - Backups
image: /img/logo.png
hide_title: false
hide_table_of_contents: false
---

<!-- Copied from https://standardnotes.org/help/14/how-do-i-create-and-import-backups-of-my-standard-notes-data -->

import CanonicalUrl from '../../src/components/CanonicalUrl';

<CanonicalUrl
 canonicalUrl="https://standardnotes.org/help/14/how-do-i-create-and-import-backups-of-my-standard-notes-data"
/>

## How do I create and import backups of my Standard Notes data?

Backups are an important part of the Standard Notes ecosystem, and allow you to keep your data safe and under your possession with full independence from our own circumstances.

Our applications allow you to easily export your data in both encrypted and decrypted formats.

**How to create backups of your data:**

- In the desktop or web application, click **Account**. In the section **Data Backups**, choose your preferred format (encrypted or decrypted), then press **Download Backup**.
  - If you choose the _Encrypted_ option, one file will be downloaded. This file may be imported back into Standard Notes at any time, and contains all your data, like notes, tags, extensions, and preferences.
  - If you choose the _Decrypted_ option, two files will be downloaded. The first is a decrypted backup file that may be imported back into Standard Notes at any time. The other file is a zip file containing only your notes in individual plain text files.
  - The desktop application creates automatic backups every day while it's running. To access these backups, open the desktop application, then click **Backups** in the top-level menu. Choose **Open Backups Location** to access your backups.
- [Daily email backups](./email-backups.md). Email backups are available to [Extended](https://standardnotes.org/extensions) members. When enabled, you will receive an email every day containing the entirety of your encrypted data.
- [Dropbox, Google Drive, and OneDrive backups](./cloud-backups.md). Automatic cloud backups are available to [Extended](https://standardnotes.org/extensions) members. When enabled, encrypted backups files will be automatically stored in your cloud provider of choice every night.
- [Note history](./note-history.md). Revision history for notes is available to [Extended](https://standardnotes.org/extensions) members. Note history tracks changes to your notes, and allows you to restore notes to previous versions.

Now that you safely have backups of your data made at regular intervals, you'll want to know how to recover data from backups if necessary.

**How to recover data from your backups:**

- _(recommended)_ In the desktop or web application, click **Extensions**. In the _Installed Extensions_ section, under _Components_, find **Batch Manager**, and click Open.
  - Click **Backup Explorer** in the upper-right corner.
  - Drag and drop or select your backup file to preview its contents. You can then individually checkmark items you want to recover, and click the green **Recover** button to import your selection into your account. Any recovered items are imported as new items, and will not replace existing data.
- You can import your entire backup file without previewing its contents by clicking **Account** in the lower left corner of the desktop or web application, and then clicking **Import From Backup** in the _Data Backups_ section.
- Use the [offline decryption tool](https://standardnotes.org/offline).
