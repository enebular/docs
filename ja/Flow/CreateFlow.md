---
lastUpdated: 2017-12-14
---

# Flow の作成

Flow は、ハードウェアデバイス・API およびオンラインサービスを接続するためのツール <a href="https://nodered.jp/" target="_blank">Node-RED</a> ベースの Flow Editor を用いて、DataSource に対して InfoMotion が扱いやすいようにデータを加工する enebular の機能です（DataSource のデータを加工をする以外の用途にも使えます）。

![](/_asset/images/enebular-developers-aboutflow.png)


## Projectを作成

Data Flowを準備してDataSourceに向けてデータを加工して入力していきます。

![image](/_asset/images/Flow/CreateFlow/flow-create-flow_03.png)

![image](/_asset/images/Flow/CreateFlow/flow-create-flow_04.png)

![image](/_asset/images/Flow/CreateFlow/flow-create-flow_05.png)

## Assetsを作成

![image](/_asset/images/Flow/CreateFlow/flow-create-flow_06.png)

まずアセットを作成します。

![image](/_asset/images/Flow/CreateFlow/flow-create-flow_07.png)

Asset Typeはflowを指定します。

![image](/_asset/images/Flow/CreateFlow/flow-create-flow_08.png)

flowを指定すると、アイコンやタイトルの指定、および、アクセス権限の設定ができます。

![image](/_asset/images/Flow/CreateFlow/flow-create-flow_09.png)

* カテゴリ
    * 今回の用途に合ったカテゴリを指定
* title
    * フロータイトル
* アクセス権限
    * admin

![image](/_asset/images/Flow/CreateFlow/flow-create-flow_10.png)

設定ができたらContinueボタンをクリックします。

![image](/_asset/images/Flow/CreateFlow/flow-create-flow_11.png)

フローアセットが作成されました。

ここからフローエディタを立ち上げて Node-RED を編集します。以下の例を参考ください。

- [Milkcocoa フロー](./FlowExampleMilkcocoa.md)