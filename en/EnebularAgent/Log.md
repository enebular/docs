# Log {#Log}

## Overview {#Overview}

This section describes the enebular-agent log.

The log is a function that can only be used for paid devices.
enebular-agent sends logs to enebular and accumulates them in the cloud.

## Description {#Description}

### Description Function {#DescriptionFunction}

Logs operate on the enebular-agent and node-RED logs.
The log has the following two functions.
* Log output to console
    * Output log to the console of enebular-agent (standard output: stdout / standard error output: stderr)
* Send log to enebular
    * Send log to enebular

Device logs can be checked in enebular's Device List and Logs.
For more details, see [Device List](../Device/DeviceList.md) and [Logs](../Device/Logs.md).


### Description Log Level {#DescriptionLogLevel}
There are two types of log levels: `info` and` debug`.
By specifying the environment variable `DEBUG`, you can control the output and sending log levels.
`debug` can get more detailed information than` info`.
The relationship between the value of the environment variable `DEBUG`, the log output to the console, and the transmission information to enebular is shown in the following table.

|Value of environment variable `DEBUG`|Log output to console|Transmission information to enebular|
|:--|:--|:--|
|None (default)|Do not output|info|
|info|info|info|
|debug|debug|debug|

Node-RED log messages are always treated as `info`.

#### Confirmation Method {#DescriptionLogLevelConfirmationMethod}

The environment variable `DEBUG` is checked by the response of the following command. 
```
echo $DEBUG
```

|response|Value of environment variable `DEBUG`|
|:--|:--|
|blank|none|
|info|info|
|debug|debug|

#### Modification Method {#DescriptionLogLevelModificationMethod}

Change the environment variable `DEBUG` according to the following procedure.  
1. Stop the service of enebular-agent
2. Add path setting of Node.js
3. Set the environment variable `DEBUG`
4. Run enebular-agent to start the service

Execution of enebular-agent, [start / stop-<service name> file](./StartStop.md#ExampleServiceFile) `enebular-agent- <user> .service` file` [Service] `-` ExecStart =` please refer to. If `[Service]` -`ExecStart = `is

```
ExecStart=/home/enebular/enebular-runtime-agent/ports/awsiot/bin/enebular-awsiot-agent --enable-syslog --daemon-mode
```
The command to be executed (hereinafter referred to as the execution command) is
```
/home/enebular/enebular-runtime-agent/ports/awsiot/bin/enebular-awsiot-agent --enable-syslog --daemon-mode
```
It will be the above.

The following shows the procedure for changing the environment variable `DEBUG` when the version of Node.js is <version> with` -u` or `--user` specified as <user>.

* When setting the environment variable `DEBUG` to "None"

```
sudo systemctl stop enebular-agent-<user>.service
export PATH=$PATH:/home/<user>/nodejs-v<version>/bin
export DEBUG=
Execution command
```

* When setting the environment variable `DEBUG` to` info`

```
sudo systemctl stop enebular-agent-<user>.service
export PATH=$PATH:/home/<user>/nodejs-v<version>/bin
export DEBUG=info
Execution command
```

* To set the environment variable `DEBUG` to` debug`

```
sudo systemctl stop enebular-agent-<user>.service
export PATH=$PATH:/home/<user>/nodejs-v<version>/bin
export DEBUG=debug
Execution command
```

### License Registration {#DescriptionLicenseRegistration}

There are two types of notification status of log: valid and invalid.
If the notification status is valid, the notification of the log is performed, and if the notification status is invalid, the notification of the log is not performed.
The initial setting of the notification status of the log is invalid.
To enable the notification status of the log, it is necessary to register the license to a device.

For details on license registration, refer to [License Manager](../Device/LicenseManager.md).