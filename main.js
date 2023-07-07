const { app, BrowserWindow, ipcMain  } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
    //   title: "点歌系统",
      show: false,
      webPreferences: {
        nodeIntegration: true,
        enableRemoteModule: true
      }
    })
    win.loadFile('index.html')
    // win.loadFile('./dist/index.html')
    const url = isDev? 'http://localhost:3001': 'myurl'
    win.loadURL(url)
    // 处理白屏
    win.on('ready-to-show', () => {
      win.show()
    })
  
  }
  app.on('ready', () => {
    // ipcMain.handle('ping', () => 'pong')
    createWindow()

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

  // app.whenReady().then(() => {
  //   ipcMain.handle('ping', () => 'pong')
  //   createWindow()
  //   app.on('activate', () => {
  //     if (BrowserWindow.getAllWindows().length === 0) createWindow()
  //   })
  // })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })