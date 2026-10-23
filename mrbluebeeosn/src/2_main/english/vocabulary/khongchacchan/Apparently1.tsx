import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function apPARently1(): React.JSX.Element {

  const postId = "apPARently1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-MAYbe"><mark className="highlight-tertiary-padding-4-8">MAYbe</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">apPARently
        <sup><Link to="/vocabulary/apPARently-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/apPARently-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's dive deeper into the word "apPARently"!</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                apPARently \<Link to="/pronunciation/5-vowel-system">a̛p PAR e̛nt ly</Link>\ /əˈpærəntli/ •⬤•• (FOUR SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>It seems that</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "apPARently" is used to describe something that is believed to be true or factual based on available information, even though the speaker is not entirely certain about it. It is often used when the speaker is conveying information they have heard from someone else or based on their own observations.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">apPARently, it's GOing to RAIN toMORrow.</li>
          <li className="margin-bottom-20 list-none">It looks like rain is coming tomorrow.</li>

          <li>apPARently, she's MOving to a NEW CITy.</li>
          <li className="list-none">She's moving to a new city, according to what I've heard.</li>

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

          <li id="ADjective">it's apPARent that she's TIred.</li>
          <li className="list-none">Her body language and tone of voice make it seem like she is tired.</li>

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

          <li>SEEMingly, he's HAPpy with his NEW JOB.</li>
          <li className="margin-bottom-20 list-none">It looks like he's satisfied with his new job.</li>

          <li><Link to="/vocabulary/EVidently-1">EVidently</Link>, she's been STUDying HARD.</li>
          <li className="list-none">It's clear that she has been studying a lot.</li>

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

          <li>i LOOKED unCERtainly at his PLANS.</li>
          <li className="margin-bottom-20 list-none">I definitely checked out his plans.</li>

          <li>he LOOKED at me DOUBTfully.</li>
          <li className="list-none">He looked at me like he didn't believe me.</li>

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

      <p className="text-indent-whole">Imagine someone reading a newspaper.</p>

        <ul className="list-square">

          <li>apPARently, he's <Link to="/vocabulary/REally-1">REally</Link> <strong>in</strong>to that ARticle.</li>
          <li className="list-none">He is clearly interested in that article.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create your own example sentences using the word "apPARently" in various contexts.</p>

        <ul className="list-square">

          <li>apPARently, he QUIT his JOB LAST WEEK.</li>
          <li className="list-none">He quit his job last week, it looks like.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Use this word frequently in conversations or writing.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">she KNOWS the ANswer.</li>
            <li className="list-none margin-bottom-20">She has the solution.</li>

            <li value="2">apPARently, she KNOWS the ANswer.</li>
            <li className="list-none margin-bottom-20">It seems that she is aware of the answer.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence <span className="highlight-255-padding-0-4">indicates that the speaker is not entirely sure she knows the answer,</span> but is basing her assumption solely on what she has heard or observed.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Degree of certainty: "apPARently" conveys a lower degree of certainty than words such as "<Link to="/vocabulary/CLEARly-1">CLEARly</Link>" (clearly) or "<Link to="/vocabulary/DEFinitely-1">DEFinitely</Link>" (definitely).</li>

          <li className="margin-bottom-20">Source: Information presented using "apPARently" may come from various sources, such as rumors, hearsay, or personal observations.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 11, 2024 · by 💎GEM ·</span>
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