/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-12-06 14:38:08
 * @LastEditors: didadida262
 * @LastEditTime: 2024-12-06 17:43:47
 */
import { useState } from "react";

import lootbox_header_rewards_dragontrain from "@/assets/lootbox/lootbox_header_rewards_dragontrain.png";
import lootbox_header_rewards_lumens from "@/assets/lootbox/lootbox_header_rewards_lumens.png";
import lootbox_header_rewards_points from "@/assets/lootbox/lootbox_header_rewards_points.png";
import lootbox_header_rewards_usdc from "@/assets/lootbox/lootbox_header_rewards_usdc.png";
import lootbox_header_rewards_ustd from "@/assets/lootbox/lootbox_header_rewards_ustd.png";

export default function RewardsLogo() {
  const [logolist, setlogolist] = useState([
    {
      name: "Lumens",
      value: 1000,
      img: lootbox_header_rewards_lumens
    },
    {
      name: "Points",
      value: 1000,
      img: lootbox_header_rewards_points
    },
    {
      name: "USTD",
      value: 1000,
      img: lootbox_header_rewards_ustd
    },
    {
      name: "USDC",
      value: 1000,
      img: lootbox_header_rewards_usdc
    },
    {
      name: "Dragon Train",
      value: 1000,
      img: lootbox_header_rewards_dragontrain
    }
  ]);
  return (
    <div className="border-[1px] border-b-[4px] border-solid border-[#2c3148]  w-[720px] h-[154px] bg-[#111423] rounded-[18px] flex flex-col justify-between py-[17.5px] px-[36px]">
      <span className="text-[20px] font-medium">Rewards:</span>
      <div className="logocontainer flex justify-start items-center gap-x-[27px]">
        {logolist.map((logoItem: any, index: number) =>
          <div
            key={index}
            className="flex flex-col items-center justify-between"
          >
            <img src={logoItem.img} alt="" className="w-[56px] h-[56px]" />
            <span>
              {logoItem.value} {logoItem.name}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
