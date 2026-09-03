import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function GENTly2(): React.JSX.Element {

  const postId = "GENTly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-nhe-nhang"><mark className="highlight-tertiary-padding-4-8">ADverbs: nhẹ nhàng</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">GENTly
        <sup>
          <Link to="/vocabulary/GENTly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/GENTly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>GENTly</strong>" (nhẹ nhàng) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [GENTly][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">GENT ly</Link>] /ˈdʒɛntlɪ/ ⬤• (2x)
              
            </span>
              
            &nbsp;thường được sử dụng để miêu tả một hành động được thực hiện một cách nhẹ nhàng, dịu dàng, không gây tổn hại hoặc khó chịu.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">she GENTly caRESSED the BAby's CHEEK.</li>
        <li className="list-none margin-bottom-20">Cô ấy nhẹ nhàng vuốt ve má em bé.</li>

        <li value="2">he GENTly PUSHED the DOOR Open.</li>
        <li className="list-none margin-bottom-20">Anh ấy nhẹ nhàng đẩy cửa ra.</li>

        <li value="3">she GENTly SHOOK the BOTtle to MIX the inGREdients.</li>
        <li className="list-none margin-bottom-20">Cô ấy nhẹ nhàng lắc chai để trộn các thành phần.</li>

        <li value="4">the HILL GENTly SLOPED DOWN to the VALley.</li>
        <li className="list-none margin-bottom-20">Ngọn đồi thoai thoải xuống thung lũng.</li>

        <li value="5">it was GENTly RAINing outSIDE.</li>
        <li className="list-none margin-bottom-20">Trời đang mưa phùn bên ngoài.</li>

        <li value="6">she SPOKE GENTly to the CHILD.</li>
        <li className="list-none margin-bottom-20">Cô ấy nói nhẹ nhàng với đứa trẻ.</li>

        <li value="7">he GENTly SMILED at her.</li>
        <li className="list-none margin-bottom-20">Anh ấy mỉm cười nhẹ nhàng với cô ấy.</li>

        <li value="8">she GENTly LOWered herSELF into the CHAIR.</li>
        <li className="list-none margin-bottom-20">Cô ấy nhẹ nhàng ngồi xuống ghế.</li>

        <li value="9">he GENTly TAPPED on the WINdow.</li>
        <li className="list-none margin-bottom-20">Anh ấy nhẹ nhàng gõ vào cửa sổ.</li>

        <li value="10">the TREES GENTly SWAYED in the BREEZE.</li>
        <li className="list-none margin-bottom-20">Những cái cây đung đưa nhẹ nhàng trong gió.</li>

      </ol>

      <p>** Các cụm từ trên đều được sử dụng để nhấn mạnh sự nhẹ nhàng, dịu dàng trong một hành động hoặc trạng thái. Chúng thường tạo ra một cảm giác thư thái, dễ chịu và không gây tổn hại.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>GENTly</strong>" thường được đặt trước hành động để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này có thể được sử dụng trong cả văn nói và văn viết.</li>

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