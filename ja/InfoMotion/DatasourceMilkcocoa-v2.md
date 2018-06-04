---
lastUpdated: 2018-5-24
---

# Milkcocoa-v2 DataSource の作成

このページでは milkcocoa-v2 DataSource の作成を説明します。
enebular のフローエディタを用いて milkcocoa-v2 DataSource にデータをプッシュします。

## milkcocoa アカウントの登録

https://mlkcca.com/ にアクセスし、アカウントを登録します。
milkcocoaにログインし、ダッシュボードの [新しいアプリを作る] をクリックしてください。

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/app-list.png)

アプリに名前を付けます。

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/name-app.png)

リストに新しいアプリが追加されます。

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/new-app-list.png)

アプリには固有の `app_id` が紐づきます。
初期設定でアプリの認証が public となっています。

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/app-dashboard.png)

## フローの作成

milkcocoa Datastore にデータをプッシュするフローの作成例について説明します。

enebular のプロジェクトから新しいフローを作成してください。

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/create-flow.png)

[Edit Flow] をクリックして、フローエディタ―を開きます。
下記のノードを配置し、下記の画像のようなフローを作成してください。

* inject ノード
* function ノード
* milkcocoa(output) ノード
* debug ノード

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/flow.png)

function ノードをダブルクリックして `edit function node` のモーダル画面を表示してください。
下記スクリプトをコピーして Function に貼り付けます。

```javascript
var data = {
  country: ['JP', 'USA', 'CN'][Math.floor(Math.random() * 3)],
  value: Math.floor(Math.random() * 10),
  created: Date.now()
}

msg.payload = data
return msg
```

入力出来たら、 [Done] をクリックして画面を閉じます。

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/function-node.png)

次に milkcocoa ノードのモーダル画面を表示します。

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/edit-milkcocoa-node.png)

鉛筆のアイコンをクリックして、`Add new milkcocoa config node` のモーダル画面を表示します。
`App ID` には先ほど作成した milkcocoa アプリの `app_id` を入力します。
`API Key` と `API Secret` は空のままにし、[Add] をクリックしてください。

※ milkcocoa アプリの設定で API認証を有効にした場合は`API Key` と `API Secret` の入力が必要となります。

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/set-app-id.png)

`Data Store` には 「test」 を入力し、 `operation` は [Push] を選択します。
設定が終わったら [Done] をクリックして、モーダル画面を閉じます。

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/milkcocoa-node-settings.png)

次に inject ノード(表示は timestamp )のモーダル画面を表示します。

 `repeat` を [interval] とし、every [5] seconds に設定します。
 [Done] をクリックして、モーダル画面を閉じます。

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/timestamp-node.png)

全てのノードの準備ができたので、 [Deploy] を押してノードを実行します。

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/deploybutton.png)

フローの実行ログをエディター右部のデバッグタブより閲覧できます。
下記のようなログが表示され、正しくフローが実行されていることを確認してください。

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/debug-log.png)

次に milkcocoa のページで先ほど作ったアプリからデータにデータが追加されているか確認します。

[データストア] ページを表示し、検索バーに "test" を入力してください。
[リスト表示（更新）] をクリックしてデータストアのリストを表示します。
下記のようにデータが追加されていることを確認してください。

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/store.png)

## Data Source の作成

フローを作成したものと同じプロジェクトの `Data Source` のページを表示します。
右下の + ボタンをクリックして、 `Data Source`を追加します。

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/data-source.png)

`Title` に任意の名前を入力し、DataSource Type から [milkcocoa] を選択してください。
milkcocoa 用の設定画面が開きます。
`App Id` には先ほど作成したmilkcocoa アプリの `app_id` を入力し、`DataStore` には "test" を入力します。
`API Key` と `API Secret` は空のままにし、[Save] をクリックしてください。

※ milkcocoa アプリの設定で API認証を有効にした場合は`API Key` と `API Secret` の入力が必要となります。

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/settings.png)

DataSource を使用する準備ができました。
InfoMotion ダッシュボードを作成する際に作った DataSource を選択することでデータをグラフに反映できます。

詳しくは以下のページを順に参照してください。

* [Sample infotypes](./SampleInfoTypes.md)
* [Upload an InfoType](./UploadInfoType.md)
* [Create nfoMotion](./CreateInfoMotion.md)

### ローカル環境での使用に際して

milkcocoa のDataSource をローカル環境で使用するには、http サーバーからサーブする必要があります。
Node.js, npm を使用し、 ローカル環境の `index.html` に npm モジュール [http-server](https://www.npmjs.com/package/http-server) を用いることをお勧めします。
