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
    
      <h4><HashLink smooth to="/vocabulary#verbs-terms"><mark className="highlight-tertiary-padding-4-8">Verbs</mark></HashLink></h4>
      
            
      <h1 className="margin-y-50 text-center">[]</h1>

      {/* This is the content of Vocabulary Term. */}


      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-30"><strong>Động Cơ</strong> [<strong>Verb Base</strong>]: </p>

            <ul className="list-square">
          
              <li></li>
              <li className="margin-bottom-20 list-none"></li>

              <li className="list-none"></li>
          
            </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>



      {/* =============================
            🟦 Cấp độ Cơ [Base]
      ============================= */}


      <h4 className="margin-y-40">🟦 Cấp độ Cơ [Base]</h4>

      <p className="text-indent-whole"></p>


      <p className="margin-top-20 text-indent-whole"><strong>Danh Cơ</strong> [<strong>Noun Base</strong>]: </p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Tính Cơ</strong> [<strong>Adjective Base</strong>]: </p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Trạng Cơ</strong> [<strong>Adverb Base</strong>]: </p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>
      
      


      {/* =============================
            🟦 Cấp độ Cụm [Phrase]
      ============================= */}


      <h4 className="margin-y-40">🟦 Cấp độ Cụm [Phrase]</h4>
          
      <p className="text-indent-whole"></p>


      <p className="margin-top-20 text-indent-whole"><strong>Danh Cụm</strong> [<strong>Noun Phrase</strong>]: </p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Tính Cụm</strong> [<strong>Adjective Phrase</strong>]: </p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Trạng Cụm</strong> [<strong>Adverb Phrase</strong>]: </p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>
      



      {/* =============================
            🟦 Cấp độ Câu [Clause]
      ============================= */}


      <h4 className="margin-y-40">🟦 Cấp độ Câu [Clause]</h4>

      <p className="text-indent-whole"></p>


      <p className="margin-top-20 text-indent-whole"><strong>Danh Câu</strong> [<strong>Noun Clause</strong>]: </p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Tính Câu</strong> [<strong>Adjective Clause</strong>]: </p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Trạng Câu</strong> [<strong>Adverb Clause</strong>]: </p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
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