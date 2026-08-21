import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function REALly2(): React.JSX.Element {

  const postId = "REALly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-xac-thuc-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: xác thực</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">REALly
        <sup>
          <Link to="/vocabulary/REALly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/REALly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>REALly</strong>" (thực sự, rất) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [REALly][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">RĖA̛L ly</Link>] /ˈriːəli/ ⬤• (2x)
              
            </span>
              
            &nbsp;trong tiếng Anh có nghĩa là "thực sự", "rất", thường được dùng để nhấn mạnh một ý kiến, cảm xúc hoặc một sự kiện nào đó.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">i REALly LIKE PIZza.</li>
        <li className="list-none margin-bottom-20">Tôi rất thích pizza.</li>

        <li value="2">i REALly WANT to GO to PAris.</li>
        <li className="list-none margin-bottom-20">Tôi rất muốn đến Paris.</li>

        <li value="3">she SPEAKS ENGlish REALly WELL.</li>
        <li className="list-none margin-bottom-20">Cô ấy nói tiếng Anh rất tốt.</li>

        <li value="4">his HOUSE is REALly BIG.</li>
        <li className="list-none margin-bottom-20">Nhà của anh ấy rất lớn.</li>

        <li value="5">the CAR can GO REALly FAST.</li>
        <li className="list-none margin-bottom-20">Chiếc xe có thể chạy rất nhanh.</li>

        <li value="6">this MATH PROBlem is REALly HARD.</li>
        <li className="list-none margin-bottom-20">Bài toán này rất khó.</li>

        <li value="7">that JOKE was REALly FUNny.</li>
        <li className="list-none margin-bottom-20">Câu đùa đó thật hài hước.</li>

        <li value="8">i'm REALly TIred after WORK.</li>
        <li className="list-none margin-bottom-20">Tôi rất mệt sau khi làm việc.</li>

        <li value="9">i'm REALly HAPpy to SEE you.</li>
        <li className="list-none margin-bottom-20">Tôi rất vui khi gặp bạn.</li>

        <li value="10">i was REALly surPRISED by the NEWS.</li>
        <li className="list-none margin-bottom-20">Tôi rất ngạc nhiên khi nghe tin đó.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh mức độ của một Tính Cơ hoặc trạng cơ. "<strong>Really</strong>" được sử dụng để làm tăng cường ý nghĩa của từ đi kèm.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>REALly</strong>" có thể đứng trước hoặc sau Tính Cơ hoặc trạng cơ.</li>

          <li className="margin-bottom-20">Từ này rất phổ biến trong ngôn ngữ hàng ngày và được sử dụng trong nhiều ngữ cảnh khác nhau.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 2, 2024 · by 💎GEM ·</span>
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