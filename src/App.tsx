import { GlobalStyle } from './styles/GlobalStyle'
import { CategoriesComponent } from './components/Video/CategoriesComponent'
import { VideoComponent } from './components/Video/VideoComponent'

export function App() {


  return (
    <div className='App'>
      
      <GlobalStyle />
      <CategoriesComponent/>
      <VideoComponent/>
    </div>
  )
}