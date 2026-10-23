import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function VERy1(): React.JSX.Element {

  const postId = "VERy1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-HIGHly"><mark className="highlight-tertiary-padding-4-8">ADverbs: mức cao</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">VERy
        <sup><Link to="/vocabulary/VERy-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/VERy-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                            
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#ADverb">ADverb</HashLink>
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
      
      <p>Great! Let's dive into an analysis of the word "VERy."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                VERy \<Link to="/pronunciation/5-vowel-system">VER y</Link>\ /ˈveri/ ⬤• (TWO SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Very</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Used to emphasize the degree of another adjective or adverb, indicating that a certain characteristic is present to a high degree.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">she is VERy BEAUtiful.</li>
          <li className="margin-bottom-20 list-none">She is stunning.</li>

          <li>he RUNS VERy FAST.</li>
          <li className="list-none">He runs really quickly.</li>

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

          <li className="list-none">"VERy" does not have a direct family. However, "VERy" is often combined with other adjectives and adverbs to form new phrases.</li>

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

          <li>she <Link to="/vocabulary/exTREMEly-1">exTREMEly</Link> inTELligent.</li>
          <li className="margin-bottom-20 list-none">She is very smart.</li>

          <li>he <Link to="/vocabulary/HIGHly-1">HIGHly</Link> MOtivated.</li>
          <li className="list-none">He is extremely eager and driven.</li>

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

          <li>i'm SLIGHTly TIred.</li>
          <li className="margin-bottom-20 list-none">I'm a little tired.</li>

          <li>she <Link to="/vocabulary/NOT-1">NOT</Link> VERy TALL.</li>
          <li className="list-none">She is not a tall person.</li>

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

      <p className="text-indent-whole">Imagine a bright red apple. How would you describe it?</p>

        <ul className="list-square">

          <li>the APple VERy RED.</li>
          <li className="list-none">The apple has a deep red color.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Try to come up with as many example sentences as possible using "VERy."</p>

        <ul className="list-square">

          <li>she has VERy LONG HAIR.</li>
          <li className="list-none">Her hair is really long.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Read and write frequently to build your vocabulary and improve your use of "VERy."</p>

        <p className="text-indent-whole">Examples for comparison (the difference between "exTREMEly" and "VERy"):</p>

          <ol>

            <li value="1">she <Link to="/vocabulary/exTREMEly-1">exTREMEly</Link> HAPpy.</li>
            <li className="list-none">She's thrilled.</li>
            <li className="list-none margin-bottom-20">Emphasize an extremely high level.</li>

            <li value="2">she VERy HAPpy.</li>
            <li className="list-none">She's in a good mood.</li>
            <li className="list-none"><span className="highlight-255-padding-0-4">Emphasize a high level.</span></li>

          </ol>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"VERy" usually comes before an adjective or adverb.</li>

          <li>"VERy" can be used to emphasize both positive and negative qualities.</li>

          <li className="margin-bottom-20">To avoid overusing "VERy," you can use stronger adjectives or adverbs, or comparative structures.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 12, 2024 · by 💎GEM ·</span>
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