import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function YES2(): React.JSX.Element {

  const postId = "YES2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-co"><mark className="highlight-tertiary-padding-4-8">ADverbs: có</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">YES
        <sup>
          <Link to="/vocabulary/YES-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/YES-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>YES</strong>" (vâng) khi nó đóng vai trò là một Trạng Cơ trong tiếng Anh nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [YES][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">YES</Link>] /jɛs/ ⬤ (1x)
              
            </span>
              
            &nbsp;thường được biết đến như một từ để trả lời đồng ý, nhưng khi kết hợp với các từ khác, nó có thể tạo ra nhiều sắc thái và ý nghĩa khác nhau.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">is it a BEAUtiful DAY? YES, inDEED.</li>
        <li className="list-none margin-bottom-20">"Hôm nay là một ngày đẹp trời phải không?" Đúng vậy, thật vậy.</li>

        <li value="2">do you LIKE APples? YES, and i LIKE baNANas TOO.</li>
        <li className="list-none margin-bottom-20">Bạn có thích táo không? Vâng, và tôi cũng thích chuối.</li>

        <li value="3">can i COME to the PARTy? YES, but i have to LEAVE EARly.</li>
        <li className="list-none margin-bottom-20">Bạn có thể đến bữa tiệc không? Vâng, nhưng tôi phải đi sớm.</li>

        <li value="4">can i BORrow your PEN? YES, of COURSE.</li>
        <li className="list-none margin-bottom-20">Tôi có thể mượn bút của bạn không? Vâng, tất nhiên rồi.</li>

        <li value="5">would you LIKE some HELP? YES, CERtainly.</li>
        <li className="list-none margin-bottom-20">Bạn có muốn tôi giúp không? Vâng, chắc chắn rồi.</li>

        <li value="6">would you LIKE anOTHer PIECE of CAKE? YES, PLEASE.</li>
        <li className="list-none margin-bottom-20">Bạn có muốn thêm một miếng bánh không? Vâng, xin vui lòng.</li>

        <li value="7">THAT'S what i MEAN. YES, exACTly.</li>
        <li className="list-none margin-bottom-20">Đó là ý của tôi. Đúng vậy, chính xác.</li>

        <li value="8">it's a BEAUtiful DAY, ISn't it? YES, inDEEDy.</li>
        <li className="list-none margin-bottom-20">Hôm nay là một ngày đẹp trời, phải không? Đúng vậy, đúng là vậy.</li>

        <li value="9">may i TAKE your ORder? YES, SIR.</li>
        <li className="list-none margin-bottom-20">Tôi có thể nhận đơn hàng của ngài không? Vâng, thưa ngài.</li>

        <li value="10">do you THINK we should GO to the PARTy? YES, i supPOSE so.</li>
        <li className="list-none margin-bottom-20">Bạn nghĩ chúng ta nên đi dự tiệc không? Vâng, tôi đoán vậy.</li>

      </ol>

      <p>** Việc hiểu ngữ cảnh sẽ giúp bạn sử dụng các cụm từ này một cách chính xác.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Trong nhiều trường hợp, "<strong>YES</strong>" có thể được coi như một phần tử trong một cụm từ hơn là một Trạng Cơ độc lập.</li>

          <li className="margin-bottom-20">Ý nghĩa của các cụm từ này có thể thay đổi tùy thuộc vào ngữ cảnh và giọng điệu.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những ví dụ trên sẽ giúp bạn hiểu rõ hơn về cách sử dụng từ "<strong>YES</strong>" trong tiếng Anh! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>December 28, 2024 · by 💎GEM ·</span>
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