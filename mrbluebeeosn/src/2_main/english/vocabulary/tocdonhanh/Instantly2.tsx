import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function INstantly2(): React.JSX.Element {

  const postId = "INstantly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-fast"><mark className="highlight-tertiary-padding-4-8">ADverbs: fast</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">INstantly
        <sup>
          <Link to="/vocabulary/INstantly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/INstantly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#RECognizable-around-the">RECognizable a<strong>round</strong> the</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#adDICTive">adDICTive</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#CLASsic">CLASsic</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#RECognizable2">RECognizable</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#reGRETful">reGRETful</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#reLIEVED-when">reLIEVED when</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#FAmous">FAmous</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#RECognizable3">RECognizable</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#forGOTten">forGOTten</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#conNECTed-when">conNECTed when</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let’s take a closer look at the word “instantly” and some common phrases that go with it.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              INstantly \<Link to="/pronunciation/5-vowel-system">IN sta̛nt ly</Link>\ /ˈɪnstəntli/ ⬤•• (THREE SYLlables)
              
            </span>
              
            &nbsp;in English means "immediately" or "instantly" and is often used to describe an action or event that occurs very quickly, without delay.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="RECognizable-around-the">the EIffel TOWer is INstantly RECognizable a<strong>round</strong> the WORLD.</li>
        <li className="list-none margin-bottom-20">The Eiffel Tower is a world-famous symbol of France that is easily recognized everywhere.</li>

        <li value="2" id="adDICTive">this GAME is so much FUN, it's INstantly adDICTive.</li>
        <li className="list-none margin-bottom-20">This game is so much fun. It'll quickly become your new favorite.</li>

        <li value="3" id="CLASsic">the NEW SONG beCAME an INstantly CLASsic HIT.</li>
        <li className="list-none margin-bottom-20">The song was an immediate success, becoming a classic.</li>

        <li value="4" id="RECognizable2">i KNEW it was her INstantly RECognizable VOICE.</li>
        <li className="list-none margin-bottom-20">I knew it was her voice right away because I could tell it was the same as I remembered.</li>

        <li value="5" id="reGRETful">as <strong>soon</strong> as i SAID it, i FELT INstantly reGRETful.</li>
        <li className="list-none margin-bottom-20">I immediately felt regret when I said it.</li>

        <li value="6" id="reLIEVED-when">i FELT INstantly reLIEVED when i HEARD the GOOD NEWS.</li>
        <li className="list-none margin-bottom-20">I felt a lot better as soon as I heard the good news.</li>

        <li value="7" id="FAmous">the VIdeo WENT VIral and she beCAME INstantly FAmous.</li>
        <li className="list-none margin-bottom-20">The video spread quickly and made her famous right away.</li>

        <li value="8" id="RECognizable3">the NIke SWOOSH is an INstantly RECognizable LOgo.</li>
        <li className="list-none margin-bottom-20">The Nike swoosh is a logo that many people recognize immediately.</li>

        <li value="9" id="forGOTten">as <strong>soon</strong> as i LEFT the ROOM, his NAME was INstantly forGOTten.</li>
        <li className="list-none margin-bottom-20">No one remembered his name as soon as I left the room.</li>

        <li value="10" id="conNECTed-when">we INstantly conNECTed when we FIRST MET.</li>
        <li className="list-none margin-bottom-20">We were immediately attracted to each other when we first met.</li>

      </ol>

      <p>** All of the above phrases emphasize the immediacy, speed, and lack of delay in an action, event, or emotion. They are often used to create vivid and memorable imagery.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"Instantly" is often placed before an adjective or a past participle to emphasize the meaning.</li>

          <li className="margin-bottom-20">This word is commonly used in spoken or informal written language to create a strong effect.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping this information is helpful to you! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 23, 2024 · by 💎GEM ·</span>
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