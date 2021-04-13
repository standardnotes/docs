---
slug: https-support/
id: https-support
title: Securing HTTP traffic of your Sync server
sidebar_label: Securing HTTP traffic of your Sync server
description: How to secure HTTP traffic of your Standard Notes Sync server.
keywords:
  - standard notes
  - docs
  - notes app
  - end-to-end encryption
  - self-hosting
  - sync server
  - secure http traffic
image: /img/logo.png
hide_title: false
hide_table_of_contents: false
---

:::caution
The docs below are not up-to-date. Please read the [README.md of the syncing-server repository](https://github.com/standardnotes/syncing-server#readme) for the most up-to-date instructions. Please [open an issue](https://github.com/standardnotes/syncing-server/issues) if you have any issues.
:::

### Introduction

These instructions will enable you to secure HTTP traffic of your `syncing-server`, using a reverse proxy with `Nginx`.

#### Pre-requisites

- Your `syncing-server` is running on a `docker` container.
- You've installed `nginx` in your server.
- You've configured a domain name (or subdomain) to point to your server's IP address.

### Getting started

#### Setting up Nginx

1. Disable the default virtual host:

```bash
unlink /etc/nginx/sites-enabled/default
```

1. Create a new file named `syncing-server.conf` within `/etc/nginx/sites-available`:

```
server {
    listen 80;
    listen [::]:80;
    server_name yourdomain.com;

    access_log /var/log/nginx/syncing-server-access.log;
    error_log /var/log/nginx/syncing-server-error.log;

    location / {
        proxy_pass http://127.0.0.1:3000; # syncing-server address
    }
}
```

Replace `yourdomain.com` with your actual domain.

Also, adjust the following line if necessary:

```
proxy_pass http://127.0.0.1:3000
```

1. Enable your new site:

```bash
ln -s /etc/nginx/sites-available/syncing-server.conf /etc/nginx/sites-enabled/syncing-server.conf
```

1. Test the `Nginx` configuration with:

```bash
nginx -t
```

#### Setting up Certbot

Go to [certbot](https://certbot.eff.org/instructions) to get and install your HTTPS certificate.

After completing the above instructions, your Sync server should be HTTPS enabled!
