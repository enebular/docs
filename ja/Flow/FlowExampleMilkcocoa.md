---
lastUpdated: 2018-04-28
---

# Milkcocoa のフロー

Milkcocoa にデータを保存するフローを作成します。Milkcocoa DataSource として利用できます。

## DataSource を確認

今回、操作したい DataSource を確認しておきます。この Flow を作成する前に、Milkcocoa の[チュートリアルページの Milkcocoa を使う準備をする](https://mlkcca.com/tutorial/page2.html)を参考に、アプリを作成して `app_id` と、Milkcocoa 管理画面内の「認証」タブから作成出来る`API Key`と`API Secret`を控えておいて下さい。

![image](/_asset/images/Flow/CreateFlow/flow-create-flow_01.png)

DataSource 対象のデータストアは今回の場合、`mbed` という Milkcocoa データストアを使います。

## Data Flow を起動

Data Flow を準備してDataSourceに向けてデータを加工して入力していきます。

![image](/_asset/images/Flow/CreateFlow/flow-create-flow_12.png)

Edit Flow ボタンをクリックします。

![image](/_asset/images/Flow/CreateFlow/flow-create-flow_13.png)

Flow Editor が別ウィンドウで開きます。

## DataSource にデータを加工する例

### 今回の仕組み

DataSourceにデータを加工する例では以下のように構成します。

### フロー

injectノード→functionノード→milkcocoaノード→debugノードの順に配置します。

![image](/_asset/images/Flow/CreateFlow/flow-create-flow_14.png)

### injectノードの設定

![image](/_asset/images/Flow/CreateFlow/flow-create-flow_15.png)

injectノードの設定は配置時そのままの設定でOKです。

### functionノードの設定

![image](/_asset/images/Flow/CreateFlow/flow-create-flow_16.png)

functionノードは以下の設定を行います。

![image](/_asset/images/InfoMotion/datasources/milkcocoa-v2/function-node.png)

このスクリプトは、Milkcocoaに対して0～10のランダム、国と作成日時を送る内容です。

```javascript
var data = {
    country:['JP','USA','CN'][Math.floor(Math.random()*3)],
    value: Math.floor(Math.random()*10),
    created:Date.now()
}

msg.payload = data; 
return msg;
```

### Milkcocoa出力ノードの設定

![image](/_asset/images/Flow/CreateFlow/flow-create-flow_18.png)

Milkcocoa DataSourceにデータを送るときはMilkcocoa出力ノードを使用します。

![image](/_asset/images/Flow/CreateFlow/flow-create-flow_19.png)

パレットからMilkcocoa出力ノードを配置します。

![image](/_asset/images/Flow/CreateFlow/flow-create-flow_20.png)

プロパティを表示して鉛筆ボタンを押してMilkcocoaのアプリ情報を設定します。

![image](/_asset/images/Flow/CreateFlow/flow-create-flow_21.png)

先ほど確認したアプリ情報をそれぞれ入力します。

* App ID
    * 今回のDataSourceにおけるMilkcocoaのAPP ID
* API Key
    * 今回のDataSourceにおけるAPI Key
* API Secret
    * 今回のDataSourceにおけるAPI Secret

![image](/_asset/images/Flow/CreateFlow/flow-create-flow_22.png)

Addを押して設定を登録します。

![image](/_asset/images/Flow/CreateFlow/flow-create-flow_23.png)

先ほどのMilkcocoa 出力ノードの設定に戻りDataSource名も設定します。

![image](/_asset/images/InfoMotion/datasources/milkcocoa-v2/milkcocoa-node-settings.png)

### debugノードの設定

![image](/_asset/images/Flow/CreateFlow/flow-create-flow_25.png)

debugノードの設定は配置時そのままの設定でOKです。

### デプロイ

デプロイをしてウィンドウを閉じます。これでFlow Editorによる設定は終了です。

![image](/_asset/images/Flow/CreateFlow/flow-create-flow_26.png)

Flow一覧に今回のFlowが表示されます。

### 動かしてみる

![image](/_asset/images/Flow/CreateFlow/flow-create-flow_27.png)

inject ノードの左のトリガーをクリックすると、データが保存されます。Milkcocoa の管理画面で保存されたデータを確認できます。

![image](/_asset/images/Flow/CreateFlow/flow-create-flow_28.png)

