---
lastUpdated: 2019-01-18
---

# enebular Release Notes {#enebular}

## Latest Release - 2.7.1 (January 18th, 2019)

## New

- None

## Fixed

- Fixed the user interface so that user privilege does not change when the "Default Privilege" of an asset is changed.
- Fixed the issue that caused Device List screen to fall apart when "Monitoring" button is pressed.
- Fixed the issue that caused the downloaded InfoMotion data to be "Undefined."

## Changed

- Asynchronized the deploy process of flows.
- Now the status of flows being deployed can be observed at the notification section.
- Deleted the word "Flow" on each button appeared in Flow Overview screen to match the buttons in Deploy screen.
- The node-RED to deploy to Heroku is now upgraded to v0.18. * Please note that a new Heroku app must be made in order to deploy to Heroku next time.
- The UI design has been improved for a better visibility on the message notification section.
- Other users can now be invited to InfoMotion just like other assets.
- Updated the "Register License to a Device" selection screen at License Manager and changed device selection controls from check boxes to radio buttons.
- The downloadable maximum InfoMotion data size is set to 10MB.

## Known Issues

- Opening the flow editor from a web browser shows Japanese texts even if the browser is configured to show English.
- The shared page with InfoMotion embedded, the filter function can not be used.
- From the "Contact" page, clicking on enebular logo causes to show the top page based on the web browser's language instead of the language Contact page is showing.

## Release History

- [2.7.1](./enebular/2.7.1.md) (January 18th, 2019)
- [2.7.0](./enebular/2.7.0.md) (December 14th, 2018)
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
    - Changed mentions of “Mbed Cloud” to “Pelion Device Management”
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

## Latest Release - 1.1.0 (January 18th, 2019) {#Latest Release - 1.1.0 January 18th, 2019}

## New {#New}

* Enable to work with enebular Reference Board RAVEN (RAVEN below)
    * Network configuration is done using enebular Reference Board Configuration Tool
* The http request node is now available

## Fixed {#Fixed}

* When using the BME 280 node, a bug may appear when a flow size exceeds 2kbs

## Changed {#Changed}

* Updated to [mbed OS 5.10.4](https://github.com/ARMmbed/mbed-os/releases/tag/mbed-os-5.10.4)
* Updated to [Device Management Client 2.0.1.1 General Availability (GA)](https://github.com/ARMmbed/mbed-cloud-client/releases/tag/2.0.1.1)
* The maximum size of flow that RAVEN can execute is 5 KB

## Known Issues {#KnownIssues}

* When Wi-Fi is disconnected, in rare cases, even if the Wi-Fi environment recovers, it may remain disconnected and communications may not be restored
    * Restart to recover 

### Operating Environment

#### Operating System

* [mbed OS 5.10.4](https://github.com/ARMmbed/mbed-os/releases/tag/mbed-os-5.10.4)

#### Hardware

The following hardware is supported in enebular-edge-agent 1.1.0.

* [enebular Reference Board RAVEN](./../Board/RAVEN.md) (Uhuru Corporation)

#### Communication

* IEEE 802.11 b/g/n (only 2.4GHz is supported for IEEE 802.11n)
* WPA/WPA2

### Tools {#Tools}

#### enebular Reference Board Configuration Tool 1.0.0 {#enebular Reference Board Configuration Tool 1.0.0}

##### New {#New}


-  We have released "enebular Reference Board Configuration Tool" which used in network setting reference board for enebular-edge-agent
    -Download is [here](https://download.enebular.com/eRB-Config-Tool/eRBConfigTool.msi). This software is Windows only

##### Fixed {#Fixed}

N/A

##### Changed {#Changed}

N/A

##### Known Issues {}

N/A

## Release History {#Release History}

* [1.1.0](./enebular-edge-agent/1.0.0.md) (Jan 18th, 2019)
* [1.0.1](./enebular-edge-agent/1.0.1.md) (June 7th, 2018)
* [1.0.0](./enebular-edge-agent/1.0.0.md) (May 18th, 2018)
* [0.10.0](./enebular-edge-agent/0.10.0.md) (Apr 27th, 2018)
* [0.9.1](./enebular-edge-agent/0.9.1.md) (Feb 28th, 2018)
* [0.9.0](./enebular-edge-agent/0.9.0.md) (Jan 30th, 2018)

---

# enebular editor Release Notes {#enebular-editor}

## Latest Release - 0.9.0 (November 30th, 2018)

## New

- We have released the beta version of "enebular editor" which allows you to edit enebular flows on your PC and deploy them directly from it. （[Win](https://s3-ap-northeast-1.amazonaws.com/enebular-editor/win/enebular+editor+Setup+0.9.0.exe)/[Mac](https://s3-ap-northeast-1.amazonaws.com/enebular-editor/mac/enebular+editor-0.9.0.dmg))

## Fixed

N/A

## Changed

N/A

## Known Issues

- AWS Lambda Request node cannot be used if the flow is edited from the enebular editor connected to an enebular-agent.

## Release History

* [0.9.0](./enebular-editor/0.9.0.md) (November 30th, 2018)
