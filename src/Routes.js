import React from 'react'
import {Route , Switch } from "react-router-dom"
import { Home } from './Home'
import LandingPage from './LandingPage'

function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/"> 
                    <LandingPage />
                </Route>
                <Route exact path="/home">
                    <Home />    
                </Route>
            </Switch>
        </div>
    )
}

export default Routes
