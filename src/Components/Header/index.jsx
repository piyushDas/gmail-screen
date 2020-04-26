import React from 'react'
import './header.css'

const Header = ({
  componentClassName,
  width
}) => {
  return (
    <div className="top-header" >
      <div className="flex flex-middle">
        <div className="menu fa fa-bars" />
        <div className="header-search">
          <input type="text" id="search" />
          <label htmlFor="search">Search for something...</label>
        </div>
      </div>
      
      <div className="flex flex-middle flex-end">
        <div className="header-opts fa fa-envelope" />
        <div className="header-opts fa fa-bell" />
        <div className="header-opts flex">
          <div className="fa fa-sign-out" />
          <div>Logout</div>
        </div>
      </div>
    </div>
  )
}

export default Header