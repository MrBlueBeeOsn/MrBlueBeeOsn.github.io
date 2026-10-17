import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function GRATEful(): React.JSX.Element {

  const postId = "GRATEful";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADjectives-terms"><mark className="highlight-tertiary-padding-4-8">ADjectives</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">GRATEful</h1>

      <div className="example">
                                            
        <p className="example-sentence text-center">

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#ADjective">ADjective</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#NOUN">NOUN</HashLink>
          </span> &nbsp;
          
          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#ADverb">ADverb</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p className="margin-bottom-30"><strong>GRATEful</strong> (ADjective): Gratitude and appreciation. This word shows that you are thankful for what other people have done for you or for the good things you have received.</p>

        <ul className="list-square">
      
          <li id="ADjective">i am DEEPly GRATEful for your supPORT during this DIFFicult TIME.</li>
          <li className="margin-bottom-20 list-none">I appreciate your help during this hard time.</li>

          <li>she FELT GRATEful for the WARM hospiTALity of her HOSTS.</li>
          <li className="list-none">She was thankful for the kindness of her hosts.</li>
      
        </ul>

      {/* =============================
            pronunciAtion
      ============================= */}

      <h3 className="margin-y-50 text-center">pronunciAtion</h3>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>IPA: [GRĀTE ful] /ˈɡreɪt.fəl/</li>
            <li>phoNETic BREAKdown: GRAYT-ful</li>

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

      <p className="margin-bottom-20">Learning words with the same root helps you express yourself more flexibly by using different grammatical structures.</p>

        <ul className="list-square">

          <li id="NOUN">the SIMplest WAY to exPRESS your GRATitude is by SAYing THANK YOU.</li>
          <li className="margin-bottom-20 list-none">The simplest way to express your gratitude is to say "thank you."</li>

          <li>a DEEP SENSE of GRATEfulness FILLED her HEART when she SAW her FAMILy SAFE.</li>
          <li className="margin-bottom-20 list-none">She felt really thankful when she saw that her family was safe.</li>

          <li id="ADverb">he GRATEfully acCEPTed the OFFer of a HOT MEAL.</li>
          <li className="margin-bottom-20 list-none">He was thankful for the offer of a hot meal.</li>

        </ul>

      {/* =============================
            SYNonyms
      ============================= */}

      <h3 className="margin-y-50 text-center">SYNonyms</h3>

      <p className="margin-bottom-40">The words in the following list have more precise meanings depending on the specific situation.</p>

      {/* =============================
            1. 
      ============================= */}

      <p className="margin-top-20" id=""><strong>1. THANKful</strong>: When we're grateful, we often feel happy or relieved because we're thankful that something bad didn't happen, or we're glad that something good did.</p>

        <ul className="list-square">

          <li>we were THANKful that the STORM PASSED without CAUSing any DAMage.</li>
          <li className="list-none">We were glad the storm passed and there was no damage.</li>

        </ul>

      {/* =============================
            2. 
      ============================= */}

      <p className="margin-top-20" id=""><strong>2. apPREciative</strong>: To understand the value of something or to be thankful for it.</p>

        <ul className="list-square">

          <li>the COMpany is HIGHly apPREciative of your HARD WORK and dediCAtion.</li>
          <li className="list-none">The company really appreciates how hard you work and how dedicated you are.</li>

        </ul>

      {/* =============================
            3. 
      ============================= */}

      <p className="margin-top-20" id=""><strong>3. obLIGED</strong>: I am obliged. To feel thankful or to feel like you have to thank someone for a favor is the meaning of "grateful." "Grateful" is usually used in formal situations.</p>

        <ul className="list-square">

          <li>i would be MUCH obLIGED if you could SEND me the PROject DEtails.</li>
          <li className="list-none">I would really appreciate it if you could send me the details about the project.</li>

        </ul>

      {/* =============================
            4. 
      ============================= */}

      <p className="margin-top-20" id=""><strong>4. inDEBTed</strong>: To be in debt means to be very thankful to someone for helping you when you really needed it.</p>

        <ul className="list-square">

          <li>i am forEVer inDEBTed to the DOCtors who SAVED my LIFE.</li>
          <li className="list-none">I owe a great deal of gratitude to the doctors who saved my life.</li>

        </ul>

      {/* =============================
            5. 
      ============================= */}

      <p className="margin-top-20" id=""><strong>5. beHOLDen</strong>: To feel like you have to do something for someone just because they have helped you.</p>

        <ul className="list-square">

          <li>she did NOT WANT to be beHOLDen to ANyone for her fiNANcial sucCESS.</li>
          <li className="list-none">She didn't want to depend on others for financial success.</li>

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