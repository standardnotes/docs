---
slug: on-device-encryption/
id: on-device-encryption
title: How does Standard Notes encrypt data on my device?
sidebar_label: On-Device Encryption
description: How does Standard Notes encrypt data on my device?
keywords:
  - standard notes
  - docs
  - notes app
  - end-to-end encryption
  - How does Standard Notes encrypt data on my device?
image: /img/logo.png
hide_title: false
hide_table_of_contents: false
---

<!-- Copied from https://standardnotes.com/help/79/how-does-standard-notes-encrypt-data-on-my-device -->

import CanonicalUrl from '../../src/components/CanonicalUrl';

<CanonicalUrl
 canonicalUrl="https://standardnotes.com/help/79/how-does-standard-notes-encrypt-data-on-my-device"
/>

Our approach to security is _on by default_, so there are no settings you must proactively configure to attain the most secure experience possible. This page shares an overview of how Standard Notes' encryption scheme works in the context of your device storage, and different scenarios that may yield different configurations.

The following table summarizes the four main encryption configurations available, and their respective approach to key and database storage.

| Configuration                      | Account Keys                                         | Passcode Keys                   | Synced Data                 | Device Database              |
| ---------------------------------- | ---------------------------------------------------- | ------------------------------- | --------------------------- | ---------------------------- |
| **With account and with passcode** | Encrypted with passcode and stored in local database | Ephemeral, never stored to disk | Encrypted with account keys | Encrypted with account keys  |
| **With account but no passcode**   | Stored plainly in secure device keychain             | Not applicable                  | Encrypted with account keys | Encrypted with account keys  |
| **No account but with passcode**   | Not applicable                                       | Ephemeral, never stored to disk | Not applicable              | Encrypted with passcode keys |
| **No account and no passcode**     | Not applicable                                       | Not applicable                  | Not applicable              | Not encrypted                |

## Application Passcode

A passcode is a device-specific secret you can configure that increases the level of protection on your local device. When you add a passcode, a set of keys are generated using the same procedures used to generate your account keys from your account password. Your passcode keys are **never saved** to disk, either in encrypted or unencrypted form, and are generated each time you start the application, and reside in memory until you lock or quit the application.

When you lock or quit the application, all working memory is deleted. When the application is re-opened, it will need to generate your passcode keys in order to decrypt and display your data. To generate your passcode keys, the application will prompt you for your passcode. Without your passcode entered on launch, it is not possible for the application to generate your passcode keys, and thus not possible for it to decrypt your account keys (if applicable) or notes data.

## Mobile (iOS and Android) Specifics

The mobile application provides the ability to customize two additional options not found on desktop and web.

**Biometrics.** Biometrics allow you to configure face or finger scanning to access your locked application. Note that biometrics are a non-cryptographically backed form of protection. This means that adding or removing biometrics does not affect the cryptographic state of your data on disk. Therefore, adding biometrics to the _With account and with passcode_ configuration yields no additional cryptographic benefits, and adding biometrics to the _No account and no passcode_ similarly does not change or add onto its encryption configuration. Instead, biometrics serve as a local-access deterrent to your application. That is, biometrics can protect against nosy co-workers or family members, but not against state-level actors that have your device in their possession. For protection against the latter, only cryptographically-backed mechanisms, such as a passcode or account, can secure access to your data.

**Device Storage Encryption.** For some older mobile devices, decryption performance on application launch can be short of instant, especially if your notes database is particularly large (thousands of notes). For these contexts, the mobile application provides the option to disable Device Storage Encryption (DSE), if it suits the user's threat model. DSE is of course always enabled by default, so most users will not need to worry about this. If however you decide that local device access is not something you’re concerned about, and the application launch decryption performance is not acceptable, you may decide to disable this feature. Disabling this feature will store data in your device database in an unencrypted state. Data sent to the server however still (always) remains encrypted.

## Web Browser Specifics

Unlike the desktop application, web browsers such as Chrome, Safari, and Firefox do not provide a safe keychain storage mechanism. Therefore, when using the web application with configuration _With account but no passcode_, your account keys are stored in your application database in unencrypted form. We recommend adding a passcode to web-application usage to encrypt storage of your account keys. This would make the web application behave identically to the desktop application, in terms of secure storage.

## Linux Specifics

On certain Linux installations, a keychain storage facility may be available but not accessible to the desktop application by default. In this case, you will be asked to grant the application access to this storage facility. If you do not grant access, or no operable keychain storage facility is detectable, your account keys under the _With account but no passcode_ configuration are stored in a similar manner to that of the web application.

## _Stay signed in_

Prior to sign in or registration, you may choose to uncheck the option _Stay signed in_. When this option is unchecked, data is not saved to disk or keychain at all, and instead only lives in temporary memory. This means that when the application is quit or browser window is closed, all local application data is automatically wiped. This option is recommended when using Standard Notes on a public device.
