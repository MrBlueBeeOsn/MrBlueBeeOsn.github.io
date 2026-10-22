import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function EVidently1(): React.JSX.Element {

  const postId = "EVidently1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-CLEARly"><mark className="highlight-tertiary-padding-4-8">CLEARly</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">EVidently
        <sup><Link to="/vocabulary/EVidently-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/EVidently-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's take a closer look at the word "EVidently."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                EVidently \<Link to="/pronunciation/5-vowel-system">EV i de̛nt ly</Link>\ /ˈevɪdəntli/ ⬤••• (FOUR SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Clearly</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "EVidently" is used to emphasize something that is very clear, obvious, and beyond dispute. It is often used when there is clear evidence to prove something.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">she was EVidently upSET a<strong>bout</strong> the NEWS.</li>
          <li className="margin-bottom-20 list-none">It was clear that she was upset about the news.</li>

          <li>the exPERiment reSULTS were EVidently sucCESSful.</li>
          <li className="list-none">The results of the experiment were obviously successful.</li>

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

          <li id="ADjective">the soLUtion is EVident to <strong>ever</strong>yone.</li>
          <li className="margin-bottom-20 list-none">Everyone knows the solution.</li>

          <li id="NOUN">there is NO EVidence to supPORT his CLAIM.</li>
          <li className="list-none">There is no proof that what he says is true.</li>

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

          <li>she <Link to="/vocabulary/CLEARly-1">CLEARly</Link> STAted her poSItion.</li>
          <li className="margin-bottom-20 list-none">She clearly said what her position was.</li>

          <li>it was <Link to="/vocabulary/OBviously-1">OBviously</Link> a misTAKE.</li>
          <li className="list-none">It was obviously an error.</li>

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

          <li>he LOOKED at me DOUBTfully.</li>
          <li className="margin-bottom-20 list-none">He looked at me like he didn't believe me.</li>

          <li>she ANswered unCERtainly.</li>
          <li className="list-none">She definitely didn't answer "yes."</li>

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

      <p className="text-indent-whole">Imagine a clear visual cue, such as a large traffic sign or a person smiling broadly.</p>

        <ul className="list-square">

          <li>the SIGN was EVidently CLEAR.</li>
          <li className="margin-bottom-20 list-none">It was impossible to miss the sign.</li>

          <li>she was EVidently SMIling BRIGHTly.</li>
          <li className="list-none">She was clearly smiling big.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create sentences related to situations with clear evidence.</p>

        <ul className="list-square">

          <li>EVidently, he had been CRYing.</li>
          <li className="list-none">It was clear that he had been crying.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Use this word frequently in your writing or conversations.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">she was SAD.</li>
            <li className="list-none margin-bottom-20">Her depression was severe.</li>

            <li value="2">she was EVidently SAD, with RED, PUFFy EYES.</li>
            <li className="list-none margin-bottom-20">She was clearly feeling sad. Her eyes were red and puffy.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence <span className="highlight-255-padding-0-4">emphasizes that her sadness is very evident</span> from her facial expressions.</p>

        {/* <span className="highlight-255-padding-0-4"></span> */}

      </div>

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Certainty: Emphasizes the certainty and clarity of something.</li>

          <li className="margin-bottom-20">Evidence-based: Often used when there is clear evidence to support a claim.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 7, 2024 · by 💎GEM ·</span>
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