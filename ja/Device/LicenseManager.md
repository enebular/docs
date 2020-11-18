# License Manager {#License Manager}

License ManagerではAWS IoTにデプロイされたデバイスの **ステータス** と **ログ** を監視するために必要なライセンスを購入することが出来ます。この機能は現在エンタープライズプランでのみのサポートです。さらに情報が必要な方は **support@enebular.com** に連絡してください。

ライセンスマネージャーを利用する前に、enebular-agentのセットアップを済ませる必要があります。enebular-agentは<a href="https://github.com/enebular/enebular-runtime-agent" target="_blank">GitHub</a>からダウンロードすることが出来ます。セットアップは[こちら](../Deploy/DeployFlow/AWSIoT/index.md)のページを参照して行ってください。

## License Phases {#License Phases}

ライセンスには下記の4つのステータスがあります。

1.  Issued
2.  Registered
3.  Reserved
4.  Deleted

## Issuing a License {#Issuing a License}

右上部で、Purchase ボタンをクリックします。現状、ライセンスタイプとして選択できるのはDevice Monitoringのみです。1つのライセンスは1つのデバイスに対してのみ使用することが出来ます。そのため4台のデバイスを監視したい場合は、4ライセンスを選択する必要があります。

ライセンスを入手したら、ライセンスキーを入手することが出来ます。ステータスは **issued** になります。

## Registering a License {#Registering a License}

ステータスが **issued** になったら、デバイスにライセンスを登録することができます。登録するとステータスは **register** となり、監視機能が有効になります。

もし、ライセンスを **register** に変更したときにデバイスが起動していない場合は、監視機能を有効にするために以下の手順を実施する必要があります。

1. デバイス(enebular-agent又はenebular-edge-agent)を起動します
2. Device List画面で、Monitoringをオフにした後、再度オンにします

**issued** をクリックして、ライセンスを登録します。[deploying a flow](../Deploy/index.md)の手順で作成済みの、AWS IoTのコネクションを選択します。ライセンスを割り当てたいデバイスを選択します。enebular-agentが動作しているデバイスの場合、登録する必要はありません。 登録されると、ステータスは**registered**になります。

登録時にデバイスの電源がオフの場合は、監視のアクティベーションのために電源をオンにしてください。登録時にデバイスの電源がオンの場合は、デバイスは自動的に監視のアクティベーションをオンにします。

## Reserving a License {#Reserving a License}

こちらは実装予定の有料機能になります。しばらくお待ちください。

## Deleting a License {#Deleting a License}

ステータスが registered のものは、unsubcribe ボタンをクリックしてライセンスの削除をすることが出来ます。ライセンスを削除すると登録したデバイスとライセンスの関係が取り除かれ監視機能が失われます。ライセンスの再登録はできません。