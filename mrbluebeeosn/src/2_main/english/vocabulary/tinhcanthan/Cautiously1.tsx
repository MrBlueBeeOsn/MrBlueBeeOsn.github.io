import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function CAUtiously1(): React.JSX.Element {

  const postId = "CAUtiously1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-CAREfully"><mark className="highlight-tertiary-padding-4-8">CAREfully</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">CAUtiously
        <sup><Link to="/vocabulary/CAUtiously-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/CAUtiously-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's explore the word "CAUtiously" together.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                CAUtiously \<Link to="/pronunciation/5-vowel-system">CAU tiơus ly</Link>\ /ˈkɔː.ʃəs.li/ ⬤•• (THREE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>A cautious approach</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "CAUtiously" describes how an action is carried out or a situation is approached with caution, paying attention to potential dangers or problems. It conveys a sense of vigilance and careful consideration before acting.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">he CAUtiously apPROACHED the STRAY DOG.</li>
          <li className="margin-bottom-20 list-none">He slowly walked towards the stray dog.</li>

          <li>she CAUtiously Opened the DOOR, NOT KNOWing who was on the OTHer SIDE.</li>
          <li className="margin-bottom-20 list-none">She opened the door slowly because she didn't know who was on the other side.</li>

          <li>the COMpany is CAUtiously optiMIStic a<strong>bout</strong> the NEW PRODuct LAUNCH.</li>
          <li className="list-none">The company is hopeful but also a bit cautious about the upcoming product launch.</li>

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

          <li id="ADjective">be CAUtious when CROSsing the STREET.</li>
          <li className="margin-bottom-20 list-none">Watch out when you're going across the street.</li>

          <li>she is a CAUtious inVESTor.</li>
          <li className="margin-bottom-20 list-none">She is someone who is very careful with her money.</li>

          <li id="VERB">the poLICE CAUtioned him a<strong>bout</strong> his SPEED.</li>
          <li className="margin-bottom-20 list-none">The police told him he was driving too fast.</li>

          <li id="NOUN">EXercise CAUtion when HANDling CHEMicals.</li>
          <li className="list-none">Be careful when using chemicals.</li>

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

          <li>READ the inSTRUCtions <Link to="/vocabulary/CAREfully-1">CAREfully</Link>.</li>
          <li className="margin-bottom-20 list-none">Please take the time to read the instructions thoroughly.</li>

          <li>he inVESTed his MONey PRUdently.</li>
          <li className="margin-bottom-20 list-none">He was smart about investing his money.</li>

          <li>she EYED the STRANGer WARily.</li>
          <li className="margin-bottom-20 list-none">She looked at the stranger with suspicion.</li>

          <li>he SPOKE CIRcumspectly a<strong>bout</strong> the SENsitive ISsue.</li>
          <li className="list-none">He was careful when talking about the sensitive issue.</li>

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

          <li>he CARElessly BROKE the VASE.</li>
          <li className="margin-bottom-20 list-none">He broke the vase without caring.</li>

          <li>he DROVE RECKlessly through the CITy.</li>
          <li className="margin-bottom-20 list-none">He drove without paying attention in the city.</li>

          <li>he BOUGHT the DRESS imPULsively.</li>
          <li className="margin-bottom-20 list-none">He bought the dress without really thinking about it first.</li>

          <li>he ACTed RASHly.</li>
          <li className="list-none">He jumped in without thinking.</li>

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

      <p className="text-indent-whole">Imagine someone walking on thin ice, a cat stalking its prey, or someone slowly opening a mysterious package.</p>

        <ul className="list-square">

          <li>he WALKED CAUtiously on the THIN ICE.</li>
          <li className="margin-bottom-20 list-none">He was walking carefully, as if he knew the risks.</li>

          <li>the CAT MOVED CAUtiously as it STALKED its PREY.</li>
          <li className="margin-bottom-20 list-none">The cat moved carefully, stalking its prey.</li>

          <li>she Opened the STRANGE PACKage CAUtiously.</li>
          <li className="list-none">She checked out the odd package, not knowing what to expect.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create sentences related to situations where you think caution is needed.</p>

        <ul className="list-square">

          <li>apPROACH a WILD ANimal CAUtiously.</li>
          <li className="list-none">When you're dealing with a wild animal, you gotta be careful.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Pay attention to actions that require caution in your daily life, and try to use this word to describe them.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">he apPROACHED the DOG.</li>
            <li className="list-none margin-bottom-20">He went up to the dog.</li>

            <li value="2">he CAUtiously apPROACHED the STRAY DOG.</li>
            <li className="list-none">He slowly went up to the stray dog.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: <span className="highlight-255-padding-0-4">Emphasize caution</span> because the dog may be dangerous.</p>
      
      </div>

          <ol>

            <li className="margin-top-50">she Opened the DOOR.</li>
            <li className="list-none margin-bottom-20">She got the door open.</li>

            <li value="2">she CAUtiously Opened the DOOR, NOT KNOWing who was on the OTHer SIDE.</li>
            <li className="list-none">She opened the door slowly because she did not know who was on the other side.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

          <p className="margin-y-10">The difference: <span className="highlight-255-padding-0-4">To show caution in the face of an uncertain situation.</span></p>

      </div>

          <ol>

            <li className="margin-top-50">the COMpany is optiMIStic a<strong>bout</strong> the NEW PRODuct LAUNCH.</li>
            <li className="list-none margin-bottom-20">The company is hopeful about the upcoming product launch.</li>

            <li value="2">the COMpany is CAUtiously optiMIStic a<strong>bout</strong> the NEW PRODuct LAUNCH.</li>
            <li className="list-none">The company is hopeful about the new product launch, but is also careful.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: <span className="highlight-255-padding-0-4">Expressing optimism</span> while remaining aware of the potential risks.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"CAUtiously" typically refers to avoiding risks and ensuring safety.</li>

          <li>It conveys a sense of deliberation and careful consideration before acting.</li>

          <li className="margin-bottom-20">It should be distinguished from other synonyms based on the degree of suspicion or thoroughness (for example, "WARily" implies a higher degree of suspicion than "CAUtiously").</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>MAY 12, 2025 · by 💎GEM ·</span>
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