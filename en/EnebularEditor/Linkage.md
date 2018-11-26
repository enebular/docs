---
lastUpdated: 2018-10-31
---

# enebular agent Linkage

First you need `enebular-runtime-agent` 2.3.0 and above running on a device (Raspberry Pi).

Make sure your computer and your device are connected in the same local WiFi network.

Retrieve the IP Address of the device by running `ifconfig`.

Get IP Address of your PC (On Mac Open Network Preferences. On Windows open Command prompt and run `ipconfig`. Get IPv4 adress of Wireless LAN adapter Wi-Fi)

With your AWS Credentials set on `enebular-runtime-agent`, start it by executing.

## AWS IoT の場合

```
cd ports/awsiot

ENEBULAR_EDITOR_URL=http://192.xxx.xx.xx:9017 ./bin/enebular-awsiot-agent

cd ports/awsiot/example

ENEBULAR_EDITOR_URL=http://192.xxx.xx.xx:9017 npm start

```

## Pelion Device Management の場合

```
cd ports/local

ENEBULAR_EDITOR_URL=http://192.xxx.xx.xx:9017 ./bin/enebular-awsiot-agent

cd ports/local/example

ENEBULAR_EDITOR_URL=http://192.xxx.xx.xx:9017 npm start

```

From `enebular-editor` open a flow by the `Remote` mode.

Select your AWS or Pelion Device Management Connection to load the flow onto the device first.

When prompted to enter IP Address, input the device's IP Address i.e. `192.xxx.xx.xx`.

Click Load Editor.