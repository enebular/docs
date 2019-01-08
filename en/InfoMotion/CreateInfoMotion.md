---
lastUpdated: 2017-12-15
---

# Infomotion Dashboard {#Infomotion Dashboard}

With dataSource created and an InfoType uploaded select「Create InfoMotion」to create a dashboard.

A Dashboard requires

- `name`
- `description`
- `default previllege`：See [Access](../Config/Access.md) for more details.
- `category`

![](../_asset/images/InfoMotion/enebular-developers-create-dashboard.png)

Click 「add graph」to display the side bar where InfoMotions
are created.

- `name`
- `type`
- `datasource`
- Graph settings

![](../_asset/images/InfoMotion/enebular-developers-create-infomotion.png)

Once settings is filed out add graph by clicking the plus to display the infomotion on the dashboard.

![](../_asset/images/InfoMotion/enebular-developers-display-infomotion.png)

Multiple graphs can be stored on the side bar.

![](../_asset/images/InfoMotion/enenbular-developers-display-infomotion-multi.png)

Graphs can be resize by dragging the right bottom corner. 

In this example we are using two graphs `data logger` and `line chart`

![](../_asset/images/InfoMotion/enenbular-developers-display-infomotion-multi-display.png)

Data passed though InfoMotions can be controlled with daterange, timeline, play and live button. 

- Daterange - calendar with start and end date. 

![daterange](../_asset/images/InfoMotion/enenbular-developers-infomotion-daterange.png) 

- Timeline - toggle to select subset dates/times. 

![](../_asset/images/InfoMotion/enenbular-developers-infomotion-timeline.png)

- Play - plays subsets of timeline 

![](../_asset/images/InfoMotion/enenbular-developers-infomotion-play.png)

- Live - subscribes to a datasources 

![](../_asset/images/InfoMotion/enenbular-developers-infomotion-live.png)

InfoMotion Dashboards can be customizable for specific needs.
Please see [infomotion share](./InfoMotionTool.md) for more details. 

## Dashboard options {#Dashboard options}

- `save` - saves dashboard positions.
- `filters` - create filters for InfoMotions.
- `share` - share dashboard source code.

![](../_asset/images/InfoMotion/enebular-developer-dashboard-options.png)

## InfoMotion options {#InfoMotion options}

*Order left to right.*

- `download data` - download a json file of InfoMotion data
- `share infomotion` - share single InfoMotion
- `filter` - filter InfoMotion
- `edit` - open sidebar to edit InfoMotion
- `remove` - remove Infomotion from dashboard

![](../_asset/images/InfoMotion/enebular-developers-infomotion-options.png)

##Example of Filter {#Example of Filter}

Infomotion without a filter. 

![](../_asset/images/InfoMotion/enebular-developers-infomotion-prefilter.png)

Setting dashboard filters. 
A filter requires one key and values. 
The entered key is `country` and values of `Japan`, `China` and `USA`. 

![](../_asset/images/InfoMotion/enebular-developers-infomotion-setfilter.png)

Once the filter is set it can be used by the InfoMotion.
To set the InfoMotion filter click on `Add new Filter`
and select the values you would like to filter. 
In this case we filter `country` tags with with the value of `China` or `USA`. 

![](../_asset/images/InfoMotion/enebular-developers-infomotion-usefilter.png)

The graph will update with the filterd data displaying only 
datapices with the keys `coutry` and values of `USA` and `China`. 

![](../_asset/images/InfoMotion/enebular-developers-infomotion-postfilter.png)
