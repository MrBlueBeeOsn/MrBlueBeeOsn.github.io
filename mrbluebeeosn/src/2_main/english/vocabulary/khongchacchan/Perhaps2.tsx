import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function perHAPS2(): React.JSX.Element {

  const postId = "perHAPS2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#khong-chac-chan-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: không chắc</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">perHAPS
        <sup>
          <Link to="/vocabulary/perHAPS-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/perHAPS-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>perHAPS</strong>" (có lẽ) trong tiếng Anh nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [perHAPS][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">pe̛r HAPS</Link>] /pəˈhæps/ •⬤ (2x)
              
            </span>
              
            &nbsp;thường được dùng để diễn tả sự không chắc chắn hoặc một khả năng xảy ra.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">perHAPS, howEVer, we should conSIDer OTHer OPtions.</li>
        <li className="list-none margin-bottom-20">Có lẽ, tuy nhiên, chúng ta nên xem xét các lựa chọn khác.</li>

        <li value="2">perHAPS, on the OTHer HAND, she is JUST TIred.</li>
        <li className="list-none margin-bottom-20">Có lẽ, mặt khác, cô ấy chỉ đơn giản là mệt mỏi.</li>

        <li value="3">perHAPS, it is POSsible that he forGOT.</li>
        <li className="list-none margin-bottom-20">Có lẽ, có thể là anh ấy đã quên.</li>

        <li value="4">perHAPS, it is TRUE that she is NOT INTERested.</li>
        <li className="list-none margin-bottom-20">Có lẽ, đúng là cô ấy không hứng thú.</li>

        <li value="5">perHAPS, if you STUDy HARder, you will PASS the eXAM.</li>
        <li className="list-none margin-bottom-20">Có lẽ, nếu bạn học chăm chỉ hơn, bạn sẽ vượt qua kỳ thi.</li>

        <li value="6">perHAPS, in THAT CASE, we should postPONE the MEETing.</li>
        <li className="list-none margin-bottom-20">Có lẽ, trong trường hợp đó, chúng ta nên hoãn cuộc họp.</li>

        <li value="7">perHAPS, inSTEAD of GOing to the MOVies, we could STAY HOME and WATCH a DVD.</li>
        <li className="list-none margin-bottom-20">Có lẽ, thay vì đi xem phim, chúng ta có thể ở nhà và xem DVD.</li>

        <li value="8">perHAPS, we should ASK for HELP.</li>
        <li className="list-none margin-bottom-20">Có lẽ, chúng ta nên nhờ giúp đỡ.</li>

        <li value="9">perHAPS, I THINK it's TIME to GO HOME.</li>
        <li className="list-none margin-bottom-20">Có lẽ, tôi nghĩ đã đến lúc về nhà.</li>

        <li value="10">perHAPS, it SEEMS that he is ANGry.</li>
        <li className="list-none margin-bottom-20">Có lẽ, dường như anh ấy đang tức giận.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>perHAPS</strong>" thường được đặt ở đầu câu để nhấn mạnh tính không chắc chắn.</li>

          <li className="margin-bottom-20">Ý nghĩa chính xác của cụm từ phụ thuộc vào ngữ cảnh sử dụng.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này sẽ giúp bạn hiểu rõ hơn về cách sử dụng từ "<strong>perHAPS</strong>" trong tiếng Anh! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 14, 2024 · by 💎GEM ·</span>
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