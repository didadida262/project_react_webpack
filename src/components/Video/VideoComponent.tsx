

import { useState } from 'react';
export function VideoComponent() {

  const style = {
    width: 'calc(100% - 260px)',
    height: '100vh'
  }
  const [videoUrl, setvideourl] = useState('')
    window.Main.on('getVideoContent_back', (data: File) => {
      console.log('监听到了?', data)
      const blob = new Blob([data], { type: 'mp4' })
      const url = URL.createObjectURL(blob)
      setvideourl(url)
    })
  
  return (
    <>
      <div style={style}>
        <video
          width="100%"
          height="100%"
          id='test'
          controls
          autoPlay
          src={videoUrl}
        >
      </video>
      </div>
    </>
  )
}
 
