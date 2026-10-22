import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function PAtiently1(): React.JSX.Element {

  const postId = "PAtiently1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-PAtiently"><mark className="highlight-tertiary-padding-4-8">PAtiently</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">PAtiently
        <sup><Link to="/vocabulary/PAtiently-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/PAtiently-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's explore the word "patiently" together.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                PAtiently \<Link to="/pronunciation/5-vowel-system">PĀ tie̛nt ly</Link>\ /ˈpeɪ.ʃənt.li/ ⬤•• (THREE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Patience</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "Patiently" describes an action or state carried out with patience-without haste, and without becoming easily irritable or annoyed.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">he WAITed PAtiently for his TURN.</li>
          <li className="margin-bottom-20 list-none">He waited patiently to be called on.</li>

          <li>she PAtiently LIStened to his STORy.</li>
          <li className="list-none">She listened to his story calmly.</li>

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

          <li id="ADjective">he is a PAtient TEACHer.</li>
          <li className="margin-bottom-20 list-none">He works in patient education.</li>

          <li id="NOUN">the DOCtor TREAted the PAtient with CARE.</li>
          <li className="margin-bottom-20 list-none">The doctor was kind and careful with the patient.</li>

          <li>he has a LOT of PAtience.</li>
          <li className="list-none">He is very patient.</li>

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

          <li>he CALMly exPLAINED the situAtion.</li>
          <li className="margin-bottom-20 list-none">He calmly explained what was going on.</li>

          <li>he LIStened to their comPLAINTS TOLerantly.</li>
          <li className="margin-bottom-20 list-none">He paid attention to their complaints, but didn't seem very worried or concerned by them.</li>

          <li>she enDURed the PAIN enDURingly.</li>
          <li className="list-none">She continued to feel the pain.</li>

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

          <li>he WAITed imPAtiently for the BUS.</li>
          <li className="margin-bottom-20 list-none">He was waiting for the bus, but he was getting a little impatient.</li>

          <li>she SIGHED FRUSTratedly.</li>
          <li className="margin-bottom-20 list-none">She let out a sigh and looked annoyed.</li>

          <li>he PACED AGitatedly a<strong>round</strong> the ROOM.</li>
          <li className="list-none">He walked around the room, feeling nervous and upset.</li>

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

      <p className="text-indent-whole">Imagine someone waiting calmly or someone listening intently.</p>

        <ul className="list-square">

          <li>he WAITed PAtiently for his TURN.</li>
          <li className="margin-bottom-20 list-none">He waited without moving for his chance to participate.</li>

          <li>she PAtiently LIStened to the LONG explaNAtion.</li>
          <li className="list-none">She listened to the long explanation without interrupting.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create sentences related to situations that demonstrate patience and perseverance.</p>

        <ul className="list-square">

          <li>the TEAcher exPLAINED the LESson PAtiently to the STUdents.</li>
          <li className="list-none">The teacher took time to thoroughly explain the lesson to the students.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Use this word frequently in your writing or conversations.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">he WAITed for his TURN.</li>
            <li className="list-none margin-bottom-20">He waited for his chance to participate.</li>

            <li value="2">he WAITed PAtiently for his TURN.</li>
            <li className="list-none margin-bottom-20">He waited calmly and patiently for his turn.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence <span className="highlight-255-padding-0-4">emphasizes his patience and perseverance</span> while waiting.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Emphasizing patience and forbearance: "Patiently" emphasizes patience, forbearance, and the absence of haste or irritation.</li>

          <li className="margin-bottom-20">Often used to describe the act of waiting or listening: This word is often used to describe the act of waiting or listening patiently.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>April 5, 2025 · by 💎GEM ·</span>
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