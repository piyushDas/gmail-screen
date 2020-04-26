import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './Containers/Login'
import Mailbox from './Containers/Mailbox'
import Readmail from './Containers/Readmail'

const router = props => (
  <React.Fragment>
    <Switch>
      <Route exact={true} path="/" component={Login} />
      <Route exact={true} path="/login" component={Login} />
      <Route exact={true} path="/mailbox" component={Mailbox} />
      <Route exact={true} path="/mailbox/read" component={Readmail} />
      {/* <Route path="*" component={PageNotFound} /> */}
    </Switch>
  </React.Fragment>
)

export default router