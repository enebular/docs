# Start/Stop {#StartStop}

## Overview {#Overview}

This section describes how to start / stop the enebular-agent.

## Description {#Description}

### Service {#DescriptionService}
enebular-agent runs as a Linux service.  
Linux services are programs that run in the background when Linux starts up.
Linux services can be controlled using the `systemctl` command.
Also, if the service has been stopped for any reason, the restart will be performed according to the definition in the <Service Name> File Option: Restart [Restart Parameter](#ExampleServiceFileRestartParameter) in this chapter.
This service is common to AWS IoT and Pelion Device Management.
`--no-startup-register` in [Installation procedure-Option](Installation.md#DescriptionOption) is omitted and the explanation is based on the premise that automatic service start is enabled.

### Command {#DescriptionCommand}
The description of the `systemctl` command is as follows.

```
(sudo) systemctl [CommandOrder] [Service name]
```

#### Command Order {#DescriptionCommandOrder}

The main instructions that can be used, the need and description of `sudo`, are listed in the following table. 

|command order|sudo necessity|description|
|:--|:--|:--|
|start|necessary|Start the service|
|stop|necessary|Stop the service|
|enable|necessary|Enable service automatic start (Note 1)|
|disable|necessary|Disable service automatic start (Note 1)|
|status|unnecessary|Display the status of services (start / stop)|
|is-enabled|unnecessary|Display the status of service automatic start (enabled / disabled)|

* Note 1: The service automatic startup is to start the service when Linux starts up.
"Enable" starts the service, "Disable" does not start the service. 
The configured service automatic startup status will operate from the next startup of Linux.  

#### Service Name {#DescriptionCommandService}

The service name is as follows:
```
enebular-agent-<user>.service  
```
<User> is the user specified in `-u` or` --user` of [Installation procedure-Option](Installation.md#DescriptionOption).
Also, if the option `-u` or` --user` is omitted, <user> becomes `enebular`.
If the user is `enebular`, the service name is:

```
enebular-agent-enebular.service  
```

## Example {#Example}

### Example Command {#ExampleCommand}

The specific command description of the instruction described in Command is as follows.

* start `sudo systemctl start enebular-agent-<user>.service`  
* stop `sudo systemctl stop enebular-agent-<user>.service`  
* enable `sudo systemctl enable enebular-agent-<user>.service`  
* disable `sudo systemctl disable enebular-agent-<user>.service`  
* status `systemctl status enebular-agent-<user>.service`  
* is-enabled `systemctl is-enabled enebular-agent-<user>.service`  

#### status command response {#ExampleCommnadStatusResponse}

The status of the service (start / stop) by the response of the `status` command is shown in the following table.  

|response|service status|
|:--|:--|
|Active: line contains active|Start-up|
|Active: line contains failed|Stop|

The actual response has 10 lines, including the following lines:
Startup example: 

```
Active: active (running) since Tue 2019-03-19 02:04:38 JST; 1 weeks 1 days ago
```

#### is-enabled command response {#ExampleCommnadIsenabledResponse}


The status of service automatic start (enabled / disabled) by the response of the `is-enabled` command is shown in the following table.

|response|service automatic start status|
|:--|:--|
|enabled|Effectiveness|
|disabled|Invalid|

### Changing the status of service automatic startup {#ExampleChenge}

The procedure for changing the status of service automatic startup is shown below.
The configured service automatic startup status will operate from the next startup of Linux.

* When setting the status of service automatic start to "Enable"
  1. Display the status (enabled / disabled) of service auto-starting `systemctl is-enabled <service name>`  
  2. If the service automatic start status is "disabled", go to 3. If "enable", the end 
  3. Set the status of service automatic startup to "enable" `sudo systemctl enable <service name>`
  4. Display the status (enabled / disabled) of service automatic startup `systemctl is-enabled <service name>` 
  5. Confirm that the status of service automatic start is "enabled"



* When setting the status of service automatic start to "disabled"
  1. Display the status (enabled / disabled) of service auto-starting `systemctl is-enabled <service name>`
  2. If the service automatic start status is "Enabled", go to 3. If "Disabled", exit
  3. Set the status of service automatic startup to "disabled" `sudo systemctl disabled <service name>`
  4. Display the status (enabled / disabled) of service automatic startup `systemctl is-enabled <service name>`
  5. Confirm that the status of service automatic start is "disabled" 

### <service name> file {#ExampleServiceFile}

The file <enebular-agent-<user>.service`, which is <service name>, is in `/etc/ systemd/system/`.

The `enebular-agent-<user>.service` file is described below. 

Example file of `enebular-agent-enebular.service` (for AWS IoT)

```
[Unit]
Description=enebular-agent
Documentation=https://docs.enebular.com/
After=network.target network-online.target
Wants=network-online.target

[Service]
User=enebular
Environment=PATH=/home/enebular/nodejs-v<version>/bin:/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin
PIDFile=/home/enebular/enebular-runtime-agent/ports/awsiot/.enebular-agent.pid

ExecStart=/home/enebular/enebular-runtime-agent/ports/awsiot/bin/enebular-awsiot-agent --enable-syslog --daemon-mode
ExecStop=/home/enebular/enebular-runtime-agent/ports/awsiot/bin/enebular-awsiot-agent kill
Restart=on-failure
RestartSec=60s

[Install]
WantedBy=multi-user.target network-online.target
```

The file is divided into three sections: [Unit], [Service], and [Install].
The sections and their descriptions are shown in the following table.

|section|description|
|:--|:--|
|[Unit]|Setting items that do not depend on Unit type, such as Unit dependency / order relationship|
|[Service]|Setting items for services|
|[Install]|「systemctl enable/disable」Setting items that affect command operation|

The options in the [Service] section used in the `enebular-agent-<user> .service` file are shown in the following table.

|option|description|
|:--|:--|
|User|user|
|Environment|Path to read environment variables|
|PIDFile|PID file of main process of fork type service|
|ExecStart|Service start command|
|ExecStop|Service stop command|
|Restart|Restart condition when service process stops (Note 1)|
|RestartSec|Time to restart when service process stops|

* Note 1: The parameter list of `Restart` is as follows

#### Restart Parameter {#ExampleServiceFileRestartParameter}
|parameter|description|
|:--|:--|
|no|Do not restart|
|always|Always restart|
|on-success|It restarts when stopped by the exit code 0 (Note 1)|
|on-failure|Restart when stopped with an exit code other than 0 (default) (Note 1)|

* Note 1: The end code is 0 for normal termination, other than 0 for abnormal termination.
