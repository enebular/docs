---
lastUpdated: 2018-04-26
---

# enebular Release Notes {#enebular}

## 2.1.2 (April 16th, 2018)

### New

- enebular ドキュメントにenebular有償機能の記述を追加しました。(英語版のみ)
- サービスダウン時のメッセージページを作成しました。
- herokuデプロイを行う際にクレジットカード情報が必要な旨をenebularドキュメントに追記しました。
- トップページのナビゲーションバーにenebularブログへのリンクを追加しました。

### Fixed

- Infomotionのグラフ上の数字とMilkcocoa InfoTypeのデータストアの数字が一致しない不具合を修正しました。
- 存在しないAboutページへのリンクを削除しました。
- 誤ったトークンでherokuデプロイをした場合に表示されるエラーメッセージの曖昧さを解消しました。
- サインイン・ログインに相当する用語が複数混在していたのをSign in / Loginに統一しました。

### Known Issues

- InfoMotionを埋め込んだ静的ページを、enebularにログインしていないブラウザで開こうとするとグラフが表示されない。

## Release History

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

## Latest Release - 0.10.0 (Apr 27th, 2018)

enebular-edge-agent 0.10.0では、milkcocoa in ノードおよび milkcocoa out ノードの追加を行いました。

### New

* milkcocoa in ノードを使用して Milkcocoa へのデータ入力をトリガーにenebular-edge-agentのフローを起動することが出来ます
* milkcocoa out ノードを使用して enebular-edge-agentから Milkcocoa にデータを送信することが出来ます

### Fixed
* フローデプロイ時にデバイス再起動を行わないように修正しました
* SSL通信不具合の修正しました
* Analog in ノードで取得する値に不備があったため修正しました

### Changed
* TSL2561 ノードで、Stag Beetle Board に搭載された照度センサーがTSL2561センサーかTSL2581センサーかを自動判定し、TSL2581センサーからも照度を取得出来るようになりました

### Known Issues

* BME280 ノードの使用時、フローのサイズが大きいと正常に動作しない場合があります
* Inject ノードにおいて、PayloadにはTimestampのみ、RepeatにIntervalのみしか設定できません
* 短い周期で繰り返しフローをデプロイした場合に、フローの初期化に失敗することがあります
    * フローの初期化に失敗するとデバイスがフリーズします。その際はリセットボタンを押下してデバイスを再起動してください

### Operating Environment

#### Operating System

* [Mbed OS 5.6.6](https://github.com/ARMmbed/mbed-os/tree/mbed-os-5.6.6) (ARM Ltd.)

#### Hardware

enebular-edge-agent 0.9.0は、下記のハードウェアを対象としています。

* [FRDM-K64F](https://www.nxp.com/jp/products/software-and-tools/hardware-development-tools/freedom-development-boards/freedom-development-platform-for-kinetis-k64-k63-and-k24-mcus:FRDM-K64F) (NXP Semiconductors N.V.) + Stag Beetle Board (Uhuru Corporation)

#### Communication

* IEEE 802.11 b/g/n (IEEE 802.11n は2.4GHzのみの対応です)
* WPA/WPA2

## Release History
- [0.10.0](./enebular-edge-agent/0.10.0.md) (Apr 27th, 2018)
- [0.9.1](./enebular-edge-agent/0.9.1.md) (Feb 28th, 2018)
- [0.9.0](./enebular-edge-agent/0.9.0.md) (Jan 30th, 2018)
