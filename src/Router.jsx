import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './Containers/Login'
import Mailbox from './Containers/Mailbox'

const router = props => (
  <React.Fragment>
    <Switch>
      <Route exact={true} path="/" component={Login} />
      <Route exact={true} path="/login" component={Login} />
      <Route exact={true} path="/mailbox" component={Mailbox} />
    </Switch>
  </React.Fragment>
)

export default router