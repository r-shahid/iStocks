import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = (props) => {
    // basing this off the Currencies component from Bitcoin-Starter
    console.log(props)
    
    let stockData = props.stockData.map((item, index) => {
        return (
            // <Link key ={index} to={`/stocks/${item.name}`}><li>{item.name}</li>
            // </Link>
            // table tutorial from w3 schools. will add the column headers separately, or else they render 6 times
            <table> 
                {/* <tr>
                    <th>Company Name</th>
                    <th>Price</th>
                    <th>Change</th>
                </tr> */}
                <tr>
                    <Link key={index} to={`/stocks/${item.symbol}`}><td className='name'>{item.name}</td>
                    </Link>
                    <td className='price'>{item.lastPrice}</td>
                    <td className='change'>{item.change}</td>

                </tr>
            </table>
        );
    });

    return <ul>{stockData}</ul>;

}

export default Dashboard;