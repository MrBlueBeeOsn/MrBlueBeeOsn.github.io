import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function exTREMEly2(): React.JSX.Element {

  const postId = "exTREMEly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-muc-do-cao"><mark className="highlight-tertiary-padding-4-8">ADverbs: mức độ cao</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">exTREMEly
        <sup>
          <Link to="/vocabulary/exTREMEly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/exTREMEly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>exTREMEly</strong>" (cực kỳ) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [exTREMEly][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">ėx TRĒME ly</Link>] /ɪkˈstriːmli/ •⬤• (3x)
              
            </span>
              
            &nbsp;là một Trạng Cơ dùng để nhấn mạnh mức độ cao nhất của một Tính Cơ hoặc trạng cơ. Nó thường được sử dụng để diễn tả cảm xúc, tình huống hoặc sự vật vượt quá mức bình thường.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">she was exTREMEly HAPpy to SEE her FAMILy.</li>
        <li className="list-none margin-bottom-20">Cô ấy rất vui khi gặp lại gia đình.</li>

        <li value="2">after WORKing all NIGHT, he was exTREMEly TIred.</li>
        <li className="list-none margin-bottom-20">Sau khi làm việc cả đêm, anh ấy rất mệt mỏi.</li>

        <li value="3">the exAM was exTREMEly DIFficult.</li>
        <li className="list-none margin-bottom-20">Bài kiểm tra rất khó.</li>

        <li value="4">it's exTREMEly DANgerous to SWIM in this RIVer.</li>
        <li className="list-none margin-bottom-20">Bơi ở con sông này rất nguy hiểm.</li>

        <li value="5">she is an exTREMEly TALented muSICian.</li>
        <li className="list-none margin-bottom-20">Cô ấy là một nhạc sĩ rất tài năng.</li>

        <li value="6">the SUNset was exTREMEly BEAUtiful.</li>
        <li className="list-none margin-bottom-20">Hoàng hôn rất đẹp.</li>

        <li value="7">he is an exTREMEly RICH BUSInessman.</li>
        <li className="list-none margin-bottom-20">Ông ấy là một doanh nhân rất giàu có.</li>

        <li value="8">it's exTREMEly COLD outSIDE toDAY.</li>
        <li className="list-none margin-bottom-20">Trời hôm nay lạnh quá.</li>

        <li value="9">after PLAYing SPORTS all DAY, i was exTREMEly HUNGry.</li>
        <li className="list-none margin-bottom-20">Sau khi chơi thể thao cả ngày, tôi rất đói.</li>

        <li value="10">she was exTREMEly ANGry when she HEARD the NEWS.</li>
        <li className="list-none margin-bottom-20">Cô ấy rất tức giận khi nghe tin đó.</li>

      </ol>

      <p>** Các cụm từ trên đều được sử dụng để nhấn mạnh mức độ cao nhất của một Tính Cơ hoặc trạng cơ, tạo nên một hiệu ứng nhấn mạnh và tăng cường cảm xúc.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>exTREMEly</strong>" thường được đặt trước Tính Cơ hoặc Trạng Cơ để bổ nghĩa.</li>

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