import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EnglishTopic from '/src/components/EnglishTopic';

export default function PronunciationIndex() {
  return (<>
     
  <main className="image image1 content">

    {/* =============================
        English Topic
    ============================= */}
        
      <EnglishTopic/>

    {/* =============================
        3. Pronunciation Terms
    ============================= */}

    <h3 className="margin-y-50 text-center" id="pronunciation-terms">Pronunciation Terms</h3>

    <div className="flex-container">

      <div className="sub-box">

        <ul className="list-border1">

          <li><Link to="/pronunciation/what-is-pronunciation?">Pronunciation</Link></li>

          <li><Link to="/pronunciation/what-is-IPA?">IPA</Link></li>
          
        </ul>

      </div>

    </div>
    
  </main>

  </>);
}