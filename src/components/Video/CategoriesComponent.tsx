
import { useState } from 'react';
import { Button } from '../Button'
import React from 'react'
import { predealVideoName } from '../../utils';
import { IPCInfo } from '../../utils';


export class CategoriesComponent extends React.Component {
  state = {
    style: {
      width: '250px',
      height: '100vh',
      overflow: 'scroll',
      padding: '5px'
    }
  }

  handleClickVideo = (e, data) => {
    this.props.handleClickVideoItem(data)
  }
  componentDidMount(): void {
  }

  render(): React.ReactNode {
    return  (
      <div style={this.state.style}>
          { this.props.videoList.map((video, index) => {
              return (
                  <Button key={ index } onClick={ (e) => this.handleClickVideo(e, video) }>{ video.name.slice(0,-9)}</Button>
              )
          })}
      </div>
    )
  }
}
 
