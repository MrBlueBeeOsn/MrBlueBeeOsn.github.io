import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function ALways1(): React.JSX.Element {

  const postId = "ALways1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-YES"><mark className="highlight-tertiary-padding-4-8">YES</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">ALways
        <sup><Link to="/vocabulary/ALways-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/ALways-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's take a closer look at the word "ALways" and some related idioms.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                ALways \<Link to="/pronunciation/5-vowel-system">AL wāys</Link>\ /ˈɔːl.weɪz/ ⬤• (TWO SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Always</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">ALways: This is a description of something that happens all the time and stays the same no matter what.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">she ALways arRIVES on TIME.</li>
          <li className="margin-bottom-20 list-none">She is always punctual.</li>

          <li>my MOTHer ALways COOKS BREAKfast for us.</li>
          <li className="list-none">My mom is always the one who makes breakfast for us.</li>

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

          <li className="list-none">There is no direct family for "ALways."</li>

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

          <li>he is CONstantly comPLAINing.</li>
          <li className="margin-bottom-20 list-none">He is always making a fuss.</li>

          <li>she is perPETually LATE.</li>
          <li className="list-none">She always arrives late.</li>

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

          <li>i have <Link to="/vocabulary/NEVer-1">NEVer</Link> been to PARis.</li>
          <li className="margin-bottom-20 list-none">Paris is a place I've never been to.</li>

          <li>she <Link to="/vocabulary/SELdom-1">SELdom</Link> GOES to the CINema.</li>
          <li className="list-none">She doesn't often go to the movies.</li>

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

      <p className="text-indent-whole">Imagine a clock that always tells the correct time.</p>

        <ul className="list-square">

          <li>this CLOCK is ALways on TIME.</li>
          <li className="list-none">This clock always tells the right time.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create several sentences using "Always" in different contexts, relating to habits, characteristics, and obvious facts.</p>

        <ul className="list-square">

          <li>he ALways <strong>get</strong>S UP at 6 a.M.</li>
          <li className="list-none">He gets up at six in the morning.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Frequently use the word "ALways" in speech or writing.</p>

        <p className="text-indent-whole">Examples for comparison (the difference between "constantly" and "always"):</p>

          <ol>

            <li value="1">she is CONstantly TALKing on the PHONE.</li>
            <li className="list-none">She spends a lot of time talking on the phone.</li>
            <li className="list-none margin-bottom-20"><span className="highlight-255-padding-0-4">Emphasizes the continuous and repetitive nature</span> of an action.</li>

            <li value="2">the SUN ALways RIses in the EAST.</li>
            <li className="list-none">The sun always appears in the east.</li>
            <li className="list-none"><span className="highlight-255-padding-0-4">Emphasizes the eternal and absolute nature</span> of an action.</li>

          </ol>

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"ALways" is usually placed at the beginning of a sentence or before the main action.</li>

          <li className="margin-bottom-20">It expresses certainty and absoluteness regarding the frequency with which an action occurs.</li>

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