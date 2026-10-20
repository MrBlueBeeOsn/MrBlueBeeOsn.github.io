import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function beLAtedly2(): React.JSX.Element {

  const postId = "beLAtedly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-SLOWly"><mark className="highlight-tertiary-padding-4-8">SLOWly</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">beLAtedly
        <sup>
          <Link to="/vocabulary/beLAtedly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/beLAtedly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#REalized">REalized</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#aPOLogized-for">aPOLogized for</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#arRIVED-at">arRIVED at</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#SENT">SENT</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#reSPONDed-to">reSPONDed to</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#conGRATulated">conGRATulated</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#acKNOWledged">acKNOWledged</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#disCOVered">disCOVered</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#underSTOOD">underSTOOD</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#OFfered-to">OFfered ... to</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let’s take a closer look at the word “beLAtedly” (belatedly) and some common phrases that go with it.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              beLAtedly \<Link to="/pronunciation/5-vowel-system">be LĀ ted ly</Link>\ /bɪˈleɪ.tɪd.li/ •⬤•• (FOUR SYLlables)
              
            </span>
              
            &nbsp;is often used to describe an action or event that occurs later than expected or anticipated.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="REalized">he beLAtedly REalized he had forGOTten his WALlet.</li>
        <li className="list-none margin-bottom-20">He realized he had forgotten his wallet at the last minute.</li>

        <li value="2" id="aPOLogized-for">she beLAtedly aPOLogized for her RUDE beHAVior.</li>
        <li className="list-none margin-bottom-20">She apologized for being rude. She was late doing it..</li>

        <li value="3" id="arRIVED-at">they beLAtedly arRIVED at the MEEting due to TRAFfic.</li>
        <li className="list-none margin-bottom-20">They didn't arrive on time for the meeting because they were stuck in traffic.</li>

        <li value="4" id="SENT">he beLAtedly SENT the BIRTHday CARD, WEEKS <strong>af</strong>ter the ACtual DATE.</li>
        <li className="list-none margin-bottom-20">He sent the birthday card very late, weeks after the date.</li>

        <li value="5" id="reSPONDed-to">she beLAtedly reSPONDed to his EMail <strong>af</strong>ter a LONG deLAY.</li>
        <li className="list-none margin-bottom-20">It was already late, but she finally answered his email.</li>

        <li value="6" id="conGRATulated">they beLAtedly conGRATulated the NEW PArents on the BIRTH of their BAby.</li>
        <li className="list-none margin-bottom-20">They finally congratulated the new parents on the birth of their baby.</li>

        <li value="7" id="acKNOWledged">the COMpany beLAtedly acKNOWledged the ERror in their PRODuct.</li>
        <li className="list-none margin-bottom-20">The company finally admitted that their product had a problem.</li>

        <li value="8" id="disCOVered">they beLAtedly disCOVered the MISSing DOCuments.</li>
        <li className="list-none margin-bottom-20">They found the missing documents at the last minute.</li>

        <li value="9" id="underSTOOD">he beLAtedly underSTOOD the MEANing of her CRYPtic MESsage.</li>
        <li className="list-none margin-bottom-20">He finally understood the hidden meaning of her mysterious message.</li>

        <li value="10" id="OFfered-to">the COMpany beLAtedly OFfered compenSAtion to the afFECted CUStomers.</li>
        <li className="list-none margin-bottom-20">The company offered compensation to the customers affected by the issue only after they were contacted.</li>

      </ol>

      <p>** All of the above phrases indicate that an action or event occurs after the appropriate or expected time, often conveying a sense of regret or an unnecessary delay.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"beLAtedly" usually precedes an action to modify it.</li>

          <li className="margin-bottom-20">This word conveys the idea of being late.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping this information is helpful to you! 🐝</p>

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