# User/Folder {#UserFolder}

## Overview {#Overview}

This section describes Linux users and folders used by enebular-agent.

## Description {#Description}

### Description User {#DescriptionUser}

* User
  * You must create a user before installing enebular-agent
  * Specify the created user with `-u` or` --user` in [Installation procedure-option](Installation.md#DescriptionOption)

  If the user is `enebular`, write as follows.
    ```
    -u=enebular
    ```
 In the following explanation, "the user specified during installation" is abbreviated as "the installed user".

 For details on installation options, refer to [Installation procedure-options](Installation.md#DescriptionOption).

* Group
  * The group will have the same name as the created user
  * When creating a user, members who belong to the group are only the created user

* Authority
  * Create a user with general user privileges (other than root privileges)
  * Add sudo permission to the user when executing a command with root permission (such as `sudo`)
  * Flows and files deployed (downloaded) to the device are executed with the following permissions:

|Type|Authority|
|:--|:--|
|Flow|Install User|
|File|Install User|

* Process
The process name and command name (the name displayed by `ps` command) and execution privileges of the process started by enebular-agent are shown in the following table.

|Using AWS IoT|||
|:--|:--|:--|
|Process Name|Command Name|Execution authority|
|enebular-agent|enebular-awsiot-agent|Install User|
|Node-RED|node-red|Install User|

|Using Pelion Device Management|||
|:--|:--|:--|
|Process Name|Command Name|Execution authority|
|enebular-agent|enebular-pelion-agent|Install User|
|Node-RED|node-red|Install User|
|mbed-cloud-connector|enebular-agent-mbed-cloud-connector.elf|Install User|

### Remote Maintenance Login user {#RemoteMaintenanceUser}
During installation the enebular-agent installer automatically creates a user named `enebular-remote-admin` that can execute root commands. This user's password is the one specified with [Installation Instructions-Options](Installation.md#DescriptionOption).

### Folder {#DescriptionFolder}

enebular-agent is installed in the folder specified by `-u` or` --user` and `-d` or` --install-dir` of [Installation procedure-Option](Installation.md#DescriptionOption).
If `-u` or` --user` is specified as <user> and `-d` or` --install-dir` is omitted, it will be installed in the following folder.

```
/home/<user>/enebular-runtime-agent/
```
The folder and file permissions (access rights) created when installed according to the above specification and the main folders and files are described below.

* Installation folder and file permission list

|Type|User permission|Group permission|Other permissions|
|:--|:--|:--|:--|
|Folder|rwx (note 2)|r-x (note 2)|r-x (note 2)|
|File|rw- (note 3)|r-- (note 4)|r-- (note 4)|
|File|rwx (note 5)|r-x (note 6)|r-x (note 6)|

rwx r is read, w is write, x is execute for file, and it is access for folder if it is accessible or not, respectively (Note X) in the above table and (Note X) The pair is the meaning of the following table.

|（NoteＸ）|Type|Permission|Read <br> Yes / No|Write <br> Yes / No|Execution / Access <br> Yes / No|
|:--|:--|:--|:--|:--|:--|
|(note 1)|Folder|rwx|OK|OK|Accessible|
|(note 2)|Folder|r-x|OK|Impossible|Accessible|
|(note 3)|File|rw-|OK|OK|Not possible|
|(note 4)|File|r--|OK|Impossible|Not possible|
|(note 5)|File|rwx|OK|OK|Can run|
|(note 6)|File|r-x|OK|Impossible|Can run|
Note 1: The target is a folder, the user's permission is readable, writable, accessible

* List of folders in which the function related to enebular-agent is installed

|Folder|Description|
|:--|:--|
|/home/<user>/enebular-runtime-agent/agent/|This is the folder where core functions of enebular-agent are installed|
|/home/<user>/enebular-runtime-agent/node-red/|This is the folder where Node-RED is installed (Note 1)|
|/home/<user>/enebular-runtime-agent/ports/awsiot/|A folder in which AWS IoT features are installed|
|/home/<user>/enebular-runtime-agent/ports/pelion/|It is a folder where the function of Pelion Device Management is installed|
|/home/<user>/enebular-runtime-agent/tools/|The folder where the utility tools of enebular-agent are installed <br> The tool for shell script for AWS IoT, Pelion Device Management, enebular-agent installation and update is included.|

* Note 1: For more information, please refer to [Node-RED-Remarks](Node-RED.md#DescriptionRemarks)

* Folder list of keys and certificates or authentication information

|Folder|Description|
|:--|:--|
|/home/<user>/enebular-runtime-agent/ports/awsiot/certs/|A folder where AWS IoT keys and certificates are stored <br> Target file: File with extension "pem"|
|/home/<user>/enebular-runtime-agent/ports/pelion/.pelion-connector/pal/|It is the folder where the authentication information of Pelion Device Management is stored|
+|/home/<user>/enebular-runtime-agent/keys/enebular|This folder stores the signature key used to confirm that a command originated from enebular when executing with root privileges|
+|/home/<user>/enebular-runtime-agent/keys/tmp_private_key|This folder stores the ssh client connection private key that is temporarily saved when Remote Maintenance is executed|
+|/home/<user>/.ssh|This file stores the ssh server connection public key that is temporarily saved when Remote Maintenance is executed|

* Save folder list of deployed flows and files

|Folder|Description|
|:--|:--|
|/home/<user>/enebular-runtime-agent/node-red/.node-red-config/|Folder where deployed flows are stored|
|/home/<user>/enebular-runtime-agent/ports/awsiot/assets/|A folder where AWS IoT deployed files are stored|
|/home/<user>/enebular-runtime-agent/ports/pelion/assets/|The folder where deployed files of Pelion Device Management are saved|

* JavaScript installation folder

|Folder|Description|
|:--|:--|
|/home/<user>/nodejs-v<version>/|The folder where JavaScript execution environment (Node.js) is installed (Note 1) <br> <version>: version of Node.js|

* Note 1: For more information, please refer to [Node-RED-Remarks](Node-RED.md#DescriptionRemarks)
* Linux system folder

|Folder|Description|
|:--|:--|
|/etc/systemd/system/|Folder for files of enebular-agent's Linux service <br> Files to be created: enebular-agent- <user> .service (Note 1)|

* Note 1: For more information, please refer to [Start / Stop-<Service Name> File](StartStop.md#ExampleServiceFile)
