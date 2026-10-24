import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function HIGHly1(): React.JSX.Element {

  const postId = "HIGHly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-SO"><mark className="highlight-tertiary-padding-4-8">SO</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">HIGHly
        <sup><Link to="/vocabulary/HIGHly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/HIGHly-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's take a closer look at the word "HIGHly."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                HIGHly \<Link to="/pronunciation/5-vowel-system">HĪGH ly</Link>\ /ˈhaɪli/ ⬤• (TWO SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Very high</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "HIGHly" is used to emphasize the high degree of a characteristic, quality, or the intensity of an action. It can indicate high regard, a high level of importance, or strong intensity.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">she is a HIGHly SKILLED muSICian.</li>
          <li className="margin-bottom-20 list-none">She has a lot of musical talent.</li>

          <li>the PROJect is HIGHly imPORTant to the COMpany.</li>
          <li className="list-none">The company considers this project to be very important.</li>

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

          <li id="ADjective">the MOUNtain is VERy HIGH.</li>
          <li className="list-none">The mountain is very tall.</li>

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

          <li>the FOOD was <Link to="/vocabulary/exTREMEly-1">exTREMEly</Link> SPIcy.</li>
          <li className="margin-bottom-20 list-none">The food had a lot of spice.</li>

          <li>he is <Link to="/vocabulary/VERy-1">VERy</Link> inTELligent.</li>
          <li className="list-none">He's very smart.</li>

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

          <li>she has a LOWly poSITion in the COMpany.</li>
          <li className="margin-bottom-20 list-none">She doesn't have an important position in the company.</li>

          <li>i am SLIGHTly HUNGry.</li>
          <li className="list-none">I'm a little hungry.</li>

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

      <p className="text-indent-whole">Imagine a towering mountain or a skyscraper.</p>

        <ul className="list-square">

          <li>the HIGHly TOWering MOUNtain PIERCED the CLOUDS.</li>
          <li className="margin-bottom-20 list-none">A mountain that was very tall was seen through the clouds.</li>

          <li>the HIGHly TALL SKYscraper DOMinated the SKYline.</li>
          <li className="list-none">The very tall skyscraper was the tallest thing in the skyline.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Form sentences that describe things to a high degree.</p>

        <ul className="list-square">

          <li>i HIGHly recomMEND this BOOK.</li>
          <li className="list-none">You should read this book.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Use this word frequently in your writing or conversations.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">the TASK is DIFficult.</li>
            <li className="list-none margin-bottom-20">The task is challenging.</li>

            <li value="2">the TASK is HIGHly DIFficult.</li>
            <li className="list-none margin-bottom-20">The task is really hard.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence <span className="highlight-255-padding-0-4">emphasizes the difficulty of the task,</span> indicating that it is harder than usual.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Degree: "HIGHly" is often used to emphasize a degree higher than normal.</li>

          <li className="margin-bottom-20">Evaluation: It can be subjective, reflecting the speaker's assessment.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 5, 2024 · by 💎GEM ·</span>
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