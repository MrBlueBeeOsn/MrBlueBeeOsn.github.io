import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function GRADually1(): React.JSX.Element {

  const postId = "GRADually1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-SLOWly"><mark className="highlight-tertiary-padding-4-8">SLOWly</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">GRADually
        <sup><Link to="/vocabulary/GRADually-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/GRADually-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's take a closer look at the word "GRADually."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                 GRADually \<Link to="/pronunciation/5-vowel-system">GRAD ü a̛l ly</Link>\ /ˈɡrædʒuəli/ ⬤••• (FOUR SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Gradually</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "GRADually" is used to describe a process that takes place gradually, slowly, step by step, and not suddenly.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">the SUN GRADually ROSE <strong>o</strong>ver the hoRIzon.</li>
          <li className="margin-bottom-20 list-none">Slowly, the sun started appearing over the horizon.</li>

          <li>her HEALTH is GRADually imPROVing.</li>
          <li className="list-none">She is slowly becoming healthier.</li>

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

          <li id="ADjective">there was a GRADual inCREASE in TEMPERature.</li>
          <li className="margin-bottom-20 list-none">The temperature increased by a small amount.</li>

          <li id="VERB">the TEAcher GRADed the STUdents' ESsays.</li>
          <li className="margin-bottom-20 list-none">The teachers reviewed the students' essays and gave them a grade.</li>

          <li id="NOUN">she is in the FIFTH GRADE.</li>
          <li className="list-none">She is in the fifth grade, which is the last year of elementary school before middle school.</li>

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

          <li>the CLOCK <Link to="/vocabulary/SLOWly-1">SLOWly</Link> TICKED.</li>
          <li className="margin-bottom-20 list-none">The clock moved very slowly.</li>

          <li>the popuLAtion is <Link to="/vocabulary/STEADily-1">STEADily</Link> inCREAsing.</li>
          <li className="margin-bottom-20 list-none">The number of people in the area is getting larger all the time.</li>

          <li>the diSEASE was deVELoping proGRESSively.</li>
          <li className="list-none">The disease was getting worse over time.</li>

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

          <li>the LIGHTS <Link to="/vocabulary/SUDdenly-1">SUDdenly</Link> wenT OUT.</li>
          <li className="margin-bottom-20 list-none">Out of the sudden, the lights went off.</li>

          <li>the MEEting ENDed abRUPTly.</li>
          <li className="margin-bottom-20 list-none">The meeting ended all of a sudden.</li>

          <li>the CAR acCELerated <Link to="/vocabulary/RAPidly-1">RAPidly</Link>.</li>
          <li className="list-none">The car sped up quickly.</li>

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

      <p className="text-indent-whole">Imagine a tree growing over time, or a person learning a new skill and becoming more and more proficient at it.</p>

        <ul className="list-square">

          <li>the TREE GREW GRADually <strong>o</strong>ver the YEARS.</li>
          <li className="margin-bottom-20 list-none">The tree grew slowly over time.</li>

          <li>she GRADually beCAME MORE proFIcient in the NEW SKILL.</li>
          <li className="list-none">She slowly became better at the new skill.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create your own example sentences using the word "GRADually" in various contexts.</p>

        <ul className="list-square">

          <li>the WEATHer is GRADually GETting WARMer.</li>
          <li className="list-none">It's getting warmer, bit by bit.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">This word is often used when talking about slow changes and progress.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">the PLANT GREW <Link to="/vocabulary/QUICKly-1">QUICKly</Link>.</li>
            <li className="list-none margin-bottom-20">The plant grew really fast.</li>

            <li value="2">the PLANT GREW GRADually <strong>o</strong>ver the SUMmer.</li>
            <li className="list-none margin-bottom-20">The plant grew over the summer, but not all at once; it grew slowly, little by little.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence uses "GRADually" to <span className="highlight-255-padding-0-4">emphasize</span> that the tree's growth occurs <span className="highlight-255-padding-0-4">slowly,</span> in stages, over a long period of time (throughout the summer).</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Contrast with "suddenly": "GRADually" is often used in contrast to "<Link to="/vocabulary/SUDdenly-1">SUDdenly</Link>" to emphasize a gradual change.</li>

          <li className="margin-bottom-20">Describing a process: This word is often used to describe a process that takes place over a long period of time.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 10, 2024 · by 💎GEM ·</span>
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