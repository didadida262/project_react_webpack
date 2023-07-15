const fs = require('fs');

export const scanAllDirs = (basePath: string) => {
    fs.readdirSync(basePath, {withFileTypes: true}, (error: any, data: any) => {
        const validDirs = data.filter((item: any) => !item.isFile()) 
        return validDirs
    })
}
