import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function The6CoreVerbShapes(): React.JSX.Element {

  const postId = "The6CoreVerbShapes";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/grammar#grammar-terms"><mark className="highlight-tertiary-padding-4-8">Grammar</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">The 6 Core Verb Shapes</h1>

      {/* This is the content of English Learning Term. */}

      <h4 className="margin-bottom-30 text-center">The 6 Core Verb Shapes</h4>
      
      <p></p>
      
      <p></p>

      <p></p>

      <p></p>

      {/* 1.  */}

      <h3 className="margin-y-50 text-center"></h3>


      {/* 2.  */}

      <h3 className="margin-y-50 text-center"></h3>


      {/* 3.  */}

      <h3 className="margin-y-50 text-center"></h3>
      

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>sepTEMber 27, 2026 · by 💎GOOgle SEARCH AI ·</span>
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

    </article>

  </main>

  </>);
}