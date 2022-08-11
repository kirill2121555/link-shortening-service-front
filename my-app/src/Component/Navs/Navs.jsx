import React from 'react'
import { NavLink } from 'react-router-dom'

const Navs = () => {

  return (
    <ul className="nav">
      <li className="nav-item">
        <label className="nav-link"><NavLink to='/'>Short link</NavLink></label>
      </li>
      <li className="nav-item">
        <label className="nav-link"><NavLink to='/castomlink'>Custom link</NavLink></label>
      </li>
      <li className="nav-item">
        <label className="nav-link"><NavLink to='/statistics'>Statistics</NavLink></label>
      </li>
    </ul>
  )
}

export default Navs