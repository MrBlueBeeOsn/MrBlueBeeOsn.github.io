import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function POSsibly1(): React.JSX.Element {

  const postId = "POSsibly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-MAYbe"><mark className="highlight-tertiary-padding-4-8">MAYbe</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">POSsibly
        <sup><Link to="/vocabulary/POSsibly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/POSsibly-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's take a closer look at the word "POSsibly."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                POSsibly \<Link to="/pronunciation/5-vowel-system">POS si̛b ly</Link>\ /ˈpɒsəbli/ ⬤•• (THREE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>It is possible</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "POSsibly" is used to describe a situation that is likely to happen, but not entirely certain. It is often used to express uncertainty or to make an assumption.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">it might POSsibly RAIN <Link to="/vocabulary/toMORrow-1">toMORrow</Link>.</li>
          <li className="margin-bottom-20 list-none">Tomorrow, there's a chance of rain.</li>

          <li>she could POSsibly be at HOME NOW.</li>
          <li className="list-none">There's a chance she's already home.</li>

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

          <li id="ADjective">is it POSsible to FINish this WORK toDAY?</li>
          <li className="margin-bottom-20 list-none">Can this work be finished today?</li>

          <li id="NOUN">there is a possiBILity of RAIN LAter.</li>
          <li className="list-none">There's a chance it will rain later.</li>

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

          <li><Link to="/vocabulary/perHAPS-1">perHAPS</Link> she is BUSy</li>
          <li className="margin-bottom-20 list-none">She might be busy.</li>

          <li><Link to="/vocabulary/MAYbe-1">MAYbe</Link> he will CALL you LAter.</li>
          <li className="list-none">He might give you a ring later.</li>

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

          <li>i will <Link to="/vocabulary/DEFinitely-1">DEFinitely</Link> be THERE.</li>
          <li className="margin-bottom-20 list-none">I'm definitely going to be there.</li>

          <li>THAT is <Link to="/vocabulary/CERtainly-1">CERtainly</Link> TRUE.</li>
          <li className="list-none">That's definitely right.</li>

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

      <p className="text-indent-whole">Imagine a dark cloud in the sky, and you're wondering, "Is it going to rain?"</p>

        <ul className="list-square">

          <li>WHAT do you THINK? is it POSsibly GOing to RAIN?</li>
          <li className="list-none">What do you think is going to happen? Is it going to rain?</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Form sentences that express uncertainty.</p>

        <ul className="list-square">

          <li>they might POSsibly MISS the TRAIN.</li>
          <li className="list-none">It's possible that they will miss the train.</li>

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

            <li value="1">i will GO to the PARTy.</li>
            <li className="list-none margin-bottom-20">I'll be at the party.</li>

            <li value="2">i might POSsibly GO to the PARTy.</li>
            <li className="list-none margin-bottom-20">I'm not sure, but it's possible that I'll go to the party.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence uses "POSsibly" to <span className="highlight-255-padding-0-4">indicate that attending the party is not entirely certain.</span></p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Degree of certainty: "POSsibly" expresses a lower degree of certainty than "<Link to="/vocabulary/DEFinitely-1">DEFinitely</Link>" or "<Link to="/vocabulary/CERtainly-1">CERtainly</Link>".</li>

          <li className="margin-bottom-20">Use in questions: It is often used in questions to ask about the likelihood of an event occurring.</li>

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