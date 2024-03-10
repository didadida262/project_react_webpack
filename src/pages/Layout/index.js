import { Link, Outlet, useNavigate, useSearchParams } from 'react-router-dom'

const LayoutComponent = () => {
    return (
        <div>
            <div>我是layout...</div>
            <Outlet></Outlet>
        </div>
    )
}

export default LayoutComponent