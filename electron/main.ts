import { app, BrowserWindow, ipcMain } from 'electron'
import {CATEGORIES} from '../src/utils/const'
import { predealVideoName } from '../src/utils'
const fs = require('fs')
import { Blob } from 'blob-polyfill'
const targetCatePath = 'E:\\RESP\\cate_2\\杰伦全款'

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

async function registerListeners () {
  /**
   * This comes from bridge integration, check bridge.ts
   */
  ipcMain.on('message', (event, message) => {
    if (message.type === 'getAllVideosInCate') {
      fs.readdir(message.path, (err, data) => {
        if (err) {
            throw err
        } else {
            let videosList = []
            data.forEach((item, index) => {
                let obj = {
                    id: index,
                    name: item,
                    path: message.path + '\\' + item,
                }
                videosList.push(obj)
            })
            event.sender.send('getAllVideosInCate_back', videosList)
        }
    })
    } else  {
      const path = message.data.path
      fs.readFile(path, (err, data) => {
        event.sender.send('getVideoContent_back', {
          name: predealVideoName(message.data.path),
          file: data
        })
      })
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
