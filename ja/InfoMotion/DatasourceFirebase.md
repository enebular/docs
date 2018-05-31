---
lastUpdated: 2018-05-24
---

# Firebase DataSource の作成

このページでは Firebase Datasource の作成を説明します。
enebular のフローエディタを用いて Firebase DataSource にデータをプッシュします。

## Firebase アカウントの登録 

https://firebase.google.com/ にアクセスし、アカウントを登録します。
firebase にログインし、 [プロジェクトを追加] をクリックしてください。

![](/_asset/images/InfoMotion/datasources/firebase/firebase-wellcome.png) 


任意のプロジェクト名を入力し、国/地域 を選択後、[プロジェクトを作成] をクリックしてください。
新しいプロジェクトが作成されます。

![](/_asset/images/InfoMotion/datasources/firebase/add-a-project.png) 


プロジェクト画面が表示されます。
「ここから始めましょう。」 の下にある [ウェブアプリに Firebase を追加] をクリックしてください。

![](/_asset/images/InfoMotion/datasources/firebase/get-started.png) 


設定スクリプトのポップアップウィンドウが表示されます。後程使用するので、コピーして任意の場所に貼り付けておいてください。

![](/_asset/images/InfoMotion/datasources/firebase/firebase-keys.png) 


## 認証

フローを作成する前に、アプリの認証の設定をする必要があります。
今回は、匿名の認証を用います。

プロジェクト左側のメニューから [Develop] をクリックして、さらに [Authentication] のページを開きます。
[ログイン方法を設定] をクリックします。

![](/_asset/images/InfoMotion/datasources/firebase/authentication-sidebar.png) 


[匿名] を選択します。

![](/_asset/images/InfoMotion/datasources/firebase/authentication.png) 


スイッチを on にして [保存] をクリックします。

![](/_asset/images/InfoMotion/datasources/firebase/anonymous-enable.png) 


匿名が有効になっているのを確認してください。

![](/_asset/images/InfoMotion/datasources/firebase/anonymous-status-enabled.png) 


## DataBase のセットアップ 

次に左部のメニューから [Database] をクリックしてください。
Realtime Databaseの [スタートガイド] をクリックします。

![](/_asset/images/InfoMotion/datasources/firebase/database.png) 


[テストモードで開始] を選択し、[有効にする] をクリックします。

![](/_asset/images/InfoMotion/datasources/firebase/database-security.png) 


## フローの作成

Firebase の準備ができたのでデータをプッシュするフローを作成します。
enebular のプロジェクトの右下の +ボタンをクリックし、新しいフローを作成します。

![](/_asset/images/InfoMotion/datasources/firebase/flow-list.png) 


任意の名前を付けて [Continue] をクリックします。

![](/_asset/images/InfoMotion/datasources/firebase/create-flow.png) 


[Edit Flow] をクリックしてフローエディターを開きます。

![](/_asset/images/InfoMotion/datasources/firebase/edit-flow.png) 


下記のノードを配置し、下記の画像のようなフローを作成してください。

* inject ノード
* function ノード
* firebase modify ノード
* debug ノード

(もし、Firebase のノードが存在してなかったら、 `node-red-contrib-firebase` を admin タブよりインストールしてください)

![](/_asset/images/InfoMotion/datasources/firebase/flow.png) 


次に inject ノード(表示は timestamp )のモーダル画面を表示します。

 `repeat` を [interval] とし、every [10] seconds に設定します。
 [Done] をクリックして、モーダル画面を閉じます。

![](/_asset/images/InfoMotion/datasources/firebase/inject-node.png) 


function ノードをダブルクリックして `edit function node` のモーダル画面を表示してください。
下記スクリプトをコピーして Function に貼り付けます。

```javascript
var data = {
        timestamp: Date.now(),
        value:{
            country:['JP','CN','USA'][Math.floor(Math.random()*3)],
            value: Math.floor(Math.random()*10),
            created:Date.now()
        }
      }
      
msg.payload = data;
return msg;
```

![](/_asset/images/InfoMotion/datasources/firebase/function-node.png) 

次にfirebase ノードのモーダル画面を表示します。
鉛筆のアイコンをクリックして、`Edit firebase config node` のモーダル画面を表示します。

`Firebase` には先ほど作成した Firebase プロジェクトの ID を入力してください。
`Auth Type` は [None] を選択します。設定が終わったら [Add] をクリックして保存します。

![](/_asset/images/InfoMotion/datasources/firebase/firebase-config-node.png) 


`Child path`には「test」 を入力し、`Method` は [push] を選択、`value` は「msg.payload」のままにし、 [Done] をクリックします。

![](/_asset/images/InfoMotion/datasources/firebase/firebase-node.png) 


全てのノードの準備ができたので、 [Deploy] を押してノードを実行します。

フローの実行ログをエディター右部のデバッグタブより閲覧できます。
下記のようなログが表示され、正しくフローが実行されていることを確認してください。

![](/_asset/images/InfoMotion/datasources/firebase/debug-log.png) 


次に Firebase のページで先ほど作ったアプリからデータにデータが追加されているか確認します。

![](/_asset/images/InfoMotion/datasources/firebase/firebase-project-database.png) 


## DataSource の作成

フローを作成したものと同じプロジェクトの `Data Souce` のページを表示します。
右下の + ボタンをクリックして、 `Data Source`を追加します。

`Title` に任意の名前を入力し、DataSource Type から [Firebase] を選択してください。
Firebase 用の設定画面が開きます。
Firebase アプリを作成した際に表示された設定スクリプトを参考にして、`Api Key`, `Auth Domain`, `Database URL`, `Project Id`, `Storage Bucket`, `Messaging Sender Id` を入力してください。

`Ref` にはフロー作成の際に用いた `Child path` を入力します。(Firebase ではコレクション名となっています。)
`Ref` の設定値には `/(スラッシュ)` が前方に必要なので「/test」としてください。

![](/_asset/images/InfoMotion/datasources/firebase/datasource-settings.png)


DataSourceが追加されていることを確認してください。

![](/_asset/images/InfoMotion/datasources/firebase/new-datasource.png)


DataSource を使用する準備ができました。
InfoMotion ダッシュボードを作成する際に作った DataSource を選択することでデータをグラフに反映できます。

詳しくは以下のページを順に参照してください。

* [Sample infotypes](./SampleInfoTypes.md)
* [Upload an InfoType](./UploadInfoType.md)
* [Create InfoMotion](./CreateInfoMotion.md)