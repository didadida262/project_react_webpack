// 发起一个请求，如果1s内没有响应，发起第二个请求，2s内没有响应，发起第三个请求，这三个请求，有一个请求响应成功则返回响应成功的结果

// const status1 = axios.get('www.baidu.com')

// setTimeout(() => {
//     if (status1 === 'pending') {
//         const status2 = axios.get('www.baidu.com')
//         setTimeout(() => {
//             if (status2 === 'pending') {
//                 const status2 = axios.get('www.baidu.com')
//             }
//         }, 2000)
//     }
// }, 1000);





let p1, p2, p3
p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      p2 = new Promise((resolve2, reject2) => {
        setTimeout(() => {
          p3 = new Promise((resolve3, reject3) => {
            fetchData(resolve3, reject3)
          })
        }, 3000)
      fetchData(resolve2, reject2)
      })
    }, 1000)
    fetchData(resolve, reject)
})

const fn = () => {
    return Promise.race([p1, p2, p3])
}
const fetchData = (resolve, reject) => {
    fetch('/api/getData')
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
}
fn()
