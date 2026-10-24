import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function meTICulously1(): React.JSX.Element {

  const postId = "meTICulously1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-CAREfully"><mark className="highlight-tertiary-padding-4-8">CAREfully</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">meTICulously
        <sup><Link to="/vocabulary/meTICulously-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/meTICulously-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's take a closer look at the word "meTICulously."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                meTICulously \<Link to="/pronunciation/5-vowel-system">me̛ TIC ư lơus ly</Link>\ /məˈtɪkjələsli/ •⬤••• (FIVE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Meticulously</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "meTICulously" is used to describe an action performed with great care and precision, paying attention to even the smallest details. It conveys accuracy, thoroughness, and a commitment to high quality.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">she meTICulously PLANNED her WEDding.</li>
          <li className="margin-bottom-20 list-none">She planned her wedding down to the last detail.</li>

          <li>the SCIentist meTICulously reCORDed the DAta.</li>
          <li className="list-none">The scientist carefully recorded the data using a special computer program.</li>

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

          <li id="ADjective">he is a meTICulous WORKer.</li>
          <li className="margin-bottom-20 list-none">He works hard to make sure he gets things right.</li>

          <li id="NOUN">her meTICulousness is ADmirable.</li>
          <li className="list-none">She is very thoughtful and that is admirable.</li>

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

          <li>she <Link to="/vocabulary/CAREfully-1">CAREfully</Link> WRAPPED the GIFT.</li>
          <li className="margin-bottom-20 list-none">She took care wrapping the gift.</li>

          <li>he <Link to="/vocabulary/THORoughly-1">THORoughly</Link> CLEANED the ROOM.</li>
          <li className="list-none">He made the room very clean.</li>

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

          <li>he CARElessly threw aWAY the LETter.</li>
          <li className="margin-bottom-20 list-none">He threw the letter away without caring about it.</li>

          <li>she HAStily FINished her WORK.</li>
          <li className="list-none">She finished her work quickly.</li>

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

      <p className="text-indent-whole">Imagine a jeweler working meticulously with tiny tools.</p>

        <ul className="list-square">

          <li>the JEWEler is meTICulously CRAFTing the INtricate deSIGN.</li>
          <li className="list-none">The jeweler is making a complex design.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create example sentences related to jobs that require attention to detail.</p>

        <ul className="list-square">

          <li>the ARTist meTICulously PAINTed the PORtrait.</li>
          <li className="list-none">The artist painted a portrait with great care and precision.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Use this word regularly in conversations or in writing.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">he WROTE the rePORT.</li>
            <li className="list-none margin-bottom-20">He was the one who wrote the report.</li>

            <li value="2">he meTICulously WROTE the rePORT.</li>
            <li className="list-none margin-bottom-20">He wrote the report with great care.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence uses "meTICulously" to <span className="highlight-255-padding-0-4">emphasize that he spent a great deal of time</span> and effort writing the report, paying attention to even the smallest details.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Attention to detail: "meTICulously" emphasizes paying attention to even the smallest details.</li>

          <li className="margin-bottom-20">High quality: It is often associated with work that requires a high degree of precision.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 3, 2024 · by 💎GEM ·</span>
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