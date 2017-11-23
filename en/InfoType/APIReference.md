InfoType API
===================

plugin.js created by `infomotion-tool` has a set of apis.
addData, clearData, resize and getEl.

---- Images of  ----

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