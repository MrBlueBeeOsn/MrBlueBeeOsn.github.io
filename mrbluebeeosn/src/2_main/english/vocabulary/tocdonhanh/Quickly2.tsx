import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function QUICKly2(): React.JSX.Element {

  const postId = "QUICKly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#toc-do-nhanh-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: nhanh</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">QUICKly
        <sup>
          <Link to="/vocabulary/QUICKly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/QUICKly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>QUICKly</strong>" (một cách nhanh chóng) và các cụm từ thường đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [QUICKly][QUICK ly] /ˈkwɪkli/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">QUICKly</Link>/ 
              
              &nbsp;⬤• (2x)
              
            </span>
              
            &nbsp;trong tiếng Anh có nghĩa là "một cách nhanh chóng", "một cách gấp rút". Từ này thường được dùng để mô tả hành động hoặc quá trình diễn ra trong một thời gian ngắn.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">the CIty is QUICKly GROWing and exPANding.</li>
        <li className="list-none margin-bottom-20">Thành phố đang phát triển và mở rộng rất nhanh.</li>

        <li value="2">the SUN QUICKly FADed behind the CLOUDS.</li>
        <li className="list-none margin-bottom-20">Mặt trời nhanh chóng biến mất sau những đám mây.</li>

        <li value="3">the FASHion INdustry is QUICKly CHANGing.</li>
        <li className="list-none margin-bottom-20">Ngành công nghiệp thời trang đang thay đổi rất nhanh.</li>

        <li value="4">i QUICKly REalized my misTAKE.</li>
        <li className="list-none margin-bottom-20">Tôi nhanh chóng nhận ra lỗi lầm của mình.</li>

        <li value="5">the INcident was QUICKly forGOTten.</li>
        <li className="list-none margin-bottom-20">Vụ việc đó nhanh chóng bị lãng quên.</li>

        <li value="6">the RUmor QUICKly SPREAD throughout the SCHOOL.</li>
        <li className="list-none margin-bottom-20">Tin đồn nhanh chóng lan truyền khắp trường học.</li>

        <li value="7">the PROBlem was QUICKly SOLVED.</li>
        <li className="list-none margin-bottom-20">Vấn đề đã được giải quyết nhanh chóng.</li>

        <li value="8">after a LONG DAY, i was QUICKly TIRED.</li>
        <li className="list-none margin-bottom-20">Sau một ngày dài, tôi nhanh chóng cảm thấy mệt mỏi.</li>

        <li value="9">she QUICKly beCAME BORED with the MOVie.</li>
        <li className="list-none margin-bottom-20">Cô ấy nhanh chóng cảm thấy chán bộ phim.</li>

        <li value="10">the CAKE was QUICKly EATen by the CHILdren.</li>
        <li className="list-none margin-bottom-20">Cái bánh nhanh chóng bị bọn trẻ ăn hết.</li>

      </ol>

      <p>** Các cụm từ trên đều được sử dụng để nhấn mạnh tốc độ của một hành động hoặc quá trình. Chúng thường được dùng để mô tả những sự việc diễn ra một cách bất ngờ, đột ngột hoặc nhanh chóng.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>QUICKly</strong>" thường được đặt trước hành động để nhấn mạnh ý nghĩa của chúng.</li>

          <li className="margin-bottom-20">Từ này thường được sử dụng trong văn viết và văn nói để mô tả sự thay đổi, sự phát triển hoặc sự kết thúc của một sự việc.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 4, 2024 · by 💎Gem ·</span>
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