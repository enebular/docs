---
lastUpdated: 2019-01-10
---

# Files {#Files}

With **Files** it's possible to deploy files to devices.

Files are one type of asset, and refer to the following.

- Device executable files
- Configuration files for use on devices
- Other types of files used on devices (like image and video files)

It's possble to, for example, execute shell scripts on a device or add configuration files to a device.

For executable files, it's possible to have the file executed when it is deployed to the device. Additionally, for any type of file, the **Hook** feature can be used to execute other files already deployed.

Only project Owner and Admin users can deploy files. A Collaborator user cannot deploy a file. Allowing only trusted users to deploy files helps prevent the deployment of untrusted files.

The following introduces file asset related functionality.

## File Listing {#File Listing}

A list of registered files can be displayed by selecting **Files** from the project menu. Selecting a file will display the file management options.

| Item | Description |
| --- | --- |
| Files | The file's asset name |
| Type | The asset type |
| Last Updated | The date the asset was last edited |

A new file can be registered by pressing the **+** button at the bottom right of the file list.

## File Registration {#File Registration}

New files can be uploaded and registered.

For details on adding files refer to [Registering Files](RegisterFile.md).

## File Management {#File Management}

The following features are available in the file management menu.

### Overview {#Overview}

Overall information on the registered file can be seen in the overivew.

It's also possible to deploy the file to devices from here.

For details on deploying files refer to [Deploying Files](DeployFile.md).

### Deploy {#Deploy}

The file's deployment history is shown here.

It's also possible to deploy the file to devices from here.

### Access {#Access}

The file's access permissions can be configured here.

### Settings {#Settings}

The file's settings can be changed here.

For details on file settings refer to [File Settings](FileSettings.md).

## Device File Management {#Device File Management}

Deployed files can be managed on a per device basis.

Selecting **Device List** from the project menu and then selecting a device from the list will display the device's information. From here, it's possible to check the status of and delete files deployed to the device by clicking the **Manage Files** button.

## File Access From Flows {#File Access From Flows}

It's possible to access files deployed to a device from flows also deployed to the same device.

For details on file access from flows refer to [Accessing Files From Flows](AccessFileFromFlow.md).
