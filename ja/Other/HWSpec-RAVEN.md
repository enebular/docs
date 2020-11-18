# RAVEN HardWare Specification

このページでは、RAVENのハードウェア詳細について説明します。

### Table of Contents

- [特徴](#Features)
- [一般仕様](#GeneralSpec)
- [技術資料](#TechnicalDocument)

## 特徴{#Features}
* MCUにSTM32F767を採用( Cortex®-M7@216MHz, 2MB Flash, 512KB SRAM )
* SPI接続の64Mbitフラッシュ
* WLAN( 802.11 b/g/n )モジュール
* ユーザー制御可能なスイッチとLED
* DAPLinkに対応
    * ドラッグアンドドロップ書き込み
    * USB仮想シリアルポート
    * CMSIS-DAP経由のデバッグ及び書き込み
* 4系統の多機能I/Oコネクタ
    * 3.3V動作のセンサ、及びアクチュエーターが使用可能
    * 各端子は複数の機能に対応( ADC/UART/I2C/PWM )
    * 各ポート50mA迄の電源供給

![HWSpec-RAVEN-BlockDiagram_Summary](./../../img/Other/HWSpec-RAVEN-BlockDiagram_Summary.png)

## 一般仕様{#GeneralSpec}

* 外形サイズ
    * 75mm x 35mm x 12mm( WxDxH )( 突起部を含まない )
* 定格
    * 5V/2.5W( microUSB端子にて電源供給 )
* 質量
    * 約22g

## 技術仕様{#TechnicalDocument}

本体の定格及び仕様について、以下の表を参考にして下さい。

### 絶対最大定格{#AbsoluteMaximumRatings}

| 項目 | 記号 | Min | Max | 単位 | 備考 |
| ---- | ---- | ---- | ---- | ---- | ---- |
|電源電圧 |V<sub>IN</sub> |-0.3 |5.5 |V |- |
|入出力電圧(PORT) |V<sub>IO</sub> |-0.3 |7.0 |V |電源ピンを除く |
|入出力電圧(USB) |V<sub>USBIO</sub> |-0.5 |3.6 |V |V<sub>BUS</sub>=0V |
|動作温度範囲 |T<sub>opr</sub> |-20 |70 |deg.C |結露なきこと |

### 推奨動作条件{#GeneralOperatingConditions}

| 項目 | 記号 | Min | Max | 単位 | 備考 |
| ---- | ---- | ---- | ---- | ---- | ---- |
|動作電源電圧 |V<sub>IN</sub> |3.0 |5.25 |V |- |
|使用温度範囲 |T<sub>a</sub> |0 |40 |deg.C |結露なきこと |
|使用湿度範囲 |RH |20 |80 |% |- |

### Portの電気的仕様{#ElectricalCharacteristics}

|  項目  |  記号  |  Min  |  Max  |  単位  |  備考  |
| ---- | ---- | ---- | ---- | ---- | ---- |
|  電源ピン出力電圧  |  V<sub>O</sub>  | 3.1  |  3.45  |  V  |  TYP=3.3V  |  
|  電源ピン出力電流  |  I<sub>O</sub>  | -  |  200  |  mA  |  4ポート合計  |  
|  I/Oピンハイレベル出力電圧  |  V<sub>OH</sub>  |  V<sub>O</sub>-0.4 |  V<sub>O</sub>  |  V  |  I<sub>IO</sub> = -8mA  |  
|  I/Oピンローレベル出力電圧  |  V<sub>OL</sub>  |  0  |  0.4  |  V  |  I<sub>IO</sub> = 8mA  |
|  I/Oピンハイレベル入力電圧  |  V<sub>IH</sub>  |  0.7*V<sub>O</sub>  |  V<sub>O</sub>  |  V  |  -  |
|  I/Oピンローレベル入力電圧  |  V<sub>IL</sub>  |  0  |  0.3*V<sub>O</sub>  |  V  |  -  |
|  I/Oピン入力漏れ電流  |  I<sub>lkg</sub>  |  -  |  3  |  uA  |  5V入力,PU/PD無効  |

### Portについて{#NotesOnThePorts}

* I/Oコネクタは、フローでの設定により、複数の機能を割り付けることが可能です。  
  その為、ここではPortと定義します。  
* Portは3.3V動作です。5V動作専用のセンサー/アクチュエータは使用出来ません。
* Portは、動作中の挿抜(ホットスワップ)に未対応です。電源を切断してから挿抜を行って下さい。
* 各Portは定格50mA(4Port合計200mA迄)です。超えない様に注意して下さい。  
* Port電源端子に、外部から電源供給を行わないで下さい。故障の原因となります。
* フローからセンサー/アクチュエータの電源制御は出来ません。(RAVENから常時電源供給されます。)
* Port1-4の信号ピン(SIG1/2)は、MCUのピンから保護抵抗(33Ω)を経由して接続されています。  
  Portが有効の時は、ピンの機能、入出力、プルアップ/プルダウンはフローによって決定されます。 
  電源投入直後(内部ファームウェアによりフローが読み込まれる迄)は、全てのポートが無効状態です。
    * PORT3/4
        * ポートが無効の時は、入力で且つMCU内部の約40kΩにてプルダウンされます。
    * PORT1/2
        * ポートが無効の時は、入力で且つMCU内部の約40kΩにてプルアップされます。
        * I2C動作時には、SCL/SDAラインが4.7kΩにてプルアップされます。

* 各Portは、フローから切り替えが出来る機能の制限が存在します。 
 以下資料を参考にして下さい。  
 ※資料にはPWM(TMR)及びUART機能が表示されていますが、現在の所未実装です。  
![HWSpec-RAVEN-PhrPin_ManualVer](./../../img/Other/HWSpec-RAVEN-PhrPin_ManualVer.png)

### 内部機能ブロックについて{#NotesOnTheInternalFunctionBlock}
* メインMCU(STM32F767)を中心に、SPIFlash、WLANモジュール、MbedI/F(DAPLink)、Port、ユーザースイッチ、 ユーザーLEDが接続されています。
* SPIFlashはシステムで予約されており、現在の所フローからアクセス出来ません。

![HWSpec-RAVEN-PhrPin_ManualVer](./../../img/Other/HWSpec-RAVEN-BlockDiagram-1.png)

### 内部電源ブロックについて{#NotesOnTheInternalPowerBlock}
* microUSBコネクタからの入力電圧を、昇降圧レギュレータにより3.3Vに変換し、内部回路及びPortに供給しています。 
* 保護については、USBライン直後のポリスイッチ及び昇降圧レギュレータに搭載されている保護を使用しています。

![HWSpec-RAVEN-PhrPin_ManualVer](./../../img/Other/HWSpec-RAVEN-BlockDiagram-2.png)
