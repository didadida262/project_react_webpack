// const { scanDirItems } = require("./src/utils/FileApi.js")
// // const { respPath } = require("./src/utils/const")

const fs = require('fs')
const path = require('path')

const res = []
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


// 扫描文件夹一代
const getPathValidDirs = (basePath) => {
    const validFiles = fs.readdirSync(basePath).filter((item) => item.indexOf('.') === -1).map((dir) => {
        return {
            name: dir,
            path: path.join(basePath, dir)
        }
    })
    return validFiles
}
console.log(getPathValidDirs('E:\\RESP'))