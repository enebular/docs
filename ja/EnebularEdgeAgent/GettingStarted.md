# Getting Started

enebular-edge-agentでは、enebularのeditorを使い、フローを作成しデプロイできます。editorは、Web上のeditorでもenebular editorでも構いません。(enebular editorを使う際はdesktop modeでフローを起動してください)

本ドキュメントは、enebular-edge-agent用のリファレンスボードであるRAVENを使用したenebular-edge-agentのチュートリアルです。

「LED点滅のフローをenebular-edge-agentにデプロイし、enebularからログを確認する」手順をステップバイステップで行います。（所要時間30分）

RAVENに搭載された部品など、RAVEN の説明については、本ドキュメントの [RAVEN](./../Board/RAVEN.md) のページを参照してください。

[Introduction](./../GetStarted/Introduction.md)に従い、enebular のアカウントとプロジェクトは予め作成しておいてください。

**※現在、無線LANの設定はWindowsOSからしか行うことができません。**

## Table of Contents

1. [無線LANの設定](#network)
1. [フローの作成](#import)
1. [フローのデプロイ](#deployFlow)
1. [実行ログの確認](#logs)

## 無線LANの設定{#network}

1. デバイスとPCをUSBケーブルで接続してください
1. **enebular Reference Board Configuration Tool**（以下: **eRB Config. Tool**）を[こちら](https://download.enebular.com/eRB-Config-Tool/eRBConfigTool.msi)からダウンロードし、インストールします
1. デバイスを `Setting Mode` で起動します。起動時にUSER SWを押したままの状態にします（RESET SWを押した直後にUSER SWを押したままにするとUSER LEDが赤く点灯し、`Setting Mode`で起動します）
    - USER SW、RESET SW、USER LEDの場所については、[RAVEN 各部説明](./../Board/RAVEN.md#parts)を確認してください
1. **eRB Config. Tool** でSSIDとパスワードを設定します（詳しくは[Configuration](./Configuration.md)のページを参照してください）
1. 設定が完了したら、デバイスを再起動してください
1. 起動時にRAVENが無線LANへの接続を試みている間、USER LEDが点滅(0.1秒間隔)を繰り返します ※1
    - RAVENが無線LANの接続に成功するとUSER LEDが消灯します  
    - USER LEDが点滅を続ける場合、RAVENは無線LANに接続できていません。次のことを確認してください  
        - お使いの無線LAN環境が利用可能なことを確認してください  
        - RAVENへのSSIDとパスワードの設定が正しいことを確認してください  

※1 enebular-edge-agent 1.3.0 以降の場合の動きです。それ以前バージョンの場合は`USER LED`は消灯したままです。enebular-edge-agentのバージョンを知る方法は[こちら](./Configuration.md#version)を参照してください。

### フローの作成{#import}

プロジェクトの画面から、新規アセットを`type:flow`で作成します。
![GettingStarted-create-asset](./../../img/EnebularEdgeAgent/GettingStarted-create-asset.png)

[Edit Flow] を押してフローエディタを開きます。
![GettingStarted-create-editFlow](./../../img/EnebularEdgeAgent/GettingStarted-create-editFlow.png)

右上の「Ξ」からメニューを開き、「読み込み」>「クリップボード」を選択します。
![GettingStarted-import-menu](./../../img/EnebularEdgeAgent/GettingStarted-import-menu.png)


フローを張り付けるテキストボックスが表示されますので、下記JSONデータをコピー＆ペーストし、「読み込み」ボタンを押します。

```json
[{"id":"5c08cdab.fe76c4","type":"inject","z":"90d9de00.d40e1","name":"","topic":"","payload":"","payloadType":"date","repeat":"3","crontab":"","once":false,"onceDelay":0.1,"x":110,"y":100,"wires":[["4c620395.fa935c"]]},{"id":"4c620395.fa935c","type":"switch","z":"90d9de00.d40e1","name":"","property":"led","propertyType":"flow","rules":[{"t":"true"},{"t":"else"}],"checkall":"true","repair":false,"outputs":2,"x":250,"y":100,"wires":[["9610c50d.5df558"],["36f9ebd9.df86c4"]]},{"id":"9610c50d.5df558","type":"digitalout","z":"90d9de00.d40e1","board":"RAVEN","pin":"ULED","value":"false","si":false,"name":"","x":420,"y":60,"wires":[["730feba8.5a1a24"]]},{"id":"36f9ebd9.df86c4","type":"digitalout","z":"90d9de00.d40e1","board":"RAVEN","pin":"ULED","value":"true","si":false,"name":"","x":420,"y":140,"wires":[["39806cf9.b31c54"]]},{"id":"730feba8.5a1a24","type":"change","z":"90d9de00.d40e1","name":"","rules":[{"t":"set","p":"led","pt":"flow","to":"false","tot":"bool"}],"action":"","property":"","from":"","to":"","reg":false,"x":590,"y":60,"wires":[[]]},{"id":"39806cf9.b31c54","type":"change","z":"90d9de00.d40e1","name":"","rules":[{"t":"set","p":"led","pt":"flow","to":"true","tot":"bool"}],"action":"","property":"","from":"","to":"","reg":false,"x":590,"y":140,"wires":[[]]}]
```
※フローのインポートをせず、0からフローの作成をしたい場合はページ下部のAppendixの[フローの作成](#createFlow)を参照してください。


![GettingStarted-import-paste](./../../img/EnebularEdgeAgent/GettingStarted-import-paste.png)

フローが読み込まれるので、任意の位置でクリックして、フローを配置してください。右上のデプロイを押します。
![GettingStarted-import-done](./../../img/EnebularEdgeAgent/GettingStarted-import-done.png)

editorでは、USER LEDの点滅を確認できないので、フローはダミーの動きをしています。

※ページ下部のAppendixに[フローの解説](#explainFlow)を書いています。興味のある方はご一読ください。

## フローのデプロイ{#deployFlow}

このステップを実行する際はあらかじめ、RAVENのUSBポートに給電を行い、電源をonにしてください。  
RAVENのUSBポートの場所については、[RAVEN 各部説明](./../Board/RAVEN.md#parts)を確認してください。

デプロイするフローの画面を開き、「DeployFlow」を押します。（previewが表示されていない場合は、ページをリロードしてください。）
![GettingStarted-deploy-button](./../../img/EnebularEdgeAgent/GettingStarted-deploy-button.png)

RAVENの申し込み時に希望したコネクション名を探して選択します。（コネクション名を指定しなかった場合、コネクション名は `raven` となっています）  
該当するコネクションがどれか分からない場合は、 **support@enebular.com** まで連絡をお願いします。  

![GettingStarted-deploy-connection](./../../img/EnebularEdgeAgent/GettingStarted-deploy-connection.png)

RAVEN裏面のバーコードに印字されている20桁の製造番号と一致するデバイスを、Endpoint Nameから探してください。
チェックボックスにマークを付け、Deployボタンを押します。

![GettingStarted-deploy-connection](./../../img/EnebularEdgeAgent/GettingStarted-deploy-execute.png)

デプロイが完了し、RAVENのUSER LEDの点滅が始まります。
![GettingStarted-deploy-done](./../../img/EnebularEdgeAgent/GettingStarted-deploy-done.png)

## 実行ログの確認{#logs}

※ ログ、ステータスを確認するには、ライセンスが登録されている必要があります。詳しくは、[LicenseManager](./../Device/LicenseManager.md)を参照してください。

enebular-edge-agentは実行ログをenebular.comから確認することができます。
ログは、RAVENの起動後30秒で最初に送信し、以降5分毎に送信します。

Projectの画面から`Device List`を選択します。
![GettingStarted-logs-project](./../../img/EnebularEdgeAgent/GettingStarted-logs-project.png)

コネクションを選択します。  
![GettingStarted-logs-connection](./../../img/EnebularEdgeAgent/GettingStarted-logs-connection.png)

デバイスの一覧が表示されます。ログを見たいデバイスのアイコンを選択します。  
![GettingStarted-logs-deciceList](./../../img/EnebularEdgeAgent/GettingStarted-logs-deviceList.png)

実行ログが表示されます。
![GettingStarted-logs-done](./../../img/EnebularEdgeAgent/GettingStarted-logs-done.png)

詳しくは、[Logs](./../Device/Logs.md#enebular-edge-agent)を参照してください。


## Well Done!

LED点滅のフローをenebular-edge-agentにデプロイし、enebularからログを確認することができました。

enebular-edge-agentと市販のセンサーを組み合わせることで簡単なIoTデバイスをだれでも作ることができます。
使用できるノードに制限があるので、[Nodes](./Nodes.md)のページを参考にして、フローを作成してみてください。

## Appendix

### デプロイしたフローの解説{#explainFlow}

![GettingStarted-import-done](./../../img/EnebularEdgeAgent/GettingStarted-import-done.png)

このフローは5秒周期で起動します。

digitaloutノードでは、設定されている先のUSER LEDが現在点いているか、そうでいないのか判断できません。
ここでchangeノードで設定のできる、Flow Contextを使用しています。
Flow Contextはノード間でやりとりされる msg とは異なり、フローの処理が終了しても値が残り続けます。

よって、digitaloutノードで、USER LEDを点灯及び消灯させたのち、後続のchangeノードで現在処理したUSER LEDの状態を保存ということをフロー一度の起動で行っています。
次に起動したときに、前回のUSER LEDの状態がFlow Contextに代入されているので、前回と逆の処理をするようフローが実行されます。

### フローの作成{#createFlow}

すでにenebularにプロジェクトが作成されていることとします。

※このチュートリアルはインポートで使用したフローの作成手順を紹介しています。

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

enebular-edge-agentにデプロイするフローが作成できました。[フローのデプロイ](#deployFlow)からチュートリアルを続けてください。
editorでは、USER LEDの点滅を確認できないので、フローはダミーの動きをしています。