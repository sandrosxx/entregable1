import { useState } from 'react'
import './App.css'
import Quotes from './component/Quotes';
import quotes from './component/quotes.json';

function App() {
  console.log(quotes);
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(randomIndex);
  const ind= index
  const changeQuotes = () => {
    const anotherRandom = Math.floor(Math.random() * quotes.length);
    setIndex(anotherRandom);
  };

  const colors = [
    "#845EC2",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#FFC75F",
    "#F9F871",
    '#a0d995',
    '#4afde7',
    '#9bd3ae'
  ];
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  const color = colors[randomColorIndex]
  document.body.style=`background:${color}`;
  return (
    <div className="App" style={{ color: color}}>
      <div className="card1">
        {/* <p >"{quotes[ind].quote}"</p>
        <h2 >{quotes[ind].author}</h2> */}
        <Quotes num={ind}/>
        <button className='btn' onClick={changeQuotes} style={{ color: color}}><i class="fa-solid fa-angles-right"></i></button>
      </div>
    </div>
  )
}

export default App
