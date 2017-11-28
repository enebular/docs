InfoType API
===================

plugin.js created by `infomotion-tool` has a set of apis.
addData, clearData, resize and getEl.

---- Images of daterange, timeline and live ----

addData
-------

addData is called when date range is selected or timeline is toggled.

* Parameter: data 

The data passed is based on the daterange or toggled dates/time. 

clearData 
--------- 

When date range is selected or timeline is toggled or live mod is activted clearData is called 
then addData is called. 


* Parameter: N/A

resize
------

When browsers widnow changes size resize is called.

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
    "tag":"main-tag"
}
```

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
        {tag:"tag-name-1"},
        {tag:"tag-name-2"},
        {tag:"tag-name-3"}
    ]
}
```

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
