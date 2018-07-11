---
lastUpdated: 2018-07-11
---

# AWS IoT へのデプロイ

enebular では作成した Flow を AWS IoT にも書き出すことができます。

## Flow の作成

今回は以下のような Flow を作成します。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_01.png)

フローが出来たら、デプロイして保存します。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_02.png)

保存したら、フローの Deploy タブから [Deploy] を押します。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_03.png)

Deploy Flow 画面に移動するので、 [Select Connection Type] を `AWS IoT` にして待機します。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_04.png)

## AWS IoT で設定を作成

AWS IoT で今回用の設定を作成します。

### モノの作成

メニューから 管理＞モノ を選択し、[モノの登録]を押します。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_05.png)

[単一のモノを作成する]を押します。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_06.png)

適当な名前をつけて次に進みます。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_07.png)


### 証明書の作成

1-Click 証明書作成の[証明書の作成]を押します。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_08.png)

鍵ファイルを全てダウンロードして有効化します。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_09.png)

有効化が完了します。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_10.png)

### 新規ポリシーの作成

メニューの 安全性＞ポリシー から[ポリシーの作成]を押します。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_11.png)

名前はわかりやすい名前を指定します。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_12.png)

つづいて、ステートメントを追加します。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_13.png)

ポリシー構文は以下のように指定します。

* アクション
    * iot:*
* リソース ARN
    * *

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_14.png)

このポリシー構文は一旦試すための許可範囲が広い設定です。慣れてきたら、ポリシーも細かく調整してみてください。

作成ボタンを押してポリシーを保存します。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_15.png)

## 証明書へポリシーのアタッチ

このままだとポリシーと証明書が結びついてないのでアタッチします。さきほど作成したモノの画面に移動して、メニューのセキュリティから作成した証明書を選択します。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_16.png)

右上の[アクション]から[ポリシーのアタッチ]を選択します。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_17.png)

さきほど作成したポリシーをアタッチします。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_18.png)

完了したら、証明書がポリシーとモノに結びついていることを確認します。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_19.png)

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_20.png)

## AWS IoT 用の IAM ユーザーを作成

enebular から AWS IoT を利用するための Access Key ID と Secret Access Key を作成します。

IAM のメニューのユーザーから[ユーザーを追加]を押します。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_21.png)

詳細では、わかりやすい名前をつけて [プログラムによるアクセス] にチェックをつけます。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_22.png)

アクセス権限では、[既存のポリシーを直接アタッチ]を選択して、[AWSIoTFullAccess]というポリシーを選択して次に進みます。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_23.png)

最後に間違いがないか確認します。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_24.png)

完了したら、アクセスキー ID とシークレットアクセスキーが記載された CSV ファイルをダウンロードします（このタイミングでしかダウンロードできないので注意して下さい）。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_25.png)

## フローに AWS IoT の設定を反映

先ほどの AWS IoT 設定画面に戻りフローに AWS IoT の設定を反映します。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_26.png)

Select Connection の右の [New] を押します。必要な情報を入力して Connection を作成します。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_27.png)

* Connection Name
    * 任意の英数字
* AWS Access Key ID
    * ダウンロードした CSV からコピーする
* AWS Secret Access Key
    * ダウンロードした CSV からコピーする
* Region
    * 下記 AWS IoT Endpoint URL の `amazonaws.com` の前の部分
* AWS IoT Endpoint URL
    * モノのメニューの**操作**より確認できます（下の画像参照）

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_28.png)

作成した Connection を選択すると登録されているモノが表示されます。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_29.png)

まだ Disconnected になっています。これはデバイスが AWS IoT にデプロイされていないまたは接続が切れていることを意味します。

enebular 側の操作は一旦置いておいて、次はパソコン上でデバイスのセットアップをしましょう。

## デバイス（エージェント）のセットアップ

デバイスのセットアップを行います。なお、デバイスマスターからくる命令を受けて処理を行うコードベースのデバイスのラッパーのことを**エージェント**と呼びます。

<a href="https://github.com/enebular/enebular-runtime-agent" target="_blank">GitHub</a> からダウンロードします。

※以降の手順を進める際には、npmパッケージの [n](https://github.com/tj/n) などを使用してNode.js のバージョンを8.9.0にしてください。

エージェントのコアモジュールをビルドします。

```
cd agent
npm install
npm run build
```

Node-RED のインスタンスをインストールします。

```
cd ../node-red
npm install
```

AWS IoT ポートのモジュールをインストールしてビルドします。

```
cd ../ports/awsiot
npm install
npm run build
```

AWS IoT ポートのディレクトリの下に、AWS IoT ポートを単にラップする `example` というモジュールがあります。`example` モジュールのディレクトリに移動し、モジュールをインストールします。`example` モジュールの `package.json`ファイルを確認すると、Node-RED ディレクトリを指定する環境変数が設定されていることが分かります。

```
cd example
npm install
```

少し前の手順でダウンロードした AWS IoT Thing 用の証明書ファイルを `example` モジュールの `certs` ディレクトリににコピーします。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_30.png)

コピーした証明書ファイルの正しいパスを含めて、この接続情報で `example` モジュールの `config.json`ファイルを更新します。

```json
{
  "host": "<THING SHADOW REST API ENDPOINT>",
  "port": 8883,
  "clientId": "<THING NAME>",
  "thingName": "<THING NAME>",
  "caCert": "./certs/VeriSign-Class 3-Public-Primary-Certification-Authority-G5.pem",
  "clientCert": "./certs/<THING CERT>",
  "privateKey": "./certs/<THING PRIVATE KEY>",
  "topic": "aws/things/<THING NAME>/shadow/update"
}
```
* `<THING CERT>` ･･･ `xxxxxx-certificate.pem.crt`
* `<THING PRIVATE KEY>` … `xxxxxx-private.pem.key`

`<THING SHADOW REST API ENDPOINT>`, `<THING NAME>` はモノのメニューの**操作**より確認できます。(下記画像参照)

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_36.png)


### 実行

上記のセットアップが完了したら、エージェントは `npm run start` コマンドで `example` モジュールのディレクトリから起動できます。

デフォルトの状態ではエージェントがコンソールにログを出力しませんが、`DEBUG` 環境変数を `info` または `debug` のいずれかに設定することで出力するようにできます。

```
DEBUG=info npm run start
```

以下のようなログが表示されるかと思います。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_31.png)

エージェントが正常に起動して AWS IoT に接続できていた場合、次のログメッセージが表示されているかと思います。

```
internal: aws-iot: Connected to AWS IoT
```

これが表示されると、enebular でデバイスを使用することができます。

## フローのデプロイ

デプロイの準備ができました。再度以下の画面に戻ってください。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_32.png)

左のチェックマークにチェックして、[Deploy] を押すとデプロイが完了します。デプロイの履歴で Deploy Status にチェックマークがついていれば成功しています。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_33.png)

また、デバイス側のログで更新されているのが確認できるかと思います。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_34.png)

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_35.png)

`unauthenticated` と出ますが、ライセンスが未購入であるということです。購入をしなくてもフローは動作しますが、ライセンスを購入することでステータスやログの監視ができるようになります。

エージェントのコアを実行する時にさまざまなオプションを指定できます。AWS IoT の場合、このオプションの指定を `ports/awsiot/src/index.js` のソースコードで見ることができます。エージェントのコアがサポートするすべてのオプションには、`agent/src/index.js` のソースコードファイルを参照してください。