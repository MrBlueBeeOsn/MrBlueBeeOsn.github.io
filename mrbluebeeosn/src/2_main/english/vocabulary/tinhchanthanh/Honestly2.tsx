import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function HONestly2(): React.JSX.Element {

  const postId = "HONestly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-sinCEREly"><mark className="highlight-tertiary-padding-4-8">sinCEREly</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">HONestly
        <sup>
          <Link to="/vocabulary/HONestly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/HONestly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#SPEAKing-i-DON'T-LIKE">SPEAKing, i DON'T LIKE</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#beLIEVE-that">beLIEVE that</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#THINK-we">THINK we</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#adMIT-that">adMIT that</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#SPEAKing-HOW-to-SOLVE">SPEAKing, HOW to SOLVE</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#i'm-surPRISED-that">i'm surPRISED that</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#i-DON'T-CARE-WHAT">i DON'T CARE WHAT</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#i'm-disapPOINTed-with">i'm disapPOINTed with</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#i'm-SCARED-of">i'm SCARED of</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#i'm-HAPpy-that">i'm HAPpy that</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let's take a closer look at the word "HONestly" (to be honest) and some common phrases that go with it.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              HONestly \<Link to="/pronunciation/5-vowel-system">HON est ly</Link>\ /ˈɒnɪstli/ ⬤•• (THREE SYLlables)
              
            </span>
              
            &nbsp;in English means "honestly"; it is often used to emphasize that the information provided is true and contains no falsehoods.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="SPEAKing-i-DON'T-LIKE">HONestly SPEAKing, i DON'T LIKE that MOvie.</li>
        <li className="list-none margin-bottom-20">To be honest, I didn't like that movie.</li>

        <li value="2" id="beLIEVE-that">i HONestly beLIEVE that he is INnocent.</li>
        <li className="list-none margin-bottom-20">I truly believe he is innocent.</li>

        <li value="3" id="THINK-we">i HONestly THINK we should reconSIDer our PLANS.</li>
        <li className="list-none margin-bottom-20">We should completely change our plans, I think.</li>

        <li value="4" id="adMIT-that">i HONestly adMIT that i MADE a misTAKE.</li>
        <li className="list-none margin-bottom-20">I'm sorry I made a mistake.</li>

        <li value="5" id="SPEAKing-HOW-to-SOLVE">HONestly SPEAKing, HOW to SOLVE this PROBlem?</li>
        <li className="list-none margin-bottom-20">To be honest, what's the solution to this problem?</li>

        <li value="6" id="i'm-surPRISED-that">HONestly, i'm surPRISED that you SAID that.</li>
        <li className="list-none margin-bottom-20">I was surprised by what you said.</li>

        <li value="7" id="i-DON'T-CARE-WHAT">HONestly, i DON'T CARE WHAT he THINKS.</li>
        <li className="list-none margin-bottom-20">Honestly, his opinion doesn't matter to me.</li>

        <li value="8" id="i'm-disapPOINTed-with">HONestly, i'm disapPOINTed with the reSULTS.</li>
        <li className="list-none margin-bottom-20">To be honest, I'm upset with the results.</li>

        <li value="9" id="i'm-SCARED-of">HONestly, i'm SCARED of the DARK.</li>
        <li className="list-none margin-bottom-20">To tell you the truth, I'm afraid of the dark.</li>

        <li value="10" id="i'm-HAPpy-that">HONestly, i'm HAPpy that you're HERE.</li>
        <li className="list-none margin-bottom-20">Honestly, it makes me happy that you're here.</li>

      </ol>

      <p>** The phrases above all emphasize honesty and candor in expression. They are often used to build trust and express personal views truthfully.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"HONestly" is often placed at the beginning of a sentence to emphasize its meaning.</li>

          <li className="margin-bottom-20">This word can be used in a variety of situations, from everyday conversations to formal writing.</li>

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