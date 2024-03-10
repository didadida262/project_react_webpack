import { Link, useNavigation, useSearchParams, useParams } from 'react-router-dom'

const LoginComponent = () => {
    const params = useParams()
    console.log('pramas>>>', params)
    return (
        <div>
            <div>我是登录...</div>
            <Link to="/index">跳转到内容区域</Link>
        </div>
    )
}

export default LoginComponent