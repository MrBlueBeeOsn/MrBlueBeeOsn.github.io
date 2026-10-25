import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SELdom2(): React.JSX.Element {

  const postId = "SELdom2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-SOMEtimes"><mark className="highlight-tertiary-padding-4-88">SOMEtimes</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">SELdom
        <sup>
          <Link to="/vocabulary/SELdom-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/SELdom-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#SEE-at">SEE ... at</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#GOES-to-the">GOES to the</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#EATS">EATS</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#READ">READ</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#PLAY">PLAY</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#HAVE-TIME-to-reLAX">HAVE TIME to reLAX</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#THINKS-about-the">THINKS about the</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#MAKES-misTAKES-in">MAKES misTAKES in</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#FEEL-LONEly">FEEL LONEly</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#COME-to-VISit">COME to VISit</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let's take a closer look at how to use the word "SELdom" (rarely) in English.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              SELdom \<Link to="/pronunciation/5-vowel-system">SEL dơm</Link>\ /ˈsɛldəm/ ⬤• (TWO SYLlables)
              
            </span>
              
            &nbsp;is an adverb of frequency used to describe an action or event that occurs very rarely.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="SEE-at">i SELdom SEE her at SCHOOL.</li>
        <li className="list-none margin-bottom-20">She doesn't usually go to school.</li>

        <li value="2" id="GOES-to-the">he SELdom GOES to the CINema.</li>
        <li className="list-none margin-bottom-20">He hardly ever goes to the movies.</li>

        <li value="3" id="EATS">she SELdom EATS SPIcy FOOD.</li>
        <li className="list-none margin-bottom-20">She doesn't usually eat spicy food.</li>

        <li value="4" id="READ">they SELdom READ NEWSpapers.</li>
        <li className="list-none margin-bottom-20">They don't often read the news.</li>

        <li value="5" id="PLAY">we SELdom PLAY SPORTS.</li>
        <li className="list-none margin-bottom-20">We don't play sports very often.</li>

        <li value="6" id="HAVE-TIME-to-reLAX">i SELdom HAVE TIME to reLAX.</li>
        <li className="list-none margin-bottom-20">I hardly ever have a chance to relax.</li>

        <li value="7" id="THINKS-about-the">she SELdom THINKS a<strong>bout</strong> the PAST.</li>
        <li className="list-none margin-bottom-20">She doesn't usually think about the past.</li>

        <li value="8" id="MAKES-misTAKES-in">he SELdom MAKES misTAKES in his WORK.</li>
        <li className="list-none margin-bottom-20">He rarely makes mistakes at work.</li>

        <li value="9" id="FEEL-LONEly">i SELdom FEEL LONEly.</li>
        <li className="list-none margin-bottom-20">I almost never feel lonely.</li>

        <li value="10" id="COME-to-VISit">they SELdom COME to VISit us.</li>
        <li className="list-none margin-bottom-20">They don't often come to visit us.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"SELdom" usually comes before the main verb in a sentence.</li>

          <li className="margin-bottom-20">You can combine "SELdom" with many other adverbs to create more varied phrases.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping this information is helpful to you! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 15, 2024 · by 💎GEM ·</span>
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