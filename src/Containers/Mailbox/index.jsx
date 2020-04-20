import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../context'
// import Header from '../../Components/Header'
// import Search from '../../Components/Search'
// import SearchList from '../../Components/SearchList'
// import LoadMore from '../../Components/Login'
import Compose from '../../Components/Compose'
import './mailbox.css'

const Mailbox = () => {
  const {
    loggedInUser,
    setLoggedInUser,
    sendEmail
  } = useContext(AppContext)

  useEffect(() => {
    const name = window.localStorage.getItem('username')
    if (name) {
      setLoggedInUser(name)
    }
  }, [])

  const [newMail, setNewMail] = useState(false)
  const showMailBox = () => {
    setNewMail(true)
  }
  return (
    <div className="desktop-shell">
      {loggedInUser}
      <div>
        <div>
          <div>
            <button onClick={showMailBox}> Compose Mail </button>
            {
              newMail && <Compose sendEmail={sendEmail} />
            }
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Mailbox