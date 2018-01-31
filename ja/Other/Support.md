---
lastUpdated: 2018-01-30
---

# 動作環境

## enebular {#enebular}

enebular が対象とする Web ブラウザは以下とします。

| Web Browser | Version | OS |
| --- | --- | --- |
| Chrome | [63.0 or later](https://chromereleases.googleblog.com/search/label/Desktop%20Update) | Windows/Mac  |
| Firefox | [57.0 or later](https://www.mozilla.jp/firefox/releases/) | Windows/Mac |
| Safari | 対応予定 | Mac |
| Microsoft Edge | 対応予定 | Windows |

enebular では上記のブラウザでの利用を推奨しています。これらのブラウザで表示が崩れる、機能が動かないなどの問題がある場合はサポートまでご報告ください。

## enebular-agent {#enebular-agent}

enebular-agent は、Linux OS を搭載したゲートウェイ向けの enebular 用 IoT エージェントソフトウェアです。対象となる環境は以下とします。

なお、詳しい仕様については、弊社サポート(support@enebular.com)までお問い合わせください。

### 推奨ハードウェア (Recommended Hardware)

enebular-agent は、Linux 上で動作します。
以下では、Linux が動作する安価なゲートウェイ環境としての推奨ハードウェアを列挙します。

| Product | Version  |
| --- | --- | 
| Raspberry PI3 Model B | [Version 3 Model B](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/) |
| OpenBlocks | 対応予定 |

### 必要物

* Network Interface (ethernet or WiFi)
    * WiFiについては、IEEE802.11a/b/g等を想定していますが、LinuxからIP接続ができるネットワークが使用できれば良いものとします
* SD-Card
* RAM
* Flash Memory

## オペレーティングシステム (Operating System)

enebular-agent は、[Debian GNU/Linux](https://www.debian.org/) 上で動作します。
推奨ハードウェアである Raspberry PI では、Debian ベースの [Raspbian OS](https://www.raspbian.org/) が動作するため、これを利用します。

### Raspberry PI3

Raspberry PI3 では以下の OS をサポート対象とします。

- [Raspbian Stretch base](http://archive.raspbian.org/raspbian/dists/stretch/) (9.0)
- [Raspbian Jessie base](http://archive.raspbian.org/raspbian/dists/jessie/) (8.0)

また、それぞれのミドルウェアのバージョンは以下になります。

|  | [Node.js](https://nodejs.org/ja/download/releases/) | [npm](https://github.com/npm/npm/releases) | [Node-RED](https://github.com/node-red/node-red/releases) |
| --- | --- | --- | --- |
| streach base (9.0) | 8.9.0 | 5.5.1 | 0.17.5 |
| jessie base (8.0) | 8.9.0 | 5.5.1 | 0.17.5 |

### Linux(virtualbox)

Linux では以下の OS をサポート対象とします。

* [Debian GNU/Linux 9 Stretch](https://www.debian.org/releases/stretch/)
* [Debian GNU/Linux 8 Jessie](https://www.debian.org/releases/jessie/)

また、それぞれのミドルウェアのバージョンは以下になります。

|  | [Node.js](https://nodejs.org/ja/download/releases/) | [npm](https://github.com/npm/npm/releases) | [Node-RED](https://github.com/node-red/node-red/releases) |
| --- | --- | --- | --- |
| Linux 9 Stretch | 9.2.1 | 5.6.0 | 0.17.5 |
| Linux 8 Jessie | 9.2.0 | 5.5.1 | 0.17.5 |

## enebular-edge-agent {#enebular-edge-agent}

enebular-edge-agent は、[ARM Ltd.](https://www.arm.com/) の [Mbed OS](https://os.mbed.com/) を採用したマイクロコントローラ向けの enebular 用 IoT エージェントソフトウェアです。

なお、詳しい仕様については、弊社サポート(support@enebular.com)までお問い合わせください。

### Operating Environment

#### Operating System

* [Mbed OS 5.6.6](https://github.com/ARMmbed/mbed-os/tree/mbed-os-5.6.6) (ARM Ltd.)

#### Hardware

enebular-edge-agent 0.9.0 は、下記のハードウェアを対象としています。

* [FRDM-K64F](https://www.nxp.com/jp/products/software-and-tools/hardware-development-tools/freedom-development-boards/freedom-development-platform-for-kinetis-k64-k63-and-k24-mcus:FRDM-K64F) (NXP Semiconductors N.V.) + Stag Beetle Board (Uhuru Corporation)

#### Communication

* IEEE 802.11 b/g/n (IEEE 802.11n は2.4GHzのみの対応です)
* WPA/WPA2

### Known Issues

* BME280 ノードの使用時、フローのサイズが大きいと正常に動作しない場合がある
* Inject ノードにおいて、PayloadにはTimestampのみ、RepeatにIntervalのみしか設定できない
