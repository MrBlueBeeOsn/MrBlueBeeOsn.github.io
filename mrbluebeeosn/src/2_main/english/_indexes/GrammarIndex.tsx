import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EnglishTopic from '@/components/topic/EnglishTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch from '@/components/video/VideoSearch';

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
        
        <VideoSearch />
                          
      </div>

      <div className="flex-container">

        <div className="sub-box">

          <ul className="list-border1">

            <li><Link to="/grammar/what-is-an-adverb?">Adverb</Link></li>

            <li><Link to="/grammar/what-is-a-verb?">Verb</Link></li>

            <li><Link to="/grammar/what-is-an-adjective?">Adjective</Link></li>

            <li><Link to="/grammar/what-is-a-noun?">Noun</Link></li>

          </ul>

        </div>

      </div>

    </article>
    
  </main>

  </>);
}