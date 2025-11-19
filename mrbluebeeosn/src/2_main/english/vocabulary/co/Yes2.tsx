import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Yes2(): React.JSX.Element {

  const postId = "Yes2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#co-terms"><mark className="highlight-tertiary-padding-4-8">Có</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">yes
        <sup>
          <Link to="/vocabulary/yes-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/yes-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>yes</strong>" (vâng) khi nó đóng vai trò là một trạng từ trong tiếng Anh nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <strong>Yes&nbsp;</strong>
            
            <span className="highlight-255-padding-3-6">
              
              /jɛs/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">yes</Link>/ 
              
              <sup>&nbsp;⬤ (1x)</sup>
              
            </span>
              
            &nbsp;thường được biết đến như một từ để trả lời đồng ý, nhưng khi kết hợp với các từ khác, nó có thể tạo ra nhiều sắc thái và ý nghĩa khác nhau.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1"><strong>Yes</strong>, indeed: Đúng vậy, thật vậy /jes ɪnˈdiːd/</li>
        <li className="list-none margin-bottom-20">Is it a beautiful day. <strong>Yes</strong>, indeed. ("Hôm nay là một ngày đẹp trời phải không?" Đúng vậy, thật vậy.)</li>

        <li value="2"><strong>Yes</strong>, and: Vâng, và /jes ænd/</li>
        <li className="list-none margin-bottom-20">Do you like apples? <strong>Yes</strong>, and I like bananas too. (Bạn có thích táo không? Vâng, và tôi cũng thích chuối.)</li>

        <li value="3"><strong>Yes</strong>, but: Vâng, nhưng /jes bʌt/</li>
        <li className="list-none margin-bottom-20">Can you come to the party? <strong>Yes</strong>, but I have to leave early. (Bạn có thể đến bữa tiệc không? Vâng, nhưng tôi phải đi sớm.)</li>

        <li value="4"><strong>Yes</strong>, of course: Vâng, tất nhiên rồi /jes əv kɔːrs/</li>
        <li className="list-none margin-bottom-20">Can I borrow your pen? <strong>Yes</strong>, of course. (Tôi có thể mượn bút của bạn không? Vâng, tất nhiên rồi.)</li>

        <li value="5"><strong>Yes</strong>, certainly: Vâng, chắc chắn rồi /jes ˈsɜːrtnli/</li>
        <li className="list-none margin-bottom-20">Would you like some help? <strong>Yes</strong>, certainly. (Bạn có muốn tôi giúp không? Vâng, chắc chắn rồi.)</li>

        <li value="6"><strong>Yes</strong>, please: Vâng, xin vui lòng /jes pliːz/</li>
        <li className="list-none margin-bottom-20">Would you like another piece of cake? <strong>Yes</strong>, please. (Bạn có muốn thêm một miếng bánh không? Vâng, xin vui lòng.)</li>

        <li value="7"><strong>Yes</strong>, exactly: Đúng vậy, chính xác /jes ɪɡˈzæktli/</li>
        <li className="list-none margin-bottom-20">That's what I mean. <strong>Yes</strong>, exactly. (Đó là ý của tôi. Đúng vậy, chính xác.)</li>

        <li value="8"><strong>Yes</strong>, indeedy: Đúng vậy, đúng là vậy /jes ɪnˈdiːdi/</li>
        <li className="list-none margin-bottom-20">It's a beautiful day, isn't it? <strong>Yes</strong>, indeedy. (Hôm nay là một ngày đẹp trời, phải không? Đúng vậy, đúng là vậy.)</li>

        <li value="9"><strong>Yes</strong>, sir/ma'am: Vâng, thưa ngài/bà /jes sɜːr/ /jes mæm/</li>
        <li className="list-none margin-bottom-20">May I take your order? <strong>Yes</strong>, sir. (Tôi có thể nhận đơn hàng của ngài không? Vâng, thưa ngài.)</li>

        <li value="10"><strong>Yes</strong>, I suppose so: Vâng, tôi đoán vậy /jes aɪ səˈpoʊz səʊ/</li>
        <li className="list-none margin-bottom-20">Do you think we should go to the party? <strong>Yes</strong>, I suppose so. (Bạn nghĩ chúng ta nên đi dự tiệc không? Vâng, tôi đoán vậy.)</li>

      </ol>

      <p>** Việc hiểu ngữ cảnh sẽ giúp bạn sử dụng các cụm từ này một cách chính xác.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Trong nhiều trường hợp, "<strong>yes</strong>" có thể được coi như một phần tử trong một cụm từ hơn là một trạng từ độc lập.</li>

          <li className="margin-bottom-20">Ý nghĩa của các cụm từ này có thể thay đổi tùy thuộc vào ngữ cảnh và giọng điệu.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những ví dụ trên sẽ giúp bạn hiểu rõ hơn về cách sử dụng từ "<strong>yes</strong>" trong tiếng Anh! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>December 28, 2024 · by 💎Gem ·</span>
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