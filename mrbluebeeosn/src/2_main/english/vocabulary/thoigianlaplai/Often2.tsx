import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function OFten2(): React.JSX.Element {

  const postId = "OFten2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-Usually"><mark className="highlight-tertiary-padding-4-88">Usually</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">OFten
        <sup>
          <Link to="/vocabulary/OFten-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/OFten-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#DO-in">DO ... in</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#GO-to-on">GO to ... on</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#EATS-for">EATS ... for</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#READS-before">READS ... be<strong>fore</strong></HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#PLAY-outSIDE-after">PLAY outSIDE <strong>af</strong>ter</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#WATCH-but-SOMEtimes-i-do">WATCH ... but SOMEtimes i do</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#DRINK-COFfee-in">DRINK COFfee in</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#WORKS-LATE-at">WORKS LATE at</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#GO-SHOPping-on">GO SHOPping on</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#FEEL-STRESSED">FEEL STRESSED</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let's take a closer look at how to use the word "OFten" in English.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              OFten \<Link to="/pronunciation/5-vowel-system">OF te̛n</Link>\ /ˈɒf.ən/ ⬤• (TWO SYLlables)
              
            </span>
              
            &nbsp;is an adverb of frequency used to express that an action or event occurs repeatedly.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="DO-in">i OFten DO my HOMEwork in the EVEning.</li>
        <li className="list-none margin-bottom-20">I often do my homework at night.</li>

        <li value="2" id="GO-to-on">we OFten GO to the BEACH on WEEKends.</li>
        <li className="list-none margin-bottom-20">We often visit the beach during the weekend.</li>

        <li value="3" id="EATS-for">she OFten EATS FRUITS for BREAKfast.</li>
        <li className="list-none margin-bottom-20">She often has fruit as part of her breakfast.</li>

        <li value="4" id="READS-before">he OFten READS BOOKS be<strong>fore</strong> GOing to BED.</li>
        <li className="list-none margin-bottom-20">He often reads books before he goes to sleep.</li>

        <li value="5" id="PLAY-outSIDE-after">CHILDren OFten PLAY outSIDE <strong>af</strong>ter SCHOOL.</li>
        <li className="list-none margin-bottom-20">Children often play outdoors after school.</li>

        <li value="6" id="WATCH-but-SOMEtimes-i-do">i do NOT OFten WATCH TV, but SOMEtimes i do.</li>
        <li className="list-none margin-bottom-20">I don't watch TV very often, but I do sometimes.</li>

        <li value="7" id="DRINK-COFfee-in">i OFten DRINK COFfee in the MORNing.</li>
        <li className="list-none margin-bottom-20">I drink coffee a lot in the morning.</li>

        <li value="8" id="WORKS-LATE-at">he OFten WORKS LATE at NIGHT.</li>
        <li className="list-none margin-bottom-20">He often works past midnight.</li>

        <li value="9" id="GO-SHOPping-on">we OFten GO SHOPping on WEEKends.</li>
        <li className="list-none margin-bottom-20">We often shop during the weekend.</li>

        <li value="10" id="FEEL-STRESSED">when i OFten FEEL STRESSED, i LISten to MUsic.</li>
        <li className="list-none margin-bottom-20">I feel better when I listen to music when I'm stressed.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"Often" usually comes before the main action in a sentence.</li>

          <li className="margin-bottom-20">You can combine "often" with many other adverbs to create more varied phrases.</li>

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