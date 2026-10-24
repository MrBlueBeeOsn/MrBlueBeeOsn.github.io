import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function NO2(): React.JSX.Element {

  const postId = "NO2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-NO"><mark className="highlight-tertiary-padding-4-8">NO</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">NO
        <sup>
          <Link to="/vocabulary/NO-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/NO-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#LONGer-LIVES-HERE">LONGer LIVES HERE</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#MORE-of">MORE of</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#LESS-DIFficult-than">LESS DIFficult than</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#MATter-WHAT-you-SAY">MATter WHAT you SAY</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#WAY">WAY</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#WONder">WONder</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#DOUBT">DOUBT</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#THANKS">THANKS</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#LONger-than">LONger than</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#LESS-than">LESS than</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Great! Let's take a closer look at how to use the word "NO" when it functions as an adverb in English.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              NO \<Link to="/pronunciation/5-vowel-system">NŌ</Link>\ /noʊ/ ⬤ (ONE SYLlable)
              
            </span>
              
            &nbsp;is commonly known as a negative word, but when combined with other words, it can convey a variety of meanings and nuances.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="LONGer-LIVES-HERE">she NO LONGer LIVES HERE.</li>
        <li className="list-none margin-bottom-20">She doesn't live here anymore.</li>

        <li value="2" id="MORE-of">i WANT NO MORE of your exCUses.</li>
        <li className="list-none margin-bottom-20">I don't want to hear any more excuses from you.</li>

        <li value="3" id="LESS-DIFficult-than">the TASK is NO LESS DIFficult than the LAST one.</li>
        <li className="list-none margin-bottom-20">The next task will be as challenging as the last one.</li>

        <li value="4" id="MATter-WHAT-you-SAY">NO MATter WHAT you SAY, i WON'T beLIEVE you.</li>
        <li className="list-none margin-bottom-20">No matter what you say, I'm not going to believe you.</li>

        <li value="5" id="WAY">NO WAY! i'm NOT GOing to do THAT.</li>
        <li className="list-none margin-bottom-20">Absolutely not! I am never going to do that.</li>

        <li value="6" id="WONder">NO WONder he's TIred. he's been WORKing all NIGHT.</li>
        <li className="list-none margin-bottom-20">He must be tired because he has been working all night.</li>

        <li value="7" id="DOUBT">NO DOUBT she will sucCEED.</li>
        <li className="list-none margin-bottom-20">She will definitely succeed.</li>

        <li value="8" id="THANKS">would you LIKE some COFfee? NO THANKS, i'm NOT THIRsty.</li>
        <li className="list-none margin-bottom-20">Hey, would you like some coffee? No thanks. I'm not feeling it.</li>

        <li value="9" id="LONger-than">the MEETing will be NO LONger than TWO HOURs.</li>
        <li className="list-none margin-bottom-20">The meeting won't take more than two hours.</li>

        <li value="10" id="LESS-than">NO LESS than a THOUsand PEOple atTENDed the CONcert.</li>
        <li className="list-none margin-bottom-20">At least a thousand people went to the concert.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>In many cases, "NO" can be considered part of a phrase rather than a standalone adverb.</li>

          <li className="margin-bottom-20">The meaning of these phrases can vary depending on the context. Understanding the context will help you use these phrases correctly.</li>

        </ul>

      </div>

      <p className="margin-top-50">I hope these examples will help you better understand how to use the word "no" in English! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>deCEMber 28, 2024 · by 💎GEM ·</span>
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