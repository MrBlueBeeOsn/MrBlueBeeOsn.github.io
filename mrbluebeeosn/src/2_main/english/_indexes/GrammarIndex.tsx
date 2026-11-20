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
          2. Grammar
      ============================= */}

      <h3 className="margin-y-50 text-center" id="grammar-terms">Grammar</h3>

      <div className="table-search margin-bottom-50">
                        
        <SearchComponent />
        
        <VideoSearch2 />
                          
      </div>

      

      <div className="vocabulary-container margin-top-20">

        {/* =============================
              Grammar Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="verb-forms"><mark className="highlight-secondary-padding-2-4">Verb Forms Quiz</mark></summary>

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
      
          <summary id="grammar-quiz"><mark className="highlight-secondary-padding-2-4">Grammar Quiz</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/grammar/grammar-quiz">Grammar Quiz</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/ev-grammar-quiz">Grammar Quiz (EV)</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/grammar-quiz-2">Grammar Quiz 2</Link>
              </div>
            </li>


            <li>
              <div className="li-content">
                <Link to="/grammar/ev-grammar-quiz-2">Grammar Quiz 2 (EV)</Link>
              </div>
            </li>
            
          </ul>

        </details>


        {/* =============================
              Tenses Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="english-tenses-quiz"><mark className="highlight-secondary-padding-2-4">English Tenses Quiz</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/grammar/english-tenses-quiz">English Tenses Quiz</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/ev-english-tenses-quiz">English Tenses Quiz (EV)</Link>
              </div>
            </li>
            
          </ul>

        </details>

        {/* =============================
              Primary Auxiliary Verbs Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="Auxiliary-Verbs-Quiz"><mark className="highlight-secondary-padding-2-4">Auxiliary Verbs Quiz</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/grammar/en-auxiliary-verbs-quiz">Auxiliary Verbs Quiz</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/ev-auxiliary-verbs-quiz">Auxiliary Verbs Quiz (EV)</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/en-primary-auxiliary-verbs-quiz">Primary Auxiliary Verbs Quiz</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/ev-primary-auxiliary-verbs-quiz">Primary Auxiliary Verbs Quiz (EV)</Link>
              </div>
            </li>

            

            
            
          </ul>

        </details>

        {/* =============================
              Singular and Plural Verbs Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="singular-and-plural-verbs-quiz"><mark className="highlight-secondary-padding-2-4">Singular and Plural Verbs</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/grammar/singular-and-plural-verbs-quiz">Singular and Plural Verbs Quiz</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/ev-singular-and-plural-verbs-quiz">Singular and Plural Verbs (EV)</Link>
              </div>
            </li>

            
            
          </ul>

        </details>

        {/* =============================
              Singular and Plural Nouns Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="singular-and-plural-nouns-quiz"><mark className="highlight-secondary-padding-2-4">Singular and Plural Nouns</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/grammar/singular-and-plural-nouns-quiz">Singular and Plural Nouns Quiz</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/ev-singular-and-plural-nouns-quiz">Singular and Plural Nouns (EV)</Link>
              </div>
            </li>

            
            
          </ul>

        </details>

        {/* =============================
              Prepositions Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="prepositions-quiz"><mark className="highlight-secondary-padding-2-4">Prepositions</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/grammar/prepositions-quiz">Prepositions Quiz</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/ev-prepositions-quiz">Prepositions (EV)</Link>
              </div>
            </li>

            
            
          </ul>

        </details>

        
        {/* =============================
              Subject-Verb Agreement Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="subject-verb-agreement-quiz"><mark className="highlight-secondary-padding-2-4">Subject-Verb Agreement</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/grammar/subject-verb-quiz">Subject Verb Agreement Quiz</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/ev-subject-verb-quiz">Subject Verb Agreement Quiz (EV)</Link>
              </div>
            </li>

            
            
          </ul>

        </details>



        {/* =============================
              S And Es In Nouns Verbs Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="s-and-es-quiz"><mark className="highlight-secondary-padding-2-4">S & ES Quiz</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/grammar/s-and-es-quiz">S & ES Quiz</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/ev-s-and-es-quiz">S & ES Quiz (EV)</Link>
              </div>
            </li>

            
            
          </ul>

        </details>

        {/* =============================
              Articles Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="articles-quiz"><mark className="highlight-secondary-padding-2-4">Articles</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/grammar/articles-quiz">Articles Quiz</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/ev-articles-quiz">Articles Quiz (EV)</Link>
              </div>
            </li>

            
            
          </ul>

        </details>

        {/* =============================
              TOEIC Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="phrasal-verbs-quiz"><mark className="highlight-secondary-padding-2-4">Phrasal Verbs Quiz</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/grammar/phrasal-Verbs-quiz">PhrasalVerbsQuiz</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/ev-phrasal-verbs-quiz">Phrasal Verbs Quiz (EV)</Link>
              </div>
            </li>

            
            
          </ul>

        </details>

        {/* =============================
          Gerunds andInfinitives Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="gerunds&infinitives-quiz"><mark className="highlight-secondary-padding-2-4">Gerunds and Infinitives Quiz</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/grammar/gerunds-and-infinitives-quiz">Gerunds and Infinitives Quiz</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/ev-gerunds-and-infinitives-quiz">Gerunds and Infinitives Quiz (EV)</Link>
              </div>
            </li>

            
            
          </ul>

        </details>

        {/* =============================
            Clauses Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="clauses-quiz"><mark className="highlight-secondary-padding-2-4">Clauses Quiz</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/grammar/adjective-clauses-quiz">Adjective Clauses Quiz</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/adverb-clauses-quiz">Adverb Clauses Quiz</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/noun-clauses-quiz">Noun Clauses Quiz</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/dc-quiz">Dependent Clauses Quiz</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/ev-adjective-clauses-quiz">Adjective Clauses (EV)</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/ev-adverb-clauses-quiz">Adverb Clauses Quiz (EV)</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/ev-noun-clauses-quiz">Noun Clauses Quiz (EV)</Link>
              </div>
            </li>
            
            <li>
              <div className="li-content">
                <Link to="/grammar/ev-dc-quiz">Dependent Clauses Quiz (EV)</Link>
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

            <li>
              <div className="li-content">
                <Link to="/grammar/6-types-of-verbs">6 Types of Verbs
                </Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/grammar/present-perfect">PREsent PERfect</Link>
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

          {/* =============================
              ADjective
          ============================= */}
      
          <p id="adjective-terms"><mark className="highlight-secondary-padding-2-4">ADjectives</mark></p>

          <ul className="list-border1">
            
            <li>
              <div className="li-content">
                <Link to="/grammar/recognizing-adjectives">Recognizing ADJECTIVES</Link>
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