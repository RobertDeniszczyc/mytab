MyTab
===========
A Chrome extension to replace the default new tab screen displaying user defined links for easy and quick access.

<br />

##Key features
------------

 * Specify as many links as you want, in as many columns as you want.
 * Give each link a unique colour tab to act as an easy visual cue
 * Name each column for easy categorisation of links


##How to set up links        
---------------------
Columns and links are specified in links.json. Name the column and provide the link title, url, and colour along with a key for the link entry. An example is shown below, and there are also examples in the links.json file to get you started.

The URL must be the complete URL, colours can be supplied in any valid format accepted in CSS.


```js:links.json
{
	"column1heading": {
		"link1": {
			"title": "Test link one",
			"url": "http://www.test.com",
			"colour": "tomato"
		}
	},
	"column2heading": {
		"link1": {
			"title": "Test link one",
			"url": "http://www.test.com",
			"colour": "#FFAAAA"
		}
	},
	"column3heading": {
		"link1": {
			"title": "Test link one",
			"url": "http://www.test.com",
			"colour": "rgb(23, 56, 90)"
		}
	}
}
```

<br />

##Issues
-------------
If you see any issues or would like to make an improvement, raise an issue or create a pull request.