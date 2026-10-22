import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function exTREMEly1(): React.JSX.Element {

  const postId = "exTREMEly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-muc-do-cao"><mark className="highlight-tertiary-padding-4-8">ADverbs: mức độ cao</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">exTREMEly
        <sup><Link to="/vocabulary/exTREMEly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/exTREMEly-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào từ "<strong>exTREMEly</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                exTREMEly \<Link to="/pronunciation/5-vowel-system">ex TRĒME ly</Link>\ /ɪkˈstriːmli/ •⬤• (THREE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Cực kỳ</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>exTREMEly</strong>" được dùng để nhấn mạnh một đặc điểm, tính chất hoặc mức độ nào đó ở mức độ rất cao, vượt quá mức bình thường.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">the eXAM was exTREMEly DIFficult.</li>
          <li className="margin-bottom-20 list-none">Bài thi đó cực kỳ khó.</li>

          <li>she is exTREMEly TALented.</li>
          <li className="list-none">Cô ấy cực kỳ tài năng.</li>

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

          <li id="ADjective">he TOOK exTREME MEASures to proTECT his FAMILy.</li>
          <li className="margin-bottom-20 list-none">Anh ấy đã áp dụng những biện pháp cực đoan để bảo vệ gia đình mình.</li>

          <li id="NOUN">the situAtion REACHed its exTREMity.</li>
          <li className="list-none">Tình hình đã lên đến đỉnh điểm.</li>

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

          <li>it's <Link to="/vocabulary/VERy-1">VERy</Link> HOT toDAY.</li>
          <li className="margin-bottom-20 list-none">Hôm nay trời nóng lắm.</li>

          <li>she is <Link to="/vocabulary/HIGHly-1">HIGHly</Link> reGARDed in her FIELD.</li>
          <li className="list-none">Cô ấy được đánh giá rất cao trong lĩnh vực của mình.</li>

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

          <li>i'm SLIGHTly TIred.</li>
          <li className="margin-bottom-20 list-none">Tớ hơi mệt một chút.</li>

          <li>the WEATHer is MODerately WARM.</li>
          <li className="list-none">Thời tiết khá ấm.</li>

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

      <p className="text-indent-whole">Hình dung một cái nhiệt kế chỉ mức nhiệt độ rất cao.</p>

        <ul className="list-square">

          <li>the therMOMeter is READing an exTREMEly HIGH TEMPERature.</li>
          <li className="list-none">Nhiệt kế đang hiển thị một nhiệt độ cực kỳ cao.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Tạo các câu ví dụ khác nhau với từ "<strong>exTREMEly</strong>" trong nhiều ngữ cảnh.</p>

        <ul className="list-square">

          <li>the COFfee is exTREMEly HOT.</li>
          <li className="list-none">Cà phê này cực kỳ nóng.</li>

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

            <li value="1">the MOvie was GOOD.</li>
            <li className="list-none margin-bottom-20">Bộ phim hay lắm.</li>

            <li value="2">the MOvie was exTREMEly GOOD.</li>
            <li className="list-none margin-bottom-20">Bộ phim này cực kỳ hay.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai <span className="highlight-255-padding-0-4">nhấn mạnh</span> rằng bộ phim <span className="highlight-255-padding-0-4">hay đến mức vượt quá sự mong đợi.</span></p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Cường độ: "<strong>exTREMEly</strong>" thường được dùng để nhấn mạnh mức độ cao nhất của một đặc điểm.</li>

          <li className="margin-bottom-20">Cảm xúc: Nó có thể được dùng để diễn tả cảm xúc mạnh mẽ như vui sướng, buồn bã, tức giận, v.v.</li>

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