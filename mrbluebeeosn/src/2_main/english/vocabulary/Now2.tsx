import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

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
              
            &nbsp;là một trạng từ chỉ thời gian rất linh hoạt, có thể được sử dụng trong nhiều ngữ cảnh khác nhau.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">Right <strong>now</strong>: Ngay bây giờ /raɪt naʊ/</li>
        <li className="list-none margin-bottom-20">I need your help right <strong>now</strong>. (Tôi cần sự giúp đỡ của bạn ngay bây giờ.)</li>

        <li value="2">For <strong>now</strong>: Trong lúc này /fɔːr naʊ/</li>
        <li className="list-none margin-bottom-20">For <strong>now</strong>, let's just focus on finishing this project. (Trong lúc này, chúng ta hãy tập trung vào việc hoàn thành dự án này đã.)</li>

        <li value="3"><strong>Now</strong> and then: Thỉnh thoảng /naʊ ænd ðen/</li>
        <li className="list-none margin-bottom-20">I like to go hiking in the mountains <strong>now</strong> and then. (Thỉnh thoảng tôi thích đi bộ đường dài trong núi.)</li>

        <li value="4">Until <strong>now</strong>: Cho đến bây giờ /ənˈtɪl naʊ/</li>
        <li className="list-none margin-bottom-20">I never knew about this problem until <strong>now</strong>. (Tôi chưa từng biết về vấn đề này cho đến bây giờ.)</li>

        <li value="5">Then and <strong>now</strong>: Trước đây và bây giờ /ðen ænd naʊ/</li>
        <li className="list-none margin-bottom-20">She used to be very shy, but then and <strong>now</strong>, she's very outgoing. (Cô ấy trước đây rất nhút nhát, nhưng từ đó đến nay, cô ấy rất hòa đồng.)</li>

        <li value="6">From <strong>now</strong> on: Từ bây giờ trở đi /frɒm naʊ ɒn/</li>
        <li className="list-none margin-bottom-20">I will start exercising every day from <strong>now</strong> on. (Tôi sẽ bắt đầu tập thể dục mỗi ngày từ bây giờ.)</li>

        <li value="7">Just <strong>now</strong>: Vừa mới /dʒʌst naʊ/</li>
        <li className="list-none margin-bottom-20">I saw her just <strong>now</strong>. (Tôi vừa mới thấy cô ấy.)</li>

        <li value="8">Even <strong>now</strong>: Ngay cả bây giờ /ˈiːvən naʊ/</li>
        <li className="list-none margin-bottom-20">Even <strong>now</strong>, I can't believe it happened. (Ngay cả bây giờ, tôi vẫn không thể tin điều đó đã xảy ra.)</li>

        <li value="9"><strong>Now</strong> that: Bây giờ thì /naʊ ðæt/</li>
        <li className="list-none margin-bottom-20"><strong>Now</strong> that you're here, let's get started. (Bây giờ khi bạn đã ở đây, chúng ta bắt đầu nhé.)</li>

        <li value="10">Right this <strong>now</strong>: Ngay lập tức /raɪt ðɪs naʊ/</li>
        <li className="list-none margin-bottom-20">I need to finish this report right this <strong>now</strong>. (Tôi cần hoàn thành báo cáo này ngay lập tức.)</li>

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