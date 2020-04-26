import React from 'react'
import './noResults.css'

const NoResults = () => {
  return (
    <div className="no-result-box">
      <div className="no-result-title">
        No emails present in your inbox
      </div>
      <div>
        <button className="no-result-button">Compose new mail</button>
      </div>
    </div>
  )
}

export default NoResults