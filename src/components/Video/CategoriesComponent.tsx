
import { useState } from 'react';
import { Button } from '../Button'

export function CategoriesComponent() {
    const style = {
        width: '250px',
        height: '100vh',
        overflow: 'scroll',
        padding: '5px'
      }
    const [ cates, setCates] = useState([])
    const getAllCates = () => {
        window.Main.sendMessage('getAllCates');
        window.Main.on('getAllCates_back', (data) => {
            console.log('接收到数据>>>', data)
            setCates(data)
        })
    }
  function handleSayHello(e, data) {
    console.log('click>>>>data>>>', data)
    window.Main.sendMessage({
        type: 'getVideoContent',
        data: data
    } );
  }
  return (
    <>
        <div style={style}>
            <Button onClick={ () => {
                getAllCates()
            } }>启动</Button>
            { cates.map((cate, index) => {
                return (
                    <Button key={ index } onClick={ (e) => handleSayHello(e, cate) }>{ cate.path.length > 10? cate.path.slice(80): cate.apth }</Button>
                )
            })}
        </div>
    </>
  )
}
 
