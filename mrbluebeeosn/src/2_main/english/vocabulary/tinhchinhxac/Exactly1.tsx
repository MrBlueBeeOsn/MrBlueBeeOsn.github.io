import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function eXACTly1(): React.JSX.Element {

  const postId = "eXACTly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-eXACTly"><mark className="highlight-tertiary-padding-4-8">eXACTly</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">eXACTly
        <sup><Link to="/vocabulary/eXACTly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/eXACTly-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's learn about the word "eXACTly" together.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                eXACTly \<Link to="/pronunciation/5-vowel-system">ex ACT ly</Link>\ /ɪɡˈzæktli/ •⬤• (THREE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>To be precise,</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div> 

      </div>

      <p className="margin-top-30 text-indent-whole">The word "eXACTly" is used to emphasize precision - that is, a perfect match with something. It can be used to confirm, agree, or clarify information.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">THAT's eXACTly WHAT i THINKing.</li>
          <li className="margin-bottom-20 list-none">That's exactly what I thought!</li>

          <li>she arRIVED at eXACTly THREE o'CLOCK.</li>
          <li className="list-none">She got there precisely at 3:00 p.m.</li>

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

          <li id="ADjective">the eXACT TIME is TWO fifTEEN p.M.</li>
          <li className="list-none">It is precisely two: fifteen minutes past two o'clock in the afternoon.</li>

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

          <li>that's <Link to="/vocabulary/preCISEly-1">preCISEly</Link> WHAT i MEANT.</li>
          <li className="margin-bottom-20 list-none">That's exactly what I was saying.</li>

          <li>the MEASurement was <Link to="/vocabulary/ACcurately-1">ACcurately</Link> TAken.</li>
          <li className="list-none">The size was correctly measured.</li>

        </ul>

      {/* =============================
            ANtonyms:
      ============================= */}

      <p className="margin-top-20" id="ANtonyms">
        <mark className="highlight-238-padding-4-8">
          <strong>ANtonyms</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>there were apPROXimately a HUNdred PEOple at the PARTy.</li>
          <li className="margin-bottom-20 list-none">About 100 people were at the party.</li>

          <li>it TAKES ROUGHly THIRty MINutes to GET THERE.</li>
          <li className="list-none">The journey takes approximately 30 minutes.</li>

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

      <p className="text-indent-whole">Imagine a measuring tool that is accurate down to the millimeter.</p>

        <ul className="list-square">

          <li>this DIGital CALiper can MEASure the LENGTH of this comPOnent eXACTly to the MILlimeter.</li>
          <li className="list-none">This digital caliper can measure the length of the component exactly. It is as precise as a milimeter.</li>

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

      <p className="text-indent-whole"></p>

        <ul className="list-square">

          <li>can you rePEAT THAT, eXACTly?</li>
          <li className="list-none">Can you say those words again the same way?</li>

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

      <p className="text-indent-whole margin-bottom-20">Use this word regularly in conversations and writing.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">i'll be THERE SOON.</li>
            <li className="list-none margin-bottom-20">I will arrive shortly.</li>

            <li value="2">i'll be THERE at eXACTly FIVE p.M.</li>
            <li className="list-none margin-bottom-20">I will arrive at five o'clock precisely.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence uses "eXACTly" to <span className="highlight-255-padding-0-4">emphasize arriving at the exact time</span> - neither later nor earlier.</p>

      </div>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Absolute accuracy: "eXACTly" is often used to emphasize absolute accuracy, with no deviation.</li>

          <li className="margin-bottom-20">Confirming information: It can be used to confirm information that has already been provided.</li>

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