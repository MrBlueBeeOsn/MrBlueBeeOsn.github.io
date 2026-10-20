import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function RAPidly1(): React.JSX.Element {

  const postId = "RAPidly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-FAST"><mark className="highlight-tertiary-padding-4-8">FAST</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">RAPidly
        <sup><Link to="/vocabulary/RAPidly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/RAPidly-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's take a closer look at the word "RAPidly."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          {/* <p className="margin-bottom-20"><strong>Rapidly</strong></p> */}

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                RAPidly \<Link to="/pronunciation/5-vowel-system">RAP id ly</Link>\ /ˈræpɪdli/ ⬤•• (THREE SYLlables)
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

      <p className="margin-top-30 text-indent-whole">The word "RAPidly" is used to describe an action or process that occurs at a high speed, quickly. It emphasizes speed and changes that take place in a short period of time.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">techNOlogy is adVANCEing RAPidly.</li>
          <li className="margin-bottom-20 list-none">Technology is improving quickly.</li>

          <li>the CHILD GREW RAPidly during her FIRST YEAR.</li>
          <li className="list-none">The child grew quickly in the first year.</li>

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

          <li id="ADjective">the RIVer has a RAPid CURrent.</li>
          <li className="margin-bottom-20 list-none">The river has strong, fast-moving currents.</li>

          <li id="NOUN">the raPIDity of CHANGE surPRISED us.</li>
          <li className="list-none">We were surprised by how quickly things were changing.</li>

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

          <li>she RAN <Link to="/vocabulary/QUICKly-1">QUICKly</Link> to CATCH the BUS.</li>
          <li className="margin-bottom-20 list-none">She hurried to catch the bus.</li>

          <li>the BIRD FLEW SWIFTly through the AIR.</li>
          <li className="list-none">The bird moved quickly through the air.</li>

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

          <li>the SNAIL MOVED <Link to="/vocabulary/SLOWly-1">SLOWly</Link> a<strong>cross</strong> the LEAF.</li>
          <li className="margin-bottom-20 list-none">The snail moved at a slow pace across the leaf.</li>

          <li>the PLANT GREW <Link to="/vocabulary/GRADually-1">GRADually</Link> TALler.</li>
          <li className="list-none">The plant grew bigger little by little.</li>

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

      <p className="text-indent-whole">Imagine a race car traveling at high speed or a ball falling quickly toward the ground.</p>

        <ul className="list-square">

          <li>the RACE CAR MOVED RAPidly down the TRACK.</li>
          <li className="margin-bottom-20 list-none">The race car was going very fast down the track.</li>

          <li>the BALL FELL RAPidly to<strong>wards</strong> the GROUND.</li>
          <li className="list-none">The ball dropped quickly toward the ground.</li>

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

      <p className="text-indent-whole">Create sentences related to events that happen quickly.</p>

        <ul className="list-square">

          <li>the NEWS SPREAD RAPidly through<strong>out</strong> the TOWN.</li>
          <li className="list-none">The news spread quickly through the town.</li>

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

            <li value="1">the TRAIN is MOving.</li>
            <li className="list-none margin-bottom-20">The train's moving.</li>

            <li value="2">the TRAIN is MOving RAPidly.</li>
            <li className="list-none margin-bottom-20">The train is traveling at high speed.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence emphasizes the ship's <span className="highlight-255-padding-0-4">speed</span>.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Degree of speed: "RAPidly" typically indicates a higher degree of speed than "<Link to="/vocabulary/QUICKly-1">QUICKly</Link>".</li>

          <li className="margin-bottom-20">Context: The meaning of "RAPidly" can vary depending on the context of the sentence.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>deCEMber 5, 2024 · by 💎GEM ·</span>
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