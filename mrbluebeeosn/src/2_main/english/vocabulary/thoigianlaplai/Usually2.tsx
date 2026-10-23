import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Usually2(): React.JSX.Element {

  const postId = "Usually2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-Usually"><mark className="highlight-tertiary-padding-4-88">Usually</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">Usually
        <sup>
          <Link to="/vocabulary/Usually-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/Usually-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#DOES-after">DOES ... <strong>af</strong>ter</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#GOES-to-at">GOES to ... at</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#RAINS-in">RAINS in</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#TAKES">TAKES</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#FEELS-HAPpy-after">FEELS HAPpy <strong>af</strong>ter</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#LOOKS-TIred-in">LOOKS TIred in</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#EATS-for">EATS ... for</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#LIVES-in">LIVES in</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#WORKS-from-on">WORKS from ... on</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#PLAYS-with">PLAYS ... with</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let’s take a closer look at the word “Usually” and the phrases that often go with it.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              Usually \<Link to="/pronunciation/5-vowel-system">Ū su a̛l ly</Link>\ /ˈjuːʒuəli/ ⬤••• (FOUR SYLlables)
              
            </span>
              
            &nbsp;in English means "NORmally" or "FREquently." This word is used to describe things that happen regularly or out of habit.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="DOES-after">she Usually DOES her HOMEwork <strong>af</strong>ter DINner.</li>
        <li className="list-none margin-bottom-20">She generally does her homework after dinner.</li>

        <li value="2" id="GOES-to-at">he Usually GOES to BED at 10 p.M.</li>
        <li className="list-none margin-bottom-20">He goes to bed at 10:00 p.m. on average.</li>

        <li value="3" id="RAINS-in">it Usually RAINS in the WINter.</li>
        <li className="list-none margin-bottom-20">Rain is common in the winter.</li>

        <li value="4" id="TAKES">it Usually TAKES me an HOUR to GET to WORK.</li>
        <li className="list-none margin-bottom-20">I usually spend an hour getting to work.</li>

        <li value="5" id="FEELS-HAPpy-after">she Usually FEELS HAPpy <strong>af</strong>ter EXercising.</li>
        <li className="list-none margin-bottom-20">She usually feels happy after she works out.</li>

        <li value="6" id="LOOKS-TIred-in">he Usually LOOKS TIred in the MORNing.</li>
        <li className="list-none margin-bottom-20">He looks tired when he wakes up.</li>

        <li value="7" id="EATS-for">she Usually EATS FRUITS for BREAKfast.</li>
        <li className="list-none margin-bottom-20">Her usual breakfast is fruit.</li>

        <li value="8" id="LIVES-in">he Usually LIVES in a SMALL aPARTment.</li>
        <li className="list-none margin-bottom-20">He typically lives in a small apartment.</li>

        <li value="9" id="WORKS-from-on">she Usually WORKS from HOME on FRIdays.</li>
        <li className="list-none margin-bottom-20">She generally works from home on Fridays.</li>

        <li value="10" id="PLAYS-with">he Usually PLAYS BASketball with his FRIENDS on WEEKends.</li>
        <li className="list-none margin-bottom-20">On weekends, he usually plays basketball with his friends.</li>

      </ol>

      <p>** The phrases above are all used to describe actions, states, or events that occur frequently and repeatedly in everyday life. They help us better understand the habits, routines, and way of life of a person or thing.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"Usually" is typically placed at the beginning of a sentence or before an action to emphasize the frequency of that action.</li>

          <li className="margin-bottom-20">This word can be replaced with synonyms such as: <Link to="/vocabulary/OFten-1">OFten</Link>, GENERally, COMmonly.</li>

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