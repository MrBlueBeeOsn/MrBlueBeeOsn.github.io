import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function PROBably2(): React.JSX.Element {

  const postId = "PROBably2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-MAYbe"><mark className="highlight-tertiary-padding-4-8">MAYbe</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">PROBably
        <sup>
          <Link to="/vocabulary/PROBably-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/PROBably-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#the-BEST-RESTAUrant-in">the BEST RESTAUrant in</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#will-NOT-be-ABle-to-MAKE-to">will NOT be ABle to MAKE ... to</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#the-MOST">the MOST</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#GO-to-the">GO to the</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#due-to-the-TRAFfic">due to the TRAFfic</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#the-BEST-deCISion">the BEST deCISion</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#the-REAson-is-that">the REAson is that</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#the-BEST-WAY-is">the BEST WAY is</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#upSET-because">upSET because</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#the-MOST-DIFficult-TASK">the MOST DIFficult TASK</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let's take a closer look at the word "PROBably" (probably) and some common phrases that go with it.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              PROBably \<Link to="/pronunciation/5-vowel-system">PROB ly</Link>\ /ˈprɒbli/ ⬤• (TWO SYLlables)
              
            </span>
              
            &nbsp;is an adverb of probability, often used to express a situation that is not entirely certain but highly likely to occur.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="the-BEST-RESTAUrant-in">THIS is PROBably the BEST RESTAUrant in TOWN.</li>
        <li className="list-none margin-bottom-20">This restaurant is probably the best one in the city.</li>

        <li value="2" id="will-NOT-be-ABle-to-MAKE-to">i PROBably will NOT be ABle to MAKE it to the PARTy.</li>
        <li className="list-none margin-bottom-20">I will probably not be able to attend the party.</li>

        <li value="3" id="the-MOST">the MOST PROBably, she will arRIVE LATE.</li>
        <li className="list-none margin-bottom-20">It's most likely that she'll arrive late.</li>

        <li value="4" id="GO-to-the">i will PROBably GO to the MOvies toMORrow.</li>
        <li className="list-none margin-bottom-20">I'm thinking of going to the movies to watch Morro tomorrow.</li>

        <li value="5" id="due-to-the-TRAFfic">the deLAY was PROBably due to the TRAFfic.</li>
        <li className="list-none margin-bottom-20">The delay was likely because of traffic.</li>

        <li value="6" id="the-BEST-deCISion">it is PROBably the BEST deCISion you can MAKE.</li>
        <li className="list-none margin-bottom-20">This is likely the best decision.</li>

        <li value="7" id="the-REAson-is-that">PROBably the REAson is that he's TIred.</li>
        <li className="list-none margin-bottom-20">He is probably tired, and that is why...</li>

        <li value="8" id="the-BEST-WAY-is">PROBably the BEST WAY is to CALL him FIRST.</li>
        <li className="list-none margin-bottom-20">The best way to do this is to call him first.</li>

        <li value="9" id="upSET-because">she's PROBably upSET be<strong>cause</strong> he DIDN'T CALL.</li>
        <li className="list-none margin-bottom-20">She must be upset because he didn't call.</li>

        <li value="10" id="the-MOST-DIFficult-TASK">THIS is PROBably the MOST DIFficult TASK i've ever HAD.</li>
        <li className="list-none margin-bottom-20">This is probably the hardest thing I've ever had to do.</li>

      </ol>

      <p>** The phrases above all convey a sense of uncertainty but imply a high likelihood of occurrence. They are often used to express speculation, predictions, or subjective opinions.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"PROBably" is often placed at the beginning of a sentence or before an action to modify it.</li>

          <li className="margin-bottom-20">This word can be replaced with synonyms such as "LIKEly," "<Link to="/vocabulary/POSsibly-1">POSsibly</Link>", or "<Link to="/vocabulary/perHAPS-1">perHAPS</Link>" to add variety to your writing style.</li>

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