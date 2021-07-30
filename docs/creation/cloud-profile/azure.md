---
sidebar_position: 3
id: azure
title: Azure
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Azure allows the creation of Service Principal which is required by Deploifai.

### Prerequisite

- You need to own an Azure account.
- You need to install azure cli.

On a Mac, using Homebrew:

```shell
brew install azure-cli
```

Login to Azure CLI:

```shell
az login
```

Please complete the prompted login steps.

### Create a Service Principal

Once you have logged in, it is quite simple to create a Service Principal.

```shell
az ad sp create-for-rbac --name "deploifai" --role "Contributor"
```

The output should look like this:

```
Creating 'Contributor' role assignment under scope '/subscriptions/bcc5e76d-938a-451c-9a16-dcfba7296ac6'
{
  "appId": "668ea9c8-bbf9-4a72-9466-b45e5778278e",
  "displayName": "deploifai",
  "name": "668ea9c8-bbf9-4a72-9466-b45e5778278e",
  "password": "******",
  "tenant": "7fc13068-f1c3-4da3-a489-7cc604554908"
}
```

Copy the `subscriptionId` (found in the `/subscriptions/{subscriptionId}` part), the `appId`, the `password`, and the `tenant`.

This is how Deploifai maps these 4 keys in order.

| Azure          | Deploifai       | Description                           |
| -------------- | --------------- | ------------------------------------- |
| subscriptionId | subscription id | Azure Account Subscription ID         |
| tenant         | tenant id       | Azure Account Tenant ID               |
| appId          | client id       | Azure Service Principal Client ID     |
| password       | client secret   | Azure Service Principal Client Secret |

Put these 4 keys somewhere, we will need them later. Here's a sample file:

```
# .env
subscriptionId=
tenantId=
clientId=
clientSecret=
```

### Next Steps

Learn how to add your generated keys to Deploifai [here](./overview.md#add-a-profile-to-deploifai).
