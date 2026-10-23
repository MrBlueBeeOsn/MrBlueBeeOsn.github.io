import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function POSsibly2(): React.JSX.Element {

  const postId = "POSsibly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-MAYbe"><mark className="highlight-tertiary-padding-4-8">MAYbe</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">POSsibly
        <sup>
          <Link to="/vocabulary/POSsibly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/POSsibly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#the-BEST-COFfee">the BEST COFfee</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#TRUE-but">TRUE, but</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#DANgerous-due-to-the">DANgerous due to the</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#the-WORST-MOvie">the WORST MOvie</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#LOST-in-the">LOST ... in the</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#misunderSTOOD">misunderSTOOD</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#due-to-BAD-WEATHer">due to BAD WEATHer</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#reLAted">reLAted</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#HARMful-to">HARMful to</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#the-BEST-OPTion-for">the BEST OPTion for</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let's take a closer look at the word "POSsibly" and some common phrases that go with it.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              POSsibly \<Link to="/pronunciation/5-vowel-system">POS si̛b ly</Link>\ /ˈpɒsəbli/+ ⬤•• (THREE SYLlables)
              
            </span>
              
            &nbsp;is often used to express uncertainty or the likelihood of an event or situation occurring.



          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="the-BEST-COFfee">THIS is POSsibly the BEST COFfee i've EVer TAsted.</li>
        <li className="list-none margin-bottom-20">This coffee is the best I've ever had.</li>

        <li value="2" id="TRUE-but">what he SAID is POSsibly TRUE, but i'm NOT SURE.</li>
        <li className="list-none margin-bottom-20">What he said might be true, but I'm not entirely convinced.</li>

        <li value="3" id="DANgerous-due-to-the">SWIMming in this LAKE is POSsibly DANgerous due to the STRONG CURrents.</li>
        <li className="list-none margin-bottom-20">Swimming in this lake can be dangerous because the currents are strong.</li>

        <li value="4" id="the-WORST-MOvie">THIS is POSsibly the WORST MOvie i've EVer SEEN.</li>
        <li className="list-none margin-bottom-20">I've never seen a movie as bad as this one.</li>

        <li value="5" id="LOST-in-the">my KEYS are POSsibly LOST SOMEwhere in the HOUSE.</li>
        <li className="list-none margin-bottom-20">I lost my keys somewhere in the house.</li>

        <li value="6" id="misunderSTOOD">my WORDS were POSsibly misunderSTOOD.</li>
        <li className="list-none margin-bottom-20">Maybe I was not clear enough.</li>

        <li value="7" id="due-to-BAD-WEATHer">the FLIGHT is POSsibly deLAYED due to BAD WEATHer.</li>
        <li className="list-none margin-bottom-20">The plane might be delayed because of bad weather.</li>

        <li value="8" id="reLAted">these TWO eVENTS are POSsibly reLAted.</li>
        <li className="list-none margin-bottom-20">These two events might be connected.</li>

        <li value="9" id="HARMful-to">EATing TOO much SUgar is POSsibly HARMful to your HEALTH.</li>
        <li className="list-none margin-bottom-20">Eating a lot of sugar is bad for your health.</li>

        <li value="10" id="the-BEST-OPTion-for">MOving to a NEW CITy is POSsibly the BEST OPTion for my caREER.</li>
        <li className="list-none margin-bottom-20">I might have to move to a new city for a better job.</li>

      </ol>

      <p>** The phrases above all express uncertainty and leave the door open to various possibilities. They are often used when the speaker does not have enough information to reach a definitive conclusion.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"POSsibly" is often placed at the beginning of a sentence or before an action to modify it.</li>

          <li className="margin-bottom-20">This word can be replaced with synonyms such as "<Link to="/vocabulary/perHAPS-1">perHAPS</Link>", "<Link to="/vocabulary/MAYbe-1">MAYbe</Link>", or "could be" to add variety to your writing style.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping this information is helpful to you! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 7, 2024 · by 💎GEM ·</span>
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