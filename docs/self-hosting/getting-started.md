---
slug: getting-started/
id: getting-started
title: Getting Started with Self-hosting
sidebar_label: Getting Started
description: How to get started with self-hosting Standard Notes Infrastructure.
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

We offer free and fast sync for unlimited devices to both free and paid users. If you are interested in hosting your own syncing server, you are welcome to do so.

## Infrastructure Synopsis

Syncing Server infrastructure consists of a few different microservices that are responsible for different sets of functionality.

In order to make your life easier and not having to set up each of them separately we prepared a [docker-compose setup with accompanying script](./docker.md) that will automate the process for you.

> **Note** In mentioned setup we also provide a running MySQL database and Redis cache node. So you don't have to provision any of those services on your own.

### Recommendations

We highly recommend that you use our Docker setup to host your syncing server. Docker containers are isolated software environments that you can control and manage.

If you are new to Docker, please see the [official Docker documentation](https://docs.docker.com/get-started/) on how to get started.

We recommend that you avoid setting up the syncing server from scratch with Nginx unless you are proficient with Nginx. Setting up the full architecture can be challenging without full knowledge of how the syncing server and it's microservices work.

### Issues

If you have any issues with setting up your syncing server, please [open an issue on GitHub](https://github.com/standardnotes/standalone/issues).

## Web application

If you would like to self-host the actual Standard Notes web application, visit the [repository for the web app on GitHub](https://github.com/standardnotes/web).
