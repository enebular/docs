---
lastUpdated: 2018-4-24
---

# Share InfoMotion

The following code is subject to change.

###Before you share!

####Access Control Allow Origin 

For milkcocoa to be used locally it must be 
served from a http server. For node.js/npm users we reccomend you use a simple npm module [http-server](https://www.npmjs.com/package/http-server) to serve your index.html locally. 

####Infotype share issues

Enebular must be logged in the browser to display infotypes. 
All infotypes are set as private. These settings are subject to change. 

###InfoMotion scripts

ダッシュボードを外部サイトへ埋め込む場合、API を使って自由にダッシュボードの表示をカスタマイズできます。

埋め込みには以下の2つのファイルを読み込む必要があります。

```html
<script src="http://enebular-v2.herokuapp.com/emi/enebular-infomotion/infomotion.js"></script>
<script src="http://enebular-v2.herokuapp.com/emi/enebular-infomotion/infomotionUI.js"></script>
```

### Settings for graph component

ダッシュボードの設定です。3つの設定があります。

- cache - キャッシュを使用するかどうかを設定できます。デフォルトは `blackhole` でキャッシュを使用しない設定になっています。
- dateRange - Datarange picker のデフォルト値を設定できます。
- options - プラグインのURLを指定しています。ダッシュボードでシェアしたときに自動で生成されるので手入力で打つ必要はありません。

```javascript
var settings = {
  "cache": "blackhole",
  "dateRange": [new Date('Mon Dec 04 2017 09:35:32 GMT+1100 (AEDT)'), new Date('Thu Dec 07 2017 09:35:33 GMT+1100 (AEDT)')],
  "options": {"pluginPath":"http://localhost:9000","iframePath":"/emi/iframe/iframe.html","plugins":[{"title":"Data-Logger",
  "name":"f9f25f2a-c0c6-4c11-89f0-e947cc6bbd33","jsPath":"api/v1/infotype/f9f25f2a-c0c6-4c11-89f0-e947cc6bbd33/download?ext=js",
  "cssPath":"api/v1/infotype/f9f25f2a-c0c6-4c11-89f0-e947cc6bbd33/download?ext=css"}],
  "loadingMode":"loadScript"}
}
```


### GraphContext

グラフとコンポーネントをバインドします。

グラフやコンポーネントを作る前に、 `graphContext` を作成する必要があります。

```javascript
var graphContext = infomotion.graphContext(settings);
```

### DatePicker

日付指定コンポーネントです。

- withRange([start, end]) - 開始と終了をしていします。
- make() - コンポーネントを作成します。

```javascript
var datePicker = infomotionUI.datePicker(document.querySelector('#enebularDatePicker'))
                 .make();
```


### Timeline

DatePicker より細かい時間指定をするコンポーネントです。

```javascript
var timeline = infomotionUI.timeline(
  document.querySelector('#timeline'),
  document.querySelector('#btnControl')
).make();
```

### LiveButton

リアルタイムモードに切り替えるボタンコンポーネントです。

```javascript
var liveButton = infomotionUI.liveButton(document.querySelector('#btnLive'))
                 .make();
```

### GraphContext  へコンポーネントを登録

すべてのコンポーネントが `make` されたら、GraphContext へ登録します。

```javascript
graphContext
  .useTimeline(timeline)
  .useLiveButton(liveButton)
  .useDatePicker(datePicker)
```

### Graph settings

グラフの設定です。3つの設定があります。

- adapter - DataSource の adaptor 設定です。
- graph - グラフ設定です。
- options - プラグインのパスです。

```javascript
var settingGraph = {
  "adapter":{
  "type":"milkcocoaAdaptor",
  "options":{
    "appId":"bluej70pgdvs"
  }},
  "graph":{
    "i":"249a16d4-d4e2-49e1-8328-a2a514cee58f",
    "n":"line chart",
    "t":"59a842c462f53a110029a5e0-sample-line-chart",
    "d":"59a8467e62f53a110029a5e1",
    "s":{
      "left key":"social_buzz",
      "left label":"Social Buzz",
      "left color":"steelblue",
      "right key":"total_sessions",
      "right label":"Site Session",
      "right color":"#FF6666",
      "time stamp":"created",
      "line type":"linear"
    },
    "v":[
    ]
  },
  "options":{
    "pluginPath":"https://enebular-uhuru.herokuapp.com",
    "iframePath":"http://localhost:3000/emi/iframe/iframe.html",
    "plugins":[{
      "title":"drag-force-plugins",
      "name":"59a842c462f53a110029a5e0",
      "jsPath":"api/VisualizationTypes/59a842c462f53a110029a5e0/download?type=plugin.js",
      "cssPath":"api/VisualizationTypes/59a842c462f53a110029a5e0/download?type=plugin.css"
    }],
    "loadingMode":"loadScript"
  }
}
```

### DOM の作成

```javascript
var graph1 = infomotionUI.graph(document.querySelector('#graph'), settingGraph);
```

### Topic の設定

```javascript
graph1.useTopic('country-data');
```

### graphContext へのグラフの登録

```javascript
graphContext.useGraphs(graph1);
```

### graphContext からグラフを削除

```javascript
graphContext.removeGraph(graph1)
```

### フィルターの設定

```javascript
graph0.useFilter([{
  key: 'country',
  values: ['Japan', 'USA']
}]);
```

### 例

```html
<link rel="stylesheet" href="http://localhost:3000/emi/enebular-infomotion/css/app.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="https://cdn.mlkcca.com/v2.0.0/milkcocoa.js"></script>
<script src="https://enebular-v2.herokuapp.com/emi/enebular-infomotion/infomotion.js"></script>
<script src="https://enebular-v2.herokuapp.com/emi/enebular-infomotion/infomotionUI.js"></script>
<style>
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.graph-date-picker {
  text-align: right;
}

.enebular-datepicker {
  border-radius: 1px;
  border: 1px solid #F2F3F4;
  color: #646e6f;
  font-weight: 300;
  padding: 12px 17px;
  width: 50%;
}

.graph-date-picker #datePicker {
  padding: 8px 0 8px 8px;
  width: 100%
}

.infomotion-timeline {
  margin-top: 60px;
}

.action-control-wrapper {
  width: 70px;
  float: left;
}

.timeline-wrapper {
  width: calc(100% - 70px);
  float: left;
  padding-top: 15px;
  padding-right: 15px;
}

.control-live {
  float: left;
  width: 60px;
  margin-top: 62px;
}

.control-timeline {
  width: calc(100% - 60px);
  float: left;
}

.infomotion-graph-1 {
  transform: translate(10px, 10px);
  width: 594px;
  height: 410px;
  position: absolute;
}

@media (max-width: 768px) {
  .infomotion-graph {
    width: 100%;
    transform: none;
    position: inherit;
    padding-bottom: 10px;
  }
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
</style>

<div class="container">
  <div class="graph-date-picker">
    <input id="enebularDatePicker" class="enebular-datepicker" type="date">
  </div>
  <div class="enebular-clear-both"></div>
  <div class="control-live">
    <button id="btnLive" class="enebular-btn">
      <i class="fa fa-bolt fa-lg"></i>
    </button>
  </div>

  <div class="control-timeline">
    <div class="infomotion-timeline">
      <div class="action-control-wrapper">
        <button id="btnControl" class="enebular-btn enebular-btn-control">
          <i class="fa fa-play"></i>
        </button>
      </div>
      <div class="timeline-wrapper" id="timeline"></div>
      <div class="enebular-clear-both"></div>
    </div>
  </div>

  <div class="enebular-clear-both"></div>
  <div class="infomotion-graph infomotion-graph-1" id="graph1"></div>
</div>

<script>
var settings = {
  "cache": "blackhole",
  "dateRange": [new Date('Mon Dec 04 2017 09:35:32 GMT+1100 (AEDT)'), new Date('Thu Dec 07 2017 09:35:33 GMT+1100 (AEDT)')],
  "options": {
    "pluginPath":"http://localhost:9000",
    "iframePath":"/emi/iframe/iframe.html","plugins":[
    {"title":"Data-Logger","name":"f9f25f2a-c0c6-4c11-89f0-e947cc6bbd33","jsPath":"api/v1/infotype/f9f25f2a-c0c6-4c11-89f0-e947cc6bbd33/download?ext=js","cssPath":"api/v1/infotype/f9f25f2a-c0c6-4c11-89f0-e947cc6bbd33/download?ext=css"}],"loadingMode":"loadScript"}
}

var graphContext = infomotion.graphContext(settings);

var datePicker = infomotionUI.datePicker(document.querySelector('#enebularDatePicker'))
.make();

var timeline = infomotionUI.timeline(
  document.querySelector('#timeline'),
  document.querySelector('#btnControl')
).make();

var liveButton = infomotionUI.liveButton(document.querySelector('#btnLive'))
    .make();

graphContext
  .useTimeline(timeline)
  .useLiveButton(liveButton)
  .useDatePicker(datePicker)

var settingGraph1 = {
  "adapter":{
    "type":"milkcocoa",
    "options":{
        "appId":"juicejaubflwc",
        "apiKey":null,
        "apiSecret":null,
        "endpoint":null
      }
    },
  "graph":{
    "i":"7ab64c1b-a2d6-4534-be0c-a4a5fa5a61f3",
    "n":"country-data",
    "t":"f9f25f2a-c0c6-4c11-89f0-e947cc6bbd33-Data-Logger",
    "d":"2b18d5d1-2092-40e2-a897-86ce5f00782a",
    "s":{
        "columnA":"country",
        "columnB":"value"
      },
    "v":[]
  },
  "options":settings.options,
  "loadingMode":"loadScript"
}

var graph1 = infomotionUI.graph(document.querySelector('#graph1'), settingGraph1);
graph1.useTopic('country-data');
graphContext.useGraphs(graph1);
</script>
```