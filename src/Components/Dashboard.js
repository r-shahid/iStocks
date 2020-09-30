import React from 'react'

const Dashboard = (props) => {
// basing this off the Currencies component from Bitcoin-Starter
console.log(props)
    let stockInfo = props.stockInfo.map((item, index) => {
        return (
            <div className="stock-links">
                <Link to={"/stocks/" + item.name}>{item.name}</Link>
            </div>
        );
    });

    return <div>{list}</div>;

}

export default Dashboard;