---
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Overview

## Model deployment

Learn how the complete process of deployment works in Deploifai.

### Setup

You have to provide 4 things in order to make a deployment using Deploifai:

1. Model weights and configurations
2. A python function for running a task
3. Requirement files for the python environment

See more details under docs for setting up.

### Upload

Compress your files into a ZIP package and upload into Deploifai application.
<img alt="Application page" src={useBaseUrl('/img/docs/Upload.png')} />

Follow the steps along to connect your cloud profile and deployment configurations.

### Get the inference endpoint

After application deployment, the application page will have information about your inference endpoint, cloud service resource details and a playground for experimenting with your inference server.

<img alt="Application page" src={useBaseUrl('/img/docs/Application.png')} />
