# Developer Mode {#DeveloperMode}

## Overview {#Overview}

This section describes developer mode of enebular-agent.

Developer mode is one of enebular-agent's startup modes, and it is a mode in which enebular editor can directly edit enebular-agent flow.

## Description {#Description}

### Mode {#DescriptionMode}

There are two kinds of startup modes of enebular-agent, normal mode and developer mode.
The difference between the two is the mode of enebular editor to create flow.

There are two modes in the enebular editor: Desktop and Remote.
Desktop (desktop mode) is used to edit the flow when Node support is limited to PC and browser API.
Remote (remote mode) is used to edit the flow using device dependent Node such as Raspberry Pi's sensor node.

If you start the startup mode of enebular-agent in normal mode, desktop mode can be used in enebular editor,
When started in developer mode, remote mode can be used in enebular editor.
The following table shows the relationship.

| enebular-agent mode | enebular editor mode |
| :------------------ | :------------------- |
| normal mode         | desktop mode         |
| developer mode      | remote mode          |

For details on editing the flow in remote mode, refer to [Load flow in remote mode](../EnebularEditor/RemoteMode.md).

### Startup Behavior {#DescriptionStartupBehavior}

When Linux starts up, the enebular-agent starts up in the installed boot mode.

If the startup mode is installed in developer mode (option `--dev-mode` specified), enebular-agent is started in developer mode.
If the boot mode is installed in normal mode (option `--dev-mode` is omitted), enebular-agent is started in normal mode.
Note: The option `--no-startup-register` is described as being omitted.

We recommend normal mode for the boot mode specified during installation.
(Always using it in developer mode increases the security risk)

For details on the process, refer to [User / Folder-User](UserFolder.md#DescriptionUser).
For details on installation options, refer to [Installation procedure-Options](Installation.md#DescriptionOption).

## Example {#Example}

### Example Settings {#ExampleSetting}

The method of setting the boot mode is shown separately for installation and operation.

#### Example Settings Install {#ExampleSettingInstall}

At the time of installation, the startup mode is specified by `--dev-mode` in [Installation procedure-Option](Installation.md#DescriptionOption).
When `--dev-mode` is specified, the developer mode is selected, and when the default is set, the normal mode is selected.

When using the developer mode, it is recommended to set the startup mode at installation to normal mode and change the startup mode to the developer mode by command at the time of operation.

#### Example Setting Operation {#ExampleSettingOperation}

It is also possible to change the start mode with a command during operation.

The procedure as follows, stop the service of enebular-agent, execute enebular-agent specifying the start mode, and start the service of enebular-agent.

The following shows the procedure for changing the startup mode when `-u` or` --user` is specified as <user> and `-d` or` --install-dir` is omitted.

#### 【in case Node.js version in the system is different from the required】setting the `PATH` environmental variable

To launch enebular-agent, Node.js version prepared by the installer is required.

In an environment where Node.js is installed by default, such as Raspberry Pi OS, first set the `PATH` environmental variable so that enebular-agent can start by using Node.js prepared by the installer according to the following procedure.


##### enebular-agent v2.15.0 or higher

```
PATH=/home/<user>/nodejs-v12.18.1/bin:$PATH
export PATH
```

##### enebular-agent v2.10.0 or higher

```
PATH=/home/<user>/nodejs-v12.14.0/bin:$PATH
export PATH
```

##### enebular-agent 2.9.x or lower

```
PATH=/home/<user>/nodejs-v9.2.1/bin:$PATH
export PATH
```

After completing the setting, start enebular-agent using one of the following methods.

##### AWS IoT, start mode = developer mode

```
sudo systemctl stop enebular-agent-<user>.service
/home/<user>/enebular-runtime-agent/ports/awsiot/bin/enebular-awsiot-agent --dev-mode
```

##### AWS IoT, start mode = normal

```
sudo systemctl stop enebular-agent-<user>.service
/home/<user>/enebular-runtime-agent/ports/awsiot/bin/enebular-awsiot-agent
```

##### Pelion Device Management, start mode = developer mode

```
sudo systemctl stop enebular-agent-<user>.service
/home/<user>/enebular-runtime-agent/ports/pelion/bin/enebular-pelion-agent --dev-mode
```

##### Pelion Device Management, start mode = normal mode

```
sudo systemctl stop enebular-agent-<user>.service
/home/<user>/enebular-runtime-agent/ports/pelion/bin/enebular-pelion-agent
```

Note that the start mode set here is valid only for the enebular-agent that has just been run,
When Linux is restarted, the enemy-agent is started in the boot mode specified during installation.
