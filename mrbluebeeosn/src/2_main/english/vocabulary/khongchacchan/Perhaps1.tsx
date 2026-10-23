import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function perHAPS1(): React.JSX.Element {

  const postId = "perHAPS1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-MAYbe"><mark className="highlight-tertiary-padding-4-8">MAYbe</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">perHAPS
        <sup><Link to="/vocabulary/perHAPS-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/perHAPS-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                            
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#ADverb">ADverb</HashLink>
          </span> &nbsp;

        </p>

        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#SYNonyms">SYNonyms</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#ANtonyms">ANtonyms</HashLink>
          </span> &nbsp;

        </p>

        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#VoCABulary-LEARNing-TIPS">🌻 VoCABulary LEARNing TIPS</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Great! Let's take a closer look at the word "perHAPS."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                perHAPS \<Link to="/pronunciation/5-vowel-system">pe̛r HAPS</Link>\ /pəˈhæps/ •⬤ (TWO SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Perhaps</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Expresses uncertainty or the likelihood of something happening.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">perHAPS it will RAIN toMORrow.</li>
          <li className="margin-bottom-20 list-none">It may rain tomorrow.</li>

          <li>perHAPS you should CALL her.</li>
          <li className="list-none">You should maybe give her a call.</li>

        </ul>

      {/* =============================
            VoCABulary FAMILy:
      ============================= */}
        
      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>VoCABulary FAMILy:</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li className="list-none">There is no direct family for "perHAPS" because it is a single word.</li>

        </ul>

      {/* =============================
            SYNonyms:
      ============================= */}
        
      <p className="margin-top-20" id="SYNonyms">
        <mark className="highlight-238-padding-4-8">
          <strong>SYNonyms</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li><Link to="/vocabulary/MAYbe-1">MAYbe</Link> we can GO to the PARK LAter.</li>
          <li className="margin-bottom-20 list-none">We could go to the park together later.</li>
          
          <li>it is <Link to="/vocabulary/POSsibly-1">POSsibly</Link> the BEST BOOK i've EVer READ.</li>
          <li className="list-none">I've just finished reading what may very well be the best book I've ever read.</li>

        </ul>

        {/* <Link to="/vocabulary/CLEARly-1">Clearly</Link> */}

      {/* =============================
            ANtonyms:
      ============================= */}

      <p className="margin-top-20" id="ANtonyms">
        <mark className="highlight-238-padding-4-8">
          <strong>ANtonyms</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>i <Link to="/vocabulary/DEFinitely-1">DEFinitely</Link> WANT to GO to the PARTy.</li>
          <li className="margin-bottom-20 list-none">I really want to go to the party.</li>

          <li><Link to="/vocabulary/CERtainly-1">CERtainly</Link>, i will HELP you.</li>
          <li className="list-none">Absolutely, I'll be there to help.</li>

        </ul>
      
      {/* =============================
            🌻 Vocabulary-Learning Tips:
      ============================= */}

      <h3 className="margin-y-50 text-center" id="VoCABulary-LEARNing-TIPS">🌻 Vocabulary-Learning Tips:</h3>

      {/* =============================
            1. Link to the image:
      ============================= */}
      
      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>1. Link to the image</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Imagine a foggy cloud shrouding a future event.</p>

        <ul className="list-square">

          <li>it's HARD to SAY for SURE, but perHAPS the PROJect will be deLAYED.</li>
          <li className="list-none">We're not sure what will happen. The project might be delayed.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Try to come up with as many example sentences as possible using "perHAPS" in different contexts.</p>

        <ul className="list-square">

          <li>perHAPS it will RAIN <Link to="/vocabulary/toMORrow-1">toMORrow</Link>.</li>
          <li className="list-none">Tomorrow might rain.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Read and write frequently to build your vocabulary and improve your use of "perHAPS."</p>

        <p className="text-indent-whole">Examples for comparison (the difference between "MAYbe" and "perHAPS"):</p>

          <ol>

            <li value="1"><Link to="/vocabulary/MAYbe-1">MAYbe</Link> we can gO OUT for DINner toNIGHT.</li>
            <li className="list-none">Maybe we could go out to eat tonight.</li>
            <li className="list-none margin-bottom-20"><span className="highlight-255-padding-0-4">More common</span> and frequently used in everyday communication.</li>

            <li value="2">perHAPS we should reconSIDer our deCISion.</li>
            <li className="list-none">Có lẽ chúng ta nên xem xét lại quyết định của mình.</li>
            <li className="list-none"><span className="highlight-255-padding-0-4">It's a bit more formal</span> than "maybe."</li>

          </ol>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"perHAPS" usually appears at the beginning of a sentence or before the main action.</li>

          <li className="margin-bottom-20">"perHAPS" is often used to express speculation or uncertainty.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

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