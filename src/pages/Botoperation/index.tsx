import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useDispatch, useSelector  } from 'react-redux';
import { useContext } from "react"

import {ThemeContext, ThemeMode} from '../../components/themeProvider'
import { Button} from 'antd';

const LightDark = () => {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext)
  console.log('currentTheme>>>',currentTheme)
  const handleClick = async (mode) => {
    // dispatch(setLightDarkMode(mode) as any)
    
  }
  return (
    <div className="h-[60px] px-2 py-2">
      <Button icon={ currentTheme === 'Dark Mode'? <BsFillMoonFill />: <BsFillSunFill />} onClick={() => setCurrentTheme(currentTheme === 'Dark Mode'?ThemeMode.LIGHT_MODE: ThemeMode.DARK_MODE)}>
       <span>{currentTheme}</span>
      </Button>
    </div>
    )
}

export default LightDark