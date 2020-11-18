# AI Models {#AI Models}

**AI Models** is an asset of enebular to deploy Machine learning/Deep learning models on edge devices. Once the model is deployed, one can use the model in a flow. It is also possible to manage (start, stop and delete) the models on the device from enebular.

### Prerequisites {#Prerequisites}

The following things are necessary for using **AI Models** feature of enebular:

1. enebular-agent:
   enebular-agent (version>=2.7.0) needs to be properly configured and running for deploying the AI Models on edge devices.

2. License:
   AI Models is a paid service thus a device with a registered license is necessary.

3. AI project:
   AI project directory with all its files(model files, weight files, data etc) compressed in .zip format.

4. Docker:
   AI Models can deploy and run multiple AI projects on a single device without dependency issues and conflicts. It does so by using docker on device side. Thus, before deploying AI Models, docker needs to be installed on the device. The enebular-agent installer doesn't do the docker installation automatically. This has to be done by the user.
   Docker needs root privileges for running docker containers. Thus, after installing docker, as a post installation step, the user executing enebular-agent must be assigned to a **UNIX group named docker** for giving it root privileges. For more details check [this link](https://docs.docker.com/install/linux/linux-postinstall/).

## Registering AI models {#Registering AI models }

For deploying their Machine learning/Deep learning models on devices users must needs to register their models as an asset under AI Models.

For details on registering new AI models refer to [Registering AI models](RegisteringAiModel.md).

## AI Models Listing {#AI Models Listing}

A list of already registered models can be displayed by selecting **AI Models** from the Asset menu. Selecting an AI model will display the management options which are described below.

## Management options {#Management options}

The following features are available in the AI Model management menu.

### Overview {#Overview}

Overall information related to the registered model can be seen in the overview. For more details on the model related information refer to [Register AI Model](RegisteringAiModel.md).

One can edit the model information from here. It is also possible to deploy the model to devices from here.

For details on deploying AI Models refer to [Deploying AI Models](DeployAiModel.md).

### Version {#Version}

The model's versions can be configured here.

### Deploy {#Deploy}

The models's deployment history is shown here.

It is also possible to deploy the model to devices from here.

### Access {#Access}

The models's access permissions can be configured here.

### Settings {#Settings}

The models's name and description can be changed from here. One can also delete the model from here.

## Device Model Management {#Device Model Management}

Deployed models can be managed on a per device basis.

Selecting **Device List** from the project menu and then selecting a device from the list will display the device's information. From here, it is possible to check the status of and stop/start/delete models deployed to the device by clicking the **Manage Models** button.

## AI Model access from Flows {#AI Model access from Flows}

It is possible to access models deployed to a device from flows which are deployed to same device.

For details on AI Model access from Flows refer to [Accessing AI Model from Flows](AccessAiModelFromFlow.md).
