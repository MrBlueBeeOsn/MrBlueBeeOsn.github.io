import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function PAtiently2(): React.JSX.Element {

  const postId = "PAtiently2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-PAtiently"><mark className="highlight-tertiary-padding-4-8">PAtiently</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">PAtiently
        <sup>
          <Link to="/vocabulary/PAtiently-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/PAtiently-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#WAITed-for">WAITed for</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#LIStened-to">LIStened to</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#exPLAINED">exPLAINED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#TAUGHT">TAUGHT</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#WORKED-on">WORKED on</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#enDURED">enDURED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#GUIded">GUIded</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#obSERVED">obSERVED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#corRECTed">corRECTed</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#NURtured">NURtured</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let's take a closer look at the word "patiently" and some common phrases that go with it.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              PAtiently \<Link to="/pronunciation/5-vowel-system">PĀ tie̛nt ly</Link>\ /ˈpeɪ.ʃənt.li/ ⬤•• (THREE SYLlables)
              
            </span>
              
            &nbsp;is often used to describe an action or situation that unfolds patiently, without haste or impatience.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="WAITed-for">she PAtiently WAITed for her TURN.</li>
        <li className="list-none margin-bottom-20">She waited for her chance without rushing.</li>

        <li value="2" id="LIStened-to">he PAtiently LIStened to the LONG explaNAtion.</li>
        <li className="list-none margin-bottom-20">He listened to the long explanation without interrupting.</li>

        <li value="3" id="exPLAINED">the TEAcher PAtiently exPLAINED the LESson aGAIN.</li>
        <li className="list-none margin-bottom-20">The teacher explained the lesson again in a patient way.</li>

        <li value="4" id="TAUGHT">she PAtiently TAUGHT her CHILD HOW to READ.</li>
        <li className="list-none margin-bottom-20">She taught her child to read, taking the time to do so.</li>

        <li value="5" id="WORKED-on">they PAtiently WORKED on the DIFficult PROJect.</li>
        <li className="list-none margin-bottom-20">They put a lot of time and effort into the difficult project.</li>

        <li value="6" id="enDURED">he PAtiently enDURED the PAIN.</li>
        <li className="list-none margin-bottom-20">He didn't let the pain stop him.</li>

        <li value="7" id="GUIded">the TOUR GUIDE PAtiently GUIded the GROUP through the muSEum.</li>
        <li className="list-none margin-bottom-20">The tour guide led the group through the museum slowly and carefully.</li>

        <li value="8" id="obSERVED">the SCIentist PAtiently obSERVED the exPERiment.</li>
        <li className="list-none margin-bottom-20">The scientist watched the experiment carefully.</li>

        <li value="9" id="corRECTed">she PAtiently corRECTed the STUdent's misTAKES.</li>
        <li className="list-none margin-bottom-20">She corrected the student's mistakes slowly and correctly.</li>

        <li value="10" id="NURtured">they PAtiently NURtured the YOUNG PLANTS.</li>
        <li className="list-none margin-bottom-20">They took care of the young plants, waiting for them to grow.</li>

      </ol>

      <p>** All of the above phrases emphasize patience and the lack of haste in an action or situation. They are often used to describe situations that require calmness and perseverance.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"Patiently" is often used before a verb to modify it.</li>

          <li className="margin-bottom-20">This word has a positive connotation, expressing patience and calmness.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping this information is helpful to you! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>April 5, 2025 · by 💎GEM ·</span>
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