import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function TENderly2(): React.JSX.Element {

  const postId = "TENderly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-GENTly"><mark className="highlight-tertiary-padding-4-8">GENTly</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">TENderly
        <sup>
          <Link to="/vocabulary/TENderly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/TENderly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#HELD">HELD</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#TOUCHED">TOUCHED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#KISSED">KISSED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#CARED-for">CARED for</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#SPOKE-to-about">SPOKE to ... a<strong>bout</strong></HashLink>
          </span> &nbsp;
        
          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#LOOKED-at">LOOKED at</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#SMILED-at">SMILED at</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#emBRACED">emBRACED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#COMforted">COMforted</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#caRESSED">caRESSED</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let’s take a closer look at the word “TENderly” (tender) and some common phrases that go with it.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              TENderly \<Link to="/pronunciation/5-vowel-system">TEN de̛r ly</Link>\ /ˈten.dər.li/ ⬤•• (THREE SYLlables)
              
            </span>
              
            &nbsp;is often used to describe an action or statement made in a gentle, affectionate manner that expresses care and love.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="HELD">she TENderly HELD the BAby in her ARMS.</li>
        <li className="list-none margin-bottom-20">She held the baby very gently.</li>

        <li value="2" id="TOUCHED">he TENderly TOUCHED her CHEEK.</li>
        <li className="list-none margin-bottom-20">He gently touched her cheek with his finger.</li>

        <li value="3" id="KISSED">they TENderly KISSED GOODbye.</li>
        <li className="list-none margin-bottom-20">They kissed each other goodbye.</li>

        <li value="4" id="CARED-for">she TENderly CARED for her SICK MOTHer.</li>
        <li className="list-none margin-bottom-20">She took care of her sick mother with love and compassion.</li>

        <li value="5" id="SPOKE-to-about">he TENderly SPOKE to her a<strong>bout</strong> her FEARS.</li>
        <li className="list-none margin-bottom-20">He gently spoke to her about the things she was afraid of.</li>

        <li value="6" id="LOOKED-at">she TENderly LOOKED at her SLEEPing CHILD.</li>
        <li className="list-none margin-bottom-20">She looked at her baby, who was asleep.</li>

        <li value="7" id="SMILED-at">he TENderly SMILED at her.</li>
        <li className="list-none margin-bottom-20">He gave her a gentle smile.</li>

        <li value="8" id="emBRACED">they TENderly emBRACED <strong>af</strong>ter their LONG sepaRAtion.</li>
        <li className="list-none margin-bottom-20">They hugged each other after being apart for a long time.</li>

        <li value="9" id="COMforted">she TENderly COMforted her FRIEND who was CRYing.</li>
        <li className="list-none margin-bottom-20">She gently took care of her sad friend.</li>

        <li value="10" id="caRESSED">he TENderly caRESSED her HAIR.</li>
        <li className="list-none margin-bottom-20">He gently stroked her hair.</li>

      </ol>

      <p>** All of the phrases above emphasize the gentleness and tenderness of an action. They are often used to describe actions that express love and care.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"TENderly" is often used before a verb to modify it.</li>

          <li className="margin-bottom-20">This word has a positive connotation, expressing tenderness and affection.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping this information is helpful to you! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>April 1, 2025 · by 💎GEM ·</span>
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