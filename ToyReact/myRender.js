
const createTextNode = (child) => {
  return {
    type: 'text',
    props: {
      nodeValue: child,
      children: []
    }
  }
}
const myCreateElement = (type, props, ...children) => {
    return {
      type: type,
      props: {
        ...props,
        children: children.map((child) => typeof child === 'object'? child: createTextNode(child))
      },
    }
  }
const createDom = (fiber) => {
    const dom = fiber.type === 'text'? document.createTextNode(fiber.props.nodeValue): document.createElement(fiber.type)
  return dom
}
// const creatmyCreateElementeElement = (type, props, ...children) => {
//   return {
//     type,
//     props: {
//       ...props,
//       children: children.map(child =>
//         typeof child === "object"
//           ? child
//           : createTextElement(child)
//       ),
//     },
//   }
// }
// 初始版本
// const myRender = (element, container) => {
//     const dom = element.type === 'text'? document.createTextNode(element.props.nodeValue): document.createElement(element.type)
//     Object.keys(element.props).filter((item) => item !== 'children').forEach((item) => dom[item] = element.props[item])
//     element?.props?.children?.forEach((child) => myRender(child, dom))
//     container.appendChild(dom)
//   }


// // fiber架构版本

let nextUniteWork = null
const performUniteOfWork = (fiber) => {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber)
    console.log('fiber>>>',fiber)
    console.log('fiber.dom>>>',fiber.dom)
  }
  if (fiber.parent) {
    fiber.parent.dom.appendChild(fiber.dom)
  }
  const elements = fiber?.props?.children
  console.log('elements>>', elements)
  let preSibling = null
  elements?.forEach((childElement, index) => {
    const newFiber = {
      parent: fiber,
      props: childElement.props,
      type: childElement.type,
      dom: null
    }
    if (index === 0) {
      fiber.child = newFiber
    } else {
      preSibling.sibling = newFiber
    }
    preSibling = newFiber
  });
  if (fiber.child) {
    return fiber.child
  }

  let nextFiber = fiber
  while(nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling
    }
    nextFiber = nextFiber.parent
  }

}
const workLoop = (deadline) => {
  let shouldYield = true
  console.warn('执行>>>loop')
  while (nextUniteWork && shouldYield) {
    console.log('执行>>>任务')
    nextUniteWork = performUniteOfWork(nextUniteWork)
    shouldYield = deadline.timeRemaining() > 100
  }
  requestIdleCallback(workLoop)
}
requestIdleCallback(workLoop)

const myRender = (element, container) => {
  console.log('element>>', element)
  nextUniteWork = {
    dom: container,
    props: {
      children: [element]
    }
  }
}
