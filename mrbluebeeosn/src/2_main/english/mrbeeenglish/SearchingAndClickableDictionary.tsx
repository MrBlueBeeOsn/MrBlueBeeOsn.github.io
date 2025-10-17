import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import SearchComponent from '@/components/SearchComponent';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function SearchingAndClickableDictionary(): React.JSX.Element {

  const postId = "SearchingAndClickableDictionary";

  return (<>

  <main className="image image2">
    
    <h4>by <HashLink smooth to="/#mr-bee-osn-english-terms"><mark className="highlight-tertiary-padding-4-8">Mr. Bee Osn</mark></HashLink></h4>
    
    <h2 className="margin-y-50 text-center">Search & Click Dictionary</h2>

    {/* This is the content of Mr. Bee Osn English Term. */}

    <div className="margin-bottom-50 margin-top-30 table-container">
    
      <div className="text-border1 padding-20">

        <SearchComponent />

        <div  className="flex-container">

          <HashLink smooth to="/english#english-terms">
          <mark className="highlight-tertiary-padding-2-4">English</mark>
          </HashLink>

          <HashLink smooth to="/grammar#grammar-terms">
            <mark className="highlight-tertiary-padding-2-4">Grammar</mark>
          </HashLink>

          <HashLink smooth to="/pronunciation#pronunciation-terms">
            <mark className="highlight-tertiary-padding-2-4">Pronunciation</mark>
          </HashLink>

        </div>

        <div  className="flex-container">
            
          <HashLink smooth to="/tieng-anh#tieng-anh-terms">
            <mark className="highlight-tertiary-padding-2-4">Tiếng Anh</mark>
          </HashLink>

          <HashLink smooth to="/english#vocabulary-terms">
            <mark className="highlight-tertiary-padding-2-4">Từ vựng</mark>
          </HashLink>

        </div>

      </div>
    
    </div>

    <div className="viewcounter">
    
      <div className="post-date no-margin">
        <span>by 🐝Mr. Bee Osn ·</span>
      </div>

      <div className="eye-icon no-margin">
        <EyeIcon />
      </div>

      <div className="post-date no-margin">
        <ViewCounter postId={postId} />
      </div>

      <div className="like-button no-margin">
        <LikeButton postId={postId} />
      </div>

    </div>
    
  </main>

  </>);
}