import React, { useEffect, useState } from 'react'
import './index.scss'

interface ITest {
    name: string,
    key: number
}
const CategoryComponent = (props: any) => {
    console.warn('子组件A')
    const { data } = props
    useEffect(() => {
        console.log('子组件A--监听数据变化', data)
    }, [data])
    return (
        <div className='CategoryComponent pd5'>
            { data.map((item) => {
                return (
                    <div className='CategoryComponent-item flex-cc mgb5' key={item.key}>
                        { item.name }
                    </div>
                )
            })}
        </div>
    )
}
export default CategoryComponent