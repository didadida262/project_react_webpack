/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-10-24 10:23:44
 * @LastEditors: didadida262
 * @LastEditTime: 2024-10-28 15:10:57
 */
import apis from "./axios";

export const getWaferInfo = async () => {
  return await apis.get("getWaferInfo");
};

export const getWaferDotInfo = async () => {
  return await apis.get("getWaferDotInfo");
};
