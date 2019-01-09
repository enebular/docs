---
lastUpdated: 2018-08-09
---

# データを返す Lambda の作成 {#データを返す Lambda の作成}

Lambda の作成を始めます。



![CreateLambdaFunction-CreateLambdaFunction-lambda-ja](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-lambda-ja.png)

一から作成で Node.js バージョン 6 で Lambda を作成します。

![CreateLambdaFunction-authorFromScratch-ja](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-authorFromScratch-ja.png)

Daterange picker の開始日時と終了日時は `start` と `end` というパラメータで渡されるので、以下のようなコードを作成します。

![CreateLambdaFunction-testLambda-ja](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-testLambda-ja.png)

```javascript
exports.handler = (event, context, callback) => {
  const timeunit = (Number(event.end) - Number(event.start))/100
  const category = ['A', 'B', 'C', 'D']
  const result = (function () {
    let arr = []
    for (var i = 100; i >= 1; i--) {
      arr.push({
        ts: Number(event.start) + Math.floor(timeunit*i),
        category:category[Math.floor(Math.random()*4)],
        value: Math.floor(Math.random()*10)
      })
    }
    return arr
  })()
  callback(null, result);
};
```

次に作成した Lambda 関数につながる API Gateway を作成します。

![CreateLambdaFunction-amazonApiGgateway-ja](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-amazonApiGgateway-ja.png)

新しい API で作成します。

![CreateLambdaFunction-newApi-ja](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-newApi-ja.png)

新しいリソースを作成します。

![CreateLambdaFunction-newResource-ja](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-newResource-ja.png)

適当なパス名を入力して、「API Gateway CORS を有効にする」にチェックを入れます。

![CreateLambdaFunction-newResourceChild-ja](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-newResourceChild-ja.png)

リソースを作成したら、GET メソッドを作成します。

![CreateLambdaFunction-createGetMethod-ja](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-createGetMethod-ja.png)

メソッドのセットアップをします。作成した Lamnda 関数を選択します（Lamdbaを作成したリージョンを選択しないと出てきません）。

![CreateLambdaFunction-setupMethod-ja](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-setupMethod-ja.png)

作成したらまずは「メソッドレスポンス」を変更します。

![CreateLambdaFunction-methodResponse-ja](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-methodResponse-ja.png)

200 のレスポンスヘッダーに「Access-Control-Allow-Origin」を追加します。

![CreateLambdaFunction-200Header-ja](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-200Header-ja.png)

次に「統合レスポンス」を変更します。

![CreateLambdaFunction-intergrationResponse-ja](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-intergrationResponse-ja.png)

「Access-Control-Allow-Origin」」に `'*'` を追加します。

![CreateLambdaFunction-accessControl-ja](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-accessControl-ja.png)

最後に「統合リクエスト」を変更します。

![CreateLambdaFunction-intergrationRequest-ja](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-intergrationRequest-ja.png)

以下のように「本文マッピングテンプレート」を「`application/json`」で以下のようなマッピングを作成します。

```json
{
  "start": "$input.params('start')",
  "end": "$input.params('end')"
}
```

![CreateLambdaFunction-bodyMapping-ja](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-bodyMapping-ja.png)

ここまで終わったら最後に「APIのデプロイ」をします。

![CreateLambdaFunction-deployApi-ja](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-deployApi-ja.png)

適当な名前をつけてデプロイします。

![CreateLambdaFunction-deployName-ja](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-deployName-ja.png)

URL の呼び出しの URL に 今回作成したリソース名 `/test` をつけたものが DataSource で登録する endpoint になります。画像の例だと以下になります。

```
https://*********.execute-api.ap-northeast-1.amazonaws.com/teststage/test
```

![CreateLambdaFunction-exampleEndpoint-ja](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-exampleEndpoint-ja.png)
