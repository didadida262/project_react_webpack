import { SetStateAction, useState } from "react";

import TableTiny from "@/components/TableTiny";

export default function MyTreasure() {
  const [isLoading, setisLoading] = useState(false);
  const [data, setdata] = useState({
    dataList: [
      {
        reward: 100,
        type: "LUMENS",
        status: true
      },
      {
        reward: 100,
        type: "USTD",
        status: false
      },
      {
        reward: 20,
        type: "USDC",
        status: true
      },
      {
        reward: 100,
        type: "LUMENS",
        status: true
      },
      {
        reward: 100,
        type: "USTD",
        status: false
      }
    ],
    total: 0
  });

  return (
    <div className="h-[242px] w-[800px] markBorderG">
      <TableTiny
        data={data}
        isLoading={isLoading}
        // bodyRowClassName="!bg-[#111423] !rounde-[8px]"
      />
    </div>
  );
}
