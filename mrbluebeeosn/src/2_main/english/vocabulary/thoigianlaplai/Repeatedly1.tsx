import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function rePEATedly1(): React.JSX.Element {

  const postId = "rePEATedly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-OFten"><mark className="highlight-tertiary-padding-4-88">OFten</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">rePEATedly
        <sup><Link to="/vocabulary/rePEATedly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/rePEATedly-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's take a closer look at the word "rePEATedly."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                rePEATedly \<Link to="/pronunciation/5-vowel-system">re PĒAT ed ly</Link>\ /rɪˈpiːtɪdli/ •⬤•• (FOUR SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Continuously</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "rePEATedly" is used to describe an action performed many times, continuously. It emphasizes the frequency and repetition of an event.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">she rePEATedly ASKED him the SAME QUESTion.</li>
          <li className="margin-bottom-20 list-none">She kept asking him the same question over and over again.</li>

          <li>the exPERiment was rePEATedly conDUCTed to VERify the reSULTS.</li>
          <li className="list-none">The experiment was repeated many times to check the results.</li>

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

          <li id="ADjective">the rePEATed FAIlures disCOURaged him.</li>
          <li className="margin-bottom-20 list-none">His failures, which happened again and again, made him want to quit.</li>
          
          <li id="VERB">PLEASE rePEAT THAT.</li>
          <li className="margin-bottom-20 list-none">Would you please repeat that?</li>

          <li id="NOUN">the repeTITion of the SAME misTAKE is unacCEPTable.</li>
          <li className="margin-bottom-20 list-none">It's not okay to make the same mistake over and over again.</li>

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

          <li>he TRIED <Link to="/vocabulary/aGAIN-1">aGAIN</Link> and aGAIN.</li>
          <li className="margin-bottom-20 list-none">He tried over and over.</li>

          <li>she SAID it Over and Over.</li>
          <li className="list-none">She repeated it multiple times.</li>

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

          <li>i've Only DONE it ONCE.</li>
          <li className="margin-bottom-20 list-none">I've only done it one time.</li>

          <li>he <Link to="/vocabulary/RAREly-1">RAREly</Link> VISits us.</li>
          <li className="list-none">He doesn't come to see us very often.</li>

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

      <p className="text-indent-whole">Imagine a clock ticking or someone repeating an exercise over and over.</p>

        <ul className="list-square">

          <li>the CLOCK is TICKing STEADily and rePEATedly.</li>
          <li className="list-none">The clock is always ticking, over and over.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create sentences related to daily activities or routines.</p>

        <ul className="list-square">

          <li>she rePEATedly CHECKED her PHONE.</li>
          <li className="list-none">She kept looking at her phone over and over again.</li>

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

            <li value="1">he MADE a misTAKE.</li>
            <li className="list-none margin-bottom-20">He messed up.</li>

            <li value="2">he rePEATedly MADE the SAME misTAKE.</li>
            <li className="list-none margin-bottom-20">He kept making the same mistake.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence <span className="highlight-255-padding-0-4">emphasizes that he has made the same mistake many times,</span> suggesting a lack of care or an inability to learn from his mistakes.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Frequency: Emphasizes performing an action multiple times.</li>

          <li className="margin-bottom-20">Perseverance: May imply persistence or unceasing effort.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 7, 2024 · by 💎GEM ·</span>
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