---
lastUpdated: 2018-12-03
---

# Nodes

enebular-edge-agentはenebularで作成したフローを実行できます。
利用できるノードには制限があります。

## Nodes List

Nodeには**enebular Nodes**と**enebular-edge-agent Nodes**があります。

### enebular Nodes

**enebular Nodes**は、enebularと共通で使えるノードです。ノードによって制限があるので、このページを参考に設定してください。

| ノード | 概要 | 備考 |
| --- | --- | --- |
| change | msgプロパティの変換や削除などを行う | - |
| debug | デバッグメッセージを出力する | コンソールに出力できません |
| http request | http requestをする | 制限が複数あります ※1 |
| inject | 一定周期でフローを起動する | 制限が複数あります ※2 |
| range | `msg.payload`の値を設定によって変換する | - |
| switch | 条件分岐を設定する | - |

※1 **http request node**には以下の制限があります。

- 同時に使用できるhttp request nodeの最大値は5個
- `GET` ,`POST` のメソッドのみに対応
- 256byteがレスポンスの上限で、超えると `size over` が `msg.payload` に代入される
- https へのリクエスト送信に非対応
- proxy設定に非対応
- basic認証に非対応
- `msg.cookies`, `msg.headers`, `msg.rejectUnauthorized` の設定を無視する
- mustache-styleに非対応

※2 **inject node**には以下の制限があります。
- cron実行非対応
- `Node-RED起動の n 秒後、以下を行う`に非対応
- timestampのみを出力とする

### enebular-edge-agent Nodes

**enebular-edge-agent Nodes**は、enebular-edge-agent用に作成されたNodeで、エディタ上ではダミーの値を出力します。
enebular-edge-agentにデプロイすることで、エッジデバイス固有の動作をします。詳しくは各ノードのヘルプ参照してください。


| ノード | 概要 | 備考 |
| --- | --- | --- |
| analogIn | A/Dコンバータからの入力値を取得する | - |
| BME280 | BME280から温度、湿度、気圧の値を取得する |  |
| digitalOut | デジタル出力をする | - |
| interruptIn | デジタル入力の立ち上がり、または立ち下がりを検出して割り込み入力を行う | 同時使用上限は5個です |
| TSL2561 | TSL2561またはTSL2581から照度の値を取得する | - |

## フローの実行

**実行できるフローのサイズは3kbが上限です。** またGlobalコンテキストに非対応です。

また、enebular-edge-agentは、以下の場合を除き、フローの実行を停止しません。
- フローが停止するようにプログラミングされている場合
- フローの実行が不可能なエラーが発生した場合
