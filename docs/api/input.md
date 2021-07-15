---
id: input
title: Input
sidebar_position: 1
---

This page describes the specs of the input passed to the `predict` method in the `predict.py` file.

## List

This is a list of all the input types that are available in the `/predict` application endpoint.

| Input type          | Description                 | Example usage for the post request body                                            |
| ------------------- | --------------------------- | ---------------------------------------------------------------------------------- |
| `str`               | A string                    | `{"input": "Hello World", "input_type": "str"}`                                    |
| `bytes`             | A byte array                | `{"input": "Hello World", "input_type": "bytes"}`                                  |
| `List[int]`         | A list of integers          | `{"input": [1, 2, 3], "input_type": "List[int]"}`                                  |
| `List[float]`       | A list of floats            | `{"input": [1.0, 2.0, 3.0], "input_type": "List[float]"}`                          |
| `List[str]`         | A list of strings           | `{"input": ["Hello", "World"], "input_type": "List[str]"}`                         |
| `List[bytes]`       | A list of byte arrays       | `{"input": ["Hello", "World"], "input_type": "List[bytes]"}`                       |
| `List[List[int]]`   | A list of lists of integers | `{"input": [[1, 2, 3], [4, 5, 6]], "input_type": "List[List[int]]"}`               |
| `List[List[float]]` | A list of lists of floats   | `{"input": [[1.0, 2.0, 3.0], [4.0, 5.0, 6.0]], "input_type": "List[List[float]]"}` |

## Using inputs in the `predict` method

The `input` of any type is passed directly to the `predict` method.

For example, say a post request is sent like so:

```bash
curl -X POST -H "Content-Type: application/json" \
-d '{"input": "Hello World", "input_type": "str"}' \
http://{appplication_id}.amazonaws.com/predict
```

The `input` will be passed to the `predict` method as a string.

```python
# predict.py
def predict(input):
  print(input) # 'Hello World'

  output = do_something_with_input(input)

  return output
```
