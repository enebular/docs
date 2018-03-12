---
lastUpdated: 2018-03-07
---

# enebular Release Notes {#enebular}

## Latest Release - 2.0.1 (March 1st, 2018)

### New

- ユーザー新規登録時、本リリース後最初のログイン時、及びenebular上のお問合せフォームご利用時に、弊社の「プライバシーポリシー」へのリンクを表示し、ポリシーに同意を頂戴する仕組みを取り入れました。なお、「プライバシーポリシー」への同意を頂けない場合は、今後enebularのご利用はできなくなります。

### Fixed

- InfoType登録時に、Descriptionを入力しても保存されない不具合を修正しました。
- DataSourceがmilkcocoaもしくはapigatewayの場合、未入力項目がある場合でも登録されてしまう不具合を修正しました。
- 一度作成したDataSourceを削除できない不具合を修正しました。
- Deploy操作の際、インストールされたノードが消えてしまう不具合を修正しました。
- Flowエディタでノードや線をキーボードの削除キーで削除できない不具合を修正しました。
- Flowを他のユーザーと共有できない不具合を修正しました。
- 有償プランのお客様にLicenseマネージャが表示できない不具合を修正しました。
- Node Editorを開き直そうとしたり、画面をリフレッシュしたりした場合に開くことができない不具合を修正しました。

## Release History

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

- [0.9.0](./enebular-edge-agent/0.9.0.md) (Jan 30th, 2018)
- [0.9.1](./enebular-edge-agent/0.9.1.md) (Feb 28th, 2018)