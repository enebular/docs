# Remote Maintenance {#RemoteMaintenance}

## 概要 {#Overview}

デバイスのメンテナンスを行うために、デバイスに対してSSHログインできるようにする機能を提供します。  
本機能を利用するとデバイスがローカルネットワークに存在している場合であってもそのローカルネットワークの外からSSHログインすることができるようになります。

Remote Maintenanceを行う際に必要となる構成要素を下表に示します。

| 要素 | 説明 |
| --- | --- |
| デバイス | Remote Maintenanceの対象となるデバイスです。<br/>enebular-agentのVer 2.9.0以上が稼働している必要があります。 |
| 作業用PC | ユーザがデバイスに対してSSH接続するために利用するPCです。<br/>SSH Clientがインストール済みである必要があります。 |
| 中継サーバ | グローバルIPを持ち、SSHサーバが稼働するサーバです。<br/>作業用PCからデバイスへのSSH接続を中継するために利用します。 |

本機能は有料プロジェクトでのみ利用できます。

## 説明 {#Description}

### 前提条件 {#DescriptionPrerequisites}

Remote Maintenanceの前提条件を列挙します。  

* Remote Maintenanceの対象デバイスにライセンスが付与されていること
* デバイスから中継サーバに対し、SSH接続できること(22番ポート固定)
* 作業用PCから中継サーバに対し、SSH接続できること(ポートはenebularの画面から指定)
* 中継サーバのSSHサーバにて公開鍵認証が有効であること*  
  デフォルトで有効であるため/etc/ssh/sshd_configファイルを確認し、`PubkeyAuthentication`が下記のようにコメントアウトされていることを確認してください。
  ```
  #PubkeyAuthentication yes
  ```
* 中継サーバのSSHサーバにてGatewayPortsを許可すること*  
  作業用PCから中継サーバ経由でデバイスにSSHログインするためにGatewayPortsを許可する必要があります。  
  /etc/ssh/sshd_configファイルを確認し、下記の設定になっていることを確認してください。
  ```
  GatewayPorts yes
  ```
* 中継サーバのSSHサーバにて死活監視設定が有効であること*  
  ネットワーク障害発生時にSSH関連のプロセスが残ってしまうことが防ぐために死活監視の設定が必要です。  
  /etc/ssh/sshd_configファイルを確認し、下記の設定になっていることを確認してください。
  ```
  ClientAliveInterval 30
  ClientAliveCountMax 3
  ```
*: /etc/ssh/sshd_configファイルの設定を変更した場合はSSHサーバの再起動が必要です

### 環境構築 {#BuildEnvironment}

#### SSHのKeyを生成 {#GenerateSSHKey}

まず、enebularの画面からRemote Maintenance用のKeyを作成します。  
Keyを作成できるのは、プロジェクトのownerのみです。

1. enebular画面の左側のメニューにある`Settings`をクリックします
1. `Device Remote Maintenance`の欄に表示する`Create Key Pair`ボタンを押下します
1. 確認ダイアログを表示するのでKeyを作成してもよろしければ`Create`ボタンを押下します
1. 以下二つのKeyのダウンロードリングを表示しますので、各々をダウンロードします
    * relay-server-&lt;id&gt;.key: 中継サーバで稼働するSSHサーバが利用する公開鍵
    * device-&lt;id&gt;.key: 作業用PCでSSH接続時に利用するデバイスの秘密鍵

#### 中継サーバへのKeyの配置 {#DeployKeyOnRelayServer}

次に、中継サーバにrelay-server-&lt;id&gt;.keyを設定します。  
中継サーバにSSHサーバがインストールされていること、及び、中継サーバにインストールされているOSがLinuxであることを前提に説明します。

1. 中継サーバにログインします
1. relay-server-&lt;id&gt;.keyファイルをRemote Maintenanceで利用するユーザのホームディレクトリにコピーします
1. 上記ディレクトリにある`.ssh/authorized_keys`ファイルにrelay-server-&lt;id&gt;.keyファイルの内容を追記します  
  例: `cat relay-server-<id>.key >> .ssh/authorized_keys`

Deviceは、上記で指定したrelay-server-&lt;id&gt;.keyに対応する秘密鍵を用いて接続を行います。
Remote Maintenance機能では、中継サーバに対してパスワードによるログインを行いませんので不要であればSSHサーバの設定を修正しパスワードによるログインを無効化しても良いです。

#### 作業用PCへのKeyの配置 {#DeployKeyOnPC}

最後に、作業用PCにdevice-&lt;id&gt;.keyをコピーします。  
作業用PCにはSSH Clientがインストール済みであることが前提であり、コピーしたファイルはSSH Clientが利用します。  
利用の仕方は後述する`メンテナンス手順`で説明します。

### メンテナンス手順 {#MaintenanceProcedure}

Remote Maintenanceを行うときの手順を説明します。  
Remote Maintenanceのオン/オフを切り替えられるのはプロジェクトのowner及びadminです。

まず、enebularの画面からRemote Maintenance可能な状態に切り替えます。

1. enebular画面の左側に表示するサイドメニューにある`Devices`をクリックします
1. メンテナンスしたいデバイスが含まれるConnection名をクリックします
1. 表示したデバイス一覧からメンテナンス対象のデバイスを探し、クリックします
1. 表示されたデバイス詳細画面のRemote Maintenanceの欄に以下の情報を入力します
    * Relay server host  
      中継サーバのホスト名又はIPアドレスを入力してください
    * Relay server port number  
      中継に利用するポート番号を入力してください
    * Relay server username  
      SSHの中継を行う際に利用するユーザの名前を入力してください
1. Remote Maintenanceのトグルボタンを押下します
1. トグルボタンがオンの状態(緑)に変わったら作業用PCからSSH接続可能な状態になったことを表します

次に、作業用PCからデバイスに対してSSH接続を行います。  
SSH接続で利用する鍵は、環境構築時に作業用PCにコピーしたdevice-&lt;id&gt;.keyを利用します。
ユーザは、`enebular-remote-admin`を指定します。
以下にコマンドの例を示します(作業用PCのホームディレクトリにdevice-&lt;id&gt;.keyを置いた場合)。
```
ssh -i ~/device-<id>.key enebular-remote-admin@<Relay server host*1> -p <Relay server port number*2>
```
\*1: デバイス詳細画面の`Relay server host`に入力したホスト名又はIPアドレス  
\*2: デバイス詳細画面の`Relay server port number`に入力したポート番号  

メンテナンスが完了したらenebularのデバイス詳細画面からRemote Maintenanceのトグルボタンをオフにすることが可能です。

### オン/オフ切り替え履歴の確認 {#CheckOnOffHistory}

Remote Maintenanceのオン/オフ切り替えの実施者や実施時刻を`Action History`画面から確認することができます。  

enebular画面の左側メニューの`Action History`をクリックするとユーザが実施したActionのリストを表示します。

以下のAction TypeがRemote Maintenanceのオン/オフのActionです。

* オン: `Start Remote M.`
* オフ: `Stop Remote M.`

`Triggered By`や`Requested`を参照することにより、実施者や実施時刻を確認することができます。
