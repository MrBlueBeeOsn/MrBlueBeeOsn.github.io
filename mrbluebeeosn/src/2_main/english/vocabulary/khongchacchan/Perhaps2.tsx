import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Perhaps2(): React.JSX.Element {

  const postId = "Perhaps2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#khong-chac-chan-terms"><mark className="highlight-tertiary-padding-4-8">Không chắc chắn</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">perhaps
        <sup>
          <Link to="/vocabulary/perhaps-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/perhaps-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>perhaps</strong>" (có lẽ) trong tiếng Anh nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <strong>Perhaps&nbsp;</strong>
            
            <span className="highlight-255-padding-3-6">
              
              /pəˈhæps/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">pe̛rhaps</Link>/ 
              
              <sup>&nbsp;•⬤ (2x)</sup>
              
            </span>
              
            &nbsp;thường được dùng để diễn tả sự không chắc chắn hoặc một khả năng xảy ra.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">Perhaps, <strong>however</strong> /ˈhaʊˈev.ər/</li>
        <li className="list-none">______, we should consider other options.</li>
        <li className="list-none margin-bottom-20">Có lẽ, tuy nhiên, chúng ta nên xem xét các lựa chọn khác.</li>

        <li value="2">Perhaps, <strong>on the other hand</strong> /ɒn ði ˈʌð.ər hænd/</li>
        <li className="list-none">______, she is just tired.</li>
        <li className="list-none margin-bottom-20">Có lẽ, mặt khác, cô ấy chỉ đơn giản là mệt mỏi.</li>

        <li value="3">Perhaps, <strong>it is possible that</strong> /ɪt ɪz ˈpɒs.ɪ.bəl ðæt/</li>
        <li className="list-none">______ he forgot.</li>
        <li className="list-none margin-bottom-20">Có lẽ, có thể là anh ấy đã quên.</li>

        <li value="4">Perhaps, <strong>it is true that</strong> /ɪt ɪz truː ðæt/</li>
        <li className="list-none">______ she is not interested.</li>
        <li className="list-none margin-bottom-20">Có lẽ, đúng là cô ấy không hứng thú.</li>

        <li value="5">Perhaps, <strong>if</strong> /ɪf/</li>
        <li className="list-none">______ you study harder, you will pass the exam.</li>
        <li className="list-none margin-bottom-20">Có lẽ, nếu bạn học chăm chỉ hơn, bạn sẽ vượt qua kỳ thi.</li>

        <li value="6">Perhaps, <strong>in that case</strong> /ɪn ðæt keɪs/</li>
        <li className="list-none">______, we should postpone the meeting.</li>
        <li className="list-none margin-bottom-20">Có lẽ, trong trường hợp đó, chúng ta nên hoãn cuộc họp.</li>

        <li value="7">Perhaps, <strong>instead of</strong> /ɪnˈsted ɒv/</li>
        <li className="list-none">______ going to the movies, we could stay home and watch a DVD.</li>
        <li className="list-none margin-bottom-20">Có lẽ, thay vì đi xem phim, chúng ta có thể ở nhà và xem DVD.</li>

        <li value="8">Perhaps, <strong>we should</strong> /wiː ʃʊd/</li>
        <li className="list-none">______ ask for help.</li>
        <li className="list-none margin-bottom-20">Có lẽ, chúng ta nên nhờ giúp đỡ.</li>

        <li value="9">Perhaps, <strong>I think</strong> /aɪ θɪŋk/</li>
        <li className="list-none">______ it's time to go home.</li>
        <li className="list-none margin-bottom-20">Có lẽ, tôi nghĩ đã đến lúc về nhà.</li>

        <li value="10">Perhaps, <strong>it seems that</strong> /ɪt siːmz ðæt/</li>
        <li className="list-none">______ he is angry.</li>
        <li className="list-none margin-bottom-20">Có lẽ, dường như anh ấy đang tức giận.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Perhaps</strong>" thường được đặt ở đầu câu để nhấn mạnh tính không chắc chắn.</li>

          <li className="margin-bottom-20">Ý nghĩa chính xác của cụm từ phụ thuộc vào ngữ cảnh sử dụng.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này sẽ giúp bạn hiểu rõ hơn về cách sử dụng từ "<strong>perhaps</strong>" trong tiếng Anh! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 14, 2024 · by 💎Gem ·</span>
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