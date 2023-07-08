import React from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import { CategoriesComponent } from './components/Video/CategoriesComponent'
import { VideoComponent } from './components/Video/VideoComponent'

export class App extends React.Component {
  nextVideo = () => {
    console.log('>>>>>>>')
  }
  render() {
    return (
      <div className='App'>
        <GlobalStyle />
        <CategoriesComponent />
        <VideoComponent nextVideo={this.nextVideo}/>
      </div>
    )
  }
}
