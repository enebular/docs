---
lastUpdated: 2018-05-23
---

# Logs

enebularでは、フローをデプロイしたデバイスのログを確認することができます。
ログを閲覧したいデバイスのモニタリング設定を ON にしてください。
※モニタリング設定については、[Device List](/Device/DeviceList.md)のページを参照してください。

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
詳しくは[Node-REDのドキュメント](https://nodered.org/)をご覧ください。

もし、 Debug ノードのログ出力をしたい場合は、Debug ノードを `debug tab and console` の設定にすることで、コンソールへの出力が有効になります。

![view_logs](/_asset/images/Device/Logs/debug_node_config.png)

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

enebular edge agent の動作ログ及びエラーログです。
さらに情報が必要な方は **support@enebular.com** に連絡してください。

#### 動作ログ

| ログ | 説明 |
| :--- | :--- |
| main start | enebular edge agent の起動 |
| thread boot | スレッド生成 |
| wifi connected | Wi-Fi 接続の確立 |
| device manager initalized | デバイス管理機能の初期化 |
| flow def manager initialized | フロー管理機能の初期化 |
| uhuru red initialized | フロー実行機能の初期化 |
| flow URL length checked | フローのダウンロードにおける URL 検証 |
| flow downloaded | フローのダウンロード |
| flow integrity checked | フローの整合性チェック |
| flow size checked | フローのサイズチェック |
| flow saved | フローの保存 |
| SD initialized | SD カードの初期化 |
| flow deployed | フローのデプロイ |
| flow executing | フロー実行中 |
| flow executed | フロー実行終了 |
| flash updated: device bandle | デバイスバンドルのフラッシュアップデート |
| flash updated: flow define | フロー定義のフラッシュアップデート |
| flash updated: javascript code | フロー実行コードのフラッシュアップデート |

#### エラーログ

| ログ | 説明 |
| :--- | :--- |
| flow URL connect timeout | フローのダウンロード中のタイムアウト |
| flow download failed | フローのダウンロード失敗 |
| flow data error | フローの整合性エラー |
| flow size over | フローのサイズオーバー |
| writing flow failed | SD カードへのフロー書き込み失敗 |
| reading flow failed | SD カードからのフロー読み込み失敗 |
| flow URL size over | フローダウンロードURL のサイズオーバー |
| mbed cloud factory configurator client error | mbed cloud との接続エラー |
| flow runtime not found | フロー実行コードが見つからない |
| flow file not found | フロー定義が見つからない |
| js interpreter error | javascript 実行ライブラリのエラー |
| js flow json parse error | フロー定義のパースエラー |
| js node initialize error | ノード初期化エラー |
| js flow stopped error | フローの停止 |
| js flow execute error | フロー実行エラー |
| device auth none license | ライセンスが存在しない |
| device auth https error |ライセンス認証接続エラー |
| device auth invalid | ライセンスが無効 |
| token https error | トークン取得エラー |
| activate device https error | アクティベート接続エラー |