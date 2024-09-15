import React from "react";
import { useEffect, useRef } from "react";
import * as Three from "three";

import { setOrbit, setAxes, setGrid, setGui } from "../../utils/threejsWeapon";
import { EarthCommonV2 } from "./EarthCommonV2";

import "./index.scss";

const threejsComponent = props => {
  return (
    <div className="threejsComponent">
      <EarthCommonV2 />
    </div>
  );
};

export default threejsComponent;
