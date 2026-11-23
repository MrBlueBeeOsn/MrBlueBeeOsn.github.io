import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function If(): React.JSX.Element {

  const postId = "If";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#prepoSITion-PHRASE"><mark className="highlight-tertiary-padding-4-8">prepoSITion PHRASE</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">if</h1>

      <div className="example">
                                            
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#prepoSITion1">prepoSITion 1</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#prepoSITion2">prepoSITion 2</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#prepoSITion3">prepoSITion 3</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#NOUN">NOUN</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p className="margin-bottom-30"><strong>if</strong> (prepoSITion): Let's suppose that... This word is used to introduce a conditional clause. A conditional clause expresses a hypothetical situation, a possible outcome, or a necessary condition for something else to happen. Additionally, in indirect speech, it also means "whether or not."</p>

        <ul className="list-square">
      
          <li id="prepoSITion1">if you <span className="pill-teal">STUDy</span> HARD, you <span className="pill-teal">will PASS</span> the EXAM.</li>
          <li className="margin-bottom-20 list-none"><span className="pill-teal">Study</span> hard, <span className="pill-teal">do</span> well on the exam, and you <span className="pill-teal">will pass.</span></li>

          <li>if it <span className="pill-teal">RAINS</span> toMORrow, we <span className="pill-teal">will CANcel</span> the PICnic.</li>
          <li className="margin-bottom-20 list-none">The picnic <span className="pill-teal">will be canceled</span> if it <span className="pill-teal">rains</span> tomorrow.</li>

          <li>we <span className="pill-teal">can GO</span> for a WALK if the RAIN <span className="pill-teal">STOPS.</span></li>
          <li className="margin-bottom-20 list-none">If it stops raining, we can go for a walk.</li>

          <li id="prepoSITion2">if i <span className="pill-teal">had</span> a LOT of MONey, i <span className="pill-teal">would TRAVel</span> around the WORLD.</li>
          <li className="margin-bottom-20 list-none">I <span className="pill-teal">would travel</span> around the world if I <span className="pill-teal">had</span> a lot of money.</li>

          <li id="prepoSITion3">if she <span className="pill-teal">had STARTed</span> EARlier, she <span className="pill-teal">would NOT have MISSED</span> the TRAIN.</li>
          <li className="margin-bottom-20 list-none">If she <span className="pill-teal">had gotten</span> on the right train, she <span className="pill-teal">would not have missed</span> it.</li>

          <li>if you <span className="pill-teal">had STUDied</span> HARDer YESterday, you <span className="pill-teal">would KNOW</span> the ANswer NOW.</li>
          <li className="margin-bottom-20 list-none">If you <span className="pill-teal">had studied</span> more yesterday, you <span className="pill-teal">would</span> now <span className="pill-teal">know</span> the answer.</li>
      
        </ul>

      {/* =============================
            pronunciAtion
      ============================= */}

      <h3 className="margin-y-50 text-center">pronunciAtion</h3>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>IPA: [if] /ɪf/</li>
            <li>phoNETic BREAKdown: if</li>

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

      <p className="margin-bottom-20">The word "if" is a short preposition. It does not have any inflected forms created by adding prefixes or suffixes. However, it belongs to a group of words and grammatical phrases that express conditions or assumptions and share the same functional nature.</p>

        <ul className="list-square">
 
          <li id="NOUN"><span className="pill-teal">STOP WORrying</span> a<strong>bout</strong> all the  what-ifs and <span className="pill-teal">FOCus on</span> the PRESent.</li>
          <li className="list-none"><span className="pill-teal">Stop worrying</span> about things that <span className="pill-teal">might happen</span> and <span className="pill-teal">focus on</span> what <span className="pill-teal">is happening</span> now.</li>
          <li className="list-none">Note about the context: The plural form "what-ifs" is commonly used. Stop worrying about the future and focus on the present.</li>

        </ul>

      {/* =============================
            SYNonyms
      ============================= */}

      <h3 className="margin-y-50 text-center">SYNonyms</h3>

      <p className="margin-bottom-20">Below are words and phrases that are like "if" and are used to create a situation or idea, each with its own unique detail.</p>

      {/* =============================
            1. 
      ============================= */}

      <p className="margin-top-20" id="">1. proVIded that or proVIding that: These expressions are more formal and place greater emphasis on the condition than "if".</p>

        <ul className="list-square">

          <li><span className="pill-teal">proVIded</span> that you reTURN the CAR by 5 p.M., you <span className="pill-teal">can BORrow</span> it.</li>
          <li className="list-none">You <span className="pill-teal">can borrow</span> the car if you <span className="pill-teal">return</span> it by 5 p.m.</li>

        </ul>

      {/* =============================
            2. 
      ============================= */}

      <p className="margin-top-20" id="">2. as LONG as: This is used in everyday conversation to talk about a specific situation.</p>

        <ul className="list-square">

          <li>you <span className="pill-teal">can STAY</span> HERE as LONG as you <span className="pill-teal">KEEP</span> the ROOM CLEAN.</li>
          <li className="list-none">You <span className="pill-teal">can stay</span> as long as you <span className="pill-teal">keep</span> the room clean.</li>

        </ul>
      

      {/* =============================
            3. 
      ============================= */}

      <p className="margin-top-20" id="">3. un<strong>less</strong>: The phrase "unless otherwise" means the same as "if not," which means that something is not true.</p>

        <ul className="list-square">

          <li>we <span className="pill-teal">will GO</span> to the BEACH un<strong>less</strong> it <span className="pill-teal">RAINS</span> toMORrow.</li>
          <li className="list-none">Unless it <span className="pill-teal">rains</span> tomorrow, we<span className="pill-teal">'ll go</span> to the beach.</li>

        </ul>

      {/* =============================
            4. 
      ============================= */}

      <p className="margin-top-20" id="">4. in case: Here's what to do in case: "Just in case" and "in the event that" are used to describe an action taken in advance to prepare for a situation that may occur.</p>

        <ul className="list-square">

          <li><span className="pill-teal">TAKE</span> an umBRELla in case it <span className="pill-teal">RAINS</span> LAter.</li>
          <li className="list-none"><span className="pill-teal">Bring</span> an umbrella in case it <span className="pill-teal">rains.</span></li>

        </ul>

      {/* =============================
            5. 
      ============================= */}

      <p className="margin-top-20" id="">5. asSUMing that: "Suppose that," or "let's assume" are used when someone is willing to accept a hypothesis as true in order to discuss what could happen as a result.</p>

        <ul className="list-square">

          <li><span className="pill-teal">asSUMing</span> that we <span className="pill-teal">START</span> on TIME, we <span className="pill-teal">should FINish</span> by NOON.</li>
          <li className="list-none">If we <span className="pill-teal">start</span> on time, we <span className="pill-teal">should finish</span> by noon.</li>

        </ul>

      {/* =============================
            6. 
      ============================= */}

      <p className="margin-top-20" id="">6. On conDITion that: There is one condition: "Provided that" is a very formal phrase often used in agreements or legal documents.</p>

        <ul className="list-square">

          <li>he <span className="pill-teal">was GRANTed</span> BAIL on conDITion that he <span className="pill-teal">STAYED</span> in the COUNtry.</li>
          <li className="list-none">He <span className="pill-teal">was allowed</span> to <span className="pill-teal">leave</span> jail as long as he <span className="pill-teal">stayed</span> in the country.</li>

        </ul>

      {/* =============================
            7. 
      ============================= */}

      <p className="margin-top-20" id="">7. <strong>wheth</strong>er: "Whether... or not" is used when there is a choice between two possibilities. It has a more formal tone than "if."</p>

        <ul className="list-square">

          <li>i <span className="pill-teal">DON'T KNOW</span> <strong>wheth</strong>er she <span className="pill-teal">will acCEPT</span> the JOB OFfer or NOT.</li>
          <li className="list-none">I<span className="pill-teal">'m</span> not sure if she <span className="pill-teal">will accept</span> the job offer.</li>

        </ul>

      
      {/* =============================
            8. 
      ============================= */}

      <p className="margin-top-20" id="">8. If Only... Expressing a wish with fixed phrases</p>

        <ul className="list-square">

          <li>if Only i <span className="pill-teal">had KNOWN</span> the TRUTH EARlier, THINGS <span className="pill-teal">would be</span> DIFFERent.</li>
          <li className="margin-bottom-20 list-none">If only I <span className="pill-teal">had known</span> the truth before, things <span className="pill-teal">would have been</span> different.</li>

        </ul>
          

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>MAY 25, 2025 · by 💎GEM ·</span>
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