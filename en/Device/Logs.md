---
lastUpdated: 2018-05-25
---

# Logs

In enebular, you can check the logging of a paid device by
turning on the monitoring setting of the device.
* For the monitoring settings, refer to [Device List](/Device/DeviceList.md).

The specifications of the log output by enebular agent and enebular edge agent are different.

![view_logs](/_asset/images/Device/Logs/view_logs.png)

To view the log, please click [View Logs] in the right part of the target device.

## enebular agent log

The enebular agent sends the log output to the console (stdout / stderr) to enebular.
By default, only logs of `info` level are output. You can change the output setting to the `debug` level with the environment variable DEBUG.

The enebuar agent also captures all logs that Node-RED outputs to the console. All log contents captured from Node-RED will be logged as the log level of `info`.

After startup, logs are sent every 30 seconds for 3 minutes after flow deployment, and logs are sent every 5 minutes in other cases.
Also, logs are sent when the system is shut down.

### Node-RED log

The log output by Node-RED depends on Node-RED setting and node setting.
For details, please refer to [Node-RED Documentation](https://nodered.org/).

If you want to output the log of the Debug node, output to the console is enabled by setting the Debug node to `debug tab and console`.

![view_logs](/_asset/images/Device/Logs/debug_node_config.png)

### How to read the log screen

This is an example of the enebular agent's log screen.

![cloud_logs](/_asset/images/Device/Logs/cloud_logs.png)

1. Timestamp of log output
1. Log
1. The service that output the log
* Internal refers to enebular agent
1. Log Level
1. Timestamp when enebular received the log
* By clicking the timestamp, you can select the time of the log to be viewed

The log output from the Debug node is displayed as follows.

![cloud_logs](/_asset/images/Device/Logs/debug_node.png)


## enebular edge agent log

Enebular Edge Agent sends operation logs and error logs to enebular.
Logs are sent 30 seconds after booting the device, thereafter every 5 minutes.

### How to read the log screen

This is an example of the enebular edge agent log screen.

![device_logs](/_asset/images/Device/Logs/eea_logs.png)

1. Log
1. Function name that output log
1. Log Level
1. Timestamp when enebular received the log
* By clicking the timestamp, you can select the time of the log to be viewed

### enebular edge agent log list

below are the operation logs and error logs of the enebular edge agent.
For further information please contact ** support@enebular.com**.

#### operation log

| Log | Description |
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

#### error log

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