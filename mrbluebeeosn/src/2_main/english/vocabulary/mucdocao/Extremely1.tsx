import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function exTREMEly1(): React.JSX.Element {

  const postId = "exTREMEly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-HIGHly"><mark className="highlight-tertiary-padding-4-8">HIGHly</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">exTREMEly
        <sup><Link to="/vocabulary/exTREMEly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/exTREMEly-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's take a closer look at the word "exTREMEly."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                exTREMEly \<Link to="/pronunciation/5-vowel-system">ex TRĒME ly</Link>\ /ɪkˈstriːmli/ •⬤• (THREE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Extremely</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "exTREMEly" is used to emphasize a particular characteristic, quality, or degree that is very high—beyond the norm.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">the eXAM was exTREMEly DIFficult.</li>
          <li className="margin-bottom-20 list-none">The exam was very hard.</li>

          <li>she is exTREMEly TALented.</li>
          <li className="list-none">She has a lot of talent.</li>

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

          <li id="ADjective">he TOOK exTREME MEASures to proTECT his FAMILy.</li>
          <li className="margin-bottom-20 list-none">He did everything he could to keep his family safe.</li>

          <li id="NOUN">the situAtion REACHed its exTREMity.</li>
          <li className="list-none">Things went from bad to worse.</li>

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

          <li>it's <Link to="/vocabulary/VERy-1">VERy</Link> HOT toDAY.</li>
          <li className="margin-bottom-20 list-none">The weather is very hot today.</li>

          <li>she is <Link to="/vocabulary/HIGHly-1">HIGHly</Link> reGARDed in her FIELD.</li>
          <li className="list-none">A lot of people respect her in her field.</li>

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

          <li>i'm SLIGHTly TIred.</li>
          <li className="margin-bottom-20 list-none">I'm a bit tired.</li>

          <li>the WEATHer is MODerately WARM.</li>
          <li className="list-none">The weather is neither too hot nor too cold. It is moderately warm.</li>

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

      <p className="text-indent-whole">Imagine a thermometer showing a very high temperature.</p>

        <ul className="list-square">

          <li>the therMOMeter is READing an exTREMEly HIGH TEMPERature.</li>
          <li className="list-none">The thermometer is showing a temperature that is very high.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create various example sentences using the word "exTREMEly" in different contexts.</p>

        <ul className="list-square">

          <li>the COFfee is exTREMEly HOT.</li>
          <li className="list-none">The coffee is very, very hot.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Use this word regularly in conversations and writing.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">the MOvie was GOOD.</li>
            <li className="list-none margin-bottom-20">The movie wasn't bad.</li>

            <li value="2">the MOvie was exTREMEly GOOD.</li>
            <li className="list-none margin-bottom-20">I loved the movie!</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence <span className="highlight-255-padding-0-4">emphasizes that the movie is so good</span> that it exceeds expectations.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Intensity: "exTREMEly" is often used to emphasize the highest degree of a characteristic.</li>

          <li className="margin-bottom-20">Emotions: It can be used to express strong emotions such as joy, sadness, anger, etc.</li>

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