import React from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import { CategoriesComponent } from './components/Video/CategoriesComponent'
import { HeaderComponent } from './components/Video/HeaderComponent'
import { VideoComponent } from './components/Video/VideoComponent'
import { IPCInfo, VideoItem, getRandomNum } from './utils/index'
export class App extends React.Component {
  state = {
    currentVideoInfo: {} as VideoItem,
    videoList: [],
    categoriesList: [] as any
  }
  getVideo = (data: VideoItem) => {
    const params = {
      type: 'getVideoContent',
      data: data
  } 

    window.Main.sendMessage(params as IPCInfo);
    window.Main.on('getVideoContent_back', (data: any) => {
      const blob = new Blob([data.file], { type: 'mp4' })
      const url = URL.createObjectURL(blob)
      this.setState({
        currentVideoInfo: {
          ...this.state.currentVideoInfo,
          url: url
        }
      })
  })
  }
    // getAlll dirs--->cates 
  getAllCates = () => {
      const params = {
        type: 'getAllCates',
        data: {
          path: 'E:\\RESP'
        }
      } 
      window.Main.sendMessage(params as IPCInfo);
      window.Main.on('getAllCates_back', (data: any) => {
        console.log('all--cates', data)
        this.setState(
          {
            categoriesList: data
          }
        )
      })
  }
  getAllVideosInCate = (data) => {
    const params = {
      type: 'getAllVideosInCate',
      data: {
        path: data.path
      }
  } 
    window.Main.sendMessage(params as IPCInfo);
    window.Main.on('getAllVideosInCate_back', (data: any) => {
      console.log('获得数据>>>', data)
        this.setState({
          videoList: data
        })
        if (!this.state.currentVideoInfo.url) {
          const randomItem: VideoItem = this.state.videoList[getRandomNum(this.state.videoList.length)]
          this.setState({
            currentVideoInfo: {
              ...randomItem,
            }
          })
          this.getVideo(randomItem)
        }
    })
  }
  nextVideo = (type: string) => {
    console.log('type>>', type)
    const currenVideoIndex = this.state.videoList.findIndex((item) => item.id === this.state.currentVideoInfo.id)
    let target = -1
    switch(type) {
      case 'last':
        if (currenVideoIndex === 0) {
          target = this.state.videoList.length - 1
        } else {
          target = currenVideoIndex - 1
        }
        this.setState({
          currentVideoInfo: {
            ...this.state.videoList[target],
          }
        })
        this.getVideo(this.state.videoList[target])
        break
      case 'next':

        if (currenVideoIndex === this.state.videoList.length - 1) {
          target = 0
        } else {
          target = currenVideoIndex + 1
        }
        this.setState({
          currentVideoInfo: {
            ...this.state.videoList[target],
          }
        })
        this.getVideo(this.state.videoList[target])
        break;
      default:
        break
    }


  }
  async componentDidMount(): Promise<void> {
    console.log('appp----')
    this.getAllCates()
    // this.getAllVideosInCate()
  }
  render() {
    return (
      <div className='App'>
        <GlobalStyle />
        <div className='cate-st'>
          <HeaderComponent
            handleClickCateItem = { this.getAllVideosInCate}
            categoriesList = { this.state.categoriesList }
            videoList = { this.state.videoList }/>
          <CategoriesComponent
            handleClickVideoItem = { this.getVideo }
            currentVideoInfo = { this.state.currentVideoInfo }
            videoList = { this.state.videoList }/>
        </div>
        <VideoComponent
          currentVideoInfo = { this.state.currentVideoInfo }
          nextVideo={ this.nextVideo }
          />
      </div>
    )
  }
}
