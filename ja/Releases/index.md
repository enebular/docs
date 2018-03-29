---
lastUpdated: 2018-03-30
---

# enebular Release Notes {#enebular}

## Latest Release - 2.1.0 (March 30th, 2018)

## New

- AWS Lambdaへのフローデプロイ機能を追加しました

## Changed

- サインアップ時にTerms of Service (利用規約)を表示するようにしました
- InfoMotion Toolの動作環境をドキュメントに記載しました
- Account SettingsにおいてNameを変更できるようにしました

## Fixed

- DataSourceを削除できない不具合を修正しました
- DataSourceの作成時の入力項目のうち、オプショナルな項目を明記しました
- フローデプロイ先のHerokuで、追加インストールしたノードが消えてしまう不具合を修正しました
- Webブラウザを更新しないとメニューにLicenseManagerが表示されない不具合を修正しました
- フローの検索(Discover)が正しく動作しない不具合を修正しました
- ドキュメントの不正確な記述を修正しました

## Release History

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

## Latest Release - 0.9.1 (Feb 28th, 2018)

enebular-edge-agent 0.9.1ではセキュリティ機能やフロー動作の安定性を向上しました。

### Fixed
N/A

### Changed
* SDカード上のWi-Fiパスワードを秘匿するようにしました
  * SDカードに設定したWi-Fiパスワードはフラッシュメモリに保存後、初期値に書き換わります
* フロー定義中に1秒以下の処理が設定されている場合、繰り上げて1秒として処理するように変更しました
* Digital Out ノードにinputされるmsgプロパティが対応するデータ型を追加しました
    * string型(`true` / `false`)
    * bool型(`true` / `false`) **new**
    * number型(`1` /  `0`) **new**
* フローデプロイ時に確実にフローを実行するため、デバイスを再起動するように変更しました

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

- [0.9.1](./enebular-edge-agent/0.9.1.md) (Feb 28th, 2018)
- [0.9.0](./enebular-edge-agent/0.9.0.md) (Jan 30th, 2018)