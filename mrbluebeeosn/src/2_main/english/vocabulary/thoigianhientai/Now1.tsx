import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function NOW1(): React.JSX.Element {

  const postId = "NOW1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-toDAY"><mark className="highlight-tertiary-padding-4-88">toDAY</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">NOW
        <sup><Link to="/vocabulary/NOW-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/NOW-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's dive into an analysis of the word "NOW" and related idioms.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                NOW \<Link to="/pronunciation/5-vowel-system">NOW</Link>\ /naʊ/ ⬤ (ONE SYLlable)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Right now</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">NOW: Only the present moment, right now.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">i am EATing NOW.</li>
          <li className="margin-bottom-20 list-none">I'm eating right now.</li>

          <li>NOW, PLEASE be QUIet.</li>
          <li className="list-none">Now, please be silent.</li>

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

          <li className="list-none">There is no direct translation for "NOW" because it is a single word.</li>

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

          <li>at PRESent, i am WORKing on a NEW PROJect.</li>
          <li className="margin-bottom-20 list-none">Right now, I'm working on a new project.</li>

          <li><Link to="/vocabulary/CURrently-1">CURrently</Link>, the TEMPERature is THIRty deGREES.</li>
          <li className="list-none">It is currently 30 degrees outside.</li>

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

          <li>we can TALK a<strong>bout</strong> it LAter.</li>
          <li className="margin-bottom-20 list-none">We can discuss this later.</li>

          <li>be<strong>fore</strong> i GO, i WANT to SAY GOODBYE.</li>
          <li className="list-none">I would like to say goodbye before I go.</li>

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

      <p className="text-indent-whole">Imagine a clock showing the current time.</p>

        <ul className="list-square">

          <li>RIGHT NOW, it's FIVE o'CLOCK.</li>
          <li className="list-none">It is now five o'clock.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create several sentences using "NOW" in different contexts related to time.</p>

        <ul className="list-square">

          <li>i can SPEAK ENGlish MUCH BETter NOW.</li>
          <li className="list-none">My English has improved a lot.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Use "NOW" regularly in everyday conversation.</p>

        <p className="text-indent-whole">Examples for comparison (the difference between "at present" and "now"):</p>

          <ol>

            <li value="1">at PRESent, she is LIVing in PARis.</li>
            <li className="list-none">She is living in Paris at the moment.</li>
            <li className="list-none margin-bottom-20">A more formal way of saying it, <span className="highlight-255-padding-0-4">emphasizing the current situation.</span></li>

            <li value="2">NOW, LISten to me <Link to="/vocabulary/CAREfully-1">CAREfully</Link>.</li>
            <li className="list-none">Pay attention and listen closely.</li>
            <li className="list-none">A common way of speaking that <span className="highlight-255-padding-0-4">emphasizes immediacy.</span></li>

          </ol>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"NOW" usually comes at the beginning of a sentence or before the main action.</li>

          <li className="margin-bottom-20">It can be used to emphasize urgency or to change the subject.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 4, 2024 · by 💎GEM ·</span>
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