import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function HONestly2(): React.JSX.Element {

  const postId = "HONestly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-chan-thanh"><mark className="highlight-tertiary-padding-4-8">ADverbs: chân thành</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">HONestly
        <sup>
          <Link to="/vocabulary/HONestly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/HONestly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>HONestly</strong>" (một cách thành thật) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [HONestly][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">HON ėst ly</Link>] /ˈɒnɪstli/ ⬤•• (3x)
              
            </span>
              
            &nbsp;trong tiếng Anh có nghĩa là "một cách thành thật", thường được sử dụng để nhấn mạnh rằng thông tin được cung cấp là đúng sự thật và không có sự giả dối nào.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">HONestly SPEAKing, i DON'T LIKE that MOVie.</li>
        <li className="list-none margin-bottom-20">Nói thật ra, tôi không thích bộ phim đó.</li>

        <li value="2">i HONestly beLIEVE that he is INnocent.</li>
        <li className="list-none margin-bottom-20">Tôi thật sự tin rằng anh ấy vô tội.</li>

        <li value="3">i HONestly THINK we should reconSIDer our PLANS.</li>
        <li className="list-none margin-bottom-20">Tôi thật sự nghĩ rằng chúng ta nên xem xét lại kế hoạch của mình.</li>

        <li value="4">i HONestly adMIT that i MADE a misTAKE.</li>
        <li className="list-none margin-bottom-20">Tôi thành thật thừa nhận rằng tôi đã mắc sai lầm.</li>

        <li value="5">HONestly SPEAKing, HOW to SOLVE this PROBlem?</li>
        <li className="list-none margin-bottom-20">Nói thật ra, tôi không biết làm thế nào để giải quyết vấn đề này.</li>

        <li value="6">HONestly, i'm surPRISED that you SAID that.</li>
        <li className="list-none margin-bottom-20">Thật sự, tôi ngạc nhiên khi bạn nói như vậy.</li>

        <li value="7">HONestly, i DON'T CARE WHAT he THINKS.</li>
        <li className="list-none margin-bottom-20">Thành thật mà nói, tôi không quan tâm anh ấy nghĩ gì.</li>

        <li value="8">HONestly, i'm disapPOINTed with the reSULTS.</li>
        <li className="list-none margin-bottom-20">Thành thật mà nói, tôi thất vọng với kết quả.</li>

        <li value="9">HONestly, i'm SCARED of the DARK.</li>
        <li className="list-none margin-bottom-20">Thành thật mà nói, tôi sợ bóng tối.</li>

        <li value="10">HONestly, i'm HAPpy that you're HERE.</li>
        <li className="list-none margin-bottom-20">Thành thật mà nói, tôi rất vui khi bạn ở đây.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh sự chân thật và thẳng thắn trong cách diễn đạt. Chúng thường được sử dụng để tạo ra sự tin tưởng và thể hiện quan điểm cá nhân một cách trung thực.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>HONestly</strong>" thường được đặt ở đầu câu để nhấn mạnh ý nghĩa.</li>

          <li className="margin-bottom-20">Từ này có thể được sử dụng trong nhiều tình huống khác nhau, từ cuộc trò chuyện hàng ngày đến các bài viết trang trọng.</li>

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