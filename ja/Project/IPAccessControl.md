# IPアドレスによるProjectのアクセス制限 {#IPAccessControl}

## 概要 {#Overview}

本機能は、Projectにアクセス可能なIPアドレスを制限できる機能です。Projectへのアクセスを許可するIPアドレスを登録すると、それ以外のIPアドレスからのアクセスをブロックすることができます。

この機能は、社内ネットワークに接続している人のみにProjectへのアクセス権限を与えるなどの使い方を想定しています。

## 説明 {#Description}

この機能を有効にした場合のアクセス制限対象は以下となります。

enebular.com
enebular editor

また、許可されていないクライアントIPアドレスからページを開いた場合にはアクセスが制限されるため以下のように表示されます。

- Projects一覧画面: Project名を表示しますが、Projectを選択するとエラー画面が表示されます
- Assets一覧画面: 制限されたProjectのAssetは表示されません

※Projects画面を既に開いている時に機能が有効になった場合、画面遷移のタイミングでIPアドレス制限が機能し、IPアドレス許可されていないProjectは利用できなくなります。

### Projects一覧

IPアドレスによるProjectのアクセス制限が有効になっているかどうかは、Projects一覧画面から以下の項目で確認できます。

#### IP Restrictions

IPアドレスによるアクセス制限機能の状態を確認できます。

- Enabled: アクセス制限機能が有効になっています
- Disabled: アクセス制限機能が無効になっています

## 制約事項 {#Constraints}

- 本機能はエンタープライズプランのProjectでのみ利用することが出来ます
- IPアドレスはIPv4形式のみ対応しています
- 一つのProjectにつき、最大32個までのIPアドレスを追加できます

## 申し込み方法 {#Application}

1. enebularにサインイン後、ユーザー名をクリックして表示されるメニューより「Support」をクリックするとSupportフォームが表示されます
1. 「Choose a Project」には利用したいProject名を選択します
1. 「Company (optional)」には企業名を入力します
1. 「Subject」には件名「ProjectのIP制限変更依頼」を入力します
1. 「Message」には以下の情報を入力します
    - 変更区分
      - 「新規」・「更新」・「利用停止」のいずれか
    - 新規の場合：アクセスを許可するIPアドレス
    - 更新の場合：変更前IPアドレス、変更後IPアドレス
    - 利用停止の場合：「利用停止依頼」を記入してください。登録されているすべてのIPアドレスを削除します
1. 入力した内容を確認し、問題なければSubmitボタンを押下してください

※ 申し込み方法について、ご不明な点がございましたら support@enebular.com までお問い合わせください。

## 申し込み記入例

```
Choose a Project:機能を有効にしたいProject名を選択
Company (optional):株式会社○○
Subject:ProjectのIP制限変更依頼
Message:
新規の場合
10.100.20.2,17.200.10.3

更新(242.33.1.33のIPアドレスを追加する)の場合
変更前IPアドレス:10.100.20.2,17.200.10.3
変更前IPアドレス:10.100.20.2,17.200.10.3,242.33.1.33

更新(17.200.10.3のIPアドレスを変更する)の場合
変更前IPアドレス:10.100.20.2,17.200.10.3
変更後IPアドレス:10.100.20.2,17.200.11.55

更新(17.200.10.3のIPアドレスを削除する)の場合
変更前IPアドレス：10.100.20.2,17.200.10.3
変更後IPアドレス：10.100.20.2

利用停止の場合
利用停止依頼
```