# ユーザー/フォルダ {#UserFolder}

## 概要 {#Overview}

ここではenebular-agentが使用するLinuxのユーザーおよびフォルダについて説明します。  

## 説明 {#Description}

### ユーザー {#DescriptionUser}

* ユーザー
  * enebular-agentのインストール前にユーザーの作成が必要です
  * 作成したユーザーは[インストール手順 - オプション](Installation.md#DescriptionOption)の`-u`または`--user`で指定してください

    ユーザーを`enebular`とした場合、次のように記述します。  
    ```
    -u=enebular
    ```
 以降の説明では、「インストール時に指定したユーザー」を「インストールユーザー」と省略して記載します。  
 インストールのオプションの詳細は[インストール手順 - オプション](Installation.md#DescriptionOption)を参照してください。  

* グループ
  * グループは作成したユーザーと同じ名称になります
  * ユーザーの作成時にグループに所属するメンバは作成したユーザーのみになります

* 権限
  * 作成するユーザーは一般ユーザーの権限（root権限以外）で作成してください
  * root権限のコマンド（`sudo`など）を実行する場合は、ユーザーにsudo権限を追加してください
  * デバイスにデプロイ（ダウンロード）されたフローおよびファイルは次の権限で実行されます

|種類|権限|
|:--|:--|
|フロー|インストールユーザー|
|ファイル|インストールユーザー|

* プロセス
enebular-agentが起動するプロセスの、プロセス名とコマンド名（`ps`コマンドで表示される名称）と実行権限は次の表になります。  

|AWS IoTの場合|||
|:--|:--|:--|
|プロセス名|コマンド名|実行権限|
|enebular-agent|enebular-awsiot-agent|インストールユーザー|
|Node-RED|node-red|インストールユーザー|

|Pelion Device Managementの場合|||
|:--|:--|:--|
|プロセス名|コマンド名|実行権限|
|enebular-agent|enebular-pelion-agent|インストールユーザー|
|Node-RED|node-red|インストールユーザー|
|mbed-cloud-connector|enebular-agent-mbed-cloud-connector.elf|インストールユーザー|

### Remote Maintenanceログイン用ユーザ {#RemoteMaintenanceUser}
enebular-agentのインストーラではインストール時に自動的にroot権限のコマンドが実行できる`enebular-remote-admin`という名称のユーザが生成されます。このユーザのパスワードは[インストール手順 - オプション](Installation.md#DescriptionOption)の`--remote-maintenance-user-password`で指定したものになります。

### フォルダ {#DescriptionFolder}

enebular-agentは[インストール手順 - オプション](Installation.md#DescriptionOption)の`-u`または`--user`と`-d`または`--install-dir`で指定したフォルダにインストールされます。  
`-u`または`--user`を<ユーザー>に指定し、`-d`または`--install-dir`を省略した場合は、次のフォルダにインストールされます。  
```
/home/<ユーザー>/enebular-runtime-agent/
```
上記の指定でインストールした場合に作成されるフォルダおよびファイルのパーミッション（アクセス権）と主なフォルダおよびファイルについて、以降で説明します。  

* インストールフォルダおよびファイルのパーミッション一覧

|種類|ユーザーパーミッション|グループパーミッション|その他のパーミッション|
|:--|:--|:--|:--|
|フォルダ|rwx（注１）|r-x（注２）|r-x（注２）|
|ファイル|rw-（注３）|r--（注４）|r--（注４）|
|ファイル|rwx（注５）|r-x（注６）|r-x（注６）|

rwxのrは読み取り・wは書き込み・xはファイルの場合は実行、フォルダの場合はアクセスのそれぞれ可・不可を表しており、上の表の（注Ｘ）と下の表の（注Ｘ）は対で、次の表の意味になります。  

|（注Ｘ）|種類|パーミッション|読み取り<br>可/不可|書き込み<br>可/不可|実行/アクセス<br>可/不可|
|:--|:--|:--|:--|:--|:--|
|（注１）|フォルダ|rwx|可|可|アクセス可|
|（注２）|フォルダ|r-x|可|不可|アクセス可|
|（注３）|ファイル|rw-|可|可|実行不可|
|（注４）|ファイル|r--|可|不可|実行不可|
|（注５）|ファイル|rwx|可|可|実行可|
|（注６）|ファイル|r-x|可|不可|実行可|
注１の説明：対象はフォルダ、ユーザーのパーミッションは読み取り可、書き込み可、アクセス可

* enebular-agent関連の機能がインストールされるフォルダ一覧

|フォルダ|説明|
|:--|:--|
|/home/<ユーザー>/enebular-runtime-agent/agent/|enebular-agentのコアとなる機能がインストールされるフォルダです|
|/home/<ユーザー>/enebular-runtime-agent/node-red/|Node-REDがインストールされるフォルダです（注１）|
|/home/<ユーザー>/enebular-runtime-agent/ports/awsiot/|AWS IoT の機能がインストールされるフォルダです|
|/home/<ユーザー>/enebular-runtime-agent/ports/pelion/|Pelion Device Managementの機能がインストールされるフォルダです|
|/home/<ユーザー>/enebular-runtime-agent/tools/|enebular-agentのユーティリティツールがインストールされるフォルダです<br>AWS IoT、Pelion Device Management、enebular-agentインストール・アップデート用シェルスクリプトのツールが入っています|

* 注１：詳細については、[Node-RED - 備考](Node-RED.md#DescriptionRemarks)を参照してください

* 鍵と証明書あるいは認証情報の保存フォルダ一覧

|フォルダ|説明|
|:--|:--|
|/home/<ユーザー>/enebular-runtime-agent/ports/awsiot/certs/|AWS IoTの鍵と証明書が保存されるフォルダです<br>対象ファイル：拡張子が"pem"のファイル|
|/home/<ユーザー>/enebular-runtime-agent/ports/pelion/.pelion-connector/pal/|Pelion Device Managementの認証情報が保存されるフォルダです|
|/home/<ユーザー>/enebular-runtime-agent/keys/enebular|root権限のプロセスを実行する際にenebularからの指令であることを確認する際に使用する署名用の鍵が保存されるフォルダです|
|/home/<ユーザー>/enebular-runtime-agent/keys/tmp_private_key|Remote Maintenance実施時に一時的に保存されるsshクライアント接続用の秘密鍵が保存されるフォルダです|
|/home/<ユーザー>/.ssh|Remote Maintenance実施時に一時的に保存されるsshサーバ接続用の公開鍵が保存されるフォルダです|

* デプロイされたフローおよびファイルの保存フォルダ一覧

|フォルダ|説明|
|:--|:--|
|/home/<ユーザー>/enebular-runtime-agent/node-red/.node-red-config/|デプロイされたフローが保存されるフォルダです|
|/home/<ユーザー>/enebular-runtime-agent/ports/awsiot/assets/|AWS IoTのデプロイされたファイルが保存されるフォルダです|
|/home/<ユーザー>/enebular-runtime-agent/ports/pelion/assets/|Pelion Device Managementのデプロイされたファイルが保存されるフォルダです|

* JavaScriptのインストールフォルダ

|フォルダ|説明|
|:--|:--|
|/home/<ユーザー>/nodejs-v<バージョン>/|JavaScript実行環境（Node.js）がインストールされるフォルダです（注１）<br><バージョン>：Node.jsのバージョン|

* 注１：詳細については、[Node-RED - 備考](Node-RED.md#DescriptionRemarks)を参照してください

* Linuxのシステムフォルダ

|フォルダ|説明|
|:--|:--|
|/etc/systemd/system/|enebular-agentのLinuxのサービス用のファイルが格納されるフォルダです<br>作成されるファイル：enebular-agent-<ユーザー>.service（注１）|

* 注１：詳細については、[起動/停止 - <サービス名>ファイル](StartStop.md#ExampleServiceFile)を参照してください  

