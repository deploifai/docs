---
id: existing-project
title: Use Deploifai in an existing project
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Use Deploifai in an Existing Project

In this page you will learn how to use Deploifai in an existing project.

If you just want to see quickly learn how to use Deploifai, please see [this guide](./quickstart) instead.

## Prerequisites

You have to provide 3 things in order to make a deployment using Deploifai:

1. Model weights and configurations
2. A python function for running a task
3. Requirement files for the python environment

## Prepare your model for upload

Your project directory should be structured like this:

```bash
project
├── predict.py
├── requirements.txt
├── other_directories
│   └── ...
├── other_files
```

#### IMPORTANT: The `predict.py` and the `requirements.txt` files must be the at root directory of your archive.

### Configure your weights and config files import method

If you import other files into `predict.py`, please make sure that it is done in this way:

```python
import os

base_directory = os.path.dirname(os.path.realpath(__file__))
model_path = os.path.join(base_directory, "weights.h5")
```

Read more [here](../setting-up/configs).

## Compress your model into a ZIP archive

The archive file must be created by selecting the files inside the `project` directory and compressing them into a `.zip` file.

On unix systems, you can use the `zip` CLI command:

```bash
# outside of the project directory
zip -r -j Archive.zip project
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

Choose a deployment size ranging from **Small** to **Large**.

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
