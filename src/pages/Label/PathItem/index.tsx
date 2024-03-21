import React, { useEffect, useState } from 'react'
import './index.scss'

const PathItemComponent = (props: any) => {
    const { data } = props
    console.log('儿子B渲染>>>')
    console.log('儿子B接收到的数据>>>', data)

    const handleClickPathItem = (item) => {
        console.log('handleClickPathItem>>', item)
        item.path.selected = !item.path.selected
    }
    useEffect(() => {
    }, [data])
    return (
        <div className='PathItemComponent pd5'>
            { data.map((item, index) => {
                return (
                    <div
                     className='PathItemComponent-item flex-cc mgb5' 
                     key={index}
                     onClick={() => handleClickPathItem(item)}>
                        { item.name }
                    </div>
                )
            })}
            {/* { data.map((item, index) => {
                return (
                    <div
                     className='PathItemComponent-item flex-cc mgb5' 
                     key={index}
                     >
                       数据： { item }
                    </div>
                )
            })} */}
        </div>
    )
}
export default PathItemComponent