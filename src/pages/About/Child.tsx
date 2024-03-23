import React, { useCallback,useRef, forwardRef, useImperativeHandle, useState, useMemo, memo } from "react"
import { Button } from 'antd'


const Child = (props) => {
    const { count } = props
    console.log('儿子A渲染1')
    const content = useMemo(() => {
    console.log('儿子A渲染2')
      return count
    }, [count])
    return (
        <div>
          <span>erzi</span>
        </div>
      )
  }


export default Child


