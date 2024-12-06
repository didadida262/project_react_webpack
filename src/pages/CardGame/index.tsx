import cn from "classnames";
import { useEffect, useState } from "react";

import { ButtonCommon, EButtonType } from "@/components/ButtonCommon";
import btn_basetickets from "@/assets/lootbox/btn_basetickets.svg";
import btn_skaletickets from "@/assets/lootbox/btn_skaletickets.svg";
import lootbox_card from "@/assets/lootbox/lootbox_card.png";
import lootbox_card_lumens from "@/assets/lootbox/lootbox_card_lumens.png";
import lootbox_card_none from "@/assets/lootbox/lootbox_card_none.png";
import lootbox_card_usdt from "@/assets/lootbox/lootbox_card_usdt.png";

import MyTreasure from "./MyTreasure";
import RewardsLogo from "./RewardsLogo";
import Tabs from "./Tabs";
import Timer from "./Timer";

export default function CardGame() {
  const [flipped, setFlipped] = useState(false);
  const [CardsList, setCardsList] = useState([]) as any;
  const [tickets, settickets] = useState([]) as any;
  const [activeTab, setactiveTab] = useState("mytresure");
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
        type: "USDT",
        amount: 36
      },
      {
        type: "POINTS",
        amount: 35
      },
      {
        type: "USDT",
        amount: 6
      },
      {
        type: "USDT",
        amount: 6
      },
      {
        type: "USDT",
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
        type: "USDT",
        amount: 40
      }
    ];
    const resultData = mockData.slice(0, CardsList.length).map((item: any) => {
      return {
        ...item,
        img:
          item.type === "LUMENS"
            ? lootbox_card_lumens
            : item.type === "USDT" ? lootbox_card_usdt : lootbox_card_none
      };
    });
    console.log("resultData>>>", resultData);
    setCardsList(resultData);
    setFlipped(!flipped);
  };
  useEffect(() => {
    const mockticketsData = [
      {
        name: "Sui Tickets",
        count: 10,
        src: btn_basetickets,
        chain: "BASE"
      }
    ];
    const count = mockticketsData[0].count;
    const mockCardsData = Array(count > 10 ? 10 : count)
      .fill(null)
      .map((_, index) => {
        return {
          type: "LUMENS", // type 属性
          amount: 0, // val 属性,
          img: ""
        };
      });
    settickets(mockticketsData);
    setCardsList(mockCardsData);
  }, []);
  return (
    <div
      className="flex justify-around flex-col items-center px-4 relative  bg-cover bg-center bg-no-repeat py-4 font-Oswald  overflow-scroll w-full h-full"
      style={{
        backgroundImage: "url(./lootboxdetailSecond_bg.png)"
      }}
    >
      <div
        className={cn(
          " flex flex-wrap gap-x-6 gap-y-10 max-w-[1092px] mx-auto my-4",
          "justify-around"
          // CardsList.length % 10 === 0 ? "justify-between" : "justify-start"
        )}
      >
        {CardsList.map((item: any, index: number) =>
          <div
            key={index}
            className={cn(
              `relative transform duration-500`,
              "hover:cursor-pointer",
              "hover:scale-110"
            )}
          >
            <img
              src={lootbox_card}
              alt=""
              className={cn(
                "aspect-[0.69] w-[122px] select-none duration-1000 lg:w-[172px]",
                `transition-transform ${flipped
                  ? "rotate-y-180"
                  : "rotate-y-0"}`
                // `transition-transform ${flipped ? "spin" : ""}`
              )}
              style={{
                backfaceVisibility: "hidden"
              }}
            />
            <div
              className={cn(
                "absolute left-0 top-0 aspect-[0.69] w-[122px] select-none duration-1000  lg:w-[172px]",
                `transition-transform ${flipped
                  ? "rotate-y-0"
                  : "rotate-y-180"}`
              )}
              style={{
                backfaceVisibility: "hidden"
              }}
            >
              <img src={item.img} alt="" />
              {item.type &&
                <div
                  className={cn(
                    "absolute left-0 bottom-[36px]  flex flex-col items-center w-full"
                  )}
                >
                  <span className="text-[26px] font-semibold">
                    {item.amount}
                  </span>
                  <span className="text-[17px] font-semibold">
                    {item.type}
                  </span>
                </div>}
            </div>
          </div>
        )}
      </div>
      <div className="btn-container  flex items-center justify-center max-w-[1092px] mx-auto">
        {tickets.slice(0, 1).map((ticket: any, index: number) =>
          <div
            key={index}
            className="flex aspect-[3.45] w-[304px] items-center bg-cover bg-center bg-no-repeat px-[10px] hover:cursor-pointer"
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
            <img src={ticket.src} alt="" className="mr-3" />
            <span className=" text-[24px] font-semibold select-none">
              {ticket.name} X {ticket.count}
            </span>
          </div>
        )}
      </div>
      {/* <Timer />
      <Tabs activeTab={activeTab} setactiveTab={setactiveTab} />
      <MyTreasure /> */}
      <RewardsLogo />
    </div>
  );
}
