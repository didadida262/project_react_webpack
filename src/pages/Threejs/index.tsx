/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-07-31 10:32:27
 * @LastEditors: didadida262
 * @LastEditTime: 2024-09-15 23:05:47
 */
import React from "react";
import { useEffect, useRef } from "react";
import * as Three from "three";

import { cn } from "@/lib/utils";

import { setOrbit, setAxes, setGrid, setGui } from "../../utils/threejsWeapon";
import { EarthCommonV2 } from "./EarthCommonV2";

import "./index.scss";

const threejsComponent = props => {
  return (
    <div
      className={cn(
        `bg-[url('./assets/bgNew.png')] bg-cover bg-center`,
        "threejsComponent px-[20px] py-[20px]"
      )}
    >
      <EarthCommonV2 />
    </div>
  );
};

export default threejsComponent;
