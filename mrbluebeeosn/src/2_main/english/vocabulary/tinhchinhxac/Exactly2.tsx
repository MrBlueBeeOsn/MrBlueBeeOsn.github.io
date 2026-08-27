import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function exACTly2(): React.JSX.Element {

  const postId = "exACTly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-chinh-xac-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: chính xác</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">exACTly
        <sup>
          <Link to="/vocabulary/exACTly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/exACTly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>exACTly</strong>" (chính xác) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">

            <span className="highlight-255-padding-3-6">

              [exACTly][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">ėx ACT ly</Link>] /ɪɡˈzæktli/ •⬤• (3x)
              
            </span>
              
            &nbsp;trong tiếng Anh có nghĩa là "chính xác", "đúng như vậy", thường được dùng để nhấn mạnh sự chính xác, cụ thể hoặc sự đồng tình hoàn toàn với một ý kiến nào đó.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">THAT'S exACTly RIGHT! you've HIT the NAIL on the HEAD.</li>
        <li className="list-none margin-bottom-20">Đúng chính xác rồi! Bạn đã nói trúng phóc.</li>

        <li value="2">YES, exACTly what i MEAN. it's unFAIR.</li>
        <li className="list-none margin-bottom-20">Đúng vậy, đó chính là điều tôi muốn nói. Nó thật bất công.</li>

        <li value="3">my NEW PHONE is exACTly the SAME as my OLD ONE.</li>
        <li className="list-none margin-bottom-20">Điện thoại mới của tôi hoàn toàn giống với cái cũ.</li>

        <li value="4">EVERything WENT exACTly as PLANNED for the PARty.</li>
        <li className="list-none margin-bottom-20">Mọi thứ diễn ra đúng như kế hoạch cho bữa tiệc.</li>

        <li value="5">i'm NOT exACTly SURE what he MEANT by THAT.</li>
        <li className="list-none margin-bottom-20">Tôi không thực sự chắc chắn về ý của anh ấy.</li>

        <li value="6">exACTly HOW MANY PEOple atTENDed the CONFERence?</li>
        <li className="list-none margin-bottom-20">Chính xác có bao nhiêu người tham dự hội nghị?</li>

        <li value="7">can you TELL me exACTly WHERE the LIbrary IS?</li>
        <li className="list-none margin-bottom-20">Bạn có thể cho tôi biết thư viện ở chính xác đâu không?</li>

        <li value="8">exACTly WHEN does the TRAIN LEAVE?</li>
        <li className="list-none margin-bottom-20">Tàu khởi hành chính xác lúc mấy giờ?</li>

        <li value="9">her DRESS is exACTly the SAME as MINE.</li>
        <li className="list-none margin-bottom-20">Váy của cô ấy hoàn toàn giống với váy của tôi.</li>

        <li value="10">this BOOK is exACTly what I NEEDed for my REsearch.</li>
        <li className="list-none margin-bottom-20">Cuốn sách này đúng là điều tôi cần cho bài nghiên cứu của mình.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh sự chính xác, cụ thể và hoàn toàn trùng khớp. Chúng thường được sử dụng để khẳng định một ý kiến, một thông tin hoặc một sự việc nào đó.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>exACTly</strong>" thường được đặt ở đầu hoặc giữa câu để nhấn mạnh ý nghĩa.</li>

          <li className="margin-bottom-20">Từ này có thể được sử dụng trong nhiều ngữ cảnh khác nhau, từ cuộc trò chuyện hàng ngày đến các bài viết học thuật.</li>

        </ul>
      
      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

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