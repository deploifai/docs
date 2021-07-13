---
id: quickstart
title: Quickstart
---

In this page, you will learn how to **zip your project** (essentially your directory of models, and scripts), **create an application on Deploifai** and **make requests to your endpoint**. This is intended to be a _hello world_ guide. Our other guides cover how to [set up, and configure your application](./setting-up/predict.md).

## Prerequisities

Open your terminal and use the following command to download the starter project containing a text-based machine learning model, with a python predict script.

```sh
curl -L https://api.github.com/repos/deploifai/examples/tarball/main | \
  tar --strip=1 -xz deploifai-examples-0486075/objectdetection
```

## Zip your project

Use the `zip` CLI to zip the project.

```sh
zip -r -j objectdetection.zip objectdetection
```

The zip file will be uploaded to Deploifai later.

## Create an application

Navigate to your <a href="https://deploif.ai/dashboard" target="_blank">dashboard</a> to create a new application.

Follow the guided steps in the application creation workflow.

Make sure to upload the generated `objectdetection.zip` file.

For our `objectdetection` project, the input type should be `strings(sentences)`.

You can find out more information about various input types soon.

Confirm application creation, and watch the deploy happen!

## Make requests to your endpoint

Once your application has been successfully deployed, you can start sending http requests to the application endpoint.

The endpoint should look something like this:

```
https://models.deploif.ai/{application_id}/predict
```

The `application_id` is an id unique to your application.

Now, it's time to test your endpoint.

Send a post request, and see the response.

```sh
curl -X POST -H "Content-Type: application/json" -d '{"input":"sentence"}' \
  https://models.deploif.ai/{application_id}/predict
```

The response should comeback as an `application/json` content type as well.

Feel free to play around with the `"input"` to get different responses!

## Next steps

This section lists a number of potential next steps you can now take from here. Please feel free to explore these.

TBC.
