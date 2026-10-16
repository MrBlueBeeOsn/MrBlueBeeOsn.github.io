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
    
      <h4><HashLink smooth to="/vocabulary#prepoSITion-terms"><mark className="highlight-tertiary-padding-4-8">prepoSITion</mark></HashLink></h4>
      
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

      <p className="margin-bottom-30"><strong>if</strong> (prepoSITion): Suppose. This word is used to introduce a conditional clause, expressing a hypothetical situation, a possible outcome, or a necessary condition for something else to happen. Additionally, in indirect speech, it also means "whether or not."</p>

        <ul className="list-square">
      
          <li id="prepoSITion1">if you STUDy HARD, you will PASS the EXAM.</li>
          <li className="margin-bottom-20 list-none">If you study hard, you will pass the exam.</li>

          <li>if it RAINS toMORrow, we will CANcel the PICnic.</li>
          <li className="margin-bottom-20 list-none">If it rains tomorrow, we will cancel the picnic.</li>

          <li>we can GO for a WALK if the RAIN STOPS.</li>
          <li className="margin-bottom-20 list-none">If it stops raining, we can go for a walk.</li>

          <li id="prepoSITion2">if i had a LOT of MONey, i would TRAVel around the WORLD.</li>
          <li className="margin-bottom-20 list-none">If I had loads of money, I would travel around the world.</li>

          <li id="prepoSITion3">if she had STARTed EARlier, she would NOT have MISSED the TRAIN.</li>
          <li className="margin-bottom-20 list-none">If she had got on the train earlier, she would not have missed it.</li>

          <li>if you had STUDied HARDer YESterday, you would KNOW the ANswer NOW.</li>
          <li className="margin-bottom-20 list-none">If you had studied harder yesterday, you would know the answer now.</li>
      
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

      <p className="margin-bottom-20">The word "if" is a short preposition and does not have any direct inflected forms created by adding prefixes or suffixes. However, it belongs to a group of words and grammatical phrases that express conditions or assumptions and share the same functional nature:</p>

        <ul className="list-square">
 
          <li id="NOUN">STOP WORrying a<strong>bout</strong> all the  what-ifs and FOCus on the PRESent.</li>
          <li className="margin-bottom-20 list-none">Stop worrying about things that might happen and focus on what is happening now.</li>
          <li className="list-none">Context note: The plural form "what-ifs" is commonly used. Stop worrying about "what-ifs" and focus on the present.</li>

        </ul>

      {/* =============================
            SYNonyms
      ============================= */}

      <h3 className="margin-y-50 text-center">SYNonyms</h3>

      <p className="margin-bottom-20">Below are words and phrases that function similarly to "if" and are used to establish a condition or assumption, each with its own expressive nuance.</p>

      {/* =============================
            1. 
      ============================= */}

      <p className="margin-top-20" id="">1. proVIded that or proVIding that, as long as: these expressions have a more formal tone and place greater emphasis on the condition than "if."</p>

        <ul className="list-square">

          <li>proVIded that you reTURN the CAR by 5 p.M., you can BORrow it.</li>
          <li className="list-none">If you return the car by 5 p.M., you can borrow it.</li>

        </ul>

      {/* =============================
            2. 
      ============================= */}

      <p className="margin-top-20" id="">2. as LONG as: commonly used in everyday speech to state a specific condition.</p>

        <ul className="list-square">

          <li>you can STAY HERE as LONG as you KEEP the ROOM CLEAN.</li>
          <li className="list-none">You can stay here as long as you keep the room clean.</li>

        </ul>
      

      {/* =============================
            3. 
      ============================= */}

      <p className="margin-top-20" id="">3. un<strong>less</strong>: otherwise - this phrase is equivalent to the "if not" structure, which excludes a condition or situation.</p>

        <ul className="list-square">

          <li>we will GO to the BEACH un<strong>less</strong> it RAINS toMORrow.</li>
          <li className="list-none">Chúng tôi sẽ đi ra bãi biển trừ khi ngày mai có mưa.</li>

        </ul>

      {/* =============================
            4. 
      ============================= */}

      <p className="margin-top-20" id="">4. in case: "Just in case," "in the event that"; used to describe an action taken in advance to prepare for a situation that may occur.</p>

        <ul className="list-square">

          <li>TAKE an umBRELla in case it RAINS LAter.</li>
          <li className="list-none">Bring an umbrella in case it rains.</li>

        </ul>

      {/* =============================
            5. 
      ============================= */}

      <p className="margin-top-20" id="">5. asSUMing that: "Suppose that," "let's assume"; used when one wishes to accept a hypothesis as true in order to discuss its implications.</p>

        <ul className="list-square">

          <li>asSUMing that we START on TIME, we should FINish by NOON.</li>
          <li className="list-none">If we start on time, we should finish by midday.</li>

        </ul>

      {/* =============================
            6. 
      ============================= */}

      <p className="margin-top-20" id="">6. On conDITion that: "Provided that" is a very formal phrase, commonly used in agreements or legal documents.</p>

        <ul className="list-square">

          <li>he was GRANTed BAIL on conDITion that he STAYED in the COUNtry.</li>
          <li className="list-none">He was allowed to leave but had to promise to stay in the country.</li>

        </ul>

      {/* =============================
            7. 
      ============================= */}

      <p className="margin-top-20" id="">7. <strong>wheth</strong>er: "Whether... or not"; used in place of "if" when there is a choice between two possibilities (usually with the structure "whether... or not"), and has a more formal tone than "if."</p>

        <ul className="list-square">

          <li>i DON'T KNOW <strong>wheth</strong>er she will acCEPT the JOB OFfer or NOT.</li>
          <li className="list-none">I don't know if she will say yes to the job offer.</li>

        </ul>

      
      {/* =============================
            8. 
      ============================= */}

      <p className="margin-top-20" id="">8. if Only: Fixed phrases - expressing a wish</p>

        <ul className="list-square">

          <li className="list-none">if Only i had KNOWN the TRUTH EARlier, THINGS would be DIFFERent.</li>
          <li className="margin-bottom-20 list-none">I wish I had known the truth sooner. Things would be different if I had.</li>

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