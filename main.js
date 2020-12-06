const { app, BrowserWindow } = require('electron')

function createWindow () {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // 開発者ツール開く
  win.webContents.openDevTools();

  win.loadURL(`file://${__dirname}/dist/super-comment-viewer/index.html`)
}

app.whenReady().then(createWindow)
