import { Link, Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import{ Button} from 'antd'
import './index.scss'
import Menu from '../menu'
import ContentComponent from '../Content'
import HeaderComponent from '../Header'

const LayoutComponent = () => {
  return (
    <div className='layout flex-col-sb'>
      <div className='header'>
      <HeaderComponent />
      </div>
      <div className='view flex-sb'>
        <div className='menu'>
          <Menu />
        </div>
        <div className='content'>
          <ContentComponent />
        </div>
      </div>
    </div>
  )
}

export default LayoutComponent