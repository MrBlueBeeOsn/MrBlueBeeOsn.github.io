import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function FAITHfully1(): React.JSX.Element {

  const postId = "FAITHfully1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-sinCEREly"><mark className="highlight-tertiary-padding-4-8">sinCEREly</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">FAITHfully
        <sup><Link to="/vocabulary/FAITHfully-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/FAITHfully-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's take a closer look at the word "FAITHfully."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                FAITHfully \<Link to="/pronunciation/5-vowel-system">FĀITH fưl ly</Link>\ /ˈfeɪθfəli/ ⬤•• (THREE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>With confidence</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "FAITHfully" is used to describe an action performed faithfully, reliably, and trustworthily. It often refers to keeping one's word and carrying out a task with dedication and honesty.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">she FAITHfully SERVED her COMpany for <strong>man</strong>y YEARS.</li>
          <li className="margin-bottom-20 list-none">She worked for her company for many years and always did her best.</li>

          <li>he FOLlowed the inSTRUCtions FAITHfully.</li>
          <li className="list-none">He did exactly what the instructions told him to do.</li>

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

          <li id="ADjective">he is a FAITHful FRIEND.</li>
          <li className="margin-bottom-20 list-none">He is a true friend who always has your back.</li>

          <li id="NOUN">he has GREAT FAITH in his TEAM.</li>
          <li className="list-none">He believes in his team a lot.</li>

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

          <li>he SERVED his COUNtry LOYally.</li>
          <li className="margin-bottom-20 list-none">He was a good and faithful servant of his country.</li>

          <li>she deVOtedly CARED for her SICK MOTHer.</li>
          <li className="list-none">She truly cared about her sick mom.</li>

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

          <li>he beTRAYED his FRIENDS TREACHerously.</li>
          <li className="margin-bottom-20 list-none">He was a traitor to his friends.</li>

          <li>she ACTed unFAITHfully towards her HUSband.</li>
          <li className="list-none">She didn't act faithfully towards her husband.</li>

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

      <p className="text-indent-whole">Imagine a loyal dog by its owner's side.</p>

        <ul className="list-square">

          <li>the DOG FAITHfully FOLlowed its OWner.</li>
          <li className="list-none">The dog always followed its owner.</li>

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

      <p className="text-indent-whole">Form sentences describing actions that demonstrate loyalty.</p>

        <ul className="list-square">

          <li>she FAITHfully KEPT her PROMise.</li>
          <li className="list-none">She did what she said she would do.</li>

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

            <li value="1">he FINished the PROJect.</li>
            <li className="list-none margin-bottom-20">He completed the project.</li>

            <li value="2">he FAITHfully FINished the PROJect on TIME.</li>
            <li className="list-none margin-bottom-20">He finished the project on time, as promised.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence <span className="highlight-255-padding-0-4">emphasizes that he not only completed the project but also worked diligently</span> and met the deadline.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Loyalty: "FAITHfully" always emphasizes loyalty and reliability.</li>

          <li className="margin-bottom-20">Commonly used in positive contexts: It is often used to describe positive, commendable actions.</li>

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