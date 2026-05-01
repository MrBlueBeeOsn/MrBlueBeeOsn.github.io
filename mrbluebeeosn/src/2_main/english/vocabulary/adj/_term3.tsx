import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function (): React.JSX.Element {

  const postId = "";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adjectives-terms"><mark className="highlight-tertiary-padding-4-8">Adjectives</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center"></h1>

      {/* This is the content of Vocabulary Term. */}

      <p className="margin-bottom-30"><strong></strong> </p>

      {/* =============================
            Pronunciation / Phát âm
      ============================= */}

      <h3 className="margin-y-50 text-center">Pronunciation / Phát âm</h3>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>IPA: </li>
            <li>Phonetic Breakdown: </li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      {/* =============================
            Word Family
      ============================= */}

      <h3 className="margin-y-50 text-center">Word Family</h3>

      {/* <p className="margin-bottom-20"></p> */}

        <ul className="list-square">

          {/* <li><strong></strong> </li>
          <li className="list-none"></li>
          <li className="margin-bottom-20 list-none"></li> */}

          <li><strong></strong> </li>
          <li className="list-none"></li>
          <li className="margin-bottom-20 list-none"></li>

          <li><strong></strong> </li>
          <li className="list-none"></li>
          <li className="margin-bottom-20 list-none"></li>

          <li><strong></strong> </li>
          <li className="list-none"></li>
          <li className="margin-bottom-20 list-none"></li>

          <li><strong></strong> </li>
          <li className="list-none"></li>
          <li className="margin-bottom-20 list-none"></li>

          <li><strong></strong> </li>
          <li className="list-none"></li>
          <li className="list-none"></li>

        </ul>

      {/* =============================
            Synonyms / Từ đồng nghĩa
      ============================= */}

      <h3 className="margin-y-50 text-center">Synonyms / Từ đồng nghĩa</h3>

      <p className="margin-bottom-20"></p>

      {/* =============================
            1. 
      ============================= */}

      <p className="margin-top-20"><strong>1. </strong></p>

      <p className="text-indent-whole"></p>

        <ul className="list-square">

          <li></li>
          <li className="list-none"></li>

        </ul>

      {/* =============================
            2. 
      ============================= */}

      <p className="margin-top-20"><strong>2. </strong></p>

      <p className="text-indent-whole"></p>

        <ul className="list-square">

          <li></li>
          <li className="list-none"></li>

        </ul>

      {/* =============================
            3. 
      ============================= */}

      <p className="margin-top-20"><strong>3. </strong></p>

      <p className="text-indent-whole"></p>

        <ul className="list-square">

          <li></li>
          <li className="list-none"></li>

        </ul>

      {/* =============================
            4. 
      ============================= */}

      <p className="margin-top-20"><strong>4. </strong></p>

      <p className="text-indent-whole"></p>

        <ul className="list-square">

          <li></li>
          <li className="list-none"></li>

        </ul>

      {/* =============================
            5. 
      ============================= */}

      <p className="margin-top-20"><strong>5. </strong></p>

      <p className="text-indent-whole"></p>

        <ul className="list-square">

          <li></li>
          <li className="list-none"></li>

        </ul>

      {/* =============================
            6. 
      ============================= */}

      <p className="margin-top-20"><strong>6. </strong></p>

      <p className="text-indent-whole"></p>

        <ul className="list-square">

          <li></li>
          <li className="list-none"></li>

        </ul>

      {/* =============================
            7. 
      ============================= */}

      <p className="margin-top-20"><strong>7. </strong></p>

      <p className="text-indent-whole"></p>

        <ul className="list-square">

          <li></li>
          <li className="list-none"></li>

        </ul>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span> · by 💎Gem ·</span>
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