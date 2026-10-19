import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function TRUly1(): React.JSX.Element {

  const postId = "TRUly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-verifiCAtion"><mark className="highlight-tertiary-padding-4-8">ADverbs: verifiCAtion</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">TRUly
        <sup><Link to="/vocabulary/TRUly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/TRUly-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's take a closer look at the word "TRUly."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                TRUly \<Link to="/pronunciation/5-vowel-system">TRÜ ly</Link>\ /ˈtruːli/ ⬤• (TWO SYLlables)
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

      <p className="margin-top-30 text-indent-whole">The word "TRUly" is used to emphasize the truth or authenticity of a piece of information, an emotion, or a situation. It conveys sincerity, frankness, and honesty.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">she is TRUly a TAlented ARtist.</li>
          <li className="margin-bottom-20 list-none">She has real artistic talent.</li>

          <li>i TRUly apPREciate your HELP.</li>
          <li className="list-none">I'm very grateful for your assistance.</li>

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

          <li id="ADjective">THAT is a TRUE STORy.</li>
          <li className="margin-bottom-20 list-none">That story is real!</li>

          <li id="NOUN">the TRUTH will SET you FREE.</li>
          <li className="list-none">The truth will make you feel free.</li>

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

          <li>i'm <Link to="/vocabulary/REally-1">REally</Link> TIred.</li>
          <li className="margin-bottom-20 list-none">To be honest, I'm pretty tired.</li>

          <li>inDEED, it was a BEAUtiful DAY.</li>
          <li className="list-none">It was a lovely day, in fact.</li>

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

          <li>he FALSEly acCUSED her of STEALing.</li>
          <li className="margin-bottom-20 list-none">He made a false accusation when he said she stole something.</li>

          <li>apPARently, he is LEAVing the COMpany.</li>
          <li className="list-none">It looks like he's leaving the company.</li>

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

      <p className="text-indent-whole">Imagine someone speaking honestly to you.</p>

        <ul className="list-square">

          <li>i'm TRUly HAPpy for you.</li>
          <li className="list-none">I'm so pleased for you!</li>

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

      <p className="text-indent-whole">Create your own example sentences using the word "TRUly" in various contexts.</p>

        <ul className="list-square">

          <li>TRUly, i apPREciate your KINDness.</li>
          <li className="list-none">I am truly thankful for your kindness.</li>

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

      <p className="text-indent-whole margin-bottom-20">Use this word frequently in conversations and writing to get used to how it’s used.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">i LIKE PIZza.</li>
            <li className="list-none margin-bottom-20">I enjoy pizza.</li>

            <li value="2">i TRUly LOVE PIZza.</li>
            <li className="list-none margin-bottom-20">I really like pizza.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence uses "TRUly" to convey a deeper emotion, <span className="highlight-255-padding-0-4">emphasizing</span> that the <span className="highlight-255-padding-0-4">love for pizza is immense</span>.</p>

        {/* <span className="highlight-255-padding-0-4"></span> */}

      </div>

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Emphasizing the truth: "TRUly" is often used to emphasize the authenticity of a piece of information or an emotion.</li>

          <li className="margin-bottom-20">Expressing sincerity: It also conveys the speaker’s sincerity and respect.</li>

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