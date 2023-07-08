const { ipcRenderer} = require('electron')

const targetCatePath = 'E:\\RESP\\cate_2\\【浪客剑心】“对不起 我的夫君”.mp4'

window.addEventListener('DOMContentLoaded', () => {
    ipcRenderer.send('getVideo', {
        path: targetCatePath
    })
    ipcRenderer.on('msgMain', (event, data) => {
        const uniBuffer = Uint8Array.from(data)
        const blob = new Blob([uniBuffer], { type: 'mp4' })
        const url = URL.createObjectURL(blob)
        const video =  document.getElementsByTagName('video')[0]
        video.src = url
        video.play()
    })
  })

