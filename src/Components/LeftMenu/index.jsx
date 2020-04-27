import React, { useState, useContext } from 'react'
import { AppContext } from '../../context'
import Compose from '../Compose'
import './leftmenu.css'

const LeftMenu = () => {
  const {
    sendEmail,
    setInboxFlag,
    getUnreadEmailCount
  } = useContext(AppContext)
  const [newMail, setNewMail] = useState(false)
  const showMailBox = () => {
    setNewMail(true)
  }

  const options = [
    {
      label:'Inbox',
      count: getUnreadEmailCount,
      iconClass: 'fa fa-inbox'
    }, {
      label:'Sent mail',
      iconClass: 'fa fa-envelope-o'
    }, {
      label:'Important',
      iconClass: 'fa fa-certificate'
    }, {
      label:'Drafts',
      iconClass: 'fa fa-file-text-o'
    }, {
      label:'Trash',
      iconClass: 'fa fa-trash-o'
    }
  ]

  const navigateFolder = val => () => {
    if (val === 'Inbox') {
      setInboxFlag(true)
    } else if (val === 'Sent mail') {
      setInboxFlag(false)
    }
  }

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
          options.map((el, index) => (
            <div className="folder-labels" key={`${el.label}_${index}`} onClick={navigateFolder(el.label)}>
              <div className={el.iconClass}></div>
              <div>{el.label}</div>
              {
                el.count && <div className="count-badge">{el.count}</div>
              }
            </div>
          ))
        }
      </div>
      <div>
        <div className="left-menu-headers">Categories</div>
        {
          categories.map((el, index) => (
            <div className="category-labels" key={`${el.label}_${index}`}>
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
            labels.map((el, index) => (
              <div className="flex tag" key={`${el}_${index}`} >
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