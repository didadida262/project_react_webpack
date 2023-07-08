
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
  handleNextVideo = (type: string) => {
    this.props.nextVideo(type)
  }
  setListener = () => {
    const videoDom = document.getElementById('player')
    videoDom?.addEventListener('ended', () => {
      console.log('播放结束...')
      this.handleNextVideo('next')
    })

  }

  componentDidMount(): void {
    this.setListener()
  }
  render(): React.ReactNode {
    return (
      <>
        <div style={this.state.style}>
          <div style={this.state.styleVideoInfo}>
              <span> { this.props.currentVideoInfo.name && this.props.currentVideoInfo.name.slice(0,-9) }</span>
          </div>
          <video
            id='player'
            style={this.state.styleVideo}
            controls
            autoPlay
            src={this.props.currentVideoInfo.url}
          >
          </video>
          <div style={this.state.styleVideoOperation}>
            {/* <Button onClick={ this.props.nextVideo}>随机播放</Button> */}
            <Button onClick={ (e) => { this.handleNextVideo('last') }}>Last</Button>
            <Button onClick={ (e) => { this.handleNextVideo('next') }}>Next</Button>
          </div>
        </div>
      </>
    )
  }



}
 
