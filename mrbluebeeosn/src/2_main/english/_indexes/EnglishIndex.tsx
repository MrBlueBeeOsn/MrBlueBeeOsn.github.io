import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EnglishTopic from '@/components/topic/EnglishTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch2 from '@/components/video/test/VideoSearch2';

export default function EnglishIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    <article>

      {/* =============================
          English Topic
      ============================= */}
              
        <EnglishTopic/>

      {/* =============================
          1. English Learning Terms
      ============================= */}
      
      <h3 className="margin-y-50 text-center" id="english-learning-terms">English Learning Terms</h3>

      <div className="table-search margin-bottom-50">
                        
        <SearchComponent />
        
        <VideoSearch2 />
                          
      </div>

      <div className="vocabulary-container">
      
        {/* =============================
              English Quiz
        ============================= */}

        <details className="sub-box-fix margin-bottom-20">
      
          <summary id="english-quiz-01-10"><mark className="highlight-secondary-padding-2-4">Quiz</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/english/english-quiz-01-10">1-10</Link>
              </div>
            </li>


            
          </ul>

        </details>

      </div>

      <div className="flex-container">

        <div className="sub-box">
        
          {/* =============================
              English Terms
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/english/what-is-english?">English</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/english/what-is-the-english-language?">The English language</Link>
              </div>
            </li>
            
          </ul>

        </div>

        <div className="sub-box">
        
          {/* =============================
              English Teacher
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/english/what-is-an-english-teacher?">English Teacher</Link>
              </div>
            </li>
            
          </ul>

        </div>

      </div>

    </article>
    
  </main>

  </>);
}