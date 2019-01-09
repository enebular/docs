---
lastUpdated: 2019-01-04
---

# デプロイについて {#デプロイについて}

[Introduction](../INDEX.md) で述べたように、enebular では作成したアセットをデバイスにデプロイできます。

## Deploy flow {#Deploy flow}

Node-RED のフローエディタで作成したデータフローである Flow は外部サービスと連携してデバイスへデプロイできます。

下の画像のように enebular から立ち上げるフローエディタで [Deploy] という操作ができますが、こちらは Flow を保存することが目的で**数分間でスリープ**します。

![](https://i.gyazo.com/bfb9c0e25ad5e4a372a149336bdef8b8.png)

永続的に稼働させるには外部サービスを利用してデバイスへデプロイする必要があります。

[Introduction](../INDEX.md) でも触れましたが、デプロイをする際に知っておくべき概念が2つあります

- **デバイス**：アセットの実行環境となるデバイス本体
- **デバイスマスター**：enebular からのデプロイのリクエストを受けてデバイスにデプロイを行ったり、デバイスの監視や enebular へのログ送信を行うデバイスのマスター

![deploy diagram](../_asset/images/Introduction/enebular-developers-deploy.png)

AWS IoT や Pelion Device Management などエッジデバイスにデプロイをするクラウドサービスの場合、エッジデバイスが**デバイス**となり、クラウドサービス自体は**デバイスマスター**となります。

Heroku や AWS Lambda などクラウド上に実行環境が存在する場合は、クラウドサービスが**デバイス**と**デバイスマスター**の両方の役割を担います。

## デプロイ可能なフローのサイズ {#デプロイ可能なフローのサイズ}

### enebular-edge-agent {#enebular-edge-agent}

最大サイズ：3kB

### enebular-agent {#enebular-agent}

最大サイズ：100kB

### cloud service {#cloud service}

| ターゲット | 最大サイズ |
| --- | --- |
| Heroku | 100kB |
| AWS Lambda | 100kB |

具体的なデプロイ方法は以下になります。

### エッジ {#エッジ}

* [Pelion Device Management](./DeployFlow/mbed/index.md)
* [AWS IoT](./DeployFlow/AWSIoT/index.md)

### クラウド {#クラウド}

* [Heroku](./DeployFlow/Heroku/index.md)
* [AWS Lambda](./DeployFlow/Lambda/index.md)