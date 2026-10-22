import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SLOWly1(): React.JSX.Element {

  const postId = "SLOWly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-SLOWly"><mark className="highlight-tertiary-padding-4-8">SLOWly</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">SLOWly
        <sup><Link to="/vocabulary/SLOWly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/SLOWly-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's take a closer look at the word "SLOWly."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                SLOWly \<Link to="/pronunciation/5-vowel-system">SLŌW ly</Link>\ /ˈsləʊli/ ⬤• (TWO SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Từ từ</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "SLOWly" is used to describe an action performed at a slow, unhurried pace. It can convey slowness, deliberateness, or delay.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">she WALKED SLOWly down the STREET.</li>
          <li className="margin-bottom-20 list-none">She strolled down the street at a leisurely pace.</li>

          <li>TIME PASSED SLOWly as i WAITed.</li>
          <li className="list-none">I waited a long time for something to happen.</li>

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

          <li id="ADjective">he is a SLOW RUNner.</li>
          <li className="margin-bottom-20 list-none">He runs at a pretty moderate pace.</li>

          <li id="NOUN">the SLOWness of the TRAFfic anNOYED me.</li>
          <li className="list-none">I was frustrated by how slow the traffic was.</li>

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

          <li>the PLANT GREW <Link to="/vocabulary/GRADually-1">GRADually</Link> TALler.</li>
          <li className="margin-bottom-20 list-none">The plant grew bigger and bigger.</li>

          <li>SLOWly but <Link to="/vocabulary/SUREly-1">SUREly</Link>, she was MAking PROgress.</li>
          <li className="list-none">She was making progress, but at a slow pace.</li>

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

          <li>he RAN <Link to="/vocabulary/QUICKly-1">QUICKly</Link> to CATCH the BUS.</li>
          <li className="margin-bottom-20 list-none">He hurried to catch the bus.</li>

          <li>the diSEASE SPREAD <Link to="/vocabulary/RAPidly-1">RAPidly</Link>.</li>
          <li className="list-none">The disease is spreading like wildfire.</li>

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

      <p className="text-indent-whole">Imagine a turtle crawling slowly.</p>

        <ul className="list-square">

          <li>the TURtle MOVES as SLOWly as a SNAIL.</li>
          <li className="list-none">The turtle moves very, very slowly, like a snail.</li>

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

      <p className="text-indent-whole">Form sentences describing slow actions.</p>

        <ul className="list-square">

          <li>the CLOCK TICKED SLOWly.</li>
          <li className="list-none">Time seemed to go by slowly.</li>

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

      <p className="text-indent-whole margin-bottom-20">Use this word frequently in your writing or conversations.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">he FINished his WORK.</li>
            <li className="list-none margin-bottom-20">He finished the task at hand.</li>

            <li value="2">he SLOWly FINished his WORK.</li>
            <li className="list-none margin-bottom-20">He took his time finishing the work.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence <span className="highlight-255-padding-0-4">emphasizes</span> that he <span className="highlight-255-padding-0-4">completed</span> the task <span className="highlight-255-padding-0-4">at a slow pace.</span></p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Speed: "SLOWly" always refers to a slow pace.</li>

          <li className="margin-bottom-20">Feeling: It can evoke a sense of relaxation, calm, or impatience, depending on the context.</li>

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