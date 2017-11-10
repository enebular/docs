このページではHeroku Deployの説明をします。Heroku Deployはenebularで作成したFlowをHerokuで作成したenebular Node-REDにDeployする機能です。

## Herokuに送るFlowを作成

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_01.png)

まず、Assets から新しいFlowを作成します。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_02.png)

Herokuに送りたいFlowを作成します。

## Deployの設定

つづいて、Deployの設定をします。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_03.png)

Flowが作成できたら上部のメニューからDeployページに移動します。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_04.png)

Select Connection TypeからHerokuを選択します。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_05.png)

Herokuを選択すると右のカラムに、送るHerokuボタンでenebularアプリを作成します。

## Herokuボタンでenebularアプリを作成

Herokuボタンでenebularアプリを作成します。すでに作成されている方は読み飛ばして下さい。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_06.png)

Herokuボタンをクリックします。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_07.png)

Herokuにログインします。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_08.png)

Herokuのアプリ設定が表示されます。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_09.png)

App nameをわかりやすい名前で設定します。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_10.png)

作成後のenebular Node-REDのログインするためのUSERNAME/PASSWORDを設定します。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_11.png)

設定を確認したらDeployボタンを押します。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_12.png)

アプリが作成されていきます・・・

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_13.png)

作成完了されたら Viewボタンを押して確認します。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_14.png)

enebular Node-REDのログインするためのUSERNAME/PASSWORDが聞かれるのでログインします。

## Deploy設定

Herokuアプリが作成できたらDeploy設定をします。さきほどの画面に戻って設定を続けます。

 ![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_15.png)

Newボタンを押します。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_16.png)

Connection Nameはわかりやすい名前をつけます。Heroku API TokenはHerokuの設定画面で確認します。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_17.png)

Account Settings ボタンを押します。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_18.png)

Manage AccountページでAccountページに行きます。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_19.png)

API Key欄に移動しRevealボタンでAPI Key表示します。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_20.png)

Heroku API TokenにAPI Keyをコピーして、Saveボタンを押します。

## Deploy

SaveされるとSelect Connection TypeからHerokuを選択すると、Herokuアカウントが持つアプリ一覧が出てきます。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_21.png)

こちらから、さきほど作成したHerokuアプリをひとつチェックしDeployボタンを押します。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_22.png)

しばらく待っているとDeploy Addedが表示されてDeployが完了します。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_23.png)

Herokuアプリで確認すると無事フローがDeployされています。