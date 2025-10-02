import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function GrammarIndex() {
  return (<>
     
  <main className="image image1 content">

    {/* =============================
        1. English Learning Terms
    ============================= */}

    <div className="topic-container">

      <div  className="flex-topic">

        <HashLink smooth to="/english">
        <mark className="highlight-tertiary-padding-2-4">English</mark>
        </HashLink>

        <HashLink smooth to="/grammar">
          <mark className="highlight-tertiary-padding-2-4">Grammar</mark>
        </HashLink>

        <HashLink smooth to="/pronunciation">
          <mark className="highlight-tertiary-padding-2-4">Pronunciation</mark>
        </HashLink>

        <HashLink smooth to="/tieng-anh">
          <mark className="highlight-tertiary-padding-2-4">Tiếng Anh</mark>
        </HashLink>

        <HashLink smooth to="/vocabulary">
          <mark className="highlight-tertiary-padding-2-4">Từ vựng</mark>
        </HashLink>

      </div>

    </div>

    {/* =============================
        2. Grammar Terms
    ============================= */}

    <h3 className="margin-y-50 text-center" id="grammar-terms">Grammar Terms</h3>

    <ul className="list-border1">

      <li><Link to="/grammar/what-is-an-adverb?">Adverb</Link></li>

      <li><Link to="/grammar/what-is-a-verb?">Verb</Link></li>

      <li><Link to="/grammar/what-is-an-adjective?">Adjective</Link></li>

      <li><Link to="/grammar/what-is-a-noun?">Noun</Link></li>

    </ul>
    
  </main>

  </>);
}