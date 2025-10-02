import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function PronunciationIndex() {
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
        3. Pronunciation Terms
    ============================= */}

    <h3 className="margin-y-50 text-center" id="pronunciation-terms">Pronunciation Terms</h3>
    
    <ul className="list-border1">

      <li><Link to="/pronunciation/what-is-pronunciation?">Pronunciation</Link></li>

      <li><Link to="/pronunciation/what-is-IPA?">IPA</Link></li>
      
    </ul>
    
  </main>

  </>);
}