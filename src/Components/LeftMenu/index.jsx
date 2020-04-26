import React, { useState, useContext } from 'react'
import { AppContext } from '../../context'
import Compose from '../Compose'
import './leftmenu.css'

const LeftMenu = () => {
  const {
    sendEmail
  } = useContext(AppContext)
  const [newMail, setNewMail] = useState(false)
  const showMailBox = () => {
    setNewMail(true)
  }

  const options = [
    {
      label:'Inbox',
      count: 12,
      iconClass: 'fa fa-inbox'
    }, {
      label:'Sent mail',
      count: 12,
      iconClass: 'fa fa-envelope-o'
    }, {
      label:'Important',
      count: 12,
      iconClass: 'fa fa-certificate'
    }, {
      label:'Drafts',
      count: 12,
      iconClass: 'fa fa-file-text-o'
    }, {
      label:'Trash',
      count: 12,
      iconClass: 'fa fa-trash-o'
    }
  ]

  const categories = [
    {
      label: 'Work',
      color: 'dot green-dot'
    }, {
      label: 'Documents',
      color: 'dot red-dot'
    }, {
      label: 'Social',
      color: 'dot violet-dot'
    }, {
      label: 'Advertising',
      color: 'dot aqua-dot'
    }, {
      label: 'Clients',
      color: 'dot orange-dot'
    }
  ]

  const labels = [
    "Family", "Work", "Home", "Children", "Holidays", "Music", "Photography", "Film"
  ]
  return (
    <div className="left-menu">
      <div>
        <button onClick={showMailBox}> Compose Mail </button>
        {
            newMail && <Compose sendEmail={sendEmail} showNewMail={setNewMail} />
        }
      </div>
      <div>
        <div className="left-menu-headers">Folders</div>
        {
          options.map(el => (
            <div className="folder-labels">
              <div className={el.iconClass}></div>
              <div>{el.label}</div>
              {/* <div>{el.count}</div> */}
            </div>
          ))
        }
      </div>
      <div>
        <div className="left-menu-headers">Categories</div>
        {
          categories.map(el => (
            <div className="category-labels">
              <div className={el.color}></div>
              <div>{el.label}</div>
            </div>
          ))
        }
      </div>
      <div>
        <div className="left-menu-headers">Labels</div>
        <div className="flex flex-wrap">
          {
            labels.map(el => (
              <div className="flex tag">
                <div className="fa fa-tag" />
                <div>{el}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default LeftMenu