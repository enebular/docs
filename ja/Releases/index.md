---
lastUpdated: 2017-01-30
---

# enebular Release Notes {#enebular}

## Latest Release - 2.0.0 (Jan 30th, 2018) 

enebularは2014年11月22日のβリリースから3年の時を経て、大きく進化しました。今回のリリースでは、商用利用を意図した運用管理機能の追加や、対応デバイスの拡充、ユーザービリティの向上を図っています。

### New

#### Enterprise Planの提供
これまで無償での提供のみでしたが、サポートの充実や安定した運用を望む声に応え、Enterprise Planの提供を開始いたします。Enterprise Planでは、マイコン向けエージェントの利用やデバイスの運用管理機能、プロッフェショナルサポートをご利用いただけます。Enterprise Planの詳細については、support@enebular.com にお問い合わせください。

#### 一新された管理コンソール
管理コンソール（ダッシュボード）を一新し、より見やすくなりました。
管理コンソールからFlowをデプロイできるなど、ユーザービリティを改善しました。

#### デプロイ可能なデバイスの拡充
これまで対応していたクラウド環境やゲートウェイに加え、Arm Mbed対応マイコンボードへのフローデプロイをサポートしました。ゲートウェイ向けエージェントについては、[enebular-agent version 2.0.0リリースノート](#enebular-agent)を参照してください。マイコン向けエージェントについては、[enebular-edge-agent version 0.9.0リリースノート](#enebular-edge-agent)を参照してください。

#### 新しいコネクションタイプの追加
これまで対応していたAWS IoT、Herokuに加え、Arm Mbed Cloudのサポートが追加されました。Arm Mbed Cloud対応はEnterprise Plan利用者限定の機能となります。

#### デバイス管理機能の追加
enebular agentやenebular edge agentが動作しているデバイスの状態（ステータス）とログのリモートモニタリング機能が追加されました。デバイス管理機能はEnterprise Plan利用者限定の機能となります。

#### 可視化機能INFOMOTION（インフォモーション）の刷新
INFOMOTIONも一新され、より簡単にお使いいただけるようになりました。"Dashboard(ダッシュボード)"機能が追加され、複数のサイズ変更可能なグラフを一度に表示できるようになりました。Dashboardは、InfoTypeと同様に他のユーザーと共有することができます。その他、グラフデータをjson形式でダウンロード可能になる、InfoTypeの共有時にデータストアとの接続が不要になるなど、ユーザビリティの向上を行っています。

### Operating Environment
enebularの動作確認済みWebブラウザは下記の通りです。

|Web browser|Version|OS|
|--|--|--|
|Google Chrome|63.0 or later|Windows/Mac|
|Mozilla Firefox|57.0 or later|Windows/Mac| 

enebularは今後もユーザーの声を反映し、新しい機能の追加やユーザービリティの向上を行い、より使いやすいサービスを目指してまいります。enebularについてのご意見お問い合わせは support@enebular.com にお寄せください。ユーザーの皆様のフィードバックをお待ちしております。

### Release History

- [2.0.0](./enebular/2.0.0.md)

---

# enebular agent Release Notes {#enebular-agent}

## Latest Release - 2.0.0 (Jan. 30th, 2018)

enebular-agentは、Linux OSを搭載したゲートウェイ向けのenebular用IoTエージェントソフトウェアです。enebular vesion 2.0.0のリリースにあわせ、enebular-agent version2.0.0をリリースします。

enebular agentの詳しい仕様については、弊社サポート(support@enebular.com)までお問い合わせください。

### New

#### Device Management/Logging
* enebularのデバイス管理機能で、enebular-agentが搭載されたIoTデバイスの状態(ステータス)やログを監視することができるようになりました
* enenbular-agentは、enebularに対して定期的にデバイスの状態とログを通知します
* 本機能はEnterprise Planの有償機能として提供されます

#### Connection Type
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

##### raspbian streach base (9.0)
* nodejs 8.9.0
* npm 5.5.1
* node-red 0.17.5

#### rasobian jessie base (8.0)
* nodejs 8.9.0
* npm 5.5.1
* node-red 0.17.5 

#### Linux(virtualbox)

##### Debian jessie (8.9)
* nodejs 9.2.0
* npm 5.5.1
* node-red 0.17.5

##### Debian streach(9.1)
* nodejs 9.2.1
* npm 5.6.0
* node-red 0.17.5

## Release History

- [2.0.0](./enebular-agent/2.0.0.md)

---

# enebular edge agent Release Notes {#enebular-edge-agent}

## Latest Release - 0.9.0 (Jan. 30th, 2018)

enebular-edge-agentは、[ARM Ltd.](https://www.arm.com/)の[Mbed OS](https://os.mbed.com/)を採用したマイクロコントローラ向けのenebular用IoTエージェントソフトウェアです。enebular version2.0.0のリリースにあわせ、enebular-edge-agent version1.0.0をリリースします。

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