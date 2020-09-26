---
id: raspberry-pi
title: Self-hosting on a Raspberry Pi
sidebar_label: Raspberry Pi
description: How to self-host a Standard Notes Syncing server on a Raspberry Pi.
keywords:
  - standard notes
  - docs
  - notes app
  - end-to-end encryption
  - self-hosting
  - sync server
  - Raspberry Pi
image: /img/logo.png
hide_title: false
hide_table_of_contents: false
---

## Introduction

You can run your own Standard Notes syncing server on a Raspberry Pi using `docker-compose`.

### Requirements

- A Raspberry Pi running Raspbian OS
- Docker (you can install it using the [convenience script](https://docs.docker.com/install/linux/docker-ce/debian/#install-using-the-convenience-script))

## Getting started

1. Install `libffi` and `libssl` dependencies:

   ```
   sudo apt install -y libffi-dev libssl-dev
   ```

2. Install `python3` and `python3-pip`:

   ```
   sudo apt install -y python3 python3-pip
   ```

3. Install `docker-compose`:
   ```
   sudo pip3 install docker-compose
   ```
4. Setup your `.env` file and run:
   ```
   docker-compose -f docker-compose.yml -f docker-compose.raspberry-pi.yml up -d
   ```

\*Tested on a **Raspberry Pi 4 Model B**\*
