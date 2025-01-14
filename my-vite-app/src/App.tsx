const quotes=[
  {
    "quote": "The only limit to our realization of tomorrow is our doubts of today.",
    "author": "Franklin D. Roosevelt",
    "color": "bg-primary",
    "text": "text-dark"
  },
  {
    "quote": "Do what you can, with what you have, where you are.",
    "author": "Theodore Roosevelt",
    "color": " bg-secondary",
    "text": "text-dark"
  },
  {
    "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "author": "Winston Churchill",
    "color": "bg-success",
    "text": "text-dark"
  },
  {
    "quote": "Believe you can and you're halfway there.",
    "author": "Theodore Roosevelt",
    "color": "bg-danger",
    "text": "text-dark"
  },
  {
    "quote": "Act as if what you do makes a difference. It does.",
    "author": "William James",
    "color": "bg-warning",
    "text": "text-dark"
  },
  {
    "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "author": "Ralph Waldo Emerson",
    "color": "bg-info",
    "text": "text-dark"
  },
  {
    "quote": "You miss 100% of the shots you don't take.",
    "author": "Wayne Gretzky",
    "color": "bg-light",
    "text": "text-dark"
  },
  {
    "quote": "The best way to predict the future is to invent it.",
    "author": "Alan Kay",
    "color": "bg-dark",
    "text": "text-dark"
  },
  {
    "quote": "It always seems impossible until it’s done.",
    "author": "Nelson Mandela",
    "color": "bg-black",
    "text": "text-dark"
  },
  {
    "quote": "Do not wait to strike till the iron is hot; but make it hot by striking.",
    "author": "William Butler Yeats",
    "color": "bg-primary",
    "text": "text-dark"
  }
]

import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTumblr } from '@fortawesome/free-brands-svg-icons';



function App () {
  const [currentQuote,setCurrentQuote] = useState(quotes[0].quote);
  const [currentAuthor,setCurrentAuthor] = useState(quotes[0].author);
  const [currentColor, setCurrentColor] = useState(quotes[0].color);
  
  const PickQuote = () =>{
    const index = Math.floor(Math.random()*quotes.length)
    console.log(index)
    setCurrentQuote(quotes[index].quote)
    setCurrentAuthor(quotes[index].author)
    setCurrentColor(quotes[index].color)
  }

  return (
    <div
      className={`d-flex justify-content-center align-items-center vh-100 vw-100 ${currentColor}`}
    >
      <div className="border border-3 p-4 bg-white text-center rounded vh-50 vw-50" id="quote-box">
        <p id="text" className="fs-4">{currentQuote}</p>
        <p id="author" className="fst-italic">- {currentAuthor}</p>
        <div className="d-flex">
        <a href="twitter.com/intent/tweet" id="tweet-quote"><FontAwesomeIcon icon={faTwitter} style={{fontSize: "40px", color: currentColor}}/></a>
        <FontAwesomeIcon icon={faTumblr} style={{fontSize: "40px", color: currentColor}}/>
        <button onClick={PickQuote} className="ms-auto" id="new-quote">
          New Quote
        </button>
        </div>
      </div>
    </div>
  );
}


export default App