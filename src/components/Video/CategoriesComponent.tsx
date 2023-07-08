
import { useState } from 'react';
import { Button } from '../Button'
import { predealVideoName } from '../../utils';

export function CategoriesComponent() {
    const style = {
        width: '250px',
        height: '100vh',
        overflow: 'scroll',
        padding: '5px'
      }
    const [ cates, setCates] = useState([])
    const [ videoList, setVideoList] = useState([])
    const getAllVideosInCate = () => {
        window.Main.sendMessage(
            {
                type: 'getAllVideosInCate',
                path: 'E:\\RESP\\cate_2\\杰伦全款'
            });
        window.Main.on('getAllVideosInCate_back', (data: any) => {
            console.log('接收到数据>>>', data)
            setVideoList(data)
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
                getAllVideosInCate()
            } }>启动</Button>
            { videoList.map((video, index) => {
                return (
                    <Button key={ index } onClick={ (e) => handleSayHello(e, video) }>{ predealVideoName(video.path).length > 10? predealVideoName(video.path).slice(-20): predealVideoName(video.path)}</Button>
                )
            })}
        </div>
    </>
  )
}
 
