---
sidebar_position: 3
id: configs
title: configs
---

## Importing weights for your model

The model weights and other config files are generally used in your `predict.py` file in order to serve inference from your `predict` function.

The config files and other weights must be imported into your `predict.py` file using dynamic methods to resolve the full path of the python file and join with the relative path to the actual file.

```python
# predict.py
import os

base_directory = os.path.dirname(os.path.realpath(__file__))
model_path = os.path.join(base_directory, "weights.h5")

def predict(args):
  ...
```

or, if you have the weights in a different directory

```python
# predict.py
import os

base_directory = os.path.dirname(os.path.realpath(__file__))
model_path = os.path.join(base_directory, "configs", "weights.h5")

def predict(args):
  ...
```

Using similar methods like this is important so that your files can be imported in Deploifai's deployment environment.
