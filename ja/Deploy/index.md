---
lastUpdated: 2018-03-28
---

# デプロイについて

[Introduction](../INDEX.md) で述べたように、enebular では作成したアセットをデバイスにデプロイできます。

## Deploy flow

Node-RED のフローエディタで作成したデータフローである Flow は外部サービスと連携してデバイスへデプロイできます。

下の画像のように enebular から立ち上げるフローエディタで [Deploy] という操作ができますが、こちらは Flow を保存することが目的で**数分間でスリープ**します。

![](https://i.gyazo.com/bfb9c0e25ad5e4a372a149336bdef8b8.png)

永続的に稼働させるには外部サービスを利用してデバイスへデプロイする必要があります。

[Introduction](../INDEX.md) でも触れましたが、デプロイをする際に知っておくべき概念が2つあります

- **デバイス**：アセットの実行環境となるデバイス本体
- **デバイスマスター**：enebular からのデプロイのリクエストを受けてデバイスにデプロイを行ったり、デバイスの監視や enebular へのログ送信を行うデバイスのマスター

![deploy diagram](/_asset/images/Introduction/enebular-developers-deploy.png)

AWS IoT や mbed Cloud などエッジデバイスにデプロイをするクラウドサービスの場合、エッジデバイスが**デバイス**となり、クラウドサービス自体は**デバイスマスター**となります。

Heroku や AWS Lambda などクラウド上に実行環境が存在する場合は、クラウドサービスが**デバイス**と**デバイスマスター**の両方の役割を担います。

具体的なデプロイ方法は以下になります。

### エッジ

* [mbed Cloud](./DeployFlow/mbed/index.md)
* [AWS IoT](./DeployFlow/AWSIoT/index.md)

### クラウド

* [Heroku](./DeployFlow/Heroku/index.md)
* [AWS Lambda](./DeployFlow/Lambda/index.md)