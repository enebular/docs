---
lastUpdated: 2018-01-15
WIP: true
---

# Flow の作成

Data Flowを準備してDataSourceに向けてデータを加工して入力していきます。

![](https://i.gyazo.com/1e90909b5ecefe56ff1934aa41e5a7b9.png)

![](/_asset/images/enebular-developers-createprojectmodal.png)

![](https://i.gyazo.com/69a5b817e8681349f45373eb7aead486.png)

## Assetsを作成

![](https://i.gyazo.com/e521afd4d489291aa774fe9429cf3321.png)

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