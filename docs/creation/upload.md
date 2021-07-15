---
sidebar_position: 1
id: upload
title: Preparing your model for upload
---

import useBaseUrl from '@docusaurus/useBaseUrl';

In this page, you will learn how to prepare your model for upload to Deploifai.

## Directory structure for your model

The [object detection example](https://github.com/deploifai/examples/tree/main/objectdetection) has the folowing directory structure:

```bash
objectdetection
├── predict.py
├── requirements.txt
├── yolov4.cfg
└── yolov4.weights
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

The archive file must be created by selecting the files inside the `objectdetection` directory and compressing them into a `.zip` file.

After compression, your directory structure should look like this:

```bash
objectdetection
├── Archive.zip
├── predict.py
├── requirements.txt
├── yolov4.cfg
└── yolov4.weights
```

## Upload the ZIP

On the first tab of application creation, you will see the dropbox where you can upload your ZIP file. Drop the `Archive.zip` file inside the dropbox and you can proceed to the next step.

<img alt="Upload page" src={useBaseUrl('/img/docs/Upload.png')} />
