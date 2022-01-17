import './App.css';
import Quote from "./Quote";

function App() {
  return (
    
    <section class="card container grid">
        <h1>Random Quote</h1>
        <div class="card_container">
            <article class="card_content">


             <h2 class="card_quote"> <Quote class="card_icon-90"/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at fusce cursus
                    morbi lobortis nulla ultricies.
                    Tincidunt viverra semper diam diam ame.</h2><Quote class="card_icon-rigth" />



                <p class="card_author">
                    Alexa Williams
                </p>
                <div class="card_button-content">
                    <button class="card_button"><i class="uil uil-twitter"></i></button>
                    <button class="card_button">Quote</button>
                </div>
                
                
            </article>
        </div>
    </section>
  );
}

export default App;
