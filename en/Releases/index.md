---
lastUpdated: 2018-03-07
---

# enebular Release Notes {#enebular}

## Latest Release - 2.0.1 (March 1st, 2018)

## New

- Implemented a mechanism which displays a link to our "Privacy Policy" and requires the user to agree to it when either first registering, logging in for the first time after this release, or using the inquiry form on enebular. It will now not be possible to use enebular if the "Privacy Policy" is not agreed to.

## Fixed

- Fixed an issue where the entered "Description" would not be saved during InfoType registration.
- Fixed an issue where a milkcocoa or apigateway DataSource could be registered even if some required information was omitted.
- Fixed an issue where it was not possible to delete a created DataSource.
- Fixed an issue where installed nodes would disappear when deploying.
- Fixed an issue preventing nodes and lines being deleted with the delete key in the Flow editor.
- Fixed an issue where it was not possible to share a flow with other users.
- Fixed an issue where the License Manager would not be displayed for paid plan users.
- Fixed an issue where the Note Editor would not open when attempting to reopen or refresh it.


## Release History

- [2.0.1](./enebular/2.0.1.md) (March 1st, 2018)
- [2.0.0](./enebular/2.0.0.md) (Jan 30th, 2018)

---

# enebular agent Release Notes {#enebular-agent}

## Latest Release - 2.0.0 (Jan 30th, 2018)

enebular-agent is IoT agent software for enebular and designed for Linux OS gateways. enebular-agent version 2.0.0 is being released along side the release of enebular version 2.0.0.

For detailed specifications on the enebular agent, please contact support (support@enebular.com).

### New

#### Device Management / Logging
* As an enebular device management feature, it is now possible to monitor device status and logs of IoT devices running enebular-agent
* enenbular-agent regularly reports device status and logs to enebular
* These features are offered as Enterprise Plan paid features

#### Connection Types
In addition to AWS IoT that has been supported up until now, it is now also possible to deploy assets using Arm Mbed Cloud.

### Fixed
 N/A

### Changed
 N/A

### Known Issues
 N/A

### Recommended Hardware
The recommended hardware is as follows.
* Raspberry PI3 Model B

### Operating Environment

The recommended operating environments are as follows.

#### Raspberry PI3 Model B

##### Raspbian Stretch base (9.0)
* nodejs 8.9.0
* npm 5.5.1
* node-red 0.17.5

#### Raspbian Jessie base (8.0)
* nodejs 8.9.0
* npm 5.5.1
* node-red 0.17.5

#### Linux (VirtualBox)

##### Debian Jessie (8.9)
* nodejs 9.2.0
* npm 5.5.1
* node-red 0.17.5

##### Debian Stretch (9.1)
* nodejs 9.2.1
* npm 5.6.0
* node-red 0.17.5

## Release History

- [2.0.0](./enebular-agent/2.0.0.md) (Jan 30th, 2018)

---

# enebular edge agent Release Notes {#enebular-edge-agent}

## Latest Release - 0.9.0 (Jan 30th, 2018)

enebular-edge-agent is IoT agent software for enebular and designed for microcontrollers utilizing [ARM Ltd.](https://www.arm.com/)'s [Mbed OS](https://os.mbed.com/). enebular-edge-agent version 0.9.0 is being released along side the release of enebular version 2.0.0.

For detailed specifications on enebular-edge-agent, please contact support (support@enebular.com).

### New

#### Authentication

* [enebular](https://enebular.com/) uses [ARM Ltd.](https://www.arm.com/)'s [Mbed OS](https://os.mbed.com/) Mbed Cloud service to authorize IoT devices running enebular-edge-agent. enebular-edge-agent operates as an Mbed Cloud client

#### Flows

* It is possible to do flow programming using the [Node-RED](https://nodered.org) based Flow Editor on [enebular](https://enebular.com/)
* Flows created on enebular can be deployed and executed on IoT devices running enebular-edge-agent (1)

1) There are limitations to the flows that can be executed with enebular-edge-agent. For detailed specifications, please contact support (support@enebular.com).

#### Device Management

* As an enebular device management feature, it is now possible to monitor the device status of IoT devices running enenbular-edge-agent
* enenbular-edge-agent regularly reports device status to enebular
* These features are offered as Enterprise Plan paid features

#### Logging

* enebular-edge-agent records error and operational messages to an MicroSD for logging
* This feature is offered as an Enterprise Plan paid feature

#### Operating Environment

##### Operating System

* [Mbed OS 5.6.6](https://github.com/ARMmbed/mbed-os/tree/mbed-os-5.6.6) (ARM Ltd.)

##### Hardware

The following hardware is supported in enebular-edge-agent 0.9.0.

* [FRDM-K64F](https://www.nxp.com/products/processors-and-microcontrollers/arm-based-processors-and-mcus/kinetis-cortex-m-mcus/k-seriesperformancem4/k2x-usb/freedom-development-platform-for-kinetis-k64-k63-and-k24-mcus:FRDM-K64F) (NXP Semiconductors N.V.) + Stag Beetle Board (Uhuru Corporation)

##### Communication

* IEEE 802.11 b/g/n (only 2.4GHz is supported for IEEE 802.11n)
* WPA/WPA2

### Fixed

N/A

### Changed

N/A

### Known Issues

* When using a BME280 node, it may not operate correctly if the flow size is large
* For Inject nodes, it is only possible to set Timestamp for the Payload and Repeat for the Interval

## Release History

- [0.9.0](./enebular-edge-agent/0.9.0.md) (Jan 30th, 2018)
