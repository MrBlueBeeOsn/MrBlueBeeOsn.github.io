import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EnglishTopic from '@/components/topic/EnglishTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch2 from '@/components/video/test/VideoSearch2';
import VERBSADDS from '@/components/method/VERBSADDS';

export default function GrammarIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    <article>

      {/* =============================
          English Topic
      ============================= */}
          
        <EnglishTopic/>

      {/* =============================
          2. Grammar Terms
      ============================= */}

      <h3 className="margin-y-50 text-center" id="grammar-terms">Grammar Terms</h3>

      <div className="table-search margin-bottom-50">
                        
        <SearchComponent />
        
        <VideoSearch2 />
                          
      </div>

      

      <div className="vocabulary-container margin-top-20">

        {/* =============================
              Grammar Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="verb-forms"><mark className="highlight-secondary-padding-2-4">Verb Forms</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/grammar/verb-forms-01-10">Verb Forms 01-10</Link>
              </div>
            </li>
            
          </ul>

        </details>
            
        {/* =============================
              Grammar Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="english-basic-practice"><mark className="highlight-secondary-padding-2-4">Quiz</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/grammar/english-grammar-questions">English Grammar Questions</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/english-grammar-questions-2">English Grammar Questions 2</Link>
              </div>
            </li>
            
          </ul>

        </details>

        {/* =============================
              Tenses Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="tense-basic-practice"><mark className="highlight-secondary-padding-2-4">Tenses</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/grammar/english-tenses-quiz">English Tenses Quiz</Link>
              </div>
            </li>
            
          </ul>

        </details>

      </div>

      <div className="flex-container margin-top-20">
                    
        {/* =============================
            Modern Grammar
        ============================= */}

        <div className="sub-box">
      
          <p id="Modern-Grammar"><mark className="highlight-secondary-padding-2-4">Modern Grammar</mark></p>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/grammar/modern-grammar">Modern Grammar</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/complements">Complements</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/phrases">Phrases</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/cambridge-2002-framework">Cambridge 2002 Framework</Link>
              </div>
            </li>
            
            <li>
              <div className="li-content">
                <Link to="/grammar/preposition-phrase">Preposition Phrase</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/verb-&-predicator">Verb & Predicator</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/predicator-&-adjunct">Predicator & Adjunct</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/phrase-vs-clause">Phrase vs. Clause</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/forms-of-the-verb">Forms of the Verb</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/catenative-constructions">Catenative Constructions</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/prepositions-&-to">Prepositions & To</Link>
              </div>
            </li>

          </ul>

        </div>

        <div className="sub-box">
      
          <p id="verbs"><mark className="highlight-secondary-padding-2-4">Verbs</mark></p>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/grammar/verb-forms">Verb Forms</Link>
              </div>
            </li>
            
            <li>
              <div className="li-content">
                <Link to="/grammar/tenses-chart">Tenses Chart</Link>
              </div>
            </li>
            

            <li>
              <div className="li-content">
                <Link to="/grammar/how-to-remember-verbs-add-s">Verb add S</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/verb-&-S">Verbs S</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/verb-&-object">Verb & Object</Link>
              </div>
            </li>

          </ul>

        </div>

      
      </div>

      <div className="flex-container margin-top-20">
                    
        {/* =============================
            Definitions
        ============================= */}

        <div className="sub-box">
      
          <p id="definitions"><mark className="highlight-secondary-padding-2-4">Definitions</mark></p>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/grammar/what-is-an-adverb?">What is an adverb?</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/what-is-a-verb?">What is a verb?</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/what-is-an-adjective?">What is an adjective?</Link>&nbsp;
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/what-is-a-noun?">What is a noun?</Link>
              </div>
            </li>

          </ul>

        </div>

        <div className="sub-box">
      
          <p id="translation"><mark className="highlight-secondary-padding-2-4">Translation</mark></p>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/grammar/LIFO-method">LIFO METHod</Link>
              </div>
            </li>
            
            <li>
              <div className="li-content">
                <Link to="/grammar/stop-translating">Stop Translating!</Link>
              </div>
            </li>

          </ul>

        </div>

      
      </div>

      <div className="flex-container margin-top-20">
                    
        {/* =============================
            WH Questions
        ============================= */}

        <div className="sub-box">
      
          <p id="wh-questions"><mark className="highlight-secondary-padding-2-4">WH Questions</mark></p>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/grammar/6-element-formula">6-Element Formula</Link>
              </div>
            </li>
            
            <li>
              <div className="li-content">
                <Link to="/grammar/content-clauses">Content Clauses</Link>
              </div>
            </li>

          </ul>

        </div>

      
      </div>
      

      {/* <VERBSADDS /> */}

    </article>
    
  </main>

  </>);
}