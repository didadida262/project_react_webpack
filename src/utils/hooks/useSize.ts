import { useMemo } from "react";
import { useWindowSize } from "react-use";

// break points: https://tailwindcss.com/docs/responsive-design
export function useSize() {
  const { width, height } = useWindowSize(Infinity);
  const { angle, type } = window.screen.orientation;
  const isWidthLoading = useMemo(() => width === Infinity, [width]);
  const isMIN = useMemo(
    () => {
      if (width === undefined || width === 0) {
        return true;
      }
      return width < 640;
    },
    [width]
  );

  const isSM = useMemo(
    () => {
      return width >= 640 && width < 768;
    },
    [width]
  );
  const isBiggerThanSM = useMemo(() => width >= 640, [width]);

  const isMD = useMemo(
    () => {
      return width >= 768 && width < 1024;
    },
    [width]
  );
  const isBiggerThanMD = useMemo(() => width >= 768, [width]);

  const isLG = useMemo(
    () => {
      return width >= 1024 && width < 1280;
    },
    [width]
  );
  const isBiggerThanLG = useMemo(() => width >= 1024, [width]);

  const isXL = useMemo(
    () => {
      return width >= 1280 && width < 1536;
    },
    [width]
  );
  const isBiggerThanXL = useMemo(() => width >= 1280, [width]);

  const is2XL = useMemo(
    () => {
      return width >= 1536 && width < 2000;
    },
    [width]
  );
  const isBiggerThan2XL = useMemo(() => width >= 1536, [width]);

  const is3XL = useMemo(
    () => {
      return width >= 2000;
    },
    [width]
  );
  const isBiggerThan3XL = useMemo(() => width >= 3000, [width]);

  /**
   * 通过userAgent判断是否mobile
   */
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const isMobileVertical = useMemo(
    () => type === "portrait-primary" && angle === 0,
    [angle, type]
  );

  return {
    isWidthLoading,
    isMIN,
    isSM,
    isMD,
    isLG,
    isXL,
    is2XL,
    is3XL,
    isMobile,
    isMobileVertical,
    isBiggerThanSM,
    isBiggerThanMD,
    isBiggerThanLG,
    isBiggerThanXL,
    isBiggerThan2XL,
    isBiggerThan3XL,
    width,
    height
  };
}
