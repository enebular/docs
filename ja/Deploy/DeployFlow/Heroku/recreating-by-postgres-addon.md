# HerokuのmLab MongoDB Add-onの廃止に伴うHerokuアプリの再作成

## はじめに

enebular v2.25.3以前に作成したHerokuアプリは2020/11/10以降は正しく動作しなくなります。そのため、enebular v2.25.4以降でHerokuアプリを再作成する必要があります。

enebular v2.25.3以前に作成したHerokuアプリは、設定情報を保存するためにmLab MongoDB Add-onを利用しています。このAdd-onが2020/11/10に[Herokuから削除される](https://devcenter.heroku.com/changelog-items/1823)ため、Herokuアプリが正しく動作しなくなります。

enebular v2.25.4では、mLab MongoDB Add-onの代わりにHeroku PostgreSQL Add-onを利用するように修正しています。

## Herokuアプリの再作成が必要かどうか確認する方法

ご利用中のHerokuアプリが、enebular v2.25.3以前のenebularで作成したHerokuアプリであるかどうかを確認する方法は以下です。

1. Herokuの[アプリ一覧画面](https://dashboard.heroku.com/apps)を表示します
1. enebularで作成したアプリ名をクリックし、Herokuアプリの管理画面を表示します
1. `Settings`をクリックし、Settingsタブを表示します
1. Config Vars欄の`Reveal Config Vars`をクリックし、設定情報を表示します

設定情報の一つに`AGENT_HEROKU_VERSION`があり、その値が1.2.0以上であればPostgreSQLを利用する環境であるため再作成は必要ありません。

`AGENT_HEROKU_VERSION`の値が1.2.0未満か、または存在しない場合は後述の「Herokuアプリを再作成する手順」にしたがって、Herokuアプリを再作成してください。

## Herokuアプリを再作成する手順

[HerokuへのDeploy](./index.md)を参照し、以下を実施してください。
* 「Heroku ボタンでアプリを作成」の手順にしたがって、Herokuアプリを作成してください
* 再作成前のHerokuアプリにデプロイしたフローと同じフローをデプロイします

HerokuアプリのURLを変更したくない場合、既存のHerokuアプリの名前を変更するか、Herokuアプリを削除した後に、既存のHerokuアプリと同じ名前で新しいHerokuアプリを作成してください。

Herokuアプリにデータを保存している場合は、Herokuアプリの再作成後に**データの移行**を行なってください。
データの保存方法は利用しているAdd-onに応じて異なるため、別途調査した上で適切な方法で移行を実施してください。

## 注意点

HerokuアプリにWebブラウザでアクセスしてフローを編集・保存した場合、そのフローはHerokuアプリ内にのみ保存されます。enebularで保存したフローと、既存Herokuアプリのフローに差分がある場合は、Flow Editorが提供するフローのインポート/エクスポート機能を利用するなどして別途フローの移行を行なってください。
