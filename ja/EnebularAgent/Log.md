# ログ {#Log}

## 概要 {#Overview}

ここではenebular-agentのログについて説明します。  

ログは有料デバイスでのみ使用できる機能です。  
enebular-agentはログをenebularに送信しクラウドで蓄積します。

## 説明 {#Description}

### 機能 {#DescriptionFunction}

ログは、enebular-agentおよびNode-REDのログを対象として動作します。  
ログは、以下の二つの機能を持ちます。  
* コンソールへのログ出力
    * enebular-agentのコンソール（標準出力:stdout/標準エラー出力:stderr）にログを出力します
* enebularへのログ送信
    * ログを、enebularに送信します

デバイスのログはenebularのDeviceListおよびLogsで確認することができます。  
詳細については[Device List](../Device/DeviceList.md)および[Logs](../Device/Logs.md)を参照してください。


### ログレベル {#DescriptionLogLevel}
ログレベルには`info`と`debug`の二種類があります。  
環境変数`DEBUG`の指定により、出力および送信するログレベルを制御することができます。  
`debug`は`info`よりも詳しい情報を取得することができます。  
環境変数`DEBUG`の値とコンソールに出力するログおよびenebularへの送信情報の関係は次の表になります。  

|環境変数`DEBUG`の値|コンソールに出力するログ|enebularへの送信情報|
|:--|:--|:--|
|なし（デフォルト）|出力しない|info|
|info|info|info|
|debug|debug|debug|

Node-REDのログメッセージは、常に`info`として扱われます。  

#### 確認方法 {#DescriptionLogLevelConfirmationMethod}

環境変数`DEBUG`の確認は次のコマンドのレスポンスにより行います。  
```
echo $DEBUG
```

|レスポンス|環境変数`DEBUG`の値|
|:--|:--|
|ブランク|なし|
|info|info|
|debug|debug|

#### 変更方法 {#DescriptionLogLevelModificationMethod}

環境変数`DEBUG`の変更は以下の手順で行います。  
1. enebular-agentのサービスを停止  
2. Node.jsのパス設定を追加  
3. 環境変数`DEBUG`を設定  
4. enebular-agentを実行しサービスを起動  

enebular-agentの実行は、[起動/停止 - <サービス名>ファイル](StartStop.md#ExampleServiceFile)の`enebular-agent-<ユーザー>.service`ファイルの`[Service]`-`ExecStart=`を参照してください。  
`[Service]`-`ExecStart=`が次の場合
```
ExecStart=/home/enebular/enebular-runtime-agent/ports/awsiot/bin/enebular-awsiot-agent --enable-syslog --daemon-mode
```
実行するコマンド（以降、実行コマンド）は
```
/home/enebular/enebular-runtime-agent/ports/awsiot/bin/enebular-awsiot-agent --enable-syslog --daemon-mode
```
上記になります。  

`-u`または`--user`を<ユーザー>に指定してインストールし、Node.jsのバージョンが<バージョン>の場合の環境変数`DEBUG`の変更手順を以下に示します。  

* 環境変数`DEBUG`を「なし」にする場合

```
sudo systemctl stop enebular-agent-<ユーザー>.service
export PATH=$PATH:/home/<ユーザー>/nodejs-v<バージョン>/bin
export DEBUG=
実行コマンド
```

* 環境変数`DEBUG`を`info`にする場合

```
sudo systemctl stop enebular-agent-<ユーザー>.service
export PATH=$PATH:/home/<ユーザー>/nodejs-v<バージョン>/bin
export DEBUG=info
実行コマンド
```

* 環境変数`DEBUG`を`debug`にする場合

```
sudo systemctl stop enebular-agent-<ユーザー>.service
export PATH=$PATH:/home/<ユーザー>/nodejs-v<バージョン>/bin
export DEBUG=debug
実行コマンド
```

### ライセンス登録 {#DescriptionLicenseRegistration}

ログの通知状態には有効と無効の二種類があります。  
通知状態が有効の場合は、ログの通知が行われ、無効の場合は、ログの通知が行われません。  
ログの通知状態の初期設定は無効です。  
ログの通知状態を有効にするには、ライセンスを購入した際に得られるライセンスキーをデバイスに登録する必要があります。  

ライセンス登録の詳細については、[License Manager](../Device/LicenseManager.md)を参照してください。  

