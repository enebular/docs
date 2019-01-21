---
lastUpdated: 2019-01-22
---

# Accessing Files From Flows {#Accessing Files From Flows}

Files that have been deployed to a device can be accessed from a flow that has also been deployed to the same device. The following explains how to go about that access.

## File Paths {#File Paths}

The base directory of the file storage location on the device can be referenced in a flow deployed to a device via the `ENEBULAR_ASSETS_DATA_PATH` environment variable.

As files are stored in the **Deploy Directory** directory under the path specified in this environment variable, the full path of the file can be obtained by combining the path in the environment variable, the file's **Deploy Directory** and the file's filename as in the pattern shown below.

```
<ENEBULAR_ASSETS_DATA_PATH>/<Deploy Directory>/<Filename>
```

## Example {#Example}

In this example `hoge` is used for the file's **Deploy Directory** and `hige.txt` is used for the file's filename.

Environment variables can be obtained in a flow by using the **process-env** node type. The node's properties should be configured as shown below.

| Property Name | Description | Content to Specify |
| --- | --- |
| Key | Environment variable name | ENEBULAR_ASSETS_DATA_PATH |

Next, add a **function** type node and enter the JavaScript code as shown below to join the **Deploy Directory** and the filename to the base directory.

```
msg.payload = msg.payload + '/hoge/hige.txt';
return msg;
```

With this, the `payload` of the message from this node can be used as the file's full path in the next node.
