import React from 'react'
import './emailListItem.css'

const EmailListItem = ({ result, flag }) => {
  // const { } = data

  const getTimeDisplay = () => {
    let time = new Date(result.time)
    if (result.time + (24 * 3600 * 1000) > (new Date()).getTime()) {
      time = time.toString().substr(16,5)
    } else {
      time = time.toString().substr(4,6)
    }
    return time
  }

  let template = (
    <li className="email-list-item">
      <div className="fa fa-check-square checkbox" />
      <div className="sender">
        {flag ? result.sender : result.receiver.join(', ')}
      </div>
      <div className="subject">
        {result.subject}
      </div>
      <div className="time">
        {getTimeDisplay()}
      </div>
    </li>
  )
  return (
    <>
      {template}
    </>
  )
}

export default EmailListItem