function resultHTML() {
    window.location.href = "result.html";
}

function indexHTML() {
    window.location.href = "index.html";
}

function addServer() {
    const serverTextArea = document.getElementById("txt_server").value;
    const valueOfServerTextArea = document.createTextNode(serverTextArea);

    const serverTableBody = document.getElementById("server-table-body");
    const newRow = serverTableBody.insertRow();
    const newCell = newRow.insertCell();

    newCell.appendChild(valueOfServerTextArea);

    for (let i = 1; i < 7; i++) {
        newRow.innerHTML += "<td>n/a</td>";
    }
}

function clearTable() {
    const serverTableBody = document.getElementById("server-table-body");
    document.getElementById("txt_server").value = "";

    while (serverTableBody.rows.length > 0) {
        serverTableBody.deleteRow(0);
    }
}

function changeDate() {
    const todaysDate = new Date();
    document.getElementById("week-date").innerHTML =
        "Changed to Week of " + todaysDate.toLocaleDateString().toString();
}
