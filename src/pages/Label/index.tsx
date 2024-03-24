
import './index.scss'
import ViewComponent from './view'
import ToolComponent from './tools'
import { AlipayCircleOutlined, AlibabaOutlined, DiscordOutlined } from '@ant-design/icons';
import { message  } from 'antd';


const LabelComponent = () => {
  const toolsList = [
    {
      key: 'pencil',
      icon: <AlipayCircleOutlined />,
      name: 'pencil'
    },
    {
      key: 'brush',
      icon: <AlibabaOutlined />,
      name: 'brush'
    },
    {
      key: 'line',
      icon: <DiscordOutlined />,
      name: 'line'
    }
  ]
  const handleClickTool = (key) => {
    console.log('key>>>', key)
    message.success(`switch ---> ${key}`, )

  }
  return (
    <div className="Label pd10 flex-sb">
      <div className='tools-container'>
        <ToolComponent
         toolsList={toolsList} 
         handleClickTool={handleClickTool}/>
      </div>
      <div className='view-container'>
        <ViewComponent />
      </div>
    </div>
  )
}

export default LabelComponent