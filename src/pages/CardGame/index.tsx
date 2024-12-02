import cn from "classnames";
import { useState } from "react";

import { ButtonCommon, EButtonType } from "@/components/ButtonCommon";
import lootbox_card from "@/assets/lootbox/lootbox_card.png";
import lootbox_card_lumens from "@/assets/lootbox/lootbox_card_lumens.png";
import lootbox_card_none from "@/assets/lootbox/lootbox_card_none.png";
import lootbox_card_usdt from "@/assets/lootbox/lootbox_card_usdt.png";

export default function CardGame() {
  const [flipped, setFlipped] = useState(false);
  const [CardsList, setCardsList] = useState(
    Array(10).fill(null).map((_, index) => {
      return {
        type: "LUMENS", // type 属性
        amount: 0, // val 属性,
        img: lootbox_card_none
      };
    })
  );
  const hanclick = () => {
    // console.log('res>>>', res);
    const mockData = [
      {
        type: "LUMENS",
        amount: 6
      },
      {
        type: "LUMENS",
        amount: 6
      },
      {
        type: "POINTS",
        amount: 36
      },
      {
        type: "POINTS",
        amount: 35
      },
      {
        type: "LUMENS",
        amount: 6
      },
      {
        type: "LUMENS",
        amount: 6
      },
      {
        type: "POINTS",
        amount: 25
      },
      {
        type: "POINTS",
        amount: 50
      },
      {
        type: "POINTS",
        amount: 22
      },
      {
        type: "POINTS",
        amount: 40
      }
    ];
    const resultData = mockData.map((item: any) => {
      return {
        ...item,
        img:
          item.type === "LUMENS"
            ? lootbox_card_lumens
            : item.type === "USDT" ? lootbox_card_usdt : lootbox_card_none
      };
    });
    setCardsList(resultData);
    // setTimeout(() => {
    setFlipped(!flipped);
    // }, 500);
  };
  return (
    <div
      className=" px-4 relative  bg-cover bg-center bg-no-repeat py-8 font-Oswald  max-h-full overflow-scroll"
      style={{
        backgroundImage: "url(./lootboxdetailSecond_bg.png)"
      }}
    >
      <div
        className={cn(
          "flex  flex-wrap gap-x-6 gap-y-10",
          "max-h-[567px] my-4",
          CardsList.length % 10 === 0 ? "justify-between" : "justify-start"
        )}
      >
        {CardsList.map((item: any, index: number) =>
          <div
            key={index}
            className={cn(
              ` relative transition-transform duration-500`,
              // 'hover:rotate-y-180',
              "hover:cursor-pointer",
              "hover:scale-110"
            )}
          >
            <img
              src={lootbox_card}
              alt=""
              className={cn(
                "aspect-[0.69] w-[122px] select-none duration-200  lg:w-[172px]"
              )}
              style={{
                transform: flipped ? " rotateY(180deg)" : "rotateY(0deg)",
                transition: "transform 0.5s",
                backfaceVisibility: "hidden"
              }}
            />
            <img
              // src={lootbox_card_none}
              src={item.img}
              alt=""
              className={cn(
                "absolute left-0 top-0 aspect-[0.69] w-[122px] select-none duration-200  lg:w-[172px]"
              )}
              style={{
                transform: flipped ? " rotateY(0deg)" : "rotateY(180deg)",
                transition: "transform 0.5s",
                backfaceVisibility: "hidden"
              }}
            />
          </div>
        )}
      </div>
      <ButtonCommon
        className={`w-[80px] `}
        type={EButtonType.SIMPLE}
        onClick={() => hanclick()}
      >
        抽奖
      </ButtonCommon>
    </div>
  );
}
