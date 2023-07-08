
import React from 'react'
import { useState } from 'react';
export class VideoComponent extends React.Component {
  state = {
    videoUrl: '',
    videoName: '',
    style: {
        width: 'calc(100% - 260px)',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      },
      styleVideoInfo: {
          width: '100%',
          height: '80px',
          border: '1px solid black'
        },
        styleVideo: {
          width: '100%',
          height: 'calc(100% - 100px)',
          border: '1px solid black'
        }
  }
  componentDidMount(): void {
        window.Main.on('getVideoContent_back', (data: any) => {
      console.log('监听到了?', data)
      const blob = new Blob([data.file], { type: 'mp4' })
      const url = URL.createObjectURL(blob)
      this.setState({
        videoUrl: url,
        videoName: data.name
      })
    })
  }
  render(): React.ReactNode {
    return (
      <>
        <div style={this.state.style}>
          <video
            style={this.state.styleVideo}
            id='test'
            controls
            autoPlay
            src={this.state.videoUrl}
          >
        </video>
        <div style={this.state.styleVideoInfo}>
          <span> { this.state.videoName }</span>
        </div>
        </div>
      </>
    )
  }



}
 
