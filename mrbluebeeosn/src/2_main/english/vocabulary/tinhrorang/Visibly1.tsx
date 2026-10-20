import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function VISibly1(): React.JSX.Element {

  const postId = "VISibly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-CLEARly"><mark className="highlight-tertiary-padding-4-8">CLEARly</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">VISibly
        <sup><Link to="/vocabulary/VISibly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/VISibly-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's take a closer look at the word "VISibly."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                VISibly \<Link to="/pronunciation/5-vowel-system">VIS i̛ bly</Link>\ /ˈvɪzəbli/ ⬤•• (THREE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Clearly</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "VISibly" is used to describe something that is easily noticeable to the naked eye-clearly and undeniably. It is often used to emphasize the obviousness of a state, emotion, or change.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">she was VISibly upSET.</li>
          <li className="margin-bottom-20 list-none">She was clearly unhappy.</li>

          <li>the DAMage to the CAR was VISibly apPARent.</li>
          <li className="list-none">You could clearly see the damage to the car.</li>

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

          <li id="ADjective">the STARS are VISible on a CLEAR NIGHT.</li>
          <li className="margin-bottom-20 list-none">You can see the stars at night if the sky is clear.</li>

          <li id="NOUN">she has EXcellent VISion.</li>
          <li className="list-none">She sees very well.</li>

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

          <li>he <Link to="/vocabulary/CLEARly-1">CLEARly</Link> STAted his oPINion.</li>
          <li className="margin-bottom-20 list-none">He made it clear what his opinion is.</li>

          <li>it was <Link to="/vocabulary/OBviously-1">OBviously</Link> a misTAKE.</li>
          <li className="list-none">It was obviously just an error.</li>

        </ul>

      {/* =============================
            ANtonyms:
      ============================= */}

      <p className="margin-top-20" id="ANtonyms">
        <mark className="highlight-238-padding-4-8">
          <strong>ANtonyms</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>the CHANGE was inVISibly SLOW.</li>
          <li className="margin-bottom-20 list-none">The change was slow, and you couldn't see it.</li>

          <li>the PLANT GREW imperCEPtibly <strong>o</strong>ver the WEEKS.</li>
          <li className="list-none">The plant grew very quickly over the past few weeks, and it was easy to miss.</li>

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

      <p className="text-indent-whole">Imagine someone with a face flushed with anger or a large stain on a white shirt.</p>

        <ul className="list-square">

          <li>his FACE was VISibly RED with ANGer.</li>
          <li className="margin-bottom-20 list-none">His face was all red because he was so angry.</li>

          <li>here was a VISibly LARGE STAIN on his WHITE SHIRT.</li>
          <li className="list-none">There was a big stain on his white shirt.</li>

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

      <p className="text-indent-whole">Create sentences related to easily recognizable situations.</p>

        <ul className="list-square">

          <li>she was VISibly TIred <strong>af</strong>ter the LONG JOURney.</li>
          <li className="list-none">It was clear that she was tired after the long trip.</li>

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

      <p className="text-indent-whole">Use this word frequently in your writing or conversations.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">he was SAD.</li>
            <li className="list-none margin-bottom-20">He suffered from depression.</li>

            <li value="2">he was VISibly SAD, with TEARS in his EYES.</li>
            <li className="list-none margin-bottom-20">He looked upset and was crying.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence <span className="highlight-255-padding-0-4">emphasizes that his sadness is very evident</span> from his facial expression.</p>

        {/* <span className="highlight-255-padding-0-4"></span> */}

      </div>

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Obviousness: Emphasizes what is easily noticeable to the naked eye.</li>

          <li className="margin-bottom-20">Intuitive: Often used to describe changes in appearance, emotions, or state.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

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