function ajax() {
    var table = document.createElement("table");
    table.setAttribute("class", "tbl");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var col = [];
            for (var i = 0; i < response.length; i++) {
                for (var key in response[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }
            var tr = table.insertRow(-1);
            for (var i = 0; i < col.length; i++) {
                var th = document.createElement("th");
                th.innerHTML = col[i];
                tr.appendChild(th);
            }
            tr.setAttribute("class", "rows");
            for (var i = 0; i < response.length; i++) {
                tr = table.insertRow(-1);
                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    if (j == 0) { tabCell.innerHTML = response[i].userId; }
                    else if (j == 1) { tabCell.innerHTML = response[i].id; }
                    else if (j == 2) { tabCell.innerHTML = response[i].title; }
                    else {
                        var check = response[i].completed;
                        if (check == true) {
                            var x = document.createElement("INPUT");
                            x.setAttribute("type", "checkbox");
                            tabCell.appendChild(x);
                            x.setAttribute("checked", "checked");
                            x.setAttribute("disabled", "true");
                        }
                        else {
                            var x = document.createElement("INPUT");
                            x.setAttribute("type", "checkbox");
                            x.setAttribute("onclick", "myfun(this.checked)");
                            tabCell.appendChild(x);
                        }
                    }
                }
            }
        }
    }
    var divContainer = document.getElementById("demo");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}
var tick = 0;
function myfun(y) {
    var promise = new Promise(function (resolve) {
        if (y == true) {
            tick++;
            if (tick == 5) {
                resolve();
            }
        } else {
            tick--;
        }
    });
    promise.then(function () {
        setTimeout(() => {
            alert("Congrats. 5 Tasks have been Successfully Completed");


        }, 200);

    });
}