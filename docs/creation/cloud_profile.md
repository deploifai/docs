---
sidebar_position: 2
id: cloud_profile
title: Create a cloud profile
---

import useBaseUrl from '@docusaurus/useBaseUrl';

At the moment, we only support AWS for creating your cloud resources.

## Create a cloud profile for AWS

AWS allows creation of IAM credentials for your account. In order to create a cloud profile, you need to create an IAM user with the correct permissions. To simplify things, we create an IAM credential with Admin permissions. The detailed list of permissions will be coming soon.

### Sign in to AWS and goto IAM Management

Login to your AWS console and goto IAM from [here](https://console.aws.amazon.com/iam/home#) or find it in your AWS console by doing a search as below.

<img alt="IAM Dashboard" src={useBaseUrl('/img/docs/iam.png')} />

#### You will be taken to the IAM Management page.

<img alt="IAM Users" src={useBaseUrl('/img/docs/iam_dash.png')} />

Click on `Users` in the IAM resources section. It will take you to the IAM users page with a list of users.

#### Create a new user, click on Add user:

<img alt="Add new user" src={useBaseUrl('/img/docs/iam_new.png')} />

#### Enter the user name, and give Programmatic access to the user.

<img alt="Give programmatic access" src={useBaseUrl('/img/docs/create_iam_user.png')} />

#### Attach admin permissions to the user and click Next.

<img alt="Give admin permissions" src={useBaseUrl('/img/docs/admin_access.png')} />

#### You can skip the tags and click next to Review, and then create user

Once you have created the user, you will go to a confirmation page with the details of the user. Copy the access keys and secret key to use in Deploifai. Make sure to copy it somewhere safe so that you can access it later.

<img alt="Give admin permissions" src={useBaseUrl('/img/docs/user_creds.png')} />

### Add the profile to Deploifai

To add the profile you created on AWS console, click on the `+` button on the right side of the dropdown menu in the `Choose a cloud profile` section.

It will bring up a dialog box to add a new profile. Select AWS in the dialog box and input the AWS Access Key and Secret Access Key you got from the AWS console.

<img alt="Give admin permissions" src={useBaseUrl('/img/docs/add_profile.png')} />

Click `Create Profile` to add the profile.

Once you have added it, it will be available in the dropdown menu to select the profile.
