# AWS IoTへのデプロイ {#DeployToAWSIoT}

enebular では作成した Flow を AWS IoT を経由してデバイスにデプロイすることができます。

デプロイするには、以下の前提を満たす必要があります。

* ユーザーがAWSアカウントを作成済みであること
* デプロイ先のデバイスに`enebular-agent`がインストールされていること
* AWS IoTにデプロイ先のデバイスが`モノ`として登録されていること
* enebularでAWS IoTの`Connection`が作成されていること

`enebular-agent`のインストール方法とAWS IoTへの`モノ`の登録については、[こちら](../../../EnebularAgent/Installation.md)をご参照ください。

`Connection`の作成方法については、[AWS IoTのConnection作成](MakeAWSIoTConnection.md)をご参照ください。

## Flow の作成 {#MakeFlow}

今回はデプロイする対象として以下のようなサンプルのFlowを作成します。

![image](../../../_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_01.png)

Flowを作成したら、`Deploy`ボタンを押下することにより保存します。

![image](../../../_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_02.png)

## Flowのデプロイ {#DeployFlow}

作成したFlowを、AWS IoTに接続されたデバイスにデプロイします。

Deployタブの[Deploy]ボタンを押します。

![image](./../../../../img/Deploy/AWSIoT/deploy-tab.png)

`Select Connection for Deployment`ダイアログに作成済みのConnectionのリストが表示されるので、デプロイ先のデバイスが接続されたConnectionを選択します。

![image](./../../../../img/Deploy/AWSIoT/select-connection.png)

選択したConnectionに接続されたデバイスの一覧が表示されます。

![image](./../../../../img/Deploy/AWSIoT/select-device-and-deploy.png)

デプロイしたいデバイスをチェックし、[Deploy]ボタンを押すとデプロイが開始します。デプロイの履歴のリストで Deploy Status にチェックマークがついていれば成功です。

![image](./../../../../img/Deploy/AWSIoT/deploy-flow-success.png)

また、デバイス側のログで更新されているのが確認できるかと思います。

![image](../../../_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_34.png)

![image](../../../_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_35.png)

ログに`unauthenticated`と出ますが、これはライセンスを未購入であることを表します。ライセンスがなくてもFlowは動作しますが、ライセンスを購入することでステータスやログの監視ができるようになります。

