import React from 'react'

const Stocks = (props) => {
    console.log('this is stocks with props:', props)
    const stocks = props.stockData.filter( item => item.name === props.match.params.name)[0]
    console.log('this is stock', stocks)

    return(
        <div>
            <h2>Name: {stocks.name}</h2>
            <h2>Price: {stocks.lastPrice}</h2>
        </div>
    )
}

export default Stocks