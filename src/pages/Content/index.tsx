import React from 'react'
import { Outlet } from 'react-router-dom'

const ContentComponent = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  )
}

export default ContentComponent