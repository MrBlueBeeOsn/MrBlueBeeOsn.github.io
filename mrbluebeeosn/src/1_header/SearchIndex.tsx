import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import SearchBar from "../components/search/SearchBar";
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch3 from '@/components/video/test/VideoSearch3';
import PronunciationSearch from '@/components/video/test/PronunciationSearch';
import YouGlishWidget from '@/components/video/test/YouGlishWidget';

export default function SearchIndex(): React.JSX.Element {

  console.log('🎯 SearchIndex đang render...');

  return (<>
     
    <main className="image image3">

      <h3 className="margin-y-50 text-center">Articles + Tutorials</h3>

      <article>

        <div className="table-search">

          <SearchComponent />

          <VideoSearch3 />

            {/* <YouGlishWidget /> */}
            
        </div>

      </article>

    </main>

  </>);
}