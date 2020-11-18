# 動作環境 {#OperatingEnvironments}

## enebular {#enebular}

enebular が対象とする Web ブラウザは以下とします。

| Web Browser    | Version                                                                              | OS          |
| -------------- | ------------------------------------------------------------------------------------ | ----------- |
| Chrome         | [63.0 or later](https://chromereleases.googleblog.com/search/label/Desktop%20Update) | Windows/Mac |
| Firefox        | [57.0 or later](https://www.mozilla.org/en-US/firefox/releases/)                            | Windows/Mac |
| Safari         | 対応予定                                                                                 | Mac         |
| Microsoft Edge | 対応予定                                                                                 | Windows     |

-   enebular では上記のブラウザでの利用を推奨しています。これらのブラウザで表示が崩れる、機能が動かないなどの問題がある場合はサポートまでご報告ください
-   一部の Chrome の拡張機能を利用した場合に enebular が正しく動作しないことが分かっています。enebular 利用時には不要な Chrome の拡張機能を無効にすることを推奨します

## enebular editor {#enebularEditor}

### オペレーティングシステム {#EnebularEditorOperatingSystem}

次のOSをサポート対象とします。  

-   Windows 10
-   macOS v10.13

それぞれのミドルウェアのバージョンは以下になります。

| OS           | [npm](https://github.com/npm/npm/releases) |
| ------------ | ------------------------------------------ |
| Windows 10   | 6.0 or later                               |
| macOS v10.13 | 6.0 or later                               |

## enebular-agent {#enebular-agent}

enebular-agent は、Linux OS を搭載したゲートウェイ向けの enebular 用 IoT エージェントソフトウェアです。対象となる環境は以下とします。

なお、詳しい仕様については、弊社サポート(support@enebular.com)までお問い合わせください。

### 推奨ハードウェア (Recommended Hardware) {#RecommendedHardware}

enebular-agent は、Linux 上で動作します。
以下では、Linux が動作する安価なゲートウェイ環境としての推奨ハードウェアを列挙します。

| Product | Version | 備考 |
| --- | --- | --- |
| Raspberry Pi 3 Model B | [Version 3 Model B](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/) | |
| Raspberry Pi 4 Model B | [Version 4 Model B](https://www.raspberrypi.org/products/raspberry-pi-4-model-b/) | サポート対象のenebular-agentバージョンは2.13.0以降 |

### 必要物 {#requirements}

-   Network Interface (ethernet or 無線 LAN)
    -   無線 LAN については、IEEE802.11a/b/g 等を想定していますが、Linux から IP 接続ができるネットワークが使用できれば良いものとします
-   SD-Card
-   RAM
-   Flash Memory

### オペレーティングシステム (Operating System) {#OperatingSystem}

enebular-agent は、[Debian GNU/Linux](https://www.debian.org/) 上で動作します。
推奨ハードウェアである Raspberry Pi では、Debian ベースの [Raspbian OS](https://www.raspbian.org/) が動作するため、これを利用します。

#### Raspbian OS{#Raspbian}

Raspbian OSでは以下の OS をサポート対象とします。

| enebular-agent バージョン | [Raspbian Buster base](https://downloads.raspberrypi.org/raspbian/images/raspbian-2019-09-30/) (10.0) | [Raspbian Stretch base](https://downloads.raspberrypi.org/raspbian/images/raspbian-2019-04-09/) (9.0) | [Raspbian Jessie base](https://downloads.raspberrypi.org/raspbian/images/raspbian-2017-07-05/) (8.0) |
|---|:---:|:---:|:---:|
| 2.12.0以降 | ○ | ○ | × |
| 2.10.0 〜 2.11.0 | × | ○ | × |
| 2.9.1以前 | × | ○ | ○ |

また、それぞれのミドルウェアのバージョンは以下になります。

| enebular-agent バージョン | [Node.js](https://nodejs.org/ja/download/releases/) | [npm](https://github.com/npm/npm/releases) | [Node-RED](https://github.com/node-red/node-red/releases) |
| --- |---:|---:|---:|
| 2.15.0以降 | 12.18.1 | 6.14.5 | 1.0.5 |
| 2.10.0 〜 2.14.1 | 12.14.0 | 6.13.4 | 0.18.6 |
| 2.9.1以前 | 9.2.1 | 5.5.1 | 0.18.6 |

#### Debian GNU/Linux {#DebianGNULinux}

Debian GNU/Linuxでは以下の OS をサポート対象とします。

| enebular-agent バージョン | [Debian GNU/Linux Buster](https://www.debian.org/releases/buster/) (10.0) | [Debian GNU/Linux 9 Stretch](https://www.debian.org/releases/stretch/) (9.0) | [Debian GNU/Linux 8 Jessie](https://www.debian.org/releases/jessie/) (8.0) |
| --- |:---:|:---:|:---:|
| 2.12.0以降 | ○ | ○ | × |
| 2.10.0 〜 2.11.0 | × | ○ | ○ |
| 2.9.1以前 | × | ○ | ○ |

また、それぞれのミドルウェアのバージョンは以下になります。

| enebular-agent バージョン | [Node.js](https://nodejs.org/ja/download/releases/) | [npm](https://github.com/npm/npm/releases) | [Node-RED](https://github.com/node-red/node-red/releases) |
|---|---:|---:|---:|
| 2.10.0以降 | 12.14.0 | 6.13.4 | 0.18.6 |
| 2.9.1以前 | 9.2.1 | 5.5.1 | 0.18.6 |

### Support enebular function

|  -                 | v2.3 | v2.4 | v2.5 | v2.6 | v2.7 | v2.8 | v2.15+ |
| ------------------ |:----:|:----:|:---:|:---:|:---:|:---:|:---:|
| Flow Deploy\*1     | ●   | ●   | ●   | ●   | ●   | ●    | ●    |
| File Deploy        | ●   | ●   | ●   | ●   | ●   | ●    | ●    |
| AI-Model Deploy    |      |      |      |      | ●   | ●    | ●    |
| Flow Start/Stop\*2 |      |      |      |      | ●   | ●    | ●    |
| Flow(プライベートノード含む) Deploy | | | | | | | ● |

\*1 Flow Deploy のスケジューリングは v2.5 以上で可能です

\*2 Flow Start/Stop のスケジューリングは v2.8 以上で可能です

## enebular-edge-agent {#enebular-edge-agent}

enebular-edge-agent は、[ARM Ltd.](https://www.arm.com/) の [Mbed OS](https://os.mbed.com/) を採用したマイクロコントローラ向けの enebular 用 IoT エージェントソフトウェアです。

なお、詳しい仕様については、弊社サポート(support@enebular.com)までお問い合わせください。

### Operating Environment {#enebular-edge-agentOperatingEnvironment}

#### Operating System{#enebular-edge-agentOperatingSystem}

-   [mbed OS 5.10.4](https://github.com/ARMmbed/mbed-os/releases/tag/mbed-os-5.10.4) (ARM Ltd.)

#### Hardware{#enebular-edge-agentHardware}

enebular-edge-agent 1.1.0以上（1.2.2を除く） は、下記のハードウェアを対象としています。

-   [enebular Reference Board RAVEN](./../Board/RAVEN.md) (Uhuru Corporation)

enebular-edg-agent 0.9.0～1.0.1及び1.2.2以上は、下記のハードウェアを対象としています。

-   ARM® Cortex™-M4以上、RAM:256KB以上、Flash:1MB以上のマイコン及び無線 LAN 機能を搭載したマイコンボード

※対応しているマイコンボードについては、弊社サポート(support@enebular.com)までお問い合わせください

#### Communication{#enebular-edge-agentCommunication}

-   IEEE 802.11 b/g/n (IEEE 802.11n は 2.4GHz のみの対応です)
-   WPA/WPA2

### Support enebular function

|  -                 | v1.3 | v1.4+ |
| ------------------ | ---- | ----- |
| Flow Deploy\*1     | ●   | ●    |
| Flow Start/Stop\*2 |      | ●    |

\*1 Flow Deploy のスケジューリングはサポート対象外です

\*2 Flow Start/Stop のスケジューリングはサポート対象外です


## enebular Reference Board Configuration Tool{#eRB-Config.Tool}

enebular Reference Board Configuration Toolの動作環境は以下です。

| OS         | CPU                 | メモリ       | その他                   |
| ---------- | ------------------- | --------- | --------------------- |
| Windows 10 | Core i5 2.90GHz以上推奨 | 8.0GB以上推奨 | .NET Framework v4.6.1 |

## Enebular Infomotion Tool {#EnebularInfomotionTool}

enebular-infomotion-tool が対象とする Web ブラウザは以下とします。

| Web Browser    | Version                                                                              | OS          |
| -------------- | ------------------------------------------------------------------------------------ | ----------- |
| Chrome         | [63.0 or later](https://chromereleases.googleblog.com/search/label/Desktop%20Update) | Windows/Mac |
| Firefox        | [57.0 or later](https://www.mozilla.com/firefox/releases/)                           | Windows/Mac |
| Safari         | Coming soon                                                                          | Mac         |
| Microsoft Edge | Coming soon                                                                          | Windows     |

### Npm Version {#NpmVersion}

nodejs >= 6 and npm 5.2+

### Possible Issues {#PossibleIssues}

permission error が起こった際には、以下のいずれかで解決ができることがあります。

1.  現在のユーザーに `/usr/local/lib/` 内の `node_modules` に権限を与えます。権限を与えたのち、再度グローバルインストールください。

-   MacOSX: <https://support.apple.com/kb/PH25287?locale=en_US>
-   Windows: <https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc754344(v=ws.11)>

2.  NVM を利用する**（推奨）**

-   MacOSX: <https://github.com/creationix/nvm>
-   Windows: <https://github.com/coreybutler/nvm-windows>

3.  npm の[デフォルトのディレクトリ](https://docs.npmjs.com/getting-started/fixing-npm-permissions)を変更する。
