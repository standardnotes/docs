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

## How to use FileSafe

To use FileSafe, sign up for [Extended](https://standardnotes.org/extensions), then:

1. In the **Extensions** menu, scroll down to **Components**, then install and activate **FileSafe**.
2. At the bottom of your working note, next to **[Action Bar](./action-bar.md)**, click **FileSafe** to open the FileSafe tab.
3. Under _Integrations_, click **Add New** to authorize each provider that you wish to use. To set up AWS S3, please see the [additional instructions](./filesafe-aws.md).
4. Under _Keys_, click **Create New** to create a new encryption key for your files. These keys are used to encrypt your files before they are uploaded to the cloud providers. You can export these encryption keys and store them in a safe place.
5. At the top of the FileSafe tab, click **Attach File** to add a new file.

## FileSafe with the Bold Editor

If you are using the Bold Editor, then you can embed images and other files stored in FileSafe inside your notes:

1. Store an image with FileSafe as described above.
2. Click the name of your image at the top of the FileSafe component or under _All Files_.
3. Click "Copy Insert Link". The insert link will look something like `[FileSafe:277fd264-391a-42ee-a831-6a3d188eef90:my-image.png]`.
4. Open your note with the Bold Editor.
5. Paste the link into your note. Your image will be embedded into your note.

To resize your image, click the image, click and hold the blue box at the bottom right corner of the image, and drag the box. Release the box when you are happy with the size.

You can insert other files inside your notes with the Bold Editor, but some file types (such as `.pdf` files), will be inserted as [`blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) links rather than actual embedded files. Clicking these links will open the files in a new tab for you to view and download.

Your inserted files will download every time you open your note. If you want to speed up the loading of your notes or reduce the amount of bandwidth (data) that you use, then you can remove the blob links and only download or preview files when you need them by returning to the FileSafe tab.
