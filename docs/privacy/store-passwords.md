---
slug: store-passwords/
id: store-passwords
title: Can I store passwords in Standard Notes?
sidebar_label: Store Passwords
description: Can I store passwords in Standard Notes?
keywords:
  - standard notes
  - docs
  - notes app
  - end-to-end encryption
  - Can I store passwords in Standard Notes?
image: /img/logo.png
hide_title: false
hide_table_of_contents: false
---

<!-- Copied from https://standardnotes.org/help/34/can-i-store-passwords-in-standard-notes
 -->

import CanonicalUrl from '../../src/components/CanonicalUrl';

<CanonicalUrl
 canonicalUrl="https://standardnotes.org/help/34/can-i-store-passwords-in-standard-notes"
/>

Standard Notes uses stronger encryption technology than industry-leading password managers. In most cases, leading password managers use PBKDF2 for key derivation and AES-256 for encryption. Standard Notes uses post-PBKDF2 Argon2 for key derivation and post-AES XChaCha20-Poly1305 for encryption. This means that Standard Notes makes for an excellent place to store passwords, keys, and other secretive credentials.

In addition, two-factor authentication enabled on your account can lead to even higher levels of security than offered by typical password managers.

---

**Related reading:**

- [How does Standard Notes secure my notes?](./secure-notes.md)
- [How does Standard Notes encrypt data on my device?](./on-device-encryption.md)
- [How do I enable two-factor authentication for my account?](../usage/2fa.md)
