import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function esPECially1(): React.JSX.Element {

  const postId = "esPECially1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-esPECially"><mark className="highlight-tertiary-padding-4-8">esPECially</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">esPECially
        <sup><Link to="/vocabulary/esPECially-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/esPECially-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's take a closer look at the word "esPECially."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                esPECially \<Link to="/pronunciation/5-vowel-system">es PEC ia̛l ly</Link>\ /ɪˈspɛʃəli/ •⬤•• (FOUR SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>In particular</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "esPECially" is used to emphasize something that is more important or stands out more than other things in the same context. It is often used to point out a specific reason or a particular highlight.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">i LOVE all FRUITS, esPECially APples.</li>
          <li className="margin-bottom-20 list-none">I really like all kinds of fruits, but I especially like apples.</li>

          <li>she is VERy GOOD at LANguages, esPECially FRENCH.</li>
          <li className="list-none">She is very skilled in language, especially the French language.</li>

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

          <li id="ADjective">THIS is a SPECial ocCAsion.</li>
          <li className="list-none">This event is special.</li>

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

          <li>i am <Link to="/vocabulary/parTICularly-1">parTICularly</Link> FOND of this PAINTing.</li>
          <li className="margin-bottom-20 list-none">I especially like this painting.</li>

          <li>i LIKE <strong>man</strong>y SPORTS, in parTICular, SWIMming.</li>
          <li className="list-none">I enjoy many sports, and swimming is one of my favorites.</li>

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

          <li>GENERally, i LIKE to GO to BED EARly.</li>
          <li className="margin-bottom-20 list-none">Most of the time, I like to go to bed early.</li>

          <li>i <Link to="/vocabulary/Usually-1">Usually</Link> HAVE BREAKfast at 7 a.M.</li>
          <li className="list-none">I typically eat breakfast at 7 a.m.</li>

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

      <p className="text-indent-whole">Imagine a pizza with lots of different toppings, and you're pointing to the one you like best.</p>

        <ul className="list-square">

          <li>esPECially this ONE.</li>
          <li className="list-none">This one is especially important.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create various example sentences using the word "esPECially" in different contexts.</p>

        <ul className="list-square">

          <li>i enJOY TRAVeling, esPECially to exOTic PLAces.</li>
          <li className="list-none">I love traveling, especially to places that are different from where I live.</li>

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

            <li value="1">i LIKE to EAT VEGETables.</li>
            <li className="list-none margin-bottom-20">I like eating vegetables.</li>

            <li value="2">i LIKE to EAT VEGETables, esPECially BROCcoli.</li>
            <li className="list-none margin-bottom-20">I like eating vegetables. I really like broccoli.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence uses "esPECially" to <span className="highlight-255-padding-0-4">emphasize that,</span> of all the vegetables, <span className="highlight-255-padding-0-4">the speaker likes broccoli the most.</span></p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Emphasis: "esPECially" is used to emphasize a specific point.</li>

          <li className="margin-bottom-20">Comparison: It is often used to compare something to other things in the same group.</li>

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