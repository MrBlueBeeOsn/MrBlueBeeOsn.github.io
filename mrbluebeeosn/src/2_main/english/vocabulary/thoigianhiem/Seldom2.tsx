import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Seldom2(): React.JSX.Element {

  const postId = "Seldom2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#thoi-gian-hiem-terms"><mark className="highlight-tertiary-padding-4-8">Thời gian hiếm</mark></HashLink></h4>
      
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

        <li value="1">Seldom <strong>see</strong> /siː/</li>
        <li className="list-none">I ______ her at school.</li>
        <li className="list-none margin-bottom-20">Tôi hiếm khi gặp cô ấy ở trường.</li>

        <li value="2">Seldom <strong>goes</strong> /ɡəʊz/</li>
        <li className="list-none">He ______ to the cinema.</li>
        <li className="list-none margin-bottom-20">Anh ấy hiếm khi đi xem phim.</li>

        <li value="3">Seldom <strong>eats</strong> /iːts/</li>
        <li className="list-none">She ______ spicy food.</li>
        <li className="list-none margin-bottom-20">Cô ấy hiếm khi ăn đồ ăn cay.</li>

        <li value="4">Seldom <strong>read</strong> /riːd/</li>
        <li className="list-none">They ______ newspapers.</li>
        <li className="list-none margin-bottom-20">Họ hiếm khi đọc báo.</li>

        <li value="5">Seldom <strong>play</strong> /pleɪ/</li>
        <li className="list-none">We ______ sports.</li>
        <li className="list-none margin-bottom-20">Chúng tôi hiếm khi chơi thể thao.</li>

        <li value="6">Seldom <strong>have time</strong> /hæv taɪm/</li>
        <li className="list-none">I ______ to relax.</li>
        <li className="list-none margin-bottom-20">Tôi hiếm khi có thời gian để thư giãn.</li>

        <li value="7">Seldom <strong>thinks about</strong> /θɪŋks əˈbaʊt/</li>
        <li className="list-none">She ______ the past.</li>
        <li className="list-none margin-bottom-20">Cô ấy hiếm khi nghĩ về quá khứ.</li>

        <li value="8">Seldom <strong>makes mistakes</strong> /meɪks mɪˈsteɪks/</li>
        <li className="list-none">He ______ in his work.</li>
        <li className="list-none margin-bottom-20">Anh ấy hiếm khi mắc lỗi trong công việc.</li>

        <li value="9">Seldom <strong>feel</strong> /fiːl/</li>
        <li className="list-none">I ______ lonely.</li>
        <li className="list-none margin-bottom-20">Tôi hiếm khi cảm thấy cô đơn.</li>

        <li value="10">Seldom <strong>come</strong> /kʌm/</li>
        <li className="list-none">They ______ to visit us.</li>
        <li className="list-none margin-bottom-20">Họ hiếm khi đến thăm chúng tôi.</li>

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