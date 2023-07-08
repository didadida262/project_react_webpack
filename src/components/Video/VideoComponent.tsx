
import React from 'react'
import { useState } from 'react';
import { Button } from '../Button'

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
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'center',
          border: '1px solid black',
          borderRadius: '5px',
          padding: '10px'
        },
        styleVideoOperation: {
          width: '100%',
          height: '80px',
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'center',
          border: '1px solid black',
          borderRadius: '5px',
          padding: '10px'
        },
        styleVideo: {
          width: '100%',
          height: 'calc(100% - 165px)',
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
          <div style={this.state.styleVideoInfo}>
              <span> { this.state.videoName.slice(0,-9) }</span>
          </div>
          <video
            style={this.state.styleVideo}
            id='test'
            controls
            autoPlay
            src={this.state.videoUrl}
          >
          </video>
          <div style={this.state.styleVideoOperation}>
            <Button onClick={ this.props.nextVideo}>随机播放</Button>
            <Button onClick={ this.props.nextVideo}>下一首</Button>
          </div>
        </div>
      </>
    )
  }



}
 
