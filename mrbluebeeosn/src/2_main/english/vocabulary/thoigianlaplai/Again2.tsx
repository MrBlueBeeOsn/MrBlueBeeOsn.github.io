import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function aGAIN2(): React.JSX.Element {

  const postId = "aGAIN2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-OFten"><mark className="highlight-tertiary-padding-4-88">OFten</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">aGAIN
        <sup>
          <Link to="/vocabulary/aGAIN-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/aGAIN-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#MADE">MADE</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#TRY-THAT-ONCE">TRY THAT ONCE</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#NOT-to-DO-THAT">NOT to DO THAT</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#PLAYED-Over-and-Over">PLAYED ... Over and Over</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#to-START-all-Over">to START all Over</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#HOPE-to-SEE-SOON">HOPE to SEE ...SOON</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#SAY-THAT">SAY THAT</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#NOT">NOT</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#ONCE-MORE">ONCE MORE</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#DO-as-beFORE">DO ... as beFORE</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let's take a closer look at how to use the word "aGAIN" (again) in English.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              aGAIN \<Link to="/pronunciation/5-vowel-system">a̛ GĀIN</Link>\ /əˈɡen/ •⬤ (TWO SYLlables)
              
            </span>
              
            &nbsp;is an adverb of frequency, often used to describe a repeated action or a similar situation occurring again.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="MADE">he MADE the SAME misTAKE aGAIN and aGAIN.</li>
        <li className="list-none margin-bottom-20">He kept making this one same mistake over and over again.</li>

        <li value="2" id="TRY-THAT-ONCE">let's TRY THAT ONCE aGAIN.</li>
        <li className="list-none margin-bottom-20">Let's give that another try.</li>

        <li value="3" id="NOT-to-DO-THAT">i've TOLD you TIME and aGAIN NOT to DO THAT.</li>
        <li className="list-none margin-bottom-20">I have told you many times not to do that.</li>

        <li value="4" id="PLAYED-Over-and-Over">she PLAYED the SAME SONG Over and Over aGAIN.</li>
        <li className="list-none margin-bottom-20">She sang the same song repeatedly.</li>

        <li value="5" id="to-START-all-Over">we had to START all Over aGAIN.</li>
        <li className="list-none margin-bottom-20">We had to start from the beginning again.</li>

        <li value="6" id="HOPE-to-SEE-SOON">i HOPE to SEE you aGAIN SOON.</li>
        <li className="list-none margin-bottom-20">I hope we meet up again soon.</li>

        <li value="7" id="SAY-THAT">could you SAY THAT aGAIN, PLEASE?</li>
        <li className="list-none margin-bottom-20">Please repeat that last statement.</li>

        <li value="8" id="NOT">NOT aGAIN! i've LOST my KEYS.</li>
        <li className="list-none margin-bottom-20">This isn't the first time. I've lost my keys again!</li>

        <li value="9" id="ONCE-MORE">could you READ THAT ONCE MORE?</li>
        <li className="list-none margin-bottom-20">Would you mind reading that one more time?</li>

        <li value="10" id="DO-as-beFORE">PLEASE DO it as beFORE.</li>
        <li className="list-none margin-bottom-20">Please do it the way you did before.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"aGAIN" can be used to emphasize repetition, frustration, or a desire.</li>

          <li className="margin-bottom-20">The exact meaning of the phrase depends on the context in which it is used.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping this information helps you better understand how to use the word "aGAIN" in English! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 14, 2024 · by 💎GEM ·</span>
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