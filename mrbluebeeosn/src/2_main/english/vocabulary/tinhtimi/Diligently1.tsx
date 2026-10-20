import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function DILigently1(): React.JSX.Element {

  const postId = "DILigently1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-meTICulous"><mark className="highlight-tertiary-padding-4-8">ADverbs: meTICulous</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">DILigently
        <sup><Link to="/vocabulary/DILiGENTly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/DILiGENTly-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's explore the word "DILigently" together.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">
              
            <li>
              <span className="highlight-255-padding-3-6">
                DILigently \<Link to="/pronunciation/5-vowel-system">DIL i̛ ge̛nt ly</Link>\ /ˈdɪl.ə.dʒənt.li/ ⬤••• (FOUR SYLlables)
              </span>
            </li>
            
            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Meticulously</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>
      
      </div>

      <p className="margin-top-30 text-indent-whole">The word "DILigently" is used to describe an action performed with diligence, effort, and intense focus. It reflects a serious and effective work ethic.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">she DILigently STUDied for the eXAM.</li>
          <li className="margin-bottom-20 list-none">She hit the books hard in preparation for the exam.</li>

          <li>the WORKers DILigently rePAIRed the ROAD.</li>
          <li className="list-none">The workers toiled away to fix the road.</li>

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

          <li id="ADjective">he is a DILigent STUdent.</li>
          <li className="margin-bottom-20 list-none">He works hard to do well in school.</li>

          <li id="NOUN">her DILigence was reWARded.</li>
          <li className="list-none">Her hard work was recognized with a reward.</li>

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

          <li>the BEES inDUStriously GATHered POLlen.</li>
          <li className="margin-bottom-20 list-none">The bees collected pollen in a businesslike way.</li>

          <li>he asSIDuously WORKED on his PROject.</li>
          <li className="list-none">He put a lot of effort into his project.</li>

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

          <li>he <Link to="/vocabulary/LAzily-1">LAzily</Link> SAT on the COUCH.</li>
          <li className="margin-bottom-20 list-none">He sat on the couch without really paying attention.</li>

          <li>she CARElessly THREW her PApers on the FLOOR.</li>
          <li className="list-none">She threw her papers on the floor, not caring about them.</li>

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

      <p className="text-indent-whole">Imagine someone studying with a book and a pen, or a worker toiling away.</p>

        <ul className="list-square">

          <li>she is PUTting in a LOT of EFfort, STUDied DILigently for the eXAM.</li>
          <li className="list-none">She has been working hard to prepare for her exam.</li>

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

      <p className="text-indent-whole">Create sentences related to activities that require hard work.</p>

        <ul className="list-square">

          <li>she DILigently CLEANED the HOUSE.</li>
          <li className="list-none">She cleaned the house with great care.</li>

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

            <li value="1">he WORKED on the PROject.</li>
            <li className="list-none margin-bottom-20">He participated in the project.</li>

            <li value="2">he DILigently WORKED on the PROject for HOURS.</li>
            <li className="list-none margin-bottom-20">He toiled away at the project for hours.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence <span className="highlight-255-padding-0-4">emphasizes his hard work and effort</span> in completing the project.</p>

      </div>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Emphasizing effort: "DILigently" always emphasizes effort and dedication in completing a task.</li>

          <li className="margin-bottom-20">Used in a positive context: This word is often used in a positive context to describe commendable actions.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>deCEMber 26, 2024 · by 💎GEM ·</span>
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