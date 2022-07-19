import React from 'react'
import classes from './MainNavigation.module.css'
import { NavLink } from 'react-router-dom'

//REACT-ROUTER-6 CHANGES
//Links and NavLinks dont take an 'activeClassName' anymore instead you can use
//className={(navData) => navData.isActive ? classes.active : ''}


const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              All Quotes
            </NavLink>
            </li>
            <li>
            <NavLink to="/add-quote" activeClassName={classes.active}>
              Add a Quotes
            </NavLink>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation