import React from 'react'
import NoResults from '../NoResults'
import EmailListItem from '../EmailListItem'
import './email.css'

const EmailList = ({ data, flag }) => {
  let list = (
    <div>Loading results</div>
  )
  if (data && data.length) {
    list = (
      <>
        {
          data.map((result, index) => (
            <EmailListItem
              result={result}
              flag={flag}
              key={`${index}_email`}
            />
          ))
        }
      </>
    )
  } else {
    list = (
      <NoResults flag={flag} />
    )
  }

  const getUnreadEmailCount = (() => {
    let count = 0
    if (data.length) {
      for (const email of data) {
        if (!email.seen) {
          count +=1
        }
      }
    }
    return count
  })()

  return (
    <div className="email-box">
      <div className="box-header">
        <div>
          {flag ? `Inbox ${getUnreadEmailCount ? `(${getUnreadEmailCount})`: '' }` : 'Sent items'}
        </div>
        <div>
          <input type="text" placeholder="Search here"/>
          <button>Search</button>
        </div>
      </div>
      <div className="box-subheader">
        <div className="flex">
          <div className="flex email-opt">
            <div className="fa fa-refresh" />
            <div>Refresh</div>
          </div>
          <div className="fa fa-eye email-opt" />
          <div className="fa fa-exclamation email-opt" />
          <div className="fa fa-trash-o email-opt" />
        </div>
        <div className="flex">
          <div className="fa fa-arrow-left email-opt" />
          <div className="fa fa-arrow-right email-opt" />
        </div>
      </div>
      <ul id="email-list" className="email-list">
        {list}
      </ul>
    </div>
  )
}

export default EmailList