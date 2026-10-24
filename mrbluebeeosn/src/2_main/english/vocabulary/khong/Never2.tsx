import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function NEVer2(): React.JSX.Element {

  const postId = "NEVer2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-NO"><mark className="highlight-tertiary-padding-4-8">NO</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">NEVer
        <sup>
          <Link to="/vocabulary/NEVer-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/NEVer-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#beFORE-SEEN-such-a">beFORE SEEN such a</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#aGAIN-MAKE">aGAIN MAKE</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#MIND">MIND</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#SEEN-such-a">SEEN such a</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#HEARD-of">HEARD of</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#forGET">forGET</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#TOO-LATE-to-LEARN">TOO LATE to LEARN</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#SAY">SAY</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#in-my-LIFE-SEEN-such-a">in my LIFE SEEN such a</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#giVE-UP-on">giVE UP on</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let's take a closer look at how to use the word "NEVer" (never) in English.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              NEVer \<Link to="/pronunciation/5-vowel-system">NEV e̛r</Link>\ /ˈnevər/ ⬤• (TWO SYLlables)
              
            </span>
              
            &nbsp;is an adverb of frequency used to express that an action or event never occurs.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="beFORE-SEEN-such-a">i have NEVer beFORE SEEN such a BEAUtiful SUNset.</li>
        <li className="list-none margin-bottom-20">I have never seen such a beautiful sunset before.</li>

        <li value="2" id="aGAIN-MAKE">i will NEVer aGAIN MAKE that misTAKE.</li>
        <li className="list-none margin-bottom-20">I will never make that same mistake again.</li>

        <li value="3" id="MIND">NEVer MIND, it's NOT imPORTant.</li>
        <li className="list-none margin-bottom-20">It's not important. Forget about it.</li>

        <li value="4" id="SEEN-such-a">i have NEVer SEEN such a BIG DOG.</li>
        <li className="list-none margin-bottom-20">I have never seen a dog that's so big.</li>

        <li value="5" id="HEARD-of">i have NEVer HEARD of that BAND.</li>
        <li className="list-none margin-bottom-20">I'm not familiar with that band.</li>

        <li value="6" id="forGET">i will NEVer forGET your KINDness.</li>
        <li className="list-none margin-bottom-20">I will always remember how kind you were.</li>

        <li value="7" id="TOO-LATE-to-LEARN">it's NEVer TOO LATE to LEARN SOMEthing NEW.</li>
        <li className="list-none margin-bottom-20">You're always able to learn something new.</li>

        <li value="8" id="SAY">NEVer SAY, ANything is POSsible.</li>
        <li className="list-none margin-bottom-20">Don't ever say that something can't happen.</li>

        <li value="9" id="in-my-LIFE-SEEN-such-a">i have NEVer in my LIFE SEEN such a BEAUtiful FLOWer.</li>
        <li className="list-none margin-bottom-20">I've never seen a flower like it. It's stunning!</li>

        <li value="10" id="giVE-UP-on">NEVer giVE UP on your DREAMS.</li>
        <li className="list-none margin-bottom-20">Don't ever let anyone make you think you can't make your dreams a reality.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"Never" usually comes at the beginning of a sentence or before the main action.</li>

          <li className="margin-bottom-20">You can combine "never" with many other adverbs to create a wider variety of phrases.</li>

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