---
lastUpdated: 2018-06-06
---

# enebular Release Notes {#enebular}

## 2.2.1 (June 6th, 2018)

### New

None

### Fixed

- Fixed an issue of a user's role not correctly changing to collaborator after transferring ownership of a project.
- Fixed an issue that caused InfoMotion datasources pub/sub to continue running after graphs have been removed in live mode.
- Fixed an issue that caused InfoMotion to close the property settings screen during user's attempt to change settings.

### Changed

- Disabled the ability to edit graphs in Live mode on InfoMotion.
- The (+) button to add graphs on InfoMotion has been slightly enlarged for the better usability.

### Known Issues

* Opening the flow editor from a web browser shows Japanese texts even if the browser is configured to show English.
* InfoMotion-embedded pages fail to show graphs when the browser which opens them is not logged into enebular.
* The current flow editor allows multiple users to open the same flow simultaneously; however, if each clicks on "Deploy" button, only the last saved flow will remain on enebular.

### Release History

- [2.2.1](./enebular/2.2.1.md) (June 6th, 2018)
- [2.2.0](./enebular/2.2.0.md) (May 23rd, 2018)
- [2.1.2](./enebular/2.1.2.md) (April 16th, 2018)
- [2.1.1](./enebular/2.1.1.md) (April 3rd, 2018)
- [2.1.0](./enebular/2.1.0.md) (March 30th, 2018)
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

## Latest Release - 1.0.1 (Jun 1st, 2018)

In 1.0.1 release, Updated Mbed Cloud Client to 1.3.1.1 General Availability (GA).

### New

N/A

### Fixed

* Network disconnected when running an agent for an extended period of time. This was due to the Wi-Fi module taking full control of the communication processing. Issue solved by updating Wi-Fi module's library.

### Changed

* Updated Mbed Cloud Client to 1.3.1.1 General Availability (GA)

### Known Issues

* A `BME280` node may not operate correctly if the flow size is too large.
* An `inject` node can set only a Timestamp for the Payload and Repetition of the Interval.


### Operating Environment

#### Operating System

* [Mbed OS 5.8.2](https://github.com/ARMmbed/mbed-os/tree/mbed-os-5.8.2) (ARM Ltd.)

#### Hardware

The following hardware is supported in enebular-edge-agent 1.0.1.

* [FRDM-K64F](https://www.nxp.com/products/processors-and-microcontrollers/arm-based-processors-and-mcus/kinetis-cortex-m-mcus/k-seriesperformancem4/k2x-usb/freedom-development-platform-for-kinetis-k64-k63-and-k24-mcus:FRDM-K64F) (NXP Semiconductors N.V.) + Stag Beetle Board (Uhuru Corporation)

#### Communication

* IEEE 802.11 b/g/n (only 2.4GHz is supported for IEEE 802.11n)
* WPA/WPA2

## Release History

* [1.0.1](./enebular-edge-agent/1.0.1.md) (Jun 1st, 2018)
* [1.0.0](./enebular-edge-agent/1.0.0.md) (May 18th, 2018)
* [0.10.0](./enebular-edge-agent/10.0.0.md) (Apr 27th, 2018)
* [0.9.1](./enebular-edge-agent/0.9.1.md) (Feb 28th, 2018)
* [0.9.0](./enebular-edge-agent/0.9.0.md) (Jan 30th, 2018)
