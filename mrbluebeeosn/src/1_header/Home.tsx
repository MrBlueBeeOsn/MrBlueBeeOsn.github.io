import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Home(): React.JSX.Element {
  return (<>
     
    <main className="image">

      <h1 className="margin-y-50 text-center">🌻 Welcome!</h1>

      <p className="quote">

        🐝 <Link to="/bookkeeping/what-is-bookkeeping?">Bookkeeping</Link> is the process of <mark className="highlight-255-padding-0-4">recording, classifying, and organizing</mark> a company's <mark className="highlight-255-padding-0-4">financial transactions.</mark>

      </p>
      
      <p className="quote">

        🐝 <Link to="/english/what-is-the-english-language?">The English language</Link> is like a giant toolbox filled with <mark className="highlight-255-padding-0-4">words</mark> and <mark className="highlight-255-padding-0-4">grammar rules</mark> that you can use to <mark className="highlight-255-padding-0-4">communicate with people all over the world!</mark> 🌍
        
      </p>

      <div className="grid">
        <div className="card2">
          <p className="text-small no-margin">
        
            ☕ Happy <mark className="highlight-tertiary-padding-2-4">reading</mark> today!
      
          </p>
        </div>
      </div>

      <p className="margin-bottom-50 text-center text-small">
          
        __Summer, 2025 · by <Link to="/about">Mr. ßee - a Diligent Bee</Link>--
        
      </p>

    </main>

  </>);
}