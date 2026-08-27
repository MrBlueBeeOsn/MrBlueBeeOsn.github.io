import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function preCISEly2(): React.JSX.Element {

  const postId = "preCISEly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-chinh-xac-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: chính xác</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">preCISEly
        <sup>
          <Link to="/vocabulary/preCISEly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/preCISEly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>preCISEly</strong>" (một cách chính xác) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>
      
          <p className="margin-y-10">

            <span className="highlight-255-padding-3-6">

              [preCISEly][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">prė CĪSE ly</Link>] /prɪˈsaɪs.li/ •⬤• (3x)

            </span>
              
            &nbsp;thường được dùng để mô tả một hành động hoặc trạng thái được thực hiện một cách chính xác, đúng đắn, không có sai sót.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">the SCIentist preCISEly MEASured the CHEMicals.</li>
        <li className="list-none margin-bottom-20">Nhà khoa học đo lường các hóa chất một cách chính xác.</li>

        <li value="2">the engiNEER preCISEly CALculated the diMENsions.</li>
        <li className="list-none margin-bottom-20">Kỹ sư tính toán các kích thước một cách chính xác.</li>

        <li value="3">the LAW preCISEly deFINES the TERMS.</li>
        <li className="list-none margin-bottom-20">Luật định nghĩa các điều khoản một cách chính xác.</li>

        <li value="4">the MAP preCISEly loCAted the TREAsure.</li>
        <li className="list-none margin-bottom-20">Bản đồ xác định vị trí kho báu một cách chính xác.</li>

        <li value="5">the CHEF preCISEly FOLlowed the RECipe.</li>
        <li className="list-none margin-bottom-20">Đầu bếp tuân theo công thức một cách chính xác.</li>

        <li value="6">the WITness preCISEly deSCRIBED the SUSpect.</li>
        <li className="list-none margin-bottom-20">Nhân chứng miêu tả nghi phạm một cách chính xác.</li>

        <li value="7">the TEACHer preCISEly exPLAINED the CONcept.</li>
        <li className="list-none margin-bottom-20">Giáo viên giải thích khái niệm một cách chính xác.</li>

        <li value="8">the maCHINE preCISEly conTROLLED the TEMPERature.</li>
        <li className="list-none margin-bottom-20">Máy móc kiểm soát nhiệt độ một cách chính xác.</li>

        <li value="9">the PARTS were preCISEly aLIGNED.</li>
        <li className="list-none margin-bottom-20">Các bộ phận được căn chỉnh một cách chính xác.</li>

        <li value="10">the eVENT was preCISEly TIMED.</li>
        <li className="list-none margin-bottom-20">Sự kiện được định thời gian một cách chính xác.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh tính chính xác, đúng đắn, không có sai sót. Chúng thường được sử dụng để miêu tả những hành động hoặc trạng thái được thực hiện một cách cẩn thận và đúng đến từng chi tiết.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>preCISEly</strong>" thường đứng trước hành động để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này mang nghĩa tích cực, thể hiện sự cẩn thận và độ chính xác cao.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
          
        <div className="post-date no-margin">
          <span>April 15, 2025 · by 💎GEM ·</span>
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