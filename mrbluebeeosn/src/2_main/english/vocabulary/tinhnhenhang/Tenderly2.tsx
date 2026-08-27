import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function TENderly2(): React.JSX.Element {

  const postId = "TENderly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-nhe-nhang-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: nhẹ nhàng</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">TENderly
        <sup>
          <Link to="/vocabulary/TENderly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/TENderly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>TENderly</strong>" (một cách dịu dàng) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [TENderly][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">TEN de̛r ly</Link>] /ˈten.dər.li/ ⬤•• (3x)
              
            </span>
              
            &nbsp;thường được dùng để mô tả một hành động hoặc lời nói được thực hiện một cách dịu dàng, trìu mến, thể hiện sự quan tâm và yêu thương.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">she TENderly HELD the BAby in her ARMS.</li>
        <li className="list-none margin-bottom-20">Cô ấy ôm đứa bé một cách dịu dàng trong vòng tay.</li>

        <li value="2">he TENderly TOUCHED her CHEEK.</li>
        <li className="list-none margin-bottom-20">Anh ấy chạm nhẹ vào má cô ấy một cách dịu dàng.</li>

        <li value="3">they TENderly KISSED GOODbye.</li>
        <li className="list-none margin-bottom-20">Họ hôn tạm biệt nhau một cách dịu dàng.</li>

        <li value="4">she TENderly CARED for her SICK MOTHer.</li>
        <li className="list-none margin-bottom-20">Cô ấy chăm sóc người mẹ ốm yếu của mình một cách dịu dàng.</li>

        <li value="5">he TENderly SPOKE to her about her FEARS.</li>
        <li className="list-none margin-bottom-20">Anh ấy nói chuyện với cô ấy về nỗi sợ hãi của cô ấy một cách dịu dàng.</li>

        <li value="6">she TENderly LOOKED at her SLEEPing CHILD.</li>
        <li className="list-none margin-bottom-20">Cô ấy nhìn đứa con đang ngủ của mình một cách dịu dàng.</li>

        <li value="7">he TENderly SMILED at her.</li>
        <li className="list-none margin-bottom-20">Anh ấy mỉm cười với cô ấy một cách dịu dàng.</li>

        <li value="8">they TENderly emBRACED after their LONG sepaRAtion.</li>
        <li className="list-none margin-bottom-20">Họ ôm ấp nhau một cách dịu dàng sau thời gian dài xa cách.</li>

        <li value="9">she TENderly COMforted her FRIEND who was CRYing.</li>
        <li className="list-none margin-bottom-20">Cô ấy an ủi người bạn đang khóc của mình một cách dịu dàng.</li>

        <li value="10">he TENderly caRESSED her HAIR.</li>
        <li className="list-none margin-bottom-20">Anh ấy vuốt ve mái tóc cô ấy một cách dịu dàng.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh tính dịu dàng, trìu mến của một hành động. Chúng thường được sử dụng để miêu tả những hành động thể hiện sự yêu thương, quan tâm.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>TENderly</strong>" thường đứng trước hành động để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này mang nghĩa tích cực, thể hiện sự dịu dàng, trìu mến.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>April 1, 2025 · by 💎GEM ·</span>
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