import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function Sometimes2(): React.JSX.Element {

  const postId = "Sometimes2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-hiem-terms"><mark className="highlight-tertiary-padding-4-8">Tính hiếm</mark></HashLink></h4>
      
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

        <li value="1"><strong>Sometimes</strong> I...: Thỉnh thoảng tôi... /ˈsʌmtaɪmz aɪ/</li>
        <li className="list-none margin-bottom-20"><strong>Sometimes</strong> I go for a walk in the park. (Thỉnh thoảng tôi đi dạo trong công viên.)</li>

        <li value="2"><strong>Sometimes</strong> it...: Thỉnh thoảng nó... /ˈsʌmtaɪmz ɪt/</li>
        <li className="list-none margin-bottom-20"><strong>Sometimes</strong> it rains in the summer. (Thỉnh thoảng trời mưa vào mùa hè.)</li>

        <li value="3"><strong>Sometimes</strong> we...: Thỉnh thoảng chúng ta... /ˈsʌmtaɪmz wiː/</li>
        <li className="list-none margin-bottom-20"><strong>Sometimes</strong> we go to the movies on weekends. (Thỉnh thoảng chúng ta đi xem phim vào cuối tuần.)</li>

        <li value="4"><strong>Sometimes</strong> they...: Thỉnh thoảng họ... /ˈsʌmtaɪmz ðeɪ/</li>
        <li className="list-none margin-bottom-20"><strong>Sometimes</strong> they play soccer in the yard. (Thỉnh thoảng họ chơi bóng đá trong sân.)</li>

        <li value="5">Not <strong>sometimes</strong> but often: Không phải thỉnh thoảng mà thường xuyên /nɒt ˈsʌmtaɪmz bət ˈɒfən/</li>
        <li className="list-none margin-bottom-20">He doesn't <strong>sometimes</strong> but often visits his grandparents. (Anh ấy không phải thỉnh thoảng mà thường xuyên đến thăm ông bà.)</li>

        <li value="6"><strong>Sometimes</strong> and <strong>sometimes</strong> not: Lúc có lúc không /ˈsʌmtaɪmz ænd ˈsʌmtaɪmz nɒt/</li>
        <li className="list-none margin-bottom-20">She <strong>sometimes</strong> likes coffee and <strong>sometimes</strong> not. (Cô ấy lúc thích cà phê lúc không.)</li>

        <li value="7"><strong>Sometimes</strong> in the morning: Thỉnh thoảng vào buổi sáng /ˈsʌmtaɪmz ɪn ðə ˈmɔːnɪŋ/</li>
        <li className="list-none margin-bottom-20">I <strong>sometimes</strong> drink tea in the morning. (Thỉnh thoảng tôi uống trà vào buổi sáng.)</li>

        <li value="8"><strong>Sometimes</strong> at night: Thỉnh thoảng vào ban đêm /ˈsʌmtaɪmz ət naɪt/</li>
        <li className="list-none margin-bottom-20">I <strong>sometimes</strong> read books at night. (Thỉnh thoảng tôi đọc sách vào ban đêm.)</li>

        <li value="9"><strong>Sometimes</strong> on weekends: Thỉnh thoảng vào cuối tuần /ˈsʌmtaɪmz ɒn ˈwiːkɛndz/</li>
        <li className="list-none margin-bottom-20">We <strong>sometimes</strong> go camping on weekends. (Thỉnh thoảng chúng tôi đi cắm trại vào cuối tuần.)</li>

        <li value="10"><strong>Sometimes</strong> when I...: Thỉnh thoảng khi tôi... /ˈsʌmtaɪmz wen aɪ/</li>
        <li className="list-none margin-bottom-20"><strong>Sometimes</strong> when I feel stressed, I listen to music. (Thỉnh thoảng khi tôi cảm thấy căng thẳng, tôi nghe nhạc.)</li>

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