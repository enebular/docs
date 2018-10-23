---
lastUpdated: 2018-10-23
---

# Other Assets Deploy

**Other Assets Deploy** は enebular agent に対してフロー以外のアセット(Other Assets)をデプロイする機能です。

Other Assetsとは、以下を指します。

- enebular-agent 用の実行ファイル
- enebular-agent で使用する設定ファイル
- enebular-agentで使用するその他のファイル（画像ファイル、動画ファイルなど）

Other Assets Deploy の画面で下記の項目を指定し、デプロイを行います。

- Other Assets のパス
- デバイスID
- デプロイ・フック設定

## Other Assets のパス

デプロイ対象となるファイルのパスを指定します。

制約は下記のとおりです。

- 形式
    - ファイル形式に、特に制約はありません
- デプロイ可能な最大サイズ
    - 500MBytes
- 個数
    - 同時にデプロイ可能な数は1アセットです
- デプロイ先フォルダ
    - Other Assetsの保存先フォルダを指定します
        - enebular-agent : (root)/assets/ 以下の自由なパス
            - パスの指定は、(root)/assets/以下のフォルダ名とファイル名です（e.g. hoge/hige.txtを指定すると、(root)/assets/hoge/hige.txtとして保存されます）
            - 指定できるパスは絶対パスで128文字以下とします
            - 存在しないフォルダが指定されている場合は、フォルダを作成します
            - rootは、enebular-runtime-agentのインストール先フォルダを示します

## デバイスID

デプロイ先となるデバイスを指定します。
コネクションを選択し、コネクションに紐づくデバイスIDの中から選択します。

コネクションに関する詳細については [Connections](./../Config/Connections.md) を参照してください。

## デプロイ・フック設定

デプロイ・フックの設定を行います。

デプロイ・フック機能とは、デプロイした Other Assets が実行ファイルだった場合に、デプロイした実行ファイルを実行する機能です。
デプロイ・フック機能を利用することで、（NPM等のOSS向けリポジトリを使用せずに）ノードのインストールを行ったり、実行ファイルをデプロイすることで新しい機能を追加することができるようになります。

設定項目は下記のとおりです。

- Pre-Process
- Execution
- Post-Process
- Maximum Execution time

### Pre-Process

デプロイの実施前に、Pre-Processとしてデプロイ済みのAssetを実行します。
Assetが指定されない場合は、Pre-Processは実行されません。
Defaultは、Asset指定なしとします。

e.g.)デプロイ実施前に、デプロイ先フォルダの不要なファイルを削除する処理を行うシェルスクリプトを実行する

### Execution

デプロイしたAssetを実行ファイルみなして実行します。

- Trueの場合
    - デプロイしたOther Assetsを実行ファイルとみなして実行します
    - このとき、enebular-runtime-agentと同じユーザーとして、実行します
- Falseの場合
    - デプロイ後の実行処理は行いません
    - Defaultでは、Falseが選択されます

### Post-Process

デプロイの実施後に、Post-Processとしてデプロイ済みのAssetを実行します。
Assetが指定されない場合は、Post-Processは実行されません。
Defaultは、Asset指定なしとします。

e.g.)デプロイ実施後に、デプロイ先フォルダの不要なファイルを削除する処理を行うシェルスクリプトを実行する

### Maximum Execution time

Pre-Process / Execution / Post-Process の最大実行時間を設定します。
指定できる時間は、秒単位で0〜300秒(5分)とします。
Defaultは10秒とします。

最大実行時間を経過しても、Pre-Process / Execution / Post-Processで指定されたAssetの実行が続いている場合は、強制的に処理を停止します。

## デプロイ結果

デプロイの成功、失敗を通知します。

- 成功：デプロイ対象のファイルが、指定のフォルダに保存された
- 失敗：デプロイ対象のファイルが、指定のフォルダに保存されなかった
    ファイルサイズが大きすぎる場合、フォルダの指定が不適切であった場合、ストレージ容量が不足していた場合、通信の問題でファイルがデプロイできなかった場合、など

## デプロイ・フック結果

### Pre-Process

Deploy HookでPre-Processが指定されていた場合（実行対象のAssetが指定されていた場合）、実行結果を通知します。
Deploy HookでPre-Processが指定されていない場合、実行結果は通知しません。

- 成功： Pre-Processの対象のAssetを実行ファイルとみなして実行し、実行結果が成功(コマンドの戻り値が0)の場合
- 失敗： Pre-Processの対象のAssetが実行できなかった場合、または実行できたが、実行結果がエラー(コマンドの戻り値が0以外)の場合
最大実行時間を超過して、Pre-Processの実行が強制終了された場合は、失敗とします

### Execution

Deploy HookでExecutionが指定されていた場合（設定がTrueの場合）、実行結果を通知します。Deploy Hookで実行の設定がFalseの場合、実行結果は通知しません。

- 成功： DeployされたAssetを実行ファイルとみなして実行し、実行結果が成功(コマンドの戻り値が0)の場合
- 失敗： DeployされたAssetが実行できなかった場合、または実行できたが、実行結果がエラー(コマンドの戻り値が0以外)の場合
Deployの結果が失敗の場合で、かつ実行の設定がTrueの場合は、無条件に実行結果を失敗とします
最大実行時間を超過して、Assetの実行が強制終了された場合は、失敗とします

### Post-Process

Deploy HookでPost-Processが指定されていた場合（実行対象のAssetが指定されていた場合）、実行結果を通知します。
Deploy HookでPost-Processが指定されていない場合、実行結果は通知しません。

- 成功： Post-Processの対象のAssetを実行ファイルとみなして実行し、実行結果が成功(コマンドの戻り値が0)の場合
- 失敗： Post-Processの対象のAssetが実行できなかった場合、または実行できたが、実行結果がエラー(コマンドの戻り値が0以外)の場合
最大実行時間を超過して、Pre-Processの実行が強制終了された場合は、失敗とします

## Note

Other Assetsのデプロイができるのは、プロジェクトのOwner/Adminのみです。Collaboratorはデプロイできません。
信頼できるユーザーにのみOther Assetsデプロイを許可することで、信頼できないAssetsのデプロイ操作を防止します。