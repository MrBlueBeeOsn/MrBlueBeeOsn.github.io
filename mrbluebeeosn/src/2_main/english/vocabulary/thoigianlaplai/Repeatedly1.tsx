import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function rePEATedly1(): React.JSX.Element {

  const postId = "rePEATedly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-lap-lai"><mark className="highlight-tertiary-padding-4-88">ADverbs: lặp lại</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">rePEATedly
        <sup><Link to="/vocabulary/rePEATedly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/rePEATedly-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào từ "<strong>rePEATedly</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                rePEATedly \<Link to="/pronunciation/5-vowel-system">re PĒAT ed ly</Link>\ /rɪˈpiːtɪdli/ •⬤•• (FOUR SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Liên tục</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>rePEATedly</strong>" dùng để mô tả một hành động được thực hiện nhiều lần, liên tục. Nó nhấn mạnh tính thường xuyên và sự lặp đi lặp lại của một sự việc.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">she rePEATedly ASKED him the SAME QUESTion.</li>
          <li className="margin-bottom-20 list-none">Cô ấy liên tục hỏi anh ấy cùng một câu hỏi.</li>

          <li>the exPERiment was rePEATedly conDUCTed to VERify the reSULTS.</li>
          <li className="list-none">Thí nghiệm này đã được tiến hành nhiều lần để xác minh kết quả.</li>

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

          <li id="ADjective">the rePEATed FAIlures disCOURaged him.</li>
          <li className="margin-bottom-20 list-none">Những thất bại lặp đi lặp lại đã khiến anh ấy nản lòng.</li>
          
          <li id="VERB">PLEASE rePEAT THAT.</li>
          <li className="margin-bottom-20 list-none">Xin vui lòng nói lại điều đó.</li>

          <li id="NOUN">the repeTITion of the SAME misTAKE is unacCEPTable.</li>
          <li className="margin-bottom-20 list-none">Việc lặp lại cùng một sai lầm là không thể chấp nhận được.</li>

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

          <li>he TRIED <Link to="/vocabulary/aGAIN-1">aGAIN</Link> and aGAIN.</li>
          <li className="margin-bottom-20 list-none">Anh ấy đã THỬ LẠI nhiều lần.</li>

          <li>she SAID it Over and Over.</li>
          <li className="list-none">Cô ấy đã nói đi nói lại điều đó.</li>

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

          <li>i've Only DONE it ONCE.</li>
          <li className="margin-bottom-20 list-none">Tôi chỉ làm điều đó một lần thôi.</li>

          <li>he <Link to="/vocabulary/RAREly-1">RAREly</Link> VISits us.</li>
          <li className="list-none">Anh ấy hiếm khi ghé thăm chúng tôi.</li>

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

      <p className="text-indent-whole">Hình dung một chiếc đồng hồ đang tích tắc hoặc một người đang tập luyện một bài thể dục nhiều lần.</p>

        <ul className="list-square">

          <li>the CLOCK is TICKing STEADily and rePEATedly.</li>
          <li className="list-none">Chiếc đồng hồ đang tích tắc đều đặn và liên tục.</li>

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

      <p className="text-indent-whole">Tạo các câu liên quan đến các hoạt động hàng ngày hoặc các thói quen.</p>

        <ul className="list-square">

          <li>she rePEATedly CHECKED her PHONE.</li>
          <li className="list-none">Cô ấy liên tục kiểm tra điện thoại của mình.</li>

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

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng từ này trong các bài viết hoặc cuộc trò chuyện.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">he MADE a misTAKE.</li>
            <li className="list-none margin-bottom-20">Anh ấy đã phạm một sai lầm.</li>

            <li value="2">he rePEATedly MADE the SAME misTAKE.</li>
            <li className="list-none margin-bottom-20">Anh ta liên tục lặp lại cùng một sai lầm.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai <span className="highlight-255-padding-0-4">nhấn mạnh rằng</span> anh ấy <span className="highlight-255-padding-0-4">đã mắc lỗi nhiều lần</span>, cho thấy một sự thiếu cẩn trọng hoặc không rút ra được bài học.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Tần suất: Nhấn mạnh đến việc thực hiện một hành động nhiều lần.</li>

          <li className="margin-bottom-20">Sự kiên trì: Có thể ngụ ý sự kiên trì hoặc cố gắng không ngừng.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 7, 2024 · by 💎GEM ·</span>
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