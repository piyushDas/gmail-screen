import React from 'react'
import './openmail.css'
// import { AppContext } from '../../context'

const OpenMail = ({ mail, flag }) => {
  const time = new Date(mail.time)
  return (
    <div className="open-mail">
      <div className="mail-subject">
          {mail.subject}
          <span>{time.toString().substr(4, 17)}</span>
      </div>
      <div>
          <div className="mail-contact">
              <span>{flag ? 'from: ' : 'to: '} </span>
              {flag ? mail.sender : mail.receiver}
            </div>
          {/* <div>to: {mail.receiver}</div> */}
      </div>
      <div className="mail-content">
          {mail.content}
      </div>
    </div>
  )
}

export default OpenMail