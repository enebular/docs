---
lastUpdated: 2017-01-28
---

# Introduction

enebular（エネブラー）は、IoT製品・サービスづくりを包括的に支援する、開発・運用サービスです。

![](https://i.gyazo.com/64b4e448bcbf896a9d53d8587e554554.png)

enebular で扱うものには大まかに以下の3つがあります。

- **アセット**: プロジェクトが持つ資産のことです。ロジック／データフローやデータの可視化やコントロールを行うダッシュボードのほかに機械学習モデルなどが含まれます。
- **デバイス**: アセットをデプロイするデバイスのことです。デバイスにはエッジ（マイコンなど）とクラウド（サーバレス環境やVMなど）の両方が含まれます。
- **その他設定**: 運用や開発に必要な設定（可視化を行うデータのデータソースやアクセス権限）などを指します。

![enebular overview](./_asset/images/Introduction/enebular-developers-project-overview.png)

enebular の主な利用方法は、**enebular.com でアセットを開発して、開発が終わったものをそれぞれデバイスへデプロイして運用する**、というふうになるかと思います。

## アセット

現在利用できるアセットは以下になります（その他にも、機械学習モデルなど対応予定のアセットがあります）。

- [Flow](Flows/Introduction.md): Node-RED で作成するデータフローのことです
- [InfoMotion](InfoMotion/Introduction.md): グラフの可視化やデバイスへのコントロールを行うダッシュボードのことです
- [InfoType](InfoMotion/InfoTypeIntroduction.md): InfoMotion で利用するグラフやコントローラーの型です。

それぞれの詳細な情報は以下になります。

|  | 概要 | 実体 | デプロイ場所（運用する場所） |
| --- | --- | --- | --- |
| **Flow** | Node-RED のフロー | JSON とクレデンシャル情報 | Node-RED が動作する実行環境 |
| **InfoMotion** | ダッシュボード | 利用するデータソース情報・利用する InfoType 情報・パネルの配置情報 | Web サイト（iframe貼り付け） |
| **InfoType** | プラグインファイル |  JavaScript, CSS | InfoMotion で利用（InfoType 単体では利用しない） |

## デバイス

外部のサービスと連携することで、開発したアセットをデバイスにデプロイできます。現在以下のようなサービスが利用可能です。

- [mbed Cloud](https://cloud.mbed.com/)
- [AWS IoT](https://aws.amazon.com/jp/iot/)
- [AWS Lambda](https://aws.amazon.com/jp/lambda/)
- [Heroku](https://www.heroku.com/home)

これらのサービスを利用してデバイスにアセットをデプロイすることになりますが、デプロイをする際に知っておくべき概念が2つあります。

- **デバイス**：アセットの実行環境となるデバイス本体
- **デバイスマスター**：enebular からのデプロイのリクエストを受けてデバイスにデプロイを行ったり、デバイスの監視や enebular へのログ送信を行うデバイスのマスター

具体的なサービスを例に挙げてみましょう。

![deploy diagram](./_asset/images/Introduction/enebular-developers-deploy.png)

AWS IoT や mbed Cloud などエッジデバイスにデプロイをするクラウドサービスの場合、エッジデバイスが**デバイス**となり、クラウドサービス自体は**デバイスマスター**となります。

Heroku や AWS Lambda などクラウド上に実行環境が存在する場合は、クラウドサービスが**デバイス**と**デバイスマスター**の両方の役割を担います。

センサーなど物理的な情報を必要とするアセットのデプロイは AWS IoT や mbed Cloud を、その他の管理などが目的のアセットのデプロイは Heroku や AWS Lambda といったふうに使い分けることができます。