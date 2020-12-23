---
slug: filesafe/
id: filesafe
title: FileSafe 101
sidebar_label: FileSafe 101
description: What is Standard Notes FileSafe?
keywords:
  - standard notes
  - docs
  - notes app
  - end-to-end encryption
  - filesafe
image: /img/logo.png
hide_title: false
hide_table_of_contents: false
---

<!-- Copied from https://standardnotes.org/help/44/filesafe-101 -->

import CanonicalUrl from '../../src/components/CanonicalUrl';

<CanonicalUrl
 canonicalUrl="https://standardnotes.org/help/44/filesafe-101"
/>

## What is Standard Notes FileSafe?

FileSafe is a platform by Standard Notes that integrates directly with your day-to-day usage of Standard Notes, and serves as an encryption intermediary between you and your favorite cloud provider. When you use FileSafe, you attach files (images, videos, documents, and any other kind of file) to your individual notes. These files are then encrypted by Standard Notes offline (client-side) first, then uploaded in their encrypted form to your Dropbox, Google Drive, or WebDAV compliant server (Nextcloud, ownCloud, Seafile, Synology, and others). This means that the files you upload via Standard Notes to your cloud cannot be peeped on or seen by your cloud provider, thus ensuring that ownership of these files ultimately reside with you (i.e, Google can’t monetize your encrypted files and Dropbox can’t run [user studies](https://hbr.org/2018/07/a-study-of-thousands-of-dropbox-projects-reveals-how-successful-teams-collaborate) on them).

Uploaded files can then be downloaded from the FileSafe interface, where encrypted data is retrieved from your cloud provider, decrypted client-side by the Standard Notes FileSafe extension, and then downloaded to your disk. At no point in this process does unencrypted, plaintext data ever leave the safety of your own computer. With Standard Notes, if it touches a cloud, it’s encrypted.

Because we integrate directly with your cloud provider, we do not instate any storage quotas, other than what may already be instated by your provider. So if you have 1TB of storage available, you’re free to upload as much as you’d like. Note however that due to the browser-based client-side encryption process, individual file uploads are currently limited to 50MB, making it suitable for images, videos, and documents. However, you are free to upload as many 50MB files as you’d like. This limitation is something we hope to improve upon in the future as we explore concepts like file chunking to break apart and encrypt larger files.
