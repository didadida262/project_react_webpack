const arr = [1,2,3,4,5,6,7,8,9] 
const k=2
const result = [2,1,4,3,6,5,8,7,9]

const arrNode = arr.map((item) => {
  const obj = {
    val: item,
    next: null
  }
  return obj
})

for (let i = 0 ; i < arrNode.length -1; i++) {
  const cur = arrNode[i]
  cur.next = arrNode[i + 1]
}
arrNode[arrNode.length -1].next = null

console.log('arrNode>>>', arrNode)


const fn = (firstNode, k) => {
  while(firstNode) {
    let count = 0
    const curArr = []
    while (count < k) {
      curArr.push(firstNode)
      firstNode = firstNode.next
      count++
    }
    for (let i =0; i < Math.ceil(curArr.length / 2); i++) {
      const node1 = curArr[i]
      const node2 = curArr[curArr.length - 1 - i]
        reverse(node1, node2)
    }
    firstNode = curArr[curArr.length - 1].next
  }

}

const reverse = (node1, node2) => {
  const arr = []
  while (node1) {
    arr.shift(node1)
    node1 = node1.next
  }
  for (let i =0; i < arr.length -1; i++) {
    const cur = arr[i]
    const curnext = arr[i+1]
    cur.next = curnext
  }
}
fn(arrNode[0], k)

