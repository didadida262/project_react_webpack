/*
 * @Author: hhvcg 719713496@qq.com
 * @Date: 2023-10-19 15:52:00
 * @LastEditors: didadida262
 * @Description: 
 * 
 */
import { isNumber } from "lodash";

export const getTablePagination = (page = 1, itemsPerPage = 10): any => ({
  pageIndex: page - 1,
  pageSize: itemsPerPage
});
export function waitTime(time: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("wonimamamam>>>>");
    }, time);
  });
}

export const getRandomColor = () => {
  // rgba(x,y,z,透明度)
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const t = Math.random().toFixed(1);
  return `rgba(${r}, ${g}, ${b}, ${t})`;
};

/**
 * @description: 比特转换器
 * @param {*} name 名称
 * @param {*} bytes 比特值大小
 * @return {*} MB单位值
 */

// 千分号格式化数字
export function transferNum(num: any) {
  if (!isNumber(num)) return "-";
  return num.toLocaleString();
}

export const formatBytes = (name, bytes) => {
  return name + ": " + (bytes / 1024 / 1024).toFixed(2) + " MB ";
};

export const formatTime = (name, time) => {
  return time / 1000 + "s";
};
// 年月日时分秒
export const timestampToDateTime = timestamp => {
  var date = new Date(timestamp); // 转换为Date对象
  var year = date.getFullYear(); // 获取年份
  var month = ("0" + (date.getMonth() + 1)).slice(-2); // 获取月份，转为两位数
  var day = ("0" + date.getDate()).slice(-2); // 获取日，转为两位数
  var hours = ("0" + date.getHours()).slice(-2); // 获取小时，转为两位数
  var minutes = ("0" + date.getMinutes()).slice(-2); // 获取分钟，转为两位数
  var seconds = ("0" + date.getSeconds()).slice(-2); // 获取秒，转为两位数

  // 拼接字符串
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

/**
   * @description: 程序耗时检测器
   * @param {*} 输出名称
   * @param {*} fn
   * @return {*} 输出程序用时
   */
export const costTime = (name, fn) => {
  console.time(name);
  fn();
  console.timeEnd(name);
};

export const generateAtoZ = () => {
  // 'a'.charCodeAt()
};

export function generateyourLifeTime() {
  // 获取当前时间
  const now = new Date();
  // 设置截止日期为 2025 年 1 月 1 日
  const deadline = new Date("1995-12-16");
  // 计算时间间隔（单位：毫秒）
  const timeDiff = now.getTime() - deadline.getTime();
  // 计算天数、小时、分钟和秒数
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(timeDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  const minutes = Math.floor(timeDiff % (1000 * 60 * 60) / (1000 * 60));
  const seconds = Math.floor(timeDiff % (1000 * 60) / 1000);
  return `${days}天 : ${hours}时 : ${minutes}分 : ${seconds}秒`;
}

/**
  * @description: 万能字符获取器
  * @param {*} type small、big、num、any
  * @param {*} start 若类型为any则需要输入开始和结束值，否则输出空
  * @param {*} end
  * @return {*} 返回结果数组
  */
// export const getAllChar = (type, start, end) => {
//   const targetObj = {
//     // 大小写字母：65--90，97-122
//     small: [97, 122],
//     big: [65, 90],
//     // 数字：48--57
//     num: [48, 57],
//     any: [start, end]
//   }
//   const range = targetObj[type]
//   const res = []
//   let point = range[1]
//   while (point >= range[0]) {
//     res.unshift(String.fromCharCode(point))
//     if (point % 70 === 0) {
//       res.unshift('\n')
//     }
//     // charCodeAt
//     point--
//   }
//   return res
// }
