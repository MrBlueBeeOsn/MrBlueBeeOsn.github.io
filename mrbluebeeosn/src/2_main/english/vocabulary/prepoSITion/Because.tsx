import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Because(): React.JSX.Element {

  const postId = "Because";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#prepoSITion-PHRASE"><mark className="highlight-tertiary-padding-4-8">prepoSITion PHRASE</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">be<strong>cause</strong></h1>

      <div className="example">
                                            
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#prepoSITion">prepoSITion</HashLink>
          </span> &nbsp;
          
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

      <p className="margin-bottom-30">be<strong>cause</strong> (prepoSITion): This word is used to introduce a clause that states the cause or reason for a previous event or action.</p>
      
        <ul className="list-square">
      
          <li id="prepoSITion">we STAYED inDOORS be<strong>cause</strong> it was RAINing HEAVily.</li>
          <li className="margin-bottom-20 list-none">We did not go outside because it was raining a lot.</li>

          <li>i PASSED the eXAM be<strong>cause</strong> i STUDied HARD <strong>ever</strong>y NIGHT.</li>
          <li className="list-none">I passed the exam because I studied hard every night.</li>
      
        </ul>

      {/* =============================
            pronunciAtion
      ============================= */}

      <h3 className="margin-y-50 text-center">pronunciAtion</h3>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>IPA: [beCAUSE][be CAUSE] /bɪˈkɒz/ (UK) hoặc /bɪˈkɔːz/ (US)</li>
            <li>phoNETic BREAKdown: bih-KAWZ</li>

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

      <p className="margin-bottom-20">The word "because" originally came from the phrase "by CAUSE of." So, words in this language are based on the root word "CAUSE".</p>

        <ul className="list-square">
        
          <li id="prepoSITion">the FLIGHT was deLAYED be<strong>cause</strong> of the THICK FOG.</li>
          <li className="margin-bottom-20 list-none">The plane could not take off because there was too much fog.</li>
        
          <li id="ADjective">there is a CLEAR CAUsal LINK between POVerty and LACK of eduCAtion.</li>
          <li className="margin-bottom-20 list-none">There is a clear link between being poor and not having a good education.</li>

          <li id="NOUN">the poLICE are TRYing to FIND the CAUSE of the ACcident.</li>
          <li className="margin-bottom-20 list-none">The police are trying to figure out what caused the accident.</li>
          
          <li>the STUDy inVEStigates the LAW of cauSALity in HUman beHAvior.</li>
          <li className="margin-bottom-20 list-none">The study looks at how people's thoughts and actions are related to each other.</li>

          <li>the reSEARCH PROVED a STRONG cauSAtion between SMOking and LUNG diSEASE.</li>
          <li className="margin-bottom-20 list-none">Research showed a clear link between smoking and lung disease.</li>

          <li id="VERB">the HEAVy RAIN could CAUSE seVERE FLOODing in LOW-LYing AReas.</li>
          <li className="margin-bottom-20 list-none">Heavy rain could cause major flooding in low-lying areas.</li>

          <li id="ADverb">the TWO hisTORical eVENTS are CAUsally reLAted to EACH OTHer.</li>
          <li className="margin-bottom-20 list-none">There is usually a connection between the two historical events.</li>
          

        </ul>

      {/* =============================
            SYNonyms
      ============================= */}

      <h3 className="margin-y-50 text-center">SYNonyms</h3>

      <p className="margin-bottom-20">Here are some different ways to say "because" that have different meanings or structures.</p>

      {/* =============================
            1. 
      ============================= */}

      <p className="margin-top-20" id="">1. since: Use this when the reason is already known to everyone involved, or when the reason is less important than the outcome.</p>

        <ul className="list-square">

          <li>since you are alREADy HERE, you can HELP us with DINner.</li>
          <li className="list-none">Since you're already here, you can cook dinner.</li>

        </ul>

      {/* =============================
            2. 
      ============================= */}

      <p className="margin-top-20" id="">2. as: It is usually written in a slightly more formal style, and it generally places the main clause—the clause that explains the reason or reason for something - at the beginning of the sentence..</p>

        <ul className="list-square">

          <li>as the WEAther was BAD, the OUTdoor FLIGHT was CANceled.</li>
          <li className="list-none">Since the weather was bad, the flight outside was canceled.</li>

        </ul>

      {/* =============================
            3. 
      ============================= */}

      <p className="margin-top-20" id="">3. GIVen that: The phrase "given that" is often used when talking about something that led to a certain conclusion.</p>

        <ul className="list-square">

          <li>GIVen that she has no PRIor exPErience, she DID a WONderful JOB.</li>
          <li className="list-none">She did a great job, especially since she didn't have any previous experience.</li>

        </ul>

      {/* =============================
            4. 
      ============================= */}

      <p className="margin-top-20" id="">4. NOW that: "Now" is used to talk about something new that has happened and is causing a result in the present or future.</p>

        <ul className="list-square">

          <li>NOW that the eXAMS are OVer, we can FInally reLAX.</li>
          <li className="list-none">Now that the exams are done, we can finally relax.</li>

        </ul>

      {/* =============================
            5. 
      ============================= */}

      <p className="margin-top-20" id="">5. SEEing that: People often use "see" in spoken language when the reason is obvious or has just been realized.</p>

        <ul className="list-square">

          <li>SEEing that it is getting LATE, we should PROBably HEAD HOME.</li>
          <li className="list-none">It's getting late, so we should probably head home.</li>

        </ul>

      {/* =============================
            6. 
      ============================= */}

      <p className="margin-top-20" id="">6. for: A preposition is a word that connects nouns or pronouns in a sentence. It can also add a formal, literary, or archaic tone to a sentence, explaining what the previous statement means.</p>

        <ul className="list-square">

          <li>we must START EARly, for the JOURney is LONG.</li>
          <li className="list-none">We have to begin early because the journey takes a long time.</li>

        </ul>

      {/* =============================
            7. 
      ============================= */}

      <p className="margin-top-20" id="">7. in that: "Because" is used to explain or clarify a previous statement by giving a specific reason.</p>

        <ul className="list-square">

          <li>this comPUter is uNIQUE in that it can THINK like a HUman.</li>
          <li className="list-none">This computer is different from all the others because it can think like a person.</li>

        </ul>

      {/* =============================
            8. 
      ============================= */}

      <p className="margin-top-20" id="">8. On the GROUNDS that: The reason is as follows: "Based on the fact that" is often used in formal or legal contexts when presenting arguments or evidence.</p>

        <ul className="list-square">

          <li>he was acQUITTED on the GROUNDS that there was insufFICient EVidence.</li>
          <li className="list-none">He was found not guilty because there wasn't enough evidence.</li>

        </ul>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>MAY 18, 2026 · by 💎GEM ·</span>
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