# About Deploying {#About Deploying}

As stated in the [Introduction](../INDEX.md), assets created in enebular can be deployed to devices.

## Deploying Flows {#Deploying Flows}

Data flows created with the Node-RED based flow editor can be deployed to devices via third party services.

While as shown in the image below it is possible to perform the "Deploy" operation within the flow editor started from enebular, note that the purpose of this is to just save the flow, and when doing this **the flow execution will stop after a few minutes**.

![deploybutton](./../../img/Deploy/Index-deploybutton.png)

To have it run permanantly, it must be deployed to a device using a third party service.

As mentioned in the [Introduction](../INDEX.md), when doing a deploy there are two concepts that should be kept in mind.

- **Device**: The device that will be the execution environment of the asset.
- **Device Master**: The managing role that accepts deploy requests from enebular and then deploys to the device, monitors the device and sends logs on to enebular.

![devices](./../../img/Deploy/Index-devices.png)

For cloud services that deploy to edge devices like AWS IoT and Pelion Device Management, the edge device is the **device** and the cloud service is the **device master**.

If the execution environment exists in the cloud as with Heroku and AWS Lambda, then the cloud service takes on both the **device** and **device master** roles.

### Flow size able to deploy {#Flow size able to deploy}

### enebular-edge-agent {#enebular-edge-agent}

Maximum Size : 5kB

### enebular-agent {#enebular-agent}

Maximum Size : 100kB

### cloud service {#cloud service}

| Target     | Maximum Size |
| ---------- | ------------ |
| Heroku     | 100kB        |
| AWS Lambda | 100kB        |

The actual methods of deploying are as follows. \* When deployment fails, no retry applied.

### Edge {#Edge}

- [Pelion Device Management](./DeployFlow/mbed/index.md)
- [AWS IoT](./DeployFlow/AWSIoT/index.md)

### Cloud {#Cloud}

- [Heroku](./DeployFlow/Heroku/index.md)
- [AWS Lambda](./DeployFlow/Lambda/index.md)

## Deployment result {#DeployResult}

The summary of all previous deployments is displayed inside the asset's `Deploy` tab.
Following information is displayed:

- Target Count
- Status
- Version
- Connection Name
- Deployed By
- Requested Time
- Last Updated Time

The deployment result is displayed under `Status` property and consists of following statuses:

**Types of Status**

| Status     | Description                                        |
| ---------- | -------------------------------------------------- |
| Successful | Asset deployed to all devices is successful        |
| Failed     | Asset deployment to some or all devices is failed  |
| Processing | Asset deployment to some or all devices is ongoing |

Detailed information about each deployment can be displayed by individually clicking on a single Deployment History item.
The Deployment History Detail page provides the following information:

- Device Name
- Deploy Status
- Requested Time
- Status Last Updated Time

Deployment can be repeated with `Redeploy` feature by clicking `Redeploy` button.
An opened dialog allows you to see all Deployment Targets and status of the previous deployment to this device.
You can change selected targets for new Deployment which would be performed after clicking `Redeploy` button inside a dialog.

## Node-RED Compatibility {#NoteNodeREDCompatibility}

### Enabling or disabling a node

enebular v2.25.0 or higher uses Node-RED v1. It brings Node-RED [Enabling or disabling a node](https://nodered.org/docs/user-guide/editor/workspace/nodes#enabling-or-disabling-a-node) feature.
This feature can be used when deploying a flow to the following:

- enebular-agent: 2.15.0 or higher
- Heroku deploy (enebular-agent-heroku): 1.1.2 or higher  
 (enebular-agent-heroku version can be checked as the value of the environment variable AGENT_HEROKU_VERSION of the deploy destination (if this environment variable does not exist, the version of the agent is less than 1.1.2))
- lambda deploy (deployed to Node-RED v1.0.5)

If you deploy a disabled node to an unsupported target, the node will be enabled by default.
