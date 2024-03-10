import { Link, Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import{ Button} from 'antd'
import './index.scss'
const LayoutComponent = () => {
    return (
        <div className='layout'>
            <div className='title'>我是layout...</div>
            <Button>测试</Button>
            <Outlet></Outlet>
        </div>
    )
}

export default LayoutComponent