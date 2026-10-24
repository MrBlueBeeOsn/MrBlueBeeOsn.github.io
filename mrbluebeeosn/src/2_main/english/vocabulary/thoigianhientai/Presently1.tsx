import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function PRESently1(): React.JSX.Element {

  const postId = "PRESently1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-hien-tai"><mark className="highlight-tertiary-padding-4-88">ADverbs: hiện tại</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">PRESently
        <sup><Link to="/vocabulary/PRESently-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/PRESently-2">&nbsp;2&nbsp;</Link>
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
            <HashLink smooth to="#VERB">VERB</HashLink>
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
      
      <p>Great! Let's take a closer look at the word "PRESently."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                PRESently \<Link to="/pronunciation/5-vowel-system">PRES e̛nt ly</Link>\ /ˈprezəntli/ ⬤•• (THREE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Refers to the present moment, right now.</li>

            <li>A specific point in the near future, not long from now.</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">1. When "PRESently" is used to refer to the present, it is synonymous with "NOW" (right now).</p>

      <p className="margin-top-30 text-indent-whole">2. When "PRESently" is used to refer to the near future, it means that something will happen in the very near future.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">i am PRESently WORKing on this PROJect.</li>
          <li className="margin-bottom-20 list-none">I'm working on this project at the moment.</li>

          <li>the MEETing will beGIN PRESently.</li>
          <li className="list-none">The meeting will start on time.</li>

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

          <li id="ADjective">the PRESent situAtion is VERy DIFFERent.</li>
          <li className="margin-bottom-20 list-none">Things are very different at present.</li>

          <li id="VERB">i will preSENT my iDEas at the MEETing.</li>
          <li className="margin-bottom-20 list-none">I'm going to share my ideas at the meeting.</li>

          <li id="NOUN">as a PRESent for her graduAtion, i BOUGHT her a NEW LAPtop.</li>
          <li className="list-none">I bought her a new laptop for her graduation.</li>

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

          <li>i am READing a BOOK <Link to="/vocabulary/NOW-1">NOW</Link>.</li>
          <li className="margin-bottom-20 list-none">I am currently reading a book.</li>

          <li>i will be THERE <Link to="/vocabulary/SOON-1">SOON</Link>.</li>
          <li className="list-none">I'll be there shortly.</li>

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

          <li>i PREviously WORKED as a TEACHer.</li>
          <li className="margin-bottom-20 list-none">I used to be a teacher.</li>

          <li>we will disCUSS this LAter.</li>
          <li className="list-none">We will talk about this later.</li>

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

      <p className="text-indent-whole">Imagine a timeline and the position of "PRESently" on it.</p>

        <ul className="list-square">

          <li>PRESently, we are on TRACK with the PROJect TIMEline.</li>
          <li className="list-none">We are currently on schedule with our project.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Form sentences using "PRESently" in both its present and near-future meanings.</p>

        <ul className="list-square">

          <li>PRESently, i am EATing an APple.</li>
          <li className="margin-bottom-20 list-none">Right now, I'm eating an apple.</li>

          <li>the TRAIN will arRIVE PRESently.</li>
          <li className="list-none">The train is on its way.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Use this word frequently in your writing or conversations.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">i will GO to the STORE <Link to="/vocabulary/NOW-1">NOW</Link>.</li>
            <li className="list-none margin-bottom-20">I'm heading to the store now.</li>

            <li value="2">i will GO to the STORE PRESendly.</li>
            <li className="list-none margin-bottom-20">I'm going to the store soon.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: Both sentences have a similar meaning, but "PRESently" has a more formal tone and <span className="highlight-255-padding-0-4">emphasizes that the trip to the store will take place in the very near future.</span></p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Flexibility in meaning: The meaning of "PRESently" can vary depending on the context.</li>

          <li className="margin-bottom-20">Use in writing: "PRESently" is typically used in more formal writing than in everyday conversation.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 7, 2024 · by 💎GEM ·</span>
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