import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SLOWly2(): React.JSX.Element {

  const postId = "SLOWly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-SLOWly"><mark className="highlight-tertiary-padding-4-8">SLOWly</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">SLOWly
        <sup>
          <Link to="/vocabulary/SLOWly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/SLOWly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#but-SUREly-MAking-in">but SUREly MAking ... in</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#FAded-into-the">FAded <strong>in</strong>to the</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#reCOVering-from">reCOVering from</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#GROWing">GROWing</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#CHAnging-due-to">CHAnging due to</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#MOving-across-the">MOving a<strong>cross</strong> the</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#DYing">DYing</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#SINKing-into-the">SINKing <strong>in</strong>to the</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#apPROACHing-the">apPROACHing the</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#REalizing-the">REalizing the</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let's take a closer look at the word "SLOWly" (slowly) and some common phrases that go with it.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              SLOWly \<Link to="/pronunciation/5-vowel-system">SLŌW ly</Link>\ /ˈsləʊli/ ⬤• (TWO SYLlables)
              
            </span>
              
            &nbsp;in English means "slowly," and is often used to describe the speed of an action, process, or change.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="but-SUREly-MAking-in">she is SLOWly but SUREly MAking PROgress in her STUDies.</li>
        <li className="list-none margin-bottom-20">She's doing well in school, making steady progress.</li>

        <li value="2" id="FAded-into-the">the SOUND of the MUsic SLOWly FAded <strong>in</strong>to the NIGHT.</li>
        <li className="list-none margin-bottom-20">The sound of the music gradually disappeared into the darkness.</li>

        <li value="3" id="reCOVering-from">he is SLOWly reCOVering from his ILLness.</li>
        <li className="list-none margin-bottom-20">He's starting to feel better after being sick.</li>

        <li value="4" id="GROWing">the PLANT is SLOWly GROWing TALler.</li>
        <li className="list-none margin-bottom-20">Things aren't moving as quickly as we'd hoped, but the plant is still growing taller.</li>

        <li value="5" id="CHAnging-due-to">the CLImate is SLOWly CHAnging due to GLObal WARMing.</li>
        <li className="list-none margin-bottom-20">The climate is changing, and it's happening slowly. This is because of global warming.</li>

        <li value="6" id="MOving-across-the">the SNAIL was SLOWly MOving a<strong>cross</strong> the LEAF.</li>
        <li className="list-none margin-bottom-20">The snail was going slowly as it moved across the leaf.</li>

        <li value="7" id="DYing">the OLD TREE was SLOWly DYing.</li>
        <li className="list-none margin-bottom-20">The tree was old and slowly dying.</li>

        <li value="8" id="SINKing-into-the">the SHIP was SLOWly SINKing <strong>in</strong>to the OCean.</li>
        <li className="list-none margin-bottom-20">The ship was slowly going under the water.</li>

        <li value="9" id="apPROACHing">the STORM was SLOWly apPROACHing the COAST.</li>
        <li className="list-none margin-bottom-20">The storm was moving toward the coast, but it was going pretty slowly.</li>

        <li value="10" id="REalizing-the">she was SLOWly REalizing the TRUTH.</li>
        <li className="list-none margin-bottom-20">She was realizing the truth, but it was taking a while.</li>

      </ol>

      <p>** The phrases above all emphasize adjectives and the gradual nature of a process or action. They are often used to describe small but continuous changes over time.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"SLOWly" is often placed before an action to emphasize the speed of that action.</li>

          <li className="margin-bottom-20">This word can be used in a variety of contexts, from describing the movement of an object to depicting the progression of an event.</li>

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