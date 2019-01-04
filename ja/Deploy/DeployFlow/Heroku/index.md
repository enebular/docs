---
lastUpdated: 2019-01-04
---

# Heroku へのデプロイ

このページでは Heroku Deploy の説明をします。Heroku Deploy は enebular で作成したフローを Heroku で作成した enebular Node-RED に Deploy する機能です。

## Heroku に送るフローを作成

![Heroku-index-createflow](./../../../../img/Deploy/Heroku-index-createflow.png)
まず、Assets から新しいフローを作成します。

![image](../../../_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_02.png)

Heroku に送りたいフローを作成して、デプロイして保存します。

![Heroku-index-deploybutton](./../../../../img/Deploy/Heroku-index-deploybutton.png)

## デプロイの設定

つづいて、デプロイの設定をします。  
フローが作成できたら上部のメニューから Deploy ページに移動します。

![otherEnvDeploy](./../../../../img/GetStarted/FlowDeployment-otherEnvDeploy.png)

表示された画面の Add Connection をクリックします。
![addConnection](./../../../../img/GetStarted/FlowDeployment-addConnection.png)

Select Connection Type から Heroku を選択します。
Connection Name はわかりやすい名前をつけます。Heroku API Token は Heroku の設定画面で確認します。

![selectHeroku](./../../../../img/GetStarted/FlowDeployment-selectHeroku.png)


Herokuにログイン後ページ右上にある [Account Settings] を押します。

![accountSettings](./../../../../img/GetStarted/FlowDeployment-accountSettings.png)

Manage Account ページで Account ページに移動します。

![account](./../../../../img/GetStarted/FlowDeployment-account.png)

API Key 欄に移動し [Reveal] で API Key を表示します。

![revealApikey](./../../../../img/GetStarted/FlowDeployment-revealApikey.png)

Heroku API Token に API Key をコピーして、[Save] を押します。

![inputAPIkey](./../../../../img/GetStarted/FlowDeployment-inputAPIkey.png)

新しくconnectionが追加されたので、クリックしてください。

![createdConnection](./../../../../img/GetStarted/FlowDeployment-createdConnection.png)

開いた画面の下部にある [Deploy to Heroku] からアプリを作成します。

![herokuButton](./../../../../img/GetStarted/FlowDeployment-herokuButton.png)

## Heroku ボタンでアプリを作成

Heroku ボタンでアプリを作成します。すでに作成されている方は読み飛ばして下さい。  
Heroku ボタンを押すとログインしていない場合、Heroku のログイン画面が出てくるのでログインします。

![loginHeroku](./../../../../img/GetStarted/FlowDeployment-loginHeroku.png)

Heroku のアプリ設定が表示されます。

![herokuSetting](./../../../../img/GetStarted/FlowDeployment-herokuSetting.png)

App name をわかりやすい名前で設定します。

![appName](./../../../../img/GetStarted/FlowDeployment-appName.png)

作成後 の enebular Node-RED のログインするための USERNAME/PASSWORD を設定します。

![userName](./../../../../img/GetStarted/FlowDeployment-userName.png)

入力が完了したら Deploy app ボタンを押下してデプロイを行ってください。

![deployApp](./../../../../img/GetStarted/FlowDeployment-deployApp.png)

Heroku にクレジットカード情報を登録していない場合、以下のような入力画面が出ますが、本アプリは無料で利用できますので入力して継続ください。

![creditCard](./../../../../img/GetStarted/FlowDeployment-creditCard.png)

情報を入力すると、アプリの作成が始まります。

![creatingHeroku](./../../../../img/GetStarted/FlowDeployment-creatingHeroku.png)

下記のようにアプリが作成されていきます。
アプリの作成が完了すると View ボタンが表示されるので押下します。

![doneCreated](./../../../../img/GetStarted/FlowDeployment-doneCreated.png)

アプリが立ち上がり、enebular にログインするための USERNAME/PASSWORD の入力を求められます。  
さきほど設定したものを入力してログインします。エディタが表示されることを確認します。

![agentOnHeroku](./../../../../img/GetStarted/FlowDeployment-agentOnHeroku.png)

## デプロイ

保存されると Select Connection Type から Heroku を選択すると、Heroku アカウントが持つアプリ一覧が出てきます。

こちらから、さきほど作成した Heroku アプリをひとつチェックし [Deploy] を押します。

![appList](./../../../../img/GetStarted/FlowDeployment-appList.png)

しばらく待っていると Deploy Added が表示されてデプロイが完了します。

Heroku アプリで確認すると無事フローがデプロイされています。

![openApp](./../../../../img/GetStarted/FlowDeployment-openApp.png)

反映されたフローを確認します。

![confirmDeployed](./../../../../img/GetStarted/FlowDeployment-confirmDeployed.png)