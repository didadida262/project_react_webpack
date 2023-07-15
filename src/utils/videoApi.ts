import { getVideoID } from './index'
const  { scanAllDirs } = require('./weapons.ts') 
const fs = require('fs')
const path = require('path')
export const handleGetAllItems = (event: any, message: any) => {
    fs.readdir(message.data.path, (err: Error, data: any) => {
      if (err) {
          throw err
      } else {
          let videosList = data.map((item: string, index: number) => {
            return {
              // id: getVideoID(item),
              id: index,
              name: item,
              path: message.data.path + '\\' + item
            }
          }).sort((a, b) => {
            return a.id - b.id
          })
          event.sender.send('getAllVideosInCate_back', videosList)
      }
    })
  }

export const handleGetAllCates = async (event: any, message: any) => {
    const validFiles = fs.readdirSync(message.data.path).filter((item: any) => item.indexOf('.') === -1).map((dir: any) => {
        return {
            name: dir,
            path: path.join(message.data.path, dir)
        }
    })
  event.sender.send('getAllCates_back', validFiles)
}
export const handleGetVideo = (event: any, message: any) => {
    const path = message.data.path
    console.log('path>>', path)
    fs.readFile(path, (err: Error, data: any) => {
      event.sender.send('getVideoContent_back', {
        name: message.data.name,
        file: data
      })
    })
}