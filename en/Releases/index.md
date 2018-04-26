---
lastUpdated: 2018-04-26
---

# enebular Release Notes {#enebular}

## 2.1.2 (April 16th, 2018)

### New

- Added descriptions on enebular paid functions to the enebular document.(English only)
- Added a message page to show when the enebular service is down.
- Added a description in the enebular document that credit card information is necessary when the flow is deployed to heroku.
- Added the link to enebular blog to the top page navigation bar. 

### Fixed

- Fixed an issue which caused mismatch between the numbers shown on Infomotion graphs and the numbers shown on the Milkcocoa InfoType data store.
- Deleted the link to the non-existent "About" page.
- Eliminated the ambiguity in the error message which is shown when one attempts to deploy flows to heroku using wrong token.
- Eliminated inconsistencies in the use of the words for "Sign in" and "Log in"

### Known Issues

- InfoMotion-embedded pages fail to show graphs when the browser which opens them is not logged into enebular.

## Release History

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

## Latest Release - 0.10.0 (Apr 27th, 2018)

In 0.10.0 release, added `milkcocoa in` node and `milkcocoa out` node.

### New

* A `milkcocoa in` node will trigger a flow to run.
* A `milkcocoa out` node will send data to Milkcocoa.

### Fixed

* When flow is deployed device isn't rebooted.
* Fixed SSL connect bug.
* Fixed `analog in` node's bug concerning the obtained value.

### Changed

* On `TSL2561` node, supported TSL2581(luminosity sensor) by automatic judgement.

### Known Issues

* A `BME280` node may not operate correctly if the flow size is too large.
* An `inject` node can set only a Timestamp for the Payload and Repetition of the Interval.
* Excessive deployment within a span of one minute may cause failure of flow initialization.
    * The device will stop in case of a flow initialization failure. To resolve this, reboot the device by pressing the reset button.

### Operating Environment

#### Operating System

* [Mbed OS 5.6.6](https://github.com/ARMmbed/mbed-os/tree/mbed-os-5.6.6) (ARM Ltd.)

#### Hardware

The following hardware is supported in enebular-edge-agent 0.9.0.

* [FRDM-K64F](https://www.nxp.com/products/processors-and-microcontrollers/arm-based-processors-and-mcus/kinetis-cortex-m-mcus/k-seriesperformancem4/k2x-usb/freedom-development-platform-for-kinetis-k64-k63-and-k24-mcus:FRDM-K64F) (NXP Semiconductors N.V.) + Stag Beetle Board (Uhuru Corporation)

#### Communication

* IEEE 802.11 b/g/n (only 2.4GHz is supported for IEEE 802.11n)
* WPA/WPA2

## Release History

- [0.10.0](./enebular-edge-agent/10.0.0.md) (Apr 27th, 2018)
- [0.9.1](./enebular-edge-agent/0.9.1.md) (Feb 28th, 2018)
- [0.9.0](./enebular-edge-agent/0.9.0.md) (Jan 30th, 2018)
