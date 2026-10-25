import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function NOT1(): React.JSX.Element {

  const postId = "NOT1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-NO"><mark className="highlight-tertiary-padding-4-8">NO</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">NOT
        <sup><Link to="/vocabulary/NOT-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/NOT-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                            
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#ADverb">ADverb</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#PROnoun">PROnoun</HashLink>
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
      
      <p>Great! Let's dive into an analysis of the word "NOT" and related idioms.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                NOT \<Link to="/pronunciation/5-vowel-system">NOT</Link>\ /nɒt/ ⬤
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

      <p className="margin-top-30 text-indent-whole">NOT: Used to negate an action, quality, or event.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">i am NOT HUNgry.</li>
          <li className="margin-bottom-20 list-none">I don't want to eat.</li>

          <li>she is NOT a DOCtor.</li>
          <li className="list-none">She isn't a doctor, though.</li>

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

          <li id="PROnoun">there is NOTHing in the BOX.</li>
          <li className="margin-bottom-20 list-none">The box is empty.</li>

          <li>NObody was at HOME.</li>
          <li className="list-none">There was nobody at home.</li>

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

          <li><Link to="/vocabulary/NO-1">NO</Link>, i don't WANT to GO.</li>
          <li className="margin-bottom-20 list-none">I'm not going.</li>

          <li>i will <Link to="/vocabulary/NEVer-1">NEVer</Link> forGET you.</li>
          <li className="list-none">I'll always remember you.</li>

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

          <li><Link to="/vocabulary/YES-1">YES</Link>, i can SPEAK ENGlish.</li>
          <li className="margin-bottom-20 list-none">Yes, I am able to speak English.</li>

          <li>she <Link to="/vocabulary/ALways-1">ALways</Link> COMES to CLASS on TIME.</li>
          <li className="list-none">She is always there for class on time.</li>

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

      <p className="text-indent-whole">Imagine a "<Link to="/vocabulary/NO-1">NO</Link>" sign to indicate negation.</p>

        <ul className="list-square">

          <li>PLEASE do NOT TOUCH.</li>
          <li className="list-none">Don't touch it, please!</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Form several sentences using "NOT" in different contexts to negate actions and characteristics.</p>

        <ul className="list-square">

          <li>you should NOT SMOKE.</li>
          <li className="list-none">It is really bad idea to smoke!</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Use "NOT" frequently in everyday conversation.</p>

        <p className="text-indent-whole">Examples for comparison (the difference between NO and NOT):</p>

          <ol>

            <li value="1">do you WANT COFfee? - <Link to="/vocabulary/NO-1">NO</Link>, THANK you.</li>
            <li className="list-none">Fancy a coffee? Nah, cheers.</li>
            <li className="list-none margin-bottom-20"><span className="highlight-255-padding-0-4">NO: It is often used to answer a question</span> or give a short answer.</li>

            <li value="2">i am NOT GOing.</li>
            <li className="list-none">I won't be going.</li>
            <li className="list-none"><span className="highlight-255-padding-0-4">NOT: It is often used to negate a verb.</span></li>

          </ol>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"NOT" usually comes before the main verb in a sentence.</li>

          <li className="margin-bottom-20">It is a very important negative word in English.</li>

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