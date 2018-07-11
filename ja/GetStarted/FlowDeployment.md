---
lastUpdated: 2018-07-10
---

# Flow Deployment
enebular の特徴として、作成したフローを様々な環境にデプロイし動作させるというものがあります。
このチュートリアルでは、フローを別のサービス（Heroku）にデプロイし動作をさせてみましょう。

このチュートリアルでは以下のことを行います。

- Herokuへのフローデプロイ

なお、本ページは [Create Projects and Assets](./CreateProjetcs.md) のチュートリアルで Asset(フロー) の作成方法については理解していることを前提としています。

## Heroku に送るフローを作成

![](https://i.gyazo.com/194b5c56abc221193690461193e159a0.png)

Assets からフローを作成します（既にフローを作成済みの場合、それを利用することも可能です）。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_02.png)

Heroku に送りたいフローを作成して、デプロイして保存します。

![](https://i.gyazo.com/bfb9c0e25ad5e4a372a149336bdef8b8.png)

## デプロイの設定

つづいて、デプロイの設定をします。  
フローが作成できたら上部のメニューから Deploy ページに移動します。

![](https://i.gyazo.com/16c258270a9b0f0d609fce45da7df221.png)

Select Connection Type から Heroku を選択します。

![](https://i.gyazo.com/b016e602e7e679ade922a9ed1546120d.png)

Heroku を選択すると右のカラムに出てくる [Deploy to Heroku] からアプリを作成します。

![](https://i.gyazo.com/bf6f7c21b8ef82d8747e4bda706d2997.png)

## Heroku ボタンでアプリを作成

Heroku ボタンでアプリを作成します。すでに作成されている方は読み飛ばして下さい。  
Heroku ボタンを押すとログインしていない場合、Heroku のログイン画面が出てくるのでログインします。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_07.png)

Heroku のアプリ設定が表示されます。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_08.png)

App name をわかりやすい名前で設定します。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_09.png)

作成後 のenebular Node-RED のログインするための USERNAME/PASSWORD を設定します。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_10.png)

入力が完了したら Deploy app ボタンを押下してデプロイを行ってください。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_11.png)

Heroku にクレジットカード情報を登録していない場合、以下のような入力画面が出ますが、本アプリは無料で利用できますので入力して継続ください。

![](https://i.gyazo.com/e9d7bf541eb2029b53f53735054cfe7a.png)

情報を入力すると、アプリの作成が始まります。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_12.png)

下記のようにアプリが作成されていきます。
アプリの作成が完了すると View ボタンが表示されるので押下します。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_13.png)

アプリが立ち上がり、enebular にログインするための USERNAME/PASSWORD の入力を求められます。  
さきほど設定したものを入力してログインします。エディタが表示されることを確認します。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_14.png)

## デプロイ設定

Heroku アプリが作成できたらデプロイ設定をします。さきほどの画面に戻って設定を続けます。

[New] を押します。

![](https://i.gyazo.com/de104b3c5331776e71db63c1ed4e2562.png)

Connection Name はわかりやすい名前をつけます。Heroku API Token は Heroku の設定画面で確認します。

![](https://i.gyazo.com/2377f74621a7ad3cd79d06691dac0031.png)

[Account Settings] を押します。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_17.png)

Manage Account ページで Account ページに移動します。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_18.png)

API Key 欄に移動し [Reveal] で API Key を表示します。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_19.png)

Heroku API Token に API Key をコピーして、[Save] を押します。

![](https://i.gyazo.com/8972e5c2fc9b08ffd88541cff90518fd.png)


## デプロイ

保存されると Select Connection Type から Heroku を選択すると、Heroku アカウントが持つアプリ一覧が出てきます。

こちらから、さきほど作成した Heroku アプリをひとつチェックし [Deploy] を押します。

![](https://i.gyazo.com/08a53d358e13c1115fc091cc6ed33802.png)

しばらく待っていると Deploy Added が表示されてデプロイが完了します。

![](https://i.gyazo.com/e12c8bf818aec63ff674ff648916e8ab.png)

Heroku アプリで確認すると無事フローがデプロイされています。

![](https://i.gyazo.com/133531b98309d31e45957138a7784d1c.png)

反映されたフローを確認します。

![](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_02.png)

## Well Done!

enebularのデプロイ機能を使用して、作成したAsset(フロー)を別のサービスにデプロイすることが出来るようになりました。