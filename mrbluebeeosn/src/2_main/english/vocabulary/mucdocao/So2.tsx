import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SO2(): React.JSX.Element {

  const postId = "SO2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-muc-do-cao"><mark className="highlight-tertiary-padding-4-8">ADverbs: mức độ cao</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">SO
        <sup>
          <Link to="/vocabulary/SO-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/SO-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>SO</strong>" (quá, rất; như vậy) khi nó đóng vai trò là một Trạng Cơ trong tiếng Anh nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [SO][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">SŌ</Link>] /soʊ/ ⬤ (1x)
              
            </span>
              
            &nbsp;là một Trạng Cơ rất linh hoạt, có thể dùng để nhấn mạnh mức độ, chỉ kết quả hoặc đồng ý với một điều gì đó.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">THANK you SO MUCH for your HELP!</li>
        <li className="list-none margin-bottom-20">Cảm ơn bạn rất nhiều vì sự giúp đỡ của bạn!</li>

        <li value="2">there are SO many PEOple here toDAY.</li>
        <li className="list-none margin-bottom-20">Hôm nay có quá nhiều người ở đây.</li>

        <li value="3">this CAKE is SO GOOD!</li>
        <li className="list-none margin-bottom-20">Cái bánh này ngon quá!</li>

        <li value="4">she DROVE SO CAREfully through the NARrow STREETS.</li>
        <li className="list-none margin-bottom-20">Cô ấy lái xe rất cẩn thận qua những con phố hẹp.</li>

        <li value="5">TIME FLIES SO FAST when you're HAVing FUN.</li>
        <li className="list-none margin-bottom-20">Thời gian trôi rất nhanh khi bạn vui vẻ.</li>

        <li value="6">he STUDied HARD so that he could PASS the exAM.</li>
        <li className="list-none margin-bottom-20">Anh ấy học chăm chỉ để mà anh ấy có thể vượt qua kỳ thi.</li>

        <li value="7">Well, SO LONG for NOW!</li>
        <li className="list-none margin-bottom-20">Tạm biệt nhé!</li>

        <li className="list-none">it's been SO LONG since we LAST MET.</li>
        <li className="list-none margin-bottom-20">Đã quá lâu rồi kể từ lần cuối chúng ta gặp nhau.</li>

        <li value="8">i MADE a misTAKE. "SO WHAT? EVERyone MAKES misTAKES".</li>
        <li className="list-none margin-bottom-20">Tôi đã mắc lỗi. "Thì sao chứ? Ai cũng mắc lỗi mà."</li>

        <li value="9">we disCUSSED the BUDget, the TIMEline, the reSOURces, and SO ON.</li>
        <li className="list-none margin-bottom-20">Chúng tôi đã thảo luận về ngân sách, thời gian biểu, nguồn lực, và cứ thế.</li>

        <li value="10">i LOVE CHOColate. "SO do i.", "SO am i".</li>
        <li className="list-none margin-bottom-20">Tôi thích sô cô la. "Tôi cũng vậy."</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li><strong>SO</strong> BEAUtiful, <strong>SO</strong> QUICKly</li>
          <li className="list-none">Đẹp quá, nhanh quá!</li>
          <li className="list-none margin-bottom-20">Nhấn mạnh mức độ: "<strong>SO</strong>" thường được dùng để nhấn mạnh Tính Cơ hoặc Trạng Cơ.</li>
          

          <li>it RAINED HEAVily, <strong>SO</strong> we STAYED HOME.</li>
          <li className="list-none">Trời mưa rất to, nên chúng tôi ở nhà.</li>
          <li className="list-none margin-bottom-20">Chỉ kết quả: "<strong>So</strong>" có thể dùng để giới thiệu kết quả của một hành động hoặc tình huống.</li>
          

          <li>Đa dạng ngữ cảnh: "<strong>SO</strong>" là một từ rất phổ biến và có nhiều cách dùng khác nhau tùy thuộc vào ngữ cảnh.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>June 26, 2025 · by 💎GEM ·</span>
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