---
lastUpdated: 2018-11-29
---

# Loading a Flow in Remote Mode

First you need [enebular-runtime-agent 2.3.0](https://github.com/enebular/enebular-runtime-agent/releases) and above running on a device (Raspberry Pi).

Make sure your computer and your device are connected in the **same** local WiFi network.

## AWS IoT

Assuming you have all your credentials and config setup in the `awsiot` folder:

```
cd ports/awsiot
DEBUG=info ./bin/enebular-awsiot-agent --dev-mode
```

## Pelion Device Management

```
cd ports/local
DEBUG=info NODE_RED_DIR=../../node-red ./bin/enebular-local-agent --dev-mode
```

## Next...

From **enebular editor** open a flow by the `Remote` mode.

1. Select a AWS or Pelion Device Management Connection

1. Select the corresponding Thing/Device

1. Click Load

## Debugging

- Please make sure your firewall allows enebular editor to talk with the internets.

- Make sure your computer is running with 1 IP Address only. Having softwares such as Virtual Box running at the same time can cause your computer to have multiple IP Addresses and can prevent enebular editor from communicating with the device.
