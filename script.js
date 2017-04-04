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

function updateClock() {
    const currentDate = new Date;
    const currentMinutes = ('0'+currentDate.getMinutes()).slice(-2);
    const currentDateContainer = document.getElementById('current-date');
    const currentTimeContainer = document.getElementById('current-time');


    currentDateContainer.textContent = currentDate.toDateString();
    currentTimeContainer.innerHTML = `${currentDate.getHours()}<span class="ticker">:</span>${currentMinutes}`;
}

function walk(links) {
    var columnsContainer = document.getElementById('columns-container');
    Object.keys(links).map((key, index) => {
        if (links.hasOwnProperty(key)) {
            var column = links[key];
            var columnHTML = 
                `<div class="link-container" id="column_${key}">
                    <div class="column-heading-container clearfix">
                        <h1 class="column-heading echo">${key}</h1>
                    </div>
                </div>`;
            columnsContainer.innerHTML += columnHTML;
            let thisColumn = document.getElementById(`column_${key}`);

            Object.keys(column).map((key, index) => {
                if (column.hasOwnProperty(key)) {
                    let link = column[key];
                    let linkId = key + link.title.replace(/\s/, '');
                    let linkHTML = 
                        `<a href="${link.url}">
                            <div class="link clearfix" id="${linkId}">
                                <div class="link-info">
                                    <p class="link-title">${link.title}</p>
                                </div>
                            </div>
                        </a>
                        <style type="text/css" scoped>
                            #${linkId}:before {
                                background-color: ${link.colour};
                            }
                        </style>`;
                    thisColumn.innerHTML += linkHTML;
                }
            })
        }
    })
}

function loadColumns(linksJSON) {
    var links = linksJSON;
    var columnOne = links.column1;
    walk(links);
}

parseJSON();
 
setInterval(updateClock, 1000);
