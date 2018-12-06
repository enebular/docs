---
lastUpdated: 2018-12-06
---

# Nodes

enebular-edge-agentはenebularで作成したフローを実行できます。
利用できるノードには制限があります。

### Table of Contents

- [ノードリスト](#nodeList)
- [フローの実行](#executeFlow)

## ノードリスト{#nodeList}

以下がenebular edge agentで動作するノードです。
enebular edge agentのためのノードとして、`EEA`というカテゴリーのノードがあります。

* 入力
    * inject
* 出力
    * debug
* 機能
    * http request
    * switch
    * change
    * range
* EEA
    * TSL2561
    * BME280
    * digitalout
    * analogin
    * interruptin

### EEA カテゴリーのノード

EEA カテゴリーのノードは enebular-edge-agent用に作成されたノードで、エディタ上ではダミーの値を出力します。
enebular-edge-agentにデプロイすることで、エッジデバイス固有の動作をします。詳しくは各ノードのヘルプ参照してください。

### ノードの説明

| 分類 | ノード | 概要 | 備考 |
| --- | --- | --- | --- |
| 入力 | inject | 一定周期でフローを起動する | 制限が複数あります ※1 |
| 出力 | debug | デバッグメッセージを出力する | コンソールに出力できません |
| 機能 | http request | http requestをする | 制限が複数あります ※1 |
| 機能 | change | msgプロパティの変換や削除などを行う | - |
| 機能 | switch | 条件分岐を設定する | - |
| 機能 | range | `msg.payload`の値を設定によって変換する | - |
| EEA | TSL2561 | TSL2561またはTSL2581から照度の値を取得する | - |
| EEA | BME280 | BME280から温度、湿度、気圧の値を取得する |  |
| EEA | digitalout | デジタル出力をする | - |
| EEA | analogin | A/Dコンバータからの入力値を取得する | - |
| EEA | interruptin | デジタル入力の立ち上がり、または立ち下がりを検出して割り込み入力を行う | 同時使用上限は5個です |

※1 **inject node**には以下の制限があります。
- cron実行非対応
- `Node-RED起動の n 秒後、以下を行う`に非対応
- timestampのみを出力とする

※2 **http request node**には以下の制限があります。
- 同時に使用できるhttp request nodeの最大値は5個
- `GET` ,`POST` のメソッドのみに対応
- 256byteがレスポンスの上限で、超えると `size over` が `msg.payload` に代入される
- https へのリクエスト送信に非対応
- proxy設定に非対応
- basic認証に非対応
- `msg.cookies`, `msg.headers`, `msg.rejectUnauthorized` の設定を無視する
- mustache-styleに非対応

## フローの実行{#executeFlow}

**実行できるフローのサイズは3kBが上限です。** またGlobalコンテキストに非対応です。

また、enebular-edge-agentは、以下の場合を除き、フローの実行を停止しません。
- フローが停止するようにプログラミングされている場合
- フローの実行が不可能なエラーが発生した場合
