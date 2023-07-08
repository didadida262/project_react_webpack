import { app, BrowserWindow, ipcMain } from 'electron'
import {CATEGORIES} from '../src/utils/const'
import { predealVideoName } from '../src/utils'
const fs = require('fs')
let mainWindow: BrowserWindow | null

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

// const assetsPath =
//   process.env.NODE_ENV === 'production'
//     ? process.resourcesPath
//     : app.getAppPath()

function createWindow () {
  mainWindow = new BrowserWindow({
    // icon: path.join(assetsPath, 'assets', 'icon.png'),
    width: 1100,
    height: 700,
    backgroundColor: '#191622',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
    }
  })

  // mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)
  // const url = isDev? 'http://localhost:3001': 'myurl'
  // mainWindow.loadURL('http://192.168.1.103:3001')
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}
const handleGetAllCates = (event: any, message: any) => {
  fs.readdir(message.data.path, (err: Error, data: any) => {
    if (err) {
        throw err
    } else {
        let videosList = data.map((item, index) => {
          return {
            id: index,
            name: predealVideoName(item),
            path: message.data.path + '\\' + item
          }
        })
        event.sender.send('getAllVideosInCate_back', videosList)
    }
  })
}
const handleGetVideo = (event: any, message: any) => {
      const path = message.data.path
      console.log('path>>', path)
      fs.readFile(path, (err: Error, data: any) => {
        event.sender.send('getVideoContent_back', {
          name: predealVideoName(message.data.path),
          file: data
        })
      })
}
async function registerListeners () {
  /**
   * This comes from bridge integration, check bridge.ts
   */
  ipcMain.on('message', (event: any, message: any) => {
    console.log('main-get>>', message)
    switch(message.type) {
      case 'getAllVideosInCate':
        handleGetAllCates(event, message)
        break;
      case 'getVideoContent':
        handleGetVideo(event, message)
        break;
      default:
        break;
    }
  })
}

app.on('ready', createWindow)
  .whenReady()
  .then(registerListeners)
  .catch(e => console.error(e))

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
