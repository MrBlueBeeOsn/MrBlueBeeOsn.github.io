import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function toDAY1(): React.JSX.Element {

  const postId = "toDAY1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-toDAY"><mark className="highlight-tertiary-padding-4-88">toDAY</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">toDAY
        <sup><Link to="/vocabulary/toDAY-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/toDAY-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                            
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#ADverb">ADverb</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#NOUN">NOUN</HashLink>
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
      
      <p>Great! Let's dive into an analysis of the word "toDAY."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                toDAY \<Link to="/pronunciation/5-vowel-system">tơ DĀY</Link>\ /təˈdeɪ/ •⬤ (TWO SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Today</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">toDAY: Refers only to the present moment—the day that the speaker or listener is currently experiencing.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">it's SUNny toDAY.</li>
          <li className="margin-bottom-20 list-none">The sun is shining today.</li>

          <li>i'm GOing to the MOvies toDAY.</li>
          <li className="list-none">Today, I'm going to go see a movie.</li>

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

          <li id="NOUN">toDAY is a BEAUtiful DAY.</li>
          <li className="margin-bottom-20 list-none">The weather is nice today.</li>

          <li id=""><strong>ever</strong>y DAY i GO to SCHOOL.</li>
          <li className="list-none">I go to school every day.</li>

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

          <li>i'm GOing to BED <Link to="/vocabulary/NOW-1">NOW</Link>.</li>
          <li className="margin-bottom-20 list-none">It's time for bed.</li>

          <li>at PRESent, i am WORKing on a NEW PROJect.</li>
          <li className="list-none">I'm currently working on a new project.</li>

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

          <li>i WENT to the PARK YESterday.</li>
          <li className="margin-bottom-20 list-none">I visited the park yesterday.</li>

          <li>i will GO to the BEACH <Link to="/vocabulary/toMORrow-1">toMORrow</Link>.</li>
          <li className="list-none">I'm going to the beach tomorrow.</li>

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

      <p className="text-indent-whole">Imagine a calendar with today marked.</p>

        <ul className="list-square">

          <li>i have a MEETing MARKed on my CALendar toDAY.</li>
          <li className="list-none">I have an upcoming meeting that is scheduled on today's calendar.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create several sentences using "toDAY" in different contexts.</p>

        <ul className="list-square">

          <li>i'm GOing to the MOvies toDAY.</li>
          <li className="list-none">I'm going to the cinema today.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Read and write a lot to remember vocabulary for longer.</p>

        <p className="text-indent-whole">Examples for comparison (the difference between "NOW" and "toDAY"):</p>

          <ol>

            <li value="1">i'm EATing <Link to="/vocabulary/NOW-1">NOW</Link>.</li>
            <li className="list-none">I'm eating right now.</li>
            <li className="list-none margin-bottom-20"><span className="highlight-255-padding-0-4">NOW: It shows the exact time</span> when something is said.</li>

            <li value="2">i'm BUSy toDAY.</li>
            <li className="list-none">I don't have time today.</li>
            <li className="list-none"><span className="highlight-255-padding-0-4">toDAY: It lasts for 24 hours,</span> from midnight to midnight.</li>

          </ol>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"toDAY" usually appears at the beginning or in the middle of a sentence.</li>

          <li className="margin-bottom-20">"toDAY" can be used to emphasize a contrast with the past or the future.</li>

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