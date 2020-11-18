# Flow Status {#Flow Status}

When a **Flow** is deployed to a device, the Flow Status can be monitored.

## Prerequisite

Flow Status can only be monitored when using any of the following agents below.

- enebular-agent version >= 2.6.0
- enebular-edge-agent version >= 1.4.0

## Types of Flow Status

The Flow Status has 3 statuses.

| Name    | Description         |
| ------- | ------------------- |
| running | The flow is running |
| stopped | The flow is stopped |
| -       | Unknown             |

The Flow is automatically set to `running` when deployed.

## Start and Stop a Flow

Changing the status of the Flow is possible.

1. Make sure your `Device` is online

1. Open `Device Detail` by clicking on a `Device` from the `Device List`

1. Under the `Flow` section, click on the `Toggle` button to switch your Flow ON/OFF

![deviceFlowStatus](./../../img/Device/Device-FlowStatus.png)
