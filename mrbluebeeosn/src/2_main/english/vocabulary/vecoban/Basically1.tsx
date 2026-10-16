import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function BAsically1(): React.JSX.Element {

  const postId = "BAsically1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-ve-co-ban"><mark className="highlight-tertiary-padding-4-8">ADverbs: BAsically</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">BAsically
        <sup><Link to="/vocabulary/BAsically-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/BAsically-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's explore the word “Basically” together.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          {/* <p className="margin-bottom-20"><strong>Basically</strong></p> */}

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                BAsically \<Link to="/pronunciation/5-vowel-system">BĀ sic a̛lly</Link>\ /ˈbeɪsɪkli/ ⬤•• (THREE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Generally speaking</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word “Basically” is used to emphasize the main idea or the most important point of an issue, an idea, or a situation. It means “generally speaking” or “basically.”</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">BAsically, i JUST WANT to reLAX.</li>
          <li className="margin-bottom-20 list-none">The problem we face is simply that we don't have enough money.</li>

          <li>BAsically, the PROBlem is that we DON'T have eNOUGH MONey.</li>
          <li className="list-none">The problem we face is simply that we don't have enough money.</li>

        </ul>

      {/* =============================
            VoCABulary FAMILy:
      ============================= */}
        
      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>VoCABulary FAMILy</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li id="ADjective">the BAsic iDEa is VERy SIMple.</li>
          <li className="margin-bottom-20 list-none">The basic idea is very easy to understand.</li>

          <li id="NOUN">the BASE of the PYramid is VERy WIDE.</li>
          <li className="list-none">The bottom of the pyramid is wide.</li>

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

          <li>esSENtially, it's a QUESTion of MONey.</li>
          <li className="margin-bottom-20 list-none">Basically, it all boils down to money.</li>

          <li>fundaMENtally, i aGREE with you.</li>
          <li className="list-none">I agree with you on the fundamental issue.</li>

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

          <li>speCIFically, i NEED you to FInish this rePORT by FRIday.</li>
          <li className="margin-bottom-20 list-none">Please submit your report by Friday.</li>

          <li><Link to="/vocabulary/preCISEly-1">preCISEly</Link>, THAT'S WHAT i MEAN.</li>
          <li className="list-none">I meant exactly that.</li>

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

      <p className="text-indent-whole">Imagine a building with a solid foundation.</p>

        <ul className="list-square">

          <li>the BUILDing is BAsically BUILT on a STRONG founDAtion.</li>
          <li className="list-none">The building is strong and sturdy, with a solid foundation.</li>

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

      <p className="text-indent-whole">Create example sentences related to everyday situations or conversations.</p>

        <ul className="list-square">

          <li>BAsically, i JUST NEED some TIME to THINK.</li>
          <li className="list-none">All I really need is some time to think.</li>

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

      <p className="text-indent-whole margin-bottom-20">Use this word regularly in conversations or in writing.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">i LIKE to EAT VEGETables.</li>
            <li className="list-none margin-bottom-20">I like eating vegetables.</li>

            <li value="2">BAsically, i LIKE to EAT HEALthy FOOD.</li>
            <li className="list-none margin-bottom-20">I like to eat healthy food.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence uses “Basically” to provide a broader summary of the speaker's eating preferences.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Abbreviation: “BAsically” is often used to simplify a complex idea into a simpler one.</li>

          <li className="margin-bottom-20">Focus on the main idea: This helps listeners or readers easily grasp the main idea.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 8, 2024 · by 💎GEM ·</span>
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