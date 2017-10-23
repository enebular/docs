# Create First InfoMotion

[先ほどの章]() でDataSourceが出来たらInfoMotionを作りましょう。

InfoMotionとはDataSourceで取り出したデータをグラフで分かりやすく見えるようにする機能です。

![image](/public/images/developers/InfoMotion/CreateFirstInfoMotion/infomotion-create-first-infomotion_01.png)

はじめにDataSourceのデータを確認しておきます。今回はmbedから取得したセンサーデータがValue列にvとして入っているデータ群を使います。

## Infomotion作成ページへ

![image](/public/images/developers/InfoMotion/CreateFirstInfoMotion/infomotion-create-first-infomotion_02.png)

ナビゲーションからInfomotionの一覧ページに移動します。

![image](/public/images/developers/InfoMotion/CreateFirstInfoMotion/infomotion-create-first-infomotion_03.png)

一覧ページからCREATE Infomotionボタンを押してInfomotionを作成開始します。

![image](/public/images/developers/InfoMotion/CreateFirstInfoMotion/infomotion-create-first-infomotion_04.png)

アイコンから内容が想像しやすいものを選びます。

![image](/public/images/developers/InfoMotion/CreateFirstInfoMotion/infomotion-create-first-infomotion_05.png)

タイトルと詳細を決めます。

![image](/public/images/developers/InfoMotion/CreateFirstInfoMotion/infomotion-create-first-infomotion_06.png)

今回のinfomotionの権限を指定します。Continueボタンを押します。

![image](/public/images/developers/InfoMotion/CreateFirstInfoMotion/infomotion-create-first-infomotion_07.png)

こちらでInfomotionの作成は完了です。

### Infomotionの設定

![image](/public/images/developers/InfoMotion/CreateFirstInfoMotion/infomotion-create-first-infomotion_08.png)

Infomotionの作成ができると、すぐに詳細設定ウィンドウが表示されます。

![image](/public/images/developers/InfoMotion/CreateFirstInfoMotion/infomotion-create-first-infomotion_09.png)

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

![image](/public/images/developers/InfoMotion/CreateFirstInfoMotion/infomotion-create-first-infomotion_10.png)

今回設定した内容でグラフが作成されデータが可視化されます。

## 各InfoMotion Typeの説明

![image](/public/images/developers/InfoMotion/CreateFirstInfoMotion/infomotion-create-first-infomotion_11.png)

### barchart

![image](/public/images/developers/InfoMotion/CreateFirstInfoMotion/infomotion-create-first-infomotion_12.png)

### linechart

![image](/public/images/developers/InfoMotion/CreateFirstInfoMotion/infomotion-create-first-infomotion_13.png)

### piechart

![image](/public/images/developers/InfoMotion/CreateFirstInfoMotion/infomotion-create-first-infomotion_14.png)

### valuerangepiechart

![image](/public/images/developers/InfoMotion/CreateFirstInfoMotion/infomotion-create-first-infomotion_15.png)

### simple-text-example

![image](/public/images/developers/InfoMotion/CreateFirstInfoMotion/infomotion-create-first-infomotion_16.png)

### combinationchart

![image](/public/images/developers/InfoMotion/CreateFirstInfoMotion/infomotion-create-first-infomotion_17.png)

### metricsgraphics

![image](/public/images/developers/InfoMotion/CreateFirstInfoMotion/infomotion-create-first-infomotion_18.png)
