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
Creating 'Contributor' role assignment under scope '/subscriptions/02df22c9-29e1-4eb1-b0de-02580c8f4f67'
{
  "appId": "d8e97820-65c6-4f6a-81ab-34fbb3a92322",
  "displayName": "deploifai",
  "name": "be4c871a-a1b6-45a9-bf2e-fc8599f94c2a",
  "password": "******",
  "tenant": "4778eb9a-ca1b-4b4e-9b8c-506126c3ad99"
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
