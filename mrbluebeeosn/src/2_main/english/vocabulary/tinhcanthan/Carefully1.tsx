import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function CAREfully1(): React.JSX.Element {

  const postId = "CAREfully1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-CAREfully"><mark className="highlight-tertiary-padding-4-8">CAREfully</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">CAREfully
        <sup><Link to="/vocabulary/CAREfully-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/CAREfully-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                            
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#ADverb">ADverb</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#ADjective">ADjective</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#NOUN">NOUN</HashLink>
          </span> &nbsp;

        </p>

        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#SYNonyms">SYNonyms</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#ANtonyms">ANtonyms</HashLink>
          </span> &nbsp;

        </p>

        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#VoCABulary-LEARNing-TIPS">🌻 VoCABulary LEARNing TIPS</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Great! Let's explore the word "CAREfully" together.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                CAREfully \<Link to="/pronunciation/5-vowel-system">CARE fưl ly</Link>\ /ˈkerfəli/ ⬤•• (THREE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Be careful</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "CAREfully" is used to describe an action performed meticulously and thoughtfully, avoiding mistakes or accidents. It conveys a sense of care and caution.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">PLEASE READ the inSTRUCtions CAREfully be<strong>fore</strong> you START.</li>
          <li className="margin-bottom-20 list-none">Please take a moment to read through this manual carefully before getting started.</li>

          <li>she CAREfully PACKED her SUITcase for the TRIP.</li>
          <li className="list-none">She made sure her suitcase was packed properly before leaving for her trip.</li>

        </ul>

      {/* =============================
            VoCABulary FAMILy:
      ============================= */}
        
      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>VoCABulary FAMILy:</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li id="ADjective">be CAREful with that GLASS.</li>
          <li className="margin-bottom-20 list-none">Don't let the glass break.</li>

          <li id="NOUN">she TAKES GOOD CARE of her PLANTS.</li>
          <li className="list-none">She looks after her plants well.</li>

        </ul>

      {/* =============================
            SYNonyms:
      ============================= */}
        
      <p className="margin-top-20" id="SYNonyms">
        <mark className="highlight-238-padding-4-8">
          <strong>SYNonyms</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>he WALKED <Link to="/vocabulary/CAUtiously-1">CAUtiously</Link> across the Icy ROAD.</li>
          <li className="margin-bottom-20 list-none">He walked slowly on the ice-covered road.</li>

          <li>she <Link to="/vocabulary/meTICulously-1">meTICulously</Link> CLEANED the HOUSE.</li>
          <li className="list-none">She made sure the house was very clean.</li>

        </ul>

        {/* <Link to="/vocabulary/CLEARly-1">Clearly</Link> */}

      {/* =============================
            ANtonyms:
      ============================= */}

      <p className="margin-top-20" id="ANtonyms">
        <mark className="highlight-238-padding-4-8">
          <strong>ANtonyms</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>he CARElessly THREW the PAper on the FLOOR.</li>
          <li className="margin-bottom-20 list-none">He threw the paper on the floor without thinking.</li>

          <li>she ACTed RASHly and MADE a misTAKE.</li>
          <li className="list-none">She made a mistake because she was too quick to act.</li>

        </ul>
      
      {/* =============================
            🌻 Vocabulary-Learning Tips:
      ============================= */}

      <h3 className="margin-y-50 text-center" id="VoCABulary-LEARNing-TIPS">🌻 Vocabulary-Learning Tips:</h3>

      {/* =============================
            1. Link to the image:
      ============================= */}
      
      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>1. Link to the image</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Imagine someone walking carefully along a tightrope.</p>

        <ul className="list-square">

          <li>she is CAREfully WALKing on the TIGHTrope.</li>
          <li className="list-none">Her steps are very careful as she walks on a tightrope.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create various example sentences using the word "CAREfully" in different contexts.</p>

        <ul className="list-square">

          <li>she CAREfully PEELED the APple.</li>
          <li className="list-none">She peeled the apple slowly and carefully.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Use this word regularly in conversations and writing.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">he CROSSED the STREET.</li>
            <li className="list-none margin-bottom-20">He walked to the other side of the road.</li>

            <li value="2">he CAREfully CROSSED the STREET be<strong>cause</strong> there was a LOT of TRAFfic.</li>
            <li className="list-none margin-bottom-20">He crossed the street slowly and carefully because there were many cars on the road.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence <span className="highlight-255-padding-0-4">emphasizes that he crossed the street carefully</span> because there was a lot of traffic.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Contrast: "CAREfully" is often used to contrast with hasty, rushed, or careless actions.</li>

          <li className="margin-bottom-20">Process: It emphasizes attention to every detail during the process of doing something.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 5, 2024 · by 💎GEM ·</span>
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