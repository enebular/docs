---
lastUpdated: 2018-05-23
---

# enebular Release Notes {#enebular}

## 2.2.0 (May 23rd, 2018)

### New

* InfoMotionで利用できるデータソースの種類としてPubnubとFirebaseという2つの新たなデータソースに対応しました。
* 英語マニュアルに"Deploy to Lambda"の記述を追加しました。
* 日本語マニュアルに有償機能の記述を追加しました。
* データベースを多重化し、サービスの信頼性を向上させました。
* 有償のenebular edge agentをMbedクラウド経由で接続した場合自動的に有効化されるようになりました。
* フローエディタを一時環境に保存すると、フローのスナップショットが表示されるようになりました。
* enebularのダッシュボードにアセット検索バーを追加しました。
* enebular edge agentのログがenebularで閲覧できるようになりました。

### Fixed

* 英語マニュアルのスクリーンショットが全て日本語版の画面になっていましたが、英語版の画面に入れ替えました。
* フローエディタの右サイドバーのAdminタブからノードをインストールできない不具合を修正しました。

### Known Issues

* 言語設定を英語にしたブラウザでフローエディタを開いても、一部ノードの説明文が日本語で表示されます。
* InfoMotionを埋め込んだ静的ページを、enebularにログインしていないブラウザで開こうとするとグラフが表示されない。

### Release History

- [2.2.0](./enebular/2.2.0.md) (May 23rd, 2018)
- [2.1.2](./enebular/2.1.2.md) (April 16th, 2018)
- [2.1.1](./enebular/2.1.1.md) (April 3rd, 2018)
- [2.1.0](./enebular/2.1.0.md) (March 30th, 2018)
- [2.0.1](./enebular/2.0.1.md) (March 1st, 2018)
- [2.0.0](./enebular/2.0.0.md) (Jan 30th, 2018)

---

# enebular agent Release Notes {#enebular-agent}

## Latest Release - 2.0.0 (Jan 30th, 2018)

enebular-agentは、Linux OSを搭載したゲートウェイ向けのenebular用IoTエージェントソフトウェアです。enebular version 2.0.0のリリースにあわせ、enebular-agent version 2.0.0をリリースします。

enebular agentの詳しい仕様については、弊社サポート(support@enebular.com)までお問い合わせください。

### New

#### Device Management/Logging
* enebularのデバイス管理機能で、enebular-agentが搭載されたIoTデバイスの状態(ステータス)やログを監視することができるようになりました
* enenbular-agentは、enebularに対して定期的にデバイスの状態とログを通知します
* 本機能はEnterprise Planの有償機能として提供されます

#### Connection Types
これまでサポートしていたAWS IoTに加え、Arm Mbed Cloudを利用してのアセットのデプロイができるようになりました

### Fixed
 N/A

### Changed
 N/A

### Known Issues
 N/A

### Recommended Hardware
推奨動作ハードウェアは下記の通りです。
* Raspberry PI3 Model B

### Operating Environment
推奨動作環境は下記の通りです。

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

## Latest Release - 1.0.0 (May 18th, 2018)

enebular-edge-agent 1.0.0では、enebular で enebular-edge-agent のログを監視できるようになりました。

### New

* enebularのデバイス管理機能で、enebular-edge-agent のログを監視することができるようになりました

### Fixed

N/A

### Changed

* mbed OS 5.8.2 へのアップデートを行いました

### Known Issues

* BME280 ノードの使用時、フローのサイズが大きいと正常に動作しない場合があります
* Inject ノードにおいて、PayloadにはTimestampのみ、RepeatにIntervalのみしか設定できません

### Operating Environment

#### Operating System

* [Mbed OS 5.8.2](https://github.com/ARMmbed/mbed-os/tree/mbed-os-5.8.2) (ARM Ltd.)

#### Hardware

enebular-edge-agent 1.0.0は、下記のハードウェアを対象としています。

* [FRDM-K64F](https://www.nxp.com/jp/products/software-and-tools/hardware-development-tools/freedom-development-boards/freedom-development-platform-for-kinetis-k64-k63-and-k24-mcus:FRDM-K64F) (NXP Semiconductors N.V.) + Stag Beetle Board (Uhuru Corporation)

#### Communication

* IEEE 802.11 b/g/n (IEEE 802.11n は2.4GHzのみの対応です)
* WPA/WPA2

## Release History

* [1.0.0](./enebular-edge-agent/1.0.0.md) (May 18th, 2018)
* [0.10.0](./enebular-edge-agent/0.10.0.md) (Apr 27th, 2018)
* [0.9.1](./enebular-edge-agent/0.9.1.md) (Feb 28th, 2018)
* [0.9.0](./enebular-edge-agent/0.9.0.md) (Jan 30th, 2018)
