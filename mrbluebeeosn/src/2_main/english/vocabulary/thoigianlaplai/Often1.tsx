import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function OFten1(): React.JSX.Element {

  const postId = "OFten1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-OFten"><mark className="highlight-tertiary-padding-4-88">OFten</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">OFten
        <sup><Link to="/vocabulary/OFten-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/OFten-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's dive into an analysis of the word "OFten" and related idioms.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                OFten \<Link to="/pronunciation/5-vowel-system">OF te̛n</Link>\  /ˈɒf.ən/ ⬤• (TWO SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Usually</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">OFten: It means to do something again and again over time.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">i OFten GO to the GYM.</li>
          <li className="margin-bottom-20 list-none">I frequently visit the gym.</li>

          <li>she OFten forGETS her KEYS.</li>
          <li className="list-none">She frequently loses track of her keys.</li>

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

          <li className="list-none">There is no direct family for "OFten" because it is a single word.</li>

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

          <li>she <Link to="/vocabulary/FREquently-1">FREquently</Link> VISits her GRANDparents.</li>
          <li className="margin-bottom-20 list-none">She often goes to see her grandparents.</li>

          <li>they EXercise REGularly.</li>
          <li className="list-none">They exercise on a regular basis.</li>

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

          <li>i <Link to="/vocabulary/RAREly-1">RAREly</Link> EAT FAST FOOD.</li>
          <li className="margin-bottom-20 list-none">It is rare for me to eat fast food.</li>

          <li>she <Link to="/vocabulary/NEVer-1">NEVer</Link> LIES.</li>
          <li className="list-none">She is always honest.</li>

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

      <p className="text-indent-whole">Imagine a clock to represent the repetition of an action.</p>

        <ul className="list-square">

          <li><strong>ever</strong>y TIME the CLOCK STRIKES TWELVE, i OFten TAKE a BREAK from WORK.</li>
          <li className="list-none">I often take a break from work at midnight.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create several sentences using "often" in different contexts related to habits and daily activities.</p>

        <ul className="list-square">

          <li>she OFten READS BOOKS be<strong>fore</strong> GOing to BED.</li>
          <li className="list-none">She often reads before she goes to bed.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Use the word "often" regularly in conversation or in writing.</p>

        <p className="text-indent-whole">Examples for comparison (the difference between "FREquently" and "OFten"):</p>

          <ol>

            <li value="1">she <Link to="/vocabulary/FREquently-1">FREquently</Link> atTENDS CONFERences.</li>
            <li className="list-none">She's a regular at conferences.</li>
            <li className="list-none margin-bottom-20"><span className="highlight-255-padding-0-4">FREquently: This happens often.</span> Another way of saying it is to use the word "REGularly".</li>

            <li value="2">i OFten GO to the PARK.</li>
            <li className="list-none">I frequently visit the park.</li>
            <li className="list-none"><span className="highlight-255-padding-0-4">OFten: This is a common way of speaking</span> that can be used in many situations.</li>

          </ol>

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"Often" usually comes before the main action in a sentence.</li>

          <li className="margin-bottom-20">It can be used to express how frequently an action occurs.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 4, 2024 · by 💎GEM ·</span>
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