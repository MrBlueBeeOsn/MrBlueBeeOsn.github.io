import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function RAREly2(): React.JSX.Element {

  const postId = "RAREly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-SOMEtimes"><mark className="highlight-tertiary-padding-4-88">SOMEtimes</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">RAREly
        <sup>
          <Link to="/vocabulary/RAREly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/RAREly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#HAPpens-that">HAPpens that</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#SEEN-in">SEEN in</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#MENtioned-in">MENtioned in</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#USED-in">USED in</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#FOUND-in">FOUND in</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#VISits">VISits</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#ocCURS-in">ocCURS in</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#EAT">EAT</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#SLEEPS-MORE-than">SLEEPS MORE than</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#TALKS">TALKS</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let's take a closer look at the word "RAREly" (very rarely) and some common phrases that go with it.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              RAREly \<Link to="/pronunciation/5-vowel-system">RARE ly</Link>\ /ˈrerli/ ⬤• (TWO SYLlables)
              
            </span>
              
            &nbsp;is an adverb used to describe an action, event, or situation that occurs infrequently, rarely, or seldom.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="HAPpens-that">it RAREly HAPpens that we GET SNOW in this PART of the COUNtry.</li>
        <li className="list-none margin-bottom-20">It is uncommon for this part of the country to get snow.</li>

        <li value="2" id="SEEN-in">that TYPE of BIRD is RAREly SEEN in this ARea.</li>
        <li className="list-none margin-bottom-20">This type of bird is not usually seen around here.</li>

        <li value="3" id="MENtioned-in">the TOPic is RAREly MENtioned in PUBlic.</li>
        <li className="list-none margin-bottom-20">People hardly ever talk about this topic in public.</li>

        <li value="4" id="USED-in">that WORD is RAREly USED in EVERyday converSAtion.</li>
        <li className="list-none margin-bottom-20">That word is not used often in everyday conversation.</li>

        <li value="5" id="FOUND-in">ANcient ARtifacts are RAREly FOUND in this REgion.</li>
        <li className="list-none margin-bottom-20">It's not common to find old things like artifacts in this area.</li>

        <li value="6" id="VISits">my GRANDmother RAREly VISits us.</li>
        <li className="list-none margin-bottom-20">My grandmother doesn't visit us very often.</li>

        <li value="7" id="ocCURS-in">such a seVERE STORM RAREly ocCURS in this AREa.</li>
        <li className="list-none margin-bottom-20">It's not common for such a severe storm to occur in this area.</li>

        <li value="8" id="EAT">she RAREly EAT MEAT.</li>
        <li className="list-none margin-bottom-20">She hardly ever eats meat.</li>

        <li value="9" id="SLEEPS-MORE-than">due to her BUSy SCHEDule, she RAREly SLEEPS MORE than SIX HOURS a NIGHT.</li>
        <li className="list-none margin-bottom-20">She doesn't get more than six hours of sleep a night because she's so busy.</li>

        <li value="10" id="TALKS">he is a VERy QUIet PERson and RAREly TALKS.</li>
        <li className="list-none margin-bottom-20">He is a very shy person and hardly ever speaks.</li>

      </ol>

      <p>** All of the above phrases emphasize the infrequent or rare nature of an action, event, or situation. They are often used to create contrast or highlight the uniqueness of something.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"RAREly" is usually placed at the beginning of a sentence or before an action to modify it.</li>

          <li className="margin-bottom-20">This word can be replaced with synonyms such as "<Link to="/vocabulary/SELdom-1">SELdom</Link>", "inFREquently," or "HARDly EVer" to add variety to your writing style.</li>

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