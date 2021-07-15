---
sidebar_position: 1
id: upload
title: Uploading your app
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Directory structure for your app

The [object detection example](https://github.com/deploifai/examples/tree/main/objectdetection) has the folowing directory structure:

```bash
objectdetection
├── predict.py
├── requirements.txt
├── yolov4.cfg
└── yolov4.weights
```

## Compress your application into a ZIP

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

#### IMPORTANT: The `predict.py` and the `requirements.txt` files must be the at root directory of your archive.

## Upload the ZIP

On the first tab of application creation, you will see the dropbox where you can upload your ZIP file. Drop the `Archive.zip` file inside the dropbox and you can proceed to the next step.

<img alt="Upload page" src={useBaseUrl('/img/docs/Upload.png')} />
