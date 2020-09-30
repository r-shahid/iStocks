import React from 'react'

const Stocks = (props) => {
    console.log('this is stocks with props:', props)
    const stocks = props.stockData.filter(item => item.name === props.match.params.name)[0]
    console.log('this is stock', stocks)

    return (
        <div className='stocks-info'>
        <h1>Details</h1>
            <h2>Name: {stocks.name}</h2>
            <h3>Symbol: {stocks.symbol}</h3>
            <h3>Price: {stocks.lastPrice}</h3>
            <h3>Change: {stocks.change}</h3>
            <h3>High: {stocks.high}</h3>
            <h3>Low: {stocks.low}</h3>
            <h3>Open: {stocks.open}</h3>

        </div>
    )
}

export default Stocks