---
slug: future-proofing/
id: future-proofing
title: What happens to my data if Standard Notes disappears?
sidebar_label: Future-Proofing
description: What happens to my data if Standard Notes disappears?
keywords:
  - standard notes
  - docs
  - notes app
  - end-to-end encryption
  - What happens to my data if Standard Notes disappears?
image: /img/logo.png
hide_title: false
hide_table_of_contents: false
---

<!-- Copied from https://standardnotes.org/help/4/what-happens-to-my-data-if-standard-notes-disappears -->

import CanonicalUrl from '../../src/components/CanonicalUrl';

<CanonicalUrl
 canonicalUrl="https://standardnotes.org/help/4/what-happens-to-my-data-if-standard-notes-disappears"
/>

Future-proofing our operation has been foremost on our short list of priorities. Everything we do, from following software principles that optimize longevity to choosing sustainable revenue models, is done in the name of lasting a life-time.

As part of this goal, we also want to plan for the unexpected. If Standard Notes ever goes down for whatever reason, you shouldn't go down with it. We've taken the following steps to make sure your data lasts as long as you do.

1. **Automated backups.** Standard Notes provides [several options](https://standardnotes.org/extensions) for automated backups of your encrypted data, including backups of your data sent to your email inbox daily, and real-time backups synced to your Dropbox and Google Drive. And, as of version 2.0.3 and higher of our desktop application, encrypted backups are automatically created and saved on your local disk. You can access these backups via the "Backups" menu item.
2. **Manual backups.** You can at any time [download a backup](../usage/backups.md) of your entire dataset. Backup files can be either encrypted or decrypted. Encrypted backup files can be decrypted offline with our offline decryption script. They can also be used to re-import back into the application at any time. Decrypted backups are downloaded as a zip file of all your notes, tags, and other data in plain text.
3. **Offline decryption script.** We've created a single page [offline decryption script](https://standardnotes.org/offline) that can be downloaded and run in any browser. In the unlikely event that Standard Notes vanishes without warning, you'll still be able to find and use the offline decryption script.
4. **Most importantly, open-source applications.** All of our applications are open-source, which means that even if the official Standard Notes disappears, others, including yourself, can deploy and run copies of the app and server.

This combination of services and precautions assure that in the event of the unexpected, your data remains safe and sound. More than anything, our goal is making sure you grow old with your notes.
