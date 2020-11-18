# 使用状況 {#Usage Information}

自分のアカウントにおけるenebularの使用状況を確認できます。  
確認するには、右上のユーザーメニューをクリックして、"Usage Information" を選択します。

タブ毎に下記のカテゴリの使用状況を確認できます。

- Projects
- Licenses
- Flows
- Files
- AI Models
- InfoTypes
- Log Exports
- Private Nodes
- Published Private Nodes

各カテゴリの使用状況は以下3つのカラムで確認できます。
- 今月の追加量
- 先月の追加量
- Current State (現在の使用状況)

ログインしているユーザが、OwnerもしくはAdminの権限を持っているすべてのプロジェクトが使用状況の計算対象です。

デプロイ結果に関する使用状況が反映されるまでには、デプロイが実行されてから1時間程度時間を要することがあります。

## Projects

Projectsの使用状況は下記となります。

- Projects (Free)  
  無料プロジェクトの数
- Projects (Enterprise)  
  有料プロジェクトの数

Current State欄には現在の無料と有料プロジェクトの数を表示します。

注意：今月にProject (Free)を作成して、そのProjectをProject (Enterprise)に有料化すると、今月Project (Free)の数は0、Project (Enterprise)の数は1とカウントされます。もし先月にProject (Free)を作成して、今月Project (Enterprise)に変更すると、先月のProject (Free)の数は1、Project (Enterprise)の数は0とカウントされ、今月のProject (Free)の数は0、Project (Enterprise)の数は1にカウントされます。

## Licenses

Licensesの使用状況は下記となります。

- Issued  
  発行したライセンスの数
- Registered  
  登録済みのライセンスの数
- Deleted  
  削除済みのライセンスの数

すべてのプロジェクトの累計(All Projects)と各プロジェクト(Project Name)毎に使用状況を表示します。

Current State欄は現在の各ライセンスの使用状況を表示します。

注意：もし同じ月に1つのライセンスがIssued, Registered, Deletedに変更した場合、その月の表示は1 Issued, 1 Registered, 1 Deletedとなります。このライセンスがプロジェクトの唯一のライセンスであった場合、Current Stateは、0 Issued, 0 Registered, 1 Deletedとなります。

## Flows

Flowの使用状況は下記となります。

- Count  
  Flowの数
- Deploy Count  
  AWS IoT, Pelion, Heroku, AWS Lambdaに対して成功したフローデプロイの合計回数
- Data Transfer Out  
  成功したフローデプロイを行った際にデプロイ先に対して出力したデータの合計サイズ
- Deploy to Devices  
  AWS IoTやPelionのデバイスに対して成功したフローデプロイの合計回数
- Scheduled Deploy to Devices
  スケジュールされたAWS IoTやPelionのデバイスに対して成功したフローデプロイの合計回数
- Start Flow  
  成功したStart Flowの合計回数
- Stop Flow  
  成功したStop Flowの合計回数
- Scheduled Start Flow  
  スケジュールされて成功したStart Flowの合計回数
- Scheduled Stop Flow  
  スケジュールされて成功したStop Flowの合計回数

すべてのプロジェクトの累計(All Projects)と各プロジェクト(Project Name)毎に使用状況を表示します。

Current State欄は現在のFlowの使用状況を表示します。

## Files

Fileの使用状況は下記となります。

- Count  
  Fileの数
- Storage  
  すべてのファイルと各ファイルのバーションのデータストレージの合計サイズ
- Deploy Count  
  成功したファイルデプロイの合計回数
- Data Transfer Out  
  成功したファイルデプロイで出力したデータの合計サイズ
- Deploy to Devices  
  AWS IoTやPelionのデバイスに対して成功したファイルデプロイの合計回数
- Scheduled Deploy to Devices  
  スケジュールされて成功したファイルデプロイの合計回数

すべてのプロジェクトの累計(All Projects)と各プロジェクト(Project Name)毎に使用状況を表示します。

Current State欄は現在のFileの使用状況を表示します。

注意：Storageは当月のファイルの最大サイズに基づいて計算されます。たとえば、あるファイルをより小さいサイズのファイルに更新したとしてもその月のStorageは元の大きいサイズの方に基づいて計算します。次月以降は、更新された小さいサイズに基づいて計算します。

## AI Models

AI Modelの使用状況は下記となります。

- Count  
  AI modelsの数
- Storage  
  すべてのAI Modelと各AI Modelのバーションのデータストレージの合計サイズ
- Deploy Count  
  成功したAI Modelデプロイの合計回数
- Data Transfer Out  
  成功したAI Modelデプロイで出力したデータの合計サイズ
- Deploy to Devices  
  AWS IoTやPelionのデバイスに対して成功したAI Modelデプロイの合計回数
- Scheduled Deploy to Devices  
  スケジュールされて成功したAI Modelデプロイの合計回数

すべてのプロジェクトの累計(All Projects)と各プロジェクト(Project Name)毎に使用状況を表示します。

Current State欄は現在のAI modelの使用状況を表示します。

