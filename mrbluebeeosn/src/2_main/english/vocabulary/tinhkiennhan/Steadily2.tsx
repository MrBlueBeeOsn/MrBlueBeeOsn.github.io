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
    
      <h4><HashLink smooth to="/vocabulary#adverbs-kien-nhan"><mark className="highlight-tertiary-padding-4-8">ADverbs: kiên nhẫn</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">STEADily
        <sup>
          <Link to="/vocabulary/STEADily-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/STEADily-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#inCREAsing-over">inCREAsing <strong>o</strong>ver</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#deCREAsing">deCREAsing</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#GROWing">GROWing</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#deCLIning">deCLIning</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#imPROVing-with">imPROVing with</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#WORKED-on">WORKED on</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#RAINED-throughout">RAINED through<strong>out</strong></HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#FLOWED-towards">FLOWED to<strong>wards</strong></HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#adVANCED-across">adVANCED a<strong>cross</strong></HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#HELD">HELD</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>STEADily</strong>" (một cách đều đặn) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              STEAdily \<Link to="/pronunciation/5-vowel-system">STEAD i̛ ly</Link>\ /ˈsted.ə.li/ ⬤•• (THREE SYLlables)
              
            </span>
              
            &nbsp;thường được dùng để mô tả một hành động hoặc quá trình diễn ra một cách ổn định, liên tục và không có nhiều sự thay đổi đột ngột.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="inCREAsing-over">the COMpany's PROFits have been STEADily [inCREAsing <strong>o</strong>ver] the PAST YEAR.</li>
        <li className="list-none margin-bottom-20">Lợi nhuận của công ty đã [tăng] một cách đều đặn trong năm qua.</li>

        <li value="2" id="deCREAsing">the unempLOYment RATE has been STEADily [deCREAsing].</li>
        <li className="list-none margin-bottom-20">Tỷ lệ thất nghiệp đã [giảm] một cách đều đặn.</li>

        <li value="3" id="GROWing">the SMALL BUSIness has been STEADily [GROWing] its CUStomer BASE.</li>
        <li className="list-none margin-bottom-20">Doanh nghiệp nhỏ đã [phát triển] cơ sở khách hàng của mình một cách đều đặn.</li>

        <li value="4" id="deCLIning">the popuLARity of the PRODuct has been STEADily [deCLIning].</li>
        <li className="list-none margin-bottom-20">Sự phổ biến của sản phẩm đã [suy giảm] một cách đều đặn.</li>

        <li value="5" id="imPROVing-with">her ENGlish SKILLS have been STEADily [imPROVing with] PRACtice.</li>
        <li className="list-none margin-bottom-20">Kỹ năng tiếng Anh của cô ấy đã [cải thiện] một cách đều đặn [nhờ] luyện tập.</li>

        <li value="6" id="WORKED-on">he STEADily [WORKED on] the PROJect, MAking conSIStent PROGress.</li>
        <li className="list-none margin-bottom-20">Anh ấy [làm việc trên] dự án một cách đều đặn, đạt được tiến bộ ổn định.</li>

        <li value="7" id="RAINED-throughout">it STEADily [RAINED through<strong>out</strong>] the MORNing.</li>
        <li className="list-none margin-bottom-20">Trời [mưa] đều đặn [suốt] buổi sáng.</li>

        <li value="8" id="FLOWED-towards">the RIVer STEADily [FLOWED to<strong>wards</strong>] the SEA.</li>
        <li className="list-none margin-bottom-20">Dòng sông [chảy] đều đặn [ra] biển.</li>

        <li value="9" id="adVANCED-across">the ARmy STEADily [adVANCED a<strong>cross</strong>] the TERritory.</li>
        <li className="list-none margin-bottom-20">Quân đội [tiến lên] một cách đều đặn [trên] khắp lãnh thổ.</li>

        <li value="10" id="HELD">she STEADily [HELD] the CAMERa to TAKE a CLEAR PICture.</li>
        <li className="list-none margin-bottom-20">Cô ấy [giữ] máy ảnh một cách chắc chắn để chụp một bức ảnh rõ nét.</li>

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