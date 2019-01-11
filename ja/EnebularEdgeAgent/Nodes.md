---
lastUpdated: 2018-12-19
---

# Nodes

enebular-edge-agentはenebularで作成したフローを実行できます。
利用できるノードには制限があります。

### Table of Contents

- [ノードリスト](#nodeList)
    - [EEA カテゴリーのノード](#EEACategory)
    - [ノードの説明](#Details)
    - [制限事項](#Restrictions)

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

### EEA カテゴリーのノード{#EEACategory}

EEA カテゴリーのノードは enebular-edge-agent用に作成されたノードで、エディタ上ではダミーの値を出力します。
enebular-edge-agentにデプロイすることで、エッジデバイス固有の動作をします。詳しくは各ノードのヘルプ参照してください。

※各ポートの設定でSIG1,SIG2の記載がありますが、接続するモジュールによって、設定値が異なります。コネクタはSIG1,SIG2,VCC,GNDとなっているので、使用するモジュールのコネクタに印字されている文字を見て設定してください。

### ノードの説明{#Details}

Flow editorでノードを使用する際に表示されるヘルプテキストも参照してください。

| 分類 | ノード | 概要 | 備考 |
| --- | --- | --- | --- |
| 入力 | inject | 一定周期でフローを起動する | 制限があります ※1 |
| 出力 | debug | デバッグメッセージを出力する | コンソールに出力できません |
| 機能 | http request | http requestをする | 制限があります ※2|
| 機能 | change | msgプロパティの変換や削除などを行う | - |
| 機能 | switch | 条件分岐を設定する | `is of type` のルールが使用できません |
| 機能 | range | `msg.payload`の値を設定によって変換する | - |
| EEA | TSL2561 | TSL2561またはTSL2581から照度の値を取得する | spectrumの設定を行えません。 |
| EEA | BME280 | BME280から温度、湿度、気圧の値を取得する | - |
| EEA | digitalout | デジタル出力をする | LEDなどのモジュールで使用します |
| EEA | analogin | A/Dコンバータからの入力値を取得する | 水分センサやボリュームバーなどで使用します |
| EEA | interruptin | デジタル入力の立ち上がり、または立ち下がりを検出して割り込み入力を行う | スイッチ系のモジュールで使用します。同時使用上限は5個です |

#### 制限事項{#Restrictions}

共通の制限として以下があります。注意してください。

- Globalコンテキストの使用ができない
- JSONata や mustache など npmモジュール に依存する記法が使用できない
- Sequence rulesの使用ができない
- type:バッファ が使用できない

※1 **inject node**には以下の制限があります。
- repeat設定のみ可能
- msg.payloadには常にtimestamp情報が代入される

※2 **http request node**には以下の制限があります。
- 同時に使用できるhttp request nodeの最大値は5個
- `GET` ,`POST` のメソッドのみに対応
- 256byteがレスポンスの上限。（超えると `size over` が `msg.payload` に代入されますが、Requestしないでください）
- `http://` で始まるアドレスのみに対応