注意：Storageは当月のAI Modelの最大サイズに基づいて計算されます。たとえば、あるAI Modelをより小さいサイズのAI Modelに更新したとしてもその月のStorageは元の大きいサイズの方に基づいて計算します。次月以降は、更新された小さいサイズに基づいて計算します。

## InfoTypes

InfoTypeの使用状況は下記となります。

- Count  
  InfoTypesの数
- Storage  
  すべてのInfoTypeのデータストレージの合計サイズ

すべてのプロジェクトの累計(All Projects)と各プロジェクト(Project Name)毎に使用状況を表示します。

Current State欄は現在のInfoTypeの使用状況を表示します。

注意：Storageは当月のInfoTypeの最大サイズに基づいて計算されます。たとえば、あるInfoTypeをより小さいサイズのInfoTypeに更新したとしてもその月のStorageは元の大きいサイズの方に基づいて計算します。次月以降は、更新された小さいサイズに基づいて計算します。

## Log Exports

ログExport機能の使用状況は下記となります。

- Count  
  ログExport機能の実行回数
- Zip Size  
  ログExportを実行した結果生成したZIPファイルの合計サイズ

すべてのプロジェクトの累計(All Projects)と各プロジェクト(Project Name)毎に使用状況を表示します。

Current State欄はこれまでのログExport機能の使用状況を表示します。

## Asset Imports/Exports

Asset Imports/Exports機能の使用状況は下記となります。

- Import Count  
  Importの実行回数(注1)
- Import Zip Size  
  Import時にアップロードしたZIPファイルの合計サイズ(注1)
- Export Count  
  Exportの実行回数(注2)
- Export Zip Size  
  Exportを実行した結果生成したZIPファイルの合計サイズ(注2)

(注1) Assetを1つもImportできなかった場合には加算しません  
(注2) Assetを1つもExportできなかった場合には加算しません  

すべてのプロジェクトの累計(All Projects)と各プロジェクト(Project Name)毎に使用状況を表示します。

Current State欄はこれまでのAsset Imports/Exports機能の使用状況を表示します。

## Private Nodes

Private Nodesの使用状況は下記となります。  
Private Nodesでは、プライベートノードを使用したフローをどのデプロイ先で使用したのかを表示します。
簡潔に記述するために、以降では”プライベートノードを使用したフローをデプロイすること”を、”プライベートノードのデプロイ”と記述しています。

プライベートノードは、`<パッケージ名>@<パッケージバージョン>`の形式で表示します。

- Connection  
  デプロイ先のコネクション名です
- Deploy Target  
  デプロイ先の名前です
- <今月>  
  ConnectionとDeploy Targetで表すデプロイ先に今月デプロイした回数です
- <先月>  
  ConnectionとDeploy Targetで表すデプロイ先に先月デプロイした回数です
- Total  
  ConnectionとDeploy Targetで表すデプロイ先にこれまでデプロイした合計回数です
- Current State  
  ConnectionとDeploy Targetで表すデプロイ先に現在デプロイされているかどうかを表します
    - deployed: デプロイされていることを表します
    - not deployed: デプロイされていないことを表します

以下のデプロイ先は表示しません。

- プライベートノードをデプロイしたことがないデプロイ先
- プライベートノードをデプロイしたことがあるが現在デプロイされておらず(Current Stateがnot deployed)、先月も今月もデプロイを一度もしていないデプロイ先

## Published Private Nodes

Discoverに公開したプライベートノード(Published Private Nodes)の使用状況は下記となります。

プライベートノードは、`<パッケージ名>@<パッケージバージョン>`の形式で表示します。

- Import Count  
  プライベートノードがプロジェクトにインポートされた回数です
    - <今月>  
      今月にプライベートノードがインポートされた回数です
    - <先月>  
      先月にプライベートノードがインポートされた回数です
    - Current State  
      画面を表示した時点で、プライベートノードがインポートされているプロジェクト数です(プライベートノードがプロジェクトから削除された場合減算します)
- Deploy Target Count  
  プライベートノードがデプロイされたデプロイ先の数です
    - <今月>  
      今月初めにデプロイ済みのデプロイ先数に加え、今月初めにデプロイされていなかったデプロイ先に対してデプロイされた場合に加算します。同月に、そのデプロイ先に対してプライベートノードを含まないフローがデプロイされても減算しません
    - <先月>  
      先月初めにデプロイ済みのデプロイ先数に加え、先月初めにデプロイされていなかったデプロイ先に対してデプロイされた場合に加算します。同月に、そのデプロイ先に対してプライベートノードを含まないフローがデプロイされても減算しません
    - Current State  
      画面を表示した時点で、プライベートノードをデプロイ済みのデプロイ先数です
- Deploy Count  
  プライベートノードがデプロイされた回数です
    - <今月>  
      今月にプライベートノードがデプロイされた回数です
    - <先月>  
      先月にプライベートノードがデプロイされた回数です
    - Current State  
      プライベートノードをDiscoverに公開してから、画面を表示した時点までにデプロイされた回数です
