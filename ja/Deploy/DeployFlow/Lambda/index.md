---
lastUpdated: 2018-03-28
---

# AWS Lambda へのデプロイ {#AWS Lambda へのデプロイ}

フローのデプロイ先はそのままデプロイボタンを押すと、enebular が利用しているサーバーにデプロイされますが、一時的にしか動作しません。

このページでは、長時間稼働させるために AWS Lambda にフローをデプロイする手順を説明します。

## 新規フローの作成 {#新規フローの作成}

作成したフローを AWS Lambda にデプロイするまでの方法です。まず Lambda へデプロイするフローを作成しましょう（プロジェクトは作成済みとします）。

![](https://i.gyazo.com/43daa8adfa160e0db4723a6cb62ec6aa.png)

フローを作成し [Edit Flow] を押すと、Node-RED の編集画面が立ち上がります。

![](https://i.gyazo.com/53824241d584d099aa810e6b3cbab645.png)

この編集画面でデータフローを編集してフローを作成します。

## データフローの編集 {#データフローの編集}

データフローを作成します。動作確認のため、Lambda Request をそのまま Lambda Response に返すだけのフローを作成しましょう。

![image](../../../_asset/images/Deploy/DeployFlow/Lambda/deploy-deployflow-lambda_03.png)

左のパレットでは Lambda Request は input グループに、Lambda Response は output グループにあるので、そちらを探して配置します。

![](https://i.gyazo.com/b474a682aefc4cef62650b0e883f354c.png)

右上の [Deploy] を押して保存します。

## AWS Lambda へデプロイ {#AWS Lambda へデプロイ}

保存が完了したらフローのメニューから [Deploy] ページに移動します。

![](https://i.gyazo.com/6d8611cac4c92473225ebfca7ded8c57.png)

[Deploy] を押すとデプロイができる画面に移動します。

![](https://i.gyazo.com/88e68c4779864cf8c6f24f6262575e4b.png)

Lambda を選択します。

![](https://i.gyazo.com/edc9714f15afec8911f67f31cf7141bd.png)

[New] を押すとモーダルが開きます。enebular での作業はここで一旦止めて、AWS コンソールへ移動します。

![](https://i.gyazo.com/3478881bcdb98b1319141df71eed2dd8.png)

### enebular から AWS Lambda を利用するための IAM ユーザーを作成 {#enebular から AWS Lambda を利用するための IAM ユーザーを作成}

enebular から AWS Lambda にアクセスするための Access Key ID、Secret Access Key を作成します。

AWS の IAM へアクセスします。メニューからユーザーに移動します。

![](https://i.gyazo.com/79aaba133f5999e6c0dd928de6160b1e.png)

[ユーザーを追加] からユーザー追加画面へ移動します。適当な名前をつけて、[アクセスの種類] の [プログラムによるアクセス] にチェックを入れます。

![](https://i.gyazo.com/e27793a2531fdfbda175d9c49730045b.png)

アクセス権限画面では、[既存のポリシーを直接アタッチ] を選択して、[AWSLambdaFullAccess] というポリシーを選択して次に進みます。

![](https://i.gyazo.com/4703b6374d892bffe9ae076a3f80e3ba.png)

確認画面で間違いがないか確認します。間違いがなければ [ユーザーの作成] を押します。

![](https://i.gyazo.com/698db8ca97dac1ab15e2baf2e579c4b1.png)

完了したら、アクセスキー ID とシークレットアクセスキーが記載された CSV ファイルをダウンロードします（このタイミングでしかダウンロードできないので注意して下さい）。

![](https://i.gyazo.com/f5fcc974b529a26f42b360d878519f56.png)

### AWS Lambda が利用する ARN ロールを作成 {#AWS Lambda が利用する ARN ロールを作成}

Lambda にデプロイされたフローが利用する ARN ロールを作成します。

AWS の IAM へアクセスします。メニューからロールへ移動します。

![](https://i.gyazo.com/fbf3fd00c52c35efa228e6d3f7bbc4f4.png)

[ロールの作成] からロール作成画面へ移動します。AWS サービスの Lambda を選択して次に進みます。

![](https://i.gyazo.com/2866c4068bc8ae97d82cb389c788d72d.png)

アクセス権限では [AWSLambdaFullAccess] を選択して、次へ進みます。

![](https://i.gyazo.com/9378d9962411cd94e35b2c80f4fdccd2.png)

最後に適当な名前をつけて、[ロールの作成]で作成します。

![](https://i.gyazo.com/db850bc23be8fffdd908a01344c564da.png)

ここまでできたら enebular に必要情報を入力します。

![](https://i.gyazo.com/9156cff5e218fccc78c9a3734e51cb4e.png)

* Connection Name
    * 分かりやすい名前を任意で
* AWS Access Key ID
    * ダウンロードした CSV ファイルからコピー
* AWS Secret Access Key
    * ダウンロードした CSV ファイルからコピー
* Region
    * こだわりがなければ ap-northeast-1
* IAM Role ARN
    *  作成したロールの ARN を確認
        * ![](https://i.gyazo.com/560971bd75cbdc147f990571798969c2.png)

保存をすると、以下のように Lambda 関数の情報を入力するフォームが現れます。

![](https://i.gyazo.com/d89fd1efd0a174c8b223c1367c9557e6.png)

* Function Name
    * 分かりやすい名前を任意で（ハイフンは使えません）
* Timeout
    * 60
* Memory Size
    * 128

上記の値を入力して、[Deploy] でデプロイします。

![](https://i.gyazo.com/1cc9f0b2f920449f42f0911c31ff326d.png)

ここでしばらく待ちます（1分30秒くらいはかかりますので、気長にお待ちください）。

![](https://i.gyazo.com/34b178154e86ccf151a88351f83db6c6.png)

デプロイが完了したら、Deployment History でデプロイされたものが確認できます。

![](https://i.gyazo.com/f4d810f405533c474b85d3660156de3e.png)


## AWS Lambda コンソールにて確認 {#AWS Lambda コンソールにて確認}

ちゃんとデプロイされているか AWS の Lambda ページにて確認してみましょう。Lambda ページに先ほどデプロイの際に入力した Function Name があるかと思いますのでクリックします。遷移したページの左上の [テスト] でテストできます。

![](https://i.gyazo.com/abc367b41a1ef3305f1b65a1cb295801.png)

Event の設定画面が出てきますが、そのまま右下の [作成] をクリックします。

![](https://i.gyazo.com/a6c80233ddb2e0fab1f2f0bd49fd18c9.png)

以下のような画面が出てくるので右上の [テスト] でテストをします。

![](https://i.gyazo.com/2c5ed3a4ef1cfb4c92cb861f268f54db.png)

以下のような画面ができれば成功です。

![](https://i.gyazo.com/5cb4e07f00b84d231120fefc2e6e4c81.png)