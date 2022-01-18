import './App.css';
import Quote from "./Quote";

function App() {
  return (
    
    <section class="card container grid">
        <h1>Random Quote</h1>
        <div class="card_container" id="quote-box">
            <article class="card_content">


             <h2 class="card_quote" id="text"> <Quote class="card_icon-90"/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at fusce cursus
                    morbi lobortis nulla ultricies.
                    Tincidunt viverra semper diam diam ame.</h2><Quote class="card_icon-rigth" />



                <p class="card_author" id="author">
                    Alexa Williams
                </p>
                <div class="card_button-content">
                    
                    <a href="twitter.com/intent/tweet" target="_blank" class="card_button" id="tweet-quote"><i class="uil uil-twitter"></i></a>
                    <button class="card_button" id="new-quote">Quote</button>
                </div>
                
                
            </article>
        </div>
    </section>
  );
}

export default App;
