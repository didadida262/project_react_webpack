import { useEffect, useState } from "react";

import { generateyourLifeTime } from "@/utils/common_weapons";

export default function YourLife() {
  const [time, settime] = useState("");
  const generateTime = () => {
    const res = generateyourLifeTime();
    console.log("res>>>", res);
    settime(res);
  };
  useEffect(() => {
    const timerID = setInterval(() => {
      generateTime();
    }, 300);
    return () => {
      timerID && clearInterval(timerID);
    };
  }, []);
  return (
    <div className="w-full h-3/5 flex tems-center flex-col gap-y-9 px-5 py-5">
      <span className="font-Oswald text-[72px] leading-[107px] text-[#FFFFFF]">
        You have walking the Road
      </span>
      <span className="font-Oswald text-[72px] leading-[107px] text-[#FFFFFF]">
        {time}
      </span>
    </div>
  );
}
