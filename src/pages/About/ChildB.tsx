import React, { useCallback,useRef, forwardRef, useImperativeHandle, useState, useMemo, memo } from "react"
import { Button } from 'antd'


const Childb = (props) => {
    const { text, handleClickArr } = props

    return (
        <div>
          <Button onClick={() => handleClickArr(Math.random())}>儿子B按钮</Button>
        </div>
      )
  }


export default Childb


