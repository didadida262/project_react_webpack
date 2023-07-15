import { getVideoID } from './index'
const  { scanAllDirs } = require('./weapons.ts') 
const fs = require('fs')

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
  const validDirs = [] as any
  await fs.readdir(message.data.path, {withFileTypes: true}, (error: any, data: any) => {
    // await fs.readdirSync(message.data.path, {withFileTypes: true}, (error: any, data: any) => {
    console.log('读取完毕>>>1', data)
    // const validDirs = data.filter((item: any) => !item.isFile()) 
  })
  console.log('读取完毕>>>2')
  event.sender.send('getAllCates_back', validDirs)
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