import React from 'react'
import Log from './log.js'
import NavAd from './nav'
import AddUser from './addUser.js'
import Post from './posts.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <div>
      <NavAd/>
      <Switch>
      <Route path="/logIn" component={Log}/>
      <Route path="/postes" component={Post} />
      <Route path = "/addUser" component={AddUser}/>
      </Switch>
    </div>
    </Router>
    
  )
}
