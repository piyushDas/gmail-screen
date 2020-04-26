import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../context'
import Header from '../../Components/Header'
import LeftMenu from '../../Components/LeftMenu'
import EmailList from '../../Components/EmailList'
import ExpandMenu from '../../Components/ExpandMenu'
import './mailbox.css'


const Mailbox = () => {
  const {
    setLoggedInUser,
    getMailsForLoggedInUser,
    emails,
    sentMails,
    inboxFlag

  } = useContext(AppContext)
  useEffect(() => {
    const name = window.localStorage.getItem('username')
    if (name) {
      setLoggedInUser(name)
      getMailsForLoggedInUser(name)
    }
  }, [])
  return (
    <div className="desktop-shell">
      <div className="flex">
        <ExpandMenu />
        <div>
          <Header />
          {/* {loggedInUser} */}
          <div className="flex">
            
            <LeftMenu />
            <div>
              <EmailList flag={inboxFlag} data={inboxFlag ? emails : sentMails} />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Mailbox