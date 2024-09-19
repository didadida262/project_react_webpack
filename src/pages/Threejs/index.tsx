/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-07-31 10:32:27
 * @LastEditors: didadida262
 * @LastEditTime: 2024-09-18 16:53:13
 */
import React from "react";
import { useEffect, useRef } from "react";
import * as Three from "three";

import { cn } from "@/lib/utils";

import { setOrbit, setAxes, setGrid, setGui } from "../../utils/threejsWeapon";
import { EarthCommonV5 } from "./EarthCommonV5";

import "./index.scss";

const threejsComponent = props => {
  return (
    <div className={cn("threejsComponent px-[20px] py-[20px] w-full h-full")}>
      <EarthCommonV5 />
    </div>
  );
};

export default threejsComponent;
