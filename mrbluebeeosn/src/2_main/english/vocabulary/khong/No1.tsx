import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function NO1(): React.JSX.Element {

  const postId = "NO1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-NO"><mark className="highlight-tertiary-padding-4-8">NO</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">NO
        <sup><Link to="/vocabulary/NO-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/NO-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's dive into an analysis of the word "NO."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                NO \<Link to="/pronunciation/5-vowel-system">NŌ</Link>\ /noʊ/ ⬤ (ONE SYLlable)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>No</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">NO: Often used as a standalone word to answer a question or refuse a request. Used to deny a statement, request, or question..</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">are you COMing to the PARTy? - NO, i'm <Link to="/vocabulary/NOT-1">NOT</Link>.</li>
          <li className="margin-bottom-20 list-none">Are you going to the party? No, I'm not.</li>

          <li>do you LIKE COFfee? - NO, i preFER TEA.</li>
          <li className="list-none">Do you like coffee? I would rather have tea.</li>

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

          <li className="list-none">There is no direct family word for "NO" because it is a single word and very basic.</li>

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

          <li>i am <Link to="/vocabulary/NOT-1">NOT</Link> GOing.</li>
          <li className="margin-bottom-20 list-none">I'm not attending.</li>

          <li>i will <Link to="/vocabulary/NEVer-1">NEVer</Link> forGET you.</li>
          <li className="list-none">I will always remember you.</li>

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

          <li>are you HUNgry? - <Link to="/vocabulary/YES-1">YES</Link>, i am.</li>
          <li className="margin-bottom-20 list-none">Do you want something to eat? Yes, I am.</li>

          <li>can i HELP you? - <Link to="/vocabulary/CERtainly-1">CERtainly</Link>.</li>
          <li className="list-none">Can I help you out? Absolutely.</li>

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

      <p className="text-indent-whole">Imagine a "No" sign to help you remember the meaning of this word.</p>

        <ul className="list-square">

          <li>NO! (Used when you want to forbid a certain action without specifying it.)</li>
          <li className="list-none">Nope!</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create several questions and answers that include "NO" in various situations.</p>

        <ul className="list-square">
          
          <li>would you LIKE some COFfee?</li>
          <li className=" margin-bottom-20 list-none">Would you like something to drink? I've got coffee.</li>

          <li>YES, PLEASE.</li>
          <li className=" margin-bottom-20 list-none">Absolutely.</li>

          <li>NO, THANK you. i'm NOT THIRsty.</li>
          <li className="list-none">I appreciate the offer, but I don't need it.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Use "NO" frequently in everyday communication.</p>

        <p className="text-indent-whole">Examples for comparison (the difference between "NOT" and "NO"):</p>

          <ol>

            <li value="1">i do <Link to="/vocabulary/NOT-1">NOT</Link> WANT any MILK.</li>
            <li className="list-none">I'd like to request that you don't include any milk.</li>
            <li className="list-none margin-bottom-20"><span className="highlight-255-padding-0-4">Used to form a full negative sentence.</span></li>

            <li value="2">do you WANT some MILK? - NO.</li>
            <li className="list-none">Would you like some milk? NO.</li>
            <li className="list-none"><span className="highlight-255-padding-0-4">It is often used as a brief response.</span></li>

          </ol>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"NO" can stand alone to answer a question or be placed at the beginning of a sentence to negate a clause.</li>

          <li className="margin-bottom-20">"NO" can also be used to form negative sentences with the verb "to be" (am, is, are, was, were).</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>deCEMber 28, 2024 · by 💎GEM ·</span>
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