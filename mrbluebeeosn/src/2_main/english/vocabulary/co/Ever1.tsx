import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function EVer1(): React.JSX.Element {

  const postId = "EVer1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-YES"><mark className="highlight-tertiary-padding-4-8">YES</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">EVer
        <sup><Link to="/vocabulary/EVer-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/EVer-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's take a closer look at the word "EVer."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                EVer \<Link to="/pronunciation/5-vowel-system">EV e̛r</Link>\ /ˈev.ər/ ⬤• (TWO SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>When</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">EVer: Use "in questions" to ask about something that happened in the past. Use it in declarative sentences to highlight an experience or event that has happened or might happen.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">have you EVer been to PARis?</li>
          <li className="margin-bottom-20 list-none">Have you ever gone to Paris?</li>

          <li>she is the KINDest PERson i have EVer MET.</li>
          <li className="list-none">No one is as kind as she. I've never met anyone like her.</li>

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

          <li className="list-none">There is no direct family for "EVer."</li>

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

          <li>have you EVer, at ANy TIME, SEEN a UFO?</li>
          <li className="margin-bottom-20 list-none">Have you ever seen a UFO, at any time?</li>

          <li>on ANy ocCAsion, she is ALways the FIRST to arRIVE.</li>
          <li className="list-none">Whenever there is an occasion, she is the first to arrive.</li>

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
          <li className="margin-bottom-20 list-none">Paris is a place I have never visited.</li>

          <li>i have <Link to="/vocabulary/NOT-1">NOT</Link> ONCE reGRETted my deCISion.</li>
          <li className="list-none">I am happy I made that choice. I never regret it.</li>

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

      <p className="text-indent-whole">Imagine a photo album filled with memories. How would you describe it?</p>

        <ul className="list-square">

          <li>have you EVer SEEN such a BEAUtiful PHOto?</li>
          <li className="list-none">Have you ever seen a photo that is so beautiful?</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Try to come up with as many example sentences as possible using "EVer."</p>

        <ul className="list-square">

          <li>has she EVer TRIED SUshi?</li>
          <li className="list-none">Has she ever had a chance to try sushi?</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Read and write frequently to build your vocabulary and improve your use of "EVer."</p>

        <p className="text-indent-whole">Examples for comparison (the difference between "NEVer" and "EVer"):</p>

          <ol>

            <li value="1">i have <Link to="/vocabulary/NEVer-1">NEVer</Link> been to the BEACH.</li>
            <li className="list-none">I have never visited the beach.</li>
            <li className="list-none margin-bottom-20"><span className="highlight-255-padding-0-4">NEVer: It used to be that they would completely deny having had an experience.</span></li>

            <li value="2">have you EVer been to the BEACH?</li>
            <li className="list-none">Have you ever visited the coast?</li>
            <li className="list-none"><span className="highlight-255-padding-0-4">EVer: Use it in questions</span> or statements to highlight an experience.</li>

          </ol>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"EVer" is usually placed at the end of a question or after the main action in a declarative sentence.</li>

          <li className="margin-bottom-20">"EVer" can be used to emphasize a particular experience or a long period of time.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 12, 2024 · by 💎GEM ·</span>
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