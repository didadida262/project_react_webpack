

import { useState } from 'react';
export function VideoComponent() {

  const [videoUrl, setvideourl] = useState('')
    window.Main.on('getVideoContent_back', (data) => {
      console.log('监听到了?', data)
      const blob = new Blob([data], { type: 'mp4' })
      const url = URL.createObjectURL(blob)
      setvideourl(url)
    })
  
  return (
    <>
      <div className="right">
        <video
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
 
