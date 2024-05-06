import { Button } from 'antd'
import React, { useCallback,useRef, forwardRef, useImperativeHandle, useState, useMemo, memo, useContext } from "react"
import { ThemeContext,ThemeMode } from "../../components/themeProvider"
import pattern from '../../styles/pattern';

const TestCss = () => {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);

    return (
        <div>
            测试css
            <div>
                <div className="fadeIn">
                    <p className="test SingleLineTextOverflow bg-[black] text-[green]">
                    这是一段很长很长的文本
                    这是一段很长很长的文本
                    这是一段很长很长的文本
                    这是一段很长很长的文本
                    这是一段很长很长的文本
                    这是一段很长很长的文本
                    这是一段很长很长的文本
                    </p>
                </div>
                <div>
                    <Button onClick={() =>setCurrentTheme(ThemeMode.DARK_MODE)}>黑夜</Button>
                    <Button onClick={() =>setCurrentTheme(ThemeMode.LIGHT_MODE)}>白天</Button>
                    <p>{currentTheme}</p>
                    <div style={{width: '500px', height: '200px', border: '1px solid red'}} className="bg-[--bg-card-color]">
                    测试注意
                    </div>
                </div>
            </div>
            <span className={`${pattern.fontOswald48}`}>测试字体</span>

        </div>
        
    )
}

export default TestCss
