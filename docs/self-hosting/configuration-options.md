---
slug: configuration-options/
id: configuration-options
title: Configuration options
sidebar_label: Configuration options
description: Manage options for your Standard Notes Standalone Infrastructure.
keywords:
  - standard notes
  - docs
  - notes app
  - end-to-end encryption
  - self-hosting
  - sync server
  - configuration options
image: /img/logo.png
hide_title: false
hide_table_of_contents: false
---

## Disclaimer

After changing any of the environment variables mentioned below you will have to restart the infrastructure in order for the changes to take place. You can do it by typing the following command:

  ```bash
  $ ./server.sh stop && ./server.sh start
  ```


## Environment variables

All configuration options mentioned below are controlled by environment variables located in the `.env` file.

### Disabling new user registrations

1. Set the `DISABLE_USER_REGISTRATION` environment variable to `true` in your `.env` file
