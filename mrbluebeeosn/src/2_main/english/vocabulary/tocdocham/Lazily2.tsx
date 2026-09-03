import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function LAzily2(): React.JSX.Element {

  const postId = "LAzily2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-cham"><mark className="highlight-tertiary-padding-4-8">ADverbs: chậm</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">LAzily
        <sup>
          <Link to="/vocabulary/LAzily-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/LAzily-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>LAzily</strong>" (một cách lười biếng) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [LAzily][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">LĀ zi̛ ly</Link>] /ˈleɪzəli/ ⬤•• (3x)
              
            </span>
              
            &nbsp;là một Trạng Cơ dùng để miêu tả một hành động được thực hiện một cách chậm rãi, thiếu năng lượng và không có sự cố gắng.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">after a LONG DAY, he LAzily STRETCHED OUT on the COUCH.</li>
        <li className="list-none margin-bottom-20">Sau một ngày dài, anh ấy lười biếng nằm dài ra ghế sofa.</li>

        <li value="2">she LAzily WANdered through the PARK, enJOYing the SUNshine.</li>
        <li className="list-none margin-bottom-20">Cô ấy lười biếng đi lang thang trong công viên, tận hưởng ánh nắng mặt trời.</li>

        <li value="3">he LAzily FLIPPED through the CHANnels on TV.</li>
        <li className="list-none margin-bottom-20">Anh ấy lười biếng lật qua lật lại các kênh trên TV.</li>

        <li value="4">the CAT LAzily ATE its FOOD.</li>
        <li className="list-none margin-bottom-20">Con mèo lười biếng ăn thức ăn của nó.</li>

        <li value="5">she LAzily LOUNGED by the POOL.</li>
        <li className="list-none margin-bottom-20">Cô ấy lười biếng nằm dài bên hồ bơi.</li>

        <li value="6">he LAzily READ the NEWSpaper.</li>
        <li className="list-none margin-bottom-20">Anh ấy lười biếng đọc báo.</li>

        <li value="7">they LAzily WATCHED the CLOUDS DRIFT BY.</li>
        <li className="list-none margin-bottom-20">Họ lười biếng ngắm nhìn những đám mây trôi.</li>

        <li value="8">she LAzily SPOKE into the PHONE.</li>
        <li className="list-none margin-bottom-20">Cô ấy lười biếng nói vào điện thoại.</li>

        <li value="9">the DOG LAzily WALKED aCROSS the YARD.</li>
        <li className="list-none margin-bottom-20">Con chó lười biếng đi qua sân.</li>

        <li value="10">she LAzily SUNbathed on the BEACH.</li>
        <li className="list-none margin-bottom-20">Cô ấy lười biếng tắm nắng trên bãi biển.</li>

      </ol>

      <p>** Các cụm từ trên đều miêu tả một trạng thái thư giãn, thiếu năng lượng và không muốn hoạt động. Chúng thường được sử dụng để mô tả hành động của con người hoặc động vật khi họ cảm thấy mệt mỏi, chán nản hoặc đơn giản là muốn thư giãn.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>LAzily</strong>" thường được đặt trước hành động để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này thường mang nghĩa tiêu cực, ám chỉ sự lười biếng và thiếu trách nhiệm.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 11, 2024 · by 💎GEM ·</span>
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