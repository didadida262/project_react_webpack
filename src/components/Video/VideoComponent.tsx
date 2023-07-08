

import { useState } from 'react';
export function VideoComponent() {

  const style = {
    width: 'calc(100% - 260px)',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
  const styleVideoInfo = {
    width: '100%',
    height: '80px',
    border: '1px solid black'
    
  }
  const styleVideo = {
    width: '100%',
    height: 'calc(100% - 100px)',
    border: '1px solid black'
    
  }
  const [videoUrl, setvideourl] = useState('')
  const [videoName , setVideoName] = useState('')
    window.Main.on('getVideoContent_back', (data: any) => {
      console.log('监听到了?', data)
      const blob = new Blob([data.file], { type: 'mp4' })
      const url = URL.createObjectURL(blob)
      setvideourl(url)
      setVideoName(data.name)
    })
  
  return (
    <>
      <div style={style}>
        <video
        style={styleVideo}

          id='test'
          controls
          autoPlay
          src={videoUrl}
        >
      </video>
      <div style={styleVideoInfo}>
        <span> { videoName }</span>
      </div>
      </div>
    </>
  )
}
 
