---
lastUpdated: 2019-01-09
---

# AWS Lambda へのデプロイ {#AWS Lambda へのデプロイ}

フローのデプロイ先はそのままデプロイボタンを押すと、enebular が利用しているサーバーにデプロイされますが、一時的にしか動作しません。

このページでは、長時間稼働させるために AWS Lambda にフローをデプロイする手順を説明します。

## 新規フローの作成 {#新規フローの作成}

作成したフローを AWS Lambda にデプロイするまでの方法です。まず Lambda へデプロイするフローを作成しましょう（プロジェクトは作成済みとします）。

![createFlow](./../../../../img/Deploy/Lambda/createFlow.png)

フローを作成し [Edit Flow] を押すと、Node-RED の編集画面が立ち上がります。

![editFlow](./../../../../img/Deploy/Lambda/editFlow.png)

この編集画面でデータフローを編集してフローを作成します。

## データフローの編集 {#データフローの編集}

データフローを作成します。動作確認のため、Lambda Request をそのまま Lambda Response に返すだけのフローを作成しましょう。

![lambdaNode](./../../../../img/Deploy/Lambda/lambdaNode.png)

左のパレットでは Lambda Request は input グループに、Lambda Response は output グループにあるので、そちらを探して配置します。

![lambdaFlow](./../../../../img/Deploy/Lambda/lambdaFlow.png)

右上の [Deploy] を押して保存します。

## AWS Lambda へデプロイ {#AWS Lambda へデプロイ}

保存が完了したらフローのメニューから [Deploy] ページに移動します。

![deployPage](./../../../../img/Deploy/Lambda/deployPage.png)

[Deploy] を押すとデプロイができる画面に移動します。

![deployPage2](./../../../../img/Deploy/Lambda/deployPage2.png)

Lambda を選択します。

![deployPage3](./../../../../img/Deploy/Lambda/deployPage3.png)

[New] を押すとモーダルが開きます。enebular での作業はここで一旦止めて、AWS コンソールへ移動します。

![deployPage4](./../../../../img/Deploy/Lambda/deployPage4.png)

### enebular から AWS Lambda を利用するための IAM ユーザーを作成 {#enebular から AWS Lambda を利用するための IAM ユーザーを作成}

enebular から AWS Lambda にアクセスするための Access Key ID、Secret Access Key を作成します。

AWS の IAM へアクセスします。メニューからユーザーに移動します。

![iam](./../../../../img/Deploy/Lambda/iam-ja.png)

[ユーザーを追加] からユーザー追加画面へ移動します。適当な名前をつけて、[アクセスの種類] の [プログラムによるアクセス] にチェックを入れます。

![iam2](./../../../../img/Deploy/Lambda/iam2-ja.png)

アクセス権限画面では、[既存のポリシーを直接アタッチ] を選択して、[AWSLambdaFullAccess] というポリシーを選択して次に進みます。

![iam3](./../../../../img/Deploy/Lambda/iam3-ja.png)

確認画面で間違いがないか確認します。間違いがなければ [ユーザーの作成] を押します。

![iam4](./../../../../img/Deploy/Lambda/iam4-ja.png)

完了したら、アクセスキー ID とシークレットアクセスキーが記載された CSV ファイルをダウンロードします（このタイミングでしかダウンロードできないので注意して下さい）。

![iam5](./../../../../img/Deploy/Lambda/iam5-ja.png)

### AWS Lambda が利用する ARN ロールを作成 {#AWS Lambda が利用する ARN ロールを作成}

Lambda にデプロイされたフローが利用する ARN ロールを作成します。

AWS の IAM へアクセスします。メニューからロールへ移動します。

![role](./../../../../img/Deploy/Lambda/role-ja.png)

[ロールの作成] からロール作成画面へ移動します。AWS サービスの Lambda を選択して次に進みます。

![role2](./../../../../img/Deploy/Lambda/role2-ja.png)

アクセス権限では [AWSLambdaFullAccess] を選択して、次へ進みます。

![role3](./../../../../img/Deploy/Lambda/role3-ja.png)

最後に適当な名前をつけて、[ロールの作成]で作成します。

![role4](./../../../../img/Deploy/Lambda/role4-ja.png)

ここまでできたら enebular に必要情報を入力します。

![connection](./../../../../img/Deploy/Lambda/connection-ja.png)

- Connection Name
  - 分かりやすい名前を任意で
- AWS Access Key ID
  - ダウンロードした CSV ファイルからコピー
- AWS Secret Access Key
  - ダウンロードした CSV ファイルからコピー
- Region
  - こだわりがなければ ap-northeast-1
- IAM Role ARN
  - 作成したロールの ARN を確認
    - ![role5](./../../../../img/Deploy/Lambda/role5-ja.png)

保存をすると、以下のように Lambda 関数の情報を入力するフォームが現れます。

![functionForm](./../../../../img/Deploy/Lambda/functionForm.png)

- Function Name
  - 分かりやすい名前を任意で（ハイフンは使えません）
- Timeout
  - 60
- Memory Size
  - 128

上記の値を入力して、[Deploy] でデプロイします。

![functionForm2](./../../../../img/Deploy/Lambda/functionForm2.png)

ここでしばらく待ちます（1 分 30 秒くらいはかかりますので、気長にお待ちください）。

![deploying](./../../../../img/Deploy/Lambda/deploying.png)

デプロイが完了したら、Deployment History でデプロイされたものが確認できます。

![deployed](./../../../../img/Deploy/Lambda/deployed.png)


## AWS Lambda コンソールにて確認 {#AWS Lambda コンソールにて確認}

ちゃんとデプロイされているか AWS の Lambda ページにて確認してみましょう。Lambda ページに先ほどデプロイの際に入力した Function Name があるかと思いますのでクリックします。遷移したページの左上の [テスト] でテストできます。

![confirm](./../../../../img/Deploy/Lambda/confirm-ja.png)

Event の設定画面が出てきますが、そのまま右下の [作成] をクリックします。

![confirm2](./../../../../img/Deploy/Lambda/confirm2-ja.png)

以下のような画面が出てくるので右上の [テスト] でテストをします。

![confirm3](./../../../../img/Deploy/Lambda/confirm3-ja.png)

以下のような画面ができれば成功です。

![confirm4](./../../../../img/Deploy/Lambda/confirm4-ja.png)
