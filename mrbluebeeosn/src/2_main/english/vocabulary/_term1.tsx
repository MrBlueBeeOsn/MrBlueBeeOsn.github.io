import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function (): React.JSX.Element {

  const postId = "";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-nhe-nhang-terms"><mark className="highlight-tertiary-padding-4-8">Tính nhẹ nhàng</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">ly
        <sup><Link to="/vocabulary/ly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/ly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! </p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>ly</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /i/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">ly</Link>/
                <sup>&nbsp;⬤</sup>
              </span>
            </li>

            <li>Trạng từ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Một cách </li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>ly</strong>" </p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li></li>
          <li className="margin-bottom-20 list-none"></li>

          <li></li>
          <li className="list-none"></li>

        </ul>

      {/* =============================
            Gia đình từ:
      ============================= */}
        
      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>Gia đình từ</strong>:
        </mark>
      </p>

        <ul className="list-square">

          {/* <li></li>
          <li className="list-none"></li>
          <li className="margin-bottom-20 list-none"></li> */}

          <li></li>
          <li className="list-none"></li>
          <li className="margin-bottom-20 list-none"></li>

          <li></li>
          <li className="list-none"></li>
          <li className="list-none"></li>

        </ul>

      {/* =============================
            Từ đồng nghĩa:
      ============================= */}
        
      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>Từ đồng nghĩa</strong>:
        </mark>
      </p>

        <ul className="list-square">

          {/* <li></li>
          <li className="list-none"></li>
          <li className="margin-bottom-20 list-none"></li> */}

          <li></li>
          <li className="list-none"></li>
          <li className="margin-bottom-20 list-none"></li>

          <li></li>
          <li className="list-none"></li>
          <li className="list-none"></li>

        </ul>

        {/* <Link to="/vocabulary/clearly-1">Clearly</Link> */}

      {/* =============================
            Từ trái nghĩa:
      ============================= */}

      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>Từ trái nghĩa</strong>:
        </mark>
      </p>

        <ul className="list-square">

          {/* <li></li>
          <li className="list-none"></li>
          <li className="margin-bottom-20 list-none"></li> */}

          <li></li>
          <li className="list-none"></li>
          <li className="margin-bottom-20 list-none"></li>

          <li></li>
          <li className="list-none"></li>
          <li className="list-none"></li>

        </ul>
      
      {/* =============================
            🌻 Mẹo học từ vựng:
      ============================= */}

      <h3 className="margin-y-50 text-center">🌻 Mẹo học từ vựng:</h3>

      {/* =============================
            1. Liên kết hình ảnh:
      ============================= */}
      
      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>1. Liên kết</strong></mark> 
        </strong>
        <strong>&nbsp;với hình ảnh</strong>:
      </p>

      <p className="text-indent-whole"></p>

        <ul className="list-square">

          {/* <li></li>
          <li className="margin-bottom-20 list-none"></li> */}

          <li></li>
          <li className="list-none"></li>

        </ul>

      {/* =============================
            2. Tạo câu ví dụ:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Tạo câu</strong></mark> 
        </strong>
        <strong>&nbsp;ví dụ</strong>:
      </p>

      <p className="text-indent-whole"></p>

        <ul className="list-square">

          {/* <li></li>
          <li className="margin-bottom-20 list-none"></li> */}

          <li></li>
          <li className="list-none"></li>

        </ul>

      {/* =============================
            3. Luyện tập thường xuyên:
      ============================= */}

      <p className="margin-top-20">
        <strong>
            <mark className="highlight-255-padding-4-8"><strong>3. Luyện tập</strong></mark>
        </strong>
        <strong>&nbsp;thường xuyên</strong>:
      </p>

      <p className="text-indent-whole margin-bottom-20"></p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt):</p>

          {/* <ol>

            <li></li>
            <li className="list-none margin-bottom-20"></li>

            <li value="2"></li>
            <li className="list-none margin-bottom-20"></li>

          </ol> */}

          {/* <ol>

            <li></li>
            <li className="list-none"></li>
            <li className="list-none margin-bottom-20"></li>

            <li value="2">.</li>
            <li className="list-none"></li>
            <li className="list-none margin-bottom-20"></li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: </p>

      </div> */}

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li></li>

          <li className="margin-bottom-20"></li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span> · by 💎Gem ·</span>
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