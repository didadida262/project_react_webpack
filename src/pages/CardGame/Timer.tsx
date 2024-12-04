/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-12-04 10:49:04
 * @LastEditors: didadida262
 * @LastEditTime: 2024-12-04 11:19:32
 */
import { useEffect, useState } from "react";

import NumCardItem from "./NumCardItem";

export default function Timer() {
  const [time, settime] = useState({
    year: "",
    mouth: "",
    day: ""
  }) as any;
  const getNowTime = () => {
    const date = new Date();
    const year = date.getFullYear(); // 获取年份
    const mouth = ("0" + (date.getMonth() + 1)).slice(-2); // 获取月份，转为两位数
    const day = ("0" + date.getDate()).slice(-2); // 获取日，转为两位数
    const res = {
      ...time,
      year: year,
      mouth: mouth,
      day: day
    };
    settime(res);
    console.log("res>>>", res);
  };
  useEffect(() => {
    getNowTime();
  }, []);
  return (
    <div className=" relative mx-auto flex w-full items-start justify-between md:w-[650px]">
      <span className=" absolute left-[-60px] top-[74px] hidden h-[22px] w-[45px] text-[15px] font-semibold md:block">
        Ends in
      </span>
      <NumCardItem time={String(time.year)} title="YEAR" />
      <NumCardItem time={time.mouth} title="MOUTH" />
      <NumCardItem time={time.day} title="DAY" />
      {/* {data.length &&
      data.map((item: any, index: number) => (
        <>
          <TimeItem name={item.name} value={item.value} />
          {index !== 3 && (
            <div className=" flex h-[51.24px] w-[10px] flex-col items-center  justify-center text-[30px] font-semibold leading-[40px] md:h-[98px] md:w-[30px] md:text-[70px] md:leading-[70px]">
              <div className="mb-[6px] aspect-[1] w-[4px] rounded-full bg-white md:w-2"></div>
              <div className=" aspect-[1] w-[4px] rounded-full bg-white md:w-2"></div>
            </div>
          )}
        </>
      ))} */}
    </div>
  );
}
