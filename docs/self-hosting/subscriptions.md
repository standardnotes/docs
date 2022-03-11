---
slug: subscriptions
id: subscriptions
title: Subscriptions on your Standard Notes Standalone Server
sidebar_label: Subscriptions
description: How to add subscriptions on your Standard Notes Standalone Server.
keywords:
  - standard notes
  - docs
  - notes app
  - end-to-end encryption
  - self-hosting
  - updating
  - sync server
  - docker
image: /img/logo.png
hide_title: false
hide_table_of_contents: false
---

## Requirements

To add a subscription to your self-hosted user account, run the following commands:

```bash
docker-compose exec db sh -c 'MYSQL_PWD=$MYSQL_ROOT_PASSWORD mysql $MYSQL_DATABASE'
```

```sql
INSERT INTO user_roles (role_uuid , user_uuid) VALUES ( ( select uuid from roles where name="PRO_USER" order by version desc limit 1 ) ,( select uuid from users where email="<EMAIL@ADDR>" )  ) ON DUPLICATE KEY UPDATE role_uuid = VALUES(`role_uuid`);
```

```sql
insert into user_subscriptions set uuid = UUID() , plan_name="PRO_PLAN" , ends_at = 8640000000000000, created_at = 0 , updated_at = 0,user_uuid= (select uuid from users where email="<EMAIL@ADDR>") , subscription_id=1;
```

## ✨ You Should Know
Building Standard Notes has high costs. If everyone evaded contributing financially, we would no longer be here to continue to build upon and improve these services for you. Please consider [donating](https://standardnotes.com/donate) if you do not plan on purchasing a subscription.