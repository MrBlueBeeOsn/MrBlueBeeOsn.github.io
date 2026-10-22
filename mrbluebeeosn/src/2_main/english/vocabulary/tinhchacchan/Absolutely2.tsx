import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function ABsolutely2(): React.JSX.Element {

  const postId = "ABsolutely2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-CERtainly"><mark className="highlight-tertiary-padding-4-8">CERtainly</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">ABsolutely
        <sup>
          <Link to="/vocabulary/ABsolutely-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/ABsolutely-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#CERtain-that">CERtain that</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#NECessary-to-HAVE">NECessary to HAVE</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#RIGHT-about">RIGHT a<strong>bout</strong></HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#LOVE">LOVE</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#HATE">HATE</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#BEAUtiful">BEAUtiful</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#PERfect">PERfect</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#TRUE">TRUE</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#conVINCED-that">conVINCED that</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#exHAUSTed">exHAUSTed</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let's take a closer look at the word "ABsolutely" (of course) and some common phrases that go with it.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              ABsolutely \<Link to="/pronunciation/5-vowel-system">AB sơ lüte ly</Link>\ /ˈæb·səˌlut·li/ ⬤••• (FOUR SYLlables)
              
            </span>
              
            &nbsp;is an adverb commonly used to emphasize an opinion, a response, or a situation. It conveys complete agreement, certainty, or the absence of any exceptions.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="CERtain-that">i am ABsolutely CERtain that he will WIN the RACE.</li>
        <li className="list-none margin-bottom-20">He's definitely going to win the race.</li>

        <li value="2" id="NECessary-to-HAVE">it is ABsolutely NECessary to HAVE a PASSport to TRAVel abROAD.</li>
        <li className="list-none margin-bottom-20">You must have a passport to travel outside the country.</li>

        <li value="3" id="RIGHT-about">you are ABsolutely RIGHT a<strong>bout</strong> THAT.</li>
        <li className="list-none margin-bottom-20">What you said is completely true.</li>

        <li value="4" id="LOVE">i ABsolutely LOVE CHOCOLate ICE CREAM.</li>
        <li className="list-none margin-bottom-20">I really, really love chocolate ice cream.</li>

        <li value="5" id="HATE">i ABsolutely HATE SPIders.</li>
        <li className="list-none margin-bottom-20">I can't stand spiders.</li>

        <li value="6" id="BEAUtiful">the SUNset was ABsolutely BEAUtiful.</li>
        <li className="list-none margin-bottom-20">The sunset was really pretty!</li>

        <li value="7" id="PERfect">the CAKE was ABsolutely PERfect.</li>
        <li className="list-none margin-bottom-20">The cake was perfectly prepared.</li>

        <li value="8" id="TRUE">what he SAID was ABsolutely TRUE.</li>
        <li className="list-none margin-bottom-20">He was right.</li>

        <li value="9" id="conVINCED-that">i am ABsolutely conVINCED that she is INnocent.</li>
        <li className="list-none margin-bottom-20">She is definitely innocent.</li>

        <li value="10" id="exHAUSTed"><strong>af</strong>ter the MARathon, i was ABsolutely exHAUSTed.</li>
        <li className="list-none margin-bottom-20">The marathon made me very tired.</li>

      </ol>

      <p>** All of the phrases above are used to strongly emphasize an opinion, emotion, or situation. They are often placed at the beginning of a sentence to draw attention and add emphasis.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"ABsolutely" is often placed before an adjective or adverb to modify it.</li>

          <li className="margin-bottom-20">This word can be used in both spoken and written language.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping this information is helpful to you! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 8, 2024 · by 💎GEM ·</span>
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