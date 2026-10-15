import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function When(): React.JSX.Element {

  const postId = "When";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#prepoSITion-terms"><mark className="highlight-tertiary-padding-4-8">prepoSITion</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">when</h1>

      <div className="example">
                                            
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#prepoSITion">prepoSITion</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#ADverb">ADverb</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p className="margin-bottom-30">when: (prepoSITion): Used to connect two subordinate clauses, indicating the time when an event occurs or an action is performed.</p>

        <ul className="list-square">
      
          <li id="prepoSITion">i will CALL you when i arRIVE at the STAtion.</li>
          <li className="margin-bottom-20 list-none">I'll phone you when I get to the station.</li>

          <li>he LIVED in LONdon when he was a CHILD.</li>
          <li className="margin-bottom-20 list-none">He lived in London when he was a child.</li>

          <li>i will NEVer forGET the DAY when we FIRST MET.</li>
          <li className="margin-bottom-20 list-none">I will always remember the day we first met.</li>
          <li className="list-none">Used to replace a NOUN referring to time that precedes and is directly connected to the relative clause.</li>
      
        </ul>

      
      {/* =============================
            pronunciAtion
      ============================= */}

      <h3 className="margin-y-50 text-center">pronunciAtion</h3>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>IPA: [when] /wen/</li>
            <li className="margin-bottom-20 list-none">Note: In some regions of the UK or the U.S. (such as Scotland or the Southern U.S.), it may be pronounced /hwen/, but /wen/ is the most common pronunciation today.</li>
            
            <li>phoNETic BREAKdown: wen</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      {/* =============================
            WORD FAMILy
      ============================= */}

      <h3 className="margin-y-50 text-center">WORD FAMILy</h3>

      <p className="margin-bottom-20">The word "when" is a core function word in English; it does not change into a noun, verb, or adjective by adding a suffix. However, its word family includes compound words and adverbs of time and moment based on this root word:</p>

        <ul className="list-square">

          <li id="ADverb">WHEN does the MOvie START?</li>
          <li className="margin-bottom-20 list-none">When is the film being shown?</li>

          <li>you DON'T HAVE to PAY me BACK RIGHT NOW. JUST DO it wheNEVer.</li>
          <li className="list-none">You don't have to pay me back now. You can pay me back at any time.</li>
          <li className="margin-bottom-20 list-none">Use on its own.</li>

          <li>wheNEVer WILL they FINish this conSTRUCTion WORK?</li>
          <li className="list-none">When will the building work be finished?</li>
          <li className="list-none">Used in interrogative sentences.</li>

        </ul>

      {/* =============================
            SYNonyms
      ============================= */}

      <h3 className="margin-y-50 text-center">SYNonyms</h3>

      <p className="margin-bottom-20">Below are words and phrases that function similarly to "when" to indicate time or a specific moment, each with its own structure and nuance.</p>

      {/* =============================
            1. 
      ============================= */}

      <p className="margin-top-20" id="">1. as: When, while; used when two brief actions occur at the same time, or when one action is in progress and another interrupts it.</p>

        <ul className="list-square">

          <li>as she GREW OLDer, she GAINED MORE CONfidence.</li>
          <li className="list-none">As she got older, she became more confident.</li>

        </ul>

      {/* =============================
            2. 
      ============================= */}

      <p className="margin-top-20" id="">2. while: Meanwhile, at the same time; often used to emphasize an action that is ongoing and taking place continuously at the moment another event occurs.</p>

        <ul className="list-square">

          <li>the PHONE RANG while i was TAking a SHOWer.</li>
          <li className="list-none">I was having a shower when the phone rang.</li>

        </ul>

      {/* =============================
            3. 
      ============================= */}

      <p className="margin-top-20" id="">3. once: "immediately after"; used to emphasize that once this event is completed or occurs, then that event takes place.</p>

        <ul className="list-square">

          <li>once you FINish your HOMEwork, you can PLAY VIDeo GAMES.</li>
          <li className="list-none">When you've finished your homework, you can play video games.</li>

        </ul>

      {/* =============================
            4. 
      ============================= */}

      <p className="margin-top-20" id="">4. at the TIME that: "At the time when"; a more specific and formal alternative to "when" used to emphasize a precise point in time in the past or future.</p>

        <ul className="list-square">

          <li>at the TIME that the eCONomy CRASHED, <strong>man</strong>y PEOple LOST their JOBS.</li>
          <li className="list-none">When the economy crashed, many people lost their jobs.</li>

        </ul>

      {/* =============================
            5. 
      ============================= */}

      <p className="margin-top-20" id="">5. U<strong>pon</strong>: When, immediately after; this PARTICLE is often used with a NOUN or a -ing form to indicate an action that occurs immediately after another action (with a formal tone).</p>

        <ul className="list-square">

          <li>u<strong>pon</strong> arRIving at the hoTEL, they WENT STRAIGHT to regisTRAtion.</li>
          <li className="list-none">When they got to the hotel, they went straight to the registration desk.</li>

        </ul>

      {/* =============================
            6. 
      ============================= */}

      <p className="margin-top-20" id="">6. By the TIME: "At the time of," "as of"; used to indicate that an event has been or will be completed before a specific time mentioned in the following clause.</p>

        <ul className="list-square">

          <li>by the TIME we REACHED the CINema, the MOvie had alREADy STARTed.</li>
          <li className="list-none">When we got to the cinema, the film had already started.</li>

        </ul>


      {/* =============================
            7. 
      ============================= */}

      <p className="margin-top-20" id="">7. whe<strong>nev</strong>er</p>

        <ul className="list-square">

          <li>you can BORrow my CAR whe<strong>nev</strong>er you NEED it.</li>
          <li className="margin-bottom-20 list-none">You can borrow my car whenever you need it.</li>

        </ul>
      

      {/* =============================
            8. 
      ============================= */}

      <p className="margin-top-20" id="">8. whence: Archaic / Formal</p>

        <ul className="list-square">

          <li>they reTURNED whence they CAME.</li>
          <li className="list-none">They went back to where they came from.</li>

        </ul>


      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>MAY 26, 2026 · by 💎GEM ·</span>
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