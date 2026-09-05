import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function toDAY2(): React.JSX.Element {

  const postId = "toDAY2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-hien-tai"><mark className="highlight-tertiary-padding-4-88">ADverbs: hiện tại</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">toDAY
        <sup>
          <Link to="/vocabulary/toDAY-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/toDAY-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>toDAY</strong>" (hôm nay) trong tiếng Anh nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [toDAY][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">tơ DĀY</Link>] /təˈdeɪ/ •⬤ (2x)
              
            </span>
              
            &nbsp;là một Trạng Cơ chỉ thời gian rất phổ biến, thường được dùng để chỉ thời điểm hiện tại.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">toDAY is MONday.</li>
        <li className="list-none margin-bottom-20">Hôm nay là thứ Hai.</li>

        <li value="2">toDAY, i am GOing to the PARK.</li>
        <li className="list-none margin-bottom-20">Hôm nay, tôi sẽ đi công viên.</li>

        <li value="3">as of toDAY, we have SOLD ONE HUNdred PROJects.</li>
        <li className="list-none margin-bottom-20">Tính đến hôm nay, chúng tôi đã bán được 100 sản phẩm.</li>

        <li value="4">Even toDAY, <strong>man</strong>y PEOple beLIEVE in GHOSTS.</li>
        <li className="list-none margin-bottom-20">Ngay cả ngày nay, nhiều người vẫn tin vào ma.</li>

        <li value="5">i will CALL you LAter toDAY.</li>
        <li className="list-none margin-bottom-20">Tôi sẽ gọi cho bạn vào cuối ngày hôm nay.</li>

        <li value="6">i MET him EARlier toDAY.</li>
        <li className="list-none margin-bottom-20">Tôi gặp anh ấy sớm hơn hôm nay.</li>

        <li value="7">from toDAY ONwards, i will START EXercising.</li>
        <li className="list-none margin-bottom-20">Từ hôm nay trở đi, tôi sẽ bắt đầu tập thể dục.</li>

        <li value="8">toDAY is the DAY i get MARried.</li>
        <li className="list-none margin-bottom-20">Hôm nay là ngày tôi kết hôn.</li>

        <li value="9">up to toDAY, we have comPLEted FIFty perCENT of the PROJect.</li>
        <li className="list-none margin-bottom-20">Cho đến hôm nay, chúng tôi đã hoàn thành 50% dự án.</li>

        <li value="10">on this DAY, <strong>man</strong>y YEARS aGO, a GREAT WAR beGAN.</li>
        <li className="list-none margin-bottom-20">Vào ngày này, nhiều năm trước, một cuộc chiến tranh lớn đã bắt đầu.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>toDAY</strong>" thường đứng ở đầu câu hoặc giữa câu.</li>

          <li className="margin-bottom-20">Ý nghĩa chính xác của cụm từ phụ thuộc vào ngữ cảnh sử dụng.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này sẽ giúp bạn hiểu rõ hơn về cách sử dụng từ "<strong>toDAY</strong>" trong tiếng Anh! 🐝🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 4, 2024 · by 💎GEM ·</span>
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