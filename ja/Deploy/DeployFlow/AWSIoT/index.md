---
lastUpdated: 2017-12-01
WIP: true
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

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_10.png)

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

まだ Disconnected になっています。これはデバイスが AWS IoT に接続が確立していないことを意味します。

なので、パソコン上でデバイスを立ち上げて接続をします。

## デバイス（agent）のセットアップ

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_26.png)

<a href="https://github.com/enebular/enebular-awsiot-agent" target="_blank">GitHub</a>からダウンロードしてきます。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_27.png)

（WIP）

exampleフォルダに移動します。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_28.png)

コマンドを実行します。

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_29.png)

```
windows

set AWSIOT_CONFIG_FILE=./config.json
set NODE_RED_DIR=./node-red
node_modules\.bin\enebular-awsiot-agent
```