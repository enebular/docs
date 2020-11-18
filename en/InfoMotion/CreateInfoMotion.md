# Infomotion Dashboard {#Infomotion Dashboard}

With dataSource created and an InfoType uploaded select「Create InfoMotion」to create a dashboard.

A Dashboard requires

- `name`
- `description`
- `privilege`：See [Access](../Config/Access.md) for more details.
- `category`

![](../../img/InfoMotion/CreateInfomotion-infomotion-create.png)

Click 「Manage Graphs」to display the side bar where InfoMotions are created. Click 「Create Graph」 and specify below fields:

- `name`
- `type`
- `datasource`
- Graph settings

![](../_asset/images/InfoMotion/enebular-developers-create-infomotion.png)

Once settings is filed out, save the settings by clicking Save button and clicking the Add button to display the infomotion on the dashboard.

![](../_asset/images/InfoMotion/enebular-developers-display-infomotion.png)

Multiple graphs can be stored on the side bar.

![](../_asset/images/InfoMotion/enebular-developers-display-infomotion-multi.png)

Graphs can be resize by dragging the right bottom corner.

Data passed though InfoMotions can be controlled with daterange, timeline and play button.

- Daterange - calendar with start and end date.

![daterange](../_asset/images/InfoMotion/enenbular-developers-infomotion-daterange.png)

- Timeline - toggle to select subset dates/times.

![](../_asset/images/InfoMotion/enebular-developers-infomotion-timeline.png)

- Play - plays subsets of timeline

![](../_asset/images/InfoMotion/enebular-developers-infomotion-play.png)

InfoMotion Dashboards can be customizable for specific needs.
Please see [infomotion share](./InfoMotionTool.md) for more details.

## Dashboard options {#Dashboard options}

- `Manage Graphs` - add and remove graphs.
- `Save Layout` - saves dashboard positions.
- `Share` - share dashboard source code.

![](../_asset/images/InfoMotion/enebular-developer-dashboard-options.png)

## InfoMotion options {#InfoMotion options}

_Order left to right._

- `LIVE` - Colored Red LIVE mode indicates the graph is in live mode.
  Colored white indicates it is not in live mode.
  LIVE mode listenes to new data being pushed into the DataSource.
  Available for only Firebase and PubNub.

- `download data` - download a json file of InfoMotion data. Data can be download upto 10 MB.
- `share infomotion` - share single InfoMotion.
- `filter` - filter InfoMotion.
- `edit` - open sidebar to edit InfoMotion.
- `remove` - remove Infomotion from dashboard.

![](../_asset/images/InfoMotion/enebular-developers-infomotion-options.png)

##Example of Filter {#Example of Filter}

The graph below does not use a filter.
The categories `category` shown are `A`・`B`・`C`・`D`

![](../_asset/images/InfoMotion/enebular-developers-infomotion-prefilter.png)

You can set the filter from the filter button at the top of the graph. To set the filter you need to select pair and key values.

The filterd graph below displays the possible the possible filterd key `category` as `A` , `B` ,`C` or `D`.

![](../_asset/images/InfoMotion/enebular-developers-infomotion-setfilter.png)

Once set A filered graph can be viewed.
The example below displays the filtered data as `A` and `C`.

![](../_asset/images/InfoMotion/enebular-developers-infomotion-usefilter.png)

The graph will update with the filterd data displaying only
data pieces with the keys `category` and values of `A` and `C`.

![](../_asset/images/InfoMotion/enebular-developers-infomotion-postfilter.png)
