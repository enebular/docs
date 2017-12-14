# API Gateway DataSource の作成方法

API Gateway を DataSource として利用する例を紹介します。

## データを返す Lambda の作成

Lambda の作成を始めます。

![](https://i.gyazo.com/1c057d147b93feae377f657204eb5c01.png)

一から作成で Node.js バージョン 6 で Lambda を作成します。

![](https://i.gyazo.com/98c9877f027e35961b427415bb753eb6.png)

Daterange picker の開始日時と終了日時は `start` と `end` というパラメータで渡されるので、以下のようなコードを作成します。

![](https://i.gyazo.com/49a7573134c5a1f82b68020797dcae81.png)

```javascript
exports.handler = (event, context, callback) => {
  const timeunit = (Number(event.end) - Number(event.start))/100
  const lang = ['EN', 'CN', 'JP']
  const result = (function () {
    let arr = []
    for (var i = 100; i >= 1; i--) {
      arr.push({
        created: Number(event.start) + Math.floor(timeunit*i),
        lang: lang[Math.floor(Math.random()*3)],
        value: Math.floor(Math.random()*50)
      })
    }
    return arr
  })()
  callback(null, result);
};
```

次に作成した Lambda 関数につながる API Gateway を作成します。

![](https://i.gyazo.com/979e51b229051129c7ace8c66836c2b8.png)

新しい API で作成します。

![](https://i.gyazo.com/dfa518dae0017cc26d2839809cf03b00.png)

新しいリソースを作成します。

![](https://i.gyazo.com/20a42e33162b2a918aca8d2703844790.png)

適当なパス名を入力して、「API Gateway CORS を有効にする」にチェックを入れます。

![](https://i.gyazo.com/0e616a11df2bc002768690aa1ce1879b.png)

リソースを作成したら、GET メソッドを作成します。

![](https://i.gyazo.com/5fdd0c0541b08fab7967582982569f81.png)

メソッドのセットアップをします。作成した Lamnda 関数を選択します（Lamdbaを作成したリージョンを選択しないと出てきません）。

![](https://i.gyazo.com/31025412fe3e3321f8dcf5cfa8f14e52.png)

作成したらまずは「メソッドレスポンス」を変更します。

![](https://i.gyazo.com/a9e312bc56d8261017efd8561fbf6573.png)

200 のレスポンスヘッダーに「Access-Control-Allow-Origin」を追加します。

![](https://i.gyazo.com/0f6d3d0dfa13de11d21a42e982b4683c.png)

次に「統合レスポンス」を変更します。

![](https://i.gyazo.com/c0193f1d651772e7f3d9a7f0fb0512b2.png)

「Access-Control-Allow-Origin」」に `'*'` を追加します。

![](https://i.gyazo.com/24dcdcb2a151bd33880f6917ea91adda.png)

最後に「統合リクエスト」を変更します。

![](https://i.gyazo.com/6a0d5e2f7dad9bde8b3e65d37149c699.png)

以下のように「本文マッピングテンプレート」を「`application/json`」で以下のようなマッピングを作成します。

```json
{
  "start": "$input.params('start')",
  "end": "$input.params('end')"
}
```

![](https://i.gyazo.com/e30d486c80e2625eaa08a20317a5aa9e.png)

ここまで終わったら最後に「APIのデプロイ」をします。

![](https://i.gyazo.com/5c8dba2776ef2a5f3caf3a548ee21a89.png)

適当な名前をつけてデプロイします。

![](https://i.gyazo.com/228265a618a98400583ee36e12358155.png)

URL の呼び出しの URL に 今回作成したリソース名 `/test` をつけたものが DataSource で登録する endpoint になります。画像の例だと以下になります。

```
https://*********.execute-api.ap-northeast-1.amazonaws.com/teststage/test
```

https://i.gyazo.com/bf0452fd54e62bc5bed17c5188a2c94b.png

次に API Key を作成します。

![](https://i.gyazo.com/5490f6bd768fa1cbe74a61c40ce7c817.png)

適当な名前をつけて作成します。

![](https://i.gyazo.com/9a3d96daf0ab0c7afedc76db10bb7842.png)

作成したら API キーの文字列を DataSource で登録する apikey になります。

![](https://i.gyazo.com/47f21c40c9533086f70fd62b44c7fb1a.png)
