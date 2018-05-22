---
lastUpdated: 2018-05-22
---

# Logs

enebularでは、フローをデプロイしたデバイスのログを確認することができます。
ログを閲覧したいデバイスのモニタリング設定を ON にしてください。
※モニタリング設定については、[Device List]()のページを参照してください。

enebular agent と enebular edge agent で出力されるログの仕様が異なります。

![view_logs](/_asset/images/Device/Logs/view_logs.png)

ログを閲覧するには Device List よりログを見たい対象デバイスの右部にある [View Logs] を押してください。


## enebular agent のログ

enebular agent はコンソール( stdout / err )に出力したログを enebular に送信します。
デフォルトで`info`レベルのログのみの出力となっています。環境変数により出力設定を`debug`レベルへ変更することができます。

また、enebuar agent は Node-RED がコンソールに出力するログ全てをキャプチャ―します。Node-REDからキャプチャーしたログ内容は全て`info`のログレベルとしてロギングします。

起動後、フローデプロイ後の3分間は30秒毎にログを送信し、他の場合は5分毎にログを送信します。
また、システム終了時にログの送信を行います。

### Node-RED のログ

Node-RED が出力するログは Node-RED の設定やノードの設定に依存します。
もし、 Debug ノードのログ出力をしたい場合は、Debug ノードを `debug tab and console` の設定にすることで、コンソールへの出力が有効になります。

詳しくは[Node-REDのドキュメント](https://nodered.org/)をご覧ください。

### ログ画面の見方

enebular agentのログ画面の例です。

![cloud_logs](/_asset/images/Device/Logs/cloud_logs.png)

1. ログを出力したタイムスタンプ
1. ログ
1. ログを出力したサービス
※ internal は enebular agent を指します
1. ログレベル
1. enebularがログを受信したタイムスタンプ
※ タイムスタンプをクリックすることによって、閲覧するログの時刻を選択できます


また、Debug ノードから出力されるログは以下のように表示されます。

![cloud_logs](/_asset/images/Device/Logs/debug_node.png)


## enebular edge agent のログ

enebular edge agent は動作ログ及びエラーログをenebularに送信します。

デバイスの起動後30秒でログを送信し、以降5分毎にログを送信します。


### ログ画面の見方

enebular edge agent のログ画面の例です。
![device_logs](/_asset/images/Device/Logs/eea_logs.png)

1. ログ
1. ログを出力した機能名
1. ログレベル
1. enebularがログを受信したタイムスタンプ
※ タイムスタンプをクリックすることによって、閲覧するログの時刻を選択できます

### enebular edge agent ログリスト

#### 動作ログ
| ログ | 説明 |
| :--- | :--- |
|  main start | あああああ |
| thread boot |aaaaa|
| wifi connected|  |
| device manager initalized|  |
| flow def manager initialized|  |
| uhuru red initialized|  |
| flow URL length checked|  |
| flow downloaded|  |
| flow integrity checked|  |
| flow size checked|  |
| flow saved|  |
| SD initialized|  |
| flow deployed|  |
| flow executing|  |
| flow executed|  |
| flash updated: device bandle|  |
| flash updated: flow define|  |
| flash updated: javascript code||

#### エラーログ