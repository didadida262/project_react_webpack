import React, { useState, useRef, useEffect } from 'react'

interface IProps {
  uids: Array<number>
}
export default function TemplateReact(props: IProps) {
  const { uids } = props
  return <div>
    <span>template!!</span>
  </div>
}