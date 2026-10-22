import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function GREATly2(): React.JSX.Element {

  const postId = "GREATly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-muc-do-cao"><mark className="highlight-tertiary-padding-4-8">ADverbs: mức độ cao</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">GREATly
        <sup>
          <Link to="/vocabulary/GREATly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/GREATly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#apPREciated">apPREciated</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#imPROVED-since">imPROVED since</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#INfluenced">INfluenced</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#adMIred-for">adMIred for</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#reDUCED">reDUCED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#inCREASED-since-the">inCREASED since the</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#conCERNED-about-the">conCERNED a<strong>bout</strong> the</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#disapPOINTed-with-the">disapPOINTed with the</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#eXAGgerated">eXAGgerated</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#BENefited-from-the">BENefited from the</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let’s take a closer look at the word “GREATly” (very) and some common phrases that go with it.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              GREATly \<Link to="/pronunciation/5-vowel-system">GREAT ly</Link>\ /ˈɡreɪtli/ ⬤• (TWO SYLlables)
              
            </span>
              
            &nbsp;is often used to emphasize the high degree of an action, emotion, or change.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="apPREciated">your HELP is GREATly apPREciated.</li>
        <li className="list-none margin-bottom-20">Thank you so much for your help.</li>

        <li value="2" id="imPROVED-since">his HEALTH has GREATly imPROVED since he STARTed EXercising.</li>
        <li className="list-none margin-bottom-20">He looks much healthier since he started working out.</li>

        <li value="3" id="INfluenced">his PARents GREATly INfluenced his deCISion.</li>
        <li className="list-none margin-bottom-20">His parents had a big impact on his decision.</li>

        <li value="4" id="adMIred-for">she is GREATly adMIred for her COURage.</li>
        <li className="list-none margin-bottom-20">People admire her a lot because she shows a lot of courage.</li>

        <li value="5" id="reDUCED">the PRICE of the PRODuct has been GREATly reDUCED.</li>
        <li className="list-none margin-bottom-20">The price of the product has dropped a lot.</li>

        <li value="6" id="inCREASED-since-the">SALES have GREATly inCREASED since the NEW MARketing camPAIGN.</li>
        <li className="list-none margin-bottom-20">There has been a big increase in sales since the new marketing campaign was launched.</li>

        <li value="7" id="conCERNED-about-the">i am GREATly conCERNED a<strong>bout</strong> the enVIronment.</li>
        <li className="list-none margin-bottom-20">I am extremely worried about the environment.</li>

        <li value="8" id="disapPOINTed-with-the">i was GREATly disapPOINTed with the reSULTS.</li>
        <li className="list-none margin-bottom-20">I was really disappointed with how things turned out.</li>

        <li value="9" id="eXAGgerated">the STORy was GREATly eXAGgerated.</li>
        <li className="list-none margin-bottom-20">The story was told way too big.</li>

        <li value="10" id="BENefited-from-the">he has GREATly BENefited from the NEW PROgram.</li>
        <li className="list-none margin-bottom-20">The new program has been really good for him.</li>

      </ol>

      <p>** The phrases above all emphasize the high degree of an action, emotion, or change. They are often used to highlight the importance, intensity, or impact of something.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"GREATly" is often used before a verb or adjective to modify it.</li>

          <li className="margin-bottom-20">This word can be replaced with synonyms such as "sigNIFicantly," "subSTANtially," or "conSIDerably" to add variety to your writing style.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping this information is helpful to you! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 6, 2024 · by 💎GEM ·</span>
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