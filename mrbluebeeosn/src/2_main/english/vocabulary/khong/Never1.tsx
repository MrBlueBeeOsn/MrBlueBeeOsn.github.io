import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function NEVer1(): React.JSX.Element {

  const postId = "NEVer1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-NO"><mark className="highlight-tertiary-padding-4-8">NO</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">NEVer
        <sup><Link to="/vocabulary/NEVer-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/NEVer-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's dive into an analysis of the word "NEVer."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                NEVer \<Link to="/pronunciation/5-vowel-system">NEV e̛r</Link>\ /ˈnevər/ ⬤• (TWO SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Never</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">NEVer: Indicates a complete negation of an action or event that occurred at any time in the past, present, or future.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">i have NEVer BEEN to PARis.</li>
          <li className="margin-bottom-20 list-none">I've never gone to Paris before.</li>

          <li>she will NEVer forGET that DAY.</li>
          <li className="list-none">That day will be impossible for her to forget.</li>

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

          <li className="list-none">There is no direct family connection to "NEVer."</li>

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

          <li>i have <Link to="/vocabulary/NOT-1">NOT</Link> EVer SEEN such a BEAUtiful SUNset.</li>
          <li className="margin-bottom-20 list-none">I have never seen a sunset look as beautiful as this one!</li>

          <li>at NO TIME did i susPECT him of CHEATing.</li>
          <li className="list-none">I never thought that he would do something dishonest.</li>

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

          <li>she <Link to="/vocabulary/ALways-1">ALways</Link> COMES on TIME.</li>
          <li className="margin-bottom-20 list-none">She always arrives right when she's supposed to.</li>

          <li>have you <Link to="/vocabulary/EVer-1">EVer</Link> BEEN to jaPAN?</li>
          <li className="list-none">Have you ever visited Japan?</li>

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

      <p className="text-indent-whole">Imagine a sign that says "NEVer giVE UP" (Never give up); it might make you think of persevering in pursuit of your goals.</p>

        <ul className="list-square">

          <li><strong>ever</strong>y TIME i FEEL like GIVing UP, i THINK of the "NEVer giVE UP" SIGN and KEEP GOing.</li>
          <li className="list-none">Whenever I feel like throwing in the towel, I think of the "Never Give Up" motto. Sign and keep going.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Try to come up with as many example sentences as possible using "NEVer."</p>

        <ul className="list-square">

          <li>they have NEVer SEEN SNOW.</li>
          <li className="list-none">They have never seen snow before.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Read and write frequently to build your vocabulary and improve your use of "NEVer."</p>

        <p className="text-indent-whole">Examples for comparison (the difference between "NOT EVER" and "NEVER"):</p>

          <ol>

            <li value="1">i have <Link to="/vocabulary/NOT-1">NOT</Link> EVer SEEN such a BEAUtiful SUNset.</li>
            <li className="list-none margin-bottom-20">This is the prettiest sunset I have ever seen.</li>

            <li value="2">i have NEVer BEEN to PARis.</li>
            <li className="list-none margin-bottom-20">I have never visited Paris.</li>
    

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: Both words mean "never," but "NOT EVER" is <span className="highlight-255-padding-0-4">generally considered a more emphatic way</span> of saying it.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span>

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"NEVer" is usually placed at the beginning of a sentence or before the main action.</li>

          <li className="margin-bottom-20">"NEVer" is often used to emphasize a complete negation.</li>

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