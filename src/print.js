const electron = require('electron');
const fs = require('fs');
const os = require('os');
require('materialize-css');

// Importing BrowserWindow from Main
const BrowserWindow = electron.remote.BrowserWindow;

const pdf = document.getElementById('pdf');
const home = `${os.homedir()}/Desktop/Schedule.pdf`;

const options = {
    marginsType: 0,
    pageSize: 'A4',
    printBackground: false,
    printSelectionOnly: false,
    landscape: false,
};

pdf.addEventListener('click', (event) => {
    // let win = BrowserWindow.getAllWindows()[0];
    let win = BrowserWindow.getFocusedWindow();

    win.webContents
        .printToPDF(options)
        .then((data) => {
            fs.writeFile(home, data, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    alert('Successfully saved to your desktop as Schedule.pdf');
                }
            });
        })
        .catch((error) => {
            console.log(error);
        });
});
