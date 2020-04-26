import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../context'
import Header from '../../Components/Header'
import LeftMenu from '../../Components/LeftMenu'
import OpenMail from '../../Components/OpenMail'
import ExpandMenu from '../../Components/ExpandMenu'
import './readmail.css'

const Readmail = () => {
  const {
    setLoggedInUser
  } = useContext(AppContext)
  useEffect(() => {
    const name = window.localStorage.getItem('username')
    if (name) {
      setLoggedInUser(name)
    }
  }, [])
  return (
    <div className="desktop-shell">
      <Header />
      <div className="flex">
        <ExpandMenu />
        <LeftMenu />
        <div>
          <OpenMail />
        </div>
      </div>
    </div>
  )
}

export default Readmail