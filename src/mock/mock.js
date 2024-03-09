import Mock from "mockjs";
import db from "./db.json";

// 模拟延迟
Mock.setup({
    timeout:500
  })
// Mock.mock('/data',{code:'200',data: db})

// 生成随机数据
Mock.mock('/api/v1/dataSource',function(){
    return Mock.mock({
      'code':0,
      'msg':'',
      'result': db
    })
  })