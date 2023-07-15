// const { scanDirItems } = require("./src/utils/FileApi.js")
// // const { respPath } = require("./src/utils/const")

const fs = require('fs')
const path = require('path')

// function getDirectories(basePath) {
//     fs.readdir(basePath, { withFileTypes: true }, (err, data) => {
//         const validDir = data.filter((item) => !item.isFile())
//         console.log('validDir>>', validDir)
//         for (const dir of validDir) {
//             const item = {
//                 name: dir.name,
//                 path: path.join(basePath, dir.name)
//             }
//             res.push(item)
//         }
//         console.log('res>>', res)
//     } )
//   }
  

// getDirectories('E:\\RESP');


// 扫描文件夹一代： 目录下所有文件夹
// const getPathValidDirs = (basePath) => {
//     const validFiles = fs.readdirSync(basePath).filter((item) => item.indexOf('.') === -1).map((dir) => {
//         return {
//             name: dir,
//             path: path.join(basePath, dir)
//         }
//     })
//     return validFiles
// }
// console.log(getPathValidDirs('E:\\RESP'))

const temp = []

// 二代：扫描出所有含有视频获音频的文件夹
const getPathValidDirs = (basePath) => {
    const validFiles = fs.readdirSync(basePath).filter((item) => item.indexOf('.') === -1).map((dir) => {
        return {
            name: dir,
            path: path.join(basePath, dir),
            isTarget: true
        }
    })
    for (const dir of validFiles) {
        const child = getPathValidDirs(dir.path)
        if (child.length) {
            dir.isTarget = false
            for (const item of child) {
                temp.push(item)
            }
        }
    }
    // while (temp.length) {
    //     validFiles.push(temp.pop())
    // }
    // console.log('validFiles>>', validFiles)
    return validFiles.filter((dir) => dir)
}
const first = getPathValidDirs('E:\\RESP')
const c = temp.filter((item) => item.isTarget)
const res = [...first, ...c]
console.log('res?>', res)