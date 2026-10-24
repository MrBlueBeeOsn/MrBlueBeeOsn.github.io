import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function toMORrow2(): React.JSX.Element {

  const postId = "toMORrow2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-SOON"><mark className="highlight-tertiary-padding-4-88">SOON</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">toMORrow
        <sup>
          <Link to="/vocabulary/toMORrow-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/toMORrow-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#MORNing">MORNing</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#afterNOON">afterNOON</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#EVEning">EVEning</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#NIGHT">NIGHT</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#DAY-after">DAY <strong>af</strong>ter</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#the-DAY-after">the DAY <strong>af</strong>ter</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#WEEK">WEEK</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#MONTH">MONTH</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#BUSy">BUSy</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#MEET">MEET</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let's take a closer look at how to use the word "toMORrow" (tomorrow) in English.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              toMORrow \<Link to="/pronunciation/5-vowel-system">tơ MOR rōw</Link>\ /təˈmɔː.roʊ/ •⬤• (THREE SYLlables)
              
            </span>
              
            &nbsp;is an adverb of time, often used to describe an action or event that will take place tomorrow.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="MORNing">i have a MEETing toMORrow MORNing.</li>
        <li className="list-none margin-bottom-20">I have an appointment to meet with someone tomorrow morning.</li>

        <li value="2" id="afterNOON">let's GO to the BEACH toMORrow afterNOON.</li>
        <li className="list-none margin-bottom-20">Let's go to the beach tomorrow at noon.</li>

        <li value="3" id="EVEning">i'm GOing to a PARTy toMORrow EVEning.</li>
        <li className="list-none margin-bottom-20">Tomorrow night, I'm going to a party.</li>

        <li value="4" id="NIGHT">it will be COLD toMORrow NIGHT.</li>
        <li className="list-none margin-bottom-20">It's gonna be pretty cold tomorrow night.</li>

        <li value="5" id="DAY-after">i'll SEE you DAY <strong>af</strong>ter toMORrow.</li>
        <li className="list-none margin-bottom-20">We meet again tomorrow.</li>

        <li value="6" id="the-DAY-after">i have a DENtist apPOINTment the DAY <strong>af</strong>ter toMORrow.</li>
        <li className="list-none margin-bottom-20">I have a dental appointment scheduled for the day after tomorrow.</li>

        <li value="7" id="WEEK">i'm going on vaCAtion toMORrow WEEK.</li>
        <li className="list-none margin-bottom-20">I'm going on vacation for a week starting next Monday.</li>

        <li value="8" id="MONTH">my BIRTHday is toMORrow MONTH.</li>
        <li className="list-none margin-bottom-20">I will celebrate my birthday next month.</li>

        <li value="9" id="BUSy">i'll be BUSy toMORrow and the NEXT DAY.</li>
        <li className="list-none margin-bottom-20">Tomorrow and the day after will be busy for me.</li>

        <li value="10" id="MEET">we can MEET toMORrow or the DAY AFter.</li>
        <li className="list-none margin-bottom-20">Let's get together tomorrow or the day after.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"toMORrow" is often used to refer to a time in the near future.</li>

          <li className="margin-bottom-20">You can combine "toMORrow" with various other adverbs to create a wider variety of phrases.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping this information is helpful to you! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 4, 2024 · by 💎GEM ·</span>
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