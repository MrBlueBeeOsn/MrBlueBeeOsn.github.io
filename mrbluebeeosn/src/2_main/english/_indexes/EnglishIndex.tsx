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
          1. English
      ============================= */}
      
      <h3 className="margin-y-50 text-center" id="english-learning-terms">English</h3>

      <div className="table-search margin-bottom-50">
                        
        <SearchComponent />
        
        <VideoSearch2 />
                          
      </div>
      

      <div className="vocabulary-container margin-top-20">
    
        
        {/* =============================
              English Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="english-basic-practice"><mark className="highlight-secondary-padding-2-4">Quiz</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/english/english-multiple-choice">English Multiple Choice</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/english/mixed-english-grammar-&-vocabulary">Mixed English Grammar & Vocabulary</Link>
              </div>
            </li>
            
          </ul>

        </details>

        {/* =============================
              IELTS Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="ielts-basic-practice"><mark className="highlight-secondary-padding-2-4">IELTS</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/english/ielts-questions">IELTS Multiple-Choice Questions</Link>
              </div>
            </li>

           
            
          </ul>

        </details>

        {/* =============================
              TOEIC Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="toeic-basic-practice"><mark className="highlight-secondary-padding-2-4">TOEIC</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/english/toeic-practice">TOEIC Practice</Link>
              </div>
            </li>

           
            
          </ul>

        </details>

        

        {/* =============================
              Paraphrasing Techniques Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="paraphrasing-techniques-quiz"><mark className="highlight-secondary-padding-2-4">Paraphrasing Techniques</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/english/paraphrasing-techniques-quiz">Paraphrasing Techniques Quiz</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/english/ev-paraphrasing-techniques-quiz">Paraphrasing Techniques Quiz (EV)</Link>
              </div>
            </li>

           
            
          </ul>

        </details>


      </div>


      <div className="flex-container margin-top-20">

        <div className="sub-box">


          {/* =============================
              Translation
          ============================= */}
              
          <p id="translation"><mark className="highlight-secondary-padding-2-4">Translation</mark></p>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/english/LIFO-method">LIFO METHod</Link>
              </div>
            </li>
            
            <li>
              <div className="li-content">
                <Link to="/english/translating">Translating</Link>
              </div>
            </li>

          </ul>

        </div>

        <div className="sub-box">


          {/* =============================
              Definition
          ============================= */}
              
          <p id="definition"><mark className="highlight-secondary-padding-2-4">Definition</mark></p>

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

            <li>
              <div className="li-content">
                <Link to="/english/what-is-an-english-teacher?">English Teacher</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/english/what-is-an-english-teacher?">What is an English teacher?</Link>
              </div>
            </li>

          </ul>

        </div>

        

      </div>


    </article>
    
  </main>

  </>);
}