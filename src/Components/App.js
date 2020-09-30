import React from 'react';
import '../styles.css';
import Header from './Header'
import Main from './Main';
import stockData from './stock-data'


function App() {
  return (
    <div className="App">
      <Header />
      <Main stockData={stockData}/>
    </div>
  );
}

export default App;
