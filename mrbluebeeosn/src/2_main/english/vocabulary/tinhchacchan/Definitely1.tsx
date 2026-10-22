import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function DEFinitely1(): React.JSX.Element {

  const postId = "DEFinitely1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-CERtainly"><mark className="highlight-tertiary-padding-4-8">CERtainly</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">DEFinitely
        <sup><Link to="/vocabulary/DEFinitely-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/DEFinitely-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's take a closer look at the word "DEFinitely."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                DEFinitely \<Link to="/pronunciation/5-vowel-system">DEF i̛ ni̛te ly</Link>\ /ˈdɛfɪnətli/ ⬤••• (FOUR SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Of course</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "DEFinitely" is used to assert something strongly, leaving no room for doubt. It conveys the speaker's certainty and determination.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">i will DEFinitely be THERE.</li>
          <li className="margin-bottom-20 list-none">I will be there for sure.</li>

          <li>THAT's DEFinitely <Link to="/vocabulary/NOT-1">NOT</Link> TRUE.</li>
          <li className="list-none">That isn't accurate.</li>

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

          <li id="ADjective">we NEED a DEFinite ANswer.</li>
          <li className="margin-bottom-20 list-none">We need to know exactly what the answer is.</li>

          <li id="NOUN">the defiNITion of "HAPpy" is DIFferent for <strong>ever</strong>yone.</li>
          <li className="list-none">Everyone has a different idea of what makes them happy.</li>

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

          <li><Link to="/vocabulary/CERtainly-1">CERtainly</Link>, i can HELP you.</li>
          <li className="margin-bottom-20 list-none">I can definitely help you.</li>

          <li>THAT's <Link to="/vocabulary/ABsolutely-1">ABsolutely</Link> RIGHT.</li>
          <li className="list-none">You're right.</li>

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

          <li><Link to="/vocabulary/POSsibly-1">POSsibly</Link>, it will RAIN toMORrow.</li>
          <li className="margin-bottom-20 list-none">There might be rain tomorrow.</li>

          <li><Link to="/vocabulary/MAYbe-1">MAYbe</Link> i'll GO to the PARTy.</li>
          <li className="list-none">I'm considering going to the party.</li>

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

      <p className="text-indent-whole">Imagine someone nodding firmly in response to a question.</p>

        <ul className="list-square">

          <li>he NODded DEFinitely in reSPONSE to the QUESTion.</li>
          <li className="list-none">He nodded his head to show he was agreeing with the question.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create example sentences for various situations: agreeing, refusing, and making decisions.</p>

        <ul className="list-square">

          <li>i DEFinitely WANT to GO to the CONcert.</li>
          <li className="list-none">I really want to attend the concert.</li>

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

            <li value="1">i MIGHT GO to the MOvies.</li>
            <li className="list-none margin-bottom-20">I may go see a movie.</li>

            <li value="2">i will DEFinitely GO to the MOvies.</li>
            <li className="list-none margin-bottom-20">I will absolutely go to the movies.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence uses "DEFinitely" to <span className="highlight-255-padding-0-4">express greater determination</span> - there is no longer any doubt about going to see the movie.</p>

        {/* <span className="highlight-255-padding-0-4"></span> */}

      </div>

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Highest degree of certainty: "DEFinitely" expresses the highest degree of certainty among the ADVERBS.</li>

          <li className="margin-bottom-20">No doubt: It rules out all other possibilities.</li>

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