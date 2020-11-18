# Private Nodes {#PrivateNodes}

## Overview {#Overview}

`Private node` is an enebular Asset used inside a Flow.
Please refer to [Flows page](../Flows/Introduction.md) for the information about flows. Private Nodes allow us to use user-created nodes without publishing it on [nodered.org](https://flows.nodered.org/).

To use a user-created private node, the private node needs to be created in the project. After the private node is created, you can open the flow in the same project via Web Flow Editor or enebular editor, and the node will be displayed on the palette in the Node-RED screen. Users can create flows using private nodes displayed on the palette. The created flow can also be deployed to and executed on AWS Lambda、Heroku, or devices on which enebular-agent is running. 

User-created private nodes can be published on [Discover](../Discover/index.md) and shared with other users. Other users can use private nodes published on [Discover](../Discover/index.md) after importing them to the project. 

Private nodes are only available for Enterprise Plan projects.

## Creating Private Node {#CreatePrivateNode}

Private nodes are nodes that run in Node-RED. Private nodes are created in a similar way as the regular Node-RED nodes. Please refer to [Node-RED](https://nodered.org/docs/creating-nodes/) to learn more about the process of creating nodes. 

Points that differ from the usual Node-RED node creation are as follows. 

-	Package name (name value in package.json) must start with `enebular-privatenode-contrib-`
-	Private nodes with the same package name cannot be registered in the same project 
-	Package file size must not exceed 2MB 
-	A Node Type with the same name with the private node’s Node Type does not exist in the Node-RED palette 

Execute the following command in the directory containing private node package.json.

```
npm pack
```

`<name>-<version>.tgz` file would be created after command execution (name and version are specified in the `package.json`).

Please refer to [Uploading a Private Node](#Registry) for the uploading process. 

## Management of Private Nodes {#Functions}

You can `upload`, `update` or `delete` private nodes.
The functions are introduced bellow.

### Private Nodes List {#ListScreen}

When you log in to enebular, a list of user projects will be displayed. Select the project, click `Private Nodes` on the side menu to view the private nodes list.

### Uploading a Private Node {#Registry}

To Upload a private node, click the `+` button at the bottom right of the Asset list screen or Private Nodes list screen.
Users can enter the following items.

| Item                   | Description                                                                           |
| ---------------------- | ------------------------------------------------------------------------------------- |
| Private Node File(tgz) | Private node package file.                                                            |
| Name                   | The name of the private node. Used to distinguish private nodes in enebular.          |
| Description            | Description about the private node.                                                   |
| Privilege              | Default privilege. The privilege of the collaborator working for a project will be the default privilege set here. |

### Overview screen {#OverviewScreen}

Click on the private node in the Asset list or Private Nodes list to display Private Node Overview. The following information is displayed.

| Item         | Description                                                      |
| ------------ | ---------------------------------------------------------------- |
| Package Name | Package name of the private node. Package name is the name value set in `package.json` file of the uploaded package file.  |
| Package Version | Package version of the private node. Package version is the version value set in the `package.json` file mentioned above. |
| From | Source of registration of private nodes. There are the following three types: <br/>・upload: Private node registered by uploading to the project <br/>・Discover (free): Free private node imported from Discover <br/>・Discover (Paid): Paid private node imported from Discover
 |
| Filename     | The filename of the uploaded package file.                       |
| Size         | Size of the uploaded package file.                           |

#### Update Button 

Package files can be updated by clicking the `Update` button. To update a package file, the version specified in the `package.json` file must be higher than the registered version. Only private nodes with the source `upload` can be updated. 

#### Publish Button 

Button used to `publish` private nodes on Discover. Only private nodes with the source `upload` can be published.

##### First Publishing

A private node can be published to Discover. Click on the `Publish` button and a dialog will appear for users to input Name, Description, Free / Paid. When Free is selected the node will be published on Discover immediately. If Paid is selected, instead of publishing immediately, Uhuru will contact you to process an agreement for paid publishing.*1 The private node will be published on Discover when the agreement details confirmed. 

If you delete the original private node used for publishing from the project, you would not be able to update that published private node anymore.

*1 Free / Paid selection made at the time of the first publishing cannot be changed in later publishes.

##### Upgrading the Version of a Published Private Node

Please follow the steps below to upgrade the version of a private node that is published on Discover. 

1.	Click the `Update` button and upload the package file of the private node you want to update. 
1.	Click the `Publish` button and input Name and Description. 

Similar to the first publishing, free private nodes will be published on Discover immediately, while publishing a paid private node requires an agreement for which Uhuru will contact the user. The updated private node will be published on Discover when the agreement details confirmed.

#### click to add tag 

By clicking `click to add tag`, you can add tags or refer to tags that have already been added. 

### Access Screen 

Click `Access` at the top of the Overview screen to display the Access screen. This screen allows you to set the access permissions for the private node. 

### Settings Screen 

By clicking `Settings` at the top of the Overview screen the Settings screen will be displayed. 

#### Editing settings 

The following settings of a private node can be changed. 

-	Name: Name of the private node 
-	Description: Description about the private node

#### Deleting 

A private node can be deleted. When a private node is deleted, it becomes unable to create a flow using the private node or deploy a flow that is using the private node. 

A free private node (of which the source of registration is `upload` or `Discover (Free)`) will be deleted immediately. 

A paid private node (of which the source of registration is `Discover (Paid)`) will not be deleted immediately. The agreement entered into with Uhuru to use the paid private node has to be canceled first. After deletion of a private node is attempted, Uhuru’s staff will contact the user to cancel the agreement. The paid private node will be deleted after the agreement is canceled. 

## Creating a Flow Using Private Nodes {#CreateFlow}

Creation of a flow using private nodes can be done in the following environments. 

| Development environment | Version         | Additional information                                                      |
| ----------------------- | --------------- | --------------------------------------------------------------------------- |
| Web Flow Editor         | no restrictions | Editor that starts by clicking on the Edit button on the Flow Overview screen |
| enebular editor         | 1.0.0 or higher | enebular-agent version 2.15.0 or higher is required for remote mode usage           |

The private node will be displayed on the Node-RED palette if the private node is registered in the project to which the flow opened in the above environments belongs.

## Deployment of a Flow Using Private Nodes {#Deploy}

The method of deployment of a flow that contains private nodes is the same as regular flow deployment, but the following restrictions apply depending on the destination of deployment.

| Deploy Target  | Version                                                                        | Additional information                                                                                                                                                                                                                                                                                                       |
| -------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AWS Lambda     | no restrictions                                                                | ー                                                                                                                                                                                                                                                                                                                           |
| Heroku         | created from enebular 2.25.0 or higher (enebular-agent-heroku 1.1.2 or higher) | enebular-agent-heroku version can be checked by the value of the environment variable AGENT_HEROKU_VERSION of the deployment destination. If AGENT_HEROKU_VERSION environment variable does not exist, the Heroku app was created in an environment with enebular versions below 2.25.0. In such a case, a flow embedded with a private node cannot be deployed.  |
| enebular-agent | 2.15.0 or higher                                                               | Licensed devices only devices                                                                                                                                                                                                                                                                                                        |

※ Private nodes cannot be used with enebular-edge-agent

To deploy a flow that contains private nodes to a Heroku app which does not support private nodes, you need to recreate the Heroku app first. Please refer to Create App with [Heroku Button for how to build a Heroku environment](../Deploy/DeployFlow/Heroku/#CreatingAnAppWithTheHerokuButton). You cannot create an app with an already existing name in Heroku, so if you want to use the same name, you need rebuild the Heroku environment after changing the name of the existing app.

Please refer to [Deploying](../Deploy/index.md) for more information about flow deployment。

## Caution About Private Nodes Registered Under enebular Version Below 2.25.5 

Private nodes registered below enebular version 2.25.5 cannot be published on [Discover](../Discover/index.md). Usage state cannot be viewed on [Usage Information](../UsageInformation/index.md) either. 

In case you want to publish on [Discover](../Discover/index.md) a private node registered below enebular 2.25.5 or if you want to see the usage state on [Usage Information](../UsageInformation/index.md), please register the private node as a new node under enebular version 2.26.0 or higher.
