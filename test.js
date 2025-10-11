
const returnAllChildArr = (arr) => {
  const res = []
  const used = new Array(arr.length).fill(false)
  const walk = (curArr, len) => {
    if (curArr.length === len) {
      if (!res.includes(curArr.join(''))) {
      console.log('curArr>>>2', curArr.join(''))

        res.push(curArr.join(''))
      }
      return
    }
    for (let i = 0; i < len; i++) {
      if (used[i]) continue
      used[i] = true
      curArr.push(arr[i])
      walk(curArr, len)
      curArr.pop()
      used[i] = false
    }
  }

  walk([], arr.length)
  return res
}

console.log(returnAllChildArr('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'.split('')))