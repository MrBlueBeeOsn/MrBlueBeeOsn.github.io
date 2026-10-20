import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function OBviously1(): React.JSX.Element {

  const postId = "OBviously1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-ro-rang"><mark className="highlight-tertiary-padding-4-8">ADverbs: rõ ràng</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">OBviously
        <sup><Link to="/vocabulary/OBviously-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/OBviously-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's explore the word "OBviously" together.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                OBviously \<Link to="/pronunciation/5-vowel-system">OB vi ơus ly</Link>\ /ˈɒbviəsli/ ⬤••• (FOUR SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Clearly</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "OBviously" is used to emphasize that something is very obvious, easy to understand, and requires no further explanation. It conveys certainty and clarity regarding a piece of information or an event.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">OBviously, the SUN RIses in the EAST.</li>
          <li className="margin-bottom-20 list-none">It's clear that the sunrise is in the east.</li>

          <li>she was OBviously upSET.</li>
          <li className="list-none">She was clearly unhappy.</li>

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

          <li id="ADjective">it's OBvious that he's LYing.</li>
          <li className="list-none">He obviously isn't being truthful.</li>

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

          <li><Link to="/vocabulary/CLEARly-1">CLEARly</Link>, you DON'T underSTAND.</li>
          <li className="margin-bottom-20 list-none">It's pretty clear you don't really get it.</li>

          <li><Link to="/vocabulary/EVidently-1">EVidently</Link>, she is the BEST CANdidate.</li>
          <li className="list-none">She is clearly the most qualified candidate.</li>

        </ul>

      {/* =============================
            ANtonyms:
      ============================= */}

      <p className="margin-top-20" id="ANtonyms">
        <mark className="highlight-238-padding-4-8">
          <strong>ANtonyms</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>he exPLAINED the PROBlem unCLEARly.</li>
          <li className="margin-bottom-20 list-none">He didn't explain the problem very clearly.</li>

          <li>iMAgine a TRAFfic SIGN deSIGNED CLEARly, NOT amBIGuously.</li>
          <li className="list-none">Picture a sign for traffic that's easy to understand.</li>

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

      <p className="text-indent-whole">Imagine a traffic sign with clear and easy-to-understand illustrations.</p>

        <ul className="list-square">

          <li>the TRAFfic SIGN with a RED CIRcle and a diAGonal LINE is OBviously a 'NO ENtry' SIGN.</li>
          <li className="list-none">The traffic sign with a red circle and a diagonal line is clearly a "no entry" sign.</li>

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

      <p className="text-indent-whole">Create various example sentences using the word "OBviously" in different situations.</p>

        <ul className="list-square">

          <li>OBviously, you NEED to STUdy HARDer if you WANT to PASS the eXAM.</li>
          <li className="list-none">If you want to pass the exam, you need to study harder.</li>

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

            <li value="1">he is TIred.</li>
            <li className="list-none margin-bottom-20">He's pretty tired.</li>

            <li value="2">OBviously, he is TIred. he has been WORKing all NIGHT.</li>
            <li className="list-none margin-bottom-20">It's clear that he's tired. He's been working all night.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence uses "OBviously" to <span className="highlight-255-padding-0-4">emphasize that it’s understandable</span> that he’s tired and that no further explanation is needed, since there’s a clear reason for it.</p>

      </div>

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Certainty: "OBviously" expresses the speaker's certainty about a particular piece of information.</li>

          <li className="margin-bottom-20">No explanation needed: It is often used to emphasize that something is too obvious to require an explanation.</li>

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