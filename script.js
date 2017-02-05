/* Inject the time and date into the page (client set) */

var currentDate = new Date;

var currentTimeContainer = document.getElementById('current-date');
currentTimeContainer.textContent = currentDate.toDateString();

var currentTimeContainer = document.getElementById('current-time');
var currentMinutes = ('0'+currentDate.getMinutes()).slice(-2);
currentTimeContainer.textContent = currentDate.getHours() + ":" + currentMinutes;


/* https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript */
function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'links.json', true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
    };
    xobj.send(null); 
 }

 function parseJSON() {
    loadJSON(function(response) {
      // Parse JSON string into object
      var linksJSON = JSON.parse(response);
      loadColumns(linksJSON);
    });
}

function loadColumns(linksJSON) {
    var links = linksJSON;
    var columnOne = links.column1;

function walk(links) {
    var columnsContainer = document.getElementById('columns-container');
    for (var key in links) {
        if (links.hasOwnProperty(key)) {
          var column = links[key];
          var columnHTML = '<div class=\"link-container\" id=\"column_' + key + '\"><h1 class=\"column-heading hero-heading charlie\">' + key + '</h1></div>'
          columnsContainer.innerHTML += columnHTML;

          var thisColumn = document.getElementById('column_' + key);
          for (var link in column) {
            if (column.hasOwnProperty(link)) {
                var link = column[link];
                var linkHTML = '<div class=\"link-container\" id=\"' + link + '\"><span class=\"link-color\" style=\"background-color:' + link.colour + '\"></span> ' +
                '<p class=\"link-title\">' + link.title + '</p> ' +
                '<p class=\"link-title\">' + link.url + '</p></div>'
                thisColumn.innerHTML += linkHTML;
            }
          }

        }
    }
}
walk(links);

    
}

parseJSON();
 

