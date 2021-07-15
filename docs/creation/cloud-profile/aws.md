---
id: aws
title: AWS
---

import useBaseUrl from '@docusaurus/useBaseUrl';

AWS allows creation of IAM credentials for your account. In order to create a cloud profile, you need to create an IAM user with the correct permissions. To simplify things, we create an IAM credential with Admin permissions. The detailed list of permissions will be coming soon.

### Sign in to AWS and go to IAM Management

Login to your AWS console and goto IAM from [here](https://console.aws.amazon.com/iam/home#) or find it in your AWS console by doing a search as below.

<img alt="IAM Dashboard" src={useBaseUrl('/img/docs/iam.png')} />

#### You will be taken to the IAM Management page.

<img alt="IAM Users" src={useBaseUrl('/img/docs/iam_dash.png')} />

Click on `Users` in the IAM resources section. It will take you to the IAM users page with a list of users.

### Create a new user, click on `Add user`

<img alt="Add new user" src={useBaseUrl('/img/docs/iam_new.png')} />

#### Enter the user name, and give Programmatic access to the user.

<img alt="Give programmatic access" src={useBaseUrl('/img/docs/create_iam_user.png')} />

### Attach admin permissions to the user

<img alt="Give admin permissions" src={useBaseUrl('/img/docs/admin_access.png')} />

#### You can skip the tags and click next to Review, and then create user

Once you have created the user, you will go to a confirmation page with the details of the user. Copy the **access keys** and **secret key** to use in Deploifai. Make sure to copy it somewhere safe so that you can access it later.

<img alt="Give admin permissions" src={useBaseUrl('/img/docs/user_creds.png')} />

### Next Steps

Learn how to add your generated keys to Deploifai [here](./overview.md#add-a-profile-to-deploifai).
