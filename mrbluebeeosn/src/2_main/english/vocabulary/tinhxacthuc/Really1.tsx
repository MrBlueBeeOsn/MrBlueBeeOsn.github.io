import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function REally1(): React.JSX.Element {

  const postId = "REally1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-xac-thuc"><mark className="highlight-tertiary-padding-4-8">ADverbs: xác thực</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">REally
        <sup><Link to="/vocabulary/REally-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/REally-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's explore the word "REally" together.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                REally \<Link to="/pronunciation/5-vowel-system">RĒA̛L ly</Link>\ /ˈriːəli/ ⬤• (TWO SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Actually</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "REally" has many uses, but it is primarily used to emphasize an opinion, a feeling, or a fact. It can express surprise, agreement, or simply make a statement sound stronger.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">that's REally INTEResting.</li>
          <li className="margin-bottom-20 list-none">That's very intriguing.</li>

          <li>i'm REally TIred.</li>
          <li className="margin-bottom-20 list-none">I am extremely tired.</li>

          <li>do you REally THINK so?</li>
          <li className="list-none">Do you really believe that's how you should think?</li>

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

          <li id="ADjective">is THIS a REAL DIamond?</li>
          <li className="list-none">Is this a real diamond, or not?</li>

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

          <li>i <Link to="/vocabulary/TRUly-1">TRUly</Link> apPREciate your HELP.</li>
          <li className="margin-bottom-20 list-none">Thank you for your help. I appreciate it.</li>

          <li>it's VERy COLD toDAY.</li>
          <li className="list-none">It's pretty chilly today.</li>

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

          <li>he FALSEly acCUSED her.</li>
          <li className="margin-bottom-20 list-none">He made accusations against her that were not true.</li>

          <li>i do NOT LIKE COFfee at ALL.</li>
          <li className="list-none">I'm just not a coffee person.</li>

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

      <p className="text-indent-whole">Imagine a look of surprise or a gesture of emphasis.</p>

        <ul className="list-square">

          <li>NO WAY! REally?</li>
          <li className="list-none">NO WAY! Is that really true?</li>

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

      <p className="text-indent-whole">Create sentences in various situations to better understand how to use "Really."</p>

        <ul className="list-square">

          <li>i'm REally exCITed a<strong>bout</strong> the TRIP.</li>
          <li className="list-none">I'm looking forward to the trip.</li>

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

      <p className="text-indent-whole margin-bottom-20">Use "REally" frequently in conversation to get used to the word.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">i LIKE PIZza.</li>
            <li className="list-none margin-bottom-20">I'm a fan of pizza.</li>

            <li value="2">i REally LIKE PIZza.</li>
            <li className="list-none margin-bottom-20">I'm a big fan of pizza.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence places greater <span className="highlight-255-padding-0-4">emphasis on the speaker's feelings toward pizza</span>.</p>

        {/* <span className="highlight-255-padding-0-4"></span> */}

      </div>

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Multiple meanings: "REally" can be used in many different contexts and can have different meanings depending on the context.</li>

          <li className="margin-bottom-20">Emphasis: Sometimes, "REally" is used to emphasize an emotion or opinion.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 2, 2024 · by 💎GEM ·</span>
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