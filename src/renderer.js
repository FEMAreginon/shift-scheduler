function toResultHTML() {
    window.location.href = "result.html";
}

function toIndexHTML() {
    window.location.href = "index.html";
}

function randomShift() {
    const SHIFTS = "w ";
    let resutl = "";

    for (let i = 0; i < 1; i++) {
        resutl += SHIFTS.charAt(Math.floor(Math.random() * SHIFTS.length));
    }

    return resutl;
}

function randomizeShifts() {
    const serverTableBody = document.getElementById("server-table-body");
    const tbody = document.getElementsByTagName("tbody")[0];
    const tds = tbody.getElementsByTagName("td");

    if (serverTableBody.rows.length === 0) {
        M.toast({ html: "Nothing to randomize!" });
        overlayOn();
    } else {
        // iterate throught all the td tag, then access to the tags that has td center class and change its value.
        for (let i = 0; i < tds.length; i++) {
            if (tds[i].className == "td-centered") {
                // Set a new width
                tds[i].innerHTML = randomShift() + " / " + randomShift();
            }
        }
    }
}

function addServer(form) {
    const serverTextArea = document.forms.form_server.txt_server.value;
    const valueOfServerTextArea = document.createTextNode(serverTextArea);

    if (serverTextArea === "" || valueOfServerTextArea == "") {
        M.toast({ html: "Input a value!" });
        overlayOn();
        return false;
    } else {
        // add user input to table to display
        const serverTableBody = document.getElementById("server-table-body");
        const newRow = serverTableBody.insertRow();
        const newCell = newRow.insertCell();

        newCell.appendChild(valueOfServerTextArea);
        for (let i = 0; i < 6; i++) {
            newRow.innerHTML += "<td class='td-centered'>n/a</td>";
        }
        clearServerTextAreaAfterHittingAddOrEnter();
    }
    return false;
}

function clearServerTextAreaAfterHittingAddOrEnter() {
    setTimeout(function () {
        document.getElementById("txt_server").value = "";
    }, 50);
}

function clearTable() {
    const serverTableBody = document.getElementById("server-table-body");
    M.Toast.dismissAll();

    // if there is nothing else to clear, display a message with overlay efferct on
    if (serverTableBody.rows.length === 0) {
        M.toast({ html: "Nothing to clear!" });
        overlayOn();
    }
    // otherwise if there are rows, delete the rows when the button is pres
    else {
        while (serverTableBody.rows.length > 0) {
            serverTableBody.deleteRow(0);
        }
    }
}

// this will return monday date of this week, doens't matter what week day it is.
function getMonday(date) {
    var day = date.getDay() || 7;
    if (day !== 1) date.setHours(-24 * (day - 1));
    return date;
}

// when page loaded display next week monday date
document.addEventListener("DOMContentLoaded", function () {
    // will get monday date of this week amd add 7 days to return date of next week monday
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

// this will dim the webapge when user try to add without providing any text aka empty
function overlayOn() {
    document.getElementById("overlay").style.display = "block";
}

function overlayOff() {
    document.getElementById("overlay").style.display = "none";
    M.Toast.dismissAll();
}
