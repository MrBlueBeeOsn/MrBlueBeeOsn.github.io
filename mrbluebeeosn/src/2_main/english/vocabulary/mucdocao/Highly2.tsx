import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function HIGHly2(): React.JSX.Element {

  const postId = "HIGHly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-SO"><mark className="highlight-tertiary-padding-4-8">SO</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">HIGHly
        <sup>
          <Link to="/vocabulary/HIGHly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/HIGHly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#recomMENDed-for">recomMENDed for</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#SKILLED">SKILLED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#MOtivated-to-DO-on">MOtivated to DO ... on</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#efFECtive-in">efFECtive in</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#comPETitive">comPETitive</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#unLIKEly-that">unLIKEly that</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#conTAgious">conTAgious</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#PRAISED-by-the">PRAISED by the</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#VISible-from">VISible from</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#soPHISticated">soPHISticated</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let’s take a closer look at the word “HIGHly” (very high) and some common phrases that go with it.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              HIGHly \<Link to="/pronunciation/5-vowel-system">HĪGH ly</Link>\ /ˈhaɪli/ ⬤• (TWO SYLlables)
              
            </span>
              
            &nbsp;is an adverb used to emphasize the high degree of an adjective or adverb. It is often used to describe something as being to a very high degree—whether very positive or very negative.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="recomMENDed-for">this BOOK is HIGHly recomMENDed for <strong>an</strong>yone INTERested in HISTORy.</li>
        <li className="list-none margin-bottom-20">If you like history, you'll love this book.</li>

        <li value="2" id="SKILLED">the STUdents were HIGHly SKILLED SURgeon.</li>
        <li className="list-none margin-bottom-20">The students were highly skilled surgeons, meaning they had the ability to successfully perform surgical operations.</li>

        <li value="3" id="MOtivated-to-DO-on">the STUdents were HIGHly MOtivated to DO WELL on the eXAM.</li>
        <li className="list-none margin-bottom-20">The students were very excited to do well on the test.</li>

        <li value="4" id="efFECtive-in">his NEW MEDicine is HIGHly efFECtive in TREATing the diSEASE.</li>
        <li className="list-none margin-bottom-20">His new medicine works really well to treat the disease.</li>

        <li value="5" id="comPETitive">the JOB MARket is HIGHly comPETitive.</li>
        <li className="list-none margin-bottom-20">There's a lot of competition in the job market.</li>

        <li value="6" id="unLIKEly-that">it is HIGHly unLIKEly that he will WIN the LOTtery.</li>
        <li className="list-none margin-bottom-20">He probably won't win the lottery.</li>

        <li value="7" id="conTAgious">the FLU is HIGHly conTAgious.</li>
        <li className="list-none margin-bottom-20">The flu is a very dangerous disease.</li>

        <li value="8" id="PRAISED-by-the">the MOvies was HIGHly PRAISED by the CRITics.</li>
        <li className="list-none margin-bottom-20">The movie received a lot of praise from critics.</li>

        <li value="9" id="VISible-from">the SIGN is HIGHly VISible from the HIGHway.</li>
        <li className="list-none margin-bottom-20">You can see the sign from the highway.</li>

        <li value="10" id="soPHISticated">the techNOLogy USED in this PRODuct is HIGHly soPHISticated.</li>
        <li className="list-none margin-bottom-20">This product uses cutting-edge technology.</li>

      </ol>

      <p>** The phrases above all emphasize the high degree of a quality or characteristic. They are often used to make a strong impression or to highlight an important point.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"HIGHly" is typically used before an adjective or adverb to modify it.</li>

          <li className="margin-bottom-20">This word can be replaced with synonyms such as "<Link to="/vocabulary/exTREMEly-1">exTREMEly</Link>", "<Link to="/vocabulary/VERy-1">VERy</Link>", or "reMARKably" to add variety to your writing style.</li>

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