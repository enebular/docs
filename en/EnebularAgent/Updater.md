# Update procedure {#Updater}

## Overview {#Overview}

This manual explains the upgrade procedure of enebular-agent.
Version upgrade is performed by executing a shell script (hereinafter, update script) on the Linux OS of the target device.

There are two connection methods for enebular-agent: connecting to enebular using AWS IoT and connecting to enebular using Pelion Device Management.
Although both procedures are described in this manual, the update script will be upgraded according to the connection method already installed on the device. The following section will be regarding updating of "AWS IoT" or "Pelion Device Management".

## Description {#Description}

### Prerequisites {#Prerequisites}

Check the following items before executing the update data script

* enebular-agent version 2.4.0 or later has been installed
    * Update script can be used with enebular-agent version 2.4.0 or later
* How to connect to enebular: AWS IoT or Pelion Device Management
* When updating enebular-agent running on Raspbian Jessie to version 2.10.0 or later, update to Raspbian Stretch beforehand.（Reference：[Upgrades from Debian 8 (jessie)](https://www.debian.org/releases/stretch/i386/release-notes/ch-upgrading.en.html)）

The confirmation items for each target are described below, but these are the items acquired and prepared at the installation of enebular-agent. This item is not a problem if the installation of enebular-agent is completed, but **※Information** is the information necessary for executing the update script, so please make a note after confirmation.

#### Linux {#PrerequisitesLinux}

* [Debian GNU/Linux](../Other/Support.md#enebular-agent) supported by enebular-agent must be installed
* **※ A user who runs enebular-agent** (Hereinafter, it is assumed that "enebular" is a user who runs enebular-agent)
* The user used for installation has Super User permission (using sudo command)
* Having an internet connection environment

#### [AWS IoT](https://portal.aws.amazon.com)（Prerequisites for AWS IoT）{#PrerequisitesAWSIoT}

* AWS account
    * This account has been granted IAMFullAccess privileges

#### [Pelion Device Management](https://portal.mbedcloud.com) （Prerequisites for Pelion）{#PrerequisitesPelion}

* Pelion Device Management account
* **※Pelion connection mode: developer or factory**
Confirmation method
    * Check the next file with an editor and assess based on the description
```
/home/enebular/enebular-runtime-agent/tools/mbed-cloud-connector/define.txt
```
`add_definitions(-DMBED_CONF_APP_DEVELOPER_MODE=1)`：Pelion Connection mode is developer
`add_definitions(-DMBED_CONF_APP_DEVELOPER_MODE=0)`：Pelion Connection mode is factory

#### [enebular](https://www.enebular.com) {#PrerequisitesEnebular}

* enebular account
* enebular project

#### Install Option {#InstallOption}

* Do not specify `--no-startup-register` as an installation option
If you specify `--no-startup-register`, you can not upgrade using the update script.
Please contact **support@enebular.com** for version upgrade without update script

### Execute update script {#Description1}

The update script can be executed with the following command from shell by logging into Linux of the target device.

```
wget -qO- https://enebular.com/agent-update | sudo -E bash -s -- option1 option2 ・・・
```
 
The directory for executing the above command can be anywhere.
Update scripts are obtained via the Internet from the enebular.com server.

The update script automatically refers to environment variables for the information necessary for version upgrade (how to connect to enebular: AWS IoT or Pelion Device Management, installation destination directory, etc.). This allows you to run the update script in any directory.

The update script can be upgraded regardless of the activation status of the enebular-agent service.

### Option {#Option}

The following table shows the options and option arguments that can be set in the update script, and whether or not they can be omitted.

| Option | Optional Argument | Optional/Not Acceptable | Description |
| :--- | :--- | :--- | :--- |
| --user | --user=* | Impossible | Specify the user to execute enebular-agent |
| --pelion-mode | =[developer, factory]  | Note 1 | For Pelion Device Management only, specify Pelion connection mode (developer, factory) |
| -h, --help | None | OK | Prints help information |

* Indicates any string
= [aaa, bbb] indicates to select either aaa or bbb

* Note 1: Not used for AWS IoT. It can not be omitted for Pelion Device Management.

#### Notes on setting options {#Caution}

Lists the notes on setting options.

* Multiple options can be specified (leave spaces between options)
* Do not put unnecessary single-byte blanks in the option argument

## Example {#Example}

### Update script execution example {#ExampleUpdater}

The following execution update script example is for AWS IoT and Pelion Device Management.

#### Example of command execution for AWS IoT {#ExampleUpdaterAWSIoT}

```
wget -qO- https://enebular.com/agent-Update | sudo -E bash -s -- --user=enebular`
``` 

Options in the above example are explained as follows.

* Linux user is `enebular`
* Other options are omitted

#### Example of command execution for Pelion Device Management {#ExampleUpdaterPelion}

```
wget -qO- https://enebular.com/agent-Update | sudo -E bash -s -- --user=enebular --pelion-mode=factory
```

Options in the above example are explained as follows.

* Linux user is `enebular`
* Pelion connection mode is `factory`
* Other options are omitted

### Example Result {#ExampleResult}

The update process requires enebular-agent to stop before updating.
Once the update is completed enebular-agent will restart.

#### Checking the execution status of enebular-agent {#EnebularAgentCheck}

```
systemctl status enebular-agent-enebular.service
```

You can check the start status (start / stop) of the service of enebular-agent by executing the above command.

```
sudo journalctl -ex -u enebular-agent-enebular.service
```

If the service of enebular-agent is running, you can check the execution status of enebular-agent by executing the above command. 

### Instaling Node.js {#NodejsInstall}

In order to make the required version of Node.js available, download and install Node.js.
