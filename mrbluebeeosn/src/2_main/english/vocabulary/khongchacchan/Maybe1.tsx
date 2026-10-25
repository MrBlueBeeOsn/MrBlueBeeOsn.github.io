import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function MAYbe1(): React.JSX.Element {

  const postId = "MAYbe1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-MAYbe"><mark className="highlight-tertiary-padding-4-8">MAYbe</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">MAYbe
        <sup><Link to="/vocabulary/MAYbe-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/MAYbe-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's take a closer look at the word "MAYbe."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                MAYbe \<Link to="/pronunciation/5-vowel-system">MĀY bē</Link>\ /ˈmeɪ.bi/ ⬤• (TWO SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>It is possible</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">MAYbe: It shows that something might happen, or that we're not sure it will.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">MAYbe it will RAIN toMORrow.</li>
          <li className="margin-bottom-20 list-none">It might rain tomorrow.</li>

          <li>MAYbe you should CALL her.</li>
          <li className="list-none">It might be a good idea to give her a call.</li>

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

          <li className="list-none">There is no direct family for "MAYbe" because it is a single word.</li>

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

          <li><Link to="/vocabulary/perHAPS-1">perHAPS</Link> we can meeT UP LAter.</li>
          <li className="margin-bottom-20 list-none">Maybe we can get together later.</li>

          <li>it's <Link to="/vocabulary/POSsibly-1">POSsibly</Link> the BEST DAY of my LIFE.</li>
          <li className="list-none">Today might be the best day of my life.</li>

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

          <li>i <Link to="/vocabulary/DEFinitely-1">DEFinitely</Link> WANT to GO.</li>
          <li className="margin-bottom-20 list-none">I really, really want to go.</li>

          <li><Link to="/vocabulary/CERtainly-1">CERtainly</Link>, you can BORrow my BOOK.</li>
          <li className="list-none">You are welcome to borrow my book.</li>

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

      <p className="text-indent-whole">Imagine a big question mark when you're unsure about something.</p>

        <ul className="list-square">

          <li>MAYbe you KNOW the ANswer?</li>
          <li className="list-none">Do you know the answer to this question?</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create several sentences using "MAYbe" in different situations, such as when making a decision or making a prediction.</p>

        <ul className="list-square">

          <li>i'm NOT SURE, MAYbe i'll GO to the PARTy.</li>
          <li className="list-none">I'm not sure. I'm thinking of going to the party.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">I often use "MAYbe" in everyday conversation.</p>

        <p className="text-indent-whole">Comparison examples (the difference between perHAPS and MAYbe):</p>

          <ol>

            <li value="1"><Link to="/vocabulary/perHAPS-1">perHAPS</Link> you could HELP me with this PROJect.</li>
            <li className="list-none">I need some help with a project. Maybe you can help.</li>
            <li className="list-none margin-bottom-20"><span className="highlight-255-padding-0-4">perHAPS: This is a more polite way of saying it,</span> usually used in writing or in formal situations.</li>

            <li value="2">MAYbe we can GO to the MOvies toNIGHT.</li>
            <li className="list-none">Let's watch a movie tonight.</li>
            <li className="list-none"><span className="highlight-255-padding-0-4">MAYbe: These are common expressions</span> that people use in their daily conversations.</li>

          </ol>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"MAYbe" usually appears at the beginning of a sentence or before the main action.</li>

          <li className="margin-bottom-20">It expresses the speaker's hesitation or uncertainty.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

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