---
lastUpdated: 2017-01-30
---

# AWS IoT へのデプロイ

enebular では作成した Flow を AWS IoT にも書き出すことができます。

## Flow の作成

今回は以下のような Flow を作成します。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_02.png)

フローが出来たら、デプロイして保存します。

![](https://i.gyazo.com/bfb9c0e25ad5e4a372a149336bdef8b8.png)

保存したら、フローの Deploy タブから [Deploy] を押します。

![](https://i.gyazo.com/16c258270a9b0f0d609fce45da7df221.png)

Deploy Flow 画面に移動するので、 [Select Connection Type] を `AWS IoT` にして待機します。

![](https://i.gyazo.com/80831b57617fda2ae76ad4f26d3f88c1.png)

## AWS IoT で設定を作成

AWS IoT で今回用の設定を作成します。

### モノの作成

メニューから 管理＞モノ を選択し、[モノの登録]を押します。

![](https://i.gyazo.com/653f48dfa7b14c3c6e670dbf7862a8be.png)

[単一のモノを作成する]を押します。

![](https://i.gyazo.com/261575293420845b96a58acbcd4a119a.png)

適当な名前をつけて次に進みます。

![](https://i.gyazo.com/93bdb0ab9e12d49456adfdd5e4dc87ab.png)


### 証明書の作成

1-Click 証明書作成の[証明書の作成]を押します。

![](https://i.gyazo.com/4d975a2aee62da86c79625a706e17a7f.png)

鍵ファイルを全てダウンロードして有効化します。

![](https://i.gyazo.com/f75929d1eefab6e8a499e85b41434d64.png)

有効化が完了します。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_11.png)

### 新規ポリシーの作成

メニューの 安全性＞ポリシー から[ポリシーの作成]を押します。

![](https://i.gyazo.com/360b1075f4ee5dfd1019c322b5d1e37e.png)

名前はわかりやすい名前を指定します。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_14.png)

つづいて、ステートメントを追加します。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_15.png)

ポリシー構文は以下のように指定します。

* アクション
    * iot:*
* リソース ARN
    * *

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_16.png)

このポリシー構文は一旦試すための許可範囲が広い設定です。慣れてきたら、ポリシーも細かく調整してみてください。

作成ボタンを押してポリシーを保存します。

![](https://i.gyazo.com/7bb0ea26adc7f408941c76caf484185f.png)

## 証明書へポリシーのアタッチ

このままだとポリシーと証明書が結びついてないのでアタッチします。さきほど作成したモノの画面に移動して、メニューのセキュリティから作成した証明書を選択します。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_18.png)

右上の[アクション]から[ポリシーのアタッチ]を選択します。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_19.png)

さきほど作成したポリシーをアタッチします。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_20.png)

完了したら、証明書がポリシーとモノに結びついていることを確認します。

![](https://i.gyazo.com/a21acb6987f7f823cfbd6f5cdf42babf.png)

![](https://i.gyazo.com/1947b0e395d51dd4067d50fbc172f2eb.png)

## AWS IoT 用の IAM ユーザーを作成

enebular から AWS IoT を利用するための Access Key ID と Secret Access Key を作成します。

IAM のメニューのユーザーから[ユーザーを追加]を押します。

![](https://i.gyazo.com/5365a9c626c6fb82f15aa7450be25b1e.png)

詳細では、わかりやすい名前をつけて [プログラムによるアクセス] にチェックをつけます。

![](https://i.gyazo.com/2dac145aaa109bd6b59e7f02a2c81880.png)

アクセス権限では、[既存のポリシーを直接アタッチ]を選択して、[AWSIoTFullAccess]というポリシーを選択して次に進みます。

![](https://i.gyazo.com/2ba4485a00fa21bcd11cdfab04070af3.png)

最後に間違いがないか確認します。

![](https://i.gyazo.com/b55f423d3380f02e52ad3957f68bb7a1.png)

完了したら、アクセスキー ID とシークレットアクセスキーが記載された CSV ファイルをダウンロードします（このタイミングでしかダウンロードできないので注意して下さい）。

![](https://i.gyazo.com/43887a5e4d39397ac005d05f571082a5.png)


## フローに AWS IoT の設定を反映

先ほどの AWS IoT 設定画面に戻りフローに AWS IoT の設定を反映します。

![](https://i.gyazo.com/80831b57617fda2ae76ad4f26d3f88c1.png)

Select Connection の右の [New] を押します。必要な情報を入力して Connection を作成します。

![](https://i.gyazo.com/b79f9f1beaa467c1b54638afb79c1ee7.png)

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

![](https://i.gyazo.com/e1f3d7ab36d625ec31bbb1e122cdd367.png)

作成した Connection を選択すると登録されているモノが表示されます。

![](https://i.gyazo.com/21ff895a55f684d63b318ef565ba7f41.png)

まだ Disconnected になっています。これはデバイスが AWS IoT にデプロイされていないまたは接続が切れていることを意味します。

enebular 側の操作は一旦置いておいて、次はパソコン上でデバイスのセットアップをしましょう。

## デバイス（エージェント）のセットアップ

デバイスのセットアップを行います。なお、デバイスマスターからくる命令を受けて処理を行うコードベースのデバイスのラッパーのことを**エージェント**と呼びます。

<a href="https://github.com/enebular/enebular-awsiot-agent" target="_blank">GitHub</a> からダウンロードしてきます。

エージェントのコアモジュールをビルドします。

```
cd agent
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

![](https://i.gyazo.com/2990d00298630a3ccfdffe7827131287.png)

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

### 実行

上記のセットアップが完了したら、エージェントは `npm run start` コマンドで `example` モジュールのディレクトリから起動できます。

デフォルトの状態ではエージェントがコンソールにログを出力しませんが、`DEBUG` 環境変数を `info` または `debug` のいずれかに設定することで出力するようにできます。

```
DEBUG=info npm run start
```

以下のようなログが表示されるかと思います。

![](https://i.gyazo.com/c2cbd942f6f12c1236703593a14dc94b.png)

エージェントが正常に起動して AWS IoT に接続できていた場合、次のログメッセージが表示されているかと思います。

```
internal: aws-iot: Connected to AWS IoT
```

これが表示されると、enebular でデバイスを使用することができます。

## フローのデプロイ

デプロイの準備ができました。再度以下の画面に戻ってください。

![](https://i.gyazo.com/21ff895a55f684d63b318ef565ba7f41.png)

左のチェックマークにチェックして、[Deploy] を押すとデプロイが完了します。デプロイの履歴で Deploy Status にチェックマークがついていれば成功しています。

![](https://i.gyazo.com/698d8cecdc353a76b9f3b84788abfa5d.png)

また、デバイス側のログで更新されているのが確認できるかと思います。

![](https://i.gyazo.com/e2e15ad09331937ff8585c14276d6c65.png)

![](https://i.gyazo.com/bed3a72a00a9cb68244d52014d273281.jpg)

`unauthenticated` と出ますが、ライセンスが未購入であるということです。購入をしなくてもフローは動作しますが、ライセンスを購入することでステータスやログの監視ができるようになります。

エージェントのコアを実行する時にさまざまなオプションを指定できます。AWS IoT の場合、このオプションの指定を `ports/awsiot/src/index.js` のソースコードで見ることができます。エージェントのコアがサポートするすべてのオプションには、`agent/src/index.js` のソースコードファイルを参照してください。