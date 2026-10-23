import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function FREquently1(): React.JSX.Element {

  const postId = "FREquently1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-Usually"><mark className="highlight-tertiary-padding-4-88">Usually</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">FREquently
        <sup><Link to="/vocabulary/FREquently-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/FREquently-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's take a closer look at the word "FREquently."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                FREquently \<Link to="/pronunciation/5-vowel-system">FRĒ que̛nt ly</Link>\ /ˈfriːkwəntli/ ⬤•• (THREE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Regularly</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "FREquently" is used to describe an action or event that occurs many times over a certain period of time. It indicates the repetitive nature of an action or event.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">she FREquently VISits her GRANDparents.</li>
          <li className="margin-bottom-20 list-none">She goes to visit her grandmother and grandfather a lot.</li>

          <li>it RAINS FREquently in this REgion.</li>
          <li className="list-none">It rains a lot in this area.</li>

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

          <li id="ADjective">he is a FREquent VISitor to the LIbrary.</li>
          <li className="margin-bottom-20 list-none">The man often visits the library.</li>

          <li id="NOUN">the FREquency of ACcidents has inCREASED.</li>
          <li className="list-none">More accidents are happening more often.</li>

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

          <li>i <Link to="/vocabulary/OFten-1">OFten</Link> GO for a WALK in the PARK.</li>
          <li className="margin-bottom-20 list-none">I like to take a walk in the park often.</li>

          <li>she REGularly atTENDS YOga CLASses.</li>
          <li className="list-none">She often goes to yoga classes.</li>

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

          <li>i <Link to="/vocabulary/RAREly-1">RAREly</Link> EAT MEAT.</li>
          <li className="margin-bottom-20 list-none">I don't eat meat very often.</li>

          <li>she <Link to="/vocabulary/SELdom-1">SELdom</Link> GOES to the MOvies.</li>
          <li className="list-none">She doesn't go to the movies very often.</li>

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

      <p className="text-indent-whole">Imagine a clock ticking, symbolizing the repetition of time.</p>

        <ul className="list-square">

          <li>the CLOCK is FREquently TICKing, reMINDing us of the CONstant PASsage of TIME.</li>
          <li className="list-none">The clock ticks often, reminding us that time is always moving.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole"></p>

        <ul className="list-square">

          <li>i FREquently DRINK COFfee in the MORNing.</li>
          <li className="list-none">I often have coffee in the morning.</li>

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

            <li value="1">i GO to the GYM.</li>
            <li className="list-none margin-bottom-20">I exercise at the gym.</li>

            <li value="2">i FREquently GO to the GYM to EXercise.</li>
            <li className="list-none margin-bottom-20">I regularly visit the gym to work out.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence uses "FREquently" to <span className="highlight-255-padding-0-4">emphasize that going to the gym is a regular activity</span> for the speaker.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Frequency: "FREquently" indicates a higher frequency than "<Link to="/vocabulary/OFten-1">OFten</Link>".</li>

          <li className="margin-bottom-20">Repetition: It emphasizes the repetitive nature of an action or event.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 2, 2024 · by 💎GEM ·</span>
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