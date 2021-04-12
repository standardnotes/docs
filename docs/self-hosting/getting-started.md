---
slug: getting-started/
id: getting-started
title: Getting Started with Self-hosting
sidebar_label: Getting Started
description: How to get started with self-hosting a Standard Notes syncing server.
keywords:
  - standard notes
  - docs
  - notes app
  - end-to-end encryption
  - self-hosting
  - sync server
image: /img/logo.png
hide_title: false
hide_table_of_contents: false
---

## Syncing Server

We offer free and fast sync for unlimited devices to both free and paid users. If you are interested in hosting your own syncing server, you are welcome to do so. We offer the following options:

:::caution
The docs below are not up-to-date. Please read the [README.md of the syncing-server repository](https://github.com/standardnotes/syncing-server#readme) for the most up-to-date instructions. Please [open an issue](https://github.com/standardnotes/syncing-server/issues) if you have any issues.

The syncing-server is being rewritten in TypeScript. The new syncing-server is not ready for self-hosting, but you can follow its progress [on GitHub](https://github.com/standardnotes/syncing-server-js). When the new server is available for self-hosting, the docs below will be updated.
:::

<!-- - [Docker](./docker.md)-->

- [Heroku](./heroku.md)
- [AWS EC2 and Nginx](./ec2-nginx.md)
- [Raspberry Pi](./raspberry-pi.md)

<!--

### Recommendations

We highly recommend that you use our [official Docker image](https://hub.docker.com/repository/docker/standardnotes/syncing-server) to host your syncing server. Docker containers are isolated software environments that you can control and manage. Our official Docker image is a quick and easy way to get started because all the requirements are prepared and packaged inside the image.

If you are new to Docker, please see the [official Docker documentation](https://docs.docker.com/get-started/) on how to get started.

We recommend that you avoid setting up the syncing server from scratch with Nginx unless you are proficient with Nginx. Setting up the full architecture can be challenging without full knowledge of how the syncing server works.
-->

### Issues

If you have any issues with setting up your syncing server, please [open an issue on GitHub](https://github.com/standardnotes/syncing-server/issues).

## Web application

If you would like to self-host the actual Standard Notes web application, visit the [repository for the web app on GitHub](https://github.com/standardnotes/web).
