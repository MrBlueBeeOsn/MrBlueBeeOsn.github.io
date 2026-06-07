import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Very2(): React.JSX.Element {

  const postId = "Very2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#muc-do-cao-terms"><mark className="highlight-tertiary-padding-4-8">Mức độ cao</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">very
        <sup>
          <Link to="/vocabulary/very-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/very-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>very</strong>" (rất) trong tiếng Anh nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <strong>Very&nbsp;</strong>
            
            <span className="highlight-255-padding-3-6">
              
              /ˈveri/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">very</Link>/ 
              
              <sup>&nbsp;⬤• (2x)</sup>
              
            </span>
              
            &nbsp;thường được dùng để nhấn mạnh mức độ của một tính cơ hoặc một trạng cơ khác.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">Very <strong>happy</strong> /ˈhæpi/</li>
        <li className="list-none">I am ______ to see you.</li>
        <li className="list-none margin-bottom-20">Tôi rất vui khi gặp bạn.</li>

        <li value="2">Very <strong>tired</strong> /ˈtaɪərd/</li>
        <li className="list-none">I am ______ after work.</li>
        <li className="list-none margin-bottom-20">Tôi rất mệt sau khi làm việc.</li>

        <li value="3">Very <strong>hungry</strong> /ˈhʌŋɡri/</li>
        <li className="list-none">I am ______. Can we eat now?</li>
        <li className="list-none margin-bottom-20">Tôi rất đói. Chúng ta có thể ăn bây giờ không?</li>

        <li value="4">Very <strong>good</strong> /ɡʊd/</li>
        <li className="list-none">Your English is ______.</li>
        <li className="list-none margin-bottom-20">Tiếng Anh của bạn rất tốt.</li>

        <li value="5">Very <strong>bad</strong> /bæd/</li>
        <li className="list-none">The weather is ______ today.</li>
        <li className="list-none margin-bottom-20">Thời tiết hôm nay rất tệ.</li>

        <li value="6">Very <strong>quickly</strong> /ˈkwɪkli/</li>
        <li className="list-none">She can run ______.</li>
        <li className="list-none margin-bottom-20">Cô ấy có thể chạy rất nhanh.</li>

        <li value="7">Very <strong>slowly</strong> /ˈsloʊli/</li>
        <li className="list-none">Please speak ______.</li>
        <li className="list-none margin-bottom-20">Làm ơn nói chậm lại.</li>

        <li value="8">Very <strong>carefully</strong> /ˈkeəfəli/</li>
        <li className="list-none">Please handle this glass ______.</li>
        <li className="list-none margin-bottom-20">Làm ơn cầm ly này thật cẩn thận.</li>

        <li value="9">Very <strong>much</strong> /mʌtʃ/</li>
        <li className="list-none">I like coffee ______.</li>
        <li className="list-none margin-bottom-20">Tôi rất thích cà phê.</li>

        <li value="10">Very <strong>little</strong> /ˈlɪtəl/</li>
        <li className="list-none">I have ______ time.</li>
        <li className="list-none margin-bottom-20">Tôi có rất ít thời gian.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Very</strong>" thường đứng trước tính cơ hoặc trạng cơ để nhấn mạnh ý nghĩa của chúng.</li>

          <li className="margin-bottom-20">Có nhiều trạng cơ khác cũng có thể được sử dụng để thay thế cho "<strong>very</strong>" như: extremely, incredibly, highly, deeply, và nhiều hơn nữa.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 12, 2024 · by 💎Gem ·</span>
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