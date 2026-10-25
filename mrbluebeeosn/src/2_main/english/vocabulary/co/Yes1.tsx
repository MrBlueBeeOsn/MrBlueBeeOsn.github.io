import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function YES1(): React.JSX.Element {

  const postId = "YES1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-YES"><mark className="highlight-tertiary-padding-4-8">YES</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">YES
        <sup><Link to="/vocabulary/YES-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/YES-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's take a closer look at the word "YES."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                YES \<Link to="/pronunciation/5-vowel-system">YES</Link>\ /jɛs/ ⬤ (ONE SYLlable)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Yes</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">YES is used to confirm information, agree with a request, or answer a question.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">are you COMing to the PARTy? - YES, i AM.</li>
          <li className="margin-bottom-20 list-none">Are you going to the party? Yes, I am.</li>

          <li>do you LIKE COFfee? - YES, i DO.</li>
          <li className="list-none">Hey, do you like coffee? Absolutely, I do.</li>

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

          <li className="list-none">There is no direct family word for "YES" because it is a single word and very basic.</li>

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

          <li>can i HELP you? - <Link to="/vocabulary/CERtainly-1">CERtainly</Link>.</li>
          <li className="margin-bottom-20 list-none">Can I help you out? Absolutely.</li>

          <li>is THAT TRUE? - <Link to="/vocabulary/ABsolutely-1">ABsolutely</Link>.</li>
          <li className="list-none">Is that actually the case? Totally.</li>

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

          <li>are you COMing to the PARTy? - <Link to="/vocabulary/NO-1">NO</Link>, i'm <Link to="/vocabulary/NOT-1">NOT</Link>.</li>
          <li className="margin-bottom-20 list-none">Hey, just wanted to check in and see if you're coming to the party? Nope, I'm not.</li>

          <li>are you GOing to QUIT your JOB? - <Link to="/vocabulary/DEFinitely-1">DEFinitely</Link> <Link to="/vocabulary/NOT-1">NOT</Link>.</li>
          <li className="list-none">Hey, just wondering if you're thinking about quitting your job? -	Absolutely not.</li>

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

      <p className="text-indent-whole">Imagine a nod to indicate agreement.</p>

        <ul className="list-square">

          <li>YES.</li>
          <li className="list-none">Indeed.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create several questions and answers that include "YES" in various situations.</p>

        <ul className="list-square">

          <li className="list-none">would you LIKE some COFfee?</li>
          <li className="margin-bottom-20 list-none">Would you like a cup of coffee?</li>

          <li>YES, PLEASE.</li>
          <li className="margin-bottom-20 list-none">Yes, please. That would be great!</li>

          <li><Link to="/vocabulary/ABsolutely-1">ABsolutely</Link>!</li>
          <li className="list-none">Definitely!</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Use "YES" frequently in everyday conversation.</p>

        <p className="text-indent-whole">Examples for comparison (the difference between "CERtainly" and "YES"):</p>

          <ol>

            <li value="1">can i BORrow your PEN? - <Link to="/vocabulary/CERtainly-1">CERtainly</Link>.</li>
            <li className="list-none">Can I borrow your pen? Absolutely.</li>
            <li className="list-none margin-bottom-20"><span className="highlight-255-padding-0-4">CERtainly: This is a strong answer</span> that shows you agree or are excited.</li>

            <li value="2">do you LIKE CHOCOLate? - YES.</li>
            <li className="list-none">Do you like chocolate? The answer is yes.</li>
            <li className="list-none"><span className="highlight-255-padding-0-4">YES: The answer is simple.</span></li>

          </ol>

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"YES" is often used on its own to answer a question.</li>

          <li className="margin-bottom-20">"YES" can also be used to emphasize agreement.</li>

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