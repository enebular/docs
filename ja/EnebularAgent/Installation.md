# インストール手順 {#Installation}

## 概要 {#Overview}

本手順書では、enebular-agentのインストール手順を説明します。

enebular-agentには、AWS IoTを使用してenebularに接続する場合と、Pelion Device Managementを使用してenebularに接続する場合の二つの接続方法があります。  
本手順書では、両方のインストール手順を記載していますが、一つのデバイスにはどちらか一方しかインストールできません。  
本文中に（AWS IoTの場合）あるいは（Pelion Device Managementの場合）と説明を付けていますので、該当箇所のみを実施をしてください。  

インストールは、対象デバイスのLinux OS上でシェルスクリプト（以降、インストールスクリプト）を実行することにより行われます。  

## 説明 {#Description}

### 前提条件 {#DescriptionPrerequisites}

インストールスクリプトを実行する前に取得・準備する事項は以下の項目です。  

#### Linux {#DescriptionPrerequisitesLinux}

* enebular-agentがサポートする[Debian GNU/Linux](../Other/Support.md#enebular-agent)がインストールされていること
* enebular-agentを実行するユーザーが作成されていること（以降では`enebular`ユーザーが作成されているという前提で記載）
* インストールに使用するユーザーにsudo権限（`sudo`コマンドを使用）があること
* インターネット接続環境があること

#### [AWS IoT](https://portal.aws.amazon.com)（AWS IoTの場合） {#DescriptionPrerequisitesAWSIoT}

* AWSのアカウントが作成されていること
    * このアカウントにはAWSIoTConfigAccessの権限が与えられていること
* enebular-agentのインストールに使用するAWS Access Key Id（AWSAccessKeyId）が取得されていること
* enebular-agentのインストールに使用するAWS Secret Access Key（AWSSecretKey）が取得されていること

#### [Pelion Device Management](https://portal.mbedcloud.com)（Pelion Device Managementの場合） {#DescriptionPrerequisitesPelion}

* Pelion Device Managementのアカウントが作成されていること
* enebular-agentのインストールに使用するPelion Device ManagementのAPI Keyが取得されていること
* factoryモードでインストールする場合、factory用認証情報（デバイスバンドル）の取得
    * デバイスバンドルの詳しい作成方法については、**support@enebular.com**にお問い合わせください

#### [enebular](https://www.enebular.com) {#DescriptionPrerequisitesEnebular}

* enebularのアカウントが作成済みであること
* enebularにプロジェクトが作成されていること

### インストールスクリプトの実行 {#DescriptionInstallScript}

インストールスクリプトは、対象デバイスのLinuxにログインして、shellより以下のコマンドを入力することで実行できます。  

```
wget -qO- https://enebular.com/agent-install | sudo -E bash -s -- オプション1 オプション2 ・・・
```

上記のコマンドを実行するフォルダは、どこでも構いません。  
インストールスクリプトはenebular.comサーバーよりインターネット経由で取得します。  
インストール先のフォルダはインストールスクリプトのオプションで指定します。  
そのため、任意のフォルダでインストールスクリプトを実行することができます。  

### オプション {#DescriptionOption}

インストールスクリプトに設定できるオプションとオプション引数は次の表のとおりです。  

|オプション|オプション引数|説明|
|:--|:--|:--|
|-p or --port|-p=[awsiot, pelion]|AWS IoTと連携して利用する（awsiot）かPelion Device Managementと連携して利用する（pelion）かを指定します|
|-u or --user|-u=*|Linuxのユーザーを指定します（注１）|
|-d or --install-dir|-d=path|Linux上のインストールフォルダを指定します（注２）|
|-v or --release-version|-v=*|enebular-agentのバージョンを指定します|
|--no-startup-register|無し|enebular-agentの自動起動を有効にするか無効するかを指定します（注３）|
|--aws-access-key-id|=*|AWS Access Key IDを指定します|
|--aws-secret-access-key|=*|AWS Secret Access Keyを指定します|
|--aws-iot-region|=*|AWS IoTのリージョンを指定します|
|--aws-iot-thing-name|=*|AWS IoTのモノ名を指定します|
|--mbed-cloud-mode|=[developer,factory]|Pelionの接続モード（developer,factory）を指定します|
|--mbed-cloud-dev-cred|=*|Pelionの接続モードをdeveloperにした場合のパスを含めた認証情報ファイル名を指定します（注４）|
|--mbed-cloud-pal|=*|Pelionの接続モードをfactoryにした場合のパスを含めた認証情報（palディレクトリ）ファイル名を指定します（注４）（注５）|
|--mbed-cloud-bundle|=*|Pelionの接続モードをfactoryにした場合の認証情報（bundleファイル）のパスを指定します（注４）（注５）|
|--dev-mode|無し|enebular-agentの自動起動を有効にした場合の起動モード（開発者モード,ノーマルモード）を指定します|
|--remote-maintenance-user-password|=*|Remote Maintenanceを行う際のログインユーザのパスワードを指定します|

*は任意の文字列を示します  
=[aaa, bbb]はaaaかbbbのどちらかを選択することを示します  

* 注１：enebular-agentはここで指定されたユーザーでインストールされ実行されます。ユーザーの詳細については、[ユーザー/フォルダ - ユーザー](UserFolder.md#DescriptionUser)を参照してください
* 注２：指定されたフォルダが無い場合は作成します。フォルダの詳細については、[ユーザー/フォルダ - フォルダ](UserFolder.md#DescriptionFolder)を参照してください
* 注３：enebular-agentの自動起動は、Linuxのサービス化することで実現されます。サービス自動起動については[起動/停止 - コマンド](StartStop.md#DescriptionCommand)を参照してください
* 注４：認証情報を置いたパスを含むファイル名を指定します。パスは/tmpなどのように再起動後に保存されない一時的なストレージ領域の使用を推奨します
* 注５：factoryモードの場合の認証情報の作成方法については、**support@enebular.com**までお問い合わせください

**参考：オプション「mbed-cloud」の名称について**

* Pelion Device Managementは2018年8月より提供されています
* このスクリプトファイルはそれ以前に作成したため、オプションの一部の名称がPelion Device Managementの元の名称「mbed cloud」に合わせたままの（mbed-cloud）となっています


#### オプションの詳細 {#DescriptionOptionAwsPelion}

AWS IoT、Pelion Device Management毎の各オプションの必要性について次の表に示します。  

|オプション|AWS IoT設定項目|Pelion Device Management設定項目|オプション省略時の設定内容|
|:--|:--|:--|:--|
|-p or --port|省略可|必須（pelion）|awsiot|
|-u or --user|必須（作成済みユーザー）|必須（作成済みユーザー）|enebular（注１）|
|-d or --install-dir|省略可|省略可|/home/<ユーザー>/enebular-runtime-agent|
|-v or --release-version|省略可|省略可|The latest release（最新リリース）|
|--no-startup-register|省略推奨|省略推奨|enebular-agentの自動起動を有効にします|
|--aws-access-key-id|必須|不要|省略不可|
|--aws-secret-access-key|必須|不要|省略不可|
|--aws-iot-region|必須|不要|省略不可|
|--aws-iot-thing-name|必須|不要|省略不可|
|--mbed-cloud-mode|不要|必須（factory）|developer（注２）|
|--mbed-cloud-dev-cred|不要|必須（developer）|省略不可|
|--mbed-cloud-pal|不要|必須（--mbed-cloud-bundleが指定されている場合は不要）|省略不可|
|--mbed-cloud-bundle|不要|必須（--mbed-cloud-palが指定されている場合は不要）|省略不可|
|--dev-mode|省略可|省略可|enebular-agentを「ノーマルモード」で起動します（注３）|
|--remote-maintenance-user-password|省略可|省略可|enebular|

* 注１：Linuxで作成済みユーザーを使用してください。ユーザー作成していないユーザーを使用した場合、
Linux上に本システムのために必要なフォルダ・ファイルは作成されますが、ログインができるようにするための作業が別途必要になります
* 注２：Pelionの接続モードは`factory`を推奨しています。`developer`を使用する場合は、**support@enebular.com**までお問い合わせください
* 注３：enebular-agentの起動モードは初めてのインストール時は「ノーマルモード」を推奨しています

#### オプション設定時の注意事項 {#DescriptionOptionCaution}

オプション設定時の注意事項を列挙します。

* オプションは複数指定可能です（オプションとオプションの間は半角ブランク）
* オプション引数には不要な半角ブランクを入れないでください
* `-d`または`--install-dir`オプション指定時はフルパスで指定してください（例：`-d=/home/enebular/enebular-runtime-agent`）

コマンド実行時に省略可のオプションを指定しなかった場合、「オプション省略時の設定内容」が設定されます。  

```
wget -qO- https://enebular.com/agent-install | sudo -E bash -s
```

上の例のように、`-p`,`-u`,`-d`を指定しなかった場合は、以下のように設定されます。  

* AWS IoTを用いてenebularと接続します
* enebular-agentは`enebular`ユーザーとして実行されます
* インストール先フォルダは、`/home/enebular/enebular-runtime-agent`になります

## 事例 {#Example}

### インストールスクリプトの実行例 {#ExampleInstall}

インストールスクリプトの実行例を、AWS IoTの場合とPelion Device Managementの場合に分けて示します。  

#### AWS IoT用のコマンド実行例（AWS IoTの場合） {#ExampleInstallAWSIoT}

```
wget -qO- https://enebular.com/agent-install | sudo -E bash -s -- --aws-iot-thing-name=enebular-agent-test --aws-access-key-id=AKIAJWWCHDEPQJD456PQ --aws-secret-access-key=6qtl9JJ90ue5CMeHSJKm1I4iRRwKOQKLCpzt9Y94 --aws-iot-region=us-west-2
```

上記事例のオプションの意味は以下のとおりです。  

* Linuxユーザーは`enebular`（オプション省略のためデフォルト値を適用）
* AWS Access Key IDは`AKIAJWWCHDEPQJD456PQ`
* AWS Secret Access Keyは`6qtl9JJ90ue5CMeHSJKm1I4iRRwKOQKLCpzt9Y94`
* AWS IoTのリージョンは`us-west-2`
* AWS IoTのモノ名は`enebular-agent-test`
* その他のオプションは省略

注意：ここに記載されているAWS Access Key ID, AWS Secret Access Keyの値はあくまで例ですので、この値を使用してコマンドを実行しても正常終了しません。  

**Raspberry Piにインストールする場合のコマンド実行例**

Raspberry Piにenebular-agentのインストールを行う場合、ユーザー名は`pi`にすることを推奨します。  

```
wget -qO- https://enebular.com/agent-install | sudo -E bash -s -- --aws-iot-thing-name=enebular-agent-test --aws-access-key-id=AKIAJWWCHDEPQJD456PQ --aws-secret-access-key=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 --aws-iot-region=us-west-2 --user=pi
```

Raspbianのデフォルトのユーザーである`pi`は、GPIO、I2C等のペリフェラルにアクセスできるグループに所属しています。  
ユーザー名を`pi`にしてインストールすることで、enebular-agentからペリフェラルを利用する場合に権限の設定を行う手間がなくなります。  
`pi`以外のユーザーを指定してインストールする場合、追加されたユーザーはペリフェラルにアクセスできるグループには属していないため、必要に応じてペリフェラルへのアクセス権限を与える必要があります。

#### Pelion Device Management用のコマンド実行例（Pelion Device Managementの場合） {#ExampleInstallPelion}

```
wget -qO- https://enebular.com/agent-install | sudo -E bash -s -- -p=pelion --mbed-cloud-mode=factory --mbed-cloud-pal=/tmp/pelion/pal
```

上記事例のオプションの意味は以下のとおりです。  

* Linuxユーザーは`enebular`（オプション省略のためデフォルト値を適用）
* Pelionの接続モードは`factory`
* Pelionの認証情報（デバイスバンドル）のパスは、`/tmp/pelion/pal`（デバイスバンドルは左記のパスに置いてください）
* その他のオプションは省略

**Raspberry Piにインストールする場合のコマンド実行例**

Raspberry Piにenebular-agentのインストールを行う場合、ユーザー名は`pi`にすることを推奨します。  
詳細は、AWS IoT用にRaspberry Piにインストールする場合のコマンド実行例を参照してください。

```
wget -qO- https://enebular.com/agent-install | sudo -E bash -s -- -p=pelion --mbed-cloud-mode=factory --mbed-cloud-pal=/tmp/pelion/pal --user=pi
```

### 結果 {#ExampleResult}

#### フォルダ構成 {#ExampleResultFolder}

インストールに成功すると、対象デバイスには以下のようなフォルダ構成で関連するファイルがインストールされます。  
（Node.jsのバージョンが9.2.1の場合）

> /home/  
>　　└enebular/  ← ユーザー  
>　　　　　　├enebular-runtime-agent/  ← インストールフォルダ  
>　　　　　　└nodejs-v<バージョン>/  ← JavaScript  

（AWS IoTの場合）  
`/home/enebular/enebular-runtime-agent/ports/awsiot/certs/`フォルダに以下の鍵と証明書が生成されますので、バックアップを行ってください。  

* enebular-agent-test-private.pem
* enebular-agent-test.crt.pem
* root.pem

#### enebular-agentの実行状況の確認方法 {#ExampleResultEnebularAgent}

```
sudo journalctl -ex -u enebular-agent-enebular.service
```

enebular-agentを自動起動する設定でインストールした場合（`--no-startup-register`を指定しない場合）は、上記のコマンドを実行することでenebular-agentの実行状況を確認することができます。  

#### enebularの確認方法（AWS IoTの場合） {#ExampleResultEenebular}

AWS IoTの管理画面から以下を確認することができます。  

* 「管理」－「モノ」に「enebular-agent-test」が追加されます
* 「管理」－「モノ」－「enebular-agent-test」－「操作」で「HTTPS（エンドポイント）」が確認できます

## トラブルシューティング {#Troubleshooting}

### 空き容量が不足している場合

* enebular-agentのインストールに十分な空き容量が存在しない場合、エラーメッセージとともにインストールが失敗します。   
また、全体の空き容量は足りていても領域がパーティションで分割されている場合、enebular-agentがうまくインストールできない場合があります。  
enebular-agentのインストーラーはダウンロードしたパッケージを`/tmp`ディレクトリ以下に保存します。そのため、`/tmp`ディレクトリに割り当てられた容量が少ないと、インストール用のパッケージをダウンロードする際に容量不足が問題になることがあります。  
これらの場合、パーティションの設定を見直すことで問題が解決する場合があります。