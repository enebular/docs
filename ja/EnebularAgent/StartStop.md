# 起動/停止 {#StartStop}

## 概要 {#Overview}

ここではenebular-agentの起動/停止について説明します。  

## 説明 {#Description}

### サービス {#DescriptionService}
enebular-agentはLinuxのサービスとして動作します。  
Linuxのサービスとは、Linuxの起動時に同時に起動され、バックグラウンドで動作するプログラムのことです。  
Linuxのサービスは、`systemctl`コマンドを使用してコントロールすることができます。  
また、サービスが何かの理由により停止してしまった場合は、本章の<サービス名>ファイル・オプション：Restart の[Restartパラメータ](#ExampleServiceFileRestartParameter)の定義に従って再起動が行われます。  
なお、本サービスは、AWS IoT、Pelion Device Management共通です。  

ここでは、[インストール手順 - オプション](Installation.md#DescriptionOption)の`--no-startup-register`は省略し、サービス自動起動を有効した前提の説明です。  

### コマンド {#DescriptionCommand}
`systemctl`コマンドの記述は次のようになります。  
```
(sudo) systemctl [命令] [サービス名]
```

#### 命令 {#DescriptionCommandOrder}

使用できる主な命令、`sudo`の必要性と説明は次の表になります。  

|命令|sudoの必要性|説明|
|:--|:--|:--|
|start|必要|サービスを起動する|
|stop|必要|サービスを停止する|
|enable|必要|サービス自動起動を有効にする（注１）|
|disable|必要|サービス自動起動を無効にする（注１）|
|status|不要|サービスの状態（起動/停止）を表示する|
|is-enabled|不要|サービス自動起動の状態（有効/無効）を表示する|

* 注１：サービス自動起動とは、Linuxの立ち上がり時にサービスを起動することで、
「有効」はサービスの起動を行い、「無効」はサービスの起動を行いません。  
設定したサービス自動起動の状態は、次のLinux立ち上がり時から動作します。  

#### サービス名 {#DescriptionCommandService}

サービス名は、次のようになります。  
```
enebular-agent-<ユーザー>.service  
```
<ユーザー>は[インストール手順 - オプション](Installation.md#DescriptionOption)の`-u`または`--user`で指定したユーザーになります。  
また、オプション`-u`または`--user`を省略した場合は、<ユーザー>は`enebular`になります。  
ユーザーが`enebular`の場合、サービス名は、次のようになります。  

```
enebular-agent-enebular.service  
```

## 事例 {#Example}

### 具体的なコマンド例 {#ExampleCommnad}

コマンドで説明した命令の具体的なコマンドの記述は以下のようになります。  

* start `sudo systemctl start enebular-agent-<ユーザー>.service`  
* stop `sudo systemctl stop enebular-agent-<ユーザー>.service`  
* enable `sudo systemctl enable enebular-agent-<ユーザー>.service`  
* disable `sudo systemctl disable enebular-agent-<ユーザー>.service`  
* status `systemctl status enebular-agent-<ユーザー>.service`  
* is-enabled `systemctl is-enabled enebular-agent-<ユーザー>.service`  

#### statusコマンドのレスポンス {#ExampleCommnadStatusResponse}

`status`コマンドのレスポンスによるサービスの状態（起動/停止）の見方は次の表になります。  

|レスポンス|サービスの状態|
|:--|:--|
|Active:行にactiveを含む|起動|
|Active:行にfailedを含む|停止|

実際のレスポンスは10数行有り、以下のような行を含んでいます。  
起動の場合の例：  

```
Active: active (running) since Tue 2019-03-19 02:04:38 JST; 1 weeks 1 days ago
```

#### is-enabledコマンドのレスポンス {#ExampleCommnadIsenabledResponse}


`is-enabled`コマンドのレスポンスによるサービス自動起動の状態（有効/無効）の見方は次の表になります。  

|レスポンス|サービス自動起動の状態|
|:--|:--|
|enabled|有効|
|disabled|無効|

### サービス自動起動の状態の変更 {#ExampleChenge}

サービス自動起動の状態の変更の手順を以下に示します。  
設定したサービス自動起動の状態は、次のLinux立ち上がり時から動作します。  

* サービス自動起動の状態を「有効」にする場合
  1. サービス自動起動の状態（有効/無効）を表示する`systemctl is-enabled <サービス名>`  
  2. サービス自動起動の状態が「無効」の場合は3.へ、「有効」の場合は終了  
  3. サービス自動起動の状態を「有効」にする`sudo systemctl enable <サービス名>`  
  4. サービス自動起動の状態（有効/無効）を表示する`systemctl is-enabled <サービス名>`  
  5. サービス自動起動の状態が「有効」になっていることを確認する  


* サービス自動起動の状態を「無効」にする場合
  1. サービス自動起動の状態（有効/無効）を表示する`systemctl is-enabled <サービス名>`  
  2. サービス自動起動の状態が「有効」の場合は3.へ、「無効」の場合は終了  
  3. サービス自動起動の状態を「無効」にする`sudo systemctl disabled <サービス名>`  
  4. サービス自動起動の状態（有効/無効）を表示する`systemctl is-enabled <サービス名>`  
  5. サービス自動起動の状態が「無効」になっていることを確認する  

### <サービス名>ファイル {#ExampleServiceFile}

<サービス名>である`enebular-agent-<ユーザー>.service`ファイルは`/etc/systemd/system/`にあります。  

`enebular-agent-<ユーザー>.service`ファイルについて以下に説明します。  

`enebular-agent-enebular.service`のファイル例（AWS IoTの場合）

```
[Unit]
Description=enebular-agent
Documentation=https://docs.enebular.com/
After=network.target network-online.target
Wants=network-online.target

[Service]
User=enebular
Environment=PATH=/home/enebular/nodejs-v<バージョン>/bin:/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin
PIDFile=/home/enebular/enebular-runtime-agent/ports/awsiot/.enebular-agent.pid

ExecStart=/home/enebular/enebular-runtime-agent/ports/awsiot/bin/enebular-awsiot-agent --enable-syslog --daemon-mode
ExecStop=/home/enebular/enebular-runtime-agent/ports/awsiot/bin/enebular-awsiot-agent kill
Restart=on-failure
RestartSec=60s

[Install]
WantedBy=multi-user.target network-online.target
```
ファイル内は[Unit]、[Service]、[Install]の三つのセクションに分かれていて  
セクションとその説明は次の表になります。

|セクション|説明|
|:--|:--|
|[Unit]|Unitの依存関係/順序関係など、Unitのタイプに依存しない設定項目|
|[Service]|サービスに関する設定項目|
|[Install]|「systemctl enable/disable」コマンドの動作に影響する設定項目|

`enebular-agent-<ユーザー>.service`ファイルで使われている[Service]セクションのオプションは次の表になります。  

|オプション|説明|
|:--|:--|
|User|ユーザー|
|Environment|環境変数を読み込むPath|
|PIDFile|fork型サービスのメインプロセスのPIDファイル|
|ExecStart|サービス起動コマンド|
|ExecStop|サービス停止コマンド|
|Restart|サービスプロセス停止時の再起動条件（注１）|
|RestartSec|サービスプロセス停止時の再起動するまでの時間|

* 注１：`Restart`のパラメータ一覧は次の表になります

#### Restartパラメータ {#ExampleServiceFileRestartParameter}
|パラメータ|説明|
|:--|:--|
|no|再起動を行いません|
|always|常に再起動を行います|
|on-success|終了コード0で停止した際に再起動を行います（注１）|
|on-failure|0以外の終了コードで停止した際に再起動を行います（デフォルト）（注１）|

 * 注１：終了コードは0は正常終了、0以外は異常終了になります
