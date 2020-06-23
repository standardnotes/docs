---
id: https-support
title: Securing HTTP traffic of your Sync server
sidebar_label: Securing HTTP traffic of your Sync server
---
### Introduction

These instructions will enable you to secure HTTP traffic of your `syncing-server`, using a reverse proxy with `Nginx`.

#### Pre-requisites

- Your `syncing-server` is running on a `docker` container.
- You've installed `nginx` in your server.
- You've configured a domain name (or subdomain) to point to your server's IP address.

### Getting started

#### Setting up Nginx

1. Disable the default virtual host:

``` bash
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

``` bash
ln -s /etc/nginx/sites-available/syncing-server.conf /etc/nginx/sites-enabled/syncing-server.conf
```

1. Test the `Nginx` configuration with:

``` bash
nginx -t
```

#### Setting up Certbot

Go to [certbot](https://certbot.eff.org/instructions) to get and install your HTTPS certificate.

After completing the above instructions, your Sync server should be HTTPS enabled!