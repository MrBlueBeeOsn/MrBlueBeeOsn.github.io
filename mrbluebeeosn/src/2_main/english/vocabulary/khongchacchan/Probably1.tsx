import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function PROBably1(): React.JSX.Element {

  const postId = "PROBably1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-MAYbe"><mark className="highlight-tertiary-padding-4-8">MAYbe</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">PROBably
        <sup><Link to="/vocabulary/PROBably-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/PROBably-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's take a closer look at the word "PROBably."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                PROBAbly \<Link to="/pronunciation/5-vowel-system">PROB ly</Link>\ /ˈprɒli/ ⬤• (TWO SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Perhaps</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "PROBably" is used to express that, while there is some uncertainty, there is a high likelihood that something will happen. It conveys a higher degree of confidence than "<Link to="/vocabulary/MAYbe-1">MAYbe</Link>" but a lower degree than "<Link to="/vocabulary/CERtainly-1">CERtainly</Link>".</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">i'll PROBably be HOME by 10.</li>
          <li className="margin-bottom-20 list-none">I will likely arrive home by 10 p.m.</li>

          <li>she PROBably KNOWS the ANswer.</li>
          <li className="list-none">She likely has the answer.</li>

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

          <li id="ADjective">it's PROBable that it will RAIN <Link to="/vocabulary/toMORrow-1">toMORrow</Link>.</li>
          <li className="margin-bottom-20 list-none">Rain is likely tomorrow.</li>

          <li id="NOUN">the probaBILity of WINning is LOW.</li>
          <li className="list-none">There's a low chance of winning.</li>

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

          <li>it's LIKEly to RAIN.</li>
          <li className="margin-bottom-20 list-none">It is likely that there will be rain.</li>

          <li>it's <Link to="/vocabulary/POSsibly-1">Possibly</Link> the BEST soLUtion.</li>
          <li className="list-none">This solution might be the best one.</li>

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

          <li>i'm <Link to="/vocabulary/DEFinitely-1">DEFinitely</Link> GOing.</li>
          <li className="margin-bottom-20 list-none">I am certainly going to attend.</li>

          <li>it's unLIKEly that he will COME.</li>
          <li className="list-none">It doesn't seem probable that he will come.</li>

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

      <p className="text-indent-whole">Imagine a dark cloud in the sky.</p>

        <ul className="list-square">

          <li>it will PROBably RAIN.</li>
          <li className="list-none">There's a good chance that it will rain.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create various example sentences using the word "PROBably" in different contexts.</p>

        <ul className="list-square">

          <li>i'll PROBably EAT DINner at HOME toNIGHT.</li>
          <li className="list-none">Tonight, I'll probably have dinner at home.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Use this word frequently in everyday conversations.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">i might GO to the PARTy.</li>
            <li className="list-none margin-bottom-20">I'm considering going to the party.</li>

            <li value="2">i'll PROBably GO to the PARTy.</li>
            <li className="list-none margin-bottom-20">I'll likely attend the party.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence uses "PROBably" to <span className="highlight-255-padding-0-4">express a higher likelihood of attending the party</span> than the first sentence, which uses "might."</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Degree of certainty: "PROBably" expresses a moderate degree of certainty—neither too certain nor too vague.</li>

          <li className="margin-bottom-20">Prediction: It is often used to make predictions about the future or to express uncertainty about a particular piece of information.</li>

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