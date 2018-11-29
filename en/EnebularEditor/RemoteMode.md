---
lastUpdated: 2018-10-31
---

# Debugging a Flow in Remote Mode

First you need **enebular-runtime-agent 2.3.0** and above running on a device (Raspberry Pi).

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
