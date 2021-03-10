---
id: import-workaround
title: How to import a backup without being signed in
description: Learn how to import a backup through the [web](https://app.standardnotes.org) or [desktop](https://standardnotes.org/download) apps without being signed in
keywords:
  - standard notes
  - docs
  - notes app
  - end-to-end encryption
  - web
  - desktop
  - import backups
  - backups
  - import
  - data
  - account
image: /img/logo.png
hide_title: false
hide_table_of_contents: false
---

We're aware of an issue where importing backups while signed in results in some tags being duplicated and not being assigned to notes, as well as an issue where a significant amount of items are not imported. Fortunately, there is a workaround you can use for now while we work on the fix for this; you will simply need to import the backup while signed out of the app and then sign into an empty account.

**Please Note:** You must use a backup that was exported from the [web](https://app.standardnotes.org/) or desktop app. A backup that was generated as a result of [CloudLink](https://standardnotes.org/help/27/how-do-i-enable-dropbox-google-drive-or-onedrive-backups) being set up might not work.

If you would like to reimport the backup file (that was exported from your old account) into the new account, you'll first need to delete the **new** account by using the [reset tool](https://standardnotes.org/reset/), then register for a new account again using the same email address. The [reset tool](https://standardnotes.org/reset/) ensures that the account is completely empty.

Afterwards, please proceed with the following steps:

1\. Export an encrypted or decrypted backup from the desktop or [web app](https://app.standardnotes.org/), via the **Account** menu, on the bottom left corner of the app, and click **Sign Out** and then click **Clear session data**

2\. Open the the [web app](https://app.standardnotes.org/) or desktop app (again, if necessary)

3\. Open the **Account** menu again, if you find yourself still signed in, switch apps or click **Sign out** and then click **Clear session data** again

4\. Without signing in, click on the **Account** menu and click on **Import Backup** to import your notes' backup file into the app and (if necessary) enter in the required password to decrypt an encrypted backup

5\. Either sign into an existing account (that has been cleared out) or create a new account (for testing purposes and optionally [delete](https://standardnotes.org/reset/) it or the old account later) with the following steps:

a. Click on **Sign In**, enter your account's credentials, and make sure the **Merge Local Data** option is selected before clicking on **Sign In** again

b. Click on **Register**, set a username, password, confirm the password, and make sure the **Merge Local Data** option is selected before clicking on **Register** again

6\. After being signed in, verify that all of your notes, tags, and other items were properly synced to your account
