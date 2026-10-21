import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function DELicately1(): React.JSX.Element {

  const postId = "DELicately1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-GENTly"><mark className="highlight-tertiary-padding-4-8">GENTly</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">DELicately
        <sup><Link to="/vocabulary/DELicately-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/DELicately-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's explore the word "DELicately" together.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                DELicately \<Link to="/pronunciation/5-vowel-system">DEL i̛ ca̛te ly</Link>\ /ˈdɛlɪkətli/ ⬤••• (FOUR SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>In a subtle way</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "DELicately" is often used to describe an action performed carefully and gently, taking care not to cause harm or inconvenience to others or other objects. It can also imply subtlety in the way an issue is expressed or handled.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">she DELicately pickED UP the FRAGile VASE.</li>
          <li className="margin-bottom-20 list-none">Carefully, she picked up the delicate vase.</li>

          <li>he DELicately BROACHED the SUBject of MONey with his PARents.</li>
          <li className="list-none">He gently mentioned money to his parents.</li>

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

          <li id="ADjective">the CHIna is VERy DELicate.</li>
          <li className="list-none">The china plates are very fragile.</li>

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

          <li>she <Link to="/vocabulary/GENTly-1">GENTly</Link> CLOSED the DOOR.</li>
          <li className="margin-bottom-20 list-none">She closed the door with care.</li>

          <li>he <Link to="/vocabulary/CAREfully-1">CAREfully</Link> PACKED the BOX.</li>
          <li className="list-none">He made sure to pack the box carefully.</li>

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

          <li>he HANDled the PACKage ROUGHly.</li>
          <li className="margin-bottom-20 list-none">He mishandled the package.</li>

          <li>the STORM RAGED VIolently.</li>
          <li className="list-none">The storm was very intense.</li>

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

      <p className="text-indent-whole">Imagine someone carefully holding a beautiful cake.</p>

        <ul className="list-square">

          <li>she is DELicately HOLDing the BEAUtiful CAKE.</li>
          <li className="list-none">She is holding the beautiful cake with care.</li>

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

      <p className="text-indent-whole">Create your own example sentences using the word "DELicately" in various contexts.</p>

        <ul className="list-square">

          <li>he DELicately sugGESted that she might WANT to reconSIDer her deCISion.</li>
          <li className="list-none">He subtly hinted that she might want to think again about her choice.</li>

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

      <p className="text-indent-whole margin-bottom-20">This word is often used to describe gentleness and subtlety in one’s actions.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">he CLOSED the DOOR.</li>
            <li className="list-none margin-bottom-20">He shut the door.</li>

            <li value="2">he DELicately CLOSED the DOOR so as NOT to WAKE the BAby.</li>
            <li className="list-none margin-bottom-20">He carefully closed the door so he wouldn't wake the baby.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence uses "DELicately" to <span className="highlight-255-padding-0-4">emphasize caution, so as not to disturb the baby</span>.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Gentleness: "DELicately" emphasizes gentleness and care in one’s actions.</li>

          <li className="margin-bottom-20">Subtlety: It can also imply subtlety in the way one expresses oneself or handles issues.</li>

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