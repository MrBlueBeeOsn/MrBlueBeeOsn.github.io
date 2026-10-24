import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SO2(): React.JSX.Element {

  const postId = "SO2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-SO"><mark className="highlight-tertiary-padding-4-8">SO</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">SO
        <sup>
          <Link to="/vocabulary/SO-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/SO-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#MUCH-for">MUCH for</HashLink>
          </span> &nbsp;
          
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#many-PEOple"><strong>man</strong>y PEOple</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#GOOD">GOOD</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#CAREfully-through">CAREfully through</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#FAST-when">FAST when</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#that">that</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#LONG-for-NOW">LONG for NOW</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#LONG-since">LONG since</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#WHAT">WHAT</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#ON">ON</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#do-i-am-i">do i (am i)</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let’s take a closer look at how to use the word “SO” (so, too, therefore) when it functions as an adverb in English.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              SO \<Link to="/pronunciation/5-vowel-system">SŌ</Link>\ /soʊ/ ⬤ (ONE SYLlable)
              
            </span>
              
            &nbsp;is a very versatile adverb that can be used to emphasize degree, indicate a result, or express agreement with something.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="MUCH-for">THANK you SO MUCH for your HELP!</li>
        <li className="list-none margin-bottom-20">I am very grateful for your help.</li>

        <li value="2" id="many-PEOple">there are SO <strong>man</strong>y PEOple here toDAY.</li>
        <li className="list-none margin-bottom-20">There are a lot of people here today.</li>

        <li value="3" id="GOOD">this CAKE is SO GOOD!</li>
        <li className="list-none margin-bottom-20">This cake is delicious!</li>

        <li value="4" id="CAREfully-through">she DROVE SO CAREfully through the NARrow STREETS.</li>
        <li className="list-none margin-bottom-20">She drove slowly and carefully through the small streets.</li>

        <li value="5" id="FAST-when">TIME FLIES SO FAST when you're HAVing FUN.</li>
        <li className="list-none margin-bottom-20">Time goes by quickly when you're enjoying yourself.</li>

        <li value="6" id="that">he STUDied HARD so that he could PASS the eXAM.</li>
        <li className="list-none margin-bottom-20">He studied diligently so he could succeed on the exam.</li>

        <li value="7" id="LONG-for-NOW">WELL, SO LONG for NOW!</li>
        <li className="list-none margin-bottom-20">We will see each other again soon!</li>

        <li className="list-none" id="LONG-since">it's been SO LONG since we LAST MET.</li>
        <li className="list-none margin-bottom-20">It's been a long time since we last saw each other.</li>

        <li value="8" id="WHAT">i MADE a misTAKE. "SO WHAT? <strong>ever</strong>yone MAKES misTAKES".</li>
        <li className="list-none margin-bottom-20">I made a mistake. "It's okay to make mistakes. Everyone does."</li>

        <li value="9" id="ON">we disCUSSED the BUDget, the TIMEline, the reSOURces, and SO ON.</li>
        <li className="list-none margin-bottom-20">We talked about the budget, the timeline, the resources, and other things like that.</li>

        <li value="10" id="do-i-am-i">i LOVE CHOColate. "SO do i.", "SO am i".</li>
        <li className="list-none margin-bottom-20">I really like chocolate. "I do, too," or "I am, too."</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li><strong>SO</strong> BEAUtiful, <strong>SO</strong> <Link to="/vocabulary/QUICKly-1">QUICKly</Link></li>
          <li className="list-none">It was beautiful and it happened quickly.</li>
          <li className="list-none margin-bottom-20">Emphasizing degree: "SO" is often used to <span className="highlight-255-padding-0-4">emphasize an adjective or adverb.</span></li>
          

          <li>it RAINED HEAVily, <strong>so</strong> we STAYED HOME.</li>
          <li className="list-none">It rained really hard, so we didn't go out.</li>
          <li className="list-none margin-bottom-20">Result clause: "so" can be used to <span className="highlight-255-padding-0-4">introduce the result of an action</span> or situation.</li>
          

          <li>Contextual Variation: "SO" is a very common word and has many different uses depending on the context.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping this information is helpful to you! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>JUNE 26, 2025 · by 💎GEM ·</span>
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