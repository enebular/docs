---
lastUpdated: 2018-12-06
---

# enebular edge agent

## Overview

enebular-edge-agentは、enebular用IoTエッジデバイスのためのエージェントソフトウェアです。

enebular-edge-agentを搭載したIoTエッジデバイスは、enebularで作成したフローをデプロイして実行することができます。※1

enebular-edge-agentのフロー実行機能を用いることで、IoTエッジデバイスの開発者は、enebular-edge-agent上に独自のアプリケーションを容易に構築できるようになります。

また、enebular-edge-agentのデバイス管理機能を利用することで、enebularからデバイスを管理することができ、ログ及びステータスの確認をすることもできます。※2

そして、ファームウェアアップデート機能を使うことにより、遠隔地でもファームウェアの更新を行うことが出来ます。これによりお使いのenebular-edge-agentは常に最新の状態に保たれます。

[Getting Started](./GettingStarted.md)から enebular-edge-agentを始めてください。このチュートリアルには、以下の手順が含まれます。

1. リファレンスボードの接続
1. ネットワークの設定
1. フローのインポート
1. フローのデプロイ
1. 実行ログの確認

デバイスのセットアップは各ボードのページを参照してください。
- [Raven](./../Board/Raven.md)


※1: enebular-edge-agentでは、実行できるノードに制限があります。[Nodes](./Nodes.md)から確認してください。

※2: デバイス管理機能を使用するには、ライセンスが登録されている必要があります。詳しくは、[LicenseManager](./../Device/LicenseManager.md)を参照してください。ログについては[Logs](./../Device/Logs.md)を参照してください。