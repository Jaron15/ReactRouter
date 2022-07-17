import React from 'react'
//the NavLink component allows you to load different pages without sending a new request every time 
import { Navlink } from 'react-router-dom'
import classes from './MainHeader.module.css'

const MainHeader = () => {
  return (
    <header className={classes.header}>
        <nav>
        <ul>
            <li>
            <Navlink activeClassName={classes.active} to="/welcome">Welcome</Navlink>
            </li>
            <li>
            <Navlink activeClassName={classes.active} to="/products">Products</Navlink>
            </li>
        </ul>
        </nav>
    </header>
  )
}

export default MainHeader