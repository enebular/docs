---
lastUpdated: 2017-12-01
---

# InfoMotion Tool

InfoType を作成するには `infomotion-tool` が必要です。

`infomotion-tool` を使ってローカル環境で編集とテストができます。完成した InfoType はパッケージにして enebular にアップロードすることができます。

## infomotion-tool のインストール

```
sudo npm install infomotion-tool -g
```

## 利用可能なコマンド

```
eit create [graph name]  = Creates an InfoType with the [graph name]
eit run [graph name]     = Runs [graph name] on localhost:3000
eit package [graph name] = Creates files to upload on enebular
eit help                 = help
```

## グラフの作成

以下のコマンドから始めます。

```
eit create myfirstgraph
```

以下のファイルが作成されます。

- `datasource.json`
- `package.json`
- `plugin.css`
- `plugin.js`
- `plugin.json`

![](/_asset/images/InfoMotion/enebular-developers-about-infomotion-files.png)

### datasource.json

*このファイルはテスト用途です。*

ブラウザでテストする際に利用する DataSource の指定ができます。

`adaptor` に DataSource の種類を指定します。具体的には以下があります。

- `milkcocoa`
- `pubnnub`
- `apigateway`
- `random`
- `mock`


具体的には以下のように指定します。

#### Milkcocoa adaptor

[Milkcocoa](https://mlkcca.com) のデータを使います。いくつかの値を自分のアプリのもので置き換えてください。

```json
{
  "adaptor": "milkcocoa",
  "apikey": "YOUR_API_KEY",
  "apisecret": "YOUR_API_SECRET",
  "appId": "YOUR_APP_ID",
  "dataStore": "YOUR_DATASTORE",
  "id": "milkcocoa",
  "title": "milkcocoa",
  "name": "milkcocoa"
}
* API Key, API Secret がない場合は空にします。
```

#### Pubnub adaptor

[Pubnub](https://pubnub.com) のデータを使います。いくつかの値を自分のアプリのもので置き換えてください。

```json
{
  "adaptor": "pubnub",
  "pubnub": {
    "publishKey": "YOUR_PUBLISH_KEY",
    "subscribeKey": "YOUR_SUBSCRIBE_KEY",
    "ssl": true,
  },
  "chanel" : "YOUR_CHANNEL",
  "count" : 100
  "appId": "pubnub",
  "id": "pubnub",
  "title": "pubnub",
  "name": "pubnub"
}
```

### API Gateway Adaptor

[AWS API Gateway](https://aws.amazon.com/) をエンドポイントとしてデータを取得します。いくつかの値を自分のアプリのもので置き換えてください。

```json
{
  "apiKey": "YOUR_API_KEY",
  "endpoint": "YOUR_ENDPOINT",
  "id": "apigateway",
  "projectId": "YOUR_PROJECT_ID",
  "title": "apigateway",
  "adaptor": "apigateway"
}
```

#### Random adaptor

ランダムに生成されるデータを使います。

```json
{
  "adaptor": "random",
  "id": "random",
  "title": "random",
  "name": "random"
}
```

データは以下のようなスキームになります。

```javascript
{
  country: String,
  value: Number
}
```

#### Mock Adaptor

素早くテストするために、自分で書いたデータを使うことができます。データ数が少ない場合、同じデータが繰り返して補完されます。


```json
{
  "adaptor": "mock",
  "id": "mock",
  "title": "mock",
  "name": "mock"
  "data": [{"id": "a", "value": 1}, {"id": "b", "value": 21}, {"id": "c", "value": 512}]
}
```

### package.json

npm のプロジェクトで利用するものです。詳しくは [NPM 公式サイトのドキュメント](https://docs.npmjs.com/files/package.json)をご覧ください。

### plugin.css

グラフで利用する CSS です。グローバルに指定されるので、衝突しないように命名に注意してください。

### plugin.js

グラフの主なロジックが入った、メインとなるファイルです。

デフォルトで D3.js がグローバルにインストールされています。詳しくは [API Reference](./APIReference.md) をご覧ください。

### plugin.json

グラフを enebular にアップロードした際のプレビューのために必要なファイルです。

`sampleSettings` はデフォルトのスキーマ設定、`sampleData` はサンプルデータです。

```json
{
  "defaultSettings": {
    "label" : "country",
    "value": "v"
  },
  "sampleData": [
    {
      "country": "JP",
      "v": 1
    },
    {
      "country": "CN",
      "v": 2
    }
  ]
}
```

## テンプレート

デフォルトで作成されるグラフはデータをそのまま表示する `DataLogger` です。

以下に、利用可能なテンプレートを示します。

```
eit create myfirstgraph -t barchart
eit create myfirstgraph -t linechart
eit create myfirstgraph -t piechart
eit create myfirstgraph -t map
```

## ブラウザでのテスト

以下のコマンドで http://localhost:3000 にアクセスすることで、テストできます。

```
cd myfirstgraph
eit run
```

## パッケージング

編集が終わったら、以下でパッケージできます。

```bash
eit package
```

以下の3つが入った `target` というフォルダが作成されます。

- `plugin.js`
- `plugin.css`
- `plugin.json`

![](/_asset/images/InfoMotion/enebular-developers-build.png)

次に、[Upload InfoType](./UploadInfoType.md) で enebular へのグラフのアップロード方法を学びましょう。
