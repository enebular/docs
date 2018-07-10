---
lastUpdated: 2018-07-09
---

# Flow Deployment
enebular の特徴として、作成したフローを様々な環境にデプロイし動作させるというものがあります。
このチュートリアルでは、フローを別のサービス（Heroku）にデプロイし動作をさせてみましょう。

このチュートリアルでは以下のことを行います。

- Herokuへのフローデプロイ

なお、本ページは [Create Projects and Assets](./CreateProjetcs.md) のチュートリアルで Asset(フロー) の作成方法については理解していることを前提としています。

## Heroku に送るフローを作成

![](https://i.gyazo.com/194b5c56abc221193690461193e159a0.png)

まず、Assets から新しいフローを作成します。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_02.png)

Heroku に送りたいフローを作成して、デプロイして保存します。

![](https://i.gyazo.com/bfb9c0e25ad5e4a372a149336bdef8b8.png)

## デプロイの設定

つづいて、デプロイの設定をします。

![](https://i.gyazo.com/16c258270a9b0f0d609fce45da7df221.png)

フローが作成できたら上部のメニューから Deploy ページに移動します。

![](https://i.gyazo.com/b016e602e7e679ade922a9ed1546120d.png)

Select Connection Type から Heroku を選択します。

![](https://i.gyazo.com/bf6f7c21b8ef82d8747e4bda706d2997.png)

Heroku を選択すると右のカラムに出てくる [Deploy to Heroku] からアプリを作成します。

## Heroku ボタンでアプリを作成

Heroku ボタンでアプリを作成します。すでに作成されている方は読み飛ばして下さい。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_07.png)

Heroku ボタンを押すとログインしていない場合、Heroku のログイン画面が出てくるのでログインします。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_08.png)

Heroku のアプリ設定が表示されます。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_09.png)

App name をわかりやすい名前で設定します。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_10.png)

作成後 のenebular Node-RED のログインするための USERNAME/PASSWORD を設定します。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_11.png)

設定を確認したら Deploy ボタンを押します（Heroku にクレジットカードを登録していない方は、以下のようなクレジットカード番号入力画面が出ますが、本アプリは無料で利用できますので入力して継続ください）。

![](https://i.gyazo.com/e9d7bf541eb2029b53f53735054cfe7a.png)

クレジットカードを入力すると、アプリの作成が始まります。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_12.png)

アプリが作成されていきます・・・

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_13.png)

作成完了されたら View ボタンを押して確認します。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_14.png)

enebular Node-RED のログインするための USERNAME/PASSWORD が聞かれるので、さきほど設定したものを入力してログインします。

## デプロイ設定

Heroku アプリが作成できたらデプロイ設定をします。さきほどの画面に戻って設定を続けます。

![](https://i.gyazo.com/de104b3c5331776e71db63c1ed4e2562.png)

[New] を押します。

![](https://i.gyazo.com/2377f74621a7ad3cd79d06691dac0031.png)

Connection Name はわかりやすい名前をつけます。Heroku API Token は Heroku の設定画面で確認します。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_17.png)

[Account Settings] を押します。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_18.png)

Manage Account ページで Account ページに行きます。

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_19.png)

API Key 欄に移動し [Reveal] で API Key を表示します。

![](https://i.gyazo.com/8972e5c2fc9b08ffd88541cff90518fd.png)

Heroku API Token に API Key をコピーして、[Save] を押します。

## デプロイ

保存されると Select Connection Type から Heroku を選択すると、Heroku アカウントが持つアプリ一覧が出てきます。

![](https://i.gyazo.com/08a53d358e13c1115fc091cc6ed33802.png)

こちらから、さきほど作成した Heroku アプリをひとつチェックし [Deploy] を押します。

![](https://i.gyazo.com/e12c8bf818aec63ff674ff648916e8ab.png)

しばらく待っていると Deploy Added が表示されてデプロイが完了します。

![](https://i.gyazo.com/133531b98309d31e45957138a7784d1c.png)

Heroku アプリで確認すると無事フローがデプロイされています。

![](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_02.png)

## Well Done!

enebularのデプロイ機能を使用して、作成したAsset(フロー)を別のサービスにデプロイすることが出来るようになりました。