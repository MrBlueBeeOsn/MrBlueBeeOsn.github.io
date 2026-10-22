import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function efFICiently1(): React.JSX.Element {

  const postId = "efFICiently1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-efFECTively"><mark className="highlight-tertiary-padding-4-8">efFECTively</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">efFICiently
        <sup><Link to="/vocabulary/efFICiently-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/efFICiently-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Great! Let's take a closer look at the word "efFICiently."</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                efFICiently \<Link to="/pronunciation/5-vowel-system">ef FIC ie̛nt ly</Link>\ /ɪˈfɪʃəntli/ •⬤•• (FOUR SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>An effective way</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "efFICiently" is used to describe an action that is performed quickly, economically, and achieves the best results with the least amount of effort and resources. It reflects the optimal use of time, energy, and other resources.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">she comPLETEd the TASK efFICiently.</li>
          <li className="margin-bottom-20 list-none">She finished the task quickly and successfully.</li>

          <li>this NEW SOFTware will HELP us WORK MORE efFICiently.</li>
          <li className="list-none">This new software will help us work better and more quickly.</li>

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

          <li id="ADjective">he is a VERy efFICient WORKer.</li>
          <li className="margin-bottom-20 list-none">He works quickly and well.</li>

          <li id="NOUN">the efFICiency of this maCHINE is reMARKable.</li>
          <li className="list-none">This machine's efficiency is really impressive.</li>

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

          <li>the MEDicine WORKED <Link to="/vocabulary/efFECTively-1">efFECTively</Link>.</li>
          <li className="margin-bottom-20 list-none">The medicine worked well.</li>

          <li>we NEED to WORK MORE <Link to="/vocabulary/proDUCTively-1">proDUCTively</Link> to MEET the DEADline.</li>
          <li className="list-none">We need to work harder to finish the project by the deadline.</li>

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

          <li>the OLD SYStem WORKED inefFICiently.</li>
          <li className="margin-bottom-20 list-none">The old system wasn't very effective.</li>

          <li>he SPENT his MONey WASTEfully.</li>
          <li className="list-none">He spent money without thinking.</li>

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

      <p className="text-indent-whole">Imagine someone working quickly and efficiently to get the job done.</p>

        <ul className="list-square">

          <li>he is WORKing VERy efFICiently to FINish the TASK.</li>
          <li className="list-none">He's working hard to complete the task.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create your own example sentences using the word "efFICiently" in various contexts.</p>

        <ul className="list-square">

          <li>she efFICiently MANaged her TIME to FINish all her TASKS.</li>
          <li className="list-none">She used her time well and finished all her tasks.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Use this word regularly in conversations and writing.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">he FINished the rePORT.</li>
            <li className="list-none margin-bottom-20">The report is finished.</li>

            <li value="2">he FINished the rePORT efFICiently in JUST ONE HOUR.</li>
            <li className="list-none margin-bottom-20">He was able to finish the report in just one hour.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence <span className="highlight-255-padding-0-4">emphasizes that he not only completed the report but also did so quickly</span> and efficiently.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Optimization: "efFICiently" emphasizes the optimization of resources to achieve goals.</li>

          <li className="margin-bottom-20">Results: It is often associated with achieving desired results with the least amount of effort.</li>

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