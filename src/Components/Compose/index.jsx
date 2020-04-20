import React, { useState } from 'react'

const Compose = ({ sendEmail }) => {
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
  }

  return (
    <div className='compose-mail'>
      <div>
        New feature
      </div>
      <div>
        <div>
          <span>To</span>
          <input type="text" value={receivers} onChange={e => setReceivers(e.currentTarget.value)} />
        </div>
        <div>
          <span>Cc</span>
          <input type="text" value={ccReceivers} onChange={e => setCCReceivers(e.currentTarget.value)} />
        </div>
        <div>
          <span>Subject</span>
          <input type="text" value={subject} onChange={e => setSubject(e.currentTarget.value)} />
        </div>
        <div>
            <textarea name="" id="" cols="30" rows="10" value={content} onChange={e => setContent(e.currentTarget.value)} />
        </div>
        <div>
          <button onClick={send}>Send</button>
          <span>Delete</span>
        </div>
      </div>
    </div>
  )
}

export default Compose