import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SOMEtimes1(): React.JSX.Element {

  const postId = "SOMEtimes1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-SOMEtimes"><mark className="highlight-tertiary-padding-4-88">SOMEtimes</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">SOMEtimes
        <sup><Link to="/vocabulary/SOMEtimes-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/SOMEtimes-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                            
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#ADverb">ADverb</HashLink>
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
      
      <p>Great! Let's dive into an analysis of the word "SOMEtimes" and related idioms.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                SOMEtimes \<Link to="/pronunciation/5-vowel-system">SƠME tīmes</Link>\ /ˈsʌmtaɪmz/ ⬤• (TWO SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Sometimes</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">SOMEtimes: Refers to something that is infrequent and occurs randomly.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">i SOMEtimes GO to the GYM <strong>af</strong>ter WORK.</li>
          <li className="margin-bottom-20 list-none">Sometimes I go work out after I finish work.</li>

          <li>it SOMEtimes RAINS in the SUMmer.</li>
          <li className="list-none">It sometimes rains during the summer months.</li>

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

          <li className="list-none">There is no direct family for "SOMEtimes" because it is a single word.</li>

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

          <li>we <Link to="/vocabulary/ocCAsionally-1">ocCAsionall</Link> MEET for COFfee.</li>
          <li className="margin-bottom-20 list-none">We sometimes meet for a cup of coffee.</li>

          <li>from TIME to TIME, i LIKE to WATCH MOvies.</li>
          <li className="list-none">Every so often, I like watching movies.</li>

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

          <li>she <Link to="/vocabulary/ALways-1">ALways</Link> COMES to CLASS on TIME.</li>
          <li className="margin-bottom-20 list-none">She's always there when class starts.</li>

          <li>I have <Link to="/vocabulary/NEVer-1">NEVer</Link> BEEN to PARis.</li>
          <li className="list-none">I have never visited Paris.</li>

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

      <p className="text-indent-whole">Imagine a clock with a second hand that spins continuously to represent irregularity.</p>

        <ul className="list-square">

          <li>the WATCH is RUNning erRATically; the SECond HAND SOMEtimes JUMPS.</li>
          <li className="list-none">The watch is running slowly and erratically. Sometimes the second hand jumps.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create several sentences using "SOMEtimes" in different contexts related to frequency.</p>

        <ul className="list-square">

          <li>i FEEL HAPpy SOMEtimes, but OTHer TIMES i FEEL SAD.</li>
          <li className="list-none">Sometimes I feel happy, and sometimes I feel sad.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Use the word "SOMEtimes" frequently in conversation or in writing.</p>

        <p className="text-indent-whole">Examples for comparison (the difference between "occasionally" and "sometimes"):</p>

          <ol>

            <li value="1">we <Link to="/vocabulary/ocCAsionally-1">ocCAsionally</Link> MEET for LUNCH.</li>
            <li className="list-none">We sometimes meet for lunch together.</li>
            <li className="list-none margin-bottom-20">ocCAsionally: <span className="highlight-255-padding-0-4">Conveys a more polite tone</span> and emphasizes the random nature of the occurrence.</li>

            <li value="2">i SOMEtimes forGET to BRING my umBRELla.</li>
            <li className="list-none">Sometimes I forget to bring my umbrella.</li>
            <li className="list-none"><span className="highlight-255-padding-0-4">SOMEtimes: Conveys a general sense of infrequency.</span></li>

          </ol>

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"SOMEtimes" usually comes before the main verb in a sentence.</li>

          <li className="margin-bottom-20">It can be used to express uncertainty or a change in frequency.</li>

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