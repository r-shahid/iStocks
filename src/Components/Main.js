import React from 'react'
import {Route, Switch} from 'react-router-dom'
import About from './About'
import stockData from './stock-data'
import Home from './Home'
import Dashboard from  './Dashboard'
import Stocks from './Stocks'
 

const Main = (props) => {
    console.log('main', props)

    return(
        // using code from bitcoin activity as a starting point
        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route
                    path='/stocks/:name'
                    render={props => <Stocks stockData={stockData} {...props} />}
                />
                <Route
                    path="/stocks/"
                    render={props => <Dashboard  {...props} stockData={stockData}/>}
                />
                
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </main>
    )
}

export default Main