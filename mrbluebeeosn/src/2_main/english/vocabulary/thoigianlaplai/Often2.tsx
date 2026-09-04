import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function OFten2(): React.JSX.Element {

  const postId = "OFten2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-lap-lai"><mark className="highlight-tertiary-padding-4-88">ADverbs: lặp lại</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">OFten
        <sup>
          <Link to="/vocabulary/OFten-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/OFten-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>OFten</strong>" (thường xuyên) trong tiếng Anh nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [OFten][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">OF te̛n</Link>] /ˈɒf.ən/ ⬤• (2x)
              
            </span>
              
            &nbsp;là một Trạng Cơ chỉ tần suất, dùng để diễn tả một hành động hoặc sự việc xảy ra nhiều lần.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">i OFten DO my HOMEwork in the EVEning.</li>
        <li className="list-none margin-bottom-20">Tôi thường làm bài tập về nhà vào buổi tối.</li>

        <li value="2">we OFten GO to the BEACH on WEEKends.</li>
        <li className="list-none margin-bottom-20">Chúng tôi thường đi biển vào cuối tuần.</li>

        <li value="3">she OFten EATS FRUITS for BREAKfast.</li>
        <li className="list-none margin-bottom-20">Cô ấy thường ăn trái cây vào bữa sáng.</li>

        <li value="4">he OFten READS BOOKS be<strong>fore</strong> GOing to BED.</li>
        <li className="list-none margin-bottom-20">Anh ấy thường đọc sách trước khi đi ngủ.</li>

        <li value="5">CHILDren OFten PLAY outSIDE <strong>af</strong>ter SCHOOL.</li>
        <li className="list-none margin-bottom-20">Trẻ em thường chơi ngoài trời sau giờ học.</li>

        <li value="6">i do NOT OFten WATCH tV, but SOMEtimes i do.</li>
        <li className="list-none margin-bottom-20">Tôi không thường xuyên xem TV, nhưng thỉnh thoảng tôi cũng xem.</li>

        <li value="7">i OFten DRINK COFfee in the MORNing.</li>
        <li className="list-none margin-bottom-20">Tôi thường uống cà phê vào buổi sáng.</li>

        <li value="8">he OFten WORKS LATE at NIGHT.</li>
        <li className="list-none margin-bottom-20">Anh ấy thường làm việc muộn vào ban đêm.</li>

        <li value="9">we OFten GO SHOPping on WEEKends.</li>
        <li className="list-none margin-bottom-20">Chúng tôi thường đi mua sắm vào cuối tuần.</li>

        <li value="10">when i OFten FEEL STRESSED, i LISten to MUsic.</li>
        <li className="list-none margin-bottom-20">Thường khi tôi cảm thấy căng thẳng, tôi nghe nhạc.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>OFten</strong>" thường đứng trước hành động chính trong câu.</li>

          <li className="margin-bottom-20">Bạn có thể kết hợp "<strong>OFten</strong>" với nhiều Trạng Cơ khác để tạo ra các cụm từ đa dạng hơn.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

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