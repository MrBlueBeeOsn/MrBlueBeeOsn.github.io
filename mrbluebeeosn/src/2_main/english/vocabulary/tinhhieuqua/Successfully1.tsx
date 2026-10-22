import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function sucCESSfully1(): React.JSX.Element {

  const postId = "sucCESSfully1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-efFECTively"><mark className="highlight-tertiary-padding-4-8">efFECTively</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">sucCESSfully
        <sup><Link to="/vocabulary/sucCESSfully-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/sucCESSfully-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's take a closer look at the word "sucCESSfully."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                sucCESSfully \<Link to="/pronunciation/5-vowel-system">sưc CESS fưl ly</Link>\ /səkˈsesfəli/ •⬤•• (FOUR SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Success</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "sucCESSfully" is used to describe an action, a task, or a goal that has been successfully completed, achieving the desired result. It conveys success, victory, or the achievement of a goal.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">she sucCESSfully PASSED the eXAM.</li>
          <li className="margin-bottom-20 list-none">She passed the examination.</li>

          <li>the PROBlem was comPLEted on TIME.</li>
          <li className="list-none">It was finished right on time.</li>

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

          <li id="ADjective">the PARTy was a sucCESSful eVENT.</li>
          <li className="margin-bottom-20 list-none">The party went well.</li>

          <li id="NOUN">his sucCESS was due to HARD WORK.</li>
          <li className="list-none">He achieved success by working hard.</li>

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

          <li>the TEAM triUMphantly WON the CHAMpionship.</li>
          <li className="margin-bottom-20 list-none">The team won first place in the competition, and they celebrated in triumph.</li>

          <li>the PROBlem was satisFACtorily reSOLVED.</li>
          <li className="list-none">The problem was easily solved.</li>

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

          <li>he unsucCESSfully TRIED to Open the DOOR.</li>
          <li className="margin-bottom-20 list-none">He tried to open the door, but he didn't succeed.</li>

          <li>the TASK was comPLEted unsatisFACtorily.</li>
          <li className="list-none">The task was not completed satisfactorily.</li>

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

      <p className="text-indent-whole">Imagine a person receiving an award or a team celebrating a victory.</p>

        <ul className="list-square">

          <li>she has sucCESSfully WON the aWARD.</li>
          <li className="list-none">The award was given to her.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create sentences related to successful situations.</p>

        <ul className="list-square">

          <li>she sucCESSfully deFENDed her THEsis.</li>
          <li className="list-none">Her argument was convincing and worked in her favor.</li>

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

            <li value="1">he TRIED to CLIMB the MOUNtain.</li>
            <li className="list-none margin-bottom-20">He attempted to climb the mountain.</li>

            <li value="2">he sucCESSfully CLIMBED the MOUNtain.</li>
            <li className="list-none margin-bottom-20">He climbed the mountain and did it without falling.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence <span className="highlight-255-padding-0-4">emphasizes that he achieved his goal.</span></p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Result: "sucCESSfully" always refers to a positive outcome.</li>

          <li className="margin-bottom-20">Context: The meaning of "sucCESSfully" can vary depending on the context of the sentence.</li>

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