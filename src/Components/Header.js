import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {

    return(
        <div className='navbar'>
            <div><Link to="/"><span className='logo'>iStocks</span></Link></div>
            <div><Link to="/stocks">Stocks</Link></div>
            <div><Link to="/about">About</Link></div>
        </div>
    )
}

export default Header