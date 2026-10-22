import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function CHEERfully1(): React.JSX.Element {

  const postId = "CHEERfully1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-POSitively"><mark className="highlight-tertiary-padding-4-8">POSitively</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">CHEERfully
        <sup><Link to="/vocabulary/CHEERfully-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/CHEERfully-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's explore the word "CHEERfully" together.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                CHEERfully \<Link to="/pronunciation/5-vowel-system">CHEER fưl ly</Link>\ /ˈtʃɪrfəli/ ⬤•• (THREE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Happy</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "CHEERfully" is used to describe an action or attitude carried out in a cheerful, optimistic manner, expressing satisfaction or enthusiasm.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">she GREETed me CHEERfully this MORNing.</li>
          <li className="margin-bottom-20 list-none">This morning, she greeted me with a happy smile.</li>

          <li>he WHISTled CHEERfully as he WORKED.</li>
          <li className="list-none">He made a happy whistling sound while he worked.</li>

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

          <li id="ADjective">she has a CHEERful persoNALity.</li>
          <li className="margin-bottom-20 list-none">Her personality is full of joy.</li>

          <li id="VERB">the CROWD CHEERED the TEAM ON.</li>
          <li className="margin-bottom-20 list-none">The crowd cheered loudly to show their support for the team.</li>

          <li id="NOUN">her CHEER <strong>bright</strong>enED UP the ROOM.</li>
          <li className="list-none">Her cheerful smile made the room brighter.</li>

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

          <li>they LIVED <Link to="/vocabulary/HAPpily-1">HAPpily</Link> EVer AFter.</li>
          <li className="margin-bottom-20 list-none">They were very happy together.</li>

          <li>she DANCED <Link to="/vocabulary/JOYfully-1">JOYfully</Link>.</li>
          <li className="list-none">She was dancing and feeling very happy.</li>

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

          <li>he SHOOK his HEAD SADly.</li>
          <li className="margin-bottom-20 list-none">He moved his head back and forth in a sad way.</li>

          <li>he ANswered GRUMpily.</li>
          <li className="list-none">He answered angrily.</li>

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

      <p className="text-indent-whole">Imagine someone smiling brightly.</p>

        <ul className="list-square">

          <li>they are GRINning CHEERfully.</li>
          <li className="list-none">They are smiling broadly.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create your own example sentences using the word "CHEERfully" in various contexts.</p>

        <ul className="list-square">

          <li>she CHEERfully aGREED to HELP me with the PROject.</li>
          <li className="list-none">She was excited and willing to help me with the project.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">This word is often used to express joy and enthusiasm.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">he ANswered the QUESTion.</li>
            <li className="list-none margin-bottom-20">He gave the answer to the question.</li>

            <li value="2">he ANswered the QUESTion CHEERfully.</li>
            <li className="list-none margin-bottom-20">He replied to the question in a cheerful voice.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence <span className="highlight-255-padding-0-4">emphasizes the respondent's positive attitude.</span></p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Emotions: "CHEERfully" is often associated with positive emotions such as joy and happiness.</li>

          <li className="margin-bottom-20">Attitude: It describes an optimistic attitude, a willingness to face anything.</li>

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