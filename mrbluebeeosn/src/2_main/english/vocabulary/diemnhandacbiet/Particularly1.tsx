import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function parTICularly1(): React.JSX.Element {

  const postId = "parTICularly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-esPECially"><mark className="highlight-tertiary-padding-4-8">esPECially</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">parTICularly
        <sup><Link to="/vocabulary/parTICularly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/parTICularly-2">&nbsp;2&nbsp;</Link>
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
            <HashLink smooth to="#VERB">VERB</HashLink>
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
      
      <p>Great! Let's take a closer look at the word "parTICularly."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                parTIcularly \<Link to="/pronunciation/5-vowel-system">pa̛r TIC u la̛r ly</Link>\ /pəˈtɪkjələrli/ •⬤••• (FIVE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>In particular,</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "parTICularly" is used to emphasize something more than other things. It is often used to point out an event, a quality, or a person that stands out more than the rest.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">i LIKE all KINDS of FRUITS, parTICularly APples.</li>
          <li className="margin-bottom-20 list-none">I like many different kinds of fruit, especially apples.</li>

          <li>the WEATHer in VietNAM is HOT, parTICularly in the SUMmer.</li>
          <li className="list-none">It is hot in Vietnam, especially during the summer.</li>

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

          <li id="ADjective">she is <Link to="/vocabulary/VERy-1">VERy</Link> parTICular a<strong>bout</strong> her CLOTHES.</li>
          <li className="margin-bottom-20 list-none">She is very particular about what she wears.</li>

          <li id="VERB">can you parTICularize the PROBlem?</li>
          <li className="list-none">Can you explain what the problem is?</li>

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

          <li>i <Link to="/vocabulary/esPECially-1">esPECially</Link> LIKE the COLor BLUE.</li>
          <li className="margin-bottom-20 list-none">The color blue is my favorite.</li>

          <li>i'm LOOKing for a JOB speCIFically in MARketing.</li>
          <li className="list-none">I want to find a job, and I'm looking for something in the marketing field.</li>

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

          <li>GENERally, i LIKE to STAY at HOME on WEEKends.</li>
          <li className="margin-bottom-20 list-none">I like to spend my weekend at home.</li>

          <li>i reMEMber VAguely MEETing her beFORE.</li>
          <li className="list-none">I don't remember much about the time before I met her.</li>

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

      <p className="text-indent-whole">Imagine a pizza with many different toppings, and you're pointing to one of them.</p>

        <ul className="list-square">

          <li>parTICularly, i LIKE the peppeROni.</li>
          <li className="list-none">I especially like Pepperoni.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Form sentences about hobbies, characteristics, or situations using "parTICularly."</p>

        <ul className="list-square">

          <li>i enJOY WATCHing MOvies, parTICularly SCIence FICtion FILMS.</li>
          <li className="list-none">I really like watching movies, especially science fiction movies.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Use this word regularly in conversations or in writing.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">i LIKE FRUITS.</li>
            <li className="list-none margin-bottom-20">I enjoy eating fruit!</li>

            <li value="2">i parTICularly LIKE APples.</li>
            <li className="list-none margin-bottom-20">I'm a big fan of apples.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence uses "parTICularly" to <span className="highlight-255-padding-0-4">emphasize that,</span> of all the fruits, <span className="highlight-255-padding-0-4">apples are the ones the speaker likes best.</span></p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Emphasis: "parTICularly" is used to emphasize a specific point.</li>

          <li className="margin-bottom-20">Implied comparison: When we use "parTICularly," we are implicitly comparing it to other things.</li>

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