import cn from "classnames";
import { useState } from "react";

import { ButtonCommon, EButtonType } from "@/components/ButtonCommon";
import btn_basetickets from "@/assets/lootbox/btn_basetickets.svg";
import btn_skaletickets from "@/assets/lootbox/btn_skaletickets.svg";
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
  const [tickets, settickets] = useState([
    {
      name: "Base Tickets",
      count: 18,
      src: btn_basetickets,
      chain: "BASE"
    },
    {
      name: "Sui Tickets",
      count: 10,
      src: btn_basetickets,
      chain: "sui"
    }
  ]);
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
    setFlipped(!flipped);
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
      <div className="btn-container  flex items-center">
        {tickets.slice(0, 1).map((ticket: any, index: number) =>
          <div
            key={index}
            className=" flex aspect-[3.45] w-[304px] items-center justify-around bg-cover bg-center bg-no-repeat px-[10px] hover:cursor-pointer"
            style={{
              backgroundImage:
                ticket.chain === "sui"
                  ? `url(../sui_ticket_bg.png)`
                  : ticket.chain === "BASE"
                    ? `url(../base_ticket_bg.png)`
                    : `url(../skale_ticket_bg.png)`
            }}
            onClick={() => {
              void hanclick();
            }}
          >
            <img src={ticket.src} alt="" className=" " />
            <span className=" text-[24px] font-semibold select-none">
              {ticket.name} X {ticket.count}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
