# Flow の作成

Flow は、ハードウェアデバイス・API およびオンラインサービスを接続するためのツール <a href="https://nodered.jp/" target="_blank">Node-RED</a> ベースの Flow Editor を用いて、DataSource に対して InfoMotion が扱いやすいようにデータを加工する enebular の機能です（DataSource のデータを加工をする以外の用途にも使えます）。

![](/ja/public/images/developers/enebular-developers-aboutflow.png)

## DataSourceを確認する（Milkcocoa DataSource の場合）

今回、操作したい DataSource を確認しておきます。この Flow を作成する前に、Milkcocoa の[チュートリアルページのMilkcocoaを使う準備をする](https://mlkcca.com/tutorial/page2.html)を参考に、アプリを作成して `app_id` と、Milkcocoa 管理画面内の「認証」タブから作成出来る`API Key`と`API Secret`を控えておいて下さい。

![image](/ja/public/images/developers/Flow/CreateFlow/flow-create-flow_01.png)

DataSource 対象のデータストアを確認します。今回の場合、mbed という Milkcocoa データストアを使いましょう。

![image](/ja/public/images/developers/Flow/CreateFlow/flow-create-flow_02.png)



## Projectを作成

Data Flowを準備してDataSourceに向けてデータを加工して入力していきます。

![image](/ja/public/images/developers/Flow/CreateFlow/flow-create-flow_03.png)

![image](/ja/public/images/developers/Flow/CreateFlow/flow-create-flow_04.png)

![image](/ja/public/images/developers/Flow/CreateFlow/flow-create-flow_05.png)

## Assetsを作成

![image](/ja/public/images/developers/Flow/CreateFlow/flow-create-flow_06.png)

まずアセットを作成します。

![image](/ja/public/images/developers/Flow/CreateFlow/flow-create-flow_07.png)

Asset Typeはflowを指定します。

![image](/ja/public/images/developers/Flow/CreateFlow/flow-create-flow_08.png)

flowを指定すると、アイコンやタイトルの指定、および、アクセス権限の設定ができます。

![image](/ja/public/images/developers/Flow/CreateFlow/flow-create-flow_09.png)

* アイコン
    * 今回の用途に合ったアイコンを指定
* title
    * フロータイトル
* アクセス権限
    * admin

<div>[html]
TODO：各権限について詳細を書く。

admin
Members can view, edit, deploy, share, and add collaborators to asset
superdev
Members can view, edit, and deploy asset
developer
Members can view and edit asset
operator
Members can view and deploy asset
user
Members can view asset
[/html]</div>

![image](/ja/public/images/developers/Flow/CreateFlow/flow-create-flow_10.png)

設定ができたらContinueボタンをクリックします。

![image](/ja/public/images/developers/Flow/CreateFlow/flow-create-flow_11.png)

フローアセットが作成されました。

## Data Flowを起動

Data Flowを準備してDataSourceに向けてデータを加工して入力していきます。

![image](/ja/public/images/developers/Flow/CreateFlow/flow-create-flow_12.png)

Edit Flow ボタンをクリックします。

![image](/ja/public/images/developers/Flow/CreateFlow/flow-create-flow_13.png)

Flow Editorが別ウィンドウで開きます。

## DataSourceにデータを加工する例

### 今回の仕組み

DataSourceにデータを加工する例では以下のように構成します。

### フロー

injectノード→functionノード→milkcocoaノード→debugノードの順に配置します。

![image](/ja/public/images/developers/Flow/CreateFlow/flow-create-flow_14.png)

### injectノードの設定

![image](/ja/public/images/developers/Flow/CreateFlow/flow-create-flow_15.png)

injectノードの設定は配置時そのままの設定でOKです。

### functionノードの設定

![image](/ja/public/images/developers/Flow/CreateFlow/flow-create-flow_16.png)

functionノードは以下の設定を行います。

![image](/ja/public/images/developers/Flow/CreateFlow/flow-create-flow_17.png)

このスクリプトは、Milkcocoaに対して0～1023のランダム値を送る内容です。

<div>[html]
msg.payload = {
    v:Math.floor(Math.random() * 1023)
}
return msg;
[/html]</div>

### Milkcocoa出力ノードの設定

![image](/ja/public/images/developers/Flow/CreateFlow/flow-create-flow_18.png)

Milkcocoa DataSourceにデータを送るときはMilkcocoa出力ノードを使用します。

![image](/ja/public/images/developers/Flow/CreateFlow/flow-create-flow_19.png)

パレットからMilkcocoa出力ノードを配置します。

![image](/ja/public/images/developers/Flow/CreateFlow/flow-create-flow_20.png)

プロパティを表示して鉛筆ボタンを押してMilkcocoaのアプリ情報を設定します。

![image](/ja/public/images/developers/Flow/CreateFlow/flow-create-flow_21.png)

先ほど確認したアプリ情報をそれぞれ入力します。

* App ID
    * 今回のDataSourceにおけるMilkcocoaのAPP ID
* API Key
    * 今回のDataSourceにおけるAPI Key
* API Sercret
    * 今回のDataSourceにおけるAPI Sercret

![image](/ja/public/images/developers/Flow/CreateFlow/flow-create-flow_22.png)

Addを押して設定を登録します。

![image](/ja/public/images/developers/Flow/CreateFlow/flow-create-flow_23.png)

先ほどのMilkcocoa 出力ノードの設定に戻りDataSource名も設定します。

![image](/ja/public/images/developers/Flow/CreateFlow/flow-create-flow_24.png)


### debugノードの設定

![image](/ja/public/images/developers/Flow/CreateFlow/flow-create-flow_25.png)

debugノードの設定は配置時そのままの設定でOKです。

### デプロイ

デプロイをしてウィンドウを閉じます。これでFlow Editorによる設定は終了です。

![image](/ja/public/images/developers/Flow/CreateFlow/flow-create-flow_26.png)


Flow一覧に今回のFlowが表示されます。

### 動かしてみる

![image](/ja/public/images/developers/Flow/CreateFlow/flow-create-flow_27.png)

![image](/ja/public/images/developers/Flow/CreateFlow/flow-create-flow_28.png)