import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function RAREly1(): React.JSX.Element {

  const postId = "RAREly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-SOMEtimes"><mark className="highlight-tertiary-padding-4-88">SOMEtimes</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">RAREly
        <sup><Link to="/vocabulary/RAREly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/RAREly-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's explore the word "RAREly" together.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                RAREly \<Link to="/pronunciation/5-vowel-system">RARE ly</Link>\ /ˈrerli/ ⬤• (TWO SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>It is very rare that</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "RAREly" is used to describe an action or event that occurs infrequently or rarely. It indicates the low frequency of an event.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">i RAREly EAT MEAT.</li>
          <li className="margin-bottom-20 list-none">I almost never eat meat.</li>

          <li>she RAREly GOES to the MOvies.</li>
          <li className="list-none">She hardly ever goes to the movies.</li>

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

          <li id="ADjective">THIS is a RARE BOOK.</li>
          <li className="list-none">This book is rare.</li>

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

          <li>i <Link to="/vocabulary/SELdom-1">SELdom</Link> SEE him these DAYS.</li>
          <li className="margin-bottom-20 list-none">I don't see him often these days.</li>

          <li>she inFREquently VISits her PARents.</li>
          <li className="list-none">She doesn't visit her parents very often.</li>

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

          <li>i <Link to="/vocabulary/FREquently-1">FREquently</Link> GO to the GYM.</li>
          <li className="margin-bottom-20 list-none">I am a regular gym-goer. I go to the gym often.</li>

          <li>she <Link to="/vocabulary/OFten-1">OFten</Link> COOKS DINner.</li>
          <li className="list-none">She often prepares dinner for her family.</li>

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

      <p className="text-indent-whole">Imagine a watch that rarely runs or a rare animal.</p>

        <ul className="list-square">

          <li>this ANimal is RAREly SEEN in the WILD.</li>
          <li className="list-none">This animal doesn't often appear in nature.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create your own example sentences using the word "RAREly" in various contexts.</p>

        <ul className="list-square">

          <li>she RAREly goeS OUT on WEEKends.</li>
          <li className="list-none">She doesn't go out very often on the weekends.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Use this word frequently in conversations to express rarity.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">i GO to the LIbrary.</li>
            <li className="list-none margin-bottom-20">The library is my destination.</li>

            <li value="2">i RAREly GO to the LIbrary.</li>
            <li className="list-none margin-bottom-20">I don't go to the library often.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence <span className="highlight-255-padding-0-4">emphasizes that going to the library is not a regular habit</span> of the speaker.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Frequency: "RAREly" emphasizes the rarity of an action or event.</li>

          <li className="margin-bottom-20">Negation: Sometimes, "RAREly" is used to emphasize the negative meaning of a sentence.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 15, 2024 · by 💎GEM ·</span>
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