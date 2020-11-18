# デプロイについて {#デプロイについて}

[Introduction](../INDEX.md) で述べたように、enebular では作成したアセットをデバイスにデプロイできます。

## Deploy flow {#Deploy flow}

Node-RED のフローエディタで作成したデータフローである Flow は外部サービスと連携してデバイスへデプロイできます。

下の画像のように enebular から立ち上げるフローエディタで [Deploy] という操作ができますが、こちらは Flow を保存することが目的で**数分間でスリープ**します。

![deploybutton](./../../img/Deploy/Index-deploybutton.png)

永続的に稼働させるには外部サービスを利用してデバイスへデプロイする必要があります。

[Introduction](../INDEX.md) でも触れましたが、デプロイをする際に知っておくべき概念が 2 つあります

- **デバイス**：アセットの実行環境となるデバイス本体
- **デバイスマスター**：enebular からのデプロイのリクエストを受けてデバイスにデプロイを行ったり、デバイスの監視や enebular へのログ送信を行うデバイスのマスター

![devices](./../../img/Deploy/Index-devices.png)

AWS IoT や Pelion Device Management などエッジデバイスにデプロイをするクラウドサービスの場合、エッジデバイスが**デバイス**となり、クラウドサービス自体は**デバイスマスター**となります。

Heroku や AWS Lambda などクラウド上に実行環境が存在する場合は、クラウドサービスが**デバイス**と**デバイスマスター**の両方の役割を担います。

## デプロイ可能なフローのサイズ {#デプロイ可能なフローのサイズ}

### enebular-edge-agent {#enebular-edge-agent}

最大サイズ：5kB

### enebular-agent {#enebular-agent}

最大サイズ：100kB

### cloud service {#cloud service}

| ターゲット | 最大サイズ |
| ---------- | ---------- |
| Heroku     | 100kB      |
| AWS Lambda | 100kB      |

具体的なデプロイ方法は以下になります。
※デプロイ失敗時にデプロイのリトライは行われません。

### エッジ {#エッジ}

- [Pelion Device Management](./DeployFlow/mbed/index.md)
- [AWS IoT](./DeployFlow/AWSIoT/index.md)

### クラウド {#クラウド}

- [Heroku](./DeployFlow/Heroku/index.md)
- [AWS Lambda](./DeployFlow/Lambda/index.md)

## デプロイ結果の確認 {#DeployResult}

デプロイ結果は、アセットの`Deploy`タブで確認することができます。
この画面では、デプロイ指示毎に以下の情報を確認できます。

- Target Count
- Status
- Version
- Connection Name
- Deployed By
- Requested Time
- Last Updated Time

Status が実行結果であり、以下の何れかが表示されます。

**Status の種類**

| Status     | Description                                                         |
| ---------- | ------------------------------------------------------------------- |
| Successful | 複数のデバイスに対して実行した Deploy が全て成功した場合            |
| Failed     | 複数のデバイスに対して実行した Deploy が少なくとも 1 つ失敗した場合 |
| Processing | 複数のデバイスに対して実行した Deploy が完了していない場合          |

各デプロイ指示の行をクリックすると、デバイス毎の実行結果を確認できます。
この画面ではデバイス毎に以下の情報を確認できます。

- Device Name
- Deploy Status
- Requested Time
- Status Last Updated Time

また、再度デプロイを行いたい場合、この画面に表示される`Redeploy`ボタンを押すことで実行できます。
`Redeploy`ボタンを押すとデプロイ対象を選択するためのダイアログを表示します。ここで再デプロイが必要な Target をチェックし、ダイアログの`Redeploy`ボタンを押すと再度デプロイを実施します。

## Node-REDの互換性に関する注意点 {#NoteNodeREDCompatibility}

### ノードの有効化/無効化 {#NodeEnabledDisabled}

enebular v2.25.0以降では、Node-RED v1を採用しています。これにより、Node-REDの[ノードの有効化・無効化](https://nodered.jp/docs/user-guide/editor/workspace/nodes#%E3%83%8E%E3%83%BC%E3%83%89%E3%81%AE%E6%9C%89%E5%8A%B9%E5%8C%96%E7%84%A1%E5%8A%B9%E5%8C%96)の機能が利用できるようになります。
ノードの有効化・無効化の機能が利用できるのは、以下のデプロイ先にフローをデプロイする場合です。

* enebular-agent: 2.15.0以上
* heroku deploy(enebular-agent-heroku): 1.1.2以上  
  (デプロイ先のherokuの環境変数AGENT_HEROKU_VERSIONの値で確認できます。この環境変数が存在しない場合は1.1.2未満です)
* lambda deploy(デプロイ時にNode-RED 1.0.5をデプロイするため利用可能)

上記以外のバージョンに無効化したノードをデプロイした場合、ノードは常に有効となります。
