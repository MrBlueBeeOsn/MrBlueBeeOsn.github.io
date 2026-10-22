import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function CERtainly1(): React.JSX.Element {

  const postId = "CERtainly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-CERtainly"><mark className="highlight-tertiary-padding-4-8">CERtainly</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">CERtainly
        <sup><Link to="/vocabulary/CERtainly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/CERtainly-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's learn about the word "CERtainly" together.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                CERtainly \<Link to="/pronunciation/5-vowel-system">CÊR ta̛in ly</Link>\ /ˈsɜːrtnli/ ⬤•• (THREE SYLlables)
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

      <p className="margin-top-30 text-indent-whole">The word "CERtainly" is used to express strong agreement or to affirm that something is true or will happen. It can also be used to emphasize an opinion or a response.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">can you HELP me with THIS? CERtainly!</li>
          <li className="margin-bottom-20 list-none">Can you please help me with this? Absolutely!</li>

          <li>i will CERtainly be THERE on TIME.</li>
          <li className="list-none">I promise to arrive right on time.</li>

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

          <li id="ADjective">i am CERtain that he will WIN.</li>
          <li className="margin-bottom-20 list-none">I know he's going to win.</li>

          <li id="NOUN">there is NO CERtainty in LIFE.</li>
          <li className="list-none">Life is full of uncertainty.</li>

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

          <li>i will <Link to="/vocabulary/DEFinitely-1">DEFinitely</Link> GO to the PARTy.</li>
          <li className="margin-bottom-20 list-none">I will absolutely attend the party.</li>

          <li>i <Link to="/vocabulary/ABsolutely-1">ABsolutely</Link> aGREE with you.</li>
          <li className="list-none">I completely agree with you.</li>

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

          <li>he ANswered unCERtainly.</li>
          <li className="margin-bottom-20 list-none">He didn't give a definite answer.</li>

          <li>she LOOKED at me DOUBTfully.</li>
          <li className="list-none">She looked at me like she didn't believe me.</li>

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

          <li>when ASKED if he would atTEND the PARTy, he NODded CERtainly.</li>
          <li className="list-none">When asked if he would go to the party, he nodded yes.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Form sentences that express agreement or affirmation.</p>

        <ul className="list-square">

          <li>CERtainly, i will be THERE.</li>
          <li className=" margin-bottom-20 list-none">I definitely will be there.</li>

          <li>i will CERtainly be THERE to supPORT you.</li>
          <li className="list-none">I will absolutely be there to support you.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Use this word frequently in conversations or writing.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">i might GO to the MOvies.</li>
            <li className="list-none margin-bottom-20">I might go see a movie.</li>

            <li value="2">i will CERtainly GO to the MOvies.</li>
            <li className="list-none margin-bottom-20">I will definitely watch the movie.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence uses "CERtainly" to <span className="highlight-255-padding-0-4">express a more certain decision</span> than the first sentence.</p>

        {/* <span className="highlight-255-padding-0-4"></span> */}

      </div>

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Affirmation: "CERtainly" conveys a very strong sense of affirmation.</li>

          <li className="margin-bottom-20">Used in many contexts: This word can be used in a variety of communication situations.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 7, 2024· by 💎GEM ·</span>
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