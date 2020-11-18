# 開発者モード {#DeveloperMode}

## 概要 {#Overview}

ここではenebular-agentの開発者モードについて説明します。  

開発者モードはenebular-agentの起動モードの一つであり、enebular editorでenebular-agentのフローを直接編集できるモードのことです。  

## 説明 {#Description}

### モード {#DescriptionMode}

enebular-agentの起動モードには、ノーマルモードと開発者モードの二種類があります。  
このモードによって変わるものは、フローを作成するenebular editorのモードです。

enebular editorには、DesktopとRemoteの二つのモードがあります。  
Desktop（デスクトップモード）は、NodeのサポートがPCやブラウザのAPIに限られている場合のフローを編集する場合に使用します。   
Remote（リモートモード）は、Raspberry Piのセンサー用Nodeなど、デバイス依存のNodeを用いたフローを編集する場合に使用します。

enebular-agentの起動モードをノーマルモードで起動した場合は、enebular editorでデスクトップモードが使用でき、
開発者モードで起動した場合は、enebular editorでリモートモードが使用できます。  
その関係を表したものが次の表になります。  

|enebular-agentの起動モード|enebular editorのモード|
|:--|:--|
|ノーマルモード|デスクトップモード|
|開発者モード|リモートモード|

リモートモードでのフローを編集の詳細は[リモートモードでフローを読み込み](../EnebularEditor/RemoteMode.md)を参照してください。  

### 起動時動作 {#DescriptionStartupBehavior}

Linuxの起動時にenebular-agentはインストールした起動モードで起動されます。  

すなわち、起動モードを開発者モードでインストールした場合（オプション`--dev-mode`指定）は、enebular-agentは開発者モードで起動され、
起動モードをノーマルモードでインストールした場合（オプション`--dev-mode`省略）は、enebular-agentはノーマルモードで起動されます。  
注：オプション`--no-startup-registe`は省略されるものとして説明しています。  

インストール時に指定する起動モードは、ノーマルモードを推奨します。  
（常時、開発者モードのまま使用するのはセキュリティのリスクが高くなるため）  

プロセスについての詳細は、[ユーザー/フォルダ - ユーザー](UserFolder.md#DescriptionUser)を参照してください。  
インストールのオプションの詳細は、[インストール手順 - オプション](Installation.md#DescriptionOption)を参照してください。  

## 事例 {#Example}

### 設定方法 {#ExampleSetting}

起動モードの設定方法を、インストールの場合と運用の場合に分けて示します

#### インストール時の設定方法 {#ExampleSettingInstall}

インストール時に起動モードは[インストール手順 - オプション](Installation.md#DescriptionOption)の`--dev-mode`で指定します。  
`--dev-mode`を指定した時は、開発者モードになり、省略時した時は、ノーマルモードになります。  

開発者モードを使用する場合は、インストール時の起動モードはノーマルモードとし、運用時にコマンドで起動モードを開発者モードに変更する方法を推奨します。  

#### 運用時の設定方法 {#ExampleSettingOperation}

運用時に起動モードをコマンドで変更することも可能です。  

手順としては、enebular-agentのサービスを停止し、起動モードを指定してenebular-agentを実行し、enebular-agentのサービスを起動します。

`-u`または`--user`を<ユーザー>に指定し、`-d`または`--install-dir`を省略してインストールした場合の起動モードの変更手順を以下に示します。`-u`または`--user`の指定をしていない場合は、`<ユーザー>`を`enebular`に置き換えて読み進めてください。  

まず、インストール時に`-u`または`--user`で指定した`<ユーザー>`でログインし、次の手順にしたがって操作します。

#### 【別のnode.jsがインストールされている環境の場合】環境変数PATHの設定

enebular-agentの起動には、enebular-agentインストーラーが用意したバージョンのnode.jsが必要です。

Raspbian等、標準でnode.jsがインストールされている環境では、まず次の手順にしたがい enebular-agent がインストーラーが用意したnode.jsを使用して起動するように環境変数PATHを設定します。

##### enebular-agent v2.15.0以降の場合
```
PATH=/home/<ユーザー>/nodejs-v12.18.1/bin:$PATH
export PATH
```

##### enebular-agent v2.10.0以降の場合
```
PATH=/home/<ユーザー>/nodejs-v12.14.0/bin:$PATH
export PATH
```

##### enebular-agent 2.9.x以前の場合
```
PATH=/home/<ユーザー>/nodejs-v9.2.1/bin:$PATH
export PATH
```

設定が終わりましたら、以下のうちのいずれかの方法でenebular-agentを起動します。

#### AWS IoT、起動モード=開発者モードにする場合

```
sudo systemctl stop enebular-agent-<ユーザー>.service
/home/<ユーザー>/enebular-runtime-agent/ports/awsiot/bin/enebular-awsiot-agent --dev-mode
```

#### AWS IoT、起動モード=ノーマルにする場合

```
sudo systemctl stop enebular-agent-<ユーザー>.service
/home/<ユーザー>/enebular-runtime-agent/ports/awsiot/bin/enebular-awsiot-agent
```

#### Pelion Device Management、起動モード=開発者モードにする場合

```
sudo systemctl stop enebular-agent-<ユーザー>.service
/home/<ユーザー>/enebular-runtime-agent/ports/pelion/bin/enebular-pelion-agent --dev-mode
```

#### Pelion Device Management、起動モード=ノーマルモードにする場合

```
sudo systemctl stop enebular-agent-<ユーザー>.service
/home/<ユーザー>/enebular-runtime-agent/ports/pelion/bin/enebular-pelion-agent
```

なお、ここで設定した起動モードは、今動作させたenebular-agentに対してのみ有効で、実行を中断した場合やログインし直した場合は、もう一度上記の手順をPATHの設定から行う必要があります。また、Linuxを再起動させた場合は、enebular-agentはインストール時に指定した起動モードで起動します。  
