import { Link, useNavigate, useSearchParams } from 'react-router-dom'

const ContentComponent = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div>我是内容...</div>
            <button onClick={() => navigate('/login/10')}>跳转到login</button>
        </div>
    )
}

export default ContentComponent