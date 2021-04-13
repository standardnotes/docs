---
slug: services-used/
id: services-used
title: What services does Standard Notes use for daily operation?
sidebar_label: Services Used
description: What services does Standard Notes use for daily operation?
keywords:
  - standard notes
  - docs
  - notes app
  - end-to-end encryption
  - What services does Standard Notes use for daily operation?
image: /img/logo.png
hide_title: false
hide_table_of_contents: false
---

<!-- Copied from https://standardnotes.org/help/52/what-services-does-standard-notes-use-for-daily-operation -->

import CanonicalUrl from '../../src/components/CanonicalUrl';

<CanonicalUrl
 canonicalUrl="https://standardnotes.org/help/52/what-services-does-standard-notes-use-for-daily-operation"
/>

For our cloud servers and databases, we use [Amazon Web Services](https://aws.amazon.com/).

For credit card payment processing, we use [Stripe](https://stripe.com/). For PayPal payments, we use [Braintree/PayPal](https://www.braintreepayments.com/). For anonymous cryptocurrency payments, we use [CoinPayments](https://www.coinpayments.net).

For transactional emails and campaigns, we use Amazon [Simple Email Service](https://aws.amazon.com/ses/). We [do not use Mailchimp](https://blog.standardnotes.org/bye-bye-mailchimp/) or a similar service.

We do not use analytics across our web, desktop, and mobile applications. For our website, we use a self-hosted, privacy-respecting analytics software called [Matomo](https://matomo.org/).

For error reporting on our web, desktop, and mobile applications, we use [Bugsnag](https://www.bugsnag.com/). Bugsnag is non-invasive, and collects only what it needs (see [this article](https://docs.bugsnag.com/platforms/javascript/#sending-diagnostic-data) for web and desktop, and [this article](https://docs.bugsnag.com/platforms/react-native/react-native/automatically-captured-data/) for mobile) to produce helpful error reports that help us maintain application stability.

For server-side error reporting and monitoring, we use [Datadog](https://www.datadoghq.com). We do not collect or store IP addresses as part of our Datadog configuration.

For our [open-source repositories](https://github.com/standardnotes), we use [GitHub](https://github.com). We also use GitHub as our CDN for desktop application downloads.

For Windows application code signing, we use a [Digicert Extended Validation Certificate](https://www.digicert.com/code-signing/ev-code-signing/). For [macOS code signing](https://developer.apple.com/support/code-signing/), we use a verified Apple Developer account. Code signing ensures that the application you download and run has not been modified or tampered with, and does not deviate from the code we produce and ship on our end.

For general email inquiries to [help@standardnotes.org](mailto:help@standardnotes.org), we use Google Workspace. For encrypted support to [standardnotes@protonmail.com](mailto:standardnotes@protonmail.com), we use [Protonmail](https://protonmail.com). Apart from optional Google Drive integration, this marks the only integration point we have with Google. We do not use Google Analytics anywhere in our ecosystem, nor do we use Google's [reCAPTCHA](https://en.wikipedia.org/wiki/ReCAPTCHA) for spam control.

---

This summarizes the list of external services we use in our daily operation.

When it comes to protecting your sensitive, actual data, we're proud to rely on no other entity than the laws of mathematics and cryptography. Your notes are always [encrypted with a secure key](./secure-notes.md) that no one has besides you, and this key never leaves your computer or touches a cloud. Simply put: you are the only person that can [read your private notes](./private-notes.md).
