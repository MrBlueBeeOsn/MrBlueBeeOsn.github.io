import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function STEADily1(): React.JSX.Element {

  const postId = "STEADily1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-PAtiently"><mark className="highlight-tertiary-padding-4-8">PAtiently</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">STEADily
        <sup><Link to="/vocabulary/STEADily-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/STEADily-2">&nbsp;2&nbsp;</Link>
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
            <HashLink smooth to="#VERB">VERB</HashLink>
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
      
      <p>Great! Let's explore the word "STEADily" together.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                STEADily \<Link to="/pronunciation/5-vowel-system">STEAD i̛ ly</Link>\ /ˈsted.ə.li/ ⬤•• (THREE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Consistently</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "STEADily" describes how an action, process, or state occurs continuously, without sudden changes or significant fluctuations, and often indicates stability and certainty.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">the RAIN FELL STEADily throughout the NIGHT.</li>
          <li className="margin-bottom-20 list-none">It kept raining all night.</li>

          <li>the COMpany's PROFits have been inCREAsing STEADily for the PAST YEAR.</li>
          <li className="margin-bottom-20 list-none">For the past year, the company's profits have been going up.</li>

          <li>he WALKED STEADily along the PATH.</li>
          <li className="list-none">He kept walking along the path.</li>

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

          <li id="ADjective">he has a STEADy JOB.</li>
          <li className="margin-bottom-20 list-none">He is working steadily.</li>
        
          <li id="VERB">STEADy yourSELF!</li>
          <li className="margin-bottom-20 list-none">Keep your cool!</li>

          <li id="NOUN">he adMIred her STEADiness <strong>un</strong>der PRESsure.</li>
          <li className="list-none">He admired her ability to stay calm and composed under pressure.</li>

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

          <li>he EXercises REGularly.</li>
          <li className="margin-bottom-20 list-none">He exercises on a regular basis.</li>

          <li>the NOISE was CONstantly IRritating.</li>
          <li className="margin-bottom-20 list-none">The loud noise was always bothering me.</li>

          <li>the WAter FLOWED conTINuously.</li>
          <li className="margin-bottom-20 list-none">The water didn't stop flowing.</li>

          <li>he HELD the RAILing FIRMly.</li>
          <li className="list-none">He grabbed the rail and held it tightly.</li>

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

          <li>he atTENDed irREGularly.</li>
          <li className="margin-bottom-20 list-none">He didn't come to work on a regular basis.</li>

          <li>the PRIces CHANGED unpreDICTably.</li>
          <li className="margin-bottom-20 list-none">The prices changed in a way that wasn't possible to predict.</li>

          <li>he beHAVED erRATically.</li>
          <li className="margin-bottom-20 list-none">He acted in a way that was not consistent with the situation.</li>

          <li>he WALKED unSTEADily <strong>af</strong>ter the INjury.</li>
          <li className="list-none">After the injury, he walked in an unstable way.</li>

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

      <p className="text-indent-whole">Imagine a steady flame, a line rising gradually on a graph, or a person walking with a steady stride.</p>

        <ul className="list-square">

          <li>The fire burned steadily.</li>
          <li className="margin-bottom-20 list-none">As the sun set, the fire continued to burn.</li>

          <li>the CHART TRENDed UPward STEADily.</li>
          <li className="margin-bottom-20 list-none">The chart showed a continuous upward trend.</li>

          <li>he WALKED STEADily with FIRM STEPS.</li>
          <li className="list-none">He walked steadily and with strong, confident steps.</li>

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

      <p className="text-indent-whole">Create sentences related to things you see happening on a regular basis.</p>

        <ul className="list-square">

          <li>the SUN ROSE STEADily in the EAST.</li>
          <li className="list-none">Sunrise in the east is getting closer.</li>

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

      <p className="text-indent-whole margin-bottom-20">Pay attention to the processes or actions that occur continuously and consistently around you, and try to use this word to describe them.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">the RAIN FELL throughout the NIGHT.</li>
            <li className="list-none margin-bottom-20">It rained all night.</li>

            <li value="2">the RAIN FELL STEADily throughout the NIGHT.</li>
            <li className="list-none margin-bottom-20">It rained on and on all night.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: It <span className="highlight-255-padding-0-4">emphasizes that the rain falls continuously</span> with little variation in intensity.</p>

      </div>

          <ol>

            <li>the COMpany's PROFits have been inCREAsing for the PAST YEAR.</li>
            <li className="list-none margin-bottom-20">The company has been making more and more money for the past year.</li>

            <li value="2">the COMpany's PROFits have been inCREAsing STEADily for the PAST YEAR.</li>
            <li className="list-none margin-bottom-20">The company has been making more and more money every day for the past year.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: <span className="highlight-255-padding-0-4">Indicates steady growth</span> and the absence of major fluctuations.</p>

      </div>

          <ol>

            <li>he WALKED along the PATH.</li>
            <li className="list-none margin-bottom-20">He strolled along the path.</li>

            <li value="2">he WALKED STEADily along the PATH.</li>
            <li className="list-none margin-bottom-20">He walked along the path without stopping.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: <span className="highlight-255-padding-0-4">His gait was steady and sure,</span> without any wavering.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Emphasizing continuity and the absence of sudden changes: "STEADily" typically conveys a positive connotation of stability and reliability.</li>

          <li className="margin-bottom-20">It can be applied to weather, finance, speed, progress, or any process that unfolds over time: This word describes a steady trend.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>April 28, 2025 · by 💎GEM ·</span>
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