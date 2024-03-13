import React from "react"
import { Outlet } from 'react-router-dom'

const AboutComponent = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  )
}

export default AboutComponent