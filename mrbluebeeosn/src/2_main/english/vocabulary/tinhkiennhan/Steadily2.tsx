import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function STEADily2(): React.JSX.Element {

  const postId = "STEADily2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-kien-nhan-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: kiên nhẫn</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">STEADily
        <sup>
          <Link to="/vocabulary/STEADily-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/STEADily-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>STEADily</strong>" (một cách đều đặn) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [STEAdily][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">STEAD i̛ ly</Link>] /ˈsted.ə.li/ ⬤•• (3x)
              
            </span>
              
            &nbsp;thường được dùng để mô tả một hành động hoặc quá trình diễn ra một cách ổn định, liên tục và không có nhiều sự thay đổi đột ngột.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">the COMpany's PROFits have been STEADily inCREASing over the PAST YEAR.</li>
        <li className="list-none margin-bottom-20">Lợi nhuận của công ty đã tăng một cách đều đặn trong năm qua.</li>

        <li value="2">the unempLOYment RATE has been STEADily deCREASing.</li>
        <li className="list-none margin-bottom-20">Tỷ lệ thất nghiệp đã giảm một cách đều đặn.</li>

        <li value="3">the SMALL BUSIness has been STEADily GROWing its CUStomer BASE.</li>
        <li className="list-none margin-bottom-20">Doanh nghiệp nhỏ đã phát triển cơ sở khách hàng của mình một cách đều đặn.</li>

        <li value="4">the popuLARity of the PRODuct has been STEADily deCLIning.</li>
        <li className="list-none margin-bottom-20">Sự phổ biến của sản phẩm đã suy giảm một cách đều đặn.</li>

        <li value="5">her ENGlish SKILLS have been STEADily imPROVing with PRACtice.</li>
        <li className="list-none margin-bottom-20">Kỹ năng tiếng Anh của cô ấy đã cải thiện một cách đều đặn nhờ luyện tập.</li>

        <li value="6">he STEADily WORKED on the PROJect, MAKing conSIStent PROGress.</li>
        <li className="list-none margin-bottom-20">Anh ấy làm việc trên dự án một cách đều đặn, đạt được tiến bộ ổn định.</li>

        <li value="7">it STEADily RAINED throughout the MORNing.</li>
        <li className="list-none margin-bottom-20">Trời mưa đều đặn suốt buổi sáng.</li>

        <li value="8">the RIVer STEADily FLOWED toWARDS the SEA.</li>
        <li className="list-none margin-bottom-20">Dòng sông chảy đều đặn ra biển.</li>

        <li value="9">the ARmy STEADily adVANCED aCROSS the TERritory.</li>
        <li className="list-none margin-bottom-20">Quân đội tiến lên một cách đều đặn trên khắp lãnh thổ.</li>

        <li value="10">she STEADily HELD the CAMERa to TAKE a CLEAR PICture.</li>
        <li className="list-none margin-bottom-20">Cô ấy giữ máy ảnh một cách chắc chắn để chụp một bức ảnh rõ nét.</li>

      </ol>

      <p>** Các cụm từ trên đều mô tả một hành động hoặc quá trình diễn ra một cách ổn định, liên tục và không có nhiều sự thay đổi đột ngột.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>STEADily</strong>" thường đứng trước hành động để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này mang nghĩa về sự đều đặn, ổn định.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>April 28, 2025 · by 💎GEM ·</span>
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