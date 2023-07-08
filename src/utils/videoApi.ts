import { predealVideoName } from './index'

const fs = require('fs')

export const handleGetAllCates = (event: any, message: any) => {
    fs.readdir(message.data.path, (err: Error, data: any) => {
      if (err) {
          throw err
      } else {
          let videosList = data.map((item: string, index: number) => {
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


export const handleGetVideo = (event: any, message: any) => {
    const path = message.data.path
    console.log('path>>', path)
    fs.readFile(path, (err: Error, data: any) => {
      event.sender.send('getVideoContent_back', {
        name: predealVideoName(message.data.path),
        file: data
      })
    })
}