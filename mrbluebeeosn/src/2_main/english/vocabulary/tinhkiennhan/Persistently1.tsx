import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function perSISTently1(): React.JSX.Element {

  const postId = "perSISTently1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-PAtiently"><mark className="highlight-tertiary-padding-4-8">PAtiently</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">perSISTently
        <sup><Link to="/vocabulary/perSISTently-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/perSISTently-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's explore the word "perSISTently" together.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                perSISTently \<Link to="/pronunciation/5-vowel-system">pe̛r SIS te̛nt ly</Link>\ /pəˈsɪs.tənt.li/ •⬤•• (FOUR SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Perseverance</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "perSISTently" is used to describe an action carried out with determination, without giving up easily, even in the face of difficulties or obstacles. It reflects a person's resolve and perseverance.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">she perSISTently ASKED QUESTions un<strong>til</strong> she GOT an ANswer.</li>
          <li className="margin-bottom-20 list-none">She asked questions over and over until she got an answer.</li>

          <li>the RAIN FELL perSISTently throughout the NIGHT.</li>
          <li className="list-none">It rained on and off all night.</li>

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

          <li id="ADjective">she's a VERy perSIStent PERson.</li>
          <li className="margin-bottom-20 list-none">She doesn't give up easily.</li>
          
          <li id="VERB">de<strong>spite</strong> the DIFficulties, she perSISted in her STUDies.</li>
          <li className="margin-bottom-20 list-none">Even though she had problems, she did not stop studying.</li>

          <li id="NOUN">her perSIStence paiD OFF.</li>
          <li className="list-none">Her perseverance was worth it!</li>

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

          <li>the maCHINE RAN conTINuously for HOURS.</li>
          <li className="margin-bottom-20 list-none">The machine ran nonstop for hours.</li>

          <li>the BAby CRIED inCESsantly.</li>
          <li className="list-none">The baby was crying constantly.</li>

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

          <li>i <Link to="/vocabulary/ocCAsionally-1">ocCAsionally</Link> VISit my PARents.</li>
          <li className="margin-bottom-20 list-none">I visit my parents sometimes.</li>

          <li>the RAIN FELL spoRADically throughout the DAY.</li>
          <li className="list-none">It rained on and off all day.</li>

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

      <p className="text-indent-whole">Imagine someone trying to solve a difficult math problem or an athlete training relentlessly.</p>

        <ul className="list-square">

          <li>he is so FOcused, perSISTently WORKing on this eQUAtion.</li>
          <li className="list-none">He is so focused on this equation. He is working on it over and over again.</li>

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

      <p className="text-indent-whole">Create sentences related to persistent actions.</p>

        <ul className="list-square">

          <li>she perSISTently KNOCKED on the DOOR un<strong>til</strong> SOMEone ANswered.</li>
          <li className="list-none">She kept knocking on the door until someone opened it.</li>

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

      <p className="text-indent-whole margin-bottom-20">Use this word frequently in your writing or conversations.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">he TRIED to FIX the CAR.</li>
            <li className="list-none margin-bottom-20">He tried to repair the car.</li>

            <li value="2">he perSISTently TRIED to FIX the CAR for HOURS.</li>
            <li className="list-none margin-bottom-20">He tried to fix the car for hours without stopping.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence <span className="highlight-255-padding-0-4">emphasizes his unwavering perseverance</span>.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Can be positive or negative: "perSISTently" can have both a positive meaning (when describing persistence in achieving a goal) and a negative one (when describing annoyance or harassment).</li>

          <li className="margin-bottom-20">Used to emphasize persistence: This word is often used to emphasize the persistence and determination of a person or a process.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>deCEMber 27, 2024 · by 💎GEM ·</span>
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