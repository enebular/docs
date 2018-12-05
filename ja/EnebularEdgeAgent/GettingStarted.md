---
lastUpdated: 2018-12-05
---

# Getting Started

enebular-edge-agentでは、他の環境同様にenebularのeditorを使い、フローを作成しデプロイできる特徴があります。
クラウドからデバイスまで同様の開発環境を使用でき、それぞれの開発に特化した専門的な言語スキルがなくても、開発できるというメリットがあります。

このチュートリアルでは、「LED点滅のフローをenebular-edge-agentにデプロイし、enebularからログを確認する」という流れで実施します。（所要時間20分）

**※現在ネットワークの設定はwindowsOSからのみしか行うことができません。**

1. [リファレンスボードの接続](#connection)
1. [ネットワークの設定](#network)
1. [フローの作成](#createFlow)
1. [フローのデプロイ](#deployFlow)
1. [実行ログの確認](#logs)

リファレンスボードを開封して、実際に使ってみるという流れを想定しています。
あらかじめ、enebularにて、アカウントとプロジェクトを作成してください。（GettingStarted > [Introduction](./../GetStarted/Introduction.md) にこの流れについて詳しく記載されています)


## リファレンスボードの接続{#conneciton}

1. リファレンスボードを開封してください。
1. 同梱されているUSBケーブルを用いて、PCのUSBポートに接続してください。
1. デバイスとして`UH-ENExx`が接続されていることを確認してください。（xxには型式にごとの番号が入ります）

## ネットワークの設定{#network}

1. **enebular Reference Board Configuration Tool**（以下: **eRB Config. Tool**）を[こちら](！！！！！！！！あとでリンクはる！！！！！！！！！！！！！)からダウンロードし、インストールします。
1. デバイスを `SettingMode` で起動します。
    -  RAVEN … RESET SW を押し、再起動した後に USER SW を長押しすると、`Setting Mode` になります。USER LED が赤く点灯していることを確認してください。
1. **eRB Config. Tool** でネットワークの設定を行います。詳しくは[Configuration](./Configuration.md)のページを参照してください。
1. 設定が完了したら、デバイスを再起動してください。

## フローの作成{#createFlow}

すでにenebularにプロジェクトが作成されていることとします。

※このチュートリアルステップの最後にJSONデータを置いています。フローをインポートすることで、同様のフローを作成できます。フローの作成をスキップして手短にデプロイをしたい場合は[フローのインポート](#import)からチュートリアルを続けてください。


1. 新規アセットを`type:flow`で作成します。
![GettingStarted-create-asset](./../../img/EnebularEdgeAgent/GettingStarted-create-asset.png)

1. [Edit Flow] を押してフローエディタを開きます。
![GettingStarted-create-editFlow](./../../img/EnebularEdgeAgent/GettingStarted-create-editFlow.png)

1. 下記画像を参考にしてノードを配置してください。
![GettingStarted-create-putNodes](./../../img/EnebularEdgeAgent/GettingStarted-create-putNodes.png)
下記のノードを使用しています。digitaloutノードはEEAカテゴリーの中にあります。
    - inject
    - switch
    - digitalout 2つ
    - change 2つ

1. injectノード①は「繰り返し」を`指定した時間間隔`にし、「時間間隔」を`3秒`としてください。「完了」を押します。
![GettingStarted-create-inject](./../../img/EnebularEdgeAgent/GettingStarted-create-inject.png)

1. switchノード②は「プロパティ」を`flow.led`とし、条件1を`is true`にします。
![GettingStarted-create-switch](./../../img/EnebularEdgeAgent/GettingStarted-create-switch.png)

1. 左下の ![+追加](./../../img/EnebularEdgeAgent/GettingStarted-create-add.png) を押して、条件を追加します。条件2を`その他`としてください。「完了」を押します。
![GettingStarted-create-switchAddRule](./../../img/EnebularEdgeAgent/GettingStarted-create-switchAddRule.png)

1. digitaloutノード③は「Board」を`RAVEN`にし、「Pin」を`USER LED`、「Value」を`false`としてください。「完了」を押します。
![GettingStarted-create-digitalout1](./../../img/EnebularEdgeAgent/GettingStarted-create-digitalout1.png)

1. changeノード④は`flow.led`に「真偽」> `false`を代入という設定にしてください。「完了」を押します。
![GettingStarted-create-change1](./../../img/EnebularEdgeAgent/GettingStarted-create-change1.png)

1. digitaloutノード⑤は「Board」を`RAVEN`にし、「Pin」を`USER LED`、「Value」を`true`としてください。「完了」を押します。
![GettingStarted-create-digitalout2](./../../img/EnebularEdgeAgent/GettingStarted-create-digitalout2.png)

1. changeノード⑥は`flow.led`に「真偽」> `false`を代入という設定にしてください。「完了」を押します。
![GettingStarted-create-change2](./../../img/EnebularEdgeAgent/GettingStarted-create-change2.png)

1. switchノード②の右側に口が一つ追加されているので、digitaloutノード⑤のつなぎ先をそちらに変更し、右上のデプロイを押します。
![GettingStarted-create-switchOut](./../../img/EnebularEdgeAgent/GettingStarted-create-switchOut.png)

enebular-edge-agentに完成するフローが作成できました。[フローのデプロイ](#deploy)からチュートリアルを続けてください。
editorでは、LEDの点滅を確認できないので、フローはダミーの動きをしています。

### フローのインポート{#import}

すでにenebularにプロジェクトが作成されていることとします。

フローのJSONデータを使って、フローのインポートができます。
フローの作成をスキップして、インポートしてチュートリアルを続ける場合、以下の手順を進めてください。

1.下記よりJSONデータをコピーして、クリップボードに保存してください。

```json
[{"id":"6174606a.28645","type":"inject","z":"a3fa9d02.41f82","name":"","topic":"","payload":"","payloadType":"date","repeat":"3","crontab":"","once":false,"onceDelay":0.1,"x":150,"y":120,"wires":[["f76c9ed4.26ab7"]]},{"id":"f76c9ed4.26ab7","type":"switch","z":"a3fa9d02.41f82","name":"","property":"led","propertyType":"flow","rules":[{"t":"true"},{"t":"else"}],"checkall":"true","repair":false,"outputs":2,"x":290,"y":120,"wires":[["44312ea5.f0f86"],["e5269eac.c7345"]]},{"id":"44312ea5.f0f86","type":"digitalout","z":"a3fa9d02.41f82","board":"SBBv2","pin":"ULED","value":"false","si":false,"name":"","x":460,"y":80,"wires":[["c4fd3845.6412d8"]]},{"id":"e5269eac.c7345","type":"digitalout","z":"a3fa9d02.41f82","board":"SBBv2","pin":"ULED","value":"true","si":false,"name":"","x":460,"y":160,"wires":[["c34fe143.724c5"]]},{"id":"c4fd3845.6412d8","type":"change","z":"a3fa9d02.41f82","name":"","rules":[{"t":"set","p":"led","pt":"flow","to":"false","tot":"bool"}],"action":"","property":"","from":"","to":"","reg":false,"x":630,"y":80,"wires":[[]]},{"id":"c34fe143.724c5","type":"change","z":"a3fa9d02.41f82","name":"","rules":[{"t":"set","p":"led","pt":"flow","to":"true","tot":"bool"}],"action":"","property":"","from":"","to":"","reg":false,"x":630,"y":160,"wires":[[]]}]
```

1. 新規アセットを`type:flow`で作成します。
![GettingStarted-create-asset](./../../img/EnebularEdgeAgent/GettingStarted-create-asset.png)

1. [Edit Flow] を押してフローエディタを開きます。
![GettingStarted-create-editFlow](./../../img/EnebularEdgeAgent/GettingStarted-create-editFlow.png)

1. 右上の「Ξ」からメニューを開き、「読み込み」>「クリップボード」を選択します。
![GettingStarted-import-menu](./../../img/EnebularEdgeAgent/GettingStarted-import-menu.png)

1. フローを張り付けるテキストボックスが表示されます。先ほどのJSONデータをペーストしてください。「読み込み」ボタンを押します。
![GettingStarted-import-paste](./../../img/EnebularEdgeAgent/GettingStarted-import-paste.png)

1. フローが読み込まれるので、任意の位置でクリックして、フローを配置してください。右上のデプロイを押します。
![GettingStarted-import-done](./../../img/EnebularEdgeAgent/GettingStarted-import-done.png)


## フローのデプロイ{#deployFlow}

このステップを実行する前に、デバイスの電源をあらかじめ、onにしてください。

1. デプロイするフローの画面を開き、「DeployFlow」を押します。（previewが表示されていない場合は、ページをリロードしてください。）
![GettingStarted-deploy-button](./../../img/EnebularEdgeAgent/GettingStarted-deploy-button.png)

1. すでに作成されている`Type:Pelion`のConnectionが存在するので、選択します。
![GettingStarted-deploy-connection](./../../img/EnebularEdgeAgent/GettingStarted-deploy-connection.png)

1. Statusが「Connected」になっているデバイスが手元にあるデバイスです。チェックボックスにマークを付けてください。
※connectedのデバイスがある場合は、[デバイスIDの確認方法](#deviceID)から、デバイスIDを確認してください。
![GettingStarted-deploy-selectTarget](./../../img/EnebularEdgeAgent/GettingStarted-deploy-selectTarget.png)

1. 下までスクロールし、「Deploy」を押します。
![GettingStarted-deploy-execute](./../../img/EnebularEdgeAgent/GettingStarted-deploy-execute.png)

1. デプロイが完了し、USER LEDの点滅が始まります。
![GettingStarted-deploy-done](./../../img/EnebularEdgeAgent/GettingStarted-deploy-done.png)

### デバイスIDの確認方法{#deviceID}

後で確認して書く

## 実行ログの確認{#logs}

enebular-edge-agentは実行ログをenebular.comから確認することができます。
ログは、デバイスの起動後30秒で最初に送信し、以降5分毎に送信します。

1. Projectの画面から「Device List」を選択します。
![GettingStarted-logs-project](./../../img/EnebularEdgeAgent/GettingStarted-logs-project.png)

1. Device Listが表示されます。ログを見たいデバイスの「View Logs」を押します。
![GettingStarted-logs-deciceList](./../../img/EnebularEdgeAgent/GettingStarted-logs-deviceList.png)

1. 実行ログが表示されます。
![GettingStarted-logs-done](./../../img/EnebularEdgeAgent/GettingStarted-logs-done.png)

詳しくは、[Logs](./../Device/Logs.md#enebular-edge-agent)を参照してください。


## Well Done!

LED点滅のフローをenebular-edge-agentにデプロイし、enebularからログを確認するということができるようになりました。

enebular-edge-agentと市販のGroveセンサーを組み合わせることで簡単なIoTデバイスをだれでも作ることができます。
使用できるノードに制限があるので、[Nodes](./Nodes.md)のページを参考にして、フローを作成してみてください。