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
      
          <li id="prepoSITion1">if you STUDy HARD, you will PASS the EXAM.</li>
          <li className="margin-bottom-20 list-none">Study hard, do well on the exam, and you will pass.</li>

          <li>if it RAINS toMORrow, we will CANcel the PICnic.</li>
          <li className="margin-bottom-20 list-none">The picnic will be canceled if it rains tomorrow.</li>

          <li>we can GO for a WALK if the RAIN STOPS.</li>
          <li className="margin-bottom-20 list-none">If it stops raining, we can go for a walk.</li>

          <li id="prepoSITion2">if i had a LOT of MONey, i would TRAVel around the WORLD.</li>
          <li className="margin-bottom-20 list-none">I would travel around the world if I had a lot of money.</li>

          <li id="prepoSITion3">if she had STARTed EARlier, she would NOT have MISSED the TRAIN.</li>
          <li className="margin-bottom-20 list-none">If she had gotten on the right train, she would not have missed it.</li>

          <li>if you had STUDied HARDer YESterday, you would KNOW the ANswer NOW.</li>
          <li className="margin-bottom-20 list-none">If you had studied more yesterday, you would now know the answer.</li>
      
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
 
          <li id="NOUN">STOP WORrying a<strong>bout</strong> all the  what-ifs and FOCus on the PRESent.</li>
          <li className="list-none">Stop worrying about things that might happen and focus on what is happening now.</li>
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

          <li>proVIded that you reTURN the CAR by 5 p.M., you can BORrow it.</li>
          <li className="list-none">You can borrow the car if you return it by 5 p.m.</li>

        </ul>

      {/* =============================
            2. 
      ============================= */}

      <p className="margin-top-20" id="">2. as LONG as: This is used in everyday conversation to talk about a specific situation.</p>

        <ul className="list-square">

          <li>you can STAY HERE as LONG as you KEEP the ROOM CLEAN.</li>
          <li className="list-none">You can stay as long as you keep the room clean.</li>

        </ul>
      

      {/* =============================
            3. 
      ============================= */}

      <p className="margin-top-20" id="">3. un<strong>less</strong>: The phrase "unless otherwise" means the same as "if not," which means that something is not true.</p>

        <ul className="list-square">

          <li>we will GO to the BEACH un<strong>less</strong> it RAINS toMORrow.</li>
          <li className="list-none">Unless it rains tomorrow, we'll go to the beach.</li>

        </ul>

      {/* =============================
            4. 
      ============================= */}

      <p className="margin-top-20" id="">4. in case: Here's what to do in case: "Just in case" and "in the event that" are used to describe an action taken in advance to prepare for a situation that may occur.</p>

        <ul className="list-square">

          <li>TAKE an umBRELla in case it RAINS LAter.</li>
          <li className="list-none">Bring an umbrella in case it rains.</li>

        </ul>

      {/* =============================
            5. 
      ============================= */}

      <p className="margin-top-20" id="">5. asSUMing that: "Suppose that," or "let's assume" are used when someone is willing to accept a hypothesis as true in order to discuss what could happen as a result.</p>

        <ul className="list-square">

          <li>asSUMing that we START on TIME, we should FINish by NOON.</li>
          <li className="list-none">If we start on time, we should finish by noon.</li>

        </ul>

      {/* =============================
            6. 
      ============================= */}

      <p className="margin-top-20" id="">6. On conDITion that: There is one condition: "Provided that" is a very formal phrase often used in agreements or legal documents.</p>

        <ul className="list-square">

          <li>he was GRANTed BAIL on conDITion that he STAYED in the COUNtry.</li>
          <li className="list-none">He was allowed to leave jail as long as he stayed in the country.</li>

        </ul>

      {/* =============================
            7. 
      ============================= */}

      <p className="margin-top-20" id="">7. <strong>wheth</strong>er: "Whether... or not" is used when there is a choice between two possibilities. It has a more formal tone than "if."</p>

        <ul className="list-square">

          <li>i DON'T KNOW <strong>wheth</strong>er she will acCEPT the JOB OFfer or NOT.</li>
          <li className="list-none">I'm not sure if she will accept the job offer.</li>

        </ul>

      
      {/* =============================
            8. 
      ============================= */}

      <p className="margin-top-20" id="">8. If Only... Expressing a wish with fixed phrases</p>

        <ul className="list-square">

          <li className="list-none">if Only i had KNOWN the TRUTH EARlier, THINGS would be DIFFERent.</li>
          <li className="margin-bottom-20 list-none">If only I had known the truth before, things would have been different.</li>

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