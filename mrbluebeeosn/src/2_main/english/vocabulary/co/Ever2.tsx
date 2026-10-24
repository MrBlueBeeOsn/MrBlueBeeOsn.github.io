import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function EVer2(): React.JSX.Element {

  const postId = "EVer2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-YES"><mark className="highlight-tertiary-padding-4-8">YES</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">EVer
        <sup>
          <Link to="/vocabulary/EVer-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/EVer-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#since">since</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#as">as</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#AFter">AFter</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#SO-KIND">SO KIND</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#been-to">been to</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#there-was-a-TIME">there was a TIME</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#forGET">forGET</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#and-EVer">and EVer</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#AFter2">AFter</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#and-aNON">and aNON</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let's take a closer look at how to use the word "EVer" (ever) in English.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              EVer \<Link to="/pronunciation/5-vowel-system">EV e̛r</Link>\ /ˈev.ər/ ⬤• (TWO SYLlables)
              
            </span>
              
            &nbsp;is often used to emphasize comprehensiveness, experience, or the highest degree of comparison.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="since">EVer since i was a CHILD, i've LOVED to READ.</li>
        <li className="list-none margin-bottom-20">Since I was a kid, I've always loved reading.</li>

        <li value="2" id="as">he is, as EVer, LATE for the MEETing.</li>
        <li className="list-none margin-bottom-20">He is late for the meeting, just like he always is.</li>

        <li value="3" id="AFter">they LIVED HAPpily EVer AFter.</li>
        <li className="list-none margin-bottom-20">They were very happy together.</li>

        <li value="4" id="SO-KIND">she is EVer SO KIND.</li>
        <li className="list-none margin-bottom-20">She's always nice.</li>

        <li value="5" id="been-to">have you EVer been to PARis?</li>
        <li className="list-none margin-bottom-20">Have you ever visited Paris, the capital of France?</li>

        <li value="6" id="there-was-a-TIME">if EVer there was a TIME to be BRAVE, it is NOW.</li>
        <li className="list-none margin-bottom-20">Now is the time to be brave.</li>

        <li value="7" id="forGET">i will NEVer EVer forGET that DAY.</li>
        <li className="list-none margin-bottom-20">I will always remember that day.</li>

        <li value="8" id="and-EVer">i will LOVE you for EVer and EVer.</li>
        <li className="list-none margin-bottom-20">I will love you until the end of time.</li>

        <li value="9" id="AFter2">they LIVED HAPpily EVer AFter.</li>
        <li className="list-none margin-bottom-20">They were happy together forever.</li>

        <li value="10" id="and-aNON">EVer and aNON, a BIRD would SING.</li>
        <li className="list-none margin-bottom-20">A bird would sing, no matter what.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"EVer" is commonly used in questions, negative sentences, and comparative sentences.</li>

          <li className="margin-bottom-20">The exact meaning of the phrase depends on the context in which it is used.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping this information is helpful to you! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 12, 2024 · by 💎GEM ·</span>
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