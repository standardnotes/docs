---
slug: secure-notes/
id: secure-notes
title: How does Standard Notes secure my notes?
sidebar_label: Secure Notes
description: How does Standard Notes secure my notes?
keywords:
  - standard notes
  - docs
  - notes app
  - end-to-end encryption
  - How does Standard Notes secure my notes?
image: /img/logo.png
hide_title: false
hide_table_of_contents: false
---

<!-- Copied from https://standardnotes.com/help/3/how-does-standard-notes-secure-my-notes -->

import CanonicalUrl from '../../src/components/CanonicalUrl';

<CanonicalUrl
 canonicalUrl="https://standardnotes.com/help/3/how-does-standard-notes-secure-my-notes"
/>

All your notes, tags, and other data generated using the Standard Notes applications are encrypted using XChaCha20-Poly1305, one of the strongest forms of encryption available (recommended by leading technology companies like Cloudflare and Google as a replacement to AES-256).

Your data is encrypted using keys generated from your password. When you choose your account password during registration, we use a password-stretching algorithm called Argon2 to strengthen your password and generate the necessary keys. When you use Argon2 with a strong password, your encryption keys become impossible to guess, even with a network of supercomputers.

When you make a change to a note, the note is encrypted using your secret keys. Your encrypted data is also automatically "signed". Upon decryption, this signature is validated to ensure that no one, including us, has tampered with your data.

The entirety of the encryption and decryption process happens completely offline and in the safety of your own private device. Once it is encrypted, it is synced to your private notes account over a secure, encrypted connection.

Data stored in your private notes account is completely encrypted and un-decipherable without your encryption key. Even if an attacker or prying eyes got a hold of your encrypted data, it would be gibberish to them without your encryption keys. It also not possible to "brute-force" this data, as attempting to guess the key behind the encryption would take many thousand (or even million) years, even with a network of supercomputers.

Finally, it's important to measure security claims beyond face value. Far too many applications and companies claim to protect your data but do not publish source code or security audit results, leaving you to take it on blind faith that your data is safe. Instead, one should look to published third-party security audits of applications who also maintain an open-source repository so that anyone can inspect the code. We're proud to be an [open-source notes application](https://github.com/standardnotes/web) with several completed [third-party security audits](./security-audit.md).

Learn more about our on-device encryption mechanisms: [How does Standard Notes encrypt data on my device?](./on-device-encryption.md)

You can also learn more about the other ways we secure your notes by reading our [Privacy Manifesto](privacy).
