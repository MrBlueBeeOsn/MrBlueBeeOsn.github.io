import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function ACcurately1(): React.JSX.Element {

  const postId = "ACcurately1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-eXACTly"><mark className="highlight-tertiary-padding-4-8">eXACTly</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">ACcurately
        <sup><Link to="/vocabulary/ACcurately-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/ACcurately-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's take a closer look at the word "ACcurately."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                ACcurately \<Link to="/pronunciation/5-vowel-system">AC cư ra̛te ly</Link>\ /ˈækjərətli/ ⬤••• (FOUR SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Exactly</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "ACcurately" is used to emphasize absolute accuracy in an action, a result, or a piece of information. It conveys meticulousness, care, and the absence of errors.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">she ACcurately MEASured the inGREdients.</li>
          <li className="margin-bottom-20 list-none">She measured the ingredients correctly.</li>

          <li>the DAta was inACcurately reCORDed.</li>
          <li className="list-none">The data was not recorded correctly.</li>

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

          <li id="ADjective">his inforMAtion is ALways ACcurate.</li>
          <li className="margin-bottom-20 list-none">You can always trust his information.</li>

          <li id="NOUN">the ACcuracy of the TEST reSULTS is CRUcial.</li>
          <li className="list-none">It's very important for the test results to be accurate.</li>

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

          <li>i KNOW <Link to="/vocabulary/eXACTly-1">eXACTly</Link> WHAT you MEAN.</li>
          <li className="margin-bottom-20 list-none">I totally understand what you're saying.</li>

          <li>the TIME was <Link to="/vocabulary/preCISEly-1">preCISEly</Link> THREE p.M.</li>
          <li className="list-none">It was precisely three o'clock in the afternoon.</li>

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

          <li>the inforMAtion was inACcurately rePORTed.</li>
          <li className="margin-bottom-20 list-none">The information was reported incorrectly.</li>

          <li>there were apPROXimately a HUNdred PEOple at the PARTy.</li>
          <li className="list-none">There were about 100 people at the party.</li>

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

      <p className="text-indent-whole">Imagine a jeweler measuring a diamond with a precision measuring tool.</p>

        <ul className="list-square">

          <li>the JEWEler is ACcurately MEASuring the DIamond with a preCISE TOOL.</li>
          <li className="list-none">The jeweler is measuring the diamond's size exactly using a special tool.</li>

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

      <p className="text-indent-whole">Create various example sentences using the word "ACcurately" in different contexts.</p>

        <ul className="list-square">

          <li>the SCIentist ACcurately preDICTed the OUTcome of the exPERiment.</li>
          <li className="list-none">The scientist correctly predicted what would happen in the experiment.</li>

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

            <li value="1">he EStimated the COST.</li>
            <li className="list-none margin-bottom-20">He estimated how much it would cost.</li>

            <li value="2">he ACcurately CALculated the COST.</li>
            <li className="list-none margin-bottom-20">He calculated the cost correctly.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence uses "accurately" to <span className="highlight-255-padding-0-4">emphasize that the cost calculation was performed meticulously</span> and accurately.</p>

      </div>

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Absolute accuracy: "ACcurately" emphasizes absolute accuracy, with no margin of error.</li>

          <li className="margin-bottom-20">Meticulousness: It is often used in contexts related to measurement, calculation, or recording information.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 3, 2024 · by 💎GEM ·</span>
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