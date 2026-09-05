import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function NOW2(): React.JSX.Element {

  const postId = "NOW2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-hien-tai"><mark className="highlight-tertiary-padding-4-88">ADverbs: hiện tại</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">NOW
        <sup>
          <Link to="/vocabulary/NOW-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/NOW-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>NOW</strong>" (bây giờ) trong tiếng Anh nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [NOW][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">NOW</Link>] /naʊ/ ⬤ (1x)
              
            </span>
              
            &nbsp;là một Trạng Cơ chỉ thời gian rất linh hoạt, có thể được sử dụng trong nhiều ngữ cảnh khác nhau.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">i NEED your HELP RIGHT NOW.</li>
        <li className="list-none margin-bottom-20">Tôi cần sự giúp đỡ của bạn ngay bây giờ.</li>

        <li value="2">for NOW, let's JUST FOcus on FINishing this PROJect.</li>
        <li className="list-none margin-bottom-20">Trong lúc này, chúng ta hãy tập trung vào việc hoàn thành dự án này đã.</li>

        <li value="3">i LIKE to GO HIking in the MOUNtains NOW and THEN.</li>
        <li className="list-none margin-bottom-20">Thỉnh thoảng tôi thích đi bộ đường dài trong núi.</li>

        <li value="4">i NEVer KNEW about this PROBlem until NOW.</li>
        <li className="list-none margin-bottom-20">Tôi chưa từng biết về vấn đề này cho đến bây giờ.</li>

        <li value="5">she USED to be VERy SHY, but THEN and NOW, she's VERy OUTgoing.</li>
        <li className="list-none margin-bottom-20">Cô ấy trước đây rất nhút nhát, nhưng từ đó đến nay, cô ấy rất hòa đồng.</li>

        <li value="6">i will START EXercising <strong>eve</strong>ry DAY from NOW ON.</li>
        <li className="list-none margin-bottom-20">Tôi sẽ bắt đầu tập thể dục mỗi ngày từ bây giờ.</li>

        <li value="7">i SAW her JUST NOW.</li>
        <li className="list-none margin-bottom-20">Tôi vừa mới thấy cô ấy.</li>

        <li value="8">Even NOW, i CAN'T beLIEVE it HAPpened.</li>
        <li className="list-none margin-bottom-20">Ngay cả bây giờ, tôi vẫn không thể tin điều đó đã xảy ra.</li>

        <li value="9">NOW that you're HERE, let's get STARTed.</li>
        <li className="list-none margin-bottom-20">Bây giờ khi bạn đã ở đây, chúng ta bắt đầu nhé.</li>

        <li value="10">i NEED to FINish this rePORT RIGHT this NOW.</li>
        <li className="list-none margin-bottom-20">Tôi cần hoàn thành báo cáo này ngay lập tức.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>NOW</strong>" có thể được sử dụng để kết nối các ý tưởng, tạo ra sự chuyển tiếp giữa các câu.</li>

          <li>"<strong>NOW</strong>" có thể đứng ở nhiều vị trí khác nhau trong câu, tùy thuộc vào ngữ cảnh.</li>

          <li className="margin-bottom-20">Ý nghĩa chính xác của cụm từ phụ thuộc vào ngữ cảnh sử dụng.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này sẽ giúp bạn hiểu rõ hơn về cách sử dụng từ "<strong>NOW</strong>" trong tiếng Anh! 🐝🐝</p>

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