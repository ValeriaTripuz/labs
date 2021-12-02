function loadXMLDoc(url)
{
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, false);
    xhr.setRequestHeader('Content-Type', 'text/xml');
    xhr.send();

    return xhr.responseXML;
}

function createTable(xmlDoc) {

    let id = xmlDoc.getElementsByTagName("gradeRecord");

    let table = document.getElementById("table");

    let tableRow, tableDataId, tableDataStudent, tableDataGrade, text, node;

    for(let i = 0; i < id.length; ++i) {
        tableRow = document.createElement("tr");

        tableDataId = document.createElement("td");
        text = id[i].getAttribute("id");
        node = document.createTextNode(text);
        tableDataId.appendChild(node);

        tableDataStudent = document.createElement("td");
        text = id[i].getElementsByTagName("student").item(0).innerHTML;
        node = document.createTextNode(text);
        tableDataStudent.appendChild(node);

        tableDataGrade = document.createElement("td");
        text = id[i].getElementsByTagName("grade").item(0).innerHTML;
        node = document.createTextNode(text);
        tableDataGrade.appendChild(node);
        tableDataGrade.setAttribute("id", "grade");

        tableRow.appendChild(tableDataId);
        tableRow.appendChild(tableDataStudent);
        tableRow.appendChild(tableDataGrade);

        table.appendChild(tableRow);
    }
}

function changeGradesView() {
    let tableRows = document.getElementsByTagName("tr");
    for(let i = 1; i < tableRows.length; ++i) {
        let gradeSell  = tableRows[i].getElementsByTagName("td").item(2);

        switch(gradeSell.innerHTML) {
            case "1": gradeSell.innerHTML = "very bad";
                break;
            case "2": gradeSell.innerHTML = "bad";
                break;
            case "3": gradeSell.innerHTML = "good";
                break;
            case "4": gradeSell.innerHTML = "very good";
                break;
            case "5": gradeSell.innerHTML = "excellent";
                break;
        }

    }
}
