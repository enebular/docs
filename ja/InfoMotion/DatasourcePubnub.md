---
lastUpdated: 2018-05-24
---

# Pubnub DataSource の作成

このページでは Pubnub DataSource の作成を説明します。
enebular のフローエディタを用いて Pubnub DataSource にデータをプッシュします。

## Pubnub アカウントの登録

https://www.pubnub.com/ にアクセスし、アカウントを登録します。
Pubnub にログインし、ダッシュボード右上の [CREATE NEW APP +] をクリックしてください。 

![](/_asset/images/InfoMotion/datasources/pubnub/pubnub-app-list.png) 

任意の名前を付けて、アプリを作成します。

![](/_asset/images/InfoMotion/datasources/pubnub/create-app.png) 

リストに新しいアプリが追加されます。

![](/_asset/images/InfoMotion/datasources/pubnub/pubnub-new-app-list.png) 

作成したアプリをクリックします。

![](/_asset/images/InfoMotion/datasources/pubnub/pubnub-dashboard.png) 

Pubnub は初期設定から Demo Keyset を提供しています。
これらの Key はデータストアにデータをプッシュするのに必要となります。
Demo Keyset をクリックして表示してください。

![](/_asset/images/InfoMotion/datasources/pubnub/pubnub-keys.png) 


InfoMotion で データを表示するには、Pubnub にデータをプッシュした際にデータを保存する必要があります。
`STORAGE & PLAYBACK` の項目までスクロールダウンしてください。
スイッチを on の方に切り替え、`Rentention` を 1 day 以上に設定してください。
[save changes] をクリックして設定を保存します。

![](/_asset/images/InfoMotion/datasources/pubnub/pubnub-storage-playback.png) 


## フローの作成

Pubnub datastore にデータをプッシュするフローの作成例について説明します。 

enebular のプロジェクトから新しいフローを作成してください。

![](/_asset/images/InfoMotion/datasources/pubnub/create-flow.png)

[Edit Flow] をクリックして、フローエディタ―を開きます。

![](/_asset/images/InfoMotion/datasources/pubnub/edit-flow.png)

下記のノードを配置し、下記の画像のようなフローを作成してください。

* Inject ノード
* function ノード
* pubnub(in) ノード
* pubnub(out) ノード
* debug ノード

![](/_asset/images/InfoMotion/datasources/pubnub/flow.png)

function ノードをダブルクリックして `edit function node` のモーダル画面を表示してください。
下記スクリプトをコピーして Function に貼り付けます。

```javascript
var data = {
	value:{
    country:['JP','USA','CN'][Math.floor(Math.random()*3)],
    value: Math.floor(Math.random()*10),
    created:Date.now()
	},
	timestamp:Date.now()
}

msg.payload = data; 
return msg;
```

入力出来たら、 [Done] をクリックして画面を閉じます。

![](/_asset/images/InfoMotion/datasources/pubnub/function-node.png)

pubnub out ノードをダブルクリックしてモーダル画面を表示します。
鉛筆のアイコンをクリックしてください。

![](/_asset/images/InfoMotion/datasources/pubnub/pubnub-out-node.png)

`Add new pubnub-keys config node` のモーダル画面を表示します。
先ほど作成した pubnub アプリの `Publish key` と `Subscribe key` を入力してください。
[Done] をクリックして設定を保存します。

![](/_asset/images/InfoMotion/datasources/pubnub/pubnub-out-node-keys.png)


`channel` には仮に "test" とします。この channel にデータをプッシュします。
[Done] をクリックして画面を閉じます。

![](/_asset/images/InfoMotion/datasources/pubnub/pubnub-out-node-complete.png)

pubnub in ノードにも同じ key, channel の設定をします。

![](/_asset/images/InfoMotion/datasources/pubnub/pubnub-in-node-complete.png)

鉛筆のアイコンをクリックして、各設定を入力してください。

![](/_asset/images/InfoMotion/datasources/pubnub/pubnub-in-node-keys.png)

次に inject ノード(表示は timestamp )のモーダル画面を表示します。

 `repeat` を [interval] とし、every [5] seconds に設定します。
 [Done] をクリックして、モーダル画面を閉じます。

![](/_asset/images/InfoMotion/datasources/pubnub/timestamp-node.png) 


全てのノードの準備ができたので、 [Deploy] を押してノードを実行します。

フローの実行ログをエディター右部のデバッグタブより閲覧できます。
下記のようなログが表示され、正しくフローが実行されていることを確認してください。

![](/_asset/images/InfoMotion/datasources/pubnub/debug.png) 


## DataSource の作成

フローを作成したものと同じプロジェクトの `Data Souce` のページを表示します。
右下の + ボタンをクリックして、 `Data Source`を追加します。

![](/_asset/images/InfoMotion/datasources/pubnub/datasource.png) 

`Title` に任意の名前を入力し、DataSource Type から [pubnub] を選択してください。
pubnub 用の設定画面が開きます。

`Publish key`, `Subscribe key` には先ほど作成した pubnub アプリのものを入力してください。
`channel` には仮に設定した "test" を入力します。
`Count` は [100] のままに設定して、[Save] をクリックして設定を保存します。

![](/_asset/images/InfoMotion/datasources/pubnub/settings.png) 


DataSource を使用する準備ができました。
InfoMotion ダッシュボードを作成する際に作った DataSource を選択することでデータをグラフに反映できます。
詳しくは以下のページを順に参照してください。

* [Sample infotypes](./SampleInfoTypes.md)
* [Upload an InfoType](./UploadInfoType.md)
* [CreateInfoMotion](/.CreateInfoMotion)
