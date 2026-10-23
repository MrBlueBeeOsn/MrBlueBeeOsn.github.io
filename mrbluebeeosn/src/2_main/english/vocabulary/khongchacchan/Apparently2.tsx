import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function apPARently2(): React.JSX.Element {

  const postId = "apPARently2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-MAYbe"><mark className="highlight-tertiary-padding-4-8">MAYbe</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">apPARently
        <sup>
          <Link to="/vocabulary/apPARently-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/apPARently-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#imPOSsible-but-comPLETE">imPOSsible, but ... comPLETE</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#TRUE">TRUE</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#RANdom-but-a-PATtern">RANdom, but ... a PATtern</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#HARMless-but-POIsonous">HARMless, but ... POIsonous</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#SIMple-but-VERy-COMplex">SIMple, but ... VERy COMplex</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#unreLAted-but-conNECTed">unreLAted, but ... conNECTed</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#SATisfied-with">SATisfied with</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#conFUSED">conFUSED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#forGOTten-on-the">forGOTten on the</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#aWARE-of">aWARE of</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let’s take a closer look at the word “apPARently” (it seems) and some common phrases that go with it.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              apPARently \<Link to="/pronunciation/5-vowel-system">a̛p PAR e̛nt ly</Link>\ /əˈpærəntli/ •⬤•• (FOUR SYLlables)
              
            </span>
              
            &nbsp;is an adverb often used to convey information about which the speaker is not entirely certain regarding its accuracy.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="imPOSsible-but-comPLETE">the TASK SEEMED apPARently imPOSsible, but he MANaged to comPLETE it.</li>
        <li className="list-none margin-bottom-20">The job seemed too difficult, but he was able to do it.</li>

        <li value="2" id="TRUE">apPARently TRUE, she is LEAVing the COMpany NEXT WEEK.</li>
        <li className="list-none margin-bottom-20">It seems that she is quitting the company next week.</li>

        <li value="3" id="RANdom-but-a-PATtern">the NUMbers apPEARED to be apPARently RANdom, but there was a PATtern.</li>
        <li className="list-none margin-bottom-20">The numbers looked random, but they actually followed a pattern.</li>

        <li value="4" id="HARMless-but-POIsonous">the SNAKE LOOKED apPARently HARMless, but it was POIsonous.</li>
        <li className="list-none margin-bottom-20">The snake looked harmless, but it was actually poisonous.</li>

        <li value="5" id="SIMple-but-VERy-COMplex">the PROBlem SEEMED apPARently SIMple, but it was ACtually VERy COMplex.</li>
        <li className="list-none margin-bottom-20">It looked like a simple problem, but it turned out to be really complicated.</li>

        <li value="6" id="unreLAted-but-conNECTed">the TWO eVENTS SEEMED apPARently unreLAted, but they were conNECTed.</li>
        <li className="list-none margin-bottom-20">The two events didn't seem related. However, they were actually connected.</li>

        <li value="7" id="SATisfied-with">she NODded, apPARently SATisfied with his ANswer.</li>
        <li className="list-none margin-bottom-20">She nodded her head to show that she was happy with his answer.</li>

        <li value="8" id="conFUSED">he LOOKED aROUND, apPARently conFUSED.</li>
        <li className="list-none margin-bottom-20">He looked around, seemingly perplexed.</li>

        <li value="9" id="forGOTten-on-the">the BOOK was apPARently forGOTten on the TRAIN.</li>
        <li className="list-none margin-bottom-20">It seems that the book was left behind on the train.</li>

        <li value="10" id="aWARE-of">she SMILED, apPARently aWARE of his FEELings.</li>
        <li className="list-none margin-bottom-20">She smiled, and it looked like she was aware of how he was feeling.</li>

      </ol>

      <p>** All of the phrases above emphasize the uncertainty of the information. They are used when the speaker does not have clear evidence to confirm something, but has some understanding of it or has heard rumors about it.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"apPARently" usually appears at the beginning of a sentence or before an adjective or noun phrase.</li>

          <li className="margin-bottom-20">This word can be replaced with synonyms such as "SEEMingly," "<Link to="/vocabulary/EVidently-1">EVidently</Link>", or "osTENsibly" to add variety to your writing style.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping this information is helpful to you! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 11, 2024 · by 💎GEM ·</span>
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