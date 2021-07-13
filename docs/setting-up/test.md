---
sidebar_position: 4
id: test
title: Test your app
---

## Running the whole pipeline locally

To make sure that your deployment will work, you can setup the `predict.py` script to run the whole pipeline locally.

Make sure you have the following lines to your `predict.py` script:

```python
import os

base_directory = os.path.dirname(os.path.realpath(__file__))
model_path = os.path.join(base_directory, "configs", "weights.h5")

def predict(data):
  # Add logic here
  return "something"


if __name__ == "__main__":
  predict("something")
```

The `if __name__ == "__main__"` block is important, as it allows the script to run locally when the python file is executed. Any local tests can be written to check that your model is working correctly.

Execute the following command to run the script:

```bash
python3 predict.py
```
