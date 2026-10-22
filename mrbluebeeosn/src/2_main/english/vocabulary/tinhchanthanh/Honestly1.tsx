import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function HONestly1(): React.JSX.Element {

  const postId = "HONestly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-sinCEREly"><mark className="highlight-tertiary-padding-4-8">sinCEREly</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">HONestly
        <sup><Link to="/vocabulary/HONestly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/HONestly-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Tuyệt vời! Chúng ta cùng khám phá từ "<strong>HONestly</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                HONestly \<Link to="/pronunciation/5-vowel-system">HON est ly</Link>\ /ˈɒnɪstli/ ⬤•• (THREE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Thành thật mà nói</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>HONestly</strong>" được dùng để nhấn mạnh rằng một điều gì đó được nói ra là hoàn toàn đúng sự thật, không có sự gian dối hoặc phóng đại. Nó thường được dùng để thể hiện sự chân thành, thẳng thắn của người nói.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">HONestly, i DON'T KNOW the ANswer.</li>
          <li className="margin-bottom-20 list-none">Thành thật mà nói, tôi không biết câu trả lời.</li>

          <li>HONestly, i THINK you should reconSIDer your deCISion.</li>
          <li className="list-none">Thành thật mà nói, tớ nghĩ cậu nên suy nghĩ lại về quyết định của mình.</li>

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

          <li id="ADjective">he is an HONest MAN.</li>
          <li className="margin-bottom-20 list-none">Anh ấy là một người trung thực.</li>

          <li id="NOUN">HONesty is the BEST POLicy.</li>
          <li className="list-none">Sự trung thực là chính sách tốt nhất.</li>

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

          <li>i <Link to="/vocabulary/TRUly-1">TRUly</Link> beLIEVE in you.</li>
          <li className="margin-bottom-20 list-none">Tôi thực sự tin tưởng vào bạn.</li>

          <li>i <Link to="/vocabulary/sinCEREly-1">sinCEREly</Link> aPOLogize for my misTAKE.</li>
          <li className="list-none">Tôi chân thành xin lỗi về sai lầm của mình.</li>

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

          <li>he LIED disHONestly a<strong>bout</strong> his qualifiCAtions.</li>
          <li className="margin-bottom-20 list-none">Anh ta đã nói dối một cách vô liêm sỉ về trình độ của mình.</li>

          <li>she deCEIVED him deCEITfully.</li>
          <li className="list-none">Cô ta đã lừa dối anh ta một cách xảo quyệt.</li>

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

      <p className="text-indent-whole">Hình dung một người đang đặt tay lên trái tim và nói một cách chân thành.</p>

        <ul className="list-square">

          <li>HONestly, i FEEL so GRATEful.</li>
          <li className="list-none">Thật lòng mà nói, tớ cảm thấy vô cùng biết ơn.</li>

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

      <p className="text-indent-whole">Tạo các câu ví dụ khác nhau với từ "<strong>HONestly</strong>" trong nhiều ngữ cảnh.</p>

        <ul className="list-square">

          <li>HONestly, i DON'T CARE WHAT you THINK.</li>
          <li className="list-none">Thành thật mà nói, tớ không quan tâm các cậu nghĩ gì.</li>

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

      <p className="text-indent-whole margin-bottom-20">Use this word regularly in conversations and writing.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">i LIKE PIZza.</li>
            <li className="list-none margin-bottom-20">Tôi thích pizza.</li>

            <li value="2">HONestly, i LOVE PIZza. it's my FAvorite FOOD.</li>
            <li className="list-none margin-bottom-20">Thật lòng mà nói, tớ thích pizza lắm. Đó là món ăn yêu thích nhất của tớ.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai sử dụng "<strong>HONestly</strong>" để <span className="highlight-255-padding-0-4">nhấn mạnh mức độ yêu thích</span> của người nói đối với pizza.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Nhấn mạnh sự chân thật: "<strong>HONestly</strong>" thường được dùng để nhấn mạnh rằng người nói đang nói sự thật.</li>

          <li>Câu hỏi tu từ: Đôi khi, "<strong>HONestly</strong>" được dùng trong câu hỏi tu từ để thể hiện sự ngạc nhiên hoặc không đồng tình.</li>

          <li>HONestly, HOW could you DO THAT?</li>
          <li className="list-none margin-bottom-20">Thật lòng mà nói, làm sao cậu lại có thể làm thế được chứ?</li>

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