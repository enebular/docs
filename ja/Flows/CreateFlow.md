# フローの作成 {#フローの作成}

フローの作成方法を説明します。

プロジェクト一覧からプロジェクトを選択してプロジェクトの管理画面に移動します。

![projects](./../../img/Flow/CreateFlow-projects.png)

右下の + ボタンからモーダルを立ち上げます。

![plus](./../../img/Flow/CreateFlow-plus.png)

モーダルが立ち上がるのでまず Asset Type に flow を指定します。

![asettype](./../../img/Flow/CreateFlow-asettype.png)

flow を指定すると、アイコンやタイトルの指定、および、アクセス権限の設定ができます。

![modal](./../../img/Flow/CreateFlow-modal.png)

- タイトル
  - 任意のフローのタイトル
- 説明
  - 今回は何も入力しません
- アクセス権限
  - edit, deploy, publish
- カテゴリー
  - 今回の用途に合ったカテゴリを指定

![continue](./../../img/Flow/CreateFlow-continue.png)

設定ができたら Continue ボタンをクリックします。

![created](./../../img/Flow/CreateFlow-created.png)

フローが作成されました。

※ enebular / enebular-agent は、Node-RED向けのすべてのノードが利用できるわけではありません。オープンソース・コミュニティで開発されるノードの利用は、利用者が自身のリスクで利用してください
また、enebular-edge-agentは利用できるノードについて特に制限があります。詳しくは [enebular-edge-agent > Nodes](./../EnebularEdgeAgent/Nodes.md) を参照してください。

## Web Flow Editor の制限

Web Flow Editor は実行環境ではなく、開発環境として提供しています。
以下の制限があります。留意してください。

- ハードウェア依存のノードが使用できない
- 開発環境に依存するノードが使用できない
- 大きなサイズのノードを import し、使用できない
  - リロードを繰り返してしまうことがあります
- 生成される URL は一時的なものである
- Node-RED で定義されているキーボードショートカット機能が一部使用できません

## Node-REDの互換性に関する注意点 {#NoteNodeREDCompatibility}

### ノードの有効化/無効化 {#NodeEnabledDisabled}

enebular v2.25.0以降では、Node-RED v1を採用しています。これにより、Node-REDの[ノードの有効化・無効化](https://nodered.jp/docs/user-guide/editor/workspace/nodes#%E3%83%8E%E3%83%BC%E3%83%89%E3%81%AE%E6%9C%89%E5%8A%B9%E5%8C%96%E7%84%A1%E5%8A%B9%E5%8C%96)の機能が利用できるようになります。
ノードの有効化・無効化を設定できるのは以下の開発環境です。

* Web Flow Editor(Node-RED 1.0.5に対応済みであるため利用可能)
* enebular editor: 1.0.0以上

ノードの有効化・無効化を設定したフローのデプロイについては[デプロイについて](../Deploy/index.md#NodeEnabledDisabled)を参照してください。