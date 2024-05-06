const myRender = (element, container) => {
    const dom = element.type === 'text'? document.createTextNode(element.props.nodeValue): document.createElement(element.type)
    Object.keys(element.props).filter((item) => item !== 'children').forEach((item) => dom[item] = element.props[item])
    element?.props?.children?.forEach((child) => myRender(child, dom))
    container.appendChild(dom)
  }
