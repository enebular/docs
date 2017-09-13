# AWS IoT へのデプロイ

enebularでは作成したFlowをAWS IoTにも書き出すことができます。

## Flow作成

今回は以下のようなFlowを作成します。

![image.png (15.2 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/31/8131/16f9cb81-6602-437c-a641-6ea18740f862.png)

New Flowを押します。

![image.png (8.8 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/31/8131/9082ebe2-172c-4160-943c-e353d4645df1.png)


![image.png (28.4 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/31/8131/e75e51c7-285c-4fc8-b882-22de98002fe4.png)

フローが出来たらExport to Other Servicesを押します。

![image.png (29.2 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/31/8131/65bb3f63-6e33-42e9-bbdd-de3d65e115f2.png)

Deployment Flowが表示されることを確認します。

## AWS IoTで設定を作成する

AWS IoTで今回用の設定を作成します。

![image.png (13.9 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/31/8131/5331f6ba-11da-484d-a85d-7cacc74111af.png)

メニューから 登録＞モノ を選択します。

![image.png (24.3 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/31/8131/ef030574-e738-4234-b59b-16f17fc3d901.png)

モノの登録は好きな名前をつけます。

![image.png (78.5 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/08/28/8131/bcaf9267-657c-49bd-a72b-c291ec5d67a7.png)

モノの作成を押します。

![image.png (50.9 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/31/8131/c93e5d2b-0af8-4b93-a6fb-6697c1608db7.png)

シャドウを確認します。

![image.png (60.2 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/31/8131/2195e067-b2b6-4b8c-9b46-e497a222e004.png)

証明書を作成します。

## 証明書を作成

![image.png (85.7 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/31/8131/3fd168b9-bbd4-4f37-bbb8-391a5dbd8be2.png)

鍵ファイルを全てダウンロードして有効化します。

![image.png (9.6 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/31/8131/aaf8cd07-df26-49dd-91ca-da16b8b5edef.png)

![image.png (19.6 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/31/8131/e39e8223-3649-4dcf-a627-82136049297f.png)

ポリシーのアタッチを押します。

![image.png (46.9 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/31/8131/358ca047-0a1f-405b-9f17-0a3bf02253c9.png)

新規ポリシーの作成を押します。

## 新規ポリシーの作成

![image.png (19.5 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/31/8131/795af34a-ae70-4ece-bd55-be9bb8c9c973.png)

名前はわかりやすい名前を指定します。

![image.png (59.9 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/31/8131/408e8b14-9603-4287-ba8a-c8dd231fb605.png)

つづいて、ステートメントを追加します。

![image.png (136.9 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/08/28/8131/8a62d8a8-cf58-4211-adc4-92c3d43b0b9e.png)

ポリシー構文は以下のように指定します。

* アクション
    * iot:*
* リソース ARN
    * *

このポリシー構文は一旦試すための許可範囲が広い設定です。慣れてきたら、ポリシーも細かく調整してみてください。

![image.png (165.4 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/08/28/8131/f0ce8b2e-e6f0-4700-8b31-549920131a35.png)

作成ボタンを押してポリシーを保存します。

![image.png (28.4 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/31/8131/e86fc620-4284-4c5e-93de-28120aa66c51.png)

このままだとポリシーと証明書が結びついてないのでアタッチします。

![image.png (96.9 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/31/8131/0d1533b6-5b39-402a-85be-6efd4575669f.png)

![image.png (63.7 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/31/8131/7cd4a4ad-161b-40ac-9780-95c5b12e7a7b.png)

## フローにAWS IoTの設定を反映

先ほどのAWS IoT設定画面に戻りフローにAWS IoTの設定を反映します。

![image.png (22.5 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/31/8131/df1fb5bd-cedb-42e9-a561-22c8719e5695.png)

![image.png (21.6 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/31/8131/566ab041-1880-45a0-b24f-3614aabefd82.png)

![image.png (28.1 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/31/8131/d016aa30-14d1-4a53-bd52-cf4ac4781d0a.png)

![image.png (40.6 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/31/8131/0fcf6a3f-1f85-4303-8788-f54520fda4c4.png)

（アクセスキーを設定した画像）
![image.png (40.6 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/31/8131/0fcf6a3f-1f85-4303-8788-f54520fda4c4.png)

![image.png (14.8 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/31/8131/3a3c28d3-c96e-449a-b3e4-a42102b8433d.png)

## agentのインストール

![image.png (90.9 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/31/8131/47b0ccfc-20a3-42e4-9430-6aa2d7d88dbd.png)

<a href="https://github.com/enebular/enebular-awsiot-agent" target="_blank">GitHub</a>からダウンロードしてきます。

![image.png (39.0 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/31/8131/b3797c6a-80fe-48f2-bd40-af89e3e56d37.png)

exampleフォルダに移動します。

![image.png (23.3 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/31/8131/84d8d040-1994-4c9b-86ca-6a37a775ab4a.png)

コマンドを実行します。

![image.png (14.9 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/31/8131/997f927b-bdba-4f0e-b566-580035443d3b.png)

```
windows

set AWSIOT_CONFIG_FILE=./config.json
set NODE_RED_DIR=./node-red
node_modules\.bin\enebular-awsiot-agent
```