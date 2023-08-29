
import { Component  } from 'react';
import { Button } from '../Button'
import React from 'react'
import { predealVideoName } from '../../utils';
import { IPCInfo } from '../../utils';
// import { IPCInfo, VideoItem, getRandomNum } from './utils/index'
import { VideoItem, getRandomNum } from '../../utils/index'

interface CategoriesComponentProps {
  handleClickVideoItem: any,
  videoList: Array<VideoItem>
}
interface CategoriesComponentState {
}
export class CategoriesComponent extends Component<CategoriesComponentProps, CategoriesComponentState> {
  state = {
    style: {
      width: '250px',
      height: 'calc(100vh - 200px)',
      overflow: 'scroll',
      padding: '5px',
    }
  }

  handleClickVideo = (e: any, data: VideoItem) => {
    this.props.handleClickVideoItem(data)
  }
  componentDidMount(): void {
  }

  render(): React.ReactNode {
    return  (
      <div style={this.state.style}>
          { this.props.videoList.map((video: VideoItem, index: number) => {
              return (
                  <Button key={ index } onClick={ (e) => this.handleClickVideo(e, video) }>{ video.name.length > 7?video.name.slice(0,7) + '...': video.name}</Button>
              )
          })}
      </div>
    )
  }
}
 
