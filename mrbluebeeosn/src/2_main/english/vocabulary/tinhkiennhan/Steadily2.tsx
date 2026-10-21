import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function STEADily2(): React.JSX.Element {

  const postId = "STEADily2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-PAtiently"><mark className="highlight-tertiary-padding-4-8">PAtiently</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">STEADily
        <sup>
          <Link to="/vocabulary/STEADily-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/STEADily-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#inCREAsing-over">inCREAsing <strong>o</strong>ver</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#deCREAsing">deCREAsing</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#GROWing">GROWing</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#deCLIning">deCLIning</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#imPROVing-with">imPROVing with</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#WORKED-on">WORKED on</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#RAINED-throughout">RAINED through<strong>out</strong></HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#FLOWED-towards">FLOWED to<strong>wards</strong></HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#adVANCED-across">adVANCED a<strong>cross</strong></HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#HELD">HELD</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let's take a closer look at the word "STEADily" (steadily) and some common phrases that go with it.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              STEADily \<Link to="/pronunciation/5-vowel-system">STEAD i̛ ly</Link>\ /ˈsted.ə.li/ ⬤•• (THREE SYLlables)
              
            </span>
              
            &nbsp;is often used to describe an action or process that occurs steadily, continuously, and without many sudden changes.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="inCREAsing-over">the COMpany's PROFits have been STEADily inCREAsing <strong>o</strong>ver the PAST YEAR.</li>
        <li className="list-none margin-bottom-20">The company has been making more and more money each year recently.</li>

        <li value="2" id="deCREAsing">the unempLOYment RATE has been STEADily deCREAsing.</li>
        <li className="list-none margin-bottom-20">The number of people without a job has been getting smaller and smaller.</li>

        <li value="3" id="GROWing">the SMALL BUSIness has been STEADily GROWing its CUStomer BASE.</li>
        <li className="list-none margin-bottom-20">Small businesses have been slowly adding more and more customers.</li>

        <li value="4" id="deCLIning">the popuLARity of the PRODuct has been STEADily deCLIning.</li>
        <li className="list-none margin-bottom-20">The product is less popular now than it was before.</li>

        <li value="5" id="imPROVing-with">her ENGlish SKILLS have been STEADily imPROVing with PRACtice.</li>
        <li className="list-none margin-bottom-20">Her English skills have improved over time as she's been using English in different situations.</li>

        <li value="6" id="WORKED-on">he STEADily WORKED on the PROJect, MAking conSIStent PROGress.</li>
        <li className="list-none margin-bottom-20">He worked on the project consistently, making steady progress.</li>

        <li value="7" id="RAINED-throughout">it STEADily RAINED through<strong>out</strong> the MORNing.</li>
        <li className="list-none margin-bottom-20">It rained on and off all morning.</li>

        <li value="8" id="FLOWED-towards">the RIVer STEADily FLOWED to<strong>wards</strong> the SEA.</li>
        <li className="list-none margin-bottom-20">The river continued flowing steadily towards the sea.</li>

        <li value="9" id="adVANCED-across">the ARmy STEADily adVANCED a<strong>cross</strong> the TERritory.</li>
        <li className="list-none margin-bottom-20">The Army made steady progress as it moved across the territory.</li>

        <li value="10" id="HELD">she STEADily HELD the CAMERa to TAKE a CLEAR PICture.</li>
        <li className="list-none margin-bottom-20">She kept holding the camera to take a good picture.</li>

      </ol>

      <p>** All of the phrases above describe an action or process that occurs steadily, continuously, and without many sudden changes.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"STEADily" is usually placed before a verb to modify it.</li>

          <li className="margin-bottom-20">This word conveys the idea of regularity and stability.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping this information is helpful to you! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>April 28, 2025 · by 💎GEM ·</span>
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