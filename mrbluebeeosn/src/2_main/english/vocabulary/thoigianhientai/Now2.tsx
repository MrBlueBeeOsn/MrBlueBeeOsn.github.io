import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Now2(): React.JSX.Element {

  const postId = "Now2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#thoi-gian-hien-tai-terms"><mark className="highlight-tertiary-padding-4-8">Thời gian hiện tại</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">now
        <sup>
          <Link to="/vocabulary/now-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/now-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>now</strong>" (bây giờ) trong tiếng Anh nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <strong>Now&nbsp;</strong>
            
            <span className="highlight-255-padding-3-6">
              
              /naʊ/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">now</Link>/ 
              
              <sup>&nbsp;⬤ (1x)</sup>
              
            </span>
              
            &nbsp;là một trạng cơ chỉ thời gian rất linh hoạt, có thể được sử dụng trong nhiều ngữ cảnh khác nhau.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1"><strong>Right</strong> now /raɪt/</li>
        <li className="list-none">I need your help ______.</li>
        <li className="list-none margin-bottom-20">Tôi cần sự giúp đỡ của bạn ngay bây giờ.</li>

        <li value="2"><strong>For</strong> now /fɔːr/</li>
        <li className="list-none">______, let's just focus on finishing this project.</li>
        <li className="list-none margin-bottom-20">Trong lúc này, chúng ta hãy tập trung vào việc hoàn thành dự án này đã.</li>

        <li value="3">Now <strong>and then</strong> /ænd ðen/</li>
        <li className="list-none">I like to go hiking in the mountains ______.</li>
        <li className="list-none margin-bottom-20">Thỉnh thoảng tôi thích đi bộ đường dài trong núi.</li>

        <li value="4"><strong>Until</strong> now /ənˈtɪl/</li>
        <li className="list-none">I never knew about this problem ______.</li>
        <li className="list-none margin-bottom-20">Tôi chưa từng biết về vấn đề này cho đến bây giờ.</li>

        <li value="5"><strong>Then and</strong> now /ðen ænd/</li>
        <li className="list-none">She used to be very shy, but ______, she's very outgoing.</li>
        <li className="list-none margin-bottom-20">Cô ấy trước đây rất nhút nhát, nhưng từ đó đến nay, cô ấy rất hòa đồng.</li>

        <li value="6"><strong>From</strong> now <strong>on</strong> /frɒm ɒn/</li>
        <li className="list-none">I will start exercising every day ______.</li>
        <li className="list-none margin-bottom-20">Tôi sẽ bắt đầu tập thể dục mỗi ngày từ bây giờ.</li>

        <li value="7"><strong>Just</strong> now /dʒʌst/</li>
        <li className="list-none">I saw her ______.</li>
        <li className="list-none margin-bottom-20">Tôi vừa mới thấy cô ấy.</li>

        <li value="8"><strong>Even</strong> now /ˈiːvən/</li>
        <li className="list-none">______, I can't believe it happened.</li>
        <li className="list-none margin-bottom-20">Ngay cả bây giờ, tôi vẫn không thể tin điều đó đã xảy ra.</li>

        <li value="9">Now <strong>that</strong> /ðæt/</li>
        <li className="list-none">______ you're here, let's get started.</li>
        <li className="list-none margin-bottom-20">Bây giờ khi bạn đã ở đây, chúng ta bắt đầu nhé.</li>

        <li value="10"><strong>Right this</strong> now /raɪt ðɪs/</li>
        <li className="list-none">I need to finish this report ______.</li>
        <li className="list-none margin-bottom-20">Tôi cần hoàn thành báo cáo này ngay lập tức.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Now</strong>" có thể được sử dụng để kết nối các ý tưởng, tạo ra sự chuyển tiếp giữa các câu.</li>

          <li>"<strong>Now</strong>" có thể đứng ở nhiều vị trí khác nhau trong câu, tùy thuộc vào ngữ cảnh.</li>

          <li className="margin-bottom-20">Ý nghĩa chính xác của cụm từ phụ thuộc vào ngữ cảnh sử dụng.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này sẽ giúp bạn hiểu rõ hơn về cách sử dụng từ "<strong>now</strong>" trong tiếng Anh! 🐝🐝</p>

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