---
lastUpdated: 2018-08-07
---

### ローカル環境での使用に際して

milkcocoa のDataSource をローカル環境で使用するには、http サーバーからサーブする必要があります。
Node.js, npm を使用し、 ローカル環境の `index.html` に npm モジュール [http-server](https://www.npmjs.com/package/http-server) を用いることをお勧めします。

あるいは、python module の `SimpleHTTPServer` を使う方法があります。
ターミナルでルートディレクトリの上で`python -m SimpleHTTPServer 8000` を実行してください。
詳しくは、[Simple HTTP request handler](https://docs.python.org/2/library/simplehttpserver.html)をご覧ください。