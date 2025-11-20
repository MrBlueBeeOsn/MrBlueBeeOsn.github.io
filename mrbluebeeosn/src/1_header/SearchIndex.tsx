import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import SearchBar from "../components/search/SearchBar";
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch from '@/components/video/VideoSearch';
import PronunciationSearch from '@/components/video/PronunciationSearch';
import YouGlishWidget from '@/components/video/YouGlishWidget';

export default function SearchIndex(): React.JSX.Element {

  console.log('🎯 SearchIndex đang render...');

  return (<>
     
    <main className="image image3">

      <article>

        <div className="table-search">

          <YouGlishWidget />
        
        </div>

      </article>

    </main>

  </>);
}