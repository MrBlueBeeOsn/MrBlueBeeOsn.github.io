import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function DEFinitely2(): React.JSX.Element {

  const postId = "DEFinitely2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-CERtainly"><mark className="highlight-tertiary-padding-4-8">CERtainly</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">DEFinitely
        <sup>
          <Link to="/vocabulary/DEFinitely-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/DEFinitely-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#NOT-GOing-to">NOT GOing to</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#will-be-THERE-on-TIME">will be THERE on TIME</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#the-BEST-PIZza-i've">the BEST PIZza i've</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#NEED">NEED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#WORTH-it-WATChing">WORTH it WATChing</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#KNOW-to">KNOW ... to</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#recomMEND">recomMEND</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#aGREE-with">aGREE with</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#NOT-TRUE">NOT TRUE</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#the-BEST-CHOICE">the BEST CHOICE</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let's take a closer look at the word "DEFinitely" and some common phrases that go with it.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              DEFinitely \<Link to="/pronunciation/5-vowel-system">DEF i̛ ni̛te ly</Link>\ /ˈdɛfɪnətli/ ⬤••• (FOUR SYLlables)
              
            </span>
              
            &nbsp;is an adverb commonly used to emphasize certainty or determination about something.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="NOT-GOing-to">i DEFinitely NOT GOing to that PARTy.</li>
        <li className="list-none margin-bottom-20">There's no way I'm going to the party.</li>

        <li value="2" id="will-be-THERE-on-TIME">i DEFinitely will be THERE on TIME.</li>
        <li className="list-none margin-bottom-20">I'll make sure to be there right on time.</li>

        <li value="3" id="the-BEST-PIZza-i've">THIS is DEFinitely the BEST PIZza i've EVer HAD.</li>
        <li className="list-none margin-bottom-20">I have never tasted a better pizza.</li>

        <li value="4" id="NEED">i DEFinitely NEED a vaCAtion.</li>
        <li className="list-none margin-bottom-20">I really, truly, completely need a vacation.</li>

        <li value="5" id="WORTH-it-WATChing">the MOvie was DEFinitely WORTH it WATChing.</li>
        <li className="list-none margin-bottom-20">I definitely want to watch the movie again.</li>

        <li value="6" id="KNOW-to">i DEFinitely KNOW the ANswer to that QUESTion.</li>
        <li className="list-none margin-bottom-20">I know the answer to that question for sure.</li>

        <li value="7" id="recomMEND">i DEFinitely recomMEND this REStaurant.</li>
        <li className="list-none margin-bottom-20">I really think this restaurant is worth checking out.</li>

        <li value="8" id="aGREE-with">i DEFinitely aGREE with you.</li>
        <li className="list-none margin-bottom-20">I totally agree with you.</li>

        <li value="9" id="NOT-TRUE">that STORy is DEFinitely NOT TRUE.</li>
        <li className="list-none margin-bottom-20">There's no truth in that story.</li>

        <li value="10" id="the-BEST-CHOICE">BUYing this HOUSE is DEFinitely the BEST CHOICE.</li>
        <li className="list-none margin-bottom-20">Buying this house is definitely the best idea.</li>

      </ol>

      <p>** All of the above phrases are used to emphasize certainty, determination, or agreement about something. They help make a statement stronger and more persuasive.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"DEFinitely" is usually placed at the beginning of a sentence or before an action to modify it.</li>

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