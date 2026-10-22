import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function ABsolutely1(): React.JSX.Element {

  const postId = "ABsolutely1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-CERtainly"><mark className="highlight-tertiary-padding-4-8">CERtainly</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">ABsolutely
        <sup><Link to="/vocabulary/ABsolutely-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/ABsolutely-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's take a closer look at the word "ABsolutely."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                ABsolutely \<Link to="/pronunciation/5-vowel-system">ab sơ LÜTE ly</Link>\ /ˈæb·səˌlut·li/ ⬤••• (FOUR SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Of course</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "ABsolutely" is used to strongly emphasize an opinion, a statement, or an answer, leaving no room for doubt. It is often used to express complete agreement or complete disagreement.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">i ABsolutely LOVE CHOCOLate.</li>
          <li className="margin-bottom-20 list-none">I absolutely adore chocolate.</li>

          <li>THAT's ABsolutely riDICulous!</li>
          <li className="list-none">That's completely ridiculous!</li>

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

          <li id="ADjective">THIS is an ABsolute diSASter.</li>
          <li className="margin-bottom-20 list-none">This is a huge disaster.</li>

          <li id="NOUN">he beLIEVED in ABsolutism in POLitics.</li>
          <li className="list-none">He strongly believed in the idea of absolute politics.</li>

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

          <li>i'm comPLETely exHAUSTed.</li>
          <li className="margin-bottom-20 list-none">I'm totally tired.</li>

          <li>THAT's TOtally unFAIR.</li>
          <li className="list-none">That is not fair at all.</li>

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

          <li>it's RELatively EAsy.</li>
          <li className="margin-bottom-20 list-none">It's not too hard.</li>

          <li>i aGREE with you PARtially.</li>
          <li className="list-none">I agree with you for some reasons and not for others.</li>

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

      <p className="text-indent-whole">Imagine someone nodding vigorously in agreement with a certain opinion.</p>

        <ul className="list-square">

          <li>she ABsolutely aGREED, NODding VIGorously.</li>
          <li className="list-none">She completely agreed, nodding her head a lot.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create your own example sentences using the word "ABsolutely" in various contexts.</p>

        <ul className="list-square">

          <li>do you WANT to GO to the MOvies toNIGHT? - ABsolutely! THAT SOUNDS like FUN.</li>
          <li className="list-none">Would you like to go to the movies tonight? - Absolutely! That sounds like fun!</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Use this word frequently in conversations and writing to get used to how it’s used.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">i LIKE APples.</li>
            <li className="list-none margin-bottom-20">I enjoy apples.</li>

            <li value="2">i ABsolutely aDORE APples.</li>
            <li className="list-none margin-bottom-20">I really, really like apples.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence uses "ABsolutely" to convey a stronger emotion, <span className="highlight-255-padding-0-4">emphasizing that the love for apples is immense.</span></p>

        {/* <span className="highlight-255-padding-0-4"></span> */}

      </div>

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Emphasis: "ABsolutely" is used to emphasize an opinion or emotion.</li>

          <li className="margin-bottom-20">Agreement or disagreement: It can be used to express complete agreement or complete disagreement.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 8, 2024 · by 💎GEM ·</span>
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