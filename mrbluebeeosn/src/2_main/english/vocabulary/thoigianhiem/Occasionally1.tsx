import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function ocCAsionally1(): React.JSX.Element {

  const postId = "ocCAsionally1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-SOMEtimes"><mark className="highlight-tertiary-padding-4-88">SOMEtimes</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">ocCAsionally
        <sup><Link to="/vocabulary/ocCAsionally-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/ocCAsionally-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                            
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#ADverb">ADverb</HashLink>
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
      
      <p>Great! Let's explore the word "occasionally" together.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                ocCAsionally \<Link to="/pronunciation/5-vowel-system">ơc CĀ siơn a̛l ly</Link>\ /əˈkeɪʒənəli/ •⬤••• (FIVE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>From time to time</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "ocCAsionally" is used to describe an action that does not happen frequently, but only in a few instances or a few times. It conveys the irregularity or discontinuity of an event.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">i ocCAsionally GO to the GYM.</li>
          <li className="margin-bottom-20 list-none">I go to the gym sometimes.</li>

          <li>it RAINS ocCAsionally in the DESert.</li>
          <li className="list-none">The desert sometimes gets rain.</li>

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

          <li id="NOUN">on SPECial ocCAsions, we WEAR FORmal CLOTHES.</li>
          <li className="list-none">We wear our best clothes on special occasions.</li>

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

          <li><Link to="/vocabulary/SOMEtimes-1">SOMEtimes</Link> i FEEL LONEly.</li>
          <li className="margin-bottom-20 list-none">Sometimes, I feel alone.</li>

          <li>we meeT UP for COFfee NOW and THEN.</li>
          <li className="list-none">We would meet for coffee sometimes, but not regularly.</li>

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

          <li>she is <Link to="/vocabulary/ALways-1">ALways</Link> on TIME.</li>
          <li className="margin-bottom-20 list-none">She always arrives on time.</li>

          <li>i <Link to="/vocabulary/NEVer-1">NEVer</Link> EAT FAST FOOD.</li>
          <li className="list-none">I never eat junk food.</li>

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

      <p className="text-indent-whole">Imagine someone who only reads books and newspapers occasionally.</p>

        <ul className="list-square">

          <li>she Only READS BOOKS and NEWSpapers ocCAsionally.</li>
          <li className="list-none">She doesn't read much, only books or the newspaper sometimes.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create various example sentences using the word "occasionally" in different contexts.</p>

        <ul className="list-square">

          <li>i ocCAsionally BAKE COOKies on WEEKends.</li>
          <li className="list-none">On the weekends, I sometimes bake cookies.</li>

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

            <li value="1">i GO to the MOvies.</li>
            <li className="list-none margin-bottom-20">I go out to watch movies.</li>

            <li value="2">i ocCAsionally GO to the MOvies.</li>
            <li className="list-none margin-bottom-20">I sometimes go to the movies.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence uses "occasionally" to <span className="highlight-255-padding-0-4">emphasize that going to the movies is not a regular activity</span> for the speaker.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Frequency: "occasionally" indicates a low frequency of an action.</li>

          <li className="margin-bottom-20">Not often: It emphasizes irregularity and discontinuity.</li>

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