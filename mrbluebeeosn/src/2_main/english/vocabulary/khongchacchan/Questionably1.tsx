import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function QUESTionably1(): React.JSX.Element {

  const postId = "QUESTionably1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-MAYbe"><mark className="highlight-tertiary-padding-4-8">MAYbe</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">QUESTionably
        <sup><Link to="/vocabulary/QUESTionably-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/QUESTionably-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's take a closer look at the word "QUESTionably."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                QUESTionably \<Link to="/pronunciation/5-vowel-system">QUES tiơn a̛b ly</Link>\ /ˈkwɛstʃənəbli/ ⬤••• (FOUR SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Suspicious</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "QUESTionably" is used to describe something that is uncertain, questionable, or possibly untrue. It is often used to express skepticism or disagreement regarding a particular issue.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">his STORy SOUNDS QUESTionably TRUE.</li>
          <li className="margin-bottom-20 list-none">It's unclear if his story is true.</li>

          <li>the DAta is QUESTionably ACcurate.</li>
          <li className="list-none">The information might not be correct.</li>

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

          <li id="ADjective">his ACTions are QUESTionable.</li>
          <li className="margin-bottom-20 list-none">People have different opinions about what he does.</li>
          
          <li id="VERB">i QUESTion his MOtives.</li>
          <li className="margin-bottom-20 list-none">I want to know why he did it.</li>

          <li id="NOUN">i have a QUESTion for you.</li>
          <li className="list-none">I want to ask you something.</li>

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

          <li>he LOOKED at me DOUBTfully.</li>
          <li className="margin-bottom-20 list-none">He looked at me as if he didn't believe me.</li>

          <li>she GLANCED at him susPICiously.</li>
          <li className="list-none">She looked at him with a doubtful expression.</li>

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

          <li>i <Link to="/vocabulary/DEFinitely-1">DEFinitely</Link> KNOW the ANswer.</li>
          <li className="margin-bottom-20 list-none">I know exactly what the answer is.</li>

          <li><Link to="/vocabulary/CERtainly-1">CERtainly</Link>, i will HELP you.</li>
          <li className="list-none">I'll definitely be there to help.</li>

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

      <p className="text-indent-whole">Imagine a big question mark or a symbol of doubt.</p>

        <ul className="list-square">

          <li>the QUALity of the PRODuct is QUESTionably HIGH.</li>
          <li className="list-none">The product's quality is not very good.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create sentences related to suspicious situations.</p>

        <ul className="list-square">

          <li>the EVidence is QUESTionably reLIable.</li>
          <li className="list-none">The evidence might not be completely trustworthy.</li>

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

            <li value="1">he is a GOOD PERson.</li>
            <li className="list-none margin-bottom-20">He's a nice guy.</li>

            <li value="2">his MOtives are QUESTionably GOOD.</li>
            <li className="list-none margin-bottom-20">We can't say for sure that his reasons are good.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: <span className="highlight-255-padding-0-4">The second sentence casts doubt on that person’s INTENT,</span> while the first sentence states it with certainty.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Create skepticism: To instill a sense of skepticism or distrust.</li>

          <li className="margin-bottom-20">Uncertainty: To express uncertainty about the authenticity or reliability of something.</li>

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