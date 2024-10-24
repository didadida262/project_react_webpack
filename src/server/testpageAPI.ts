import apis from "./axios";

export const getInfo = async () => {
  return await apis.get("getInfo");
};
