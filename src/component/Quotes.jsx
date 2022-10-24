import React from 'react';
import quotes from './quotes.json'
import { useState } from 'react'

const Quotes = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const [index, setIndex] = useState(randomIndex);

    const changeQuotes = () => {
    const randomNumIndex = Math.floor(Math.random() * quotes.length);
    setIndex(randomNum);
  };
    
   
   return (
    
    <div className="card">
      
        <p >"{quotes[index].quote}"</p>
        <h2 >{quotes[index].author}</h2>
       
        {/* <button onClick={changeQuotes}><i class="fa-solid fa-shuffle"></i></button> */}
       
    </div>
    
    );
};

export default Quotes;