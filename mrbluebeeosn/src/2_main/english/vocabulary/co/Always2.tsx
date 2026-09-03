import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function ALways2(): React.JSX.Element {

  const postId = "ALways2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-co"><mark className="highlight-tertiary-padding-4-8">ADverbs: có</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">ALways
        <sup>
          <Link to="/vocabulary/ALways-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/ALways-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>ALways</strong>" (luôn luôn) trong tiếng Anh nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [ALways][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">ÅL wāys</Link>] /ˈɔːl.weɪz/ ⬤• (2x)
              
            </span>
              
            &nbsp;là một Trạng Cơ chỉ tần suất, dùng để diễn tả một hành động hoặc sự việc xảy ra mọi lúc, không có ngoại lệ.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">she ALways KIND to EVERyone.</li>
        <li className="list-none margin-bottom-20">Cô ấy luôn luôn tử tế với mọi người.</li>

        <li value="2">he ALways DOES his HOMEwork before DINner.</li>
        <li className="list-none margin-bottom-20">Anh ấy luôn làm bài tập về nhà trước khi ăn tối.</li>

        <li value="3">we ALways GO to the PARK on SUNdays.</li>
        <li className="list-none margin-bottom-20">Chúng tôi luôn đi công viên vào Chủ nhật.</li>

        <li value="4">she ALways EATS BREAKfast in the MORNing.</li>
        <li className="list-none margin-bottom-20">Cô ấy luôn ăn sáng vào buổi sáng.</li>

        <li value="5">he ALways READS a BOOK before GOing to BED.</li>
        <li className="list-none margin-bottom-20">Anh ấy luôn đọc sách trước khi đi ngủ.</li>

        <li value="6">i ALways FEEL HAPpy when i SEE her.</li>
        <li className="list-none margin-bottom-20">Tôi luôn cảm thấy vui khi nhìn thấy cô ấy.</li>

        <li value="7">i will ALways reMEMber your BIRthday.</li>
        <li className="list-none margin-bottom-20">Tôi sẽ luôn nhớ ngày sinh nhật của bạn.</li>

        <li value="8">my FRIENDS are ALways THERE for me.</li>
        <li className="list-none margin-bottom-20">Bạn bè tôi luôn ở bên cạnh tôi.</li>

        <li value="9">she is ALways on TIME for her apPOINTments.</li>
        <li className="list-none margin-bottom-20">Cô ấy luôn đúng giờ cho các cuộc hẹn của mình.</li>

        <li value="10">his ATtitude is ALways the SAME.</li>
        <li className="list-none margin-bottom-20">Thái độ của anh ấy luôn như vậy.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>ALways</strong>" thường đứng trước hành động chính trong câu.</li>

          <li className="margin-bottom-20">Bạn có thể kết hợp "<strong>ALways</strong>" với nhiều Trạng Cơ khác để tạo ra các cụm từ đa dạng hơn.</li>

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