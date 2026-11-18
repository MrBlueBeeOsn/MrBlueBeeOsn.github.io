import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EnglishTopic from '@/components/topic/EnglishTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch2 from '@/components/video/test/VideoSearch2';
import UNSTRESSED from '@/components/method/UNSTRESSED';
import DictionaryWidget from '@/components/method/DictionaryWidget';

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



      <div className="flex-container margin-top-20">
              
        {/* =============================
            SYLlable SEcret
        ============================= */}

        <div className="sub-box">
      
          <p id="SYLlable-SEcret"><mark className="highlight-secondary-padding-2-4">SYLlable SEcret</mark></p>

          <ul className="list-border1">

            <li>
              <Link to="/pronunciation/COMmenter">COMmenter</Link>
            </li>

            <li>
              <Link to="/pronunciation/connoisSEUR">connoisSEUR</Link> 	
            </li>

          </ul>

        </div>


        {/* =============================
            IPA
        ============================= */}

        <div className="sub-box">
      
          <p id="aMERican-IPA"><mark className="highlight-secondary-padding-2-4">IPA</mark></p>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/pronunciation/closed-and-open-syllables">Closed/Open Syllables</Link>
              </div>
            </li>
            
            <li>
              <div className="li-content">
                <Link to="/pronunciation/5-vowel-system">5 Vowel System</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/pronunciation/unstressed-words">Unstressed Words</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/pronunciation/ED-sounds">ED Sounds</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/pronunciation/schwa">Schwa</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/pronunciation/flat-a-and-deep-a">Flat \a\ and Deep \ä\ Sounds</Link>
              </div>
            </li>

          </ul>

        </div>


      </div>

      <div className="flex-container margin-top-20">
              
        {/* =============================
            Definition
        ============================= */}

        <div className="sub-box">
      
          <p id="definition"><mark className="highlight-secondary-padding-2-4">Definition</mark></p>

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


      {/* <UNSTRESSED /> */}
      {/* <DictionaryWidget /> */}

    </article>
    
  </main>

  </>);
}