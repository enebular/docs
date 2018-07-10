---
lastUpdated: 2018-07-06
---

# enebular Release Notes {#enebular}

## 2.3.0 (July 6th, 2018)

### New

- Projectの管理機能に、Published Assets画面を追加しました
- Published Assets画面からPublish済みのアセットを削除できるようになりました

### Fixed

- LicenseManagerの画面でReserveをする際、ConnectionTypeにAWS IoTを選択してもconnection一覧が表示されない不具合を修正しました
- LicenseManagerの画面で、ConnectionTypeを選択しなくてもReserveボタンが押せてしまう不具合を修正しました

### Changed

- PublishしたAssetsを削除した際、Publish元のAssetsも削除されていましたが、PublishされたAssetsのみ削除されるようにしました
- Assetsをpublishしているユーザーを削除した際、PublishされているAssetsが削除されるようにしました
- 既にPublish済みのAssetsを更新した場合、従来は新しいAssetsとしてPublishされていましたが、既存のPublishされたAssetsが更新されるようにしました
- Account Settings画面からUser IDが確認できるようになりました
- Node-REDのnode-red-node-twitterのアップデートに伴い、フローエディタのtwitterノードをバージョン1.0.1に更新しました

### Known Issues

* 言語設定を英語にしたブラウザでNode-REDの編集画面を開いても、一部の説明文が日本語で表示されます
* InfoMotionを埋め込んだ静的ページを、enebularにログインしていないブラウザで開こうとするとグラフが表示されません
* 現状のNode-REDの編集画面では、1つのフローを複数のユーザーが開くことが出来ますが、それぞれ「Deploy」ボタンを押した場合、enebular上に残るのは最後に保存した物のみになります

### Release History

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

## Latest Release - 2.1.0 (June 7th, 2018)

## New

* Mbed Cloudを利用してenebularに接続する機能を公開しました
    * 従来は、AWS IoTを利用してeneublarに接続していましたが、AWS IoTを利用するか、Mbed Cloudを利用するかを選択していただけるようになりました
    * Mbed Cloudを利用する場合の詳しい情報は、support@enebular.comにお問い合わせください
* enebularにおいてReservedにしたライセンスに、enebular-agentを自動的に紐付けをするアクティベーション機能に対応しました
* Node-REDのデータ用ディレクトリ（userDir）を環境変数NODE_RED_DATA_DIRで指定できるようにしました
* Node-REDを起動するための実行コマンドを環境変数NODE_RED_COMMANDで指定できるようにしました

## Fixed

* enebular-agent内のNode-REDのフローエディタに接続して、デプロイ済みのフローを編集できる問題を修正し、フローの編集ができないようにしました

## Changed

* ロギング機能において、1回の通信で送信するログファイルの最大サイズを10kバイトに制限しました
* ロギング機能において、起動後の３分間は30秒周期でログを送信するようにしました（通常は300秒周期で送信します）
* 新機能および変更にあわせてREADMEファイルを更新しました

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
