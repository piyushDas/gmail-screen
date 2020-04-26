import React from 'react'
import './noResults.css'

const NoResults = ({ flag }) => {
  return (
    <div className="no-result-box">
      <div className="no-result-title">
        {flag ? 'No emails present in your inbox' : 'No emails sent from this account'}
      </div>
      <div>
        <button className="no-result-button">Compose new mail</button>
      </div>
    </div>
  )
}

export default NoResults