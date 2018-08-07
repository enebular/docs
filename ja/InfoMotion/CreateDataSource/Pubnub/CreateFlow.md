---
lastUpdated: 2018-08-07
---

## フローの作成

Pubnub datastore にデータをプッシュするフローの作成例について説明します。 

enebular のプロジェクトから新しいフローを作成してください。

![](/_asset/images/InfoMotion/datasources/pubnub/create-flow.png)

[Edit Flow] をクリックして、フローエディタ―を開きます。

![](/_asset/images/InfoMotion/datasources/pubnub/edit-flow.png)

下記のノードを配置し、下記の画像のようなフローを作成してください。

* inject ノード
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


`channel` には仮に 「test」 とします。この channel にデータをプッシュします。
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