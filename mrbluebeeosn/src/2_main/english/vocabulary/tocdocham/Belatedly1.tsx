import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function beLAtedly1(): React.JSX.Element {

  const postId = "beLAtedly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-SLOWly"><mark className="highlight-tertiary-padding-4-8">SLOWly</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">beLAtedly
        <sup><Link to="/vocabulary/beLAtedly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/beLAtedly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                      
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#ADverb">ADverb</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#ADjective">ADjective</HashLink>
          </span> &nbsp;

        </p>

        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#SYNonyms">SYNonyms</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#ANtonyms">ANtonyms</HashLink>
          </span> &nbsp;

        </p>

        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#VoCABulary-LEARNing-TIPS">🌻 VoCABulary LEARNing TIPS</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Great! Let's explore the word "beLAtedly" together.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                beLAtedly \<Link to="/pronunciation/5-vowel-system">be LĀ ted ly</Link>\ /bɪˈleɪ.tɪd.li/ •⬤•• (FOUR SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Too Late</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "beLAtedly" describes an action or event that occurs later than expected or anticipated. It often evokes a sense of regret or the realization that something was recognized too late.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">he beLAtedly REalized his misTAKE.</li>
          <li className="margin-bottom-20 list-none">He realized he had made a mistake at a later point.</li>

          <li>the BIRTHday CARD arRIVED beLAtedly.</li>
          <li className="margin-bottom-20 list-none">The birthday card didn't arrive until after the due date.</li>

          <li>she beLAtedly aPOLogized for her beHAVior.</li>
          <li className="list-none">She apologized for her behavior, but only after it was too late.</li>

        </ul>

      {/* =============================
            VoCABulary FAMILy:
      ============================= */}
        
      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>VoCABulary FAMILy:</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li id="ADjective">he OFfered a beLAted aPOLogy.</li>
          <li className="margin-bottom-20 list-none">He apologized, but only after the fact.</li>

          <li>we reCEIVED a beLAted inviTAtion.</li>
          <li className="list-none">We got an invitation late.</li>

        </ul>

      {/* =============================
            SYNonyms:
      ============================= */}
        
      <p className="margin-top-20" id="SYNonyms">
        <mark className="highlight-238-padding-4-8">
          <strong>SYNonyms</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>he arRIVED LATE for the MEEting.</li>
          <li className="margin-bottom-20 list-none">He didn't arrive on time for the meeting.</li>

          <li>the TRAIN arRIVED TARdily.</li>
          <li className="margin-bottom-20 list-none">The train didn't arrive when it was supposed to.</li>

          <li>the PROJect is RUNning beHIND SCHEDule.</li>
          <li className="margin-bottom-20 list-none">The project isn't on schedule.</li>

          <li>it was TOO LATE to aPOLogize.</li>
          <li className="list-none">There was no time left to apologize.</li>

        </ul>

        {/* <Link to="/vocabulary/CLEARly-1">Clearly</Link> */}

      {/* =============================
            ANtonyms:
      ============================= */}

      <p className="margin-top-20" id="ANtonyms">
        <mark className="highlight-238-padding-4-8">
          <strong>ANtonyms</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>he arRIVED EARly for the apPOINTment.</li>
          <li className="margin-bottom-20 list-none">He got there before the agreed-upon time.</li>

          <li>she rePLIED PROMPTly to the EMail.</li>
          <li className="margin-bottom-20 list-none">She quickly replied to the email.</li>

          <li>the MEEting STARTed PUNCtually.</li>
          <li className="margin-bottom-20 list-none">The meeting started right on time.</li>

          <li>PLEASE rePORT any ISsues imMEdiately.</li>
          <li className="list-none">If you see an issue, please let us know right away.</li>

        </ul>
      
      {/* =============================
            🌻 Vocabulary-Learning Tips:
      ============================= */}

      <h3 className="margin-y-50 text-center" id="VoCABulary-LEARNing-TIPS">🌻 Vocabulary-Learning Tips:</h3>

      {/* =============================
            1. Link to the image:
      ============================= */}
      
      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>1. Link</strong></mark> 
        </strong>
        <strong>&nbsp;to the image</strong>:
      </p>

      <p className="text-indent-whole">Imagine a birthday gift that arrives after the birthday, someone who realizes their mistake only after the damage has been done, or an apology offered too late to mend a relationship.</p>

        <ul className="list-square">

          <li>the BIRTHday GIFT arRIVED beLAtedly.</li>
          <li className="margin-bottom-20 list-none">The birthday gift didn't arrive until it was late.</li>

          <li>he beLAtedly REalized his misTAKE <strong>af</strong>ter the CONsequences.</li>
          <li className="margin-bottom-20 list-none">He realized his mistake after he saw the consequences.</li>

          <li>the aPOLogy was OFfered beLAtedly to MEND the reLAtionship.</li>
          <li className="list-none">Apologies were offered to try to fix the broken relationship after the fact.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create</strong></mark> 
        </strong>
        <strong>&nbsp;example sentences</strong>:
      </p>

      <p className="text-indent-whole">Create sentences related to situations in which you or someone else acts or realizes something too late.</p>

        <ul className="list-square">

          <li>the FIRE dePARTment arRIVED beLAtedly at the SCENE.</li>
          <li className="list-none">The firefighters showed up late to the scene.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
            <mark className="highlight-255-padding-4-8"><strong>3. Regular</strong></mark>
        </strong>
        <strong>&nbsp;practice</strong>:
      </p>

      <p className="text-indent-whole margin-bottom-20">Pay attention to situations involving delays and try to use this word to describe them.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">he REalized his misTAKE.</li>
            <li className="list-none margin-bottom-20">He understood that he had made a mistake.</li>

            <li value="2">he beLAtedly REalized his misTAKE.</li>
            <li className="list-none margin-bottom-20">It was only then that he realized he had made a mistake.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence implies that it <span className="highlight-255-padding-0-4">took him some time to realize his mistake,</span> and that there may have been consequences before he realized it.</p>

      </div>

         <ol>

            <li>the BIRTHday CARD arRIVED.</li>
            <li className="list-none margin-bottom-20">The birthday card has been delivered.</li>

            <li value="2">the BIRTHday CARD arRIVED beLAtedly.</li>
            <li className="list-none margin-bottom-20">The birthday card didn't arrive until after the birthday was over.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence makes it clear that the card <span className="highlight-255-padding-0-4">did not arrive on the birthday itself.</span></p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Emphasizes a delay compared to what was expected: "beLAtedly" often implies that something should have happened sooner.</li>

          <li className="margin-bottom-20">It can be accompanied by a sense of regret or belated realization: When someone realizes a mistake or offers an apology "beLAtedly," it often implies that they wish they had acted sooner.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>April 23, 2025 · by 💎GEM ·</span>
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