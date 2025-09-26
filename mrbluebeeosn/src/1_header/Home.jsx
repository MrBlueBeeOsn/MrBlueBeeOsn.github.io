import { Link } from "react-router-dom";

export default function Home() {
  return (<>
     
      <main className="image">

        <h1 className="margin-y-50 text-center">🌻 Welcome!</h1>

        <p className="quote">

          🐝 <Link to="/bookkeeping/what-is-bookkeeping?">Bookkeeping</Link> is the process of <mark className="highlight6">recording, classifying, and organizing</mark> a company's <mark className="highlight6">financial transactions.</mark>

        </p>
        
        <p className="quote">

          🐝 <Link to="/english/what-is-the-english-language?">The English language</Link> is like a giant toolbox filled with <mark className="highlight6">words</mark> and <mark className="highlight6">grammar rules</mark> that you can use to <mark className="highlight6">communicate with people all over the world!</mark> 🌍
          
        </p>

        <div className="grid">
          <div className="card2">
            <p className="text-small">
          
              ☕ Happy <mark className="highlight">reading</mark> today!
        
            </p>
          </div>
        </div>

        <p className="margin-bottom-50 text-center text-small">
            
          __Summer, 2025 - by <Link to="/mrbeeosn">Mr. Bee Osn</Link>--
          
        </p>

      </main>

  </>);
}