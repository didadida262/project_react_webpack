import React, { useEffect, useState } from 'react'
import './index.scss'

const PathItemComponent = (props: any) => {
    const { data } = props
    const handleClickPathItem = (item) => {
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
        </div>
    )
}
export default PathItemComponent