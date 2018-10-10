---
lastUpdated: 2018-09-25
---

# enebular Release Notes {#enebular}

## 2.5.0 (September 25th, 2018)

### New

- Discover画面からアセットをフォークすると新たに複製されたアセットの画面に自動的に遷移するようになりました
- DataSourceがPubNubもしくはFirebaseの場合にInfoMotionのダッシュボードでInfoTypeキーと値の候補がドロップダウンリストで表示されるようになりました
- InfoType登録時にInfoType名を設定出来るようになりました

### Fixed

- フローエディタ画面で、1つのフローを同時に複数のフローエディタで編集できないように修正しました
- 英語版のユースケースページで単語間の空白が2カ所欠落していたため修正しました

### Changed

N/A

### Known Issues

- 言語設定を英語にしたブラウザでフローエディタを開いても、一部の説明文が日本語で表示されます
- InfoMotionを埋め込んだ共有ページでは、filter機能が使用できません

### Release History

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

## Latest Release - 2.2.0 (September 7th, 2018)

# 2.2.0

## New

- 素早く簡単にenebular-agentをセットアップするためのワンステップのインストールスクリプトを用意しました
- AWS IoTのThingを簡単に作成とセットアップできるためのツールを用意しました
- Debian（systemd）ベースのシステムで起動時にenebular-agentを起動するためのスタートアップ登録を簡単に行える機能を追加しました
- 設定オプションの一覧を表示する機能を追加しました
- 新規の設定オプションとサブコマンドを利用できるようにコマンドラインによるオプションの指定に対応しました

## Fixed

- AWS IoTで接続されたenebular-agentの接続状況に関わらず、enebular上で常に"Connected"になってしまう不具合に対応しました
- enebularロギングのアップロードサイズ処理でマイナーな修正をしました
- mbed-cloud-connector
    - ファイルが不足していてビルドができない不具合を修正しました
    - readmeファイルで文字化けを修正しました

## Changed

- Node-REDバージョンを0.18.xにアップデートしました
- AWS IoTとの接続状態を正しく監視できるようにしました
- デーモン使用のサポートを改善しました（syslogロギングとプロセス終了のサポート）
- Node-REDインスタンスのプロセス管理（起動と停止処理）を改善しました
- readmeファイルにクイックセットアップの説明と手動設定の詳細を追加しました
- 統合のテストを追加しました

## Known Issues

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

- [2.2.0](./enebular-agent/2.2.0.md) (September 7th, 2018)
- [2.1.0](./enebular-agent/2.1.0.md) (June 7th, 2018)
- [2.0.0](./enebular-agent/2.0.0.md) (Jan 30th, 2018)

---

# enebular edge agent Release Notes {#enebular-edge-agent}

## Latest Release - 1.0.1 (June 7th, 2018)

enebular-edge-agent 1.0.1 では、バージョンを Mbed Cloud Client 1.3.1.1 General Availability (GA) アップデートしました。

## New
- N/A

## Fixed
- Wi-Fiモジュールとの通信処理の排他制御が原因で長時間起動時にネットワークが切断される問題を、Wi-Fiモジュールのライブラリを更新することで修正しました

## Changed
- Mbed Cloud Client 1.3.1.1 General Availability (GA) へアップデートを行いました

## Known Issues
- BME280 ノードの使用時、フローのサイズが大きいと正常に動作しない場合があります
- Inject ノードにおいて、PayloadにはTimestampのみ、RepeatにIntervalのみしか設定できません

### Operating Environment

#### Operating System

* [Mbed OS 5.8.2](https://github.com/ARMmbed/mbed-os/tree/mbed-os-5.8.2) (ARM Ltd.)

#### Hardware

enebular-edge-agent 1.0.1は、下記のハードウェアを対象としています。

* [FRDM-K64F](https://www.nxp.com/jp/products/software-and-tools/hardware-development-tools/freedom-development-boards/freedom-development-platform-for-kinetis-k64-k63-and-k24-mcus:FRDM-K64F) (NXP Semiconductors N.V.) + Stag Beetle Board (Uhuru Corporation)

#### Communication

* IEEE 802.11 b/g/n (IEEE 802.11n は2.4GHzのみの対応です)
* WPA/WPA2

## Release History

* [1.0.1](./enebular-edge-agent/1.0.1.md) (June 7th, 2018)
* [1.0.0](./enebular-edge-agent/1.0.0.md) (May 18th, 2018)
* [0.10.0](./enebular-edge-agent/0.10.0.md) (Apr 27th, 2018)
* [0.9.1](./enebular-edge-agent/0.9.1.md) (Feb 28th, 2018)
* [0.9.0](./enebular-edge-agent/0.9.0.md) (Jan 30th, 2018)
