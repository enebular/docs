# Node-RED {#NodeRed}

## Overview {#Overview}

This section describes Node-RED.

Node-RED runs on enebular-agent.

## Description {#Description}

### Feature {#DescriptionFeature}
Node-RED Feature
* A platform that creates applications by linking functions such as APIs, online services, and devices
* Open source software, works with JavaScript environment (Node.js)

The process flow (program) executed by a device is called a flow.
Also, downloading the created flow to the device is called deployment.
Node-RED of enebular-agent executes the deployed flow on the device (Linux).

### Process {#DescriptionProcess}

Node-RED runs as a Linux process.
* Process name: `node-red`
* Execution user: User specified at installation
 
For more information, see [User / Folder-User](UserFolder.md#DescriptionUser).

### Remarks {#DescriptionRemarks}

Node-RED is installed in the folder specified by `-u` or` --user` and `-d` or` --install-dir` of [Installation procedure-Option](Installation.md#DescriptionOption).
If `-u` or` --user` is specified as <user> and `-d` or` --install-dir` is omitted, it will be installed in the following folder.

```
/home/<user>/enebular-runtime-agent/node-red/
```
For details on Node-RED, refer to [Node-RED (external link)](https://nodered.org/).

The installation destination folder of Node.js is `-u` or` --user` of [Installation procedure-Option](Installation.md#DescriptionOption) or of [Update procedure-Option](Updater.md#DescriptionOption). It is decided by the specification of user and 
<Node.js Version>.
If `-u` or` --user` is specified as <user> during installation, it will be installed in the following folder.
 
```
/home/<user>/nodejs-v<version>/
```

For details on Node.js, refer to [HP of Node.js (external link)](https://nodejs.org/ja/).
