# アップデート手順 {#Updater}

## 概要 {#Overview}

本手順書では、enebular-agentアップデート（ユーティリティ）を使用したアップデート手順を説明します。  

enebular-agentには、AWS IoTを使用してenebularに接続する場合と、Pelion Device Managementを使用してenebularに接続する場合の二つの接続方法があります。  
本手順書では、両方のアップデート手順を記載していますが、enebular-agentアップデートは既にデバイスにインストールされている接続方法に合わせてアップデートを行います。  
なお、本文中に（AWS IoTの場合）あるいは（Pelion Device Managementの場合）と説明を付けていますので、該当箇所のみを実施をしてください。  

アップデートは、対象デバイスのLinux OS上でシェルスクリプト（以降、アップデートスクリプト）を実行することにより行われます。  

## 説明 {#Description}

### 前提条件 {#DescriptionPrerequisites}

アップデートスクリプトを実行する前に確認する事項は以下の項目です。  

* バージョン2.4.0以降のenebular-agentのインストールが完了していること
* enebularへの接続方法：AWS IoTあるいはPelion Device Management
* Raspbian Jessieで動作しているenebular-agentをバージョン2.10.0以降にアップデートする場合は、事前にRaspbian Stretchにアップデートしてから実施してください。（参考：[Debian 8 (jessie) からのアップグレード](https://www.debian.org/releases/stretch/i386/release-notes/ch-upgrading.ja.html)）

以下に対象毎の確認事項を記載しますが、これらはenebular-agentのインストール時に取得・準備した事項ですので、
インストールが完了してれば問題にならない項目ですが、
**※情報**はアップデートスクリプトの実行に必要な情報ですので確認後に控えるようにしてください。  

#### Linux {#DescriptionPrerequisitesLinux}

* enebular-agentがサポートする[Debian GNU/Linux](../Other/Support.md#enebular-agent)がインストールされていること
* **※enebular-agentを実行するユーザー** （以降では「enebular」がenebular-agentを実行するユーザーという前提で記載）
* インストールに使用するユーザーにsudo権限（`sudo`コマンドを使用）があること
* インターネット接続環境があること

#### [AWS IoT](https://portal.aws.amazon.com)（AWS IoTの場合） {#DescriptionPrerequisitesAWSIoT}

* AWSのアカウント
    * このアカウントにはIAMFullAccessの権限が与えられていること

#### [Pelion Device Management](https://portal.mbedcloud.com)（Pelion Device Managementの場合） {#DescriptionPrerequisitesPelion}

* Pelion Device Managementのアカウント
* **※Pelionの接続モード：`developer`あるいは`factory`**

確認方法  
* 次のファイルをエディター等で確認し、記述内容から判別する
```
/home/enebular/enebular-runtime-agent/tools/mbed-cloud-connector/define.txt
```
`add_definitions(-DMBED_CONF_APP_DEVELOPER_MODE=1)`：Pelionの接続モードは`developer`
`add_definitions(-DMBED_CONF_APP_DEVELOPER_MODE=0)`：Pelionの接続モードは`factory`

#### [enebular](https://www.enebular.com) {#DescriptionPrerequisitesEnebular}

* enebularのアカウント
* enebularのプロジェクト

#### インストール時のオプション {#DescriptionPrerequisitesInstallOption}

* インストール時のオプションに`--no-startup-register`を指定していないこと  
`--no-startup-register`を指定していた場合、アップデートスクリプトを使用したアップデートは行えません。  
アップデートスクリプトを使用しないアップデートについては、 **support@enebular.com** までお問い合わせください。  
`--no-startup-register`オプションの詳細は、[インストール手順 - オプション](Installation.md#DescriptionOption)を参照してください。  

### アップデートスクリプトの実行 {#DescriptionUpdaterScript}

アップデートスクリプトは、対象デバイスのLinuxにログインして、shellより以下のコマンドを入力することで実行できます。  

```
wget -qO- https://enebular.com/agent-update | sudo -E bash -s -- オプション1 オプション2 ・・・
```

上記のコマンドを実行するフォルダは、どこでも構いません。  
アップデートスクリプトは、enebular.comサーバーよりインターネット経由で取得します。  
アップデートに必要な情報（enebularへの接続方法：AWS IoTあるいはPelion Device Management、インストール先フォルダ等）は
アップデートスクリプトが環境変数等を参照して自動取得します。  
そのため、任意のフォルダでアップデートスクリプトを実行することができます。  
また、アップデートスクリプトはenebular-agentのサービスの起動状況によらず、アップデートを行うことができます。  

### オプション {#DescriptionOption}

アップデートスクリプトに設定できるオプションとオプション引数と省略可/不可は次の表のとおりです。  

|オプション|オプション引数|省略可/不可|説明|
|:--|:--|:--|:--|
|--user|--user=*|不可|enebular-agentを実行するユーザー|
|--pelion-mode|=[developer,factory]|（注１）|Pelionの接続モード（developer,factory）を指定します<br>（Pelion Device Managementの場合）|
|-h,--help|無し|可|利用情報を出力する|

*は任意の文字列を示します  
=[aaa,bbb]はaaaかbbbのどちらかを選択することを示します  

* 注１：AWS IoTの場合は省略、Pelion Device Managementの場合は省略不可

#### オプション設定時の注意事項 {#DescriptionOptionCaution}

オプション設定時の注意事項を列挙します。  

* オプションは複数指定可能です（オプションとオプションの間は半角ブランク）
* オプション引数には不要な半角ブランクを入れないでください

## 事例 {#Example}

### アップデートスクリプトの実行例 {#ExampleUpdater}

アップデートスクリプトの実行例を、AWS IoTの場合とPelion Device Managementの場合に分けて示します。  

#### AWS IoT用のコマンド実行例（AWS IoTの場合） {#ExampleUpdaterAWSIoT}

```
wget -qO- https://enebular.com/agent-Update | sudo -E bash -s -- --user=enebular
```

上記事例のオプションの意味は以下のとおりです。  

* Linuxユーザーは`enebular`
* その他のオプションは省略

#### Pelion Device Management用のコマンド実行例（Pelion Device Managementの場合） {#ExampleUpdaterPelion}

```
wget -qO- https://enebular.com/agent-Update | sudo -E bash -s -- --user=enebular --pelion-mode=factory
```

上記事例のオプションの意味は以下のとおりです。  

* Linuxユーザーは`enebular`
* Pelionの接続モードは`factory`
* その他のオプションは省略

### 結果 {#ExampleResult}

アップデートスクリプトは、アップデート前のenebular-agentを停止してからアップデート処理を行います。  
その後アップデートしたenebular-agentを起動し、アップデートスクリプトは終了します。  

#### enebular-agentの実行状況の確認方法 {#ExampleResulEnebularAgentCheck}

```
systemctl status enebular-agent-enebular.service
```

上記のコマンドを実行することでenebular-agentのサービスの起動状況（起動/停止）を確認することができます。  

```
sudo journalctl -ex -u enebular-agent-enebular.service
```

enebular-agentのサービスが起動している場合は、上記のコマンドを実行することでenebular-agentの実行状況を確認することができます。  

### Node.jsのインストール {#ExampleNodejsInstall}

必要としているNode.jsのバージョンを利用可能にするために、Node.jsをダウンロードしインストールする場合があります。  
Node.jsの詳細については、[Node-RED - 備考](Node-RED.md#DescriptionRemarks)を参照してください。  

