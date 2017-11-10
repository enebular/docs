# InfoType の作成

InfoMotion で可視化するためには、グラフの形を決める InfoType とそのグラフに使うデータである DataSource が必要です。

![](/public/images/developers/enebular-developers-aboutinfotype.png)

enebular では自身で作成したグラフタイプ（InfoType）をアップロードして利用することが出来ます。

このページでは、作成からアップロードまでの手順を説明します。

## InfoType の作成

### `infomotion-tool` のインストール

InfoType を作成するには、お使いのパソコンに `infomotion-tool` をインストールする必要があります。以下でグローバルインストールを行います。

```bash
$ sudo npm install infomotion-tool -g
```

これで、お使いのパソコンで `infomotion-tool` コマンドが使えるようになります。[`infomotion-tool` の詳細についてはこちらを参照下さい](/developers/infomotion-type-tool)。

```bash
eit create [graph name]  = InfoTypeプロジェクトの作成（複数ファイルを含んだフォルダが作成されます）
eit run [graph name]     = サーバーを起動して、ブラウザで挙動を確認出来るようになる
eit package [graph name] = enebularにアップロード出来るかたちにパッケージ化
eit help                 = help
```

### グラフ作成

以下のコマンドで `myfirstgraph` というフォルダができます。

```bash
$ eit create myfirstgraph
```

