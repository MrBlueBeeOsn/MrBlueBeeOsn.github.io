import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EnglishTopic from '/src/components/EnglishTopic';

export default function GrammarIndex() {
  return (<>
     
  <main className="image image1 content">

    {/* =============================
        English Topic
    ============================= */}
        
      <EnglishTopic/>

    {/* =============================
        2. Grammar Terms
    ============================= */}

    <h3 className="margin-y-50 text-center" id="grammar-terms">Grammar Terms</h3>

    <div className="flex-container">

      <div className="sub-box">

         <ul className="list-border1">

          <li><Link to="/grammar/what-is-an-adverb?">Adverb</Link></li>

          <li><Link to="/grammar/what-is-a-verb?">Verb</Link></li>

          <li><Link to="/grammar/what-is-an-adjective?">Adjective</Link></li>

          <li><Link to="/grammar/what-is-a-noun?">Noun</Link></li>

        </ul>

      </div>

    </div>
    
  </main>

  </>);
}