import React, { useContext } from 'react'
import NoResults from '../NoResults'
// import { AppContext } from '../../context'
import EmailListItem from '../EmailListItem'
import './email.css'

const EmailList = () => {
  // const {
  //   emails
  // } = useContext(AppContext)
  let list = (
    <div>Loading results</div>
  )
  const emails = [{}, {}]
  if (emails && emails.length) {
    list = (
      <>
        {
          emails.map((result, index) => (
            <EmailListItem
              result={result}
              key={`${index}_email`}
            />
          ))
        }
      </>
    )
  } else {
    list = (
      <NoResults />
    )
  }

  return (
    <div className="email-box">
      <div className="box-header">
        <div>
          Inbox (16)
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