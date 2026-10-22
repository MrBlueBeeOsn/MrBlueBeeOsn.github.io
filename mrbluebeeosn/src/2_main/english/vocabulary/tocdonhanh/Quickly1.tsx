import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function QUICKly1(): React.JSX.Element {

  const postId = "QUICKly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-QUICKly"><mark className="highlight-tertiary-padding-4-8">QUICKly</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">QUICKly
        <sup><Link to="/vocabulary/QUICKly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/QUICKly-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's take a closer look at the word "QUICKly."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          {/* <p className="margin-bottom-20"><strong>QUICKly</strong></p> */}

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                QUICKly \<Link to="/pronunciation/5-vowel-system">QUICK ly</Link>\ /ˈkwɪkli/ ⬤• (TWO SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Quickly</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "QUICKly" is used to describe an action performed in a short amount of time, quickly. It conveys a sense of urgency, speed, and efficiency in completing a task.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">she RAN QUICKly to CATCH the BUS.</li>
          <li className="margin-bottom-20 list-none">She hurried to catch the bus.</li>

          <li>PLEASE rePLY to the Email as QUICKly as POSsible.</li>
          <li className="list-none">Please reply to the email as soon as you can.</li>

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

          <li id="ADjective">he is a QUICK LEARNer.</li>
          <li className="margin-bottom-20 list-none">He learns new things easily.</li>

          <li id="NOUN">his QUICKness imPRESSED <strong>ever</strong>yone.</li>
          <li className="list-none">Everyone was impressed by how fast he was.</li>

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

          <li>the diSEASE SPREAD <Link to="/vocabulary/RAPidly-1">RAPidly</Link>.</li>
          <li className="margin-bottom-20 list-none">The disease is spreading quickly.</li>

          <li>the BIRD FLEW SWIFTly through the AIR.</li>
          <li className="list-none">The bird moved quickly through the sky.</li>

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

          <li>she WALKED <Link to="/vocabulary/SLOWly-1">SLOWly</Link> down the STREET.</li>
          <li className="margin-bottom-20 list-none">She strolled down the street at a leisurely pace.</li>

          <li>the PLANT GREW <Link to="/vocabulary/GRADually-1">GRADually</Link> TALLer.</li>
          <li className="list-none">The plant grew taller little by little.</li>

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
          <mark className="highlight-255-padding-4-8"><strong>1. Link</strong></mark> 
        </strong>
        <strong>&nbsp;to the image</strong>:
      </p>

      <p className="text-indent-whole">Imagine a rabbit running very fast.</p>

        <ul className="list-square">

          <li>the RABbit is RUNning VERy QUICKly.</li>
          <li className="list-none">The rabbit is moving at full speed.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create</strong></mark> 
        </strong>
        <strong>&nbsp;example sentences</strong>:
      </p>

      <p className="text-indent-whole">Create various example sentences using the word "QUICKly" in different contexts.</p>

        <ul className="list-square">

          <li>PLEASE reSPOND to my MESsage QUICKly.</li>
          <li className="list-none">Please respond to my message as quickly as possible.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
            <mark className="highlight-255-padding-4-8"><strong>3. Regular</strong></mark>
        </strong>
        <strong>&nbsp;practice</strong>:
      </p>

      <p className="text-indent-whole margin-bottom-20">Use this word regularly in conversations and writing.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">he FINished the TASK.</li>
            <li className="list-none margin-bottom-20">He completed the task.</li>

            <li value="2">he QUICKly FINished the TASK.</li>
            <li className="list-none margin-bottom-20">He completed the task quickly.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence uses "QUICKly" to <span className="highlight-255-padding-0-4">emphasize</span> that the task was <span className="highlight-255-padding-0-4">completed in a short amount of time.</span></p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Speed: "QUICKly" emphasizes the speed and swiftness of an action.</li>

          <li className="margin-bottom-20">Opposite of slow: It is often used to contrast with states of slowness or deliberateness.</li>

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