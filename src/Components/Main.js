import React from 'react'
import {Route, Switch} from 'react-router-dom'
import About from './About'
import stocks from './stock-data'
import Home from './Home'
import Dashboard from  './Dashboard'
import Stocks from './Stocks'
 

const Main = () => {

    return(
        // using code from bitcoin activity as a starting point
        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route 
                path='/stocks:name'
                render={(props) => (<Stocks stocks={stocks} {...props} />)}
                />
                <Route
                    path="/stocks/"
                    render={(props) => ( <Dashboard  {...props} stocks={stock}/>)}
                />
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </main>
    )
}

export default Main