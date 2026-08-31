import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function MAYbe2(): React.JSX.Element {

  const postId = "MAYbe2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#khong-chac-chan-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: không chắc</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">MAYbe
        <sup>
          <Link to="/vocabulary/MAYbe-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/MAYbe-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>MAYbe</strong>" (có lẽ) trong tiếng Anh nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [MAYbe][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">MĀY bē</Link>] /ˈmeɪ.bi/ ⬤• (2x)
              
            </span>
              
            &nbsp;là một Trạng Cơ thường được dùng để diễn tả sự không chắc chắn, khả năng xảy ra một điều gì đó.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">let's MEET UP for COFfee MAYbe LAter.</li>
        <li className="list-none margin-bottom-20">Chúng ta có thể gặp nhau uống cà phê sau nhé.</li>

        <li value="2">i'm NOT SURE if i can MAKE it. MAYbe NOT.</li>
        <li className="list-none margin-bottom-20">Tôi không chắc liệu tôi có đến được không. Có lẽ là không.</li>

        <li value="3">you're RIGHT. MAYbe SO.</li>
        <li className="list-none margin-bottom-20">Bạn đúng rồi. Có lẽ vậy.</li>

        <li value="4">MAYbe if i STUDy HARder, i can PASS the eXAM.</li>
        <li className="list-none margin-bottom-20">Có lẽ nếu tôi học chăm chỉ hơn, tôi có thể vượt qua kỳ thi.</li>

        <li value="5">i DON'T KNOW what to DO. should i STAY or MAYbe GO?</li>
        <li className="list-none margin-bottom-20">Tôi không biết phải làm gì. Tôi nên ở lại hay có lẽ nên đi?</li>

        <li value="6">JUST MAYbe, he'll CHANGE his MIND.</li>
        <li className="list-none margin-bottom-20">Có lẽ chỉ là anh ấy sẽ thay đổi ý kiến.</li>

        <li value="7">MAYbe SOMEday i'll VISit jaPAN.</li>
        <li className="list-none margin-bottom-20">Có lẽ một ngày nào đó tôi sẽ đến Nhật Bản.</li>

        <li value="8">MAYbe it's because i'm TIred.</li>
        <li className="list-none margin-bottom-20">Có lẽ là vì tôi mệt mỏi.</li>

        <li value="9">i'm NOT SURE, MAYbe we should LEAVE NOW.</li>
        <li className="list-none margin-bottom-20">Tôi không chắc, có lẽ chúng ta nên đi bây giờ.</li>

        <li value="10">i THINK MAYbe she's upSET.</li>
        <li className="list-none margin-bottom-20">Tôi nghĩ có lẽ cô ấy đang buồn.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>MAYbe</strong>" thường đứng ở đầu câu hoặc trước hành động chính.</li>

          <li className="margin-bottom-20">Cùng với các từ khác, "<strong>MAYbe</strong>" tạo thành nhiều cụm từ khác nhau với ý nghĩa đa dạng.</li>

        </ul>

      </div>

      <p className="margin-top-50">Việc hiểu ngữ cảnh sẽ giúp bạn sử dụng các cụm từ này một cách chính xác. 🐝🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 5, 2024 · by 💎GEM ·</span>
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