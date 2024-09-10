/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-07-31 10:32:27
 * @LastEditors: didadida262
 * @LastEditTime: 2024-09-10 00:07:51
 */
const dataStoreColumns = [
  {
    title: "序号",
    ellipsis: true,
    width: 100
  },
  {
    title: "数据集名称",
    dataIndex: "name",
    ellipsis: true,
    width: 200
  },
  {
    title: "区块链",
    dataIndex: "chainType",
    ellipsis: true,
    width: 150
  },
  {
    title: "数量",
    dataIndex: "total",
    ellipsis: true,
    width: 100
  },
  {
    title: "描述",
    dataIndex: "desc",
    ellipsis: true
  }
];

const res = dataStoreColumns
  .filter(item => item.dataIndex !== "desc")
  .reduce((total, current) => {
    return total + current.width;
  }, 0);
console.log("res>>", res);
