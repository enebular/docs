---
lastUpdated: 2018-12-14
---

# enebular Release Notes {#enebular}

=======
## Latest Release - 2.7.0 (December 14th, 2018)

## New {#New}

- Device ListのConnection Type、Statusによるソートが出来るようになりました
- 最後に行ったデプロイを再度実行することの出来る「Redeploy」ボタンを追加しました

## Fixed {#Fixed}

- ライセンスが登録解除されたデバイスがDevice Listに残ってしまう問題を修正し、表示されないようにしました

## Changed {#Changed}

- DiscoverページからAssetをImportする際、Import後に取り込んだAssetのページに移動するようになりました
- ConnectionのAWS IoTの設定ダイアログのタイトルを「AWS IoT Settings」から「AWS IoT Connection」に修正しました
- クレデンシャル情報を含むフローをPublishしようとすると情報漏洩を防ぐための警告が表示されるよう修正しました

## Known Issues {#Known Issues}

- 言語設定を英語にしたブラウザでフローエディタを開いても、一部の説明文が日本語で表示されます
- InfoMotionを埋め込んだ共有ページでは、filter機能が使用できません
- 英語のContact画面からenebularロゴを押してトップページに移動した場合、日本語で表示されます

## Release History {#Release History}

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

## Latest Release - 2.3.0 (November 30th, 2018) {#Latest Release - 2.3.0 (November 30th, 2018)}

## New {#New}

- enebular から enebular agent にファイルをデプロイすることの出来る"Files Deploy"機能が新たに追加されました

## Fixed {#Fixed}

- 不正なAWS IoT用設定ファイルがビルド済みパッケージ（*-prebuilt.tar.gz）に含まれていた不具合に対応しました

## Changed {#Changed}

- Raspberry Piのデバイスで、Node-REDのnrgpioノードがデフォルトで正しく動作するように、enebular-agentのユーザがgpioグループに追加されるようにインストールスクリプトを変更しました
- enebular-agentが何らかの理由で異常終了した場合、60秒後に自動的に再起動されるようにsystemd用のサービス起動登録機能を変更しました
- enebular editorをenebular-agentに接続して、enebular-agent内のフローを直接編集できるようにしました
- READMEs
    - "Mbed Cloud"と記載されているところを全て"Pelion Device Management"に変更しました
    - インストールスクリプトのダウンロード用URLを短縮したものに変更しました

## Known Issues {#Known Issues}

 N/A

### Recommended Hardware {#Recommended Hardware}
推奨動作ハードウェアは下記の通りです。
* Raspberry PI3 Model B

### Operating Environment {#Operating Environment}
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

## Release History {#Release History}

- [2.3.0](./enebular-agent/2.3.0.md) (November 30th, 2018)
- [2.2.0](./enebular-agent/2.2.0.md) (September 7th, 2018)
- [2.1.0](./enebular-agent/2.1.0.md) (June 7th, 2018)
- [2.0.0](./enebular-agent/2.0.0.md) (Jan 30th, 2018)

---

# enebular edge agent Release Notes {#enebular-edge-agent}

## Latest Release - 1.0.1 (June 7th, 2018) {#Latest Release - 1.0.1 (June 7th, 2018)}

enebular-edge-agent 1.0.1 では、バージョンを Mbed Cloud Client 1.3.1.1 General Availability (GA) アップデートしました。

## New {#New}
- N/A

## Fixed {#Fixed}
- Wi-Fiモジュールとの通信処理の排他制御が原因で長時間起動時にネットワークが切断される問題を、Wi-Fiモジュールのライブラリを更新することで修正しました

## Changed {#Changed}
- Mbed Cloud Client 1.3.1.1 General Availability (GA) へアップデートを行いました

## Known Issues {#Known Issues}
- BME280 ノードの使用時、フローのサイズが大きいと正常に動作しない場合があります
- Inject ノードにおいて、PayloadにはTimestampのみ、RepeatにIntervalのみしか設定できません

### Operating Environment {#Operating Environment}

#### Operating System

* [Mbed OS 5.8.2](https://github.com/ARMmbed/mbed-os/tree/mbed-os-5.8.2) (ARM Ltd.)

#### Hardware

enebular-edge-agent 1.0.1は、下記のハードウェアを対象としています。

* [FRDM-K64F](https://www.nxp.com/jp/products/software-and-tools/hardware-development-tools/freedom-development-boards/freedom-development-platform-for-kinetis-k64-k63-and-k24-mcus:FRDM-K64F) (NXP Semiconductors N.V.) + Stag Beetle Board (Uhuru Corporation)

#### Communication

* IEEE 802.11 b/g/n (IEEE 802.11n は2.4GHzのみの対応です)
* WPA/WPA2

## Release History {#Release History}

* [1.0.1](./enebular-edge-agent/1.0.1.md) (June 7th, 2018)
* [1.0.0](./enebular-edge-agent/1.0.0.md) (May 18th, 2018)
* [0.10.0](./enebular-edge-agent/0.10.0.md) (Apr 27th, 2018)
* [0.9.1](./enebular-edge-agent/0.9.1.md) (Feb 28th, 2018)
* [0.9.0](./enebular-edge-agent/0.9.0.md) (Jan 30th, 2018)

# enebular Reference Board Configuration Tool Release Notes

## Latest Release - 1.0.0 (Junuary xxx, 2019)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
[最新版のリンクをはる](https://download.enebular.com/eRB-Config-Tool/eRBConfigTool.msi)
---

# enebular editor Release Notes {#enebular-editor}

## Latest Release - 0.9.0 (November 30th, 2018) {#Latest Release - 0.9.0 (November 30th, 2018)}

## New {#New}

- enebularのフローをPC上で編集しデプロイするためのツール ”enebular editor"のβ版をリリースしました （[Win版](https://s3-ap-northeast-1.amazonaws.com/enebular-editor/win/enebular+editor+Setup+0.9.0.exe)/[Mac版](https://s3-ap-northeast-1.amazonaws.com/enebular-editor/mac/enebular+editor-0.9.0.dmg))

## Fixed {#Fixed}

N/A

## Changed {#Changed}

N/A

## Known Issues {#Known Issues}

- enebular editorをenebular-agentに接続してflowを編集する場合、AWS Lambda Requestノードが使えません

## Release History {#Release History}

* [0.9.0](./enebular-editor/0.9.0.md) (November 30th, 2018)
