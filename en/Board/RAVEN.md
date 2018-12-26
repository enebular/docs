---
lastUpdated: 2018-12-26
---

# RAVEN

RAVEN is the enebular-edge-agent reference board.

Mounted network function and four I/O connecters on small body. And easy to connect to `enebular`.

You can use various functions such as execution of flow by `enebular-edge-agent`. Learn more ->  [Introduction](./../EnebularEdgeAgent/Introduction.md).

### Table of Contents

1. [Contents](#contents)
1. [Description of each part](#parts)
1. [Prepsration](#preparation)
1. [Initial settings](#initialsetting)
1. [Disclaimer](#disclaimer)

## Contents{#contents}

Contents are as follows.

![RAVEN-package](./../../img/Board/RAVEN-package.jpg)

- RAVEN body
- USB cable
- Quick Start Guide
- Sticker

## Parts{#parts}

![RAVEN-parts](./../../img/Board/RAVEN-parts.png)

- USB ... USB microB connection terminal
- USER SW ... Switch that can be set with flow
- USER LED ... LED that can be set with flow
- RESET SW ... Reset switch
- Port 1 to 4 ... Grove connector

Learn more about hard ware refer to [TechnicalDetail](./../Other/HWSpec-RAVEN.md).

## Preparation{#preparation}

In order to use RAVEN, the following preparation is necessary.

* A PC with one or more USB-A terminals or an AC adapter
    * Supplies 5V / 0.5A or more
* A network module
    * Use 2.4GHz band
    * IEEE 802.11 b/g/n
* Sensors and actuator you want to connect to Port
    * Commercially available sensors and actuators can be used
    * 3.3V, ADC/UART/I2C/PWM/GPIO interface (Supports up to 200 mA total for 4 ports) *1
    * For an example of the sensor please see [here](http://wiki.seeedstudio.com/Grove_System/) 
    * There are restrictions on the combination of available interfaces. 

\*1 The interfaces that can be set from the node in flow editor are limited to ADC / GPIO and part I2C. For details, please see the explanation of each node.

## Initial Settings(#initialsetting)

It is the procedure of network setting.

* Activate RAVEN in `SettingMode`.
    1. Power on RAVEN
    1. Press and hold `USER SW` and push `RESET SW`
    1. Hold `USER SW` until `USER LED` light red
    1. Even after released from `USER SW`, confirm to remain lit `USER LED` in red
    1. RAVEN is started with `SettingMode`
* Use **enebular Reference Board Configuration Tool** to set up SSID and password. Refer to** [Configuration](./../EnebularEdgeAgent/Configuration.md).
* Please restart after setting.

## Disclaimer{#disclaimer}

本製品は、お客様にご利用いただき、評価をしていただく目的で開発されております。
従いまして、本製品をご利用いただいた場合の、お客様のアプリケーションについての動作、不具合の不発生その他の事項に対しては、明示又は黙示を問わず、一切の保証を致しません。
本書は、製品の保証に関するものではありません。この製品の保証については、お買い上げの販売店にお問い合わせ下さい。

### Usage Notes

- 直射日光の当たる場所、水気や湿気の有る場所では保管及び使用を行わないで下さい。故障、火災や感電の原因となる恐れが有ります。
- 強い衝撃や圧力(落下、重量物を乗せる等)を掛けないで下さい。誤動作や故障の原因となる恐れが有ります。
- 乳幼児の手の届く場所では使用しないで下さい。誤飲や怪我の恐れが有ります。
- 不安定な場所で使用しないで下さい。製品の落下により、けがや破損の原因となる恐れが有ります。
- 無線機器の使用を制限されている場所(医療機関、航空機内等)では使用しないで下さい。計器誤動作の原因となる恐れが有ります。
- 紙、布、布団等で覆った状態で放置しないで下さい。発火や発煙の原因となる恐れが有ります。
- 端子や筐体に異物を入れないで下さい。誤動作や故障の原因となる恐れが有ります。
- 濡れた手で製品に触らないで下さい。感電の原因となる恐れが有ります。
- 動作中にセンサコネクタの挿抜を行わないで下さい。誤動作や故障の原因となる恐れが有ります。
- 本製品に付された表示を消去、除去又は汚損しないでください。
- その他、本書に記載のない事項については、本製品に適用される利用規約の定めに従うものとします。
