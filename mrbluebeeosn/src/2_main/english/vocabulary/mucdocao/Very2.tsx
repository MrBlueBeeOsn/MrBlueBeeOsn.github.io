import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function VERy2(): React.JSX.Element {

  const postId = "VERy2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-muc-do-cao"><mark className="highlight-tertiary-padding-4-8">ADverbs: mức độ cao</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">VERy
        <sup>
          <Link to="/vocabulary/VERy-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/VERy-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>VERy</strong>" (rất) trong tiếng Anh nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [VEry][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">VER y</Link>] /ˈveri/ ⬤• (2x)
              
            </span>
              
            &nbsp;thường được dùng để nhấn mạnh mức độ của một Tính Cơ hoặc một Trạng Cơ khác.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">i VERy HAPpy to SEE you.</li>
        <li className="list-none margin-bottom-20">Tôi rất vui khi gặp bạn.</li>

        <li value="2">i VERy TIred after WORK.</li>
        <li className="list-none margin-bottom-20">Tôi rất mệt sau khi làm việc.</li>

        <li value="3">i VERy HUNgry. can we EAT NOW?</li>
        <li className="list-none margin-bottom-20">Tôi rất đói. Chúng ta có thể ăn bây giờ không?</li>

        <li value="4">your ENGlish VERy GOOD.</li>
        <li className="list-none margin-bottom-20">Tiếng Anh của bạn rất tốt.</li>

        <li value="5">the WEATHer VERy BAD toDAY.</li>
        <li className="list-none margin-bottom-20">Thời tiết hôm nay rất tệ.</li>

        <li value="6">she RUN VERy QUICKly.</li>
        <li className="list-none margin-bottom-20">Cô ấy có thể chạy rất nhanh.</li>

        <li value="7">PLEASE SPEAK VERy SLOWly.</li>
  
        <li className="list-none margin-bottom-20">Làm ơn nói chậm lại.</li>

        <li value="8">PLEASE HANdle this GLASS VERy CAREfully.</li>
        <li className="list-none margin-bottom-20">Làm ơn cầm ly này thật cẩn thận.</li>

        <li value="9">i LIKE COFfee VERy MUCH.</li>
        <li className="list-none margin-bottom-20">Tôi rất thích cà phê.</li>

        <li value="10">i HAVE VERy LITtle TIME.</li>
        <li className="list-none margin-bottom-20">Tôi có rất ít thời gian.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>VERy</strong>" thường đứng trước Tính Cơ hoặc Trạng Cơ để nhấn mạnh ý nghĩa của chúng.</li>

          <li className="margin-bottom-20">Có nhiều Trạng Cơ khác cũng có thể được sử dụng để thay thế cho "<strong>VERy</strong>" như: <Link to="/vocabulary/exTREMEly-1">exTREMEly</Link>, inCREDibly, <Link to="/vocabulary/HIGHly-1">HIGHly</Link>, DEEPly, và nhiều hơn nữa.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 12, 2024 · by 💎GEM ·</span>
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