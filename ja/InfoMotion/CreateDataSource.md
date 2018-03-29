---
lastUpdated: 2018-03-29
---

# DataSource の作成

DataSource とは、InfoMotion（グラフ）に表示する際に参照するデータ先です。

InfoMotion を利用するためには DataSource の登録が必要です。

Flow である場所にデータを保存して、そのデータを DataSource と設定するのが主な使い方になります。

![](/_asset/images/InfoMotion/datasources/aboutdatasource.png) 

ダッシュボードの DataSource タブから作成・編集ができます。

![](/_asset/images/InfoMotion/datasources/datasource.png) 

DataSource には以下が利用可能です。

- `Milkcocoa-v2`
- `Milkcocoa-v3`
- `Pubnub`
- `Firebase`
- `API Gateway`.

## Milkcocoa-V2 DataSource の場合

[Milkcocoa](https://mlkcca.com/) DataSource の場合は以下のように設定します。Milkcocoa へデータを保存するフローの作成方法は [Example: Milkcocoa](../Flow/FlowExampleMilkcocoa.md) をご覧ください。

![](https://i.gyazo.com/7b0b7eebebe0828e564fdcb2863a47b9.png)

* App Id
    * Milkcocoa で DataSource を取得したい App Id
* DataStore
    * 上記の App ID にて DataSource を取得したい DataStore
* API Key
    * 上記の App Id の API Key
* Secret Key
    * 上記の App Id の API Sercret

設定ができたら Save をクリックし DataSource の設定を終わります。


## Milkcocoa-v3 DataSource の場合

[Milkcocoa-V3](https://v3.mlkcca.com/) DataSource の場合は以下のように設定します。[Milkcocoa-v3 DataSource](./DatasourceMilkcocoa-v3.md) で簡単な例を試すことができます。

![](/_asset/images/InfoMotion/datasources/milkcocoa-v3.png)

* Title 
* App Id 
* DataStore 
* API Key 
* Secret Key: API Secret (optional)

設定ができたら Save をクリックし DataSource の設定を終わります。

## Firebase DataSource の場合

[Firebase](https://firebase.google.com/) DataSource の場合は以下のように設定します。[Firebase DataSource](./DatasourceFirebase.md) で簡単な例を試すことができます。

![](/_asset/images/InfoMotion/datasources/firebase.png)

* Title
* Api Key
* Auth Domain
* Database URL
* Project Id
* Storage Bucket
* Messaging Sender Id
* Ref (include all slashes)
* Limit (default 100)

設定ができたら Save をクリックし DataSource の設定を終わります。

## Pubnub DataSource の場合

[Pubnub](http://pubnub.com/) DataSource の場合は以下のように設定します。[Pubnub  DataSource](./DatasourcePubnub.md) で簡単な例を試すことができます。

![](/_asset/images/InfoMotion/datasources/pubnub.png)
 
* Title 
* Publish Key 
* Subsribe Key 
* Channel 
* Count (default 100) 

設定ができたら Save をクリックし DataSource の設定を終わります。

### API Gateway DataSource の場合（ライブモードは使えません）

API Gateway DataSource の場合は以下のように設定します。[DataSource - API Gateway](./DatasourceAPIGateway.md) で簡単な作成方法を学ぶことができます。

![](https://i.gyazo.com/da5d21890b47ed034526fee49e247e54.png)

* Endpoint
    * API Gateway のエンドポイントを設定します
* API Key
    * API Gateway のAPI Keyを設定します

設定ができたら Save をクリックし DataSource の設定を終わります。


## DataSource の利用

登録した DataSource は InfoMotion の グラフ作成の際に選択できるようになります。

![](https://i.gyazo.com/be55d7ae149fe186fb5d57ed391b2da6.png)

DataSource の登録ができたので、次にいよいよ [InfoMotion Dashboard](./CreateInfoMotion.md) を作成します。
