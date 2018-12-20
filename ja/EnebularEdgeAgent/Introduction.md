---
lastUpdated: 2018-12-19
---

# enebular-edge-agent

## Overview

enebular-edge-agentは、enebularで使うIoTエッジデバイスのためのエージェントソフトウェアです。

大きく3つの特徴があります。

* enebularで作成したフローアセットを実行できる ※1
* enebularでログ、ステータスを確認できる ※2
* ファームウェアアップデート機能により、常に最新のenebular-edge-agentを使用できる

[Getting Started](./GettingStarted.md)から enebular-edge-agentを始めてください。このチュートリアルには、以下の手順が含まれます。

1. ネットワークの設定
1. フローのインポート
1. フローのデプロイ
1. 実行ログの確認

デバイスのセットアップは各ボードのページを参照してください。
- [Raven](./../Board/RAVEN.md)

※1: enebular-edge-agentで実行できるノードには制限があります。[Nodes](./Nodes.md)から確認してください。

※2: ログ、ステータスを確認するには、ライセンスが登録されている必要があります。詳しくは、[LicenseManager](./../Device/LicenseManager.md)を参照してください。ログについては[Logs](./../Device/Logs.md)を参照してください。