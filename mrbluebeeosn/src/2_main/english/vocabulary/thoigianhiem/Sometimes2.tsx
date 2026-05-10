import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Sometimes2(): React.JSX.Element {

  const postId = "Sometimes2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#thoi-gian-hiem-terms"><mark className="highlight-tertiary-padding-4-8">Thời gian hiếm</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">sometimes
        <sup>
          <Link to="/vocabulary/sometimes-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/sometimes-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>sometimes</strong>" (thỉnh thoảng) trong tiếng Anh nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <strong>Sometimes&nbsp;</strong>
            
            <span className="highlight-255-padding-3-6">
              
              /ˈsʌmtaɪmz/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">sômetīmes</Link>/ 
              
              <sup>&nbsp;/ˈsʌmtaɪmz/ ⬤• (2x)</sup>
              
            </span>
              
            &nbsp;là một trạng từ chỉ tần suất, dùng để diễn tả một hành động hoặc sự việc xảy ra không thường xuyên, có thể xảy ra hoặc không xảy ra.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">Sometimes <strong>I</strong>... /aɪ/</li>
        <li className="list-none">______ go for a walk in the park.</li>
        <li className="list-none margin-bottom-20">Thỉnh thoảng tôi đi dạo trong công viên.</li>

        <li value="2">Sometimes <strong>it</strong>... /ɪt/</li>
        <li className="list-none">______ rains in the summer.</li>
        <li className="list-none margin-bottom-20">Thỉnh thoảng trời mưa vào mùa hè.</li>

        <li value="3">Sometimes <strong>we</strong>... /wiː/</li>
        <li className="list-none">______ go to the movies on weekends.</li>
        <li className="list-none margin-bottom-20">Thỉnh thoảng chúng ta đi xem phim vào cuối tuần.</li>

        <li value="4">Sometimes <strong>they</strong>... /ðeɪ/</li>
        <li className="list-none">______ play soccer in the yard.</li>
        <li className="list-none margin-bottom-20">Thỉnh thoảng họ chơi bóng đá trong sân.</li>

        <li value="5"><strong>Not</strong> sometimes <strong>but often</strong> /nɒt bət ˈɒfən/</li>
        <li className="list-none">He does ______ visits his grandparents.</li>
        <li className="list-none margin-bottom-20">Anh ấy không phải thỉnh thoảng mà thường xuyên đến thăm ông bà.</li>

        <li value="6">Sometimes <strong>and</strong> sometimes <strong>not</strong> /ænd nɒt/</li>
        <li className="list-none">She ______ likes coffee ______.</li>
        <li className="list-none margin-bottom-20">Cô ấy lúc thích cà phê lúc không.</li>

        <li value="7">Sometimes <strong>in the morning</strong> /ɪn ðə ˈmɔːnɪŋ/</li>
        <li className="list-none">I ______ drink tea ______.</li>
        <li className="list-none margin-bottom-20">Thỉnh thoảng tôi uống trà vào buổi sáng.</li>

        <li value="8">Sometimes <strong>at night</strong> /ət naɪt/</li>
        <li className="list-none">I ______ read books ______.</li>
        <li className="list-none margin-bottom-20">Thỉnh thoảng tôi đọc sách vào ban đêm.</li>

        <li value="9">Sometimes <strong>on weekends</strong> /ɒn ˈwiːkɛndz/</li>
        <li className="list-none">We ______ go camping ______.</li>
        <li className="list-none margin-bottom-20">Thỉnh thoảng chúng tôi đi cắm trại vào cuối tuần.</li>

        <li value="10">Sometimes <strong>when I</strong>... /wen aɪ/</li>
        <li className="list-none">______ feel stressed, I listen to music.</li>
        <li className="list-none margin-bottom-20">Thỉnh thoảng khi tôi cảm thấy căng thẳng, tôi nghe nhạc.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Sometimes</strong>" thường đứng ở đầu câu hoặc giữa câu.</li>

          <li className="margin-bottom-20">Bạn có thể kết hợp "<strong>sometimes</strong>" với nhiều trạng từ khác để tạo ra các cụm từ đa dạng hơn.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 5, 2024 · by 💎Gem ·</span>
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