---
lastUpdated: 2018-05-14
---

# License Manager

License ManagerではAWS IoTにデプロイされたデバイスの **ログ** と  **ステータス** を監視するために必要なライセンスを購入することが出来ます。mbed対応は少々お待ちください。この機能は現在エンタープライズプランでのみのサポートです。さらに情報が必要な方は**sales@uhuru.jp**に連絡してください。

enebular-agentのセッティングはスタートするための前提条件です。enebular-agentは<a href="https://github.com/enebular/enebular-runtime-agent" target="_blank">GitHub</a>からダウンロードすることが出来ます。さらなる情報は[ここ](../Deploy/DeployFlow/AWSIoT/index.md)から見つけることが出来ます。

## License Phases

ライセンスには4つのステータスの種類があります。

1.  Issued
2.  Registered
3.  Reserved
4.  Deleted

## Issuing a License

右上部で、Purchase ボタンをクリックします。現状、ライセンスタイプとして選択できるのはDevice Monitoringのみです。1つのライセンスは1つのデバイスに対してのみ使用することが出来ます。そのため4台のデバイスを監視したい場合は、4ライセンスを選択する必要があります。

ライセンスを入手したら、ライセンスキーを入手することが出来ます。ライセンスのステータスは **issued** になります。

## Registering a License

ライセンスのステータスが **issued**になったら、デバイスに対して登録（ステータスは **register**） することが出来ます。ライセンスを登録すると監視機能が有効になります。

**issued** をクリックして、ライセンスを登録します。[deploying a flow](../Deploy/index.md)と同じ要領で、AWS IoTのexampleで作成したコネクションを選択します。ライセンスを割り当てたいデバイスを選択します。enebular-agentが動作しているデバイスの場合、登録する必要はありません。 登録されると、あなたのライセンスステータスは**registered**になります。

登録時にデバイスの電源がオフの場合は、監視のアクティベーションのために電源をオンにしてください。登録時にデバイスの電源がオンの場合は、デバイスは自動的に監視のアクティベーションをオンにします。

## Reserving a License

実装をお待ちください

## Deleting a License

ライセンスマネージャーから、ライセンスのステータスが **registered** になっている場合、**unsubcribe** ボタンをクリックしてライセンスの削除をすることが出来ます。ライセンスを削除すると登録したデバイスとライセンスの関係が取り除かれ監視機能が失われます。ライセンスの再登録はできません。

## Monitoring

デバイスの **ログ** と **ステータス**を監視することが出来ます。 メニューの**Device List** から閲覧することが出来ます。

AWS IoTを使ったケースでは、デバイスはいくつかの事柄を記録します。

1.  Node-REDからのログ。これらは**debug**ノードからのコンソールログを含みます。**debug tab and console**のオプションにチェックをつけることを忘れないでください。
2.  enebular-agent自身からのログ

**Status** ではデバイスが **connected** か **disconnected**かを見ることが出来ます。