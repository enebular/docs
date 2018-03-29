---
lastUpdated: 2018-03-12
---

# enebular Release Notes {#enebular}

## Latest Release - 2.1.0 (March 30th, 2018)

## New

- Added the feature to allow deploying flows to AWS Lambda.

## Changed

- "Terms of Service" is now displayed at sign-up.
- The operating environments for "InfoMotion Tool" are now defined in the document.
- "Name" can be changed at "Account Settings" page.

## Fixed

- Fixed the issue which had been preventing DataSource from being deleted.
- In the DataSource creation dialog box, some descriptions were added to indicate optional entry items as optional.
- Fixed the issue which had been causing additionally installed nodes to disappear from the flows deployed to Heroku environment.
- Fixed the issue which had been causing LicenseManager to fail to appear.
- Fixed the issue which had been causing to fail to discover flows.
- Reviewed and edited the document throughly to improve its accuracy.


## Release History

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

## Latest Release - 0.9.1 (Feb 28th, 2018)

In 0.9.1 release, improved stability of running flow and security.

### Fixed
N/A

### Changed
* Changed to conceal Wi-Fi password on MicroSD.
    * Rewriting the password on MicroSD to default value after it's saved on flash memory.
* Flows with setting values less than 1 second are set to 1 second.
* For Digital Out nodes, added available data types of msg properties.
    * string(`true` / `false`)
    * bool(`true` / `false`) **new**
    * number(`1` /  `0`) **new**
* When flow is deployed device is rebooted to ensure execution of flow.

### Known Issues

* When using a BME280 node, it may not operate correctly if the flow size is large.
* An Inject node can set only a Timestamp for the Payload and Repetition of the Interval.
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

- [0.9.1](./enebular-edge-agent/0.9.1.md) (Feb 28th, 2018)
- [0.9.0](./enebular-edge-agent/0.9.0.md) (Jan 30th, 2018)
