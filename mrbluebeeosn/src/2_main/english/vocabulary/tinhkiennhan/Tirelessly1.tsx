import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function TIRElessly1(): React.JSX.Element {

  const postId = "TIRElessly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-PAtiently"><mark className="highlight-tertiary-padding-4-8">PAtiently</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">TIRElessly
        <sup><Link to="/vocabulary/TIRElessly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/TIRElessly-2">&nbsp;2&nbsp;</Link>
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
            <HashLink smooth to="#VERB">VERB</HashLink>
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
      
      <p>Great! Let's explore the word "TIRElessly" together.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                TIRElessly \<Link to="/pronunciation/5-vowel-system">TĪRE le̛s sly</Link>\ /ˈtaɪrləsli/ ⬤•• (THREE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Nonstop</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "TIRElessly" is used to describe an action performed continuously and without pause, even in the face of difficulties. It conveys the perseverance and strong determination of the person performing the action.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">she WORKED TIRElessly to FINish the PROJect on TIME.</li>
          <li className="margin-bottom-20 list-none">She didn't stop working until she finished her project on time.</li>

          <li>the ATHletes TRAINED TIRElessly for the compeTITion.</li>
          <li className="list-none">The athletes worked out very hard to be ready for the competition.</li>

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

          <li id="ADjective">i'm TOO TIred to gO OUT toNIGHT.</li>
          <li className="margin-bottom-20 list-none">I don't feel like going out tonight.</li>
          
          <li id="VERB">the LONG WALK TIred me OUT.</li>
          <li className="list-none">The long walk made me very tired.</li>

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

          <li>the RAIN FELL inCESsantly.</li>
          <li className="margin-bottom-20 list-none">It rained steadily.</li>

          <li>she purSUED her GOAL reLENTlessly.</li>
          <li className="list-none">She didn't stop trying to achieve her goal.</li>

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

          <li>he <Link to="/vocabulary/LAZily-1">LAZily</Link> SAT on the COUCH.</li>
          <li className="margin-bottom-20 list-none">He sat down on the couch without thinking.</li>

          <li>she CASually MENtioned her TRIP.</li>
          <li className="list-none">She casually mentioned her trip, without giving it much thought.</li>

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

      <p className="text-indent-whole">Imagine someone running a marathon, without stopping.</p>

        <ul className="list-square">

          <li>he is TIRElessly RUNning the MARathon, SHOWing inCREDible enDURance.</li>
          <li className="list-none">He is running the marathon without stopping, showing that he can keep going for a long time.</li>

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

      <p className="text-indent-whole">Create your own example sentences using the word "TIRElessly" in various contexts.</p>

        <ul className="list-square">

          <li>the SCIentists WORKED TIRElessly to FIND a CURE for the disEASE.</li>
          <li className="list-none">The scientists worked nonstop to find a cure for the disease.</li>

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

      <p className="text-indent-whole margin-bottom-20">This word is often used to describe perseverance and tireless effort.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">he TRIED to SOLVE the PROBlem.</li>
            <li className="list-none margin-bottom-20">He attempted to solve the problem.</li>

            <li value="2">he WORKED TIRElessly to SOLVE the PROBlem.</li>
            <li className="list-none margin-bottom-20">He tried his hardest to solve the problem.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence <span className="highlight-255-padding-0-4">emphasizes his relentless efforts to solve</span> the problem.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Perseverance: "TIRElessly" is often used to describe admirable perseverance.</li>

          <li className="margin-bottom-20">Relentless: It emphasizes the continuity of an action.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 14, 2024 · by 💎GEM ·</span>
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