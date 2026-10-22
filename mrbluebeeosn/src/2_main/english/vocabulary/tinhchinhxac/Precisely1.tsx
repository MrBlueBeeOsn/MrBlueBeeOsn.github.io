import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function preCISEly1(): React.JSX.Element {

  const postId = "preCISEly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-eXACTly"><mark className="highlight-tertiary-padding-4-8">eXACTly</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">preCISEly
        <sup><Link to="/vocabulary/preCISEly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/preCISEly-2">&nbsp;2&nbsp;</Link>
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

      <p>Great! Let's explore the word "preCISEly" together.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                preCISEly \<Link to="/pronunciation/5-vowel-system">pre CĪSE ly</Link>\ /prɪˈsaɪs.li/ •⬤• (THREE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Exactly</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div> 

      </div>

      <p className="margin-top-20 text-indent-whole">The word "preCISEly" describes an action or state that is carried out precisely, correctly, and meticulously down to the last detail, without any errors or ambiguity.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">he MEASured the inGREdients preCISEly.</li>
          <li className="margin-bottom-20 list-none">He carefully measured the ingredients.</li>

          <li>she exPLAINED the situAtion preCISEly.</li>
          <li className="list-none">She gave an exact explanation of the situation.</li>

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

          <li id="ADjective">he GAVE preCISE inSTRUCtions.</li>
          <li className="margin-bottom-20 list-none">He provided clear instructions.</li>

          <li id="NOUN">the maCHINE OPerates with GREAT preCISion.</li>
          <li className="list-none">The machine works very accurately.</li>

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

          <li>he rePORTed the FACTS <Link to="/vocabulary/ACcurately-1">ACcurately</Link>.</li>
          <li className="margin-bottom-20 list-none">He reported the facts correctly.</li>

          <li>that's <Link to="/vocabulary/eXACTly-1">eXACTly</Link> WHAT I MEANT.</li>
          <li className="margin-bottom-20 list-none">That's exactly what I was trying to say.</li>

          <li>he speCIFically LISTed the deTAILS.</li>
          <li className="list-none">He wrote down all the details.</li>

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

          <li>he rePORTed the FIGures inACcurately.</li>
          <li className="margin-bottom-20 list-none">He didn't report those figures correctly.</li>

          <li>he reMEMbered VAGUEly.</li>
          <li className="margin-bottom-20 list-none">He remembered only a few things.</li>

          <li>he EStimated the COST ROUGHly.</li>
          <li className="list-none">He estimated the cost without much precision.</li>

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

      <p className="text-indent-whole">Imagine a jeweler crafting an exquisite piece of jewelry or a scientist conducting an experiment with precise measurements.</p>

        <ul className="list-square">

          <li>the JEWEler WORKED preCISEly on the INtricate deSIGN.</li>
          <li className="margin-bottom-20 list-none">The jeweler carefully and efficiently created the complex design.</li>

          <li>the SCIentist MEASured the reSULTS preCISEly.</li>
          <li className="list-none">The scientist measured the results correctly.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create sentences related to situations that demonstrate accuracy and attention to detail.</p>

        <ul className="list-square">

          <li>the SURgeon MADE the inCISion preCISEly.</li>
          <li className="list-none">The surgeon made the cut with great accuracy.</li>

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

            <li value="1">he MEASured the inGREdients.</li>
            <li className="list-none margin-bottom-20">He checked the ingredients.</li>

            <li value="2">he MEASured the inGREdients preCISEly.</li>
            <li className="list-none margin-bottom-20">He carefully measured the ingredients.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence <span className="highlight-255-padding-0-4">emphasizes that the measurement was carried out carefully</span> and with precision down to the smallest detail.</p>

      </div>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Emphasizing precision and meticulousness: "preCISEly" emphasizes precision, accuracy, and meticulous attention to detail in actions or speech.</li>

          <li className="margin-bottom-20">Often used to describe measurements, explanations, or actions that are free of errors: This word is often used to describe measurements, explanations, or actions that are carried out carefully and without error.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
          
        <div className="post-date no-margin">
          <span>April 15, 2025 · by 💎GEM ·</span>
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