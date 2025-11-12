import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

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
              
            &nbsp;thường được dùng để nhấn mạnh mức độ của một tính từ hoặc một trạng từ khác.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1"><strong>Very</strong> happy: Rất vui /ˈveri ˈhæpi/</li>
        <li className="list-none margin-bottom-20">I am <strong>very</strong> happy to see you. (Tôi rất vui khi gặp bạn.)</li>

        <li value="2"><strong>Very</strong> tired: Rất mệt /ˈveri ˈtaɪərd/</li>
        <li className="list-none margin-bottom-20">I am <strong>very</strong> tired after work. (Tôi rất mệt sau khi làm việc.)</li>

        <li value="3"><strong>Very</strong> hungry: Rất đói /ˈveri ˈhʌŋɡri/</li>
        <li className="list-none margin-bottom-20">I am <strong>very</strong> hungry. Can we eat now? (Tôi rất đói. Chúng ta có thể ăn bây giờ không?)</li>

        <li value="4"><strong>Very</strong> good: Rất tốt /ˈveri ɡʊd/</li>
        <li className="list-none margin-bottom-20">Your English is <strong>very</strong> good. (Tiếng Anh của bạn rất tốt.)</li>

        <li value="5"><strong>Very</strong> bad: Rất tệ /ˈveri bæd/</li>
        <li className="list-none margin-bottom-20">The weather is <strong>very</strong> bad today. (Thời tiết hôm nay rất tệ.)</li>

        <li value="6"><strong>Very</strong> quickly: Rất nhanh /ˈveri ˈkwɪkli/</li>
        <li className="list-none margin-bottom-20">She can run <strong>very</strong> quickly. (Cô ấy có thể chạy rất nhanh.)</li>

        <li value="7"><strong>Very</strong> slowly: Rất chậm /ˈveri ˈsloʊli/</li>
        <li className="list-none margin-bottom-20">Please speak <strong>very</strong> slowly. (Làm ơn nói chậm lại.)</li>

        <li value="8"><strong>Very</strong> carefully: Rất cẩn thận /ˈveri ˈkeəfəli/</li>
        <li className="list-none margin-bottom-20">Please handle this glass <strong>very</strong> carefully. (Làm ơn cầm ly này thật cẩn thận.)</li>

        <li value="9"><strong>Very</strong> much: Rất nhiều /ˈveri mʌtʃ/</li>
        <li className="list-none margin-bottom-20">I like coffee <strong>very</strong> much. (Tôi rất thích cà phê.)</li>

        <li value="10"><strong>Very</strong> little: Rất ít /ˈveri ˈlɪtəl/</li>
        <li className="list-none margin-bottom-20">I have <strong>very</strong> little time. (Tôi có rất ít thời gian.)</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Very</strong>" thường đứng trước tính từ hoặc trạng từ để nhấn mạnh ý nghĩa của chúng.</li>

          <li className="margin-bottom-20">Có nhiều trạng từ khác cũng có thể được sử dụng để thay thế cho "<strong>very</strong>" như: extremely, incredibly, highly, deeply, và nhiều hơn nữa.</li>

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