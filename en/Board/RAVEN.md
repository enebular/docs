---
lastUpdated: 2018-12-19
---

# RAVEN

RAVEN is the enebular-edge-agent reference board.

### Table of Contents

1. [Contents](#contents)
1. [Features](#features)
1. [Description of each part](#parts)
1. [Setting mode](#settingMode)
1. [Disclaimer](#disclaimer)

## Contents{#contents}

Contents are as follows.

![](！！！！！！！写真いれる！！！！！！！)

- RAVEN body
- USB cable
- Quick Start Guide

## Features{#features}

- MCU：STM32F767VIT6(STMicroelectronics)
- Connectivity: WiFi, Bluetooth
- Sensor I / F: Grove connector × 4 / board mounted USER LED / board mounted USER SW
- Maximum power consumption: about 2.5 W
  <!--* プラットフォーム認証済(Mbed™Enabled) -->

## Parts{#parts}

![parts](./../../img/Board/RAVEN-parts.png)

- USB-UART ... USB microB connection terminal
- Switch that can be set with USER SW ... flow
- USER LED ... LED that can be set with flow
- RESET SW ... Reset switch
- Port 1 to 4 ... Grove connector

## Setting Mode{#settingMode}

Use **enebular Reference Board Configuration Tool**
to activate RAVEN in `configuration mode` to set up wireless LAN.

1. Hold `USER SW` and connect the USB cable.
1. Press and hold `USER SW` until`USER LED` lights red.
1. RAVEN starts up in `configuration mode`.

**For the wireless LAN setting method, refer to**
[Configuration](./../EnebularEdgeAgent/Configuration.md).

## Disclaimer{#disclaimer}

本製品は、お客様にご利用いただき、評価をしていただく目的で開発されております。
従いまして、本製品をご利用いただいた場合の、お客様のアプリケーションについての動作、不具合の不発生その他の事項に対しては、明示又は黙示を問わず、一切の保証を致しません。
本書は、製品の保証に関するものではありません。この製品の保証については、お買い上げの販売店にお問い合わせ下さい。

### Usage notes

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
