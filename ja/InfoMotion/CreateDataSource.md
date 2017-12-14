---
lastUpdated: 2017-12-14
---

# DataSource の作成

DataSource とは、InfoMotion（グラフ）に表示する際に参照するデータ先です。

InfoMotion を利用するためには DataSource の登録が必要です。

Flow である場所にデータを保存して、そのデータを DataSource と設定するのが主な使い方になります。

![](/_asset/images/enebular-developers-aboutdatasource.png)

ダッシュボードの DataSource タブから作成・編集ができます。

![](/_asset/images/enebular-developers-datasource.png)

## Milkcocoa DataSource の場合

[Milkcocoa](https://mlkcca.com/) DataSource の場合は以下のように設定します。

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

![](https://i.gyazo.com/1fe28e143e56eaa179ba463d5469b1b9.png)

### API Gateway DataSource の場合

API Gateway DataSource の場合は以下のように設定します。

![](https://i.gyazo.com/da5d21890b47ed034526fee49e247e54.png)

* Endpoint
    * API Gateway のエンドポイントを設定します
* API Key
    * API Gateway のAPI Keyを設定します

設定ができたら Save をクリックし DataSource の設定を終わります。

![](https://i.gyazo.com/bc19b7fbd7338fc99961b36b0b8d1835.png)

## DataSource の利用

登録した DataSource は InfoMotion の グラフ作成の際に選択できるようになります。

![](https://i.gyazo.com/be55d7ae149fe186fb5d57ed391b2da6.png)


## Pubnub

coming soon.

DataSource の登録ができたので、次にいよいよ [InfoMotion Dashboard](./CreateInfoMotion.md) を作成します。