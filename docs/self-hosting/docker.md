---
slug: docker/
id: docker
title: Self-hosting with Docker
sidebar_label: Docker
description: How to self-host a Standard Notes Sync server with Docker.
keywords:
  - standard notes
  - docs
  - notes app
  - end-to-end encryption
  - self-hosting
  - sync server
  - docker
image: /img/logo.png
hide_title: false
hide_table_of_contents: false
---

:::caution
The docs below are not up-to-date. Please read the [README.md of the syncing-server repository](https://github.com/standardnotes/syncing-server#readme) for the most up-to-date instructions. Please [open an issue](https://github.com/standardnotes/syncing-server/issues) if you have any issues.

The syncing-server is being rewritten in TypeScript. The new syncing-server is not ready for self-hosting, but you can follow its progress [on GitHub](https://github.com/standardnotes/syncing-server-js). When the new server is available for self-hosting, the docs below will be updated.
:::

## Introduction

These instructions make the following assumptions:

- You've just finished setting up a Linux server (say, Ubuntu 20.04 64-bit) and have installed [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) on it.
- You've configured your security groups to allow for incoming SSH connections from your local IP.
- You've configured a domain name (or subdomain) to point to your server's IP address.
- You've configured the DNS to enable HTTPS for your domain (say, using Cloudflare).

## Getting started

SSH into your server and follow the steps below:

1. Update your system:

   ```bash
   $ sudo apt-get update
   $ sudo apt-get upgrade
   ```

1. Install `git` and `libmysqlclient-dev`:

   ```bash
   $ sudo apt-get install -y git libmysqlclient-dev
   ```

1. Make sure you are in your home directory and clone the Standard Notes Server [syncing-server](https://github.com/standardnotes/syncing-server) project:

   ```bash
   $ cd ~
   $ git clone --single-branch --branch master https://github.com/standardnotes/syncing-server.git
   $ cd syncing-server
   ```

> **Note:** The `master` branch has the latest, stable code. Use this branch in production environments.

1. Create `.env` file in the project's directory:

   ```bash
   $ cp .env.sample .env
   ```

   Generate the secret key base and paste the output in the `.env` file's `SECRET_KEY_BASE` and `PSEUDO_KEY_PARAMS_KEY` key:

   ```bash
   $ openssl rand -hex 64
   ```

   Also make sure to check the following variables:

   - `DB_PASSWORD` create a password for your database and set it
   - `RAILS_ENV` change this to "production" for production use, otherwise the access token time is very short and forces re-login

   These variables cannot be changed within the docker container once they are set. To change them, the container needs to be removed `docker-compose rm` and rebuilt (see next step). Data might be lost during this process.

1. Simply run:

   ```bash
   $ sudo docker-compose up -d
   ```

   This should load the `syncing-server` on `http://localhost:3000` and MySQL database containers and run the necessary migrations.

1. Test your access to the server locally:

   ```bash
   $ curl {domain name}
   <!doctype html>
   <html>
     ...
     <body>
       <h1> Hi! You're not supposed to be here. </h1>

       <p> You might be looking for the <a href="https://app.standardnotes.org"> Standard Notes Web App</a> or the main <a href="https://standardnotes.org"> Standard Notes Website</a>. </p>

     </body>
   </html>
   ```

1. You're done!

## Using your new server

You can immediately start using your new server by using the Standard Notes app at https://app.standardnotes.org.

In the account menu, choose `Advanced Options` and enter the address of your new server in `Sync Server Domain`.

Then, register for a new account or log into an existing account and begin using your private new secure Standard Notes server!
