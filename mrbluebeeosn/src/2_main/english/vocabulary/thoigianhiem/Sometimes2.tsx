import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SOMEtimes2(): React.JSX.Element {

  const postId = "SOMEtimes2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#thoi-gian-hiem-terms"><mark className="highlight-tertiary-padding-4-88">ADverbs: hiếm</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">SOMEtimes
        <sup>
          <Link to="/vocabulary/SOMEtimes-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/SOMEtimes-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>SOMEtimes</strong>" (thỉnh thoảng) trong tiếng Anh nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [SOMEtimes][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">SÔME tīmes</Link>] /ˈsʌmtaɪmz/ ⬤• (2x)
              
            </span>
              
            &nbsp;là một Trạng Cơ chỉ tần suất, dùng để diễn tả một hành động hoặc sự việc xảy ra không thường xuyên, có thể xảy ra hoặc không xảy ra.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">I SOMEtimes GO for a WALK in the PARK.</li>
        <li className="list-none margin-bottom-20">Thỉnh thoảng tôi đi dạo trong công viên.</li>

        <li value="2">it SOMEtimes RAINS in the SUMmer.</li>
        <li className="list-none margin-bottom-20">Thỉnh thoảng trời mưa vào mùa hè.</li>

        <li value="3">we SOMEtimes GO to the MOvies on WEEKends.</li>
        <li className="list-none margin-bottom-20">Thỉnh thoảng chúng ta đi xem phim vào cuối tuần.</li>

        <li value="4">they SOMEtimes PLAY SOCcer in the YARD.</li>
        <li className="list-none margin-bottom-20">Thỉnh thoảng họ chơi bóng đá trong sân.</li>

        <li value="5">he DOES NOT SOMEtimes but OFten VISits his GRANDparents.</li>
        <li className="list-none margin-bottom-20">Anh ấy không phải thỉnh thoảng mà thường xuyên đến thăm ông bà.</li>

        <li value="6">she SOMEtimes LIKES COFfee and SOMEtimes NOT.</li>
        <li className="list-none margin-bottom-20">Cô ấy lúc thích cà phê lúc không.</li>

        <li value="7">I SOMEtimes DRINK TEA in the MORNing.</li>
        <li className="list-none margin-bottom-20">Thỉnh thoảng tôi uống trà vào buổi sáng.</li>

        <li value="8">I SOMEtimes READ BOOKS at NIGHT.</li>
        <li className="list-none margin-bottom-20">Thỉnh thoảng tôi đọc sách vào ban đêm.</li>

        <li value="9">we SOMEtimes GO CAMPing on WEEKends.</li>
        <li className="list-none margin-bottom-20">Thỉnh thoảng chúng tôi đi cắm trại vào cuối tuần.</li>

        <li value="10">when I SOMEtimes FEEL STRESSED, I LISten to MUsic.</li>
        <li className="list-none margin-bottom-20">Thỉnh thoảng khi tôi cảm thấy căng thẳng, tôi nghe nhạc.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>SOMEtimes</strong>" thường đứng ở đầu câu hoặc giữa câu.</li>

          <li className="margin-bottom-20">Bạn có thể kết hợp "<strong>SOMEtimes</strong>" với nhiều Trạng Cơ khác để tạo ra các cụm từ đa dạng hơn.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 5, 2024 · by 💎GEM ·</span>
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