![](https://i.gyazo.com/c49913d11e9a12bf6578419a3166b399.png)

主に `plugin.js` を編集することで、オリジナルのグラフ（InfoType）を作成します。

### 実行（ブラウザでの挙動のテスト）

`eit run` で、ブラウザで挙動をテストできます。

```bash
$ cd myfirstgraph
$ eit run
$ open http://localhost:3000
```

![tutorial1](/public/images/developers/gif/type1.gif)

具体的にどういうふうに`plugin.js`を編集するかについては、[API Reference](/developers/infomotion-type-api)をご覧下さい。

なお、標準でD3（グローバル変数の`d3`）を利用できます。

InfoTypeをビルド（パッケージ化）
---------------------------

`package`すると、enebularにアップロード出来るかたちにパッケージ化できます。

```
# プラグインの一番上の階層のディレクトリにいる状態で
eit package
```

実行すると、`build/target/plugin.js`と`build/target/plugin.css`が生成されます。これを、enebular上にアップロードすることで利用可能になります。

InfoTypeのアップロード
----------------------

InfoTypeのアップロードはenebularの管理画面で行います。

Side Menuの「InfoMotion」、タブの「InfoType」を選択します。

アップロード画面が出てきます。

![](/public/images/developers/enebular-developers-infomotiontype-tutorial-upload.png)

`eit package`コマンドで生成した`build/target`フォルダ内の`plugin.js`と`plugin.css`（フォルダごとではなく中身）をドロップし、名前をつけ「アップロードする」ボタンをクリックするとアップロード完了です。

![](/public/images/developers/enebular-developers-infomotiontype-tutorial-upload-dropped.png)

アップロードができたら、「Uploaded InfoType」のリストに追加されます。

![](/public/images/developers/enebular-developers-infomotiontype-tutorial-upload-uploaded.png)

チュートリアル
-------

アップロードしたInfoTypeを実際に利用するチュートリアルです。

### サンプルのInfoTypeのダウンロード・ビルド

本来はご自分でInfoTypeを作成しますが、今回はあらかじめ用意した以下のInfoTypeを利用します。

* [サンプルのInfoTypeのソースコード](https://github.com/moriuchi/visualization-type)

こちらを手元にクローン（ダウンロード）します。今回は`grouped-bar-chart`を利用するので、`grouped-bar-chart`へ移動します。

```
$ cd visualization-type/grouped-bar-chart
```

移動したら`package`コマンドでビルドします。

```
eit package
```

プロジェクトディレクトリに`build`フォルダが生成されます。

![](/public/images/developers/enebular-developers-infomotiontype-tutorial-build.png)

### InfoTypeのアップロード

enebularのお好きなProjectに移動し、Side Menuの「InfoMotion」、タブの「InfoType」を選択します。

![](/public/images/developers/enebular-developers-infomotiontype-tutorial-upload.png)

アップロード画面が出てくるので、生成した`build/target`フォルダ内の`plugin.js`と`plugin.css`（フォルダごとではなく中身）をドロップし、名前をつけ、「アップロードする」ボタンをクリックします。

![](/public/images/developers/enebular-developers-infomotiontype-tutorial-upload-dropped.png)

アップロードができたら、「Uploaded InfoType」のリストに追加されます。

![](/public/images/developers/enebular-developers-infomotiontype-tutorial-upload-uploaded.png)

### InfoTypeを利用する

実際に、InfoTypeを利用するには、まずFlowを作成してMilkcocoaにデータを貯める必要があります。

このFlowを作成する前に、Milkcocoaの[チュートリアルページのMilkcocoaを使う準備をする](https://mlkcca.com/tutorial/page2.html)を参考に、アプリを作成して`app_id`と、Milkcocoa管理画面内の「認証」タブから作成出来る`API Key`と`API Secret`を控えておいて下さい。

### データフローの編集

「New Flow」ボタンから、フローの編集画面(Node-RED)を開いて、以下のようなフローを作成します。

![](/public/images/developers/enebular-developers-nodered.png)

#### Milkcocoaノードの設定

Milkcocoaでアプリを作成したら、Milkcocoaノードを以下のように設定します。

* **App ID**: Milkcocoaで作成したアプリの`app_id`
* **API Key**: Milkcocoaで作成したアプリの管理画面内の「認証」で作成した`API Key`
* **API Secret**: Milkcocoaで作成したアプリの管理画面内の「認証」で作成した`API Secret`
* **Data Store**: `type-tutorial`
* **Operation**: `Push`

#### functionノードの設定

functionノード（図中`convert`ノード）は、以下のように、`dataid`というkeyを作成し、2つの値（`v`,`v2`）を作成します。

```
var newMes = {};

newMes.payload = {};
newMes.payload.dataid = Math.floor(Math.random()*7 + 1);
newMes.payload.v = Math.floor(Math.random()*50 + 1);
newMes.payload.v2 = Math.floor(Math.random()*50 + 1);

return newMes;
```

#### timestampノードの設定

timestampノードは、`interval`にして、`every 10 seconds`にしておきます。

作成したら、右上の「Deploy」を押すとデプロイできます。

### Datasourceを追加

可視化するデータである「Datasource」の追加をします。「New Data Source」ボタンから作成し、作成されたDatasourceをクリックして詳細画面へ移動します。

![](/public/images/developers/enebular-developers-createdatasource-type.png)

「Select Datasource Type」で「milkcocoa」を選択し、必要な情報を入力します。データフローで指定した`app_id`、`datastore`、`API Key`、`API Secret`を入力します。「SAVE」ボタンをクリックして保存します。

![](/public/images/developers/enebular-developers-datasource-type.png)

### InfoMotionを作成する

Datasourceの登録が終わったら、InfoMotionを作成しましょう。「CREATE GRAPH...」ボタンから作成します。

![](/public/images/developers/enebular-developers-createinfomotion.png)

作成したInfoType（`grouped-bar-chart`）を使用します。

下図のように設定します。

![](/public/images/developers/enebular-developers-infomotionsettings-type.png)

`DATASOURCE`には、さきほど登録したDatasourceを設定します。さらに、棒グラフには`label`（x軸）と`values`（y軸）となるkeyを設定します。今回はデータのIDを`dataid`、値を`v`,`v2`としたので、それぞれを`label`、`values`に設定します。

作成されたグラフをクリックすると、グラフへ移動します。

![](/public/images/developers/enebular-developers-infomotiongraph-type.png)