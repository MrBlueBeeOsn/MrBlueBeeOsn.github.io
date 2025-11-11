import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function Seldom2(): React.JSX.Element {

  const postId = "Seldom2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-hiem-terms"><mark className="highlight-tertiary-padding-4-8">Tính hiếm</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">seldom
        <sup>
          <Link to="/vocabulary/seldom-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/seldom-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>seldom</strong>" (hiếm khi) trong tiếng Anh nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <strong>Seldom&nbsp;</strong>
            
            <span className="highlight-255-padding-3-6">
              
              /ˈsɛldəm/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">seldơm</Link>/ 
              
              <sup>&nbsp;⬤• (2x)</sup>
              
            </span>
              
            &nbsp;là một trạng từ chỉ tần suất, dùng để diễn tả một hành động hoặc sự việc xảy ra rất ít lần.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1"><strong>Seldom</strong> see: Hiếm khi thấy /ˈsɛldəm siː/</li>
        <li className="list-none margin-bottom-20">I <strong>seldom</strong> see her at school. (Tôi hiếm khi gặp cô ấy ở trường.)</li>

        <li value="2"><strong>Seldom</strong> go: Hiếm khi đi /ˈsɛldəm ɡəʊ/</li>
        <li className="list-none margin-bottom-20">He <strong>seldom</strong> goes to the cinema. (Anh ấy hiếm khi đi xem phim.)</li>

        <li value="3"><strong>Seldom</strong> eat: Hiếm khi ăn /ˈsɛldəm iːt/</li>
        <li className="list-none margin-bottom-20">She <strong>seldom</strong> eats spicy food. (Cô ấy hiếm khi ăn đồ ăn cay.)</li>

        <li value="4"><strong>Seldom</strong> read: Hiếm khi đọc /ˈsɛldəm riːd/</li>
        <li className="list-none margin-bottom-20">They <strong>seldom</strong> read newspapers. (Họ hiếm khi đọc báo.)</li>

        <li value="5"><strong>Seldom</strong> play: Hiếm khi chơi /ˈsɛldəm pleɪ/</li>
        <li className="list-none margin-bottom-20">We <strong>seldom</strong> play sports. (Chúng tôi hiếm khi chơi thể thao.)</li>

        <li value="6"><strong>Seldom</strong> have time: Hiếm khi có thời gian /ˈsɛldəm hæv taɪm/</li>
        <li className="list-none margin-bottom-20">I <strong>seldom</strong> have time to relax. (Tôi hiếm khi có thời gian để thư giãn.)</li>

        <li value="7"><strong>Seldom</strong> think about: Hiếm khi nghĩ về /ˈsɛldəm θɪŋk əˈbaʊt/</li>
        <li className="list-none margin-bottom-20">She <strong>seldom</strong> thinks about the past. (Cô ấy hiếm khi nghĩ về quá khứ.)</li>

        <li value="8"><strong>Seldom</strong> make mistakes: Hiếm khi mắc lỗi /ˈsɛldəm meɪk mɪˈsteɪks/</li>
        <li className="list-none margin-bottom-20">He <strong>seldom</strong> makes mistakes in his work. (Anh ấy hiếm khi mắc lỗi trong công việc.)</li>

        <li value="9"><strong>Seldom</strong> feel: Hiếm khi cảm thấy /ˈsɛldəm fiːl/</li>
        <li className="list-none margin-bottom-20">I <strong>seldom</strong> feel lonely. (Tôi hiếm khi cảm thấy cô đơn.)</li>

        <li value="10"><strong>Seldom</strong> come: Hiếm khi đến /ˈsɛldəm kʌm/</li>
        <li className="list-none margin-bottom-20">They <strong>seldom</strong> come to visit us. (Họ hiếm khi đến thăm chúng tôi.)</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Seldom</strong>" thường đứng trước động từ chính trong câu.</li>

          <li className="margin-bottom-20">Bạn có thể kết hợp "<strong>seldom</strong>" với nhiều trạng từ khác để tạo ra các cụm từ đa dạng hơn.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 15, 2024 · by 💎Gem ·</span>
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