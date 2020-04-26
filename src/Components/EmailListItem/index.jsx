import React from 'react'
import './emailListItem.css'

const EmailListItem = ({ result }) => {
  // const { } = data
  let template = (
    <li className="email-list-item">
      <div className="fa fa-check-square checkbox" />
      <div className="sender">
        Anna Smith
      </div>
      <div className="subject">
        Lorem ipsum dolor noretek imit ser
      </div>
      <div className="time">
        6:10 am
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