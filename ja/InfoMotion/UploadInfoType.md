---
lastUpdated: 2017-12-14
---

# InfoType を enebular へのアップロード

`infomotion-tool` を使ってパッケージしたものを enebular にアップロードできます。

enebular の管理画面にて `InfoType` を選択し、右下の + を押します。

![](../_asset/images/InfoMotion/enebular-developers-upload-infomotion.png)

パッケージした `target` フォルダにある `plugin.js`、`plugin.css`、`plugin.json`をドラッグ＆ドロップして、カテゴリを選択してアップロードします。

アップロードが完了したら、`plugin.json` で指定したスキーマとサンプルデータをもとにプレビューが表示されます。

![](../_asset/images/InfoMotion/enebuar-developer-uploaded-infotype.png)

グラフの型ができたので、次は [DataSource](./CreateDataSource.md) で enebular への DataSource の追加の仕方を学びましょう。
