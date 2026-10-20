import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function CLEARly1(): React.JSX.Element {

  const postId = "CLEARly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-CLEARly"><mark className="highlight-tertiary-padding-4-8">CLEARly</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">CLEARly
        <sup><Link to="/vocabulary/CLEARly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/CLEARly-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's take a closer look at the word "CLEARly."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                CLEARly \<Link to="/pronunciation/5-vowel-system">CLĒAR ly</Link>\ /ˈklɪərli/ ⬤• (TWO SYLlables)
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

      <p className="margin-top-30 text-indent-whole">The word "CLEARly" is used to emphasize that something is very easy to understand, easy to see, or completely unambiguous. It can also be used to indicate something that is clear and beyond doubt.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">she CLEARly exPLAINED the RULES.</li>
          <li className="margin-bottom-20 list-none">She made it clear what the rules were.</li>

          <li>the ANswer is CLEARly NO.</li>
          <li className="list-none">The answer is definitely no.</li>

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

          <li id="ADjective">the SKY is CLEAR toDAY.</li>
          <li className="margin-bottom-20 list-none">The sky is not cloudy today.</li>

          <li id="NOUN">the CLARity of her explaNAtion was imPRESsive.</li>
          <li className="list-none">The explanation was very clear.</li>

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

          <li><Link to="/vocabulary/OBviously-1">OBviously</Link>, he's LYing.</li>
          <li className="margin-bottom-20 list-none">He obviously isn't being honest.</li>

          <li>the ANswer is PLAINly WRONG.</li>
          <li className="list-none">The answer is obviously incorrect.</li>

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

          <li>i VAGUEly reMEMber his NAME.</li>
          <li className="margin-bottom-20 list-none">I don't remember his name very well.</li>

          <li>she SPOKE unCLEARly.</li>
          <li className="list-none">Her speech was hard to understand.</li>

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

      <p className="text-indent-whole">Imagine a very clear picture.</p>

        <ul className="list-square">

          <li>you can CLEARly SEE <strong>ever</strong>y deTAIL in the PICture.</li>
          <li className="list-none">The picture is clear and detailed.</li>

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

      <p className="text-indent-whole">Create various example sentences using the word "CLEARly" in different contexts.</p>

        <ul className="list-square">

          <li>i can CLEARly SEE the DIFFERence between the TWO.</li>
          <li className="list-none">There is a clear difference between the two.</li>

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

      <p className="text-indent-whole margin-bottom-20">Use this word frequently when you want to emphasize the clarity of an opinion.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">i underSTAND.</li>
            <li className="list-none margin-bottom-20">I get it.</li>

            <li value="2">i underSTAND CLEARly.</li>
            <li className="list-none margin-bottom-20">I understand it perfectly.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence uses "CLEARly" to <span className="highlight-255-padding-0-4">emphasize that the understanding is complete</span> and leaves no room for ambiguity.</p>

        {/* <span className="highlight-255-padding-0-4"></span> */}

      </div>

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Emphasis: "CLEARly" is often used to emphasize an opinion or a fact.</li>

          <li className="margin-bottom-20">No doubt: It indicates that there is no doubt about what is being discussed.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 4, 2024 · by 💎GEM ·</span>
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