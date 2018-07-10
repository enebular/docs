---
lastUpdated: 2018-07-09
---

# Getting Started 

このチュートリアルでは、以下のことを行います。

- プロジェクトの作成
- フローの検索とフォーク 
- グラフ(InfoType)の検索とフォーク
- InfoMotionによるデータの可視化

## Project の作成

enebular を始めるには、まず Project を作成します。ログイン後の画面にある `Create Project` からプロジェクトを作成します。

![](https://i.gyazo.com/1e90909b5ecefe56ff1934aa41e5a7b9.png)

適当な title を入力して、作成します。

![](/_asset/images/enebular-developers-createprojectmodal.png)

![](https://i.gyazo.com/69a5b817e8681349f45373eb7aead486.png)

## flow のインポート

enebular のユーザーはアセットを公開すること、また公開されているアセットをフォークすることができます。
公開されているフローをフォークする手順を説明します。
右上にある`Discover`をクリックしてください。

![](https://i.gyazo.com/f09039ce123a069bc9f64bb5d448a963.png)

右のカテゴリーから `Flow` を選択して、「getting-started」と検索バーに入力してください。 

![](https://i.gyazo.com/42a1ba777fed735c911e19a20aa79fe9.png)

検索結果に出てきたものをクリックし、下記のようなフロープレビューは表示されていることを確認してください。
右の `fork` ボタンよりフローをフォークできます。 

![](https://i.gyazo.com/478da140685e515ad49efb1eca79906a.png)

フォーク先の適当なプロジェクトに初期値のロール設定(superdev)でforkしてください。

![](https://i.gyazo.com/aaa149b249e745c3ce31a00288199459.png)

フォークしたプロジェクトのダッシュボードに新しくアセットが追加されています。

![](https://i.gyazo.com/05daf3cb4bf1ae80d9496b2050df46ca.png)

インポートしたフローを開いて、同じフローがフォークされていることを確認してください。

![](https://i.gyazo.com/33793823646d34d7cb48a086cf308da3.png)

このフローはそれぞれのデータソースの認証情報がブランクになっているので、デプロイする前にフローを編集する必要があります。

## Datasource の作成

InfoMotion は現在下記に挙げるリアルタイムデータベースに対応しています。詳しくは各ページを参照してください。

- [Milkcocoa-v2  DataSource](./DatasourceMilkcocoa-v2.md)
- [Firebase DataSource](./DatasourceFirebase.md)
- [Pubnub  DataSource](./DatasourcePubnub.md)


この GetStarted では Firebase を用いて説明を進めます。
次の項に進む前に、[Firebase](./DatasourceFirebase.md)のページを参考にして、利用登録を済ませ、データストアを作成してください。

※ GetStartedの設定はテストに向けたものなので、実際に使用する際には推奨しません。


## Flow の編集とデプロイ 
 
データストアの認証情報をフローに入力し、デプロイをします。

今回はFirebaseのノードのみに認証情報を入力します。


### databaseURL の取得


データストア作成済みのアカウントで Firebase にログインし、 `ウェブアプリに Firebase を追加`をクリックします。 
![](https://i.gyazo.com/dd183169ebc84379c477c8fb72764d86.png)

databaseURL をフローの中で使用します。

![](https://i.gyazo.com/de45518f53087053af1009f39adde653.png)

### ノードの編集

フロー編集画面から、 Firebase ノードをクリックし編集画面を開きます。さらに、Firebase の欄右にある鉛筆アイコンをクリックします。
![](https://i.gyazo.com/006b6bb363326917a6bf4106b22fc568.png)

先ほど取得した databaseURL を入力してください。 updateをクリックしてノードの編集を終了します。
AuthType は None のままとしてください。 

![](https://i.gyazo.com/a9a322d51267a8a7965c0ed952b9d9fe.png)


ノードの設定値を更新したら、画面右上の `Deploy` ボタンをクリックします。
デプロイ後、画面右の `debag` タブを開いてください。
デバッグログが毎10秒で更新されます(間隔については inject ノードで定義しています)。 

デバッグログのイメージです。 

![](https://i.gyazo.com/f1e0fdf675a74450ef8ebfc3c18c04df.png) 

InfoMotionを使うにはこのようなデータがプッシュされているデータストアを用意する必要があります。

***注 1**: enebularのエディタ上で動作するフローはアクセスが無いと自動的に30分でスリープモードになります。 

***注 2**: 30分を超えてフローエディタを立ち上げていると、デプロイ時「Unauthorized」と表示され、デプロイができません。この現象が起こった場合、ページを更新してください。


## DataSource の登録

次に、作業しているプロジェクトにデータソースを登録します。
プロジェクトのダッシュボードの左のメニューから `Data Source` を選択して、+ ボタンをクリックしてください。 

![](https://gyazo.com/d68eced9c32162389418a0eb3d27f379) 

Title に任意の名前を入力し、DataSource Type から [Firebase] を選択してください。 Firebase 用の設定画面が開きます。 Firebaseのページで「ウェブアプリに Firebase を追加」を選択した際に表示された設定スクリプトを参考にして、`Api Key`, `Auth Domain`, `Database URL`, `Project Id`,`Storage Bucket`, `Messaging Sender Id` を入力してください。
`
`Ref` にはフロー作成の際に用いた `Child path` を入力します。(Firebase ではコレクション名となっています。) `Ref` の設定値には `/(スラッシュ)` が前方に必要なので「/test」としてください。
 
データソースの設定ができたので、 InfoMotion を使用する準備ができました。

![](https://i.gyazo.com/679f69e11be2eec5a9ea1c77f979b631.png)


## InfoType のインポート

enebular のユーザーはアセットを公開すること、また公開されているアセットをフォークすることができます。
公開されている InfoType をフォークする手順を説明します。
右上にある`Discover`をクリックしてください。

右のカテゴリーから `InfoType` を選択して、「barchart」と検索バーに入力してください。 

![](https://i.gyazo.com/8e444675d12f0471c9f7cb907f8f8672.png) 

検索結果に出てきたものをクリックし、下記のようなプレビューは表示されていることを確認してください。
右の `Fork` ボタンよりフローをフォークできます。 

![](https://i.gyazo.com/30e54dc512adbfad891845aa9f647d45.png)

インポートするプロジェクトを選択して下さい。

![](https://i.gyazo.com/930bc90dcd5304a3960e3fb121c0d18a.png)

プロジェクトのダッシュボードにから、今フォークした InfoType が追加されていることを確認してください。

![](https://i.gyazo.com/acd97ef8cdf4969689897438b73f7447.png)

##  InfoMotion の作成

これまでに追加した DataSource と InfoType を使用して InfoMotionを作成します。
左メニューから InfoMotion を選択し、ページ右下の「+」ボタンをクリックして、ダイアログを開きます。

![](https://i.gyazo.com/7841284aa8720e3b47956d26ebbd5848.png)

Give the InfoMotion a title. For the InfoMotion's default access permissions, just set it to `superdev` this time. Select whatever you like for the "category" at the bottom.

適当な名前を付けて、アクセス権限はデフォルトの `superdev` を選択します。
下の欄のカテゴリーは任意のものを選択してください。

![](https://i.gyazo.com/4ec89d65f12b4ad742d35afe07b615cc.png)

作成後InfoMotionのダッシュボードを開きます。

![](/_asset/images/enebular-developers-infomotion-dashboard-before.png)

画面右側の「Add Graph」を選択してサイドバーを開いてください。ここではダッシュボードに追加されたグラフを見ることができます。
今は何も追加していない状態なので、何も表示されていません。

![](https://i.gyazo.com/7e2931dde8a443b6483764480e78cc64.png)

`New Graph` をクリックして、作成モーダルを開きます。 
デフォルトで先ほど追加した、項目がそれぞれ入力されています。
Lavel は `country` と入力してください。グラフの X軸 に対応します。
Value は `value` と入力してください。グラフの Y軸 に対応します。
任意の名前を付けて `Create Graph` のボタンを押してください。 

![](https://i.gyazo.com/2f833299dcd5aee2caf822710ef3e830.png)

付けた名前のグラフがリストに追加されていることを確認してください。

![](https://i.gyazo.com/b4af5de8b0ca9dfdf0f16cbe5fc9c3da.png) 

名前の左にある「+」ボタンをクリックするとダッシュボードにグラフが追加されます。
グラフが表示されない場合は、選択している時間範囲が適切でない可能性があります。右上の日付の項目からデータが保存されている時間に設定を変更してください。

![](https://i.gyazo.com/912da26730a1951e717d0e23a6554124.png)

グラフの右下をドラッグすることによって、グラフのリサイズが可能です。グラフ上部の「Save」をクリックしてレイアウトを保存します。

![](https://i.gyazo.com/10ff5017c847cfcc93ba566d35725fcb.png) 

## Well Done!

データフローの作成から、InfoMotion によるデータの可視化までのチュートリアルが終わりました。

このチュートリアルでは、用意されているサンプルの棒グラフを表示していますが、ユーザー独自のInfoTypeを作成し使用することもできます。詳しくは、 [InfoMotion Type Creation Tutorial](/developers/infomotion-type-tutorial)を参照してください。
