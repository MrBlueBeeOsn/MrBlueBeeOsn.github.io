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
    
      <h4><HashLink smooth to="/vocabulary#prepoSITion-PHRASE"><mark className="highlight-tertiary-padding-4-8">prepoSITion PHRASE</mark></HashLink></h4>
      
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

      <p className="margin-bottom-30">when: (prepoSITion): It is used to connect two smaller clauses. It indicates the time when an event occurs or an action is performed.</p>

        <ul className="list-square">
      
          <li id="prepoSITion">i will CALL you when i arRIVE at the STAtion.</li>
          <li className="margin-bottom-20 list-none">I'll call you as soon as I get to the station.</li>

          <li>he LIVED in LONdon when he was a CHILD.</li>
          <li className="margin-bottom-20 list-none">He lived in London as a child.</li>

          <li>i will NEVer forGET the DAY when we FIRST MET.</li>
          <li className="list-none">I'll always remember the day we first met.</li>
          <li className="list-none">It is used to replace a noun referring to time. This noun is connected to the relative clause.</li>
      
        </ul>

      
      {/* =============================
            pronunciAtion
      ============================= */}

      <h3 className="margin-y-50 text-center">pronunciAtion</h3>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>IPA: [when] /wen/</li>
            <li className="margin-bottom-20 list-none">Note: In some regions of the UK or the U.S., such as Scotland or the Southern U.S., it may be pronounced /hwen/. However, /wen/ is the most common pronunciation today.</li>
            
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

      <p className="margin-bottom-20">The word "when" is a basic part of the English language. It doesn't become a noun, verb, or adjective by adding a suffix. However, it also includes compound words and adverbs of time and moment based on this root word:</p>

        <ul className="list-square">

          <li id="ADverb">WHEN does the MOvie START?</li>
          <li className="margin-bottom-20 list-none">When does the movie begin?</li>

          <li>you DON'T HAVE to PAY me BACK RIGHT NOW. JUST DO it wheNEVer.</li>
          <li className="list-none">You don't have to pay me back right now. Do it whenever you feel ready.</li>
          <li className="margin-bottom-20 list-none">Use it by itself.</li>

          <li>wheNEVer WILL they FINish this conSTRUCTion WORK?</li>
          <li className="list-none">Will they ever finish the construction work?</li>
          <li className="list-none">It is used in questions.</li>

        </ul>

      {/* =============================
            SYNonyms
      ============================= */}

      <h3 className="margin-y-50 text-center">SYNonyms</h3>

      <p className="margin-bottom-20">Here are words and phrases like "when" that show time or a specific moment. Each one is different.</p>

      {/* =============================
            1. 
      ============================= */}

      <p className="margin-top-20" id="">1. as: "When" and "while" are used to talk about two things happening at the same time. "While" also means that something is happening and another thing is happening at the same time.</p>

        <ul className="list-square">

          <li>as she GREW OLDer, she GAINED MORE CONfidence.</li>
          <li className="list-none">As she got older, she became more confident.</li>

        </ul>

      {/* =============================
            2. 
      ============================= */}

      <p className="margin-top-20" id="">2. while: Meanwhile, at the same time, is often used to emphasize an ongoing action. It shows that something is happening all the time, even when another event is happening.</p>

        <ul className="list-square">

          <li>the PHONE RANG while i was TAking a SHOWer.</li>
          <li className="list-none">I was taking a shower when the phone rang.</li>

        </ul>

      {/* =============================
            3. 
      ============================= */}

      <p className="margin-top-20" id="">3. once: means "immediately after." It is used when talking about an event happening right after another event.</p>

        <ul className="list-square">

          <li>once you FINish your HOMEwork, you can PLAY VIDeo GAMES.</li>
          <li className="list-none">After you complete your homework, you can watch video games.</li>

        </ul>

      {/* =============================
            4. 
      ============================= */}

      <p className="margin-top-20" id="">4. at the TIME that: "At the time when" is a more specific and formal alternative to "when" used to emphasize a precise point in time in the past or future.</p>

        <ul className="list-square">

          <li>at the TIME that the eCONomy CRASHED, <strong>man</strong>y PEOple LOST their JOBS.</li>
          <li className="list-none">A lot of people lost their jobs when the economy crashed.</li>

        </ul>

      {/* =============================
            5. 
      ============================= */}

      <p className="margin-top-20" id="">5. U<strong>pon</strong>: After: This particle is often used with a noun or an -ing form to indicate an action that occurs immediately after another action (in a formal tone).</p>

        <ul className="list-square">

          <li>u<strong>pon</strong> arRIving at the hoTEL, they WENT STRAIGHT to regisTRAtion.</li>
          <li className="list-none">When they arrived at the hotel, they immediately went to the registration desk.</li>

        </ul>

      {/* =============================
            6. 
      ============================= */}

      <p className="margin-top-20" id="">6. by the TIME: "At the time of," "as of"; used to indicate that an event has been or will be completed before a specific time mentioned later.</p>

        <ul className="list-square">

          <li>by the TIME we REACHED the CINema, the MOvie had alREADy STARTed.</li>
          <li className="list-none">By the time we got to the cinema, the movie had already begun.</li>

        </ul>


      {/* =============================
            7. 
      ============================= */}

      <p className="margin-top-20" id="">7. whe<strong>nev</strong>er: at any time, on any occasion</p>

        <ul className="list-square">

          <li>you can BORrow my CAR whe<strong>nev</strong>er you NEED it.</li>
          <li className="margin-bottom-20 list-none">You are welcome to borrow my car whenever you need it.</li>

        </ul>
      

      {/* =============================
            8. 
      ============================= */}

      <p className="margin-top-20" id="">8. whence: From where: Old-fashioned and formal.</p>

        <ul className="list-square">

          <li>they reTURNED whence they CAME.</li>
          <li className="list-none">They went back to the place they came from.</li>

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