import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SO1(): React.JSX.Element {

  const postId = "SO1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-SO"><mark className="highlight-tertiary-padding-4-8">SO</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">SO
        <sup><Link to="/vocabulary/SO-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/SO-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                            
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#ADverb">ADverb</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#PROnoun">PROnoun</HashLink>
          </span> &nbsp;
          
          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#prepoSITion">prepoSITion</HashLink>
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
      
      <p>Great! Let's take a closer look at the word "SO."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                SO \<Link to="/pronunciation/5-vowel-system">SŌ</Link>\ /soʊ/ ⬤ (ONE SYLlable)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Well, then, so</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Very, extremely (ADVERB of degree): Used to emphasize the degree of an adjective or adverb.</p>

        <ul className="list-square">

          <li id="ADverb">the MOvie was SO GOOD.</li>
          <li className="margin-bottom-20 list-none">The movie was excellent.</li>

          <li>she SINGS SO BEAUtifully.</li>
          <li className="list-none">She has a beautiful singing voice.</li>

        </ul>


      {/* =============================
            VoCABulary FAMILy:
      ============================= */}
        
      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>VoCABulary FAMILy:</strong>:
        </mark>
      </p>

      <p className="margin-top-20 text-indent-whole"></p>

        <ul className="list-square">

          <li id="PROnoun">is he COMing? - "i THINK SO."</li>
          <li className="list-none">Is he coming back? "I think that's right."</li>
          <li className="margin-bottom-20 list-none">That's it, then (Used to refer back to a point already mentioned, to avoid repetition.)</li>
          
          <li id="prepoSITion">it was RAINing, so we STAYED HOME.</li>
          <li className="margin-bottom-20 list-none">It was raining, so we didn't go out.</li>

          <li>he WORKED HARD, so he GOT a proMOtion.</li>
          <li className="margin-bottom-20 list-none">He was diligent in his work and was rewarded with a promotion.</li>

          <li>she SAID she would HELP, and so she DID.</li>
          <li className="list-none">She promised to help, and she kept her word.</li>

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

          <li>the FOOD was <Link to="/vocabulary/VERy-1">VERy</Link> deLICious.</li>
          <li className="margin-bottom-20 list-none">The food was really tasty.</li>

          <li>he was ILL; THEREfore, he could NOT atTEND the MEETing.</li>
          <li className="list-none">He wasn't feeling well, so he couldn't go to the meeting.</li>

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

          <li>the MOvie was <Link to="/vocabulary/NOT-1">NOT</Link> INTEResting.</li>
          <li className="margin-bottom-20 list-none">The movie wasn't entertaining.</li>

          <li>it was COLD; howEVer, we still WENT for a WALK.</li>
          <li className="list-none">The weather was cold, but that didn't stop us from going for a walk.</li>

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

      <p className="text-indent-whole">Imagine an arrow pointing at something with a big exclamation point to show emphasis ("very!").</p>

        <ul className="list-square">

          <li>THAT is SO COOL!</li>
          <li className="margin-bottom-20 list-none">That's great!</li>

        </ul>

        <p className="text-indent-whole">Or a row of dominoes, where the first one falling causes the next one to fall, symbolizing a "therefore" relationship.</p>

        <ul className="list-square">

          <li>it STARTed to RAIN, so we WENT HOME.</li>
          <li className="list-none">We went home because it started to rain.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Focus on creating sentences in which "SO" expresses its various functions: emphasis, substitution, or simply indicating the result.</p>

        <ul className="list-square">

          <li>she was SO TIred that she FELL aSLEEP imMEdiately.</li>
          <li className="list-none">She was tired. She fell asleep right away.</li>
          <li className="margin-bottom-20 list-none">➝ "SO" emphasizes TIred: <span className="highlight-255-padding-0-4">"SO" is an ADverb</span></li>

          <li>are you COMing to the PARTy? "i THINK SO."</li>
          <li className="list-none">Bạn có đến dự tiệc không? “Tôi nghĩ là có.”</li>
          <li className="margin-bottom-20 list-none">➝ "SO" replaces OBject: <span className="highlight-255-padding-0-4">"SO" is PROnoun</span></li>

          <li>it STARTed RAINing HEAVily, so we deCIded to GO HOME.</li>
          <li className="list-none">It started pouring, so we decided to go home.</li>
          <li className="list-none">➝ "so" indicates the result: <span className="highlight-255-padding-0-4">"so" is a prepoSITion</span></li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Use "SO" regularly in everyday conversation and writing.</p>

        <p className="text-indent-whole">Examples for comparison (the difference between VERy and SO):</p>

          <ol>

            <li value="1">she was <Link to="/vocabulary/VERy-1">VERy</Link> HAPpy.</li>
            <li className="list-none">She was really pleased.</li>
            <li className="list-none margin-bottom-20">Simply indicates degree. Used to denote a high degree but is generally more objective and less emotional.</li>

            <li value="2">she was SO HAPpy that she CRIED.</li>
            <li className="list-none">She was very happy, and she started crying.</li>
            <li className="list-none">Emphasizes emotions and results. Often used to <span className="highlight-255-padding-0-4">express stronger emotions</span> or surprise at the degree of something. It can sometimes be accompanied by the word "that."</li>

          </ol>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"SO" is a very versatile word that serves many different functions in a sentence.</li>

          <li>When "SO" is an adverb of degree, it usually comes before an adjective or another adverb.</li>

          <li className="margin-bottom-20">When "so" is a conjunction, it usually appears at the beginning of a subordinate clause to indicate a result.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>JUNE 26, 2025 · by 💎GEM ·</span>
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