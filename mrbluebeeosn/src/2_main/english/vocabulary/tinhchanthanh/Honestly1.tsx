import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function HONestly1(): React.JSX.Element {

  const postId = "HONestly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-sinCEREly"><mark className="highlight-tertiary-padding-4-8">sinCEREly</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">HONestly
        <sup><Link to="/vocabulary/HONestly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/HONestly-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's explore the word "HONestly" together.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                HONestly \<Link to="/pronunciation/5-vowel-system">HON est ly</Link>\ /ˈɒnɪstli/ ⬤•• (THREE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>To be honest</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "HONestly" is used to emphasize that what is being said is completely true, without any deception or exaggeration. It is often used to convey the speaker's sincerity and candor.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">HONestly, i DON'T KNOW the ANswer.</li>
          <li className="margin-bottom-20 list-none">To be honest, I'm really not sure.</li>

          <li>HONestly, i THINK you should reconSIDer your deCISion.</li>
          <li className="list-none">I think you should think again before making a decision.</li>

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

          <li id="ADjective">he is an HONest MAN.</li>
          <li className="margin-bottom-20 list-none">He is a man of integrity.</li>

          <li id="NOUN">HONesty is the BEST POLicy.</li>
          <li className="list-none">Being honest is the best policy.</li>

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

          <li>i <Link to="/vocabulary/TRUly-1">TRUly</Link> beLIEVE in you.</li>
          <li className="margin-bottom-20 list-none">I have complete faith in you.</li>

          <li>i <Link to="/vocabulary/sinCEREly-1">sinCEREly</Link> aPOLogize for my misTAKE.</li>
          <li className="list-none">I'm sorry for making a mistake.</li>

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

          <li>he LIED disHONestly a<strong>bout</strong> his qualifiCAtions.</li>
          <li className="margin-bottom-20 list-none">He wasn't honest about the things he was qualified to do.</li>

          <li>she deCEIVED him deCEITfully.</li>
          <li className="list-none">She tricked him.</li>

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

      <p className="text-indent-whole">Imagine someone placing their hand over their heart and speaking sincerely.</p>

        <ul className="list-square">

          <li>HONestly, i FEEL so GRATEful.</li>
          <li className="list-none">To be honest, I am very thankful.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create various example sentences using the word "HONestly" in different contexts.</p>

        <ul className="list-square">

          <li>HONestly, i DON'T CARE WHAT you THINK.</li>
          <li className="list-none">Honestly, your thoughts don't matter to me.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Use this word regularly in conversations and writing.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">i LIKE PIZza.</li>
            <li className="list-none margin-bottom-20">Pizza is my favorite food.</li>

            <li value="2">HONestly, i LOVE PIZza. it's my FAvorite FOOD.</li>
            <li className="list-none margin-bottom-20">To be honest, I really like pizza. It's one of my favorite foods.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence uses "HONestly" to <span className="highlight-255-padding-0-4">emphasize how much the speaker loves pizza.</span></p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Emphasizing honesty: "HONestly" is often used to emphasize that the speaker is telling the truth.</li>

          <li className="margin-bottom-20">Rhetorical questions: Sometimes, "HONestly" is used in rhetorical questions to express surprise or disagreement.</li>

          <li>HONestly, HOW could you DO THAT?</li>
          <li className="list-none">Honestly, is it even possible to do that?</li>

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