import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function GENuinely1(): React.JSX.Element {

  const postId = "GENuinely1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-verifiCAtion"><mark className="highlight-tertiary-padding-4-8">ADverbs: verifiCAtion</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">GENuinely
        <sup><Link to="/vocabulary/GENuinely-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/GENuinely-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's explore the word "GENuinely" together.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                GENuinely \<Link to="/pronunciation/5-vowel-system">GEN ū ine ly</Link>\ /ˈdʒenjuɪnli/ ⬤••• (FOUR SYLlables)
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

      <p className="margin-top-30 text-indent-whole">The word "GENuinely" is used to emphasize the authenticity and sincerity of a feeling, action, or statement. It indicates that something comes from within and is not artificial.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">she GENuinely CARES a<strong>bout</strong> her FRIENDS.</li>
          <li className="margin-bottom-20 list-none">It is clear that she really does care about her friends.</li>

          <li>he was GENuinely surPRISED by the GIFT.</li>
          <li className="list-none">He said the gift took him by surprise.</li>

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

          <li id="ADjective">he has a GENuine INterest in ART.</li>
          <li className="margin-bottom-20 list-none">He really loves art.</li>
          
          <li id="VERB">the WIND TURbine GENerates elecTRICity.</li>
          <li className="list-none">The wind turbine produces electricity.</li>

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

          <li>she THANKED him sinCEREly for his HELP.</li>
          <li className="margin-bottom-20 list-none">She said "Thank you" to him, but she didn't mean sarcastically. She really appreciated his help.</li>

          <li>i <Link to="/vocabulary/TRUly-1">TRUly</Link> beLIEVE in WHAT he SAID.</li>
          <li className="list-none">I completely agree with what he said.</li>

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

          <li>he SMILED insinCEREly.</li>
          <li className="margin-bottom-20 list-none">He smiled without really meaning to.</li>

          <li>he SPOKE hypoCRITically a<strong>bout</strong> HONEsty.</li>
          <li className="list-none">He spoke without thinking about what was right and wrong.</li>

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

      <p className="text-indent-whole">Imagine someone smiling broadly when they receive a gift.</p>

        <ul className="list-square">

          <li>he is GENuinely GRATEful for the THOUGHTful PREsent.</li>
          <li className="list-none">He is really thankful for the thoughtful gift.</li>

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

      <p className="text-indent-whole">Create sentences about sincere emotions or actions.</p>

        <ul className="list-square">

          <li>he GENuinely enJOYS SPENding TIME with his FAMILy.</li>
          <li className="list-none">He actually loves spending time with his family.</li>

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

      <p className="text-indent-whole margin-bottom-20">Use this word regularly in conversations or in writing.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">he SAID he LIKED my PAINting.</li>
            <li className="list-none margin-bottom-20">He told me that he liked my painting.</li>

            <li value="2">he GENuinely adMIREd my PAINting.</li>
            <li className="list-none margin-bottom-20">He really liked my painting.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence uses "GENuinely" to <span className="highlight-255-padding-0-4">emphasize that his admiration is sincere and not just a polite compliment</span>.</p>

        {/* <span className="highlight-255-padding-0-4"></span> */}

      </div>

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Sincerity: "GENuinely" emphasizes the sincerity—the lack of insincerity—of an emotion or action.</li>

          <li className="margin-bottom-20">Opposite of insincerity: It is often used to contrast with insincere actions or words.</li>

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