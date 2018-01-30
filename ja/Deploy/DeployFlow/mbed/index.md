---
lastUpdated: 2018-01-30
---

# Mbed Cloudへのデプロイ

フローのデプロイ先はそのままデプロイボタンを押すと、enebular が利用しているサーバーにデプロイされます。enebular で Mbed Cloud を経由し、登録されているデバイスへのデプロイすることも可能です。

対応デバイスについては [Supported Environment](/Other/Support.md) をご覧ください。

このページでは、Mbed Cloudを経由してデバイスにフローをデプロイする手順を説明します。

## 新規フローの作成

まずデバイスへデプロイするフローを作成しましょう。（Project は作成済みとします）

![image](/_asset/images/Deploy/DeployFlow/mbed/deploy-deployflow-mbed_01.png)

フローを作成し [Edit Flow] を押すと、Node-RED の編集画面が立ち上がります。

![image](/_asset/images/Deploy/DeployFlow/mbed/deploy-deployflow-mbed_02.png)

この編集画面でデータフローを編集してFlowを作成します。

## データフローの編集

### Raspberry Pi へのデプロイの場合

Raspberry Pi の Node-RED を起動し、スタンバイの状態にします。

Raspberry Pi へデプロイするフローを編集しましょう。以下のようなフローを作成します。

![image](/_asset/images/Deploy/DeployFlow/mbed/deploy-deployflow-mbed_03.png)

右上の赤色の [Deploy] を押して保存します。

![image](/_asset/images/Deploy/DeployFlow/mbed/deploy-deployflow-mbed_04.png)


### enebular edge agent へのデプロイの場合

あらかじめ、デプロイに使用するデバイスの電源を入れましょう。

enebular edge agent へのデプロイは下記フローを使いましょう。まずは下記の JSONデータをコピーします。
`[{"id":"165c03e8.b6cbdc","type":"inject","z":"ebd56ac3.b5f1d8","name":"","topic":"","payload":"","payloadType":"date","repeat":"5","crontab":"","once":false,"x":110,"y":100,"wires":[["c82f1f55.78329"]]},{"id":"c82f1f55.78329","type":"switch","z":"ebd56ac3.b5f1d8","name":"","property":"led","propertyType":"flow","rules":[{"t":"eq","v":"1","vt":"num"},{"t":"else"}],"checkall":"true","outputs":2,"x":170,"y":180,"wires":[["31c8aef7.fda952"],["cf93bcf1.04a5"]]},{"id":"31c8aef7.fda952","type":"digitalout","z":"ebd56ac3.b5f1d8","pinName":"LED2","value":"true","signalInversion":true,"name":"","x":340,"y":140,"wires":[["6d2afea9.fd836"]]},{"id":"cf93bcf1.04a5","type":"digitalout","z":"ebd56ac3.b5f1d8","pinName":"LED2","value":"false","signalInversion":true,"name":"","x":340,"y":240,"wires":[["f8f4c712.0302c8"]]},{"id":"6d2afea9.fd836","type":"change","z":"ebd56ac3.b5f1d8","name":"","rules":[{"p":"led","t":"set","pt":"flow","to":"0","tot":"num"}],"action":"","property":"","from":"","to":"","reg":false,"x":530,"y":140,"wires":[[]]},{"id":"f8f4c712.0302c8","type":"change","z":"ebd56ac3.b5f1d8","name":"","rules":[{"p":"led","t":"set","pt":"flow","to":"1","tot":"num"}],"action":"","property":"","from":"","to":"","reg":false,"x":530,"y":240,"wires":[[]]}]`


右上のメニューボタンより [Import] → [Clipboard] を選択します。

![image](/_asset/images/Deploy/DeployFlow/mbed/deploy-deployflow-mbed_14.png)

先ほどのフローをペーストし、[Import] を押します。

![image](/_asset/images/Deploy/DeployFlow/mbed/deploy-deployflow-mbed_15.png)


以下のようなフローが反映されます。

![image](/_asset/images/Deploy/DeployFlow/mbed/deploy-deployflow-mbed_16.png)

右上の赤色の [Deploy]を 押して保存します。

![image](/_asset/images/Deploy/DeployFlow/mbed/deploy-deployflow-mbed_04.png)


## デプロイ

[Deploy] の右にある下矢印から [Export to Other Services] を選択します。

![image](/_asset/images/Deploy/DeployFlow/mbed/deploy-deployflow-mbed_05.png)

新しくウインドウが開いて以下のようなフォームが表示されます。

[Select Connection Type] から [MBED] を選択してください。

![image](/_asset/images/Deploy/DeployFlow/mbed/deploy-deployflow-mded_06.png)

Select Connectionのフィールドの右側にある [New] を押します。

![image](/_asset/images/Deploy/DeployFlow/mbed/deploy-deployflow-mbed_07.png)

Create Connection を画面が開きます。

![image](/_asset/images/Deploy/DeployFlow/mbed/deploy-deployflow-mbed_08.png)

* Connection Name
    * 分かりやすい名前を任意で
* MBED API Key
    * mbed Cloud Portalで確認

必要な MBED API Key は [Mbed Cloud Portal](https://portal.us-east-1.mbedcloud.com/) より取得できます。


Mbed Cloud Portal の Access manegement の APIキーページの [新しいAPIキーの作成] を選択します。

![image](/_asset/images/Deploy/DeployFlow/mbed/deploy-deployflow-mbed_09.png)

制約に従って API Key 名を入力、またグループを選択してください。ここでの設定項目は後で変更が可能です。

![image](/_asset/images/Deploy/DeployFlow/mbed/deploy-deployflow-mbed_10.png)

[APIキーの作成] を選択すると、ログイン時のパスワード入力し、  [Enter] を選択してください。


![image](/_asset/images/Deploy/DeployFlow/mbed/deploy-deployflow-mbed_11.png)

API Key が表示されます。一度しか確認できないので注意してください。

![image](/_asset/images/Deploy/DeployFlow/mbed/deploy-deployflow-mbed_12.png)

Create Connection の画面に MBED API Key の入力ができたら、[Save]で保存します。

作成した connection を選択できるようになっているので、選択してください。

登録されているデバイスのリストが表示されます。

あらかじめ、電源を入れていたデバイスの Status が connected になっているので選択し、[Deploy] からデプロイをします。

![image](/_asset/images/Deploy/DeployFlow/mbed/deploy-deployflow-mbed_13.png)

## 確認

### Raspberry Pi へのデプロイの場合

ログでフローが更新されているのが確認してください。

![image](/_asset/images/Deploy/DeployFlow/mbed/deploy-deployflow-mbed_17.png)


### enebular edge agent へのデプロイの場合

K64F の LED が緑色で点滅することを確認してください。