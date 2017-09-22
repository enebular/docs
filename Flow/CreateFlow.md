# Flow の作成

Flow は、ハードウェアデバイス・API およびオンラインサービスを接続するためのツール <a href="https://nodered.jp/" target="_blank">Node-RED</a> ベースの Flow Editor を用いて、DataSource に対して InfoMotion が扱いやすいようにデータを加工する enebular の機能です（DataSource のデータを加工をする以外の用途にも使えます）。

![](/public/images/developers/enebular-developers-aboutflow.png)

## DataSourceを確認する（Milkcocoa DataSource の場合）

今回、操作したい DataSource を確認しておきます。この Flow を作成する前に、Milkcocoa の[チュートリアルページのMilkcocoaを使う準備をする](https://mlkcca.com/tutorial/page2.html)を参考に、アプリを作成して `app_id` と、Milkcocoa 管理画面内の「認証」タブから作成出来る`API Key`と`API Secret`を控えておいて下さい。

![image.png (64.8 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/89356819-eb04-4ea9-b5ae-895f87fef220.png)

DataSource 対象のデータストアを確認します。今回の場合、mbed という Milkcocoa データストアを使いましょう。

![image.png (52.0 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/361b6671-3ad9-4260-ada3-2a3b2ae04e6a.png)



## Projectを作成

Data Flowを準備してDataSourceに向けてデータを加工して入力していきます。

![image.png (43.1 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/08/11/8131/3d0963cf-8582-42d8-bcbb-ba0a0d1e5ac4.png)

![image.png (38.0 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/08/11/8131/98fb5e20-2a2e-458c-a8e5-00344c1f654e.png)

![image.png (48.6 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/08/11/8131/b84fc1a1-e59b-4d8e-808b-6d7d9412aea0.png)

## Assetsを作成

![image.png (45.9 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/08/11/8131/f5dd79f8-04ec-4f97-86c9-0551879689cf.png)

まずアセットを作成します。

![image.png (5.0 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/08/11/8131/625b3d49-07df-468e-b362-d60f3e7679d4.png)

Asset Typeはflowを指定します。

![image.png (85.9 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/08/11/8131/d767194a-12cb-492d-9d53-7b539e159928.png)

flowを指定すると、アイコンやタイトルの指定、および、アクセス権限の設定ができます。

![image.png (57.3 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/08/11/8131/4315097b-7b32-45ab-8903-d2608bf49504.png)

* アイコン
    * 今回の用途に合ったアイコンを指定
* title
    * フロータイトル
* アクセス権限
    * admin

```
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
```

![image.png (5.0 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/08/11/8131/fb313378-b1f7-4fa5-8910-585dd28d0c3a.png)

設定ができたらContinueボタンをクリックします。

![image.png (102.9 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/08/30/8131/b9f676b4-65be-4844-baf3-6349e6e1730a.png)

フローアセットが作成されました。

## Data Flowを起動

Data Flowを準備してDataSourceに向けてデータを加工して入力していきます。

![image.png (102.9 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/08/30/8131/375800f8-930c-47ad-9437-3061b32dc80a.png)

Edit Flow ボタンをクリックします。

![image.png (52.8 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/25299b3a-4d85-4be9-a450-7eecd5c4d80a.png)

Flow Editorが別ウィンドウで開きます。

## DataSourceにデータを加工する例

### 今回の仕組み

DataSourceにデータを加工する例では以下のように構成します。

### フロー

injectノード→functionノード→milkcocoaノード→debugノードの順に配置します。

![image.png (14.7 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/f0469601-769d-4b24-998b-14220e94c066.png)

### injectノードの設定

![image.png (2.7 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/859b7d2e-a87d-4686-9619-6b1e6718679d.png)

injectノードの設定は配置時そのままの設定でOKです。

### functionノードの設定

![image.png (1.6 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/096caade-8736-41ba-8a2d-92e5de51087f.png)

functionノードは以下の設定を行います。

![image.png (20.4 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/3df44b50-1729-4e2d-9c8c-386ec46d36b0.png)

このスクリプトは、Milkcocoaに対して0～1023のランダム値を送る内容です。

```
msg.payload = {
    v:Math.floor(Math.random() * 1023)
}
return msg;
```

### Milkcocoa出力ノードの設定

![image.png (10.9 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/2fd36613-6cab-4597-9fb1-230b0f5f4e83.png)

Milkcocoa DataSourceにデータを送るときはMilkcocoa出力ノードを使用します。

![image.png (27.9 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/09a93b59-17d8-4839-bc13-3f0ac18981c8.png)

パレットからMilkcocoa出力ノードを配置します。

![image.png (17.9 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/ff701433-e1a7-48c2-9209-c03e59085fdf.png)

プロパティを表示して鉛筆ボタンを押してMilkcocoaのアプリ情報を設定します。

![image.png (23.2 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/e5bdd351-5e92-4e5c-9e7a-19e8669bddfd.png)

先ほど確認したアプリ情報をそれぞれ入力します。

* App ID
    * 今回のDataSourceにおけるMilkcocoaのAPP ID
* API Key
    * 今回のDataSourceにおけるAPI Key
* API Sercret
    * 今回のDataSourceにおけるAPI Sercret

![image.png (28.3 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/a9f238ef-f924-4e21-b383-9f68ed0d9104.png)

Addを押して設定を登録します。

![image.png (16.2 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/9f8383c1-8648-466e-a6ea-97d08478b90a.png)

先ほどのMilkcocoa 出力ノードの設定に戻りDataSource名も設定します。

![image.png (17.6 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/5a3d3212-5fe3-40c6-9509-920d8f1115e3.png)


### debugノードの設定

![image.png (2.8 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/5eed59fd-8ba5-4a67-b066-cb978103c38b.png)

debugノードの設定は配置時そのままの設定でOKです。

### デプロイ

デプロイをしてウィンドウを閉じます。これでFlow Editorによる設定は終了です。

![image.png (222.2 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/08/30/8131/8435402e-3286-43c8-ba69-f5a67c7c5766.png)


Flow一覧に今回のFlowが表示されます。

### 動かしてみる

![image.png (51.5 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/f2ed4ba4-47f3-4b53-8788-2ab549ca879b.png)

![image.png (11.4 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/e1690067-47d6-4c5e-8bcd-7906214cc942.png)

```
（v1では必要な処理だったがv2では削除）

## Flowの設定を整えましょう

Flowの設定を整えましょう。今後、いろいろなフローを管理していくために大事なことです。

![image.png (35.0 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/6e8b0f71-c7fe-4902-8ad1-033b447799eb.png)

Unititled Flowという名前なのでわかりやすくします。

![image.png (114.1 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/c973780b-2d41-43c1-a6b2-4c6f8a8ca45e.png)

Flowをクリックします。

![image.png (11.4 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/b74f9ef6-a8dd-4760-a45f-d0b246f98c52.png)

![image.png (12.6 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/6353656b-7cba-4c78-b166-5206062d350b.png)

タイトルを修正します。

![image.png (8.4 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/d02e4964-ce58-4c65-8fa1-180ee4526419.png)

つづいて、Flowの関係性を示すアイコンを設定します。

![image.png (9.3 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/c0ae3be9-ccd3-4402-bb29-d46730e91c0a.png)

![image.png (11.1 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/07/24/8131/4b6cdf0b-f934-4865-8277-a1a4a7f1536d.png)


Device/Sensor→Storeに設定しました。

```

----


## 保留

![image.png (12.3 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/08/11/8131/77c8cdb4-811f-465d-bf14-188ac21d89c1.png)

左のメニューから Flows メニューをクリックします。

![image.png (46.8 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/08/11/8131/b0e489ba-4990-4551-9fc1-92d3a5359cc9.png)

Flows の画面が表示されるのでCreate Flowボタンをクリックします。

![image.png (57.8 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/08/11/8131/17a3ae67-c6a6-424e-9172-a5e317eba71c.png)

Flowを作成する上でのタイトルやコラボレーターへの権限が表示されます。

```
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
```

![image.png (32.5 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/08/11/8131/dad11b6b-f759-41fe-b740-c76443dba2a8.png)

今回はフロータイトルを記入し、権限はadminを指定します。

![image.png (36.4 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/08/11/8131/f366fb0a-2571-491e-9969-4f39262c1038.png)

continueボタンを押して設定をつづけます。