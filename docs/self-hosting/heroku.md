---
slug: heroku/
id: heroku
title: Self-Hosting with Heroku
sidebar_label: Heroku
description: Self-host a Standard Notes sync server with Heroku.
keywords:
  - standard notes
  - docs
  - notes app
  - end-to-end encryption
  - self-host
  - sync server
  - Heroku
image: /img/logo.png
hide_title: false
hide_table_of_contents: false
---

:::caution
The docs below are not up-to-date. Please read the [README.md of the syncing-server repository](https://github.com/standardnotes/syncing-server#readme) for the most up-to-date instructions. Please [open an issue](https://github.com/standardnotes/syncing-server/issues) if you have any issues.

The syncing-server is being rewritten in TypeScript. The new syncing-server is not ready for self-hosting, but you can follow its progress [on GitHub](https://github.com/standardnotes/syncing-server-js). When the new server is available for self-hosting, the docs below will be updated.
:::

## Getting started

1. Configure the Heroku Command Line Interface (CLI) using these steps: [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

1. Deploy the Standard Notes server to your account using the following deploy link: https://heroku.com/deploy?template=https://github.com/standardnotes/syncing-server/tree/master

1. Install a MySQL add-on. Here we'll use the JawsDB add-on: https://elements.heroku.com/addons/jawsdb. If you already have a database, you can skip this step.

1. After installing JawsDB, choose it from the add-ons list in your Heroku dashboard. This will take you to your JawsDB dashboard. You'll need the information found here for the next step.

1. In your Heroku application, choose the "Settings" tab.

1. In the "Config Variables" section, click "Reveal Config Variables".

1. Add 4 new variables:

   | Key           | Description                                                                                                                                   |
   | :------------ | :-------------------------------------------------------------------------------------------------------------------------------------------- |
   | `DB_HOST`     | Use the "Host" value from your JawsDB dashboard.                                                                                              |
   | `DB_DATABASE` | In your JawsDB dashboard, you should see at the top "Connection String". Copy the part after "3306/". That will be the name of your database. |
   | `DB_USERNAME` | Use the "Username" value.                                                                                                                     |
   | `DB_PASSWORD` | Use the "Password" value.                                                                                                                     |

1. Restart your Heroku instance using either the web interface (you'll find this option under "More" in the top right) or using the command line:

   ```bash
   heroku restart --app name_of_app
   ```

1. Perform initial database setup:

   ```bash
   heroku run rake db:migrate --app name_of_app
   ```

1. You're done!

## Using your new server

You can immediately start using your new server by using the Standard Notes app at https://app.standardnotes.org.

In the account menu, choose `Advanced Options` and enter the address of your new server in `Sync Server Domain`.

Then, register for a new account or log into an existing account and begin using your private new secure Standard Notes server!

Note that you should understand the limitations of Heroku's free tier. In particular, your instance will sleep after 30 minutes of idleness, and may take several seconds to start up again on subsequent requests.
