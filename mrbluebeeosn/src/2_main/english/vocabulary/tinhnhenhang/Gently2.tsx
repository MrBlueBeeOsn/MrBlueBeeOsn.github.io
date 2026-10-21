import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function GENTly2(): React.JSX.Element {

  const postId = "GENTly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-GENTly"><mark className="highlight-tertiary-padding-4-8">GENTly</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">GENTly
        <sup>
          <Link to="/vocabulary/GENTly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/GENTly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#caRESSED">caRESSED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#PUSHED">PUSHED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#SHOOK">SHOOK</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#SLOPED-DOWN-to">SLOPED DOWN to</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#RAINing">RAINing</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#SPOKE-to">SPOKE ... to</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#SMILED-at">SMILED at</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#LOWered-into">LOWered <strong>in</strong>to</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#TAPPED-on">TAPPED on</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#SWAYED-in">SWAYED in</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let’s take a closer look at the word “GENTly” (gently) and some common phrases that go with it.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              GENTly \<Link to="/pronunciation/5-vowel-system">GENT ly</Link>\ /ˈdʒɛntlɪ/ ⬤• (TWO SYLlables)
              
            </span>
              
            &nbsp;is often used to describe an action performed gently, softly, without causing harm or discomfort.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="caRESSED">she GENTly caRESSED the BAby's CHEEK.</li>
        <li className="list-none margin-bottom-20">She gently rubbed the baby's cheek.</li>

        <li value="2" id="PUSHED">he GENTly PUSHED the DOOR Open.</li>
        <li className="list-none margin-bottom-20">He opened the door slowly and carefully.</li>

        <li value="3" id="SHOOK">she GENTly SHOOK the BOTtle to MIX the inGREdients.</li>
        <li className="list-none margin-bottom-20">She carefully shook the bottle. This mixed the ingredients together.</li>

        <li value="4" id="SLOPED-DOWN-to">the HILL GENTly SLOPED DOWN to the VALley.</li>
        <li className="list-none margin-bottom-20">The Hill went down to the Valley slowly.</li>

        <li value="5" id="RAINing">it was GENTly RAINing outSIDE.</li>
        <li className="list-none margin-bottom-20">There was a light drizzle.</li>

        <li value="6" id="SPOKE-to">she SPOKE GENTly to the CHILD.</li>
        <li className="list-none margin-bottom-20">She spoke in a kind and calm voice to the child.</li>

        <li value="7" id="SMILED-at">he GENTly SMILED at her.</li>
        <li className="list-none margin-bottom-20">He smiled at her in a gentle way.</li>

        <li value="8" id="LOWered-into">she GENTly LOWered herSELF <strong>in</strong>to the CHAIR.</li>
        <li className="list-none margin-bottom-20">She sat down in the chair slowly and carefully.</li>

        <li value="9" id="TAPPED-on">he GENTly TAPPED on the WINdow.</li>
        <li className="list-none margin-bottom-20">He tapped on the window, carefully, gently.</li>

        <li value="10" id="SWAYED-in">the TREES GENTly SWAYED in the BREEZE.</li>
        <li className="list-none margin-bottom-20">The trees gently moved in the breeze.</li>

      </ol>

      <p>** The phrases above are all used to emphasize the gentleness and tenderness of an action or state. They often evoke a sense of calm, comfort, and harmlessness.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"GENTly" is often placed before a verb to modify it.</li>

          <li className="margin-bottom-20">This word can be used in both spoken and written language.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping this information is helpful to you! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 5, 2024 · by 💎GEM ·</span>
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