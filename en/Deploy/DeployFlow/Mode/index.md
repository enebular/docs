---
lastUpdated: 2017-12-01
---

# Mode デプロイ用の設定 {#Mode デプロイ用の設定}

Mode へデプロイする際に必要な設定の方法です。

## 事前準備 {#事前準備}

enebular MODE deployの内容を把握しておきましょう。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_01.png)

「Export to Other Services」でDeployの設定に行きます。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_02.png)

Modeを選択します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_03.png)

Createを押します。

* Connection Name
* MODE Project ID
* MODE Project API Key
* MODE Home ID

Connection Nameは自由な名前をつけて良いです。MODE Project ID・MODE Project API Key・MODE Home IDの3つの設定をMODE作成して帰ってきましょう。

* Connection Name
    * 自由な名前
* MODE Project ID
    * （設定待ち）
* MODE Project API Key
    * （設定待ち）
* MODE Home ID
    * （設定待ち）

## アカウント作成 {#アカウント作成}

MODE – Make IoT a reality for your business
http://www.tinkermode.com/

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_04.png)

こちらにアクセスします。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_05.png)

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_06.png)

最下部のフッターにあるDevelopersを押しましょう。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_07.png)

Developersページに遷移します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_08.png)

右上のGO TO CONSOLEボタンを押します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_09.png)

LOGINページに移動します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_10.png)

Sign up!でユーザー登録をしましょう。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_11.png)

メールが届くのでアクティベーションしましょう。

## MODE Project ID Projectの作成 {#MODE Project ID Projectの作成}

MyProjectページがトップページです。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_12.png)

右上のNewボタンからプロジェクトを作成します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_13.png)

User Accountsは「Your users will log in with their email addresses.」にします。

プロジェクト設定画面に移動するのでプロジェクトをわかりやすい名前で設定しましょう。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_14.png)

作成すると、Project Dashboardに移動します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_15.png)

Project IDをメモしておきましょう。

* Connection Name
    * 自由な名前
* MODE Project ID
    * 000
* MODE Project API Key
    * （設定待ち）
* MODE Home ID
    * （設定待ち）

## Project API Key {#Project API Key}

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_16.png)

つづいてSettingページに移動します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_17.png)

API KEYSに移動して New ボタンを押してAPI Keyを作成します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_18.png)

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_19.png)

API KEYできました。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_20.png)

詳細をクリックして見に行きます。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_21.png)

v1ではじまるAPI KEYがあるのでこれをMODE Project API Keyとしてメモしておきます。

* Connection Name
    * 自由な名前
* MODE Project ID
    * 000
* MODE Project API Key
    * vi.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
* MODE Home ID
    * （設定待ち）

## デバイス作成 {#デバイス作成}

HomeIDをつくるためにデバイスとAPPが必要です。まずデバイスを作成します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_22.png)

Deviceに移動します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_23.png)

DEVICE CLASSESのところでNewを押します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_24.png)

適当な名前で作成します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_25.png)

デバイスが出来たら、クリックしてデバイス詳細に移動します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_26.png)

DIVICE LISTがまだ No Device Yet !なのでNewボタンを押して作成します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_27.png)

TAGは適当でOKです。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_28.png)

デバイスの作成完了です。

## APPS作成 {#APPS作成}

APPを作成します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_29.png)

Appページに移動します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_30.png)

Newボタンを押して新規作成します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_31.png)

適当な名前で作成します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_32.png)

## ユーザーの作成 {#ユーザーの作成}

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_33.png)

ユーザーメニューに移動します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_34.png)

まだ作成されていないので作成します。

### アプリシミュレーターでユーザーを登録する {#アプリシミュレーターでユーザーを登録する}

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_35.png)

接続したいアプリをに移動します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_36.png)

アプリシミュレーターを起動します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_37.png)

アプリシミュレーター画面です。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_38.png)

アプリシミュレータで、アカウントも認証します。Register New Userをクリックします。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_39.png)

Sign Upページに移動するので、各項目を入力しましてRegister しましょう。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_40.png)

メールが送られるので認証しましょう。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_41.png)

認証しました。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_42.png)

認証されたので、IM Verifiedを押します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_43.png)

これでユーザーの登録が完了です。

### ホーム画面の作成 {#ホーム画面の作成}

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_44.png)

まだホーム画面が作成されていないの作成します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_45.png)

Newボタンを押します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_46.png)

適当な名前をつけます。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_47.png)

ホーム画面の作成完了です。

### ホーム画面のデバイスの関連付け {#ホーム画面のデバイスの関連付け}

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_48.png)

上部のアラートを見ましょう

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_49.png)

hereをクリックします。右メニューのDevicesで移動してもOKです。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_50.png)

Devices画面に移動します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_51.png)

Newボタンを押します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_52.png)

Newボタンを押すとCLAIM CODEというコードが聞かれるのでそのままにします。

### デバイスシミュレータを起動する {#デバイスシミュレータを起動する}

CLAIM CODEはデバイスシミュレータで取得します。

デバイスシミュレータを起動します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_53.png)

デバイスページに移動します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_54.png)

接続したいデバイスをクリックします。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_55.png)

デバイスシミュレータがあるのでボタンを押します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_56.png)

デバイスシミュレータが起動します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_57.png)

Claim Codeをメモします。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_58.png)

CLAIM MODEボタンを押します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_59.png)

カウントダウンが始まります。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_60.png)

アプリシミュレーターに戻ってCodeを入力します。ADDを押します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_61.png)

登録されました。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_62.png)

ホーム画面の右メニューからSettings画面に移動します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_63.png)

Home IDがあるのでメモします。

* Connection Name
    * 自由な名前
* MODE Project ID
    * 000
* MODE Project API Key
    * vi.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
* MODE Home ID
    * 000

## 反映 {#反映}

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_64.png)

enebularのDeploy画面に戻り反映します。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_65.png)

反映後みてみましょう。connectedになったら成功です。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_66.png)

Deployを押すと反映されます。

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_67.png)

Devicesのログにも無事残りました。

### disconnectになっていたら {#disconnectになっていたら}

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_68.png)

disconnectになっていたら

![image](../../../_asset/images/Deploy/DeployFlow/Mode/deploy-deployflow-mode-settings_69.png)

デバイスシミュレーションをONにして接続状態にして再度選択し直して見てみましょう。

おつかれさまでした。
