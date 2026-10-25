import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SELdom1(): React.JSX.Element {

  const postId = "SELdom1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-SOMEtimes"><mark className="highlight-tertiary-padding-4-88">SOMEtimes</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">SELdom
        <sup><Link to="/vocabulary/SELdom-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/SELdom-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's take a closer look at the word "SELdom."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                SELdom \<Link to="/pronunciation/5-vowel-system">SEL dơm</Link>\ /ˈsɛldəm/ ⬤• (TWO SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Rarely</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">SELdom: An action or event that occurs infrequently, very rarely.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">i SELdom GO to the MOvies.</li>
          <li className="margin-bottom-20 list-none">I don't often go to the cinema.</li>

          <li>she SELdom MAKES misTAKES.</li>
          <li className="list-none">She rarely makes errors.</li>

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

          <li className="list-none">There is no direct vocabulary family.</li>

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

          <li>i <Link to="/vocabulary/RAREly-1">RAREly</Link> EAT MEAT.</li>
          <li className="margin-bottom-20 list-none">It's not very often that I eat meat.</li>

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

          <li>i <Link to="/vocabulary/OFten-1">OFten</Link> GO for a WALK in the PARK.</li>
          <li className="margin-bottom-20 list-none">I usually go on a walk in the park.</li>

          <li>he <Link to="/vocabulary/FREquently-1">FREquently</Link> TRAVels aBROAD.</li>
          <li className="list-none">He often travels far and wide.</li>

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

      <p className="text-indent-whole">Imagine a clock that rarely runs or a flower that rarely blooms.</p>

        <ul className="list-square">

          <li>the WATCH SELdom KEEPS ACcurate TIME.</li>
          <li className="margin-bottom-20 list-none">The watch is not very accurate.</li>

          <li>this TYPE of FLOWer SELdom BLOOMS.</li>
          <li className="list-none">This kind of flower doesn't usually bloom.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Try to create as many sentences as possible using "SELdom" in different contexts.</p>

        <ul className="list-square">

          <li>she SELdom comPLAINS a<strong>bout</strong> her JOB.</li>
          <li className="list-none">She rarely says she doesn't like her job.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Read and write a lot to get familiar with this word.</p>

        <p className="text-indent-whole">Examples for comparison (the difference between "RAREly" and "SELdom"):</p>

          <ol>

            <li value="1">i <Link to="/vocabulary/RAREly-1">RAREly</Link> EAT SPIcy FOOD.</li>
            <li className="list-none">I almost never eat food that has a lot of spice.</li>
            <li className="list-none margin-bottom-20"><span className="highlight-255-padding-0-4">RAREly: It may happen a few times,</span> but not often.</li>

            <li value="2">i SELdom SEE him anyMORE.</li>
            <li className="list-none">I don't see him very often now.</li>
            <li className="list-none"><span className="highlight-255-padding-0-4">SELdom: Emphasizes absolute rarity.</span></li>

          </ol>

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"SELdom" usually precedes the main verb in a sentence.</li>

          <li className="margin-bottom-20">"SELdom" has a negative connotation, meaning that something does not happen often.</li>

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