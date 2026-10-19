import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function REally2(): React.JSX.Element {

  const postId = "REally2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-verifiCAtion"><mark className="highlight-tertiary-padding-4-8">ADverbs: verifiCAtion</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">REally
        <sup>
          <Link to="/vocabulary/REally-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/REally-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#LIKE">LIKE</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#WANT">WANT</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#WELL">WELL</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#BIG">BIG</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#FAST">FAST</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#HARD">HARD</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#FUNny">FUNny</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#TIred">TIred</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#HAPpy">HAPpy</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#surPRISED">surPRISED</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let's take a closer look at the word "REally" (really) and some common phrases that go with it.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              REally \<Link to="/pronunciation/5-vowel-system">RĒA̛L ly</Link>\ /ˈriːəli/ ⬤• (TWO SYLlables)
              
            </span>
              
            &nbsp;in English means "really" or "very" and is often used to emphasize an opinion, emotion, or event.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="LIKE">i REally LIKE PIZza.</li>
        <li className="list-none margin-bottom-20">I love pizza!</li>

        <li value="2" id="WANT">i REally WANT to GO to PARis.</li>
        <li className="list-none margin-bottom-20">I would really like to visit Paris.</li>

        <li value="3" id="WELL">she SPEAKS ENGlish REally WELL.</li>
        <li className="list-none margin-bottom-20">She's got a solid handle on English.</li>

        <li value="4" id="BIG">his HOUSE is REally BIG.</li>
        <li className="list-none margin-bottom-20">His house is very large.</li>

        <li value="5" id="FAST">the CAR can GO REally FAST.</li>
        <li className="list-none margin-bottom-20">The car can go very quickly.</li>

        <li value="6" id="HARD">this MATH PROBlem is REally HARD.</li>
        <li className="list-none margin-bottom-20">Hey, just a heads-up, this math problem is a real doozy.</li>

        <li value="7" id="FUNny">that JOKE was REally FUNny.</li>
        <li className="list-none margin-bottom-20">That was a really funny joke.</li>

        <li value="8" id="TIred">i'm REally TIred <strong>af</strong>ter WORK.</li>
        <li className="list-none margin-bottom-20">I'm extremely tired from work.</li>

        <li value="9" id="HAPpy">i'm REally HAPpy to SEE you.</li>
        <li className="list-none margin-bottom-20">It's good to see you! I'm happy to see you.</li>

        <li value="10" id="surPRISED">i was REally surPRISED by the NEWS.</li>
        <li className="list-none margin-bottom-20">I was very surprised to hear the news.</li>

      </ol>

      <p>** All of the phrases above emphasize the degree of an adjective or adverb. "Really" is used to intensify the meaning of the word it accompanies.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"REally" can come before or after an adjective or adverb.</li>

          <li className="margin-bottom-20">This word is very common in everyday language and is used in many different contexts.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping this information is helpful to you! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 2, 2024 · by 💎GEM ·</span>
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