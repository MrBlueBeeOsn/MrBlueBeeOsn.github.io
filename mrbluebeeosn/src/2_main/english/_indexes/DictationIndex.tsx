import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EnglishTopic from '@/components/topic/EnglishTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch2 from '@/components/video/test/VideoSearch2';

export default function DictationIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    <article>

      {/* =============================
          English Topic
      ============================= */}
              
        <EnglishTopic/>

      {/* =============================
          Dictation
      ============================= */}
      
      <h3 className="margin-y-50 text-center" id="english-learning-terms">Dictation Search</h3>

      <div className="table-search margin-bottom-50">
                        
        <SearchComponent />
        
        <VideoSearch2 />
                          
      </div>
      

      <div className="vocabulary-container margin-top-20">

        {/* =============================
                Dictation Exercise
          ============================= */}
  
          <details className="sub-box-fix-2">
        
            <summary id="dictation-exercise"><mark className="highlight-secondary-padding-2-4">Dictation</mark></summary>
  
            <ul className="list-border1">
  
              <li>
                <div className="li-content">
                  <Link to="/dictation/dictation-exercise">Dictation Exercise</Link>
                </div>
              </li>
              
            </ul>
  
          </details>

          {/* =============================
                Numbers Exercise
          ============================= */}
  
          <details className="sub-box-fix-2">
        
            <summary id="numbers-exercise"><mark className="highlight-secondary-padding-2-4">Numbers</mark></summary>
  
            <ul className="list-border1">

              <li>
                <div className="li-content">
                  <Link to="/dictation/numbers-exercise-01-10">Numbers Exercise 01-10</Link>
                </div>
              </li>

              <li>
                <div className="li-content">
                  <Link to="/dictation/numbers-exercise-11-20">Numbers Exercise 11-20</Link>
                </div>
              </li>

              <li>
                <div className="li-content">
                  <Link to="/dictation/numbers-exercise-00-100">Numbers Exercise 00-100</Link>
                </div>
              </li>
              
            </ul>
  
          </details>

          {/* =============================
                Numbers Exercise
          ============================= */}
  
          <details className="sub-box-fix-2">
        
            <summary id="colors-exercise"><mark className="highlight-secondary-padding-2-4">Colors</mark></summary>
  
            <ul className="list-border1">

              <li>
                <div className="li-content">
                  <Link to="/dictation/colors-exercise-01-12">Colors Exercise 01-10</Link>
                </div>
              </li>
              
            </ul>
  
          </details>

      </div>


    </article>
    
  </main>

  </>);
}