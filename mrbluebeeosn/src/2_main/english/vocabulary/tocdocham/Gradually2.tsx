import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function GRADually2(): React.JSX.Element {

  const postId = "GRADually2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-SLOWly"><mark className="highlight-tertiary-padding-4-8">ADverbs: SLOWly</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">GRADually
        <sup>
          <Link to="/vocabulary/GRADually-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/GRADually-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#inCREASED-throughout-the">inCREASED through<strong>out the</strong></HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#deCREASED-as">deCREASED as</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#reCOVered-from">reCOVered from</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#CHANGED-over">CHANGED <strong>o</strong>ver</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#imPROVED-after">imPROVED <strong>af</strong>ter</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#FAded-as-the">FAded as the</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#disapPEARED-after">disapPEARED <strong>af</strong>ter</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#deVELoped-into">deVELoped <strong>in</strong>to</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#aDAPTed-to-the">aDAPTed to the</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#deCLINED-after-the">deCLINED <strong>af</strong>ter the</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let's take a closer look at the word "GRADually" (gradually) and some common phrases that go with it.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
               GRADually \<Link to="/pronunciation/5-vowel-system">GRAD ü a̛l ly</Link>\ /ˈɡrædʒuəli/ ⬤••• (FOUR SYLlables)
              
            </span>
              
            &nbsp;is often used in English to describe a process that occurs slowly, step by step, without any sudden changes.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="inCREASED-throughout-the">the TEMPERature GRADually inCREASED through<strong>out</strong> the DAY.</li>
        <li className="list-none margin-bottom-20">The temperature went up gradually during the day.</li>

        <li value="2" id="deCREASED-as">the NOISE GRADually deCREASED as we MOVED FARther aWAY.</li>
        <li className="list-none margin-bottom-20">As we moved farther away, the noise got quieter and quieter.</li>

        <li value="3" id="reCOVered-from">she GRADually reCOVered from her ILLness.</li>
        <li className="list-none margin-bottom-20">She was able to get better, step by step, after being sick.</li>

        <li value="4" id="CHANGED-over">the CLImate GRADually CHANGED <strong>o</strong>ver MILlions of YEARS.</li>
        <li className="list-none margin-bottom-20">The Earth's climate has changed over the course of millions of years.</li>

        <li value="5" id="imPROVED-after">his ENGlish GRADually imPROVED <strong>af</strong>ter STUDying for a YEAR.</li>
        <li className="list-none margin-bottom-20">He learned to speak English a little better after studying for one year.</li>

        <li value="6" id="FAded-as-the">the SUNlight GRADually FAded as the DAY TURNED into NIGHT.</li>
        <li className="list-none margin-bottom-20">The sun gradually went down as the day became night.</li>

        <li value="7" id="disapPEARED-after">the PAIN GRADually disapPEARED <strong>af</strong>ter TAKing the MEDicine.</li>
        <li className="list-none margin-bottom-20">The pain went away little by little after I took the medicine.</li>

        <li value="8" id="deVELoped-into">the CIty GRADually deVELoped <strong>in</strong>to a MAjor meTROPolis.</li>
        <li className="list-none margin-bottom-20">The city changed over time and became a major metropolitan area.</li>

        <li value="9" id="aDAPTed-to-the">she GRADually aDAPTed to the NEW enVIronment.</li>
        <li className="list-none margin-bottom-20">She slowly got used to the new situation.</li>

        <li value="10" id="deCLINED-after-the">his HEALTH GRADually deCLINED <strong>af</strong>ter the ACcident.</li>
        <li className="list-none margin-bottom-20">His health got worse after the accident.</li>

      </ol>

      <p>** The phrases above all emphasize change that occurs slowly, gradually, and steadily. They are often used to describe natural processes, development, and changes in state or situation.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"GRADually" is often placed before a verb to emphasize its meaning.</li>

          <li className="margin-bottom-20">This word can be used in a variety of contexts, ranging from science and technology to everyday life.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping this information is helpful to you! 🐝</p>

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