import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function TENderly1(): React.JSX.Element {

  const postId = "TENderly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-GENTly"><mark className="highlight-tertiary-padding-4-8">GENTly</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">TENderly
        <sup><Link to="/vocabulary/TENderly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/TENderly-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's explore the word "TENderly" together.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                TENderly \<Link to="/pronunciation/5-vowel-system">TEN de̛r ly</Link>\ /ˈten.dər.li/ ⬤•• (THREE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Gentle</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "TENderly" describes an action or statement made in a gentle, affectionate manner that expresses care, love, and compassion.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">he KISSED her TENderly on the FOREhead.</li>
          <li className="margin-bottom-20 list-none">He gently kissed her on the forehead.</li>

          <li>she HELD the BAby TENderly in her ARMS.</li>
          <li className="list-none">She held the baby close to her chest.</li>


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

          <li id="ADjective">he has a TENder HEART.</li>
          <li className="margin-bottom-20 list-none">He is a kind and compassionate person.</li>

          <li id="VERB">she TENDED to the INjured BIRD.</li>
          <li className="margin-bottom-20 list-none">She took care of the bird that was hurt.</li>

          <li id="NOUN">he SHOWED GREAT TENderness to<strong>wards</strong> his CHILDren.</li>
          <li className="list-none">He was a very kind father.</li>

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

          <li>he TOUCHED her HAND <Link to="/vocabulary/GENTly-1">GENtly</Link>.</li>
          <li className="margin-bottom-20 list-none">He touched her hand with care.</li>

          <li>she SMILED afFECtionately at HIM.</li>
          <li className="margin-bottom-20 list-none">She smiled at him in a friendly way.</li>

          <li>he SPOKE LOVingly of his WIFE.</li>
          <li className="list-none">He said nice things about his wife.</li>

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

          <li>he SPOKE HARSHly to the CHILD.</li>
          <li className="margin-bottom-20 list-none">He spoke angrily to the child.</li>

          <li>he TREAted the ANimal ROUGHly.</li>
          <li className="margin-bottom-20 list-none">He didn't treat the animal kindly.</li>

          <li>he was BRUtally atTACKED.</li>
          <li className="list-none">He was hit very hard.</li>

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

      <p className="text-indent-whole">Imagine someone hugging or caressing a loved one.</p>

        <ul className="list-square">

          <li>he HELD his LOVED ONE TENderly.</li>
          <li className="margin-bottom-20 list-none">He gently held the person he loved.</li>

          <li>she caRESSED her FAMILy MEMber TENderly.</li>
          <li className="list-none">She gently stroked her family member.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create sentences related to situations that express tenderness and love.</p>

        <ul className="list-square">

          <li>she SANG a LULlaby TENderly to her BAby.</li>
          <li className="list-none">She sang a lullaby to her baby. The song was tender.</li>

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

            <li value="1">he KISSED her.</li>
            <li className="list-none margin-bottom-20">He kissed her on the lips.</li>

            <li value="2">he TENderly KISSED her.</li>
            <li className="list-none margin-bottom-20">He gave her a tender kiss.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence <span className="highlight-255-padding-0-4">emphasizes the tenderness and love</span> in his kiss.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Emphasizing tenderness and love: "TENderly" emphasizes tenderness, love, and compassion in actions or words.</li>

          <li className="margin-bottom-20">Commonly used to describe actions and words: This word is often used to describe actions and words that express love and care.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

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