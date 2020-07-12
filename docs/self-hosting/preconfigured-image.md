---
id: preconfigured-image
title: Preconfigured Image
sidebar_label: Preconfigured Image
description: Set up your Standard Notes Sync server with a preconfigured image.
keywords:
  - standard notes
  - docs
  - notes app
  - end-to-end encryption
  - self-hosting
  - sync server
  - preconfigured image
image: /img/logo.png
hide_title: false
hide_table_of_contents: false
---

:::warning
This is deprecated.
:::

Instead of setting up a server from scratch, you can use our public Amazon Machine Image (AMI), which launches (almost) ready to go with a working Standard Notes server.

This article assumes you have some experience using the AWS console, so it won't go into too much detail about that interface.

You should also have a domain or subdomain you'll be using for the server.

**Important:** This AMI is available only in the US-East N. Virginia region. After launching the image, you will need to update the software to catch up with new releases.

## Launching the instance

1. In the EC2 console, under "Images", select the "AMIs" menu item.

2. In the search bar, change the dropdown to search in "Public images". Then type `AMI ID : ami-4badcd5d` and hit enter.

3. You should see the Standard Notes AMI result in the list. Select the checkbox to the left of it, and press the blue "Launch" button on top.

4. Choose an Instance Type. The minimum you should use is the t2.micro, which has 1 GB memory. Anything less and you'll run into problems.

5. Go through the wizard with the default options. Don't press the blue "Review and Launch" button, as that will skip some steps. When you arrive at the step "Configure Security Group", you need to add 3 rules:

   | Key   | Port | Description            |
   | :---- | :--- | :--------------------- |
   | SSH   | 22   | Source: Choose "My IP" |
   | HTTP  | 80   | Source: Anywhere       |
   | HTTPS | 443  | Source: Anywhere       |

6. Make sure to download your private key at the end.

## Setting up your domain

1. In the EC2 console, choose "Instances", and click on the instance you just launched. Copy its "IPv4 Public IP".

2. Use this IP in your DNS settings for your domain. That is, create an A record in your domain settings that points to that IP address. These instructions differ depending on the host you're using.

## Configuring the server

1. SSH into the server using the IP address you retrieved above:

   ```bash
   ssh -i /path/to/key.pem ec2-user@ipaddress
   ```

1. Start the MySQL server:

   ```bash
   sudo service mysqld start
   ```

   Note that the MySQL server is setup with username `root` and password `root`. Feel free to change this.

1. Edit your nginx config:

   ```bash
   sudo vim /opt/nginx/conf/nginx.conf
   ```

   Replace domain.com in `server_name domain.com;` with your domain or subdomain.

1. Set up a free HTTPS certificate with LetsEncrypt (required)

   ```bash
   /opt/letsencrypt/letsencrypt-auto certonly --standalone --debug
   ```

1. Go back and edit the nginx.conf file:

   In the `server` bracket, uncomment these two lines by removing the `#` symbol.

   ```nginx
   # ssl_certificate /etc/letsencrypt/live/domain.com/fullchain.pem;
   # ssl_certificate_key /etc/letsencrypt/live/domain.com/privkey.pem;
   ```

   **Change domain.com with your domain.**

1. Update code with latest releases:

   ```
   cd ~/syncing-server
   git pull
   bundle install
   bundle exec rails db:migrate RAILS_ENV=production
   ```

1. Start nginx:

   ```bash
   sudo /opt/nginx/sbin/nginx
   ```

And that's it! You should be all set. Use your new server to register using Standard Notes.

## Maintenance

Some tips on maintenance:

1. If you modify your nginx conf file, you need to reload nginx for changes to take effect:

   ```bash
   sudo /opt/nginx/sbin/nginx -s reload
   ```

2. Your HTTPS cert expires after about 3 months. You can renew it by running the LetsEncrypt wizard step from above.

3. You should consider using Amazon RDS for your database instead of a local MySQL server. RDS will take care of backups, and may be more performant.

4. To change which database the Standard Notes app connects to, you can edit the `.env` file in `~/syncing-server/.env`.

This server was created using the instructions available here: [Deploying a private Standard Notes server with Amazon EC2 and Nginx](https://github.com/standardnotes/syncing-server/wiki/Deploying-a-private-Standard-File-server-with-Amazon-EC2-and-Nginx). Consult this guide if you'd like to customize any part of the instance.
