import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function VERy2(): React.JSX.Element {

  const postId = "VERy2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-SO"><mark className="highlight-tertiary-padding-4-8">SO</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">VERy
        <sup>
          <Link to="/vocabulary/VERy-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/VERy-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#HAPpy-to-SEE">HAPpy to SEE</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#TIred-after">TIred <strong>af</strong>ter</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#HUNgry">HUNgry</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#GOOD">GOOD</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#BAD-toDAY">BAD toDAY</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#RUN-QUICKly">RUN ... QUICKly</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#SPEAK-SLOWly">SPEAK ... SLOWly</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#HANdle-CAREfully">HANdle ... CAREfully</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#LIKE-MUCH">LIKE ... MUCH</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#have-LITtle-TIME">have ... LITtle TIME</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let's take a closer look at how to use the word "VERy" (very) in English.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              VERy \<Link to="/pronunciation/5-vowel-system">VER y</Link>\ /ˈveri/ ⬤• (TWO SYLlables)
              
            </span>
              
            &nbsp;is often used to emphasize the degree of another ADjective or ADverb.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="HAPpy-to-SEE">i VERy HAPpy to SEE you.</li>
        <li className="list-none margin-bottom-20">I'm very happy that we met.</li>

        <li value="2" id="TIred-after">i VERy TIred <strong>af</strong>ter WORK.</li>
        <li className="list-none margin-bottom-20">I'm exhausted from a hard day's work.</li>

        <li value="3" id="HUNgry">i VERy HUNgry. can we EAT <Link to="/vocabulary/NOW-1">NOW</Link>?</li>
        <li className="list-none margin-bottom-20">I am extremely hungry. Is it ok to eat now?</li>

        <li value="4" id="GOOD">your ENGlish VERy GOOD.</li>
        <li className="list-none margin-bottom-20">Your English is excellent!</li>

        <li value="5" id="BAD-toDAY">the WEATHer VERy BAD <Link to="/vocabulary/toDAY-1">toDAY</Link>.</li>
        <li className="list-none margin-bottom-20">It's very windy and cold today.</li>

        <li value="6" id="RUN-QUICKly">she RUN VERy <Link to="/vocabulary/QUICKly-1">QUICKly</Link>.</li>
        <li className="list-none margin-bottom-20">She runs very fast.</li>

        <li value="7" id="SPEAK-SLOWly">PLEASE SPEAK VERy <Link to="/vocabulary/SLOWly-1">SLOWly</Link>.</li>
        <li className="list-none margin-bottom-20">Speak slowly, please.</li>

        <li value="8" id="HANdle-CAREfully">PLEASE HANdle this GLASS VERy <Link to="/vocabulary/CAREfully-1">CAREfully</Link>.</li>
        <li className="list-none margin-bottom-20">Please handle this glass with care.</li>

        <li value="9" id="LIKE-MUCH">i LIKE COFfee VERy MUCH.</li>
        <li className="list-none margin-bottom-20">I really like coffee.</li>

        <li value="10" id="have-LITtle-TIME">i have VERy LITtle TIME.</li>
        <li className="list-none margin-bottom-20">I don't have a lot of time.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"VERy" is often placed before an adjective or adverb to emphasize their meaning.</li>

          <li className="margin-bottom-20">There are many other adverbs that can be used in place of "VERy," such as: <Link to="/vocabulary/exTREMEly-1">exTREMEly</Link>, inCREDibly, <Link to="/vocabulary/HIGHly-1">HIGHly</Link>, DEEPly, and many more.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping this information is helpful to you! 🐝</p>

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