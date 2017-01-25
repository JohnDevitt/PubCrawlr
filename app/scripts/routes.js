

import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Interface from './pages/interface/index'

const Home = () => <h1>Hello from Home!</h1>
const Address = () => <h1>We are located at 555 Jackson St.</h1>
const Fourofour = () => <h1>404. Page not found</h1>

class Routes extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Home} />
                <Route path='/address' component={Address} />
                <Route path='/map' component={Interface} />
                <Route path='/*' component={Fourofour} />
            </Router>
        )
    }
}

export default Routes
