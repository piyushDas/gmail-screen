import React, { useState } from 'react'
import './compose.css'

const Compose = ({ sendEmail, showNewMail }) => {
  const [receivers, setReceivers] = useState('')
  const [ccReceivers, setCCReceivers] = useState('')
  const [subject, setSubject] = useState('')
  const [content, setContent] = useState('')

  const send = () => {
    sendEmail({
      receivers : receivers.split(','),
      ccReceivers : ccReceivers.split(','),
      subject,
      content
    })
    closeNewMail()
  }

  const closeNewMail = () => {
    setReceivers('')
    setCCReceivers('')
    setSubject('')
    setContent('')
    showNewMail(false)
  }

  return (
    <div className='compose-mail'>
      <div className="new-mail-header">
        New feature
        <span className="fa fa-close close" onClick={closeNewMail} />
      </div>
      <div>
        <div className="mail-input">
          <input type="text" value={receivers} onChange={e => setReceivers(e.currentTarget.value)} />
          <span>To: </span>
        </div>
        <div className="mail-input">
          <input type="text" value={ccReceivers} onChange={e => setCCReceivers(e.currentTarget.value)} />
          <span>Cc:</span>
        </div>
        <div className="mail-input">
          <input type="text" value={subject} onChange={e => setSubject(e.currentTarget.value)} />
          <span>Sub: </span>
        </div>
        <div>
            <textarea name="" id="" cols="30" rows="10" value={content} onChange={e => setContent(e.currentTarget.value)} />
        </div>
        <div className="mail-input">
          <button onClick={send}>Send</button>
          <span className="fa fa-trash-o del-mail" onClick={closeNewMail} />
        </div>
      </div>
    </div>
  )
}

export default Compose