---
slug: docker/
id: docker
title: Self-hosting with Docker
sidebar_label: Docker
description: How to self-host a Standard Notes infrastructure with Docker.
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

## Requirements

These instructions make the following assumptions:

- The machine you will be running the infrastructure on has at least 2GB of memory.
- You've just finished setting up a Linux server (say, Ubuntu 20.04 64-bit) and have installed [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) on it.
- Due to mounted volumes we recommend running the setup as a root user. If you wish to run it as non-root user please remember about the [post-installation steps for Linux](https://docs.docker.com/engine/install/linux-postinstall#manage-docker-as-a-non-root-user).
- You've configured your security groups to allow for incoming SSH connections from your local IP.
- You've configured your security groups to allow for incoming TCP connections on port 80 and 443 from at least your local IP.
- You've configured a domain name (or subdomain) to point to your server's IP address.

## Getting started

SSH into your server and follow the steps below:

1. Make sure you are in your home directory and clone the [Standard Notes Standalone Infrastructure](https://github.com/standardnotes/standalone) project:

   ```bash
   $ cd ~
   $ git clone --single-branch --branch main https://github.com/standardnotes/standalone.git
   $ cd standalone
   ```

1. Initialize default configuration files by typing:

   ```bash
   $ ./server.sh setup
   ```

1. Customize your configuration

   In the `.env` file you will find 3 variables that need to be filled in with generated secret keys. The variables are `JWT_SECRET`, `LEGACY_JWT_SECRET`, `AUTH_JWT_SECRET`. You can generate their values using:

   ```bash
   $ openssl rand -hex 32
   ```

   Use the same method to change the value of `ENCRYPTION_SERVER_KEY` in `docker/auth.env` file

  > **Note** Environment variables cannot be changed with effect to take place while the docker containers are running. To change them, server needs to be restarted.

1. (Optional) Customize the port

  By default the syncing server will run on port 3000. If it is the case that you have a different service running on that port you can customize the port on which you want to run the infrastructure on. To do that, edit the `EXPOSED_PORT` variable in the `.env` file.

1. Simply run:

   ```bash
   $ ./server.sh start
   ```

   This should load all the microservices that the infrastructure consists of.

  > **Note** First run might take a while since there are Docker images to be pulled and built and migrations initializing the database to be run.

1. Wait for the infrastructure to bootstrap

   It takes a moment for the infrastructure to bootstrap and all the microservices to start. You can observe the process by typing:

   ```bash
   $ ./server.sh logs
   ```

  > **Note** You can safely escape from logs with CTRL+C

  > **Note** Microservices depend on each other and because of that they are starting sequentially in our setup. In the logs you will most probably observe that one service is waiting for another to start with lines like this: "XYZ is unavailable yet - waiting for it to start" where XYZ is the dependant service name. That is expected.

   Everything should be up and running once you observe that the `API Gateway` service has started by seeing the following line as one of the last ones in logs:

   ```
   api-gateway_1 | {"message":"Server started on port 3000","level":"info"}
   ```

   You can also check the state in which all the services are by typing:

   ```bash
   $ ./server.sh status
   ```

   All of the services should be in `Up` state at this stage.

1. Test your access to the server locally:

   You should be able now to check that the syncing server is running by checking `http://localhost:3000/healthcheck`:

   ```bash
   $ curl http://localhost:3000/healthcheck
   OK
   ```

   > **Note** If you changed the `EXPOSED_PORT` variable you will have to check `http://localhost:{EXPOSED_PORT}/healthcheck`.

1. You're done!

## Securing Your Server

In order to start using your new server with the Standard Notes app at https://app.standardnotes.org you will have to configure an HTTPS reverse proxy.

Unless you already have an HTTP/HTTPS server running that will server as a reversy proxy to the standalone infrastructure, head over to [Securing HTTP traffic of your Sync server](./https-support.md).

## Using your new server

In the account menu, choose `Advanced Options` and enter the address of your new server in `Sync Server Domain`.

Then, register for a new account or log into an existing account and begin using your private new secure Standard Notes server!
