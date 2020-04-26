import React from 'react'
import './expand.css'

const ExpandMenu = () => {
  const options = [
    {
      label:'Inbox',
      count: 12,
      iconClass: 'fa fa-th-large'
    }, {
      label:'Sent mail',
      count: 12,
      iconClass: 'fa fa-diamond'
    }, {
      label:'Important',
      count: 12,
      iconClass: 'fa fa-bar-chart'
    }, {
      label:'Drafts',
      count: 12,
      iconClass: 'fa fa-envelope'
    }, {
      label:'Trash',
      count: 12,
      iconClass: 'fa fa-pie-chart'
    }, {
      label:'Trash',
      count: 12,
      iconClass: 'fa fa-flask'
    }, {
      label:'Trash',
      count: 12,
      iconClass: 'fa fa-pencil-square-o'
    }, {
      label:'Trash',
      count: 12,
      iconClass: 'fa fa-desktop'
    }, {
      label:'Trash',
      count: 12,
      iconClass: 'fa fa-copy'
    }, {
      label:'Trash',
      count: 12,
      iconClass: 'fa fa-globe'
    }, {
      label:'Trash',
      count: 12,
      iconClass: 'fa fa-flask'
    }, {
      label:'Trash',
      count: 12,
      iconClass: 'fa fa-laptop'
    }
  ]

  return (
    <div className="expand-menu">
      <div className="profile">
        IN+
      </div>
      <div className="option-tray">
        {
          options.map(el => (
              <div className={el.iconClass} />
          ))
        }
      </div>
    </div>
  )
}

export default ExpandMenu