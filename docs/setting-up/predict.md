---
sidebar_position: 1
id: python-script
title: predict.py
---

## Setting up the Python script for inference

Learn how the Python script `predict.py` is setup for uploading on Deploifai.

### Overview

The python script is the main logic for your inference server. We forward the input coming from the inference endpoint to your python script's `predict` function and use the return value to provide the response.

#### Example

```py
# predict.py
import cv2

def predict(inputs):
  # Do some computation here
  return [1, 2, 3]  # Return a JSON serialisable value

if __name__ == "__main__":
  # Call the script to test it locally
  predict([1, 2, 3])
```

Note that the name of the entry file must be `predict.py` and the function's name must be `predict` since we use that function for execution of your inference server.

### def predict(inputs): The predict function

This is the main entrypoint function for your application.

The function expects one argument, `inputs`, that must be provided in order for the deployment to work. It can be renamed to an arbitrary valid Python variable name.

The `input` field from the HTTP request body will be available as the argument.

```json
// Sample HTTP request body
{
  "input": "Hello world!", // Sent as argument of the predict function
  "input_type": "str" // Used for type checking of the above input
}
```

### Return value

The return value of the predict function is used as the HTTP response for the endpoint.

#### IMPORTANT: The value returned must be JSON serialisable.

The HTTP response from the above Python sample will be as follows:

```json
{
  "output": [1, 2, 3]
}
```
