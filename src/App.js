import React from 'react'
import { AppState } from './context'
import Router from './Router'
import './App.css'

const AppView = () => {
  return (
    <Router />
  )
}

const App = () => (
  <AppState>
    <AppView />
  </AppState>
)

export default App
