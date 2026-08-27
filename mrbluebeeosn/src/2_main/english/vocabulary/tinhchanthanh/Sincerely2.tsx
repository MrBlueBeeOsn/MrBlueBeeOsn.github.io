import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function sinCEREly2(): React.JSX.Element {

  const postId = "sinCEREly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-chan-thanh-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: chân thành</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">sinCEREly
        <sup>
          <Link to="/vocabulary/sinCEREly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/sinCEREly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>sinCEREly</strong>" (một cách chân thành) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [sinCEREly][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">sin CĖRE ly</Link>] /sɪnˈsɪrlɪ/ •⬤• (3x)
              
            </span>
              
            &nbsp;thường được sử dụng để nhấn mạnh sự chân thành, thật lòng trong một hành động, lời nói hoặc cảm xúc.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">i sinCEREly aPOLogize for my misTAKE.</li>
        <li className="list-none margin-bottom-20">Tôi xin lỗi chân thành vì lỗi lầm của mình.</li>

        <li value="2"> sinCEREly apPREciate your HELP.</li>
        <li className="list-none margin-bottom-20">Tôi rất trân trọng sự giúp đỡ của bạn.</li>

        <li value="3">i sinCEREly HOPE that EVERything GOES WELL for you.</li>
        <li className="list-none margin-bottom-20">Tôi thật lòng hy vọng mọi việc sẽ diễn ra tốt đẹp với bạn.</li>

        <li value="4">sinCEREly YOURS.</li>
        <li className="list-none margin-bottom-20">Thân ái.</li>

        <li value="5">i sinCEREly beLIEVE in the POWer of LOVE.</li>
        <li className="list-none margin-bottom-20">Tôi thật lòng tin vào sức mạnh của tình yêu.</li>

        <li value="6">i sinCEREly reGRET NOT BEing ABle to atTEND your WEDding.</li>
        <li className="list-none margin-bottom-20">Tôi thật lòng hối hận vì không thể tham dự đám cưới của bạn.</li>

        <li value="7">i sinCEREly THANK you for your supPORT.</li>
        <li className="list-none margin-bottom-20">Tôi muốn chân thành cảm ơn bạn vì sự ủng hộ của bạn.</li>

        <li value="8">i sinCEREly WISH you all the BEST in your NEW JOB.</li>
        <li className="list-none margin-bottom-20">Tôi chúc bạn thật lòng mọi điều tốt đẹp nhất trong công việc mới.</li>

        <li value="9">sinCEREly YOURS, FAITHfully.</li>
        <li className="list-none margin-bottom-20">Trân trọng, một cách trung thành.</li>

        <li value="10">sinCEREly YOURS, with LOVE.</li>
        <li className="list-none margin-bottom-20">Trân trọng, với tình yêu thương</li>

      </ol>

      <p>** Các cụm từ trên đều được sử dụng để nhấn mạnh sự chân thành, thật lòng trong giao tiếp. Chúng thường được sử dụng trong các tình huống trang trọng hoặc khi muốn thể hiện sự tôn trọng và quan tâm đến người khác.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>sinCEREly</strong>" thường được đặt ở đầu hoặc cuối câu.</li>

          <li className="margin-bottom-20">Từ này thường được sử dụng trong văn viết trang trọng hơn là văn nói hàng ngày.</li>

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