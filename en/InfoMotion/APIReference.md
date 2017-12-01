InfoType API
============

plugin.js created by `infomotion-tool` has a set of apis.
addData, clearData, resize and getEl.

![](/_asset/images/enebular-developers-upload-info.png)

addData
-------

addData is called when date range is selected or timeline is toggled.

* Parameter: data 

The data passed is based on the daterange or toggled dates/time. 

clearData 
--------- 

When date range is selected, timeline is toggled or live mode is activted clearData is called.

* Parameter: N/A

resize
------

When the browser window changes size resize is called. 

* Parameter: option.width, option.height

getEl
-----

Returns the dom

* Parameter： N/A

InfoType settings modal 
-----------------------

To make infotypes flexable to different data sets a settings schema 
is needed. There are 4 types `text`, `list`, `select` and `bool`.

An InfoType has a schmea and a default settings.

A basic key/value input setting. 

```
* Schmea 

{
  type: "text",
  name: "tag"
}

* Default
{
    "tag":"tag-name"
}
```

![](/_asset/images/enebular-developers-type-text.png)

A list of key/value input settings. 

```
* Schema 
{
    type: "list",
    name: "list-of-tags",
    help: "Set name of each tag",
    children: [{
        type: "text",
        name: "tag"
    }]
}

* Default 
{
    "list-of-tags":[
        {tag:"tag1"},
        {tag:"tag2"},
        {tag:"tag3"}
    ]
}
```

![](/_asset/images/enebular-developers-type-list.png)

A select option setting.

```
* Schema
{
    type: "select",
    name: "mode",
    help: "please select a mode",
    options: ["mode1", "mode2"]
}

* Default 

{
    "mode":"mode2"
}
```

![](/_asset/images/enebular-developers-type-select.png)

An on/off switch.

```
* Schema
{
	type : "bool",
	name : "switch",
  	help : "turning on will display something"
}

* Default 

{
    "switch":true
}
```

![](/_asset/images/enebular-developers-type-switch.png)
