const { app, BrowserWindow } = require('electron');
const path = require('path');
const os = require('os');

if (require('electron-squirrel-startup')) {
    app.quit();
}

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 1000,
        resizable: false,
        fullscreen: false,
        webPreferences: {
            enableRemoteModule: true,
            nodeIntegration: true,
            nodeIntegrationInSubFrames: true,
        },
    });

    mainWindow.loadFile(path.join(__dirname, 'index.html'));
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
