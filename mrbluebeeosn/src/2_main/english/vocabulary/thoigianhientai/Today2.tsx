import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function toDAY2(): React.JSX.Element {

  const postId = "toDAY2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-toDAY"><mark className="highlight-tertiary-padding-4-88">toDAY</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">toDAY
        <sup>
          <Link to="/vocabulary/toDAY-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/toDAY-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#is-MONday">is MONday</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#i-am-GOing-to">i am GOing to</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#as-of">as of</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#Even">Even</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#CALL-LAter">CALL ... LAter</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#MET-EARlier">MET ... EARlier</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#from-ONwards">from ... ONwards</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#is-the-DAY-i-get">is the DAY i get</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#UP-to">UP to</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#on-this-DAY">on this DAY</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let's take a closer look at how to use the word "toDAY" (today) in English.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              toDAY \<Link to="/pronunciation/5-vowel-system">tơ DĀY</Link>\ /təˈdeɪ/ •⬤ (TWO SYLlables)
              
            </span>
              
            &nbsp;is a very common adverb of time, often used to refer to the present moment.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="is-MONday">toDAY is MONday.</li>
        <li className="list-none margin-bottom-20">It is Monday today.</li>

        <li value="2" id="i-am-GOing-to">toDAY, i am GOing to the PARK.</li>
        <li className="list-none margin-bottom-20">I'm going to the park today.</li>

        <li value="3" id="as-of">as of toDAY, we have SOLD ONE HUNdred PROJects.</li>
        <li className="list-none margin-bottom-20">We have sold 100 projects so far today.</li>

        <li value="4" id="Even">Even toDAY, <strong>man</strong>y PEOple beLIEVE in GHOSTS.</li>
        <li className="list-none margin-bottom-20">Even today, a lot of people believe in ghosts.</li>

        <li value="5" id="CALL-LAter">i will CALL you LAter toDAY.</li>
        <li className="list-none margin-bottom-20">I'll give you a call later today.</li>

        <li value="6" id="MET-EARlier">i MET him EARlier toDAY.</li>
        <li className="list-none margin-bottom-20">I met him earlier in the day.</li>

        <li value="7" id="from-ONwards">from toDAY ONwards, i will START EXercising.</li>
        <li className="list-none margin-bottom-20">Starting today, I am going to start exercising.</li>

        <li value="8" id="is-the-DAY-i-get">toDAY is the DAY i get MARried.</li>
        <li className="list-none margin-bottom-20">Today is my wedding day.</li>

        <li value="9" id="UP-to">UP to toDAY, we have comPLEted FIFty perCENT of the PROJect.</li>
        <li className="list-none margin-bottom-20">Today we are halfway done with the project.</li>

        <li value="10" id="on-this-DAY">on this DAY, <strong>man</strong>y YEARS aGO, a GREAT WAR beGAN.</li>
        <li className="list-none margin-bottom-20">Many years ago, a major conflict, known as the Great War, began on this day.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"toDAY" usually appears at the beginning or in the middle of a sentence.</li>

          <li className="margin-bottom-20">The exact meaning of the phrase depends on the context in which it is used.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping this information helps you better understand how to use the word "toDAY" in English! 🐝</p>

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