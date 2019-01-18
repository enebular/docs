---
lastUpdated: 2018-12-20
---

# Features

enebular-edge-agent functions of the system.

### Table of Contents

1. [Flow execution function](#FlowExecution)
1. [Status Notification Function](#StatusNotification)
1. [Log sending function](#LogTransmission)
1. [Firmware update function](#FirmwareUpdate)

## Flow Execution Function{#FlowExecution}

This function executes JSON of flow definition created by enebular on the device.
When the device connects to the network, it begins execution of the flow.
When the flow is deployed from enebular, it immediately executes the flow.

It is possible to execute only the corresponding node, not all flows. For details, please refer to the page of [Nodes](./Nodes.md). **The maximum flow size that can be executed is 5 kB.**
Flow is executed only when connecting to the network.

enebular-edge-agent does not stop running the flow except in the following cases:

- If the flow is created to stop
- When an error in which flow can not be executed occurs

## Status Notification Function{#StatusNotification}

This function notifies enebular of the status.
It transmits status once after 30 seconds at device startup then every 5 minutes thereafter.
Refer to [DeviceList](./../Device/DeviceList.md) for the status confirmation method.

## Log Transmission Function{#LogTransmission}

This function notifies the enebular log.
It Send the log once 30 seconds after starting the device then every 5 minutes.
See [Logs](./../Device/Logs.md) for log checking method and log list.

## Firmware Update Function{#FirmwareUpdate}

This function automatically updates the enebular-edge-agent firmware.
When the firmware update is complete UHURU will send you an email with the update contents. The firmware update will start when the device is turned on.

Upon completion of the update a mail will be delivered again from Uhuru.

- If there are devices that you wish to exclude from updating, please contact
  **support@enebular.com** in advance.
