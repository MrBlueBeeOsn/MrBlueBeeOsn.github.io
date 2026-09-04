import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function ocCAsionally2(): React.JSX.Element {

  const postId = "ocCAsionally2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-hiem"><mark className="highlight-tertiary-padding-4-88">ADverbs: hiếm</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">ocCAsionally
        <sup>
          <Link to="/vocabulary/ocCAsionally-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/ocCAsionally-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>ocCAsionally</strong>" (thỉnh thoảng) và các cụm từ thường đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [ocCAsionally][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">ơc CĀ siơn a̛l ly</Link>] /əˈkeɪʒənəli/ •⬤••• (5x)
              
            </span>
              
            &nbsp;trong tiếng Anh có nghĩa là "thỉnh thoảng", "đôi khi". Từ này được dùng để chỉ những việc xảy ra không thường xuyên, không đều đặn.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">she ocCAsionally FEELS LONEly, even though she HAS <strong>man</strong>y FRIENDS.</li>
        <li className="list-none margin-bottom-20">Cô ấy thỉnh thoảng cảm thấy cô đơn, mặc dù có nhiều bạn bè.</li>

        <li value="2">it ocCAsionally RAINS in the DESert.</li>
        <li className="list-none margin-bottom-20">Sa mạc thỉnh thoảng cũng có mưa.</li>

        <li value="3">my GRANDparents ocCAsionally VISits us on WEEKends.</li>
        <li className="list-none margin-bottom-20">Ông bà tôi thỉnh thoảng đến thăm chúng tôi vào cuối tuần.</li>

        <li value="4">he ocCAsionally EATS SPIcy FOOD, but he DOESn't LIKE it VERy MUCH.</li>
        <li className="list-none margin-bottom-20">Anh ấy thỉnh thoảng ăn đồ cay, nhưng không thích lắm.</li>

        <li value="5">she ocCAsionally WORKS from HOME when she's FEELing under the WEATHer.</li>
        <li className="list-none margin-bottom-20">Cô ấy thỉnh thoảng làm việc tại nhà khi không khỏe.</li>

        <li value="6">he ocCAsionally PLAYS the piANo for FUN.</li>
        <li className="list-none margin-bottom-20">Anh ấy thỉnh thoảng chơi piano để giải trí.</li>

        <li value="7">i ocCAsionally forGET PEOple's NAMES.</li>
        <li className="list-none margin-bottom-20">Tôi thỉnh thoảng quên tên người khác.</li>

        <li value="8">she ocCAsionally NEEDS HELP with her HOMEwork.</li>
        <li className="list-none margin-bottom-20">Cô ấy thỉnh thoảng cần giúp đỡ bài tập về nhà.</li>

        <li value="9">he ocCAsionally TALKS about his CHILDhood.</li>
        <li className="list-none margin-bottom-20">Anh ấy thỉnh thoảng nói về tuổi thơ của mình.</li>

        <li value="10">they ocCAsionally TRAVel to EURope in the SUMmer.</li>
        <li className="list-none margin-bottom-20">Họ thỉnh thoảng đi du lịch châu Âu vào mùa hè.</li>

      </ol>

      <p>** Các cụm từ trên đều được sử dụng để diễn tả những hành động, tình trạng hoặc sự việc xảy ra không thường xuyên, không có tính chất lặp đi lặp lại. Chúng giúp chúng ta hiểu rõ hơn về tần suất của một hành động hoặc sự kiện.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>ocCAsionally</strong>" thường đứng ở đầu câu hoặc trước hành động để nhấn mạnh tính không thường xuyên của một hành động.</li>

          <li className="margin-bottom-20">Từ này có thể được thay thế bằng các từ đồng nghĩa như: <Link to="/vocabulary/SOMEtimes-1">SOMEtimes</Link>, NOW and THEN, from TIME to TIME.</li>

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