import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function POSitively1(): React.JSX.Element {

  const postId = "POSitively1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-POSitively"><mark className="highlight-tertiary-padding-4-8">POSitively</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">POSitively
        <sup><Link to="/vocabulary/POSitively-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/POSitively-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's explore the word "POSitively" together.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                POSitively \<Link to="/pronunciation/5-vowel-system">POS i̛ tive ly</Link>\ /ˈpɒz.ə.tɪv.li/ ⬤••• (FOUR SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Positive</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "POSitively" can have several meanings depending on the context:</p>
      
        <ol>
      
          <li>In a positive sense: Expressing optimism, hope, or a focus on the good.</li>
      
          <li>In an affirmative, decisive sense: Expressing certainty, without doubt.</li>
      
          <li>In a beneficial sense: Leading to good results.</li>
      
        </ol>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">he reSPONDed POSitively to the sugGEStion.</li>
          <li className="margin-bottom-20 list-none">He agreed with the idea and said yes.</li>

          <li>she POSitively iDENtified the SUSpect.</li>
          <li className="margin-bottom-20 list-none">She was able to identify the suspect without a doubt.</li>

          <li>the NEW POLicy POSitively imPACted the COMpany's PROfits.</li>
          <li className="list-none">The new rule had a positive impact on the company's profits.</li>

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

          <li id="ADjective">he has a POSitive ATtitude.</li>
          <li className="margin-bottom-20 list-none">He is optimistic and upbeat.</li>

          <li className="list-none">the TEST reSULT was POSitive.</li>
          <li className="margin-bottom-20 list-none">The test result was good.</li>

          <li id="NOUN">her posiTIVity is conTAgious.</li>
          <li className="list-none">She is very positive, and that positivity is infectious.</li>

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

          <li>she CERtainly KNOWS WHAT she's DOing.</li>
          <li className="margin-bottom-20 list-none">She is very skilled and knowledgeable.</li>

          <li>he LOOKED at the FUture optiMIStically.</li>
          <li className="margin-bottom-20 list-none">He looked to the future with a positive outlook.</li>

          <li>the CRITics reVIEWED the MOvie FAvorably.</li>
          <li className="list-none">The movie received a good review from critics.</li>

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

          <li>he reACTed NEGatively to the NEWS.</li>
          <li className="margin-bottom-20 list-none">He was upset by the news.</li>

          <li>she SPOKE unCERtainly a<strong>bout</strong> her PLANS.</li>
          <li className="margin-bottom-20 list-none">She didn't sound very confident when she talked about her future.</li>

          <li>the BAD WEAther ADversely afFECTed the CROPS.</li>
          <li className="list-none">The bad weather hurt the crops.</li>

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

      <p className="text-indent-whole">Imagine someone smiling and saying "yes" with conviction.</p>

        <ul className="list-square">

          <li>he NODded and POSitively afFIRMED, "YES, we can DO it."</li>
          <li className="list-none">He nodded and emphatically said, "Yes, we can do it!"</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create sentences related to different situations to fully understand the meanings of the words.</p>

        <ul className="list-square">

          <li>the PAtient reSPONDed POSitively to the TREATment.</li>
          <li className="list-none">The patient reacted well to the treatment.</li>

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

            <li value="1">he ANswered the QUESTion.</li>
            <li className="list-none margin-bottom-20">He responded to the question.</li>

            <li value="2">he ANswered the QUESTion POSitively.</li>
            <li className="list-none margin-bottom-20">He said "Yes" to the question.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence <span className="highlight-255-padding-0-4">emphasizes the certainty or positive attitude</span> in his response.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Multiple meanings: "POSitively" can have several different meanings; context must be considered to understand it accurately</li>

          <li className="margin-bottom-20">Commonly used in many contexts: This word is widely used in many fields, from everyday communication to science and business.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>MARCH 29, 2025 · by 💎GEM ·</span>
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