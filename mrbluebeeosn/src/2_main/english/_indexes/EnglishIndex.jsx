import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EnglishTopic from '/src/components/EnglishTopic';

export default function EnglishIndex() {
  return (<>
     
  <main className="image image1 content">

    {/* =============================
        English Topic
    ============================= */}
            
      <EnglishTopic/>

    {/* =============================
        1. English Learning Terms
    ============================= */}
    
    <h3 className="margin-y-50 text-center" id="english-learning-terms">English Learning Terms</h3>

    <div className="flex-container">

      <div className="sub-box">

        <ul className="list-border1">
      
        <li><Link to="/english/what-is-english?">English</Link></li>
        
        <li><Link to="/english/what-is-the-english-language?">The English language</Link></li>
        
      </ul>

      </div>

    </div>
    
  </main>

  </>);
}