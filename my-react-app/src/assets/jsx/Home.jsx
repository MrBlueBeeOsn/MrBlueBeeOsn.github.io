import { Link } from "react-router-dom";

export default function Home() {
  return (

    <div>
     
      <main className="image">

        <h1 className="margin-y-50 text-center">🌾 Welcome!</h1>

        <p className="quote">

          🐝 <Link to="/">Bookkeeping</Link> is the process of <mark className="highlight5">recording, classifying, and organizing</mark> a company's <mark className="highlight5">financial transactions.</mark>

        </p>
        
        <p className="quote">

          🐝 <Link to="/">The English language</Link> is like a giant toolbox filled with <mark className="highlight5">words</mark> and <mark className="highlight5">grammar rules</mark> that you can use to <mark className="highlight5">communicate with people all over the world!</mark> 🌍
          
        </p>

        <div className="grid">
          <div className="card2">
            <p className="text-small">
          
              ☕ Happy <mark className="highlight5">reading</mark> today!
        
            </p>
          </div>
        </div>

        <p className="margin-bottom-50 text-center text-small">
            
          __Summer, 2025 - by <Link to="/mrbeeosn">Mr. Bee Osn</Link>--
          
        </p>

      </main>

    </div>
  );
}