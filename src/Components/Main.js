import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './About'
import stockData from './stock-data'
import Home from './Home'
import Dashboard from './Dashboard'
import Stocks from './Stocks'
import TableHeader from './TableHeader'



const Main = (props) => {
    console.log('main', props)

    return (
        // using code from bitcoin activity as a starting point
        <main>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route
                    path='/stocks/:symbol'
                    render={props => <Stocks stockData={stockData} {...props} />}
                />
                <Route
                    path="/stocks/"
                    render={props => <><TableHeader /> <Dashboard  {...props} stockData={stockData} /></>}
                />

                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </main>
    )
}

export default Main