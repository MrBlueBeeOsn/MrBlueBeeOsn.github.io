import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function ACtually1(): React.JSX.Element {

  const postId = "ACtually1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-verifiCAtion"><mark className="highlight-tertiary-padding-4-8">ADverbs: verifiCAtion</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">ACtually
        <sup><Link to="/vocabulary/ACtually-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/ACtually-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's take a closer look at the word "ACtually."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                ACtually \<Link to="/pronunciation/5-vowel-system">AC tưa̛l ly</Link>\ /ˈæk.tʃəl.i/ ⬤•• (THREE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Actually,</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "ACtually" is used to emphasize a fact or piece of information, usually to correct or add to something that was previously stated. It can also be used to introduce new or unexpected information.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">i THOUGHT she was a DOCtor, but ACtually, she's a NURSE.</li>
          <li className="margin-bottom-20 list-none">I thought she was a doctor, but I was wrong. She's actually a nurse.</li>

          <li>i'm GOing to the LIbrary toDAY. - ACtually, i'm GOing to the GYM.</li>
          <li className="list-none">I'm heading to the library today. I'm actually heading to the gym.</li>

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

          <li id="ADjective">the ACtual COST of the PROject was HIGHer than exPECTed.</li>
          <li className="margin-bottom-20 list-none">The project cost more than we thought it would.</li>

          <li id="NOUN">the actuALity of the situAtion is MUCH WORSE than i THOUGHT.</li>
          <li className="list-none">The situation is a lot worse than I realized.</li>

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

          <li>in FACT, i do NOT KNOW the ANswer.</li>
          <li className="margin-bottom-20 list-none">To be honest, I'm not really sure about the answer.</li>

          <li>as a MATter of FACT, i've alREDy SEEN that MOvie.</li>
          <li className="list-none">as a MATter of FACT, i've alREDy SEEN that MOvie.</li>

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

          <li>theoRETically, it's POSsible, but NOT VERy LIKEly.</li>
          <li className="margin-bottom-20 list-none">In theory, it's possible, but it's not very likely.</li>

          <li>hypoTHETically, if i WON the LOTtery, i would TRAvel aROUND the WORLD.</li>
          <li className="list-none">I was just wondering: if I won the lottery, I'd probably go traveling around the world.</li>

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

      <p className="text-indent-whole">Imagine someone correcting a mistake in a statement.</p>

        <ul className="list-square">

          <li>i THOUGHT the CAPital of ausTRAlia was SYDney, but ACtually, it's CANberra.</li>
          <li className="list-none">I thought the capital of Australia was Sydney. I was wrong. The capital is actually Canberra.</li>

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

      <p className="text-indent-whole">Create your own example sentences using the word "Actually" in various contexts.</p>

        <ul className="list-square">

          <li>do you LIKE COFfee? - WELL, ACtually, i preFER TEA.</li>
          <li className="list-none">Do you like coffee? To be honest, I like tea better.</li>

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

      <p className="text-indent-whole margin-bottom-20">Use this word frequently in conversations and writing to get used to how it’s used.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">i THINK i'll have the PIZza.</li>
            <li className="list-none margin-bottom-20">I'm thinking about having pizza.</li>

            <li value="2">ACtually, i'm FEELing KIND of HUNgry, so i'll have the BURger.</li>
            <li className="list-none margin-bottom-20">I'm actually hungry, so I'll have a burger.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence uses "Actually" <span className="highlight-255-padding-0-4">to change the original decision and offer an alternative</span>.</p>

        {/* <span className="highlight-255-padding-0-4"></span> */}

      </div>

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Correcting information: "ACtually" is often used to correct incorrect or inaccurate information.</li>

          <li>Adding information: It can also be used to provide additional details.</li>

          <li className="margin-bottom-20">Emphasizing: "ACtually" helps emphasize a fact or a point of view.</li>

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