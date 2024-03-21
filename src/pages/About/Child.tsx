import React, { useCallback,useRef, forwardRef, useImperativeHandle, useState, useMemo, memo } from "react"
import { Button } from 'antd'


const Child = (props) => {
    const { text } = props
    console.log('儿子A渲染')
    console.log('data>>>', text)

    return (
        <div>
          {/* <span>儿子：{text.join('+')}</span> */}
          { text.map((item, index) => {
            return (
              <span key={index}>{item}</span>
            )
          })}

          {/* <Button onClick={() => handleClick(Math.random())}>儿子按钮</Button> */}
        </div>
      )
  }


export default Child


