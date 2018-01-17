---
lastUpdated: 2018-01-17
---

# Mbed Cloudへのデプロイ

フローのデプロイ先はそのままデプロイボタンを押すと、enebularが利用しているサーバーにデプロイされます。enebularでMbed Cloudを経由し、登録されているデバイスへのデプロイすることも可能です。

対応デバイスについては[DEVICES](./../Device/Introduction.md)をご覧ください。

このページでは、mbed Cloudを経由してデバイスにフローをデプロイする手順を説明します。

あらかじめ、デプロイに使用するデバイスの電源を入れて準備し、読み進めてください。

## 新規フローの作成

まずデバイスへデプロイするフローを作成しましょう。（Projectは作成済みとします）。

![image](/_asset/images/Deploy/DeployFlow/Lambda/deploy-deployflow-mbed_01.png)

フローを作成し “Edit Flow” を押すと、Node-REDの編集画面が立ち上がります。

![image](/_asset/images/Deploy/DeployFlow/Lambda/deploy-deployflow-mbed_02.png)

この編集画面でデータフローを編集してFlowを作成します。

## データフローの編集

デバイスへデプロイするフローを編集しましょう。

![image](/_asset/images/Deploy/DeployFlow/Lambda/deploy-deployflow-mbed_03.png)

データフローを作成します。

![image](/_asset/images/Deploy/DeployFlow/Lambda/deploy-deployflow-mbed_04.png)

右上の赤色の「Deploy」を押してデプロイします。

![image](/_asset/images/Deploy/DeployFlow/Lambda/deploy-deployflow-mbed_05.png)

「Deploy」の右にある下矢印から「Export to Other Services」を選択します。

## mbed Cloud経由でデプロイ

![image](/_asset/images/Deploy/DeployFlow/Lambda/deploy-deployflow-mded_06.png)

「Export to Other Services」を選択すると、新しくウインドウが開いて以下のようなフォームが表示されます。

![image](/_asset/images/Deploy/DeployFlow/Lambda/deploy-deployflow-mbed_07.png)

Connectionのフィールドの右側にある「New」を押して新しいConnectionを画面を開きましょう。

![image](/_asset/images/Deploy/DeployFlow/Lambda/deploy-deployflow-mbed_08.png)

* Connection Name
    * 分かりやすい名前を任意で
* MBED API Key
    * mbed Cloud Portalで確認

必要なmbed API Keyは[mbed Cloud Portal](https://portal.us-east-1.mbedcloud.com/)より取得できます。

![image](/_asset/images/Deploy/DeployFlow/Lambda/deploy-deployflow-mbed_09.png)

Mbed Cloud PortalのAccess manegementのAPIキーページの「新しいAPIキーの作成」を選択します。

![image](/_asset/images/Deploy/DeployFlow/Lambda/deploy-deployflow-mbed_10.png)

制約に従ってAPI Key名を入力、またグループを選択してください。ここでの設定項目は後で変更が可能です。

![image](/_asset/images/Deploy/DeployFlow/Lambda/deploy-deployflow-mbed_11.png)

「APIキーの作成」を選択すると、ログイン時のパスワードを要求されるので、入力してください。

![image](/_asset/images/Deploy/DeployFlow/Lambda/deploy-deployflow-mbed_12.png)

「Enter」を選択すると、API Keyが表示されます。一度しか確認できないので注意してください。

MBED API Key の入力ができたら、「Save」で保存します。

![image](/_asset/images/Deploy/DeployFlow/Lambda/deploy-deployflow-mbed_13.png)

作成したconnectionを選択できるようになっているので、選択してください。

登録されているデバイスのリストが表示されます。

あらかじめ、電源を入れていたデバイスのStatusがconnectedになっているので選択し、「Deploy」からデプロイをします。




## 確認


## Well Done!

今回はRequestをそのままResponseに返しているだけですが、実際はRequestを契機に何かしらのフローを動かします。