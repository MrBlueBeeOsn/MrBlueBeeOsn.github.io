import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import SearchBar from "../components/SearchBar";
import SearchComponent from '@/components/SearchComponent';

export default function SearchIndex(): React.JSX.Element {

  console.log('🎯 SearchIndex đang render...');

return (<>
     
    <main className="image image3">

      <div className="table-search">

        <SearchComponent />
      
      </div>

    </main>

  </>);
}