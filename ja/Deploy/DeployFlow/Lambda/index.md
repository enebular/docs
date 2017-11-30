---
lastUpdated: 2017-12-01
---

# AWS Lambdaへのデプロイ

Flowのデプロイ先はそのままデプロイボタンを押すと、enebularが利用しているサーバーにデプロイされます。enebularでAWS Lambdaにデプロイすることも可能です。

このページでは、AWS LambdaにFlowをデプロイする手順を説明します。

## 新規Flowの作成

作成したフローをAWS Lambdaにデプロイするまでの方法です。まずLambdaへDeployするFlowを作成しましょう。（Projectは作成済みとします）。

![image](/_asset/images/Deploy/DeployFlow/Lambda/deploy-deployflow-lambda_01.png)

Flowを作成し “Edit Flow” を押すと、Node-REDの編集画面が立ち上がります。

![image](/_asset/images/Deploy/DeployFlow/Lambda/deploy-deployflow-lambda_02.png)

この編集画面でデータフローを編集してFlowを作成します。

## データフローの編集

データフローを作成します。動作確認のため、Lambda RequestをそのままLambda Responseに返すだけのフローを作成しましょう。

![image](/_asset/images/Deploy/DeployFlow/Lambda/deploy-deployflow-lambda_03.png)

左のパレットではLambda Requestはinputグループに、Lambda Responseはoutputグループにあるので、そちらを探して配置します。

![image](/_asset/images/Deploy/DeployFlow/Lambda/deploy-deployflow-lambda_04.png)

右上の赤色のDeployボタンを押してDeployします。

![image](/_asset/images/Deploy/DeployFlow/Lambda/deploy-deployflow-lambda_05.png)

Deployボタンの右にある下矢印から「Export to Other Services」を選択します。

## AWS Lambdaへデプロイ

![image](/_asset/images/Deploy/DeployFlow/Lambda/deploy-deployflow-lambda_06.png)

「Export to Other Services」を選択すると、新しくウインドウが開いて以下のようなフォームが表示されます。

![image](/_asset/images/Deploy/DeployFlow/Lambda/deploy-deployflow-lambda_07.png)

Connectionのフィールドの右側にあるNewを押して新しいConnectionを作成しましょう。

![image](/_asset/images/Deploy/DeployFlow/Lambda/deploy-deployflow-lambda_08.png)

* Connection Name
    * 分かりやすい名前を任意で
* AWS Access Key ID
    * AWSコンソールで確認
* AWS Secret Access Key
    * AWSコンソールで確認
* Region
    * AWSコンソールで確認（ap-northeast-1など）
* IAM Role ARN
    *  AWSコンソールで確認でロールARNを確認
        * ![image](/_asset/images/Deploy/DeployFlow/Lambda/deploy-deployflow-lambda_09.png)
        * ↓ ユーザーARNでなくロールARNが正解？
        * ![image](/_asset/images/Deploy/DeployFlow/Lambda/deploy-deployflow-lambda_10.png)


AWSのアクセスキーは、AWSLambdaFullAccess相当のポリシーで作成してください。AWS コンソールのIAMページから該当する情報をフォームにすべて書いたら、「Save」で保存します。

![image](/_asset/images/Deploy/DeployFlow/Lambda/deploy-deployflow-lambda_11.png)

保存が終わると、Connectionのselectボックスにて追加したConnectionが選択できるようになっているので選択します。

![image](/_asset/images/Deploy/DeployFlow/Lambda/deploy-deployflow-lambda_12.png)

任意のFunction Name（ハイフンは使えません）、Timeoutに60、Memory Sizeに128を入力したら、「Deploy Flow」でデプロイします。

![image](/_asset/images/Deploy/DeployFlow/Lambda/deploy-deployflow-lambda_13.png)

## AWS Lambda コンソールにて確認

ちゃんとデプロイされているかAWSコンソールのLambdaページにて確認してみましょう。Lambdaページに先ほどデプロイの際に入力したFunction Nameがあるかと思いますのでクリックします。遷移したページの左上の「Test」というボタンでテストできます。

![image](/_asset/images/Deploy/DeployFlow/Lambda/deploy-deployflow-lambda_14.png)

Eventの設定画面が出てきますが、そのまま右下の「作成」をクリックします。

![image](/_asset/images/Deploy/DeployFlow/Lambda/deploy-deployflow-lambda_15.png)

クリックすると、ページの下の方で処理が始まります。成功すると以下のような結果が表示されます。

（フロー確認中）
![image](/_asset/images/Deploy/DeployFlow/Lambda/deploy-deployflow-lambda_16.png)

## Well Done!

今回はRequestをそのままResponseに返しているだけですが、実際はRequestを契機に何かしらのフローを動かします。
