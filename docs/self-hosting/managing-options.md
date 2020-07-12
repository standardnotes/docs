---
id: managing-options
title: Managing options
sidebar_label: Managing options
description: Manage options for your Standard Notes Sync server.
keywords:
  - standard notes
  - docs
  - notes app
  - end-to-end encryption
  - self-hosting
  - sync server
  - managing options
image: /img/logo.png
hide_title: false
hide_table_of_contents: false
---

## Disable new user registrations

1. Set the `DISABLE_USER_REGISTRATION` environment variable to `true`
1. Restart the `syncing-server`

## Admin API

### Authenticating requests

1. Set the `ADMIN_IPS` environment variable with a list of IPs of the authorized machines that can access the Admin API.
1. Set the `ADMIN_KEY` environment variable. This should be a secret key only known by you.

### Usage

To use the API, just make a request from an authorized IP address defined in the `ADMIN_IPS` list. You also need to pass the `ADMIN_KEY` value in every request into the `admin_key` parameter.

Example:

```
POST /admin/delete_account?admin_key=theadminkey&email=the-email@domain.com
Host: your-self-hosted-syncing-server.com
```

### Available actions

Below is a list of endpoints that are available withing the Admin API:

| Method | URL                   | Params    | Description                                   | Successful response code |
| ------ | --------------------- | --------- | --------------------------------------------- | ------------------------ |
| `POST` | /admin/delete_account | **email** | Deletes an account with the specified `email` | `200`                    |
