import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function MAYbe2(): React.JSX.Element {

  const postId = "MAYbe2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-MAYbe"><mark className="highlight-tertiary-padding-4-8">MAYbe</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">MAYbe
        <sup>
          <Link to="/vocabulary/MAYbe-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/MAYbe-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#LAter">LAter</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#NOT">NOT</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#SO">SO</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#if-i-STUDy-HARDer">if i STUDy HARDer</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#or-GO">or ... GO</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#JUST">JUST</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#SOMEday">SOMEday</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#it's-because">it's be<strong>cause</strong></HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#we-should-LEAVE-NOW">we should LEAVE NOW</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#she's-upSET">she's upSET</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let's take a closer look at how to use the word "MAYbe" in English.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              MAYbe \<Link to="/pronunciation/5-vowel-system">MĀY bē</Link>\ /ˈmeɪ.bi/ ⬤• (TWO SYLlables)
              
            </span>
              
            &nbsp;is an adverb commonly used to express uncertainty or the possibility that something might happen.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="LAter">let's meeT UP for COFfee MAYbe LAter.</li>
        <li className="list-none margin-bottom-20">Let's get coffee sometime later.</li>

        <li value="2" id="NOT">i'm NOT SURE if i can MAKE it. MAYbe NOT.</li>
        <li className="list-none margin-bottom-20">I'm not sure if I'll be able to make it. It's possible that it is not.</li>

        <li value="3" id="SO">you're RIGHT. MAYbe SO.</li>
        <li className="list-none margin-bottom-20">You're right. It's possible.</li>

        <li value="4" id="if-i-STUDy-HARDer">MAYbe if i STUDy HARDer, i can PASS the eXAM.</li>
        <li className="list-none margin-bottom-20">If I study more, I might get a better grade on the test.</li>

        <li value="5" id="or-GO">i DON'T KNOW WHAT to DO. should i STAY or MAYbe GO?</li>
        <li className="list-none margin-bottom-20">I'm unsure what to do. Should I stay or leave?</li>

        <li value="6" id="JUST">JUST MAYbe, he'll CHANGE his MIND.</li>
        <li className="list-none margin-bottom-20">There's a chance he'll change his mind.</li>

        <li value="7" id="SOMEday">MAYbe SOMEday i'll VISit jaPAN.</li>
        <li className="list-none margin-bottom-20">I might visit Japan one day.</li>

        <li value="8" id="it's-because">MAYbe it's be<strong>cause</strong> i'm TIred.</li>
        <li className="list-none margin-bottom-20">It's probably because I'm exhausted.</li>

        <li value="9" id="we-should-LEAVE-NOW">i'm NOT SURE, MAYbe we should LEAVE NOW.</li>
        <li className="list-none margin-bottom-20">I don't know. We should probably leave now.</li>

        <li value="10" id="she's-upSET">i THINK MAYbe she's upSET.</li>
        <li className="list-none margin-bottom-20">It's possible that she is unhappy.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"MAYbe" usually appears at the beginning of a sentence or before the main action.</li>

          <li className="margin-bottom-20">When combined with other words, "MAYbe" forms various phrases with a range of meanings.</li>

        </ul>

      </div>

      <p className="margin-top-50">Understanding the context will help you use these phrases correctly. 🐝</p>

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