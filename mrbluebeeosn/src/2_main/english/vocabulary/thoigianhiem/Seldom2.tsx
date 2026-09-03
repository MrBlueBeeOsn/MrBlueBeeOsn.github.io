import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SELdom2(): React.JSX.Element {

  const postId = "SELdom2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-hiem"><mark className="highlight-tertiary-padding-4-88">ADverbs: hiếm</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">SELdom
        <sup>
          <Link to="/vocabulary/SELdom-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/SELdom-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>SELdom</strong>" (hiếm khi) trong tiếng Anh nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [SELdom][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">SEL dơm</Link>] /ˈsɛldəm/ ⬤• (2x)
              
            </span>
              
            &nbsp;là một Trạng Cơ chỉ tần suất, dùng để diễn tả một hành động hoặc sự việc xảy ra rất ít lần.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">i SELdom SEE her at SCHOOL.</li>
        <li className="list-none margin-bottom-20">Tôi hiếm khi gặp cô ấy ở trường.</li>

        <li value="2">he SELdom GOES to the CINema.</li>
        <li className="list-none margin-bottom-20">Anh ấy hiếm khi đi xem phim.</li>

        <li value="3">she SELdom EATS SPIcy FOOD.</li>
        <li className="list-none margin-bottom-20">Cô ấy hiếm khi ăn đồ ăn cay.</li>

        <li value="4">they SELdom READ NEWSpapers.</li>
        <li className="list-none margin-bottom-20">Họ hiếm khi đọc báo.</li>

        <li value="5">we SELdom PLAY SPORTS.</li>
        <li className="list-none margin-bottom-20">Chúng tôi hiếm khi chơi thể thao.</li>

        <li value="6">i SELdom HAVE TIME to reLAX.</li>
        <li className="list-none margin-bottom-20">Tôi hiếm khi có thời gian để thư giãn.</li>

        <li value="7">she SELdom THINKS about the PAST.</li>
        <li className="list-none margin-bottom-20">Cô ấy hiếm khi nghĩ về quá khứ.</li>

        <li value="8">he SELdom MAKES misTAKES in his WORK.</li>
        <li className="list-none margin-bottom-20">Anh ấy hiếm khi mắc lỗi trong công việc.</li>

        <li value="9">i SELdom FEEL LONEly.</li>
        <li className="list-none margin-bottom-20">Tôi hiếm khi cảm thấy cô đơn.</li>

        <li value="10">they SELdom COME to VISit us.</li>
        <li className="list-none margin-bottom-20">Họ hiếm khi đến thăm chúng tôi.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>SELdom</strong>" thường đứng trước hành động chính trong câu.</li>

          <li className="margin-bottom-20">Bạn có thể kết hợp "<strong>SELdom</strong>" với nhiều Trạng Cơ khác để tạo ra các cụm từ đa dạng hơn.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 15, 2024 · by 💎GEM ·</span>
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