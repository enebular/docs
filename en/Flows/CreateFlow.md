---
lastUpdated: 2019-01-08
---

# Create Flows {#Create Flows}

The following covers how to create flows.

First, select a project from the project list and you'll be taken to the project management screen.

![projects](./../../img/Flow/CreateFlow-projects.png)

Open the dialog box with the "+" button on the bottom right.

![plus](./../../img/Flow/CreateFlow-plus.png)

Select "flow" for the asset type in the dialog box.

![asettype](./../../img/Flow/CreateFlow-asettype.png)

After selecting "flow", you'll be able to set the icon, title and access permissions.

![modal](./../../img/Flow/CreateFlow-modal.png)

* Title
    * An appropriate title for the flow
* Description
    * This can be left blank
* Access Permissions
    * superdev
* Category
    * An appropriate category for the flow

![continue](./../../img/Flow/CreateFlow-continue.png)

Once you've completed the settings, click the "Continue" button.

![created](./../../img/Flow/CreateFlow-created.png)

The flow has now been created.

From here, the flow is edited by starting up the flow editor. Please refer to the following example.

- [Milkcocoa Flow](./FlowExampleMilkcocoa.md)


## Restrictions

Web Flow Editor is not an execution environment but a development environment.

The following are restrictions pertained to Web Flow Editor.

* A hardware dependent node cannot be used
* A node that depends on the development environment cannot be used
* A large size node cannot be imported and used
    *  Reloading may be repeated
* The generated URL is temporary
* Some native Node-RED keyboard shortcuts do not function properly
