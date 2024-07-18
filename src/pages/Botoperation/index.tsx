/*
 * @Description:
 * @Author: didadida262
 * @Date: 2024-05-27 10:10:25
 * @LastEditors: didadida262
 * @LastEditTime: 2024-07-18 15:07:19
 */
import { Button } from 'antd';
import cn from 'classnames';
import { useContext } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import { ButtonCommon, EButtonType } from '@/components/ButtonCommon';

import { ThemeContext, ThemeMode } from '../../components/themeProvider';

const LightDark = ({ className }) => {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  console.log('currentTheme>>>', currentTheme);
  const handleClick = async (mode) => {
    // dispatch(setLightDarkMode(mode) as any)
  };
  return (
    <div className={cn('h-[60px] px-2 py-2', className)}>
      {/* <Button icon={ currentTheme === 'Dark Mode'? <BsFillMoonFill />: <BsFillSunFill />} onClick={() => setCurrentTheme(currentTheme === 'Dark Mode'?ThemeMode.LIGHT_MODE: ThemeMode.DARK_MODE)}>
       <span>{currentTheme}</span>
      </Button> */}
      <ButtonCommon
        type={EButtonType.SIMPLE}
        onClick={() =>
          setCurrentTheme(
            currentTheme === 'Dark Mode'
              ? ThemeMode.LIGHT_MODE
              : ThemeMode.DARK_MODE,
          )
        }>
        {currentTheme === 'Dark Mode' ? <BsFillMoonFill /> : <BsFillSunFill />}
        <span className='ml-[8px]'>{currentTheme}</span>
      </ButtonCommon>
    </div>
  );
};

export default LightDark;
