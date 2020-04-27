import React, { useContext } from 'react'
import NoResults from '../NoResults'
import EmailListItem from '../EmailListItem'
import OpenMail from '../OpenMail'
import './email.css'
import { AppContext } from '../../context'

const EmailList = () => {
  const {
    emails,
    sentMails,
    inboxFlag,
    readEmail,
    setReadEmailFlag,
    currentEmail,
    setCurrentEmail,
    getUnreadEmailCount,
    updateSeenCurrentMail
  } = useContext(AppContext)
  let list = (
    <div>Loading results</div>
  )
  const data = inboxFlag ? emails : sentMails

  const readMail = res => () => {
    setReadEmailFlag(true)
    setCurrentEmail(res)
    updateSeenCurrentMail(res.id)
  }

  const backToEmails = () => {
    setReadEmailFlag(false)
    setCurrentEmail({})
  }

  if (data && data.length) {
    list = (
      <>
        {
          data.map((result, index) => (
            <EmailListItem
              result={result}
              flag={inboxFlag}
              key={`${index}_email`}
              readMail={readMail(result)}
            />
          ))
        }
      </>
    )
  } else {
    list = (
      <NoResults flag={inboxFlag} />
    )
  }

  let mainTemplate
  let firstButton
  if (readEmail) {
    mainTemplate = (
      <OpenMail mail={currentEmail} flag={inboxFlag}/>
    )
    firstButton = (
      <div className="flex email-opt" onClick={backToEmails} >
        <div className="fa fa-arrow-left" />
        <div>Back</div>
      </div>
    )
  } else {
    mainTemplate = (
      <ul id="email-list" className="email-list">
        {list}
      </ul>
    )
    firstButton = (
      <div className="flex email-opt">
        <div className="fa fa-refresh" />
        <div>Refresh</div>
      </div>
    )
  }

  return (
    <div className="email-box">
      <div className="box-header">
        <div>
          {inboxFlag ? `Inbox ${getUnreadEmailCount ? `(${getUnreadEmailCount})`: '' }` : 'Sent items'}
        </div>
        <div>
          <input type="text" placeholder="Search here"/>
          <button>Search</button>
        </div>
      </div>
      <div className="box-subheader">
        <div className="flex">
          {firstButton}
          <div className="fa fa-eye email-opt" />
          <div className="fa fa-exclamation email-opt" />
          <div className="fa fa-trash-o email-opt" />
        </div>
        <div className="flex">
          <div className="fa fa-arrow-left email-opt" />
          <div className="fa fa-arrow-right email-opt" />
        </div>
      </div>
      {mainTemplate}
    </div>
  )
}

export default EmailList