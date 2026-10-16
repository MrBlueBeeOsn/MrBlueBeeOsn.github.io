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

      <p className="margin-bottom-30"><strong>GRATEful</strong> (ADjective): Gratitude, appreciation. This word expresses gratitude or appreciation for what others have done for you or for the good things you have received.</p>

        <ul className="list-square">
      
          <li id="ADjective">i am DEEPly GRATEful for your supPORT during this DIFFicult TIME.</li>
          <li className="margin-bottom-20 list-none">Thank you for your help at this hard time.</li>

          <li>she FELT GRATEful for the WARM hospiTALity of her HOSTS.</li>
          <li className="list-none">She was thankful to her hosts for being so kind.</li>
      
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

      <p className="margin-bottom-20">Mastering words with the same root helps you express yourself more flexibly using various grammatical structures.</p>

        <ul className="list-square">

          <li id="NOUN">the SIMplest WAY to exPRESS your GRATitude is by SAYing THANK YOU.</li>
          <li className="margin-bottom-20 list-none">The easiest way to show you are grateful is to say "thank you".</li>

          <li>a DEEP SENSE of GRATEfulness FILLED her HEART when she SAW her FAMILy SAFE.</li>
          <li className="margin-bottom-20 list-none">She felt very grateful when she saw that her family was safe.</li>

          <li id="ADverb">he GRATEfully acCEPTed the OFFer of a HOT MEAL.</li>
          <li className="margin-bottom-20 list-none">He was very thankful to be offered a hot meal.</li>

        </ul>

      {/* =============================
            SYNonyms
      ============================= */}

      <h3 className="margin-y-50 text-center">SYNonyms</h3>

      <p className="margin-bottom-40">The synonyms below offer more precise nuances depending on the specific context.</p>

      {/* =============================
            1. 
      ============================= */}

      <p className="margin-top-20" id=""><strong>1. THANKful</strong>: Gratitude is often accompanied by a feeling of joy or relief that something bad did not happen or that something good did happen.</p>

        <ul className="list-square">

          <li>we were THANKful that the STORM PASSED without CAUSing any DAMage.</li>
          <li className="list-none">We were glad the storm didn't cause any damage.</li>

        </ul>

      {/* =============================
            2. 
      ============================= */}

      <p className="margin-top-20" id=""><strong>2. apPREciative</strong>: To appreciate, express appreciation for, and fully understand the value of an action or an act of kindness.</p>

        <ul className="list-square">

          <li>the COMpany is HIGHly apPREciative of your HARD WORK and dediCAtion.</li>
          <li className="list-none">The company really values your hard work and commitment.</li>

        </ul>

      {/* =============================
            3. 
      ============================= */}

      <p className="margin-top-20" id=""><strong>3. obLIGED</strong>: To be grateful or to feel obligated to thank someone for a favor; typically used in formal contexts.</p>

        <ul className="list-square">

          <li>i would be MUCH obLIGED if you could SEND me the PROject DEtails.</li>
          <li className="list-none">Please send me the details of the project.</li>

        </ul>

      {/* =============================
            4. 
      ============================= */}

      <p className="margin-top-20" id=""><strong>4. inDEBTed</strong>: To feel deeply grateful to someone for helping you get through a difficult situation (as if you owed them a debt of gratitude).</p>

        <ul className="list-square">

          <li>i am forEVer inDEBTed to the DOCtors who SAVED my LIFE.</li>
          <li className="list-none">I am very grateful to the doctors who saved my life.</li>

        </ul>

      {/* =============================
            5. 
      ============================= */}

      <p className="margin-top-20" id=""><strong>5. beHOLDen</strong>: To feel indebted to someone, or to feel bound to or dependent on them because they have helped you.</p>

        <ul className="list-square">

          <li>she did NOT WANT to be beHOLDen to ANyone for her fiNANcial sucCESS.</li>
          <li className="list-none">She didn't want to be tied down to anyone if she was going to be successful financially.</li>

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