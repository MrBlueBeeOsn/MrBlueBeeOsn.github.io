import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function atTRACtive(): React.JSX.Element {

  const postId = "atTRACtive";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADjectives-terms"><mark className="highlight-tertiary-padding-4-8">ADjectives</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">atTRACtive</h1>

      <div className="example">
                                            
        <p className="example-sentence text-center">

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#ADjective">ADjective</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#NOUN">NOUN</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#VERB">VERB</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#ADverb">ADverb</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p className="margin-bottom-30"><strong>atTRACtive</strong> (ADjective): Captivating, fascinating, alluring. This term refers to a person or object that possesses qualities that attract attention, arouse interest, or inspire goodwill.</p>

        <ul className="list-square">
      
          <li id="ADjective">the NEW JOB OFfer CAME with a VERy atTRACtive SALary.</li>
          <li className="margin-bottom-20 list-none">The new job on offer paid a lot.</li>

          <li>he has a VERy atTRACtive SMILE.</li>
          <li className="list-none">He has a very nice smile.</li>
      
        </ul>

      {/* =============================
            pronunciAtion
      ============================= */}

      <h3 className="margin-y-50 text-center">pronunciAtion</h3>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>IPA: [a̛t TRAC tive] /əˈtræk.tɪv/</li>
            <li>phoNETic BREAKdown: uh-TRAK-tiv</li>

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

      <p className="margin-bottom-20">Mastering words with the same root gives you greater flexibility in expressing the same idea using different types of words.</p>

        <ul className="list-square">

          <li id="NOUN">the Eiffel TOWer is a MAjor TOUrist atTRACtion in PARis.</li>
          <li className="margin-bottom-20 list-none">The Eiffel Tower is a popular tourist attraction in Paris.</li>

          <li>the PHYSical atTRACtiveness of the PROduct deSIGN HELPED inCREASE SALES.</li>
          <li className="margin-bottom-20 list-none">The product's looks helped to sell more of it.</li>

          <li id="VERB">BRIGHT COLors OFten atTRACT BUTterflies to the GARden.</li>
          <li className="margin-bottom-20 list-none">Bright colours attract butterflies to your garden.</li>

          <li id="ADverb">the TAble was atTRACtively DEcorated with FLOWers and CANdles.</li>
          <li className="list-none">The table was nicely decorated with flowers and candles.</li>

        </ul>

      {/* =============================
            SYNonyms
      ============================= */}

      <h3 className="margin-y-50 text-center">SYNonyms</h3>

      <p className="margin-bottom-40">Below are words with similar meanings but different nuances of usage.</p>

      {/* =============================
            1. 
      ============================= */}

      <p className="margin-top-20" id=""><strong>1. apPEALing</strong>: To evoke interest or desire; often used in reference to ideas or choices.</p>

        <ul className="list-square">

          <li>the iDEa of a LONG vaCAtion is VERy apPEALing to me RIGHT NOW.</li>
          <li className="list-none">I really want to go on a long vacation.</li>

        </ul>

      {/* =============================
            2. 
      ============================= */}

      <p className="margin-top-20" id=""><strong>2. alLURing</strong>: It has a powerful allure, often of a mysterious or seductive nature.</p>

        <ul className="list-square">

          <li>the TROPical Island has an alLURing ATmosphere that DRAWS VISitors <strong>ever</strong>y YEAR.</li>
          <li className="list-none">Every year, the tropical island attracts visitors with its beautiful atmosphere.</li>

        </ul>

      {/* =============================
            3. 
      ============================= */}

      <p className="margin-top-20" id=""><strong>3. CAPtivating</strong>: To captivate someone and hold their full attention.</p>

        <ul className="list-square">

          <li>her CAPtivating perFORmance HELD the AUdience’s atTENtion un<strong>til</strong> the VERy END.</li>
          <li className="list-none">The audience was captivated by her performance from start to finish.</li>

        </ul>

      {/* =============================
            4. 
      ============================= */}

      <p className="margin-top-20" id=""><strong>4. CHARMing</strong>: Graceful, with a gentle charm and endearing personality.</p>

        <ul className="list-square">

          <li>we STAYED in a CHARMing LITtle COTtage by the SEA.</li>
          <li className="list-none">We stayed in a lovely little cottage by the sea.</li>

        </ul>

      {/* =============================
            5.  
      ============================= */}

      <p className="margin-top-20" id=""><strong>5. enGAging</strong>: Captivating; something that makes others want to participate or interact.</p>

        <ul className="list-square">

          <li>the SPEAker had an enGAging persoNALity that MADE the LECture enJOYable.</li>
          <li className="list-none">The speaker was fun and interesting, which made the lecture fun.</li>

        </ul>

      {/* =============================
            6. 
      ============================= */}

      <p className="margin-top-20" id=""><strong>6. FAScinating</strong>: It's incredibly fascinating - you can't take your eyes off it or stop thinking about it.</p>

        <ul className="list-square">

          <li>i FOUND the docuMENtary a<strong>bout</strong> DEEP-SEA CREAtures ABsolutely FAScinating.</li>
          <li className="list-none">I thought the documentary about deep-sea creatures was really interesting.</li>

        </ul>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>April 27, 2026 · by 💎GEM ·</span>
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