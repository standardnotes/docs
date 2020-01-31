---
id: docker
title: Self Hosting with Docker
sidebar_label: Self Hosting with Docker
---
These instructions make the following assumptions:
- You've just finished setting up a Linux server (say, Ubuntu 16.04 64-bit) and have installed Docker on it.
- You've configured your security groups to allow for incoming SSH connections from your local IP.
- You've configured a domain name (or subdomain) to point to your server's IP address.
- You've configured the DNS to enable HTTPS for your domain (say, using Cloudflare).

### Getting started

1. SSH into your new server:

    ``` bash
    $ ssh -l {user} {IP to the server}
    ```

2. Update your system:

    ``` bash
    $ sudo apt-get update
    $ sudo apt-get upgrade
    ```

3. Install Git:

    ``` bash
    $ sudo apt-get update
    $ sudo apt-get install -y git
    ```

4. Make sure you are in your home directory and clone the Standard Notes Server [syncing-server](https://github.com/standardnotes/syncing-server) project:

    ``` bash
    $ cd ~
    $ git clone https://github.com/standardnotes/syncing-server.git
    $ cd syncing-server
    ```

5. Create `.env.production` file in the project's directory:

    ``` bash
    $ cp env.sample .env.production
    ```

    Generate the `SECRET_KEY_BASE` with:
    ```bash
    $ bundle exec rake secret
    ```

6. Simply run:

    ``` bash
    $ docker-compose up -d
    ```
    This should load the `syncing-server` and MySQL database containers and run the necessary migrations.

7. Test your access to the server locally:

    ``` bash
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

8. You're done!

### Using your new server

You can immediately start using your new server by using the Standard Notes app at https://app.standardnotes.org.

In the account menu, choose `Advanced Options` when signing in to specify your server.

Then, register for a new account, and begin using your private new secure Standard Notes server!
