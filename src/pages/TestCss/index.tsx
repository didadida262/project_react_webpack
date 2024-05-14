import { Button } from 'antd'
import React, { useEffect,useCallback,useRef, forwardRef, useImperativeHandle, useState, useMemo, memo, useContext } from "react"
import { ThemeContext,ThemeMode } from "../../components/themeProvider"
import pattern from '../../styles/pattern';
import {StickyScrollRevealDemo} from './StickyCompo'

const TestCss = () => {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  const myRef = useRef(null);



  const iniObserver = () => {
    if (!myRef.current) {  
        return
    } 
    console.log(myRef.current); // 这是原生的DOM对象  
    let options = {
        threshold: 1.0,
      };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry:any) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1
                } else {
                    entry.target.style.opacity = 0
                }
            })
        }, options)
    
        observer.observe(myRef.current);
    }
    const handleScroll = () => {
        console.log('scroll')
    }
  useEffect(() => {
    iniObserver()
    // window.addEventListener('scroll', handleScroll);
    // return () => {
    //     window.removeEventListener('scroll', handleScroll);
    // };
    
  }, [])

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //         return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //     };
    // });

    return (
        <div>
            测试css
            <div>
                <div className="fadeIn" >
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
            <div className={`${pattern.fontOswald48}`}>测试字体</div>
            <div className={`${pattern.fontOswald48}`}>测试字体</div>
            <div className={`${pattern.fontOswald48}`}>测试字体</div>
            <div className={`${pattern.fontOswald48}`}>测试字体</div>
            <div className={`${pattern.fontOswald48}`}>测试字体</div>
            <div className={`${pattern.fontOswald48}`}>测试字体</div>
            <div className={`${pattern.fontOswald48}`}>测试字体</div>
            <div>
                <span>测试滚动高亮</span>
                <div>
                    <StickyScrollRevealDemo/>
                </div>
            </div>
            <div>
                <span>测试交叉</span>
                <div className='w-[300px] h-[200px] markBorderG flex justify-center items-center' >
                    <div className='w-[100px] h-[100px] markBorderR' ref={myRef}>
                        内容去
                    </div>
                    
                </div>
            </div>

        </div>
        
    )
}

export default TestCss
