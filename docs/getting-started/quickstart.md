---
id: quickstart
title: Quickstart
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

In this page, you will learn how to **zip your project** (essentially your directory of models, and scripts), **create an application on Deploifai** and **make requests to your endpoint**.

This is intended to be a _hello world_ guide. If you want to use Deploifai in an existing project, please see [this guide](./existing-project) instead.

## Prerequisities

Open your terminal and use the following command to download the starter project containing a text-based machine learning model, with a python predict script.

```sh
curl -L https://api.github.com/repos/deploifai/examples/tarball/main | \
  tar --strip=1 -xz deploifai-examples-0486075/goemotions
```

## Zip your project

Use the `zip` CLI to zip the project.

```sh
zip -r -j Archive.zip goemotions
```

The zip file will be uploaded to Deploifai later.

## Create an application

Navigate to your <a href="https://deploif.ai/dashboard" target="_blank">dashboard</a> and create a new application.

Follow the guided steps in the application creation workflow.

### Model upload

On the first tab of application creation, you will see the dropbox where you can upload your ZIP file. Drop the `Archive.zip` file inside the dropbox and you can proceed to the next step.

<img alt="Upload page" src={useBaseUrl('/img/docs/Upload.png')} />

### Cloud profile

**At the moment, we only support deployments on AWS.**

You need to prepare access keys for the chose cloud provider.

Please see [this guide](../creation/cloud-profile/overview.md) to generate the access keys.

### Deployment size

Choose a **Small** deployment size.

<img alt="Deployment size" src={useBaseUrl('/img/docs/deployment_size.png')} />

Confirm application creation, and watch the deploy happen!

**It takes about 10 minutes to automatically deploy your project, so go grab a coffee and come back later!**

## Make requests to your endpoint

Once your application has been successfully deployed, you can start sending http requests to the application endpoint, which can be found on the the application page. This page also contains information about the cloud service resource details, and a playground for experimenting with your inference service.

The endpoint should look something like this:

```
http://{application_id}.amazonaws.com/predict
```

The `application_id` is an id unique to your application.

### Test the endpoint

Now, it's time to test your endpoint.

#### Test with the playground on the application page

Navigate to the application page. And you should see the following.

<img alt="application page" src={useBaseUrl('/img/docs/app_playground.png')} />

Just start sending requests using the playground.

Feel free to play around with the `"input"` to get different responses!

## Delete your application

#### IMPORTANT: As a final step, you should destroy your application because it will be incurring cloud service costs very quickly.

Navigate to the application page, and click on the `Actions` dropdown.

<img alt="Delete app" src={useBaseUrl('/img/docs/delete_app.png')} />

Click `Delete`.

You should grab another cup of coffee and wait for the deletion to finish.

## Next steps

This section lists a number of potential next steps you can now take from here. Please feel free to explore these.

[Setting up a prediction function](./setting-up/predict.md)
