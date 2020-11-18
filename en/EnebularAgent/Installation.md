# Installation {#Installation}

## Overview {#Overview}

This manual explains the installation procedure of enebular-agent.

There are two connection methods for enebular-agent: connecting to enebular using AWS IoT and connecting to enebular using Pelion Device Management. Although this manual explains both installation procedures, only one of them can be installed on one device at any time.
Installation is performed by executing a shell script on the Linux OS of the target device.

## Description {#Description}

### Prerequisites {#Prerequisites}

The prerequisites executing the installation script are as follows.

#### Linux {#PrerequisitesLinux}

* [Debian GNU/Linux](../Other/Support.md#enebular-agent) supported by enebular-agent must be installed
* A user has been created to execute enebular-agent (hereinafter described on the assumption that the "enebular" user has been created)
* The user installing has Super User permission (using sudo command)
* Having an internet connection environment

#### [AWS IoT](https://portal.aws.amazon.com)（For AWS IoT）{#PrerequisitesAWSIoT}

* AWS account has been created
    * This account has been granted AWSIoTConfigAccess privileges
* AWS Access Key Id (AWSAccessKeyId) used to install enebular
* AWS Secret Access Key (AWSSecretKey) used to install enebular

#### [Pelion Device Management](https://portal.mbedcloud.com) （For Pelion Device Management）{#PrerequisitesPelion}

* Create an account for Pelion Device Management
* The API Key of Pelion Device Management used to install enebular
* When installing in factory mode, acquire authentication information (device bundle) for factory
    * Contact **support@enebular.com** for details on creating device bundles

#### [enebular](https://www.enebular.com) {#PrerequisitesEnebular}

* An enebular account
* A project in enebular

### Execute installation script {#Description1}

The installation script can be executed with the following command from shell by logging in to the target device Linux.

```
wget -qO- https://enebular.com/agent-install | sudo -E bash -s -- option1 option2 ・・・
```

The directory for executing the above command can be anywhere.
The installation script is obtained via the Internet from the enebular.com server.
  
The installation directory is specified by the installation script option. 
Therefore, you can run the installation script in any directory.

### Option {#Option}

The following table shows the options and option arguments that can be set in the installation script.

| Option | Optional argument | Description |
| :--- | :--- | :--- |
| -p or --port | -p=[awsiot, pelion] | Specify whether to use in conjunction with AWS IoT (awsiot) or to use in conjunction with Pelion Device Management (pelion) |
| -u or --user | -u=* | Specify a Linux username (Note 1)  |
| -d or --install-dir | -d=path | Specify the installation directory on Linux (Note 2) |
| -v or --release-version | -v=* | Specifies the version of enebular-agent |
| --no-startup-register | None | Specify whether to enable or disable automatic start of enebular-agent (Note 3) |
| --aws-access-key-id | =* | AWS Access Key Specify ID |
| --aws-secret-access-key | =* | Specify your AWS Secret Access Key |
| --aws-iot-region | =* | Specify the AWS IoT Region |
| --aws-iot-thing-name | =* | Specify the name of the AWS IoT thing |
| --mbed-cloud-mode | =[developer, factory] | Specify the Pelion connection mode (developer, factory) |
| --mbed-cloud-dev-cred | =* | When the connection mode of Pelion is set to developer, specify the authentication information file path  (Note 4) |
| --mbed-cloud-pal | =* | When Pelion connection mode is set to factory, specify the path of authentication information (pal directory) (Note 4) (Note 5) |
| --mbed-cloud-bundle | =* | When Pelion connection mode is set to factory, specify the path of authentication information (bundle file) (Note 4) (Note 5) |
| --dev-mode | None | Specify the start mode (Developer mode, Normal mode) when enabling automatic start of enebular-agent |
| --remote-maintenance-user-password | =* | Specify the password of the Remote Maintenance login user |

* Indicates any string
=[aaa, bbb] Indicates to choose either aaa or bbb

* Note 1: enebular-agent is installed and executed by the user specified here
* Note 2: If the specified directory does not exist, it will be created
* Note 3: The automatic start of enebular-agent is realized by making Linux service
* Note 4: Specify the path of the file where the authentication information is placed. This path is recommended to use temporary storage area which is not saved after reboot
* Note 5: Please contact **support@enebular.com** for information on how to create authentication information for factory mode

**Reference: About the name of option "mbed-cloud"**

* Pelion Device Management has been available since August 2018
* Because this script file was created before that, it remains with the original name "mbed cloud" of Pelion Device Management

#### Option Details {#OptionAwsPelion}

The following table shows the needs of each option for AWS IoT and Pelion Device Management.


| option | AWS IoT setting items | Pelion Device Management setting items | Setting contents when option is omitted |
| :--- | :--- | :--- | :--- |
| -p or --port | Optional  | Required (pelion) | awsiot |
| -u or --user  | Required (User registered user name)| Required (User registered user name)  | enebular (Note １) |
| -d or --install-dir  | Optional | Optional | /home/<`user`>/enebular-runtime-agent  |
| -v or --release-version | Optional  | Optional  | The latest release (Latest release)  |
| --no-startup-register | Omission recommendation  | Omission recommendation | Enable auto Launch of enebular-agent |
| --aws-access-key-id | Required  | Unnecessary | Cannot omit |
| --aws-secret-access-key | Required | Unnecessary | Cannot omit |
| --aws-iot-region | Required | Unnecessary | Cannot omit | 
| --aws-iot-thing-name | Required  | Unnecessary  | Cannot omit |
| --mbed-cloud-mode | Unnecessary | Required (factory)   | developer (Note ２) |
| --mbed-cloud-dev-cred | Unnecessary | Unnecessary | Cannot omit |
| --mbed-cloud-pal | Unnecessary | Required (Not required if --mbed-cloud-bundle is specified) | Cannot omit |
| --mbed-cloud-bundle | Unnecessary | Required (Not required if --mbed-cloud-pal is specified) | Cannot omit |
| --dev-mode | Optional | Optional | Start enebular-agent in "Normal mode" (Note 3) |
| --remote-maintenance-user-password | Optional | Optional | enebular |

* Note 1: Please use the registered user name under Linux. If you use a user name that has not been registered, the directory files required for this system will be created on Linux, but additional work is required to enable login.
* Note 2: Recommended connection mode of Pelion is "factory". If you use "developer", please contact **support@enebular.com**
* Note 3: We recommend "normal mode" at the time of the first installation of enebular-agent's startup mode

#### Notes on setting options {#Caution}

Lists of notes on setting options.

* Multiple options can be specified (Keep spaces/blacks between options)
* Do not put unnecessary single-byte blanks in the option argument
* -d(--install-dir) Specify with full path when specifying option (example: -d=/home/enebular/enebular-runtime-agent）

If you do not specify an option when executing the command, "Default settings for option" is set.

```
wget -qO- https://enebular.com/agent-install | sudo -E bash -s
``` 

If -p -u -d is not specified as in the above example, it will be set as follows.

* Connect with enebular using AWS IoT
* enebular-agent runs as the enebular user
* The installation directory will be `/home/enebular/enebular-runtime-agent`

## Example {#Example}

### Install Example {#ExampleInstall}

The execution example of the installation script is divided into AWS IoT and Pelion Device Management.

#### Example of command execution for AWS IoT {#ExampleInstallAWSIoT}

```
wget -qO- https://enebular.com/agent-install | sudo -E bash -s -- --aws-iot-thing-name=enebular-agent-test --aws-access-key-id=AKIAJWWCHDEPQJD456PQ --aws-secret-access-key=6qtl9JJ90ue5CMeHSJKm1I4iRRwKOQKLCpzt9Y94 --aws-iot-region=us-west-2`
```

Explanation of the options in the above example is as follows.

* Linux users `enebular` (default value is applied to omit option)
* AWS Access Key ID is `AKIAJWWCHDEPQJD456PQ`
* AWS Secret Access Key is `6qtl9JJ90ue5CMeHSJKm1I4iRRwKOQKLCpzt9Y94`
* AWS IoT region `us-west-2`
* Name of the AWS IoT thing `enebular-agent-test`
* Other options are omitted

Note: The AWS Access Key ID and AWS Secret Access Key values ​​listed here are just examples, so executing a command using this value will not complete successfully.

**Example of Command Execution for Installing to Raspberry Pi**

It is recommended to use `pi` for the user name when installing enebular-agent to Raspberry Pi.

```
wget -qO- https://enebular.com/agent-install | sudo -E bash -s -- --aws-iot-thing-name=enebular-agent-test --aws-access-key-id=AKIAJWWCHDEPQJD456PQ --aws-secret-access-key=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 --aws-iot-region=us-west-2 --user=pi
```

The `pi` user, which is the default user on Raspbian, belongs to the groups which can access peripherals such as GPIO and I2C.
By installing with the user name set to `pi`, it's possible to avoid needing to configure access permissions when using peripherals from enebular-agent.
If installing with a user name other than `pi`, as the user doesn't belong to the groups which can access peripherals, the required access permissions for the peripherals will need to be granted as required.

#### Command execution example for Pelion Device Management {#ExampleInstallPelion}

```
wget -qO- https://enebular.com/agent-install | sudo -E bash -s -- -p=pelion --mbed-cloud-mode=factory --mbed-cloud-pal=/tmp/pelion/pal --mbed-cloud-build-fcc
```

Explanation of the options in the above example is as follows.

* Linux users `enebular` (default value is applied to omit option)
* Pelion connection mode is `factory`
* The path of Pelion's authentication information (device bundle) is `/ tmp / pelion / pal` (Please put the device bundle in the path shown left) 
* Build Pelion's FCC Tools
* Other options are omitted

**Example of Command Execution for Installing to Raspberry Pi**

It is recommended to use `pi` for the user name when installing enebular-agent to Raspberry Pi.
For details, see the example of command execution for AWS IoT.

```
wget -qO- https://enebular.com/agent-install | sudo -E bash -s -- -p=pelion --mbed-cloud-mode=factory --mbed-cloud-pal=/tmp/pelion/pal --user=pi
```

### Result  {#ExampleResult}

#### Directory structure

If installation is successful, relevant files will be installed on the target device with the following directory configuration.

> /home/  
>　　└enebular/  ← user name  
>　　　　　　├enebular-runtime-agent/  ← install directory  
>　　　　　　└nodejs-v<version>/  ← JavaScript  

In AWS IoT's case, please backup as the following keys and certificates are generated in the `/home/enebular/enebular-runtime-agent/ports/awsiot/certs/` directory.

* enebular-agent-test-private.pem
* enebular-agent-test.crt.pem
* root.pem

#### Checking the execution status of enebular-agent

```
sudo journalctl -ex -u enebular-agent-enebular.service
```

If you have installed in a configuration that automatically starts enebular-agent (if you do not specify --no-startup-register), you can check the execution status of enebular-agent by executing the above command.

#### Checking on AWS IoT

You can check the following from the management screen of AWS IoT.

* "Admin"-"enebular-agent-test" is added to "thing"
* You can check "HTTPS (end point)" in "Manage"-"Material"-"enebular-agent-test"-"Operation"

## Troubleshooting {#Troubleshooting}

### Insufficient storage space

* If there is not enough free space available to install enebular-agent, it may fail to install with an error message.

It's possible that even when there is enough overall space, it may fail to install if the space has been divided into partitions.

The installer saves the package downloaded to the `/tmp` directory. That's why if not enough space has been assigned to the `/tmp` directory, there may not be enough space to download the installation package.

In these cases, it may be possible to resolve the problem by adjusting partition settings.
