---
lastUpdated: 2018-12-21
---
# RAVEN HardWare Specification

<big>仮置き</big>


このページでは、RAVENのハードウェアの詳細について説明します。

### Table of Contents

- [機能](#Function)
- [Portについて](#Port)
- [仕様](#Spec)
- [資料](#Document)

## 機能{#Function}
* MCUにSTM32F767を採用( Cortex®-M7@216MHz, 2MB Flash, 512KB SRAM )
* RTC用 32kHzローパワーオシレータ
* SPI接続の64Mbitフラッシュ
* WLAN( 802.11 b/g/n )モジュール
* ユーザー制御可能なスイッチとLED
* MbedEnabledに対応
    * ドラッグアンドドロップ書き込み
    * USB仮想シリアルポート
    * CMSIS-DAP経由のデバッグ及び書き込み
* 4系統の多機能I/Oコネクタ
    * 3.3V動作のセンサ、及びアクチュエーターが使用可能
    * 各端子は複数の機能に対応( ADC/UART/I2C/PWM 組み合わせに制限有 )
    * 4ポート200mA迄の電源供給

![HWSpec-RAVEN-BlockDiagram_Summary](./../../img/Other/HWSpec-RAVEN-BlockDiagram_Summary.png)

## Portについて{#Port}
各Portは、フローから切り替えが出来る機能の制限が存在します。
以下資料を参考にして下さい。

![HWSpec-RAVEN-PhrPin_ManualVer](./../../img/Other/HWSpec-RAVEN-PhrPin_ManualVer.png)

## 仕様{#Spec}
* 外形サイズ
    * 75mm x 35mm x 12mm( WxDxH )( 突起部を含まない )
* 定格
    * 5V/2.5W( microUSB端子にて電源供給 )
* 使用温度範囲
    * 0℃-40℃( 結露無きこと )

## 資料{#Document}
ブロック図

![HWSpec-RAVEN-PhrPin_ManualVer](./../../img/Other/HWSpec-RAVEN-BlockDiagram-1.png)
![HWSpec-RAVEN-PhrPin_ManualVer](./../../img/Other/HWSpec-RAVEN-BlockDiagram-2.png)