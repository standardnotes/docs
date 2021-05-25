---
slug: infrastructure-overview/
id: infrastructure-overview
title: Infrastructure Overview
sidebar_label: Infrastructure Overview
description: Standard Notes Infrastructure Overview.
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

## Services

Syncing Server infrastructure consists of a few different microservices that are responsible for different sets of functionality. The mentioned services are:

### Syncing Server JS

Syncing Server JS is a TypeScript implementation of our Syncing Server. This is the core of our business logic that is responsible for all operations on your notes.

### Syncing Server JS Worker

Syncing Server JS Worker is responsible for all the asynchronous tasks related to what Syncing Server JS scope is. If something can be delegate to be done in an async manner, this is the place to put it. It includes for example processing of: email backups, resolving issues with note duplicates, sending notes to extensions server and many more to come.

### Auth

This is the server responsible for all authorization and authentication features. Auth is where all you user data is handled and processed.

### Auth Worker

Similar to Syncing Server JS Worker, Auth Worker is responsible for all asynchronous tasks related to the authentication and authorization domain. For example you will find in here processing of account deletion requests and user's post-registration tasks.

### API Gateway

This is the main "entry point" of the whole architecture. API Gateway serves as a router and proxy to all services which are inacessible directly. All requests from client applications will have to go through API Gateway in order to reach a certain underlying service.

This is the service that will be paired with your reverse proxy for [HTTPS support](./https-support.md)

### DB

MySQL database server. This is where all the data is stored.

### Cache

Redis cache node where all temporary data is persisted for performance optimization and auto-expiring features.

By default in self-host mode Redis is also used as a communication queue between services and their workers.
