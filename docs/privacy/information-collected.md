---
slug: information-collected/
id: information-collected
title: What information does Standard Notes collect about me?
sidebar_label: Information Collected
description: What information does Standard Notes collect about me?
keywords:
  - standard notes
  - docs
  - notes app
  - end-to-end encryption
  - What information does Standard Notes collect about me?
image: /img/logo.png
hide_title: false
hide_table_of_contents: false
---

<!-- Copied from https://standardnotes.org/help/5/what-information-does-standard-notes-collect-about-me -->

import CanonicalUrl from '../../src/components/CanonicalUrl';

<CanonicalUrl
 canonicalUrl="https://standardnotes.org/help/5/what-information-does-standard-notes-collect-about-me"
/>

When you use our web, desktop, or mobile applications, no usage information is collected whatsoever. Apart from error reporting, our applications do not contain analytics software. Please read [_What services does Standard Notes use for daily operation?_](./services-used.md) to learn more about the services we use.

On our guest-facing website only (the site you're reading this on, standardnotes.org), we use a self-hosted, privacy-focused analytics suite known as [Matomo](https://matomo.org/), which anonymizes IP addresses.

When you sign up for a free notes account, an email is required. Upon registration, you will receive 1 welcome email from us. At the bottom of that email, you will have the option to permanently unsubscribe from future emails, or decrease your email level.

You may choose to anonymize your email during registration, however, this is not recommended, as we will not be able to provide you with support on this account.

You may choose to have your [account deleted](../account/delete-account.md). Upon doing so, all information related to your account is permanently deleted from our production database. We maintain 14 day backups of our databases. After the 14 day period, no trace of your information will remain on our system.

When you make a change to a note or other data item using our applications, your data is first encrypted offline on your device using your secure key, then synced to our server. Our server cannot read the contents of the note. It can however read the date the item was created and modified, the content type of the item (whether it is a note or tag), and the user agent used to modify the item (which browser and version, etc; non-personally identifiable; used for debugging).

When you access any of our web services (syncing, website, extensions), your network request goes through our AWS-based firewall. To prevent spamming and abuse, the firewall limits requests per IP address to a set amount over a 5-minute period. This means that IP addresses are necessarily remembered by AWS temporarily up to 5 minutes to determine if an IP is abusive, before resetting this information. Otherwise, IP addresses are never stored in long-term logs.
