import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function INstantly1(): React.JSX.Element {

  const postId = "INstantly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-fast"><mark className="highlight-tertiary-padding-4-8">ADverbs: fast</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">INstantly
        <sup><Link to="/vocabulary/INstantly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/INstantly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                      
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#ADverb">ADverb</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#ADjective">ADjective</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#NOUN">NOUN</HashLink>
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
      
      <p>Great! Let's learn about the word "instantly."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                INstantly \<Link to="/pronunciation/5-vowel-system">IN sta̛nt ly</Link>\ /ˈɪnstəntli/ ⬤•• (THREE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Immediately</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "instantly" is used to describe an action or event that occurs very quickly, without delay. It conveys the idea of immediacy.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">when i turnED ON the LIGHT, the ROOM beCAME INstantly BRIGHter.</li>
          <li className="margin-bottom-20 list-none">I turned on the light. The room immediately became much brighter.</li>

          <li>she reCOGnized him INstantly.</li>
          <li className="list-none">She knew who he was right away.</li>

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

          <li id="ADjective">THIS is an INstant COFfee.</li>
          <li className="margin-bottom-20 list-none">This coffee will make you feel awake right away.</li>

          <li id="NOUN">the reACtion was instanTAneous.</li>
          <li className="list-none">The response was immediate.</li>

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

          <li>i rePLIED imMEdiately.</li>
          <li className="margin-bottom-20 list-none">I replied right away.</li>

          <li>COME HERE at ONCE!</li>
          <li className="list-none">Come here right away.</li>

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

          <li>the PLANT GREW <Link to="/vocabulary/GRADually-1">GRADually</Link>.</li>
          <li className="margin-bottom-20 list-none">The plant grew little by little.</li>

          <li>she WALKED <Link to="/vocabulary/SLOWly-1">SLOWly</Link>.</li>
          <li className="list-none">She walked at a slow pace.</li>

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
          <mark className="highlight-255-padding-4-8"><strong>1. Link</strong></mark> 
        </strong>
        <strong>&nbsp;to the image</strong>:
      </p>

      <p className="text-indent-whole">Imagine a light bulb that turns on instantly when you flip the switch.</p>

        <ul className="list-square">

          <li>as <strong>soon</strong> as i TURNED on the SWITCH, the LIGHT BULB CAME on INstantly.</li>
          <li className="list-none">I turned the switch and the light bulb turned on right away.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create</strong></mark> 
        </strong>
        <strong>&nbsp;example sentences</strong>:
      </p>

      <p className="text-indent-whole">Create example sentences related to actions that happen very quickly.</p>

        <ul className="list-square">

          <li>she FELL aSLEEP INstantly <strong>af</strong>ter she CLOSED her EYES.</li>
          <li className="list-none">She fell asleep as soon as she closed her eyes.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
            <mark className="highlight-255-padding-4-8"><strong>3. Regular</strong></mark>
        </strong>
        <strong>&nbsp;practice</strong>:
      </p>

      <p className="text-indent-whole margin-bottom-20">Use this word regularly in conversations or in writing.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">the WAter BOILED.</li>
            <li className="list-none margin-bottom-20">The water started boiling.</li>

            <li value="2">the WAter BOILED INstantly.</li>
            <li className="list-none margin-bottom-20">The water was very hot when it was brought to a boil.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence uses "instantly" to <span className="highlight-255-padding-0-4">emphasize</span> that the water <span className="highlight-255-padding-0-4">boils very quickly</span>.</p>


      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Extremely short duration: "Instantly" emphasizes that an event occurs in an extremely short period of time.</li>

          <li className="margin-bottom-20">No delay: It contrasts with adverbs such as "<Link to="/vocabulary/GRADually-1">GRADually</Link>" hay "<Link to="/vocabulary/SLOWly-1">SLOWly</Link>".</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

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