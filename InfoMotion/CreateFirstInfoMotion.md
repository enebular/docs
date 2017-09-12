# Create First InfoMotion

[先ほどの章]() でDataSourceが出来たらInfoMotionを作りましょう。

InfoMotionとはDataSourceで取り出したデータをグラフで分かりやすく見えるようにする機能です。

![image.png (66.1 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/b81d346c-70d9-4fb2-8bc0-b0457ad7871a.png)

はじめにDataSourceのデータを確認しておきます。今回はmbedから取得したセンサーデータがValue列にvとして入っているデータ群を使います。

## Infomotion作成ページへ

![image.png (16.0 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/08/11/8131/6c7ef6f0-3494-47a0-b064-c6738f2d374e.png)

ナビゲーションからInfomotionの一覧ページに移動します。

![image.png (52.0 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/08/11/8131/ef98d578-e2a3-46e5-80c8-043503418ffc.png)

一覧ページからCREATE Infomotionボタンを押してInfomotionを作成開始します。

![image.png (302.9 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/08/30/8131/0f99fcfa-df73-4dec-a45c-29b3b349eafc.png)

アイコンから内容が想像しやすいものを選びます。

![image.png (68.4 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/08/30/8131/d7cf5be6-860a-49ee-ab8c-27489bd8d1e6.png)

タイトルと詳細を決めます。

![image.png (134.1 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/08/30/8131/15aef0cf-54ba-450b-8f7d-c0c6463533f1.png)

今回のinfomotionの権限を指定します。Continueボタンを押します。

![image.png (146.5 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/08/30/8131/291c598e-191f-4939-be68-5fbf9eca6c9f.png)

こちらでInfomotionの作成は完了です。

### Infomotionの設定

![image.png (146.5 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/08/30/8131/9c90c545-f9da-4d2a-a612-7cdb3acfefd4.png)

Infomotionの作成ができると、すぐに詳細設定ウィンドウが表示されます。

![image.png (26.6 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/b217e257-1d3e-40b5-b9a6-1729e0c18375.png)

CREATE GRAPHボタンを押すと画面中央に設定ウィンドウが表示されるので以下のように設定します。

* NAME
    * 任意の分かりやすいタイトル
* TYPE
    * barchart
* DATASOURSE
    * 取得したいDataSource 今回は milkcocoa mbed
* label 横軸に対応する値の対象
    * created
* value グラフ表示したい値の対象
    * v

OKボタンを押して設定を保存します。

![image.png (175.1 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/08/30/8131/c6ffcddb-9d9b-411a-bd0a-82d191515651.png)

今回設定した内容でグラフが作成されデータが可視化されます。

## 各InfoMotion Typeの説明

![image.png (28.5 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/e5cd2dea-ec43-4c39-a02b-6a0da0ca9ff7.png)

### barchart

![image.png (24.9 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/21b23c39-32ed-4f61-99d0-e2c619e63c9e.png)

### linechart

![image.png (26.5 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/83a49b07-bc85-43b7-9f96-378d6724b92a.png)

### piechart

![image.png (24.2 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/c35376c6-9e8e-4b39-a48d-1675f9fbeb83.png)

### valuerangepiechart

![image.png (24.3 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/dedf1893-2d09-483b-80a9-75edbb58601a.png)

### simple-text-example

![image.png (19.7 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/03615ec5-c815-446b-9234-c1e22dbe85a2.png)

### combinationchart

![image.png (30.3 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/e3dad79f-2fa1-4e65-874b-7f635448d6c8.png)

### metricsgraphics

![image.png (36.5 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/849de2ea-c727-45f6-8522-3557002e38da.png)
