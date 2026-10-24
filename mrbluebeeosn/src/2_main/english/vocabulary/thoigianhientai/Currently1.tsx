import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function CURrently1(): React.JSX.Element {

  const postId = "CURrently1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-toDAY"><mark className="highlight-tertiary-padding-4-88">toDAY</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">CURrently
        <sup><Link to="/vocabulary/CURrently-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/CURrently-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's explore the word "CURrently" together.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                CURrently \<Link to="/pronunciation/5-vowel-system">CƯR re̛nt ly</Link>\ /ˈkʌrəntli/ ⬤•• (THREE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Currently</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "CURrently" is used to refer to an action, state, or event that is taking place at the moment of speaking. It emphasizes the temporary nature of a situation.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">i am CURrently WORKing on a NEW PROJect.</li>
          <li className="margin-bottom-20 list-none">I have a new project that I'm working on.</li>

          <li>she is CURrently LIVing in PARis.</li>
          <li className="list-none">At this time, she is living in Paris.</li>

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

          <li id="ADjective">the CURrent situAtion is VERy COMplex.</li>
          <li className="margin-bottom-20 list-none">Things are very complicated right now.</li>

          <li id="NOUN">there is a GROWing CURrency of susPICion reGARDing the NEW POLicy.</li>
          <li className="margin-bottom-20 list-none">People are starting to question the new policy.</li>

          <li>the DOLlar is the CURrency of the uNIted STATES.</li>
          <li className="list-none">The U.S. dollar is the country's official currency.</li>

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

          <li>i am WORKing <Link to="/vocabulary/NOW-1">NOW</Link>.</li>
          <li className="margin-bottom-20 list-none">I'm at work right now.</li>

          <li>at PRESent, we are FAcing <strong>man</strong>y CHALlenges.</li>
          <li className="list-none">Right now, we are dealing with a lot of problems.</li>

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

          <li>she FORmerly WORKED as a TEACHer.</li>
          <li className="margin-bottom-20 list-none">She used to be a teacher</li>

          <li>she had PREviously VISited this PLACE.</li>
          <li className="list-none">She had already gone to this place.</li>

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

      <p className="text-indent-whole">Imagine a timeline with a marker labeled "now."</p>

        <ul className="list-square">

          <li>i am CURrently STUDying ENGlish GRAMmar Using a TIMEline METHod.</li>
          <li className="list-none">I'm learning English grammar using a method that organizes information on a timeline.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Form sentences about what you're doing or what's happening around you.</p>

        <ul className="list-square">

          <li>i am CURrently READing a BOOK a<strong>bout</strong> HISTORy.</li>
          <li className="list-none">Right now I'm reading a book that talks about history.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Use this word regularly in conversations or in writing.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">she WORKED as a TEACHer for TEN YEARS.</li>
            <li className="list-none margin-bottom-20">She worked as a teacher for a decade.</li>

            <li value="2">she is CURrently WORKing on a NEW reSEARCH PROJect.</li>
            <li className="list-none margin-bottom-20">She is currently working on a new project, which is a research study.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The first sentence describes a task that was completed in the past, while the second sentence <span className="highlight-255-padding-0-4">emphasizes that she is currently involved in an ongoing research project.</span></p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Temporariness: "CURrently" emphasizes the temporary nature of a situation.</li>

          <li className="margin-bottom-20">It is often used with ⏱️ the Present Continuous Tense to describe an action that is currently taking place.</li>

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