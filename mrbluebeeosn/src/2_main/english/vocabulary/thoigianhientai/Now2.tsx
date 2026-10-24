import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function NOW2(): React.JSX.Element {

  const postId = "NOW2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-toDAY"><mark className="highlight-tertiary-padding-4-88">toDAY</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">NOW
        <sup>
          <Link to="/vocabulary/NOW-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/NOW-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#NEED-RIGHT">NEED ... RIGHT</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#for">for</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#and-THEN">and THEN</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#until">un<strong>til</strong></HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#but-THEN-and">but THEN and</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#from-ON">from ... ON</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#SAW-JUST">SAW ... JUST</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#Even">Even</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#that-you're-HERE">that you're HERE</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#NEED-to-FINish-RIGHT">NEED to FINish ... RIGHT</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let's take a closer look at how to use the word "NOW" (right now) in English.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              NOW \<Link to="/pronunciation/5-vowel-system">NOW</Link>\ /naʊ/ ⬤ (ONE SYLlable)
              
            </span>
              
            &nbsp;is a very versatile adverb of time that can be used in many different contexts.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="NEED-RIGHT">i NEED your HELP RIGHT NOW.</li>
        <li className="list-none margin-bottom-20">I need your help right away.</li>

        <li value="2" id="for">for NOW, let's JUST FOcus on FINishing this PROJect.</li>
        <li className="list-none margin-bottom-20">Let's put our efforts into completing this project for the time being.</li>

        <li value="3" id="and-THEN">i LIKE to GO HIking in the MOUNtains NOW and THEN.</li>
        <li className="list-none margin-bottom-20">I like to go hiking in the mountains sometimes.</li>

        <li value="4" id="until">i NEVer KNEW a<strong>bout</strong> this PROBlem un<strong>til</strong> NOW.</li>
        <li className="list-none margin-bottom-20">I just found out about this problem.</li>

        <li value="5" id="but-THEN-and">she USED to be VERy SHY, but THEN and NOW, she's VERy OUTgoing.</li>
        <li className="list-none margin-bottom-20">She was shy at first, but now she's outgoing.</li>

        <li value="6" id="from-ON">i will START EXercising <strong>ever</strong>y DAY from NOW ON.</li>
        <li className="list-none margin-bottom-20">Starting today, I am going to exercise every day.</li>

        <li value="7" id="SAW-JUST">i SAW her JUST NOW.</li>
        <li className="list-none margin-bottom-20">I saw her just a moment ago.</li>

        <li value="8" id="Even">Even NOW, i CAN'T beLIEVE it HAPpened.</li>
        <li className="list-none margin-bottom-20">I am still in disbelief about what happened.</li>

        <li value="9" id="that-you're-HERE">NOW that you're HERE, let's get STARTed.</li>
        <li className="list-none margin-bottom-20">Since you are here, we can get started.</li>

        <li value="10" id="NEED-to-FINish-RIGHT">i NEED to FINish this rePORT RIGHT this NOW.</li>
        <li className="list-none margin-bottom-20">I have to finish this report right now.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"NOW" can appear in various positions within a sentence, depending on the context.</li>

          <li>"NOW" can be used to connect ideas and create transitions between sentences.</li>

          <li className="margin-bottom-20">The exact meaning of the phrase depends on the context in which it is used.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping this information helps you better understand how to use the word "NOW" in English! 🐝</p>

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