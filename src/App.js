import './App.css';
import Quote from "./Quote";
import React, {useState,useEffect} from 'react';

let quoteBD = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

function App() {
    const [quote, setQuote] = useState("The best time to plant a tree was 20 years ago. The second best time is now.")
    const [author, setAuthor] = useState("Chinese Proverb")
    const [quoteArr,setQuoteArr] = useState(null)
    const [randomNumber,setRandomNumber] = useState(0)

    const fetchQuote = async(url)=>{
        const response = await fetch(url)
        const parsedJSON = await response.json()
        setQuoteArr(parsedJSON.quotes)
        console.log(parsedJSON)
    }

    useEffect(()=>{
        fetchQuote(quoteBD)
    },[quoteBD])

    const getRandomQuote = ()=>{
        let ramdonInteger = Math.floor(quoteArr.length * Math.random())
        setRandomNumber(ramdonInteger)
        setQuote(quoteArr[ramdonInteger].quote)
        setAuthor(quoteArr[ramdonInteger].author)
    }
    return (

    <section class="card container grid">
        <h1>Random Quote</h1>
        <div class="card_container" id="quote-box">
            <article class="card_content">
             <h2 class="card_quote" id="text"><Quote class="card_icon-90"/>{quote}<Quote class="card_icon-rigth"/></h2>
                <p class="card_author" id="author">{author}</p>
                <div class="card_button-content">
                    
                    <a href="twitter.com/intent/tweet" target="_blank" class="card_button" id="tweet-quote"><i class="uil uil-twitter"></i></a>
                    <button class="card_button" id="new-quote" onClick={()=>getRandomQuote()}>Quote</button>
                </div>
                
                
            </article>
        </div>
    </section>
  );
}

export default App;
