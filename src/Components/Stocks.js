import React from 'react'

const Stocks = (props) => {
    console.log('this is stocks with props:', props)
    return(
        <div>
            <h2>Name: stock name</h2>
            <h2>Price: price</h2>
        </div>
    )
}

export default Stocks