# Remote Maintenance {#RemoteMaintenance}

## Overview {#Overview}

Remote Maintence provides a mechanism to perform maintenance on a device directly via SSH. It allows access to a device in a local network from an outside network via SSH.

The following are required to use Remote Maintenance.

| Name | Description |
| --- | --- |
| Device | The device Remote Maintenace will be performed on. <br/>enebular-agent version 2.9.0 and above |
| PC | To perform an SSH connection with the User's device<br/>An SSH Client must be installed |
| Relay Server | A server that supports a global IP address that can be used as an SSH Server. <br/>Will act as the relay between the PC and the device |

This feature is only supported for paid projects.

## Description {#Description}

### Prerequisites {#DescriptionPrerequisites}

* Device used must have a License registered to it
* Port Number fixed at `22` for the Relay Server
* PC that can talk to the Relay Server via SSH. (Port is set in the UI)
* Public Key enabled for the SSH Server in the Relay Server
  By default it is enabled. Check `/etc/ssh/sshd_config` and make sure the following is set.
  ```
  #PubkeyAuthentication yes
  ```
* The SSH Server in the Relay Server must allow GatewayPorts.
  It is required for the PC to SSH Login to the Device through the Relay Server
  Check `/etc/ssh/sshd_config` and make sure the following is set.
  ```
  GatewayPorts yes
  ```
* The SSH Server in the Relay Server must allow Network Status checks.
  In the case of a Network Error, it is needed to help kill unused/zombie SSH processes.
  Check `/etc/ssh/sshd_config` and make sure the following is set.
  ```
  ClientAliveInterval 30
  ClientAliveCountMax 3
  ```
WARNING: If a change is made to `/etc/ssh/sshd_config`, the SSH Server must be restarted.

### Build Environment {#BuildEnvironment}

#### Generating an SSH Key {#GenerateSSHKey}

Let's create a Key for Remote Maintenance on enebular. Only the Project Owner can create the Key.

1. In the Project page, in the sidebar to the left, click on `Settings`
1. In the `Device Remote Maintenance` section, click on `Create Key Pair`
1. In the modal, click on `Create`
1. Download the 2 keys that appear
* relay-server-&lt;id&gt;.key: Public Key to be used in SSH Server in Relay Server
* device-&lt;id&gt;.key: Private Key to be used when the PC connects to the Device via SSH

#### Setting up the Key in Relay Server {#DeployKeyOnRelayServer}

relay-server-&lt;id&gt;.key needs to be setup in the Relay Server.
The instructions as follows is under the assumption that the Relay Server has a SSH Server installed and that the Relay Server OS is Linux.

1. Login to the Relay Server
1. Copy the relay-server-&lt;id&gt;.key to Home Directory of the user of Remote Maintenance.
1. The Home Directory should have a `.ssh/authorized_keys`. Add the contents of relay-server-&lt;id&gt;.key to the specified file.  
  Example: `cat relay-server-<id>.key >> .ssh/authorized_keys`

The Device will use a Private Key to work with the aforementioned relay-server-&lt;id&gt;.key
Remote Maintenance does not use a password to login the Relay Server. If you do not require a password login, you can disable it from the SSH Server settings.

#### Setting up the Key in your PC {#DeployKeyOnPC}

The last step is to copy device-&lt;id&gt;.key to your PC
The instructions as follows is under the assumption that the PC has a SSH Client installed. The copied key will be used by the SSH Client in your PC. How it is used will be explained in the `Maintenance Procedure`.

### Maintenance Procedure {#MaintenanceProcedure}

Enabling / Disabling Remote Maintenance can only be done by the Project Owner / Admin.

Let's enable Remote Maintenance in enebular.

1. In a Project, in the sidebar to the left, click on `Devices`
1. Select the Connection Name with the Device you want to maintain
1. From the Device List, click on the Device you want to maintain.
1. From the Device Detail, scroll to the Remote Maintenance section and input the following
    * Relay Server Host (Hostname or IP Address)
    * Relay Server Port Number  
    * Relay Server Username  
1. Click on the toggle button to turn ON Remote Maintenance
1. When the Toggle turns green, it means it is ready to perform an SSH Login from your PC.

Next, let's SSH Login from the PC to the Device.
The key to be used in SSH Login is the device-&lt;id&gt;.key downloaded to the PC.
You must set the User as `enebular-remote-admin`
An example command is shown below (Under the assumption that the device-&lt;id&gt;.key is put in the PC Home Directory)

```
ssh -i ~/device-<id>.key enebular-remote-admin@<Relay server host*1> -p <Relay server port number*2>
```
\*1: Relay Server Host (Hostname or IP Address) from Device Detail Page  
\*2: Relay Server Port Number from Device Detail Page

If you are done with the maintenance of the Device, you can click on the toggle to turn it OFF from the Device Detail Page -> Remote Maintenance section.

### ON/OFF History {#CheckOnOffHistory}

When Remote Maintenance is turned ON/OFF, the person who executed the Action and the time it was executed can be viewed in the Action History page.

In the Project page, in the sidebar to the left, click on `Action History`.

The following shows the different Action Types for Remote Maintenance.

* ON: `Start Remote M.`
* OFF: `Stop Remote M.`

The `Triggered By` and `Requested` column shows the person who executed the Action and the time executed.
