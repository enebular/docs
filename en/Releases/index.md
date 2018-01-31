---
lastUpdated: 2017-01-31
WIP: true
---

# enebular Release Notes {#enebular}

## Latest Release - 2.0.0 (Jan 30th, 2018)

enebular has evolved greatly in the three years since its beta release on the 22nd of November, 2014. In this release we have worked on adding operational management functionality intended for commercial use, increasing the range of supported devices and improving usability.

### New

#### An Enterprise Plan
While enebular was only offered free of charge up until now, in response to requests for enhanced support and high operational stability, we will now also offer an enterprise plan. With the enterprise plan you can make use of the microcontroller agent, device operations management functionality and professional support. For more details on the enterprise plan, please contact support@enebular.com.

#### A Redesigned Management Console
The management console (dashboard) has been renewed and is now easier to understand.
Its usability has been improved with, for example, the ability to deploy flows directly from the management console.

#### Expansion of Deployable Devices
In addition to the cloud environments and gateways supported up until now, flow deployment to Arm Mbed compatible microcontroller boards is now also supported. For the gateway agent, please refer to the [enebular-agent version 2.0.0 release notes](#enebular-agent). For the microcontroller agent, please refer to the [enebular-edge-agent version 0.9.0 release notes](#enebular-edge-agent).

#### New Connection Types
In addition to the AWS IoT and Heroku support up until now, support for Arm Mbed Cloud has also been added. Support for Arm Mbed Cloud is available only for Enterprise Plan users.

#### Additional Device Management Functionality
Remote monitoring of status and logging of devices running the enebular agent and enebular edge agent has been added. This device management functionality is available only for Enterprise Plan users.

#### A Redesign of INFOMOTION Visualization Functionality
INFOMOTION has also been redesigned making it much easier to use. Dashboard functionality has been added, making it possible to display graphs of various sizes at once. As with InfoType, dashboards can be shared with other users. In addition, usability has been improved by, for example, allowing graph data to be downloaded in json format and not requiring a data store connection when sharing an InfoType.

### Operating Environment
enebular has been confirmed to work with the following web browsers.

|Web browser|Version|OS|
|--|--|--|
|Google Chrome|63.0 or later|Windows/Mac|
|Mozilla Firefox|57.0 or later|Windows/Mac|

We want to continue to have enebular reflect the opinions of its users, add new functionality and improve usability, and aim for an even easier to use service. For any thoughts on enebular, please get in touch with us at support@enebular.com. We look forward to your feedback.

### Release History

- [2.0.0](./enebular/2.0.0.md)

---

# enebular agent Release Notes {#enebular-agent}

## Latest Release - 2.0.0 (Jan 30th, 2018)

enebular-agent is IoT agent software for enebular and designed for Linux OS gateways. enebular-agent version 2.0.0 is being released along side the release of enebular vesion 2.0.0.

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

- [2.0.0](./enebular-agent/2.0.0.md)

---

# enebular edge agent Release Notes {#enebular-edge-agent}

## Latest Release - 0.9.0 (Jan 30th, 2018)

enebular-edge-agentは、[ARM Ltd.](https://www.arm.com/)の[Mbed OS](https://os.mbed.com/)を採用したマイクロコントローラ向けのenebular用IoTエージェントソフトウェアです。enebular version 2.0.0のリリースにあわせ、enebular-edge-agent version 1.0.0をリリースします。

enebular-edge-agentの詳しい仕様については、弊社サポート(support@enebular.com)までお問い合わせください。

### New

#### Authentication

* [enebular](https://enebular.com/)は、[ARM Ltd.](https://www.arm.com/)の[Mbed OS](https://os.mbed.com/)のMbed Cloudサービスを利用してenebular-edge-agentが搭載されたIoTデバイスを認証します。enebular-edge-agentは、MbedCloudのクライアントとして動作します

#### Flow

* [enebular](https://enebular.com/)では、[Node-RED](https://nodered.jp/)ベースのFlow Editorを使用してFlowプログラミングを行うことができます
* enebularで作成したFlowは、enebular-edge-agentを搭載したIoTデバイスにデプロイして実行することができます (※1)

※1 enebular-edge-agentで実行できるFlowには制限があります。詳しい仕様は、弊社サポート(support@enebular.com)までお問い合わせください

#### Device Management

* enebularのデバイス管理機能で、enebular-edge-agentが搭載されたIoTデバイスの状態を監視することができます
* enenbular-edge-agentは、enebularに対して定期的にデバイスの状態を通知します
* 本機能はEnterprise Planの有償機能として提供されます

#### Logging

* enebular-edge-agentは、ロギング機能としてエラーや動作のログをMicroSDカードに記録します
* 本機能はEnterprise Planの有償機能として提供されます

#### Operating Environment

##### Operating System

* [Mbed OS 5.6.6](https://github.com/ARMmbed/mbed-os/tree/mbed-os-5.6.6) (ARM Ltd.)

##### Hardware

enebular-edge-agent 1.0.0は、下記のハードウェアを対象としています。

* [FRDM-K64F](https://www.nxp.com/jp/products/software-and-tools/hardware-development-tools/freedom-development-boards/freedom-development-platform-for-kinetis-k64-k63-and-k24-mcus:FRDM-K64F) (NXP Semiconductors N.V.) + Stag Beetle Board (Uhuru Corporation)

##### Communication

* IEEE 802.11 b/g/n (IEEE 802.11n は2.4GHzのみの対応です)
* WPA/WPA2

### Fixed

N/A

### Changed

N/A

### Known Issues

* BME280 ノードの使用時、フローのサイズが大きいと正常に動作しない場合がある
* Inject ノードにおいて、PayloadにはTimestampのみ、RepeatにIntervalのみしか設定できない

## Release History

- [0.9.0](./enebular-edge-agent/0.9.0.md)
