import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EnglishTopic from '@/components/topic/EnglishTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch2 from '@/components/video/test/VideoSearch2';

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
        
        <VideoSearch2 />
                          
      </div>

      <div className="vocabulary-container">
                        
        {/* =============================
              PronunciationIndex Quiz
        ============================= */}

        <details className="sub-box-fix-2 margin-bottom-20">
      
          <summary id="pronunciation-basic-practice"><mark className="highlight-secondary-padding-2-4">Quiz</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/english/english-multiple-choice"></Link>
              </div>
            </li>

            
            
          </ul>

        </details>

      </div>

      <div className="flex-container">

        <div className="sub-box">

          {/* =============================
              Pronunciation Terms
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/pronunciation/what-is-pronunciation?">Pronunciation</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/pronunciation/what-is-IPA?">IPA</Link>
              </div>
            </li>
            
          </ul>

        </div>

      </div>

    </article>
    
  </main>

  </>);
}