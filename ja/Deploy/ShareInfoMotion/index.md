---
lastUpdated: 2017-12-01
---

# share infomotion

The following code is subject to change.

infomotion and infomotionUI script tags are needed to use infomotion.

```
<script src="http://localhost:3000/emi/enebular-infomotion/infomotion.js"></script>

<script src="http://localhost:3000/emi/enebular-infomotion/infomotionUI.js"></script>
```

### Settings for graph component

Settings is composed of three parts.

cache - default is blackhole which does not cache any data

daterange - set the initial start and end date

options - paths of plugins/infomotions


```javascript

            var settings = {
                "cache": "blackhole",
                "dateRange": [new Date('Sun Oct 01 2017 01:30:00 GMT+0900 (JST)'), new Date('Tue Oct 10 2017 01:30:00 GMT+0900 (JST)')],
                "options": {
                    "pluginPath": "https://enebular-uhuru.herokuapp.com",
                    "iframePath": "http://localhost:3000/emi/iframe/iframe.html",
                    "plugins": [
                        {
                            "title": "plugin-title",
                            "name": "59a842c462f53a110029a5e0",
                            "jsPath": "api/VisualizationTypes/59a842c462f53a110029a5e0/download?type=plugin.js",
                            "cssPath": "api/VisualizationTypes/59a842c462f53a110029a5e0/download?type=plugin.css"
                        }
                    ],
                    "loadingMode": "loadScript"
                 },
            };

```


### GraphContext

A graph context binds grphs and components.

Before we crate graphs and componets we need to set up a graphContext.

```javascript
	var graphContext = infomotion.graphContext(settings);
```

### DatePicker

withRange - start and end date

make - creates a date picker

```javascript
	var datePicker = infomotionUI.datePicker(document.querySelector('#enebularDatePicker'))
            .withRange([new Date('Sun Oct 01 2017 01:30:00 GMT+0900 (JST)'), new Date('Tue Oct 10 2017 01:30:00 GMT+0900 (JST)')])
            .make();
```


### Timeline

```javascript
    var timeline = infomotionUI.timeline(
                document.querySelector('#timeline'),
                document.querySelector('#minDate'),
                document.querySelector('#maxDate'),
                document.querySelector('#btnControl')
        ).withRange([new Date('2016-12-30'), new Date()])
        .make();
```

### LiveButton

```javascript
    var liveButton = infomotionUI.liveButton(document.querySelector('#btnLive'))
                .make();
```

### Binding components to graphContext
When all parts are ready you can bind components to graphContext

```javascript
    graphContext
        .useTimeline(timeline)
        .useLiveButton(liveButton)
        .useDatePicker(datePicker)

```

### Graph settings

graph settings is made up of 3

adapter - type of data source adaptor, appId, secret and key.

graph settings - settings for the infomotion Type

options - pluginPaths

```javascript
var settingGraph = {
   "adapter":{
      "type":"milkcocoaAdaptor",
      "options":{
         "appId":"bluej70pgdvs"
      }
   },
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
      "plugins":[
         {
            "title":"drag-force-plugins",
            "name":"59a842c462f53a110029a5e0",
            "jsPath":"api/VisualizationTypes/59a842c462f53a110029a5e0/download?type=plugin.js",
            "cssPath":"api/VisualizationTypes/59a842c462f53a110029a5e0/download?type=plugin.css"
         }
      ],
      "loadingMode":"loadScript"
   }
}
```

### Binding graph settings to a div

```javascript

    var graph0 = infomotionUI.graph(document.querySelector('#graph'), settingGraph);

```

### Setting graphs topic


```javascript

    graph0.useTopic('DragForceData');

```

### Adding and displaying graphs to graphContext

```javascript

	graphContext.useGraphs(graph0);

```


### Removing graphs from graphContext

```javascript

	graphContext.removeGraph(graph0)

```

### Setting filters

```javascript

	graph0.useFilter([{
        key: 'tag',
        values: ['home', 'social']
    }]);

```

### Example shared html

```javascript

<link rel="stylesheet" href="http://localhost:3000/emi/enebular-infomotion/css/app.css">

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

<script src="https://cdn.mlkcca.com/v2.0.0/milkcocoa.js"></script>

<script src="http://localhost:3000/emi/enebular-infomotion/infomotion.js"></script>

<script src="http://localhost:3000/emi/enebular-infomotion/infomotionUI.js"></script>

<style>
            .container {
              padding-right: 15px;
              padding-left: 15px;
              margin-right: auto;
              margin-left: auto;
            }

            .infomotion-graph-0 {
                    width: 990px;
                    height: 200px;
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

    <input id="enebularDatePicker" type="date">

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

      <div class="timeline-wrapper">

        <div id="timeline"></div>

        <span id="minDate" class="enebular-min-date"></span>

        <span id="maxDate" class="enebular-max-date"></span>

      </div>

      <div class="enebular-clear-both"></div>

    </div>

  </div>

  <div class="enebular-clear-both"></div>


  <div class="infomotion-graph infomotion-graph-0" id="graph0"></div>


  <div class="enebular-clear-both"></div>
</div>

<script>

            var settings = {
                "cache": "blackhole",
                "dateRange": [new Date('Sun Oct 01 2017 01:30:00 GMT+0900 (JST)'), new Date('Tue Oct 10 2017 01:30:00 GMT+0900 (JST)')],
                "options": {
                    "pluginPath": "https://enebular-uhuru.herokuapp.com",
                    "iframePath": "http://localhost:3000/emi/iframe/iframe.html",
                    "plugins": [
                        {
                            "title": "drag-force-plugins",
                            "name": "59a842c462f53a110029a5e0",
                            "jsPath": "api/VisualizationTypes/59a842c462f53a110029a5e0/download?type=plugin.js",
                            "cssPath": "api/VisualizationTypes/59a842c462f53a110029a5e0/download?type=plugin.css"
                        },
                        {
                            "title": "core",
                            "name": "core",
                            "jsPath": "public/emi/plugins/core/plugin.js",
                            "cssPath": "public/emi/plugins/core/plugin.css"
                        }
                    ],
                    "loadingMode": "loadScript"
                 },
            };

            var graphContext = infomotion.graphContext(settings);

            var datePicker = infomotionUI.datePicker(document.querySelector('#enebularDatePicker'))
            .withRange([new Date('Sun Oct 01 2017 01:30:00 GMT+0900 (JST)'), new Date('Tue Oct 10 2017 01:30:00 GMT+0900 (JST)')])
            .make();

            var timeline = infomotionUI.timeline(
                    document.querySelector('#timeline'),
                    document.querySelector('#minDate'),
                    document.querySelector('#maxDate'),
                    document.querySelector('#btnControl')
            ).withRange([new Date('2016-12-30'), new Date()])
             .make();

            var liveButton = infomotionUI.liveButton(document.querySelector('#btnLive'))
                .make();

            graphContext
                .useTimeline(timeline)
                .useLiveButton(liveButton)
                .useDatePicker(datePicker)

                var settingGraph0 = {"adapter":{"type":"milkcocoaAdaptor","options":{"appId":"bluej70pgdvs"}},"graph":{"i":"249a16d4-d4e2-49e1-8328-a2a514cee58f","n":"line chart","t":"59a842c462f53a110029a5e0-sample-line-chart","d":"59a8467e62f53a110029a5e1","s":{"left key":"social_buzz","left label":"Social Buzz","left color":"steelblue","right key":"total_sessions","right label":"Site Session","right color":"#FF6666","time stamp":"created","line type":"linear"},"v":[]},"options":{"pluginPath":"https://enebular-uhuru.herokuapp.com","iframePath":"http://localhost:3000/emi/iframe/iframe.html","plugins":[{"title":"drag-force-plugins","name":"59a842c462f53a110029a5e0","jsPath":"api/VisualizationTypes/59a842c462f53a110029a5e0/download?type=plugin.js","cssPath":"api/VisualizationTypes/59a842c462f53a110029a5e0/download?type=plugin.css"},{"title":"core","name":"core","jsPath":"public/emi/plugins/core/plugin.js","cssPath":"public/emi/plugins/core/plugin.css"}],"loadingMode":"loadScript"}}


                var graph0 = infomotionUI.graph(document.querySelector('#graph0'), settingGraph0);
                    graph0.useTopic('DragForceData');
                    graphContext.useGraphs(graph0);

            </script>

```