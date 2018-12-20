---
lastUpdated: 2018-12-06
---

# Sample Flows
enebular-edge-agentを使用したSample Flowです。市販のセンサやアクチュエータを使用したフローも含まれます。

herokuへのフローデプロイなど、enebularのGettingStaredを一通り終えた方に向けたドキュメントとなっています。

### Table of Contents
- [スイッチを使用してLEDが明滅するフロー](#switchLchika)
- [ブラウザから遠隔でLEDを操作するフロー](#cloudLchika)
    - herokuの環境を使用します。
- [センサーデータをクラウドストレージに入れるフロー](#sensorData)
    - herokuの環境を使用します。
    - Firebaseを使用します。

## スイッチを使用してLEDが明滅するフロー{#switchLchika}

USER SWを押すことによってUSER LEDが点灯し、もう一度押すと消灯します。

![SampleFlows-switchLchika-flow](./../../img/EnebularEdgeAgent/SampleFlows-switchLchika-flow.png)

```json
[{"id":"a6b5ddfd.fd473","type":"digitalout","z":"50c4866d.310dd8","board":"SBBv2","pin":"ULED","value":"false","si":false,"name":"","x":460,"y":60,"wires":[["7311d2ef.40d6bc"]]},{"id":"b128a7e8.fc3458","type":"digitalout","z":"50c4866d.310dd8","board":"SBBv2","pin":"ULED","value":"true","si":false,"name":"","x":460,"y":140,"wires":[["8139d6ac.21c748"]]},{"id":"7311d2ef.40d6bc","type":"change","z":"50c4866d.310dd8","name":"","rules":[{"t":"set","p":"led","pt":"flow","to":"false","tot":"bool"}],"action":"","property":"","from":"","to":"","reg":false,"x":630,"y":60,"wires":[[]]},{"id":"8139d6ac.21c748","type":"change","z":"50c4866d.310dd8","name":"","rules":[{"t":"set","p":"led","pt":"flow","to":"true","tot":"bool"}],"action":"","property":"","from":"","to":"","reg":false,"x":630,"y":140,"wires":[[]]},{"id":"26aec5d4.7acd2a","type":"interruptin","z":"50c4866d.310dd8","board":"SBBv2","pin":"USWITCH","mode":3,"trigger":"rise","name":"","x":140,"y":100,"wires":[["f79134f4.66aa98"]]},{"id":"f79134f4.66aa98","type":"switch","z":"50c4866d.310dd8","name":"","property":"led","propertyType":"flow","rules":[{"t":"true"},{"t":"else"}],"checkall":"true","repair":false,"outputs":2,"x":290,"y":100,"wires":[["a6b5ddfd.fd473"],["b128a7e8.fc3458"]]}]
```
<!-- 
[こちら]()からimportできます。
-->

### Plus One

市販のGroveモジュールを使って、inputやoutputを容易に変更できます。

* Groveのスイッチ系のモジュールをinputとして使用をする場合は、interruptInノードのPortを該当する値に変更してください。
* GroveのLEDモジュールなどをoutputとして使用する場合は、digitalOutノードのPortを該当する値に変更してください。

![SampleFlows-switchLchika-setting](./../../img/EnebularEdgeAgent/SampleFlows-switchLchika-setting.png)
※画像はinterruptInノードのものです。

！！！！！！！！！！　一例書く？？　！！！！！！！！！！！！


## ブラウザから遠隔でLEDを操作するフロー{#cloudLchika}

![SampleFlows-cloudLchika-image](./../../img/EnebularEdgeAgent/SampleFlows-cloudLchika-image.jpg)
<!--あとで差し替え-->

heroku上にデバイスを管理するappを構築し、その状態によってLEDが明滅するフローです。
appの状態は、任意のブラウザから変更できます。

### heroku

heroku上に、デバイスが接続するappを用意します。

![SampleFlows-cloudLchika-heroku](./../../img/EnebularEdgeAgent/SampleFlows-cloudLchika-heroku.png)

```json
[{"id":"66eb935a.f88e7c","type":"http in","z":"1fd4c161.fd62af","name":"","url":"/set_value","method":"get","upload":false,"swaggerDoc":"","x":120,"y":120,"wires":[["8034fd7c.f4426"]]},{"id":"2a5cadf0.9d0fb2","type":"http response","z":"1fd4c161.fd62af","name":"","statusCode":"","headers":{},"x":650,"y":120,"wires":[]},{"id":"ae07f97e.2de818","type":"http in","z":"1fd4c161.fd62af","name":"","url":"/get_value","method":"get","upload":false,"swaggerDoc":"","x":120,"y":260,"wires":[["b7ce1491.6abf18"]]},{"id":"b7ce1491.6abf18","type":"change","z":"1fd4c161.fd62af","name":"","rules":[{"t":"set","p":"payload","pt":"msg","to":"value","tot":"flow"}],"action":"","property":"","from":"","to":"","reg":false,"x":340,"y":260,"wires":[["9ebfe90a.806638"]]},{"id":"9ebfe90a.806638","type":"http response","z":"1fd4c161.fd62af","name":"","statusCode":"","headers":{},"x":510,"y":260,"wires":[]},{"id":"8034fd7c.f4426","type":"change","z":"1fd4c161.fd62af","name":"","rules":[{"t":"set","p":"value","pt":"flow","to":"payload.v","tot":"msg"},{"t":"set","p":"value","pt":"msg","to":"value","tot":"flow"}],"action":"","property":"","from":"","to":"","reg":false,"x":340,"y":120,"wires":[["29e97041.36b48"]]},{"id":"bbda544.15caea8","type":"comment","z":"1fd4c161.fd62af","name":"デバイスに渡すvalue","info":"","x":140,"y":200,"wires":[]},{"id":"5121db03.1ed064","type":"comment","z":"1fd4c161.fd62af","name":"valueをsetされる","info":"","x":120,"y":40,"wires":[]},{"id":"29e97041.36b48","type":"function","z":"1fd4c161.fd62af","name":"","func":"msg.payload = \"set value! -> [\" + msg.value + \"]\";\nreturn msg;","outputs":1,"noerr":0,"x":510,"y":120,"wires":[["2a5cadf0.9d0fb2"]]}]
```
<!-- jsonata使えるなら
```json
[{"id":"66eb935a.f88e7c","type":"http in","z":"1fd4c161.fd62af","name":"","url":"/set_value","method":"get","upload":false,"swaggerDoc":"","x":120,"y":120,"wires":[["8034fd7c.f4426"]]},{"id":"2a5cadf0.9d0fb2","type":"http response","z":"1fd4c161.fd62af","name":"","statusCode":"","headers":{},"x":510,"y":120,"wires":[]},{"id":"ae07f97e.2de818","type":"http in","z":"1fd4c161.fd62af","name":"","url":"get_value","method":"get","upload":false,"swaggerDoc":"","x":120,"y":260,"wires":[["b7ce1491.6abf18"]]},{"id":"b7ce1491.6abf18","type":"change","z":"1fd4c161.fd62af","name":"","rules":[{"t":"set","p":"payload","pt":"msg","to":"value","tot":"flow"}],"action":"","property":"","from":"","to":"","reg":false,"x":340,"y":260,"wires":[["9ebfe90a.806638"]]},{"id":"9ebfe90a.806638","type":"http response","z":"1fd4c161.fd62af","name":"","statusCode":"","headers":{},"x":510,"y":260,"wires":[]},{"id":"8034fd7c.f4426","type":"change","z":"1fd4c161.fd62af","name":"","rules":[{"t":"set","p":"value","pt":"flow","to":"payload.v","tot":"msg"},{"t":"set","p":"payload","pt":"msg","to":"\"set value! -> [\" & msg.payload.v & \"]\"","tot":"jsonata"}],"action":"","property":"","from":"","to":"","reg":false,"x":320,"y":120,"wires":[["2a5cadf0.9d0fb2"]]},{"id":"bbda544.15caea8","type":"comment","z":"1fd4c161.fd62af","name":"デバイスに渡すvalue","info":"","x":140,"y":200,"wires":[]},{"id":"5121db03.1ed064","type":"comment","z":"1fd4c161.fd62af","name":"valueをsetされる","info":"","x":120,"y":40,"wires":[]}]
```
-->

<!-- 
[こちら]()からimportできます。
-->

`https://[your-heroku-app].herokuapp.com/set_value?v=[value]`にブラウザからアクセスすることで、デバイスを制御するvalueを渡すことができます。

[your-heroku-app]にはデプロイしたheroku appのIDが入ります。herokuの画面やenebularのデプロイ画面で確認できます。

![SampleFlows-cloudLchika-appId](./../../img/EnebularEdgeAgent/SampleFlows-cloudLchika-appId.png)
herokuから確認

![SampleFlows-cloudLchika-appId2](./../../img/EnebularEdgeAgent/SampleFlows-cloudLchika-appId2.png)
deployのリストから確認


アクセスすると「**set value! -> [value]**」が表示されます。

### device

5秒周期でappにアクセスして状態を取得します。

![SampleFlows-cloudLchika-device](./../../img/EnebularEdgeAgent/SampleFlows-cloudLchika-device.png)

```json
[{"id":"15336f68.1058a1","type":"digitalout","z":"ac70de44.7f659","board":"SBBv2","pin":"ULED","value":"true","si":true,"name":"","x":520,"y":60,"wires":[[]]},{"id":"c570eb4.6d5de18","type":"digitalout","z":"ac70de44.7f659","board":"SBBv2","pin":"ULED","value":"false","si":true,"name":"","x":520,"y":140,"wires":[[]]},{"id":"a574145b.221c18","type":"switch","z":"ac70de44.7f659","name":"","property":"payload","propertyType":"msg","rules":[{"t":"eq","v":"true","vt":"str"},{"t":"else"}],"checkall":"true","repair":false,"outputs":2,"x":350,"y":100,"wires":[["15336f68.1058a1"],["c570eb4.6d5de18"]]},{"id":"f9c4432c.5ab6b","type":"inject","z":"ac70de44.7f659","name":"","topic":"","payload":"","payloadType":"date","repeat":"5","crontab":"","once":false,"onceDelay":0.1,"x":130,"y":60,"wires":[["f7104fc7.71c32"]]},{"id":"f7104fc7.71c32","type":"http request","z":"ac70de44.7f659","name":"","method":"GET","ret":"txt","url":"http://[your-heroku-app].herokuapp.com/get_value","tls":"","x":190,"y":100,"wires":[["a574145b.221c18"]]}]
```

<!-- 
[こちら]()からimportできます。
-->

JSONデータをimportしたあと、http requestノードを開き、作成したheroku appのIDに書き換えてください。

![SampleFlows-cloudLchika-deviceHttp](./../../img/EnebularEdgeAgent/SampleFlows-cloudLchika-deviceHttp.png)

デバイスにデプロイ後、`https://[your-heroku-app].herokuapp.com/set_value?v=true`にブラウザからアクセスすると、少し遅れてUSER LEDが点灯します。
また、`https://[your-heroku-app].herokuapp.com/set_value?v=false`にブラウザからアクセスすると、少し遅れてUSER LEDが消灯します。

### Plus One

SlackBotを利用して、`https://[your-heroku-app].herokuapp.com/set_value?v=[value]`へアクセスするフローを追加すれば、ブラウザからではなくSlackから制御することもできます。

![SampleFlows-cloudLchika-slackFlow](./../../img/EnebularEdgeAgent/SampleFlows-cloudLchika-slackFlow.png)

slackの「API Token」、http requestノードの「URL」を自分のものに書き換えてください。
```json
[{"id":"be195e5f.c0068","type":"Slack Bot In","z":"a38fc59f.c0d678","name":"","apiToken":"your-token","channel":"","x":90,"y":140,"wires":[["b5b64af1.81fd48"]]},{"id":"b5b64af1.81fd48","type":"switch","z":"a38fc59f.c0d678","name":"slackのメッセージの判別","property":"payload","propertyType":"msg","rules":[{"t":"cont","v":"ON","vt":"str"},{"t":"cont","v":"OFF","vt":"str"}],"checkall":"true","repair":false,"outputs":2,"x":270,"y":140,"wires":[["d5b9995c.161358","804d5fac.a6ee9"],["dd681792.451928","7040eb7d.ec80f4"]]},{"id":"bed1928d.16612","type":"Slack Bot Out","z":"a38fc59f.c0d678","name":"","apiToken":"your-token","channel":"","x":750,"y":140,"wires":[]},{"id":"804d5fac.a6ee9","type":"change","z":"a38fc59f.c0d678","name":"trueのときのレスポンス","rules":[{"t":"set","p":"payload","pt":"msg","to":"つけたよ！","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":570,"y":120,"wires":[["bed1928d.16612"]]},{"id":"d5b9995c.161358","type":"http request","z":"a38fc59f.c0d678","name":"true","method":"GET","ret":"txt","url":"https://[your-heroku-app].herokuapp.com/set_value?v=true","tls":"","x":370,"y":80,"wires":[[]]},{"id":"dd681792.451928","type":"http request","z":"a38fc59f.c0d678","name":"false","method":"GET","ret":"txt","url":"https://[your-heroku-app].herokuapp.com/set_value?v=false","tls":"","x":370,"y":200,"wires":[[]]},{"id":"7040eb7d.ec80f4","type":"change","z":"a38fc59f.c0d678","name":"falseのときのレスポンス","rules":[{"t":"set","p":"payload","pt":"msg","to":"けしたよ","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":570,"y":160,"wires":[["bed1928d.16612"]]}]
```

<!-- 
[こちら]()からimportできます。
-->

![SampleFlows-cloudLchika-slackImage](./../../img/EnebularEdgeAgent/SampleFlows-cloudLchika-slackImage.png)

実装例です。


## センサーデータをクラウドストレージに入れるフロー{#sensorData}

![SampleFlows-postData-image](./../../img/EnebularEdgeAgent/SampleFlows-postData-image.jpg)
<!--あとで差し替え-->

heroku上にFirebaseへデータをいれるappを構築します。デバイスがappにデータを送信することによりFirebaseにセンサのデータが入ります。
この Sample Flow ではGroveモジュールのアナログセンサを使用します。

## heroku

heroku上に、デバイスが接続するappを用意します。
herokuからFirebaseにデータを入れます。

![SampleFlows-postData-heroku](./../../img/EnebularEdgeAgent/SampleFlows-postData-heroku.png)

```json
[{"id":"ab0558c5.282628","type":"http response","z":"3cc43a63.b4e246","name":"","x":250,"y":100,"wires":[]},{"id":"2a7bcb1.c56e634","type":"http in","z":"3cc43a63.b4e246","name":"","url":"/post","method":"post","upload":false,"swaggerDoc":"","x":80,"y":40,"wires":[["ab0558c5.282628","21fd8a4.1252576","bd28eaee.6430c8"]]},{"id":"21fd8a4.1252576","type":"change","z":"3cc43a63.b4e246","name":"","rules":[{"t":"move","p":"payload","pt":"msg","to":"payload.value.analog","tot":"msg"},{"t":"set","p":"payload.timestamp","pt":"msg","to":"","tot":"date"},{"t":"set","p":"payload.value.created","pt":"msg","to":"","tot":"date"},{"t":"set","p":"payload.value.label","pt":"msg","to":"analog","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":280,"y":40,"wires":[["4d11ca47.3d6dd4"]]},{"id":"bd28eaee.6430c8","type":"debug","z":"3cc43a63.b4e246","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":270,"y":160,"wires":[]},{"id":"4d11ca47.3d6dd4","type":"firebase modify","z":"3cc43a63.b4e246","name":"","firebaseconfig":"","childpath":"data","method":"push","value":"msg.payload","priority":"msg.priority","x":610,"y":40,"wires":[[]]}]
```
<!-- 
[こちら]()からimportできます。
-->

importした後、Firebaseノードの設定を自分のものに書き換えてください。

1. Firebaseノード を開き、鉛筆マークを押します。
![SampleFlows-postData-firebase1](./../../img/EnebularEdgeAgent/SampleFlows-postData-firebase1.png)

1. config dialogが開くので、自分のFirebaseのappidを入力してください。Auth Typeは「None」にしてください。
![SampleFlows-postData-firebase2](./../../img/EnebularEdgeAgent/SampleFlows-postData-firebase2.png)

## device

5秒周期でport4に接続されたGroveモジュールのデータをappに送信します。
Groveモジュールはアナログセンサを使用してください。

![SampleFlows-postData-device](./../../img/EnebularEdgeAgent/SampleFlows-postData-device.png)

http requestノードの「URL」を自分のものに書き換えてください。

```json
[{"id":"bca1c61e.81cb58","type":"inject","z":"dc1e97e4.05da58","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":140,"y":80,"wires":[["db4976de.897468"]]},{"id":"db4976de.897468","type":"analogin","z":"dc1e97e4.05da58","board":"SBBv2","pin":"GRV11","vt":"int","name":"","x":320,"y":80,"wires":[["9c913001.cc0fb"]]},{"id":"91a66b76.005158","type":"debug","z":"dc1e97e4.05da58","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":670,"y":80,"wires":[]},{"id":"9c913001.cc0fb","type":"http request","z":"dc1e97e4.05da58","name":"","method":"POST","ret":"txt","url":"http://[your-heroku-app].herokuapp.com/post","tls":"","x":490,"y":80,"wires":[["91a66b76.005158"]]}]
```
<!-- 
[こちら]()からimportできます。
-->

## Plus One

使用したFirebaseをDatastoreとして登録すれば、Infomotionで簡単に可視化することができます。

![SampleFlows-postData-infomotion](./../../img/EnebularEdgeAgent/SampleFlows-postData-infomotion.png)

詳しい手順は、GetStarted > [DataVisualization](./../GetStarted/DataVisualization.md) に記載されているので、参考にしてください。