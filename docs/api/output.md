---
id: output
title: Output
sidebar_position: 2
---

This page describes the specs of the output returned by the `predict` method in a `predict.py` file.

## JSON serialisable

Only output that is JSON serializable can be returned by the `predict` method.

#### IMPORTANT: `numpy` scalars are not JSON serialisable.

Please check if libraries like `numpy` are used, because it is likely that the data to be returned may not be JSON serialisable.

They should be converted to regular python scalars if they are not already.
