---
lastUpdated: 2018-12-04
---

# enebular Release Notes {#enebular}

## Latest Release - 2.6.1 (December 4th, 2018)

## New

- None

## Fixed

- Fixed the issue that prevented from "Sign Up" screen to the "email sent" screen after pressing "Sign Up" button.
- Fixed the issue that caused only the connections in ap-northeast-1 region to be listed when AWS IoT or AWS Lambda was selected.

## Changed

- None

## Known Issues

- Opening the flow editor from a web browser shows Japanese texts even if the browser is configured to show English.
- The shared page with InfoMotion embedded, the filter function can not be used.

## Release History

- [2.6.1](./enebular/2.6.1.md) (December 4th, 2018)
- [2.6.0](./enebular/2.6.0.md) (November 30th, 2018)
- [2.5.3](./enebular/2.5.3.md) (November 9th, 2018)
- [2.5.2](./enebular/2.5.2.md) (October 22th, 2018)
- [2.5.1](./enebular/2.5.1.md) (October 12th, 2018)
- [2.5.0](./enebular/2.5.0.md) (September 25th, 2018)
- [2.4.4](./enebular/2.4.4.md) (September 7th, 2018)
- [2.4.3](./enebular/2.4.3.md) (August 20th, 2018)
- [2.4.2](./enebular/2.4.2.md) (August 10th, 2018)
- [2.4.1](./enebular/2.4.1.md) (August 3rd, 2018)
- [2.4.0](./enebular/2.4.0.md) (July 19th, 2018)
- [2.3.1](./enebular/2.3.1.md) (July 11th, 2018)
- [2.3.0](./enebular/2.3.0.md) (July 6th, 2018)
- [2.2.1](./enebular/2.2.1.md) (June 7th, 2018)
- [2.2.0](./enebular/2.2.0.md) (May 23rd, 2018)
- [2.1.2](./enebular/2.1.2.md) (April 16th, 2018)
- [2.1.1](./enebular/2.1.1.md) (April 3rd, 2018)
- [2.1.0](./enebular/2.1.0.md) (March 30th, 2018)
- [2.0.1](./enebular/2.0.1.md) (March 1st, 2018)
- [2.0.0](./enebular/2.0.0.md) (Jan 30th, 2018)

---

# enebular agent Release Notes {#enebular-agent}

## Latest Release - 2.3.0 (November 30th, 2018)

## New

- File Deploys, the new enebular function to allow enebular to deploy files, has been added.

## Fixed

- Fixed an issue where an invalid AWS IoT configuration file was included in the prebuilt package (*-prebuilt.tar.gz)

## Changed

- Updated the install script to add the enebular-agent user to the gpio group on Raspberry Pi devices so that the Node-RED nrgpio node types work by default.
- Updated systemd service startup registration so that enebular-agent is automatically restarted after 60 seconds if it terminates abnormally for some reason.
- enebular editor has been modified to be able to edit flows inside enebular-agent by connecting directly to it.
- READMEs
    - Changed mentions of ÅgMbed CloudÅh to ÅgPelion Device ManagementÅh
    - Use shorter install script download URL

## Known Issues

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

- [2.3.0](./enebular-agent/2.3.0.md) (November 30th, 2018)
- [2.2.0](./enebular-agent/2.2.0.md) (September 7th, 2018)
- [2.1.0](./enebular-agent/2.1.0.md) (June 7th, 2018)
- [2.0.0](./enebular-agent/2.0.0.md) (Jan 30th, 2018)

---

# enebular edge agent Release Notes {#enebular-edge-agent}

## Latest Release - 1.0.1 (June 7th, 2018)

In 1.0.1 release, Updated Mbed Cloud Client to 1.3.1.1 General Availability (GA).

## New
N/A

## Fixed
* Network disconnected when running an agent for an extended period of time. This was due to the Wi-Fi module taking full control of the communication processing. Issue solved by updating Wi-Fi module's library.

## Changed
* Updated Mbed Cloud Client to 1.3.1.1 General Availability (GA)

## Known Issues

* * A BME280 node may not operate correctly if the flow size is too large.
* An inject node can set only a Timestamp for the Payload and Repetition of the Interval.

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

* [1.0.1](./enebular-edge-agent/1.0.1.md) (June 7th, 2018)
* [1.0.0](./enebular-edge-agent/1.0.0.md) (May 18th, 2018)
* [0.10.0](./enebular-edge-agent/0.10.0.md) (Apr 27th, 2018)
* [0.9.1](./enebular-edge-agent/0.9.1.md) (Feb 28th, 2018)
* [0.9.0](./enebular-edge-agent/0.9.0.md) (Jan 30th, 2018)

---

# enebular editor Release Notes {#enebular-editor}

## Latest Release - 0.9.0 (November 30th, 2018)

## New

- We have released the beta version of "enebular editor" which allows you to edit enebular flows on your PC and deploy them directly from it. Åi[Win](https://s3-ap-northeast-1.amazonaws.com/enebular-editor/win/enebular+editor+Setup+0.9.0.exe)/[Mac](https://s3-ap-northeast-1.amazonaws.com/enebular-editor/mac/enebular+editor-0.9.0.dmg))

## Fixed

N/A

## Changed

N/A

## Known Issues

- AWS Lambda Request node cannot be used if the flow is edited from the enebular editor connected to an enebular-agent.

## Release History

* [0.9.0](./enebular-editor/0.9.0.md) (November 30th, 2018)
