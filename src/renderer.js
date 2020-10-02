function toResultHTML() {
    window.location.href = "result.html";
}

function toIndexHTML() {
    window.location.href = "index.html";
}

function randomShift() {
    // w = wait
    // h = host
    const SHIFTS = "WH";
    let resutl = "";

    for (let i = 0; i < 1; i++) {
        resutl += SHIFTS.charAt(Math.floor(Math.random() * SHIFTS.length));
    }

    return resutl;
}

function addServer(form) {
    //const serverTextArea = document.getElementById("txt_server").value;
    const serverTextArea = document.forms.form_server.txt_server.value;
    const valueOfServerTextArea = document.createTextNode(serverTextArea);

    // add user input to table to display
    const serverTableBody = document.getElementById("server-table-body");
    const newRow = serverTableBody.insertRow();
    const newCell = newRow.insertCell();

    if (serverTextArea === "" || valueOfServerTextArea == "") {
        M.toast({ html: "Input a value!" });
        return false;
    } else {
        newCell.appendChild(valueOfServerTextArea);
        for (let i = 1; i < 7; i++) {
            newRow.innerHTML += "<td class='td-centered'>n/a</td>";
        }
    }
    return false;
}

function clearTable() {
    const serverTableBody = document.getElementById("server-table-body");
    document.getElementById("txt_server").value = "";

    M.Toast.dismissAll();

    while (serverTableBody.rows.length > 0) {
        serverTableBody.deleteRow(0);
    }
}

function randommize() {
    alert("this will generate randomize");
}

function getMonday(date) {
    var day = date.getDay() || 7;
    if (day !== 1) date.setHours(-24 * (day - 1));
    return date;
}

document.addEventListener("DOMContentLoaded", function () {
    // when page loaded display next week monday date
    let thisWeekMonday = getMonday(new Date());
    thisWeekMonday.setDate(thisWeekMonday.getDate() + 7);

    document.getElementById("week-date-text").innerHTML =
        "Week of " + thisWeekMonday.toLocaleDateString().toString();
});

function printNow() {
    var divContents = document.getElementById("pdf-content").innerHTML;
    var a = window.open("", "", "height=1000, width=800");

    a.document.write(divContents);
    a.document.close();
    a.print();
}
