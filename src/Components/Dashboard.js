import React from 'react'
import {Link} from 'react-router-dom'

const Dashboard = (props) => {
// basing this off the Currencies component from Bitcoin-Starter
console.log(props)
    let stockData = props.stockData.map((item, index) => {
        return (
            <Link key ={index} to={`/stocks/${item.name}`}><li>{item.name}</li>
            </Link>
        );
    });

    return <ul>{stockData}</ul>;

}

export default Dashboard;