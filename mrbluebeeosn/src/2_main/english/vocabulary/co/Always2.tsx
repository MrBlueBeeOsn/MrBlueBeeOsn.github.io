import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function ALways2(): React.JSX.Element {

  const postId = "ALways2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-YES"><mark className="highlight-tertiary-padding-4-8">YES</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">ALways
        <sup>
          <Link to="/vocabulary/ALways-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/ALways-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#KIND-to">KIND to</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#DOES-before">DOES ... be<strong>fore</strong></HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#GO-to-on">GO to ... on</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#EATS-in-the">EATS ... in the</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#READS-before-GOing-to">READS ... be<strong>fore</strong> GOing to</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#FEEL-HAPpy-when">FEEL HAPpy when</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#reMEMber">reMEMber</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#THERE-for">THERE for</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#on-TIME-for">on TIME for</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#the-SAME">the SAME</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let's take a closer look at how to use the word "ALways" (always) in English.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              ALways \<Link to="/pronunciation/5-vowel-system">AL wāys</Link>\ /ˈɔːl.weɪz/ ⬤• (TWO SYLlables)
              
            </span>
              
            &nbsp;is an adverb of frequency used to express that an action or event occurs all the time, without exception.



          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="KIND-to">she ALways KIND to <strong>ever</strong>yone.</li>
        <li className="list-none margin-bottom-20">She was always nice to everyone.</li>

        <li value="2" id="DOES-before">he ALways DOES his HOMEwork be<strong>fore</strong> DINner.</li>
        <li className="list-none margin-bottom-20">He always completes his homework before dinner.</li>

        <li value="3" id="GO-to-on">we ALways GO to the PARK on SUNdays.</li>
        <li className="list-none margin-bottom-20">Our family routine is to go to the park on Sundays.</li>

        <li value="4" id="EATS-in-the">she ALways EATS BREAKfast in the MORNing.</li>
        <li className="list-none margin-bottom-20">She always has breakfast in the morning.</li>

        <li value="5" id="READS-before-GOing-to">he ALways READS a BOOK be<strong>fore</strong> GOing to BED.</li>
        <li className="list-none margin-bottom-20">Before he goes to bed, he always reads a book.</li>

        <li value="6" id="FEEL-HAPpy-when">i ALways FEEL HAPpy when i SEE her.</li>
        <li className="list-none margin-bottom-20">I am happy whenever I see her.</li>

        <li value="7" id="reMEMber">i will ALways reMEMber your BIRthday.</li>
        <li className="list-none margin-bottom-20">I'll be sure to remember your birthday!</li>

        <li value="8" id="THERE-for">my FRIENDS are ALways THERE for me.</li>
        <li className="list-none margin-bottom-20">I always have friends who are there for me.</li>

        <li value="9" id="on-TIME-for">she is ALways on TIME for her apPOINTments.</li>
        <li className="list-none margin-bottom-20">She's consistent and punctual for her appointments.</li>

        <li value="10" id="the-SAME">his ATtitude is ALways the SAME.</li>
        <li className="list-none margin-bottom-20">He never changes his attitude.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"Always" usually comes before the main action in a sentence.</li>

          <li className="margin-bottom-20">You can combine "Always" with many other adverbs to create a wider variety of phrases.</li>

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