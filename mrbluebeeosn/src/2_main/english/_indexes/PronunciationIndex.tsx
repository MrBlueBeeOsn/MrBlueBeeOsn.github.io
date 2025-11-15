import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EnglishTopic from '@/components/topic/EnglishTopic';
import SearchComponent from '@/components/search/SearchComponent';

export default function PronunciationIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    <article>

      {/* =============================
          English Topic
      ============================= */}
          
        <EnglishTopic/>

      {/* =============================
          3. Pronunciation Terms
      ============================= */}

      <h3 className="margin-y-50 text-center" id="pronunciation-terms">Pronunciation Terms</h3>

      <div className="table-search margin-bottom-50">
                  
        <SearchComponent />
                          
      </div>

      <div className="flex-container">

        <div className="sub-box">

          <ul className="list-border1">

            <li><Link to="/pronunciation/what-is-pronunciation?">Pronunciation</Link></li>

            <li><Link to="/pronunciation/what-is-IPA?">IPA</Link></li>
            
          </ul>

        </div>

      </div>

    </article>
    
  </main>

  </>);
}