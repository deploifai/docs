---
sidebar_position: 2
id: requirements-file
title: requirements.txt
---

## Exporting your project dependencies

The `requirements.txt` file list all the dependencies of your project. You can create a requirements.txt file in your project root directory using the command:

```bash
pip freeze > requirements.txt
```

We use this file to determine which dependencies to install when we run the `pip install` command for your deployment.
