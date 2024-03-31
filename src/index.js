const {app, BrowserWindow} = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
    })
    win.loadFile('src/index.html');
    win.setMenuBarVisibility(false);
    win.setTitle('treaker');
}

app.whenReady().then(() => createWindow());
app.on('window-all-closed', () => app.quit());