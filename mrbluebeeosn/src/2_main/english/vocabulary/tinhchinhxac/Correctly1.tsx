import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function corRECTly1(): React.JSX.Element {

  const postId = "corRECTly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-eXACTly"><mark className="highlight-tertiary-padding-4-8">ADverbs: eXACTly </mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">corRECTly
        <sup><Link to="/vocabulary/corRECTly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/corRECTly-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's take a closer look at the word "corRECTly."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                 corRECTly \<Link to="/pronunciation/5-vowel-system">cơr RECT ly</Link>\ /kəˈrektli/ •⬤• (THREE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Right</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>
      
      </div>

      <p className="margin-top-30 text-indent-whole">The word "corRECTly" is used to indicate that an action, answer, or piece of information is correct and free of errors. It conveys accuracy and precision.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">she ANswered all the QUESTions corRECTly.</li>
          <li className="margin-bottom-20 list-none">She got all the questions right.</li>

          <li>PLEASE MAKE SURE you FILL in the FORM corRECTly.</li>
          <li className="list-none">Please be sure to fill out the form correctly.</li>

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

          <li id="ADjective">your ANswer is corRECT.</li>
          <li className="margin-bottom-20 list-none">You got the right answer.</li>

          <li id="NOUN">the TEACHer MADE a corRECtion to my ESsay.</li>
          <li className="list-none">My essay was corrected by the teacher.</li>

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

          <li>the DAta was reCORDed <Link to="/vocabulary/ACcurately-1">ACcurately</Link>.</li>
          <li className="margin-bottom-20 list-none">The information was recorded correctly.</li>

          <li>he exPLAINED the situAtion <Link to="/vocabulary/preCISEly-1">preCISEly</Link>.</li>
          <li className="list-none">He explained the situation in a way that was easy to understand.</li>

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

          <li>he ANswered the QUESTion incorRECTly.</li>
          <li className="margin-bottom-20 list-none">He didn't answer the question right.</li>

          <li>she was TREATed imPROPerly.</li>
          <li className="list-none">The way she was treated wasn't good.</li>

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

      <p className="text-indent-whole">Imagine a student taking a test and checking the correct answer.</p>

        <ul className="list-square">

          <li>the STUdent is CAREfully MARKing the ANswers corRECTly, enSURing a HIGH SCORE.</li>
          <li className="list-none">The student is carefully choosing the right answers to get a high score.</li>

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

      <p className="text-indent-whole">Create various example sentences using the word "correctly" in different contexts.</p>

        <ul className="list-square">

          <li>if you WANT to USE the maCHINE, you MUST FOLlow the inSTRUCtions corRECTly.</li>
          <li className="list-none">To use the machine properly, follow the instructions.</li>

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

            <li value="1">he ANswered the QUESTion.</li>
            <li className="list-none margin-bottom-20">He replied to the question.</li>

            <li value="2">he ANswered the QUESTion corRECTly.</li>
            <li className="list-none margin-bottom-20">He gave the right answer to the question.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence <span className="highlight-255-padding-0-4">emphasizes that his answer is not just an answer</span>, but the correct one.</p>

      </div>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Difference from "RIGHT": "correctly" is often used to describe how something is done, while "RIGHT" simply means correct.</li>

          <li className="margin-bottom-20">Process: "correctly" emphasizes accuracy in the process of performing an action.</li>

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