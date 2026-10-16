import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function BAsically1(): React.JSX.Element {

  const postId = "BAsically1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-ve-co-ban"><mark className="highlight-tertiary-padding-4-8">ADverbs: về cơ bản</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">BAsically
        <sup><Link to="/vocabulary/BAsically-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/BAsically-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Tuyệt vời! Chúng ta cùng khám phá từ "<strong>BAsically</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          {/* <p className="margin-bottom-20"><strong>Basically</strong></p> */}

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                BAsically \<Link to="/pronunciation/5-vowel-system">BĀ sic a̛lly</Link>\ /ˈbeɪsɪkli/ ⬤•• (THREE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Nói chung thì, về cơ bản</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>BAsically</strong>" được sử dụng để nhấn mạnh ý chính hoặc điểm quan trọng nhất của một vấn đề, một ý tưởng hoặc một tình huống. Nó có nghĩa là "nói chung thì" hoặc "về cơ bản".</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li id="ADverb">BAsically, i JUST WANT to reLAX.</li>
          <li className="margin-bottom-20 list-none">Nói chung, tớ chỉ muốn thư giãn thôi.</li>

          <li>BAsically, the PROBlem is that we DON'T have eNOUGH MONey.</li>
          <li className="list-none">Nói chung, vấn đề là chúng ta không có đủ tiền.</li>

        </ul>

      {/* =============================
            VoCABulary FAMILy:
      ============================= */}
        
      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>VoCABulary FAMILy</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li id="ADjective">the BAsic iDEa is VERy SIMple.</li>
          <li className="margin-bottom-20 list-none">Ý tưởng cơ bản rất đơn giản.</li>

          <li id="NOUN">the BASE of the PYramid is VERy WIDE.</li>
          <li className="list-none">Đế của kim tự tháp rất rộng.</li>

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

          <li>esSENtially, it's a QUESTion of MONey.</li>
          <li className="margin-bottom-20 list-none">Về cơ bản, đây là vấn đề tiền bạc.</li>

          <li>fundaMENtally, i aGREE with you.</li>
          <li className="list-none">Về cơ bản, tôi đồng ý với bạn.</li>

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

          <li>speCIFically, i NEED you to FInish this rePORT by FRIday.</li>
          <li className="margin-bottom-20 list-none">Cụ thể, tôi cần bạn hoàn thành bản báo cáo này trước thứ Sáu.</li>

          <li><Link to="/vocabulary/preCISEly-1">preCISEly</Link>, THAT'S WHAT i MEAN.</li>
          <li className="list-none">Chính xác là, đó là điều tôi muốn nói.</li>

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

      <p className="text-indent-whole">Hình dung một tòa nhà với một nền móng vững chắc.</p>

        <ul className="list-square">

          <li>the BUILDing is BAsically BUILT on a STRONG founDAtion.</li>
          <li className="list-none">Tòa nhà này về cơ bản được xây dựng trên một nền móng vững chắc.</li>

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

      <p className="text-indent-whole">Tạo các câu ví dụ liên quan đến các tình huống hàng ngày hoặc các cuộc trò chuyện.</p>

        <ul className="list-square">

          <li>BAsically, i JUST NEED some TIME to THINK.</li>
          <li className="list-none">Nói chung, tớ chỉ cần một chút thời gian để suy nghĩ thôi.</li>

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

      <p className=" margin-bottom-20">Use this word regularly in conversations or in writing.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">i LIKE to EAT VEGETables.</li>
            <li className="list-none margin-bottom-20">I like eating vegetables.</li>

            <li value="2">BAsically, i LIKE to EAT HEALthy FOOD.</li>
            <li className="list-none margin-bottom-20">I like to eat healthy food.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence uses “Basically” to provide a broader summary of the speaker's eating preferences.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Abbreviation: “BAsically” is often used to simplify a complex idea into a simpler one.</li>

          <li className="margin-bottom-20">Focus on the main idea: This helps listeners or readers easily grasp the main idea.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 8, 2024 · by 💎GEM ·</span>
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