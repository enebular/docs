# Action History {#Action History}

Action History には、実行した Action の履歴が表示されます。
本機能は、エンタープライズプラン（有料プラン）のプロジェクトでのみ利用可能です。

Action には、次の種類のタイプがあります。

- Flow Deploy
- File Deploy
- AI Deploy
- Start Flow
- Stop Flow
- Start Remote M.
- Stop Remote M.

複数のデバイスに対する Flow のデプロイは、1 つの Action と見なされます。
例えば、デバイスリストから選択した 3 つのデバイスに対する Flow のデプロイは、1 つの Action (Flow Deploy) となります。

単一の Action History の項目には、Action 実行時の概要と次の情報が表示されます。

- Action Type
- Asset Name (Asset の Deploy に関する Action Type の場合のみ)
- Asset Version (Asset の Deploy に関する Action Type の場合のみ)
- Target Count
- Status
- Connection Name
- Triggered By
- Requested Time
- Scheduled Time
- Status Last Updated Time

**Status**

| 状態名     | 説明                                                         |
| ---------- | ------------------------------------------------------------------- |
| Successful | 複数のデバイスに対して実行した Action が全て成功した場合            |
| Failed     | 複数のデバイスに対して実行した Action が少なくとも 1 つ失敗した場合 |
| Processing | 複数のデバイスに対して実行した Action が完了していない場合          |

## Action History Detail

単一の Action History の項目をクリックすると、Action History 詳細ページに遷移します。
このページは、複数のデバイスが対象となっている Action について、個々のデバイスについて実行結果を知りたい場合に有用です。

Action History 詳細ページは、次の情報を提供します。

- Device Name
- Status
- Requested Time
- Status Last Updated Time
- Summary of the Action
  - Action Type
  - Asset Name (Asset の Deploy に関する Action Type の場合のみ)
  - Asset Version (Asset の Deploy に関する Action Type の場合のみ)
  - Connection Name
  - Connection Type
  - Triggered By
  - Device Count
  - Success
  - Failed
  - Processing

再度デプロイを行いたい場合、この画面に表示される`Redeploy`ボタンを押すことで実行できます(Start Flow/Stop Flow の再実行はできません)。
`Redeploy`ボタンを押すとデプロイ対象を選択するためのダイアログを表示します。ここで再デプロイが必要な Target をチェックし、ダイアログの`Redeploy`ボタンを押すと再度デプロイを実施します。

**Status**

| 状態名          | 説明                                                         |
| --------------- | ------------------------------------------------------------------- |
| Requested       | アクションをデバイス対してリクエストした状態 |
| Deploy Pending  | デプロイが保留されている状態 |
| Deploying       | Flow deploy, File deploy, AI deploy が実行中 |
| Deployed        | Flow deploy, File deploy, AI deploy に成功 |
| Deployed Failed | Flow deploy, File deploy, AI deploy に失敗 |
| Executed        | Start Flow または Stop Flow に成功 |
| Success         | Start Remote M.または Stop Remote M. に成功 |
| Failed          | Start Flow, Stop Flow，Start Remote M., Stop Remote M. に失敗 |
| Overridden      | すでにアクションが実行中の場合に、同じデバイスに対して他のアクションが実行された状態 |

# Scheduled Actions {#Scheduled Actions}

Action History のページ右上にある `Scheduled` タブをクリックすると、Scheduled Actions ページに遷移します。

ユーザは、Devices ページで Scheduled Action を作成することができます。

実行時間をスケジュールされた Action がここに表示されます。Scheduled Action が実行される時間になると、自動的に Scheduled Actions ページから Action History ページに Action が移動されます。

単一の Scheduled Action 項目は次の情報を提供します。

- Action Type
- Asset Name (Asset の Deploy に関する Action Type の場合のみ)
- Asset Version (Asset の Deploy に関する Action Type の場合のみ)
- Scheduled Time
- Device Count
- Connection Name
- Triggered By
- Requested Time
- スケジュール済みの Action をキャンセルするオプション \*1

\*1 Scheduled Action は、スケジュール実行される時間の 5 分前までキャンセルすることが可能です。

## Scheduled Action Detail

単一の Scheduled Action 項目をクリックすると、Scheduled Action 詳細ページに遷移します。このページは、複数のデバイスが対象となっている Action について、個々のデバイスの詳細を知りたい場合に有用です。

Scheduled Action 詳細ページは次の情報を提供します。

- Device Name
- Status
- Requested Time
- Summary of the Action
  - Action Type
  - Scheduled Time
  - Asset Name (Asset の Deploy に関する Action Type の場合のみ)
  - Asset Version (Asset の Deploy に関する Action Type の場合のみ)
  - Connection Name
  - Connection Type
  - Triggered By
  - Device Count

**Status**

| 状態名     | 説明                                                         |
| ---------- | ------------------------------------------------------------------- |
| Scheduled  | アクションが予定されている状態 |