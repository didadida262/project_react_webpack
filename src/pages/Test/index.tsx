

import { ButtonCommon, EButtonType } from "@/components/ButtonCommon";

import "./index.scss";

import React, {
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
  useMemo,
  memo,
  useContext,
  useEffect
} from "react";
import { Observable } from "rxjs";

import "./index.scss";





const TestComponent = function () {
  const [count, setCount] = useState(0)
  
  const handleStateClick = () => {
    console.log('handleStateClick')
    setCount(count + 1)
    console.log('count>>>', count)
  }

  return (
    <div className="container flex justify-between items-center w-full h-full">
      <ButtonCommon
        type={EButtonType.PRIMARY}
        onClick={handleStateClick}
      >
        <span>测试state{count}</span>
      </ButtonCommon>
    </div>
  )
};
export default TestComponent;
