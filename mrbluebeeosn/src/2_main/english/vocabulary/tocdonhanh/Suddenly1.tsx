import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SUDdenly1(): React.JSX.Element {

  const postId = "SUDdenly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-QUICKly"><mark className="highlight-tertiary-padding-4-8">QUICKly</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">SUDdenly
        <sup><Link to="/vocabulary/SUDdenly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/SUDdenly-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's explore the word "SUDdenly" together.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          {/* <p className="margin-bottom-20"><strong>SUDdenly</strong></p> */}

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                SUDdenly \<Link to="/pronunciation/5-vowel-system">SƯD de̛n ly</Link>\ /ˈsʌdənli/ ⬤•• (THREE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Suddenly</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "SUDdenly" is used to describe an event or action that happens quickly, without warning, and often comes as a surprise.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">SUDdenly, the LIGHTS wenT OUT.</li>
          <li className="margin-bottom-20 list-none">Out of the blue, the lights suddenly went off.</li>

          <li>she SUDdenly REalized she had LEFT her PHONE at HOME.</li>
          <li className="list-none">She realized that she had forgotten to take her phone with her when she left.</li>

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

          <li id="ADjective">a SUDden STORM CAUSED the POWer OUtage.</li>
          <li className="margin-bottom-20 list-none">The power went out because of a sudden storm.</li>

          <li id="NOUN">the SUDdenness of the ACcident SHOCKED <strong>ever</strong>yone.</li>
          <li className="list-none">Everyone was shocked by how fast the accident happened.</li>

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

          <li>the MUsic STOPPED aBRUPTly.</li>
          <li className="margin-bottom-20 list-none">The music stopped all of a sudden.</li>

          <li>i unexPECtedly RAN into an OLD FRIEND.</li>
          <li className="list-none">I ran into an old friend I didn't expect to see.</li>

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

          <li>the PLANT GREW GRADually TALler.</li>
          <li className="margin-bottom-20 list-none">The plant grew slowly at first, and then it started growing faster.</li>

          <li>as exPECted, it STARTed to RAIN.</li>
          <li className="list-none">It rained, just as we thought it would.</li>

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

      <p className="text-indent-whole">Imagine a ball suddenly falling from a great height.</p>

        <ul className="list-square">

          <li>the BALL SUDdenly FELL from the SKY.</li>
          <li className="list-none">The ball suddenly dropped from the sky.</li>

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

      <p className="text-indent-whole">Create sentences related to unexpected events in everyday life.</p>

        <ul className="list-square">

          <li>while i was WALking, i SUDdenly HEARD a LOUD NOISE.</li>
          <li className="list-none">As I was walking, I heard a very loud noise.</li>

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

      <p className="text-indent-whole margin-bottom-20">Use this word frequently in conversations or writing.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">the TRAIN arRIVED.</li>
            <li className="list-none margin-bottom-20">The train has arrived.</li>

            <li value="2">the TRAIN SUDdenly arRIVED.</li>
            <li className="list-none margin-bottom-20">The train showed up out of the blue.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence <span className="highlight-255-padding-0-4">emphasizes</span> that the ship's arrival was an<span className="highlight-255-padding-0-4">unexpected, unscheduled</span> event..</p>
     
      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>The element of surprise: "SUDdenly" emphasizes the unexpected, unpredictable nature of an event.</li>

          <li className="margin-bottom-20">Create suspense: This word is often used in stories to create a sense of suspense or surprise for the reader or listener.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

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