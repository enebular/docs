---
lastUpdated: 2019-01-09
---

# フローの作成

フローの作成方法を説明します。

プロジェクト一覧からプロジェクトを選択してプロジェクトの管理画面に移動します。

![](https://i.gyazo.com/69a5b817e8681349f45373eb7aead486.png)

右下の + ボタンからモーダルを立ち上げます。

![](https://i.gyazo.com/e521afd4d489291aa774fe9429cf3321.png)

モーダルが立ち上がるのでまず Asset Type に flow を指定します。

![image](../_asset/images/Flow/CreateFlow/flow-create-flow_07.png)

flow を指定すると、アイコンやタイトルの指定、および、アクセス権限の設定ができます。

![](https://i.gyazo.com/046b8c6b177e0edaf9cc3f56af67e9ac.png)

* タイトル
    * 任意のフローのタイトル
* 説明
    * 今回は何も入力しません
* アクセス権限
    * superdev
* カテゴリー
    * 今回の用途に合ったカテゴリを指定

![image](../_asset/images/Flow/CreateFlow/flow-create-flow_10.png)

設定ができたらContinueボタンをクリックします。

![image](../_asset/images/Flow/CreateFlow/flow-create-flow_11.png)

フローが作成されました。

ここからフローエディタを立ち上げて Node-RED を編集します。以下の例を参考ください。

- [Milkcocoa フロー](./FlowExampleMilkcocoa.md)


## Web Flow Editorの制限

Web Flow Editorは実行環境ではなく、開発環境として提供しています。
以下の制限があります。留意してください。

* ハードウェア依存のノードが使用できない
* 開発環境に依存するノードが使用できない
* 大きなサイズのノードをimportし、使用できない
    * リロードを繰り返してしまうことがあります
* 生成されるURLは一時的なものである
* Node-REDで定義されているキーボードショートカット機能が一部使用できません