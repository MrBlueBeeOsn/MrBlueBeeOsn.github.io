import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function toMORrow1(): React.JSX.Element {

  const postId = "toMORrow1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-toMORrow"><mark className="highlight-tertiary-padding-4-88">toMORrow</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">toMORrow
        <sup><Link to="/vocabulary/toMORrow-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/toMORrow-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's dive into an analysis of the word "toMORrow."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                toMORrow \<Link to="/pronunciation/5-vowel-system">tơ MOR rōw</Link>\ /təˈmɔː.roʊ/ •⬤• (THREE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Tomorrow</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">toMORrow: Refers to the time 24 hours after the present, or the day following today.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">i will GO to the BEACH toMORrow.</li>
          <li className="margin-bottom-20 list-none">I'm planning on heading to the beach tomorrow.</li>

          <li>it will be SUNny toMORrow.</li>
          <li className="list-none">The forecast says the sky is going to clear up tomorrow.</li>

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

          <li id="NOUN">toMORrow is my BIRTHday.</li>
          <li className="margin-bottom-20 list-none">Tomorrow's my birthday.</li>

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

          <li>i'm GOing on a TRIP the DAY <strong>af</strong>ter toMORrow.</li>
          <li className="margin-bottom-20 list-none">I'm traveling the day after tomorrow, on Thursday.</li>

          <li>the NEXT DAY, she WENT to SCHOOL.</li>
          <li className="list-none">The next day, she went to school.</li>

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

          <li>it is SUNny <Link to="/vocabulary/toDAY-1">toDAY</Link>.</li>
          <li className="list-none">Today is a nice, sunny day.</li>

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

      <p className="text-indent-whole">Imagine a calendar with tomorrow marked.</p>

        <ul className="list-square">

          <li>i will SEND you the FInal rePORT toMORrow.</li>
          <li className="list-none">Tomorrow, I'll send you the final report.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create several sentences using "toMORrow" in different contexts.</p>

        <ul className="list-square">

          <li>let's MEET at the caFE toMORrow at 2 p.M.</li>
          <li className="list-none">Let's meet at the café to watch the sunset at 2:00 p.m.</li>

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

        <p className="text-indent-whole">Example for comparison (the difference between "the DAY after toMORrow" and "toMORrow"):</p>

          <ol>

            <li value="1">i have a TEST the DAY <strong>af</strong>ter toMORrow.</li>
            <li className="list-none margin-bottom-20">There's a test scheduled for me the day after tomorrow.</li>

            <li value="2">i will MEET her toMORrow.</li>
            <li className="list-none">I'm going to meet her tomorrow.</li>

          </ol>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"toMORrow" usually appears at the beginning or in the middle of a sentence.</li>

          <li className="margin-bottom-20">"toMORrow" can be used to emphasize a contrast with the past or the present.</li>

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