---
lastUpdated: 2018-01-24
---

# 動作環境

## enebular (Web サイト内の管理画面)

enebular が対象とする Web ブラウザは以下とします。

| Web Browser | Version | OS |
| --- | --- | --- |
| Chrome | [63.0 or later](https://chromereleases.googleblog.com/search/label/Desktop%20Update) | Windows/Mac  |
| Firefox | [57.0 or later](https://www.mozilla.jp/firefox/releases/) | Windows/Mac |
| Safari | 11.0 or later | Mac |
| Microsoft Edge | - | Windows |

enebular では上記のブラウザでの利用を推奨しています。これらのブラウザで表示が崩れる、機能が動かないなどの問題がある場合はサポートまでご報告ください。

## enebular-agent （フローの実行環境）

対象となるフローをデプロイするデバイスの実行環境は以下とします。

### 推奨ハードウェア (Recommended Hardware)

enebular-agentは、Linux上で動作します。
以下では、Linuxが動作する安価なゲートウェイ環境としての推奨ハードウェアを列挙します。

| Product | Version  |
| --- | --- | 
| Raspberry PI3 Model B | [Version 3 Model B](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/) |  |
| OpenBlocks | 対応予定 |

### 必要物

* Network Interface (ethernet or WiFi)
    * WiFiについては、IEEE802.11a/b/g等を想定していますが、LinuxからIP接続ができるネットワークが使用できれば良いものとします
* SD-Card
* RAM
* Flash Memory

## オペレーティングシステム (Operating System)

enebular-agent は、[Debian GNU/Linux](https://www.debian.org/) 上で動作します。
推奨ハードウェアである Raspberry PIで は、Debian ベースの [Raspbian OS](https://www.raspbian.org/) が動作するため、これを利用します。

### サポート対象リリース

* [Debian GNU/Linux 9 Stretch](https://www.debian.org/releases/stretch/)
* [Debian GNU/Linux 8 Jessie](https://www.debian.org/releases/jessie/)

### サポート対象リリース(Raspberry PI3)

* [Raspbian Stretch base](http://archive.raspbian.org/raspbian/dists/stretch/)
* [Raspbian Jessie base](http://archive.raspbian.org/raspbian/dists/jessie/)

## ミドルウェア (Middleware)

| Middleware | Version | 
| --- | --- |
| [Node.js](https://nodejs.org/ja/download/releases/) | 8.9.0(Carbon(LTS)) or later | 
| [npm](https://github.com/npm/npm/releases) | 5.5.0 or later | 
| [Node-RED](https://github.com/node-red/node-red/releases) | 0.17.5 or later |

