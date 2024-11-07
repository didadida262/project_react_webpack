import { useEffect, useRef, useState } from 'react';
// React18开启严格模式，开发时useEffect会执行两次。react-use 中 useMount useEffectOnce 不兼容，会执行两次
// 参考 https://dev.to/ag-grid/react-18-avoiding-use-effect-getting-called-twice-4i9e 写了一个新的，只会执行一次
export function useEffectOnlyOnce(effect: () => void | (() => void)) {
  const effectFn = useRef(effect);
  const destroyFn = useRef<void | (() => void)>();
  const effectCalled = useRef(false);
  const rendered = useRef(false);
  const [, refresh] = useState(0);

  if (effectCalled.current) {
    rendered.current = true;
  }

  useEffect(() => {
    if (!effectCalled.current) {
      destroyFn.current = effectFn.current();
      effectCalled.current = true;
    }

    refresh(1);

    return () => {
      if (rendered.current === false) return;
      if (destroyFn.current) destroyFn.current();
    };
  }, []);
}
