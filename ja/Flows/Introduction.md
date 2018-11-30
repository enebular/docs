---
lastUpdated: 2018-11-30
---

# Flows

Flow は、ハードウェアデバイス・API およびオンラインサービスを接続するためのツール <a href="https://nodered.jp/" target="_blank">Node-RED</a> ベースのフローエディタを利用して作成する、データフローのことです。

![](https://i.gyazo.com/893f5d6ee3a233e4db918fcfde4323f0.png)

なお、下の画像のように、Node-RED 上で Flow をデプロイすることができますが、こちらは Flow を保存することが目的で、**数分間でスリープする**点に注意して下さい。

![](https://i.gyazo.com/bfb9c0e25ad5e4a372a149336bdef8b8.png)

データフローを長い時間稼働させたい場合は、[他のサービスへデプロイ](../Deploy/index.md)する必要があります。

[作成した Flow](./CreateFlow.md) は enebular 上で確認できます。

![](https://i.gyazo.com/df15e18b0f61680b23773a7d8ca4ae6c.png)

Flow を選択すると、Flow の詳細画面に移動します。

![](https://i.gyazo.com/7cb9b53259022696e7cc47e4fa81d89b.png)

## Overview

Overview では Flow 情報の編集、Flow の公開ができます。Flow 情報は、Flow を公開した際に他のユーザーが見てどういう Flow か理解しやすくする手助けになりますので、出来るだけすべての情報について記載することをおすすめします。

![](https://i.gyazo.com/7cb9b53259022696e7cc47e4fa81d89b.png)

Flow の公開については [Publish Flow](./PublishFlow.md) をご覧ください。

## Deploy

Deploy では Flow を特定のサービスへデプロイできます。

![](https://i.gyazo.com/176869beb11cdec73fe02c8c09c4288f.png)

それぞれのサービスへの詳しいデプロイ方法は [Deploy](../Deploy/index.md) をご覧ください。

## Devices

Devices では外部サービスへデプロイしたデバイスの状態を一覧で見ることができます。なお、こちらは実装予定の有償機能になります。

![](https://i.gyazo.com/9f26dd5fa222389b4b90cb2eea5a1df7.png)


## Access

Access では Flow のアクセス権を編集できます。

![](https://i.gyazo.com/6b4babe394ae110c62ba181718849c0b.png)

詳しくは [Access Control](../Config/Access.md) をご覧ください。

## Settings

Settings では Flow の名前や説明の編集、Flow の削除ができます。

![](https://i.gyazo.com/9e8637beeeb0d53009f4eb71d046291a.png)