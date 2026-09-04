import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Usually2(): React.JSX.Element {

  const postId = "Usually2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-lap-lai"><mark className="highlight-tertiary-padding-4-88">ADverbs: lặp lại</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">Usually
        <sup>
          <Link to="/vocabulary/Usually-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/Usually-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>Usually</strong>" (thường xuyên) và các cụm từ thường đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [Usually][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">Ū su a̛l ly</Link>] /ˈjuːʒuəli/ ⬤••• (4x)
              
            </span>
              
            &nbsp;trong tiếng Anh có nghĩa là "thường xuyên", "thông thường". Từ này được dùng để chỉ những việc xảy ra một cách đều đặn hoặc theo thói quen.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">she Usually DOES her HOMEwork <strong>af</strong>ter DINner.</li>
        <li className="list-none margin-bottom-20">Cô ấy thường làm bài tập về nhà sau bữa tối.</li>

        <li value="2">he Usually GOES to BED at 10 P.M.</li>
        <li className="list-none margin-bottom-20">Anh ấy thường đi ngủ lúc 10 giờ tối.</li>

        <li value="3">it Usually RAINS in the WINter.</li>
        <li className="list-none margin-bottom-20">Mùa đông thường mưa.</li>

        <li value="4">it Usually TAKES me an HOUR to GET to WORK.</li>
        <li className="list-none margin-bottom-20">Tôi thường mất một giờ để đi làm.</li>

        <li value="5">she Usually FEELS HAPpy <strong>af</strong>ter EXercising.</li>
        <li className="list-none margin-bottom-20">Cô ấy thường cảm thấy vui vẻ sau khi tập thể dục.</li>

        <li value="6">he Usually LOOKS TIred in the MORNing.</li>
        <li className="list-none margin-bottom-20">Anh ấy thường trông mệt mỏi vào buổi sáng.</li>

        <li value="7">she Usually EATS FRUITS for BREAKfast.</li>
        <li className="list-none margin-bottom-20">Cô ấy thường ăn trái cây vào bữa sáng.</li>

        <li value="8">he Usually LIVES in a SMALL aPARTment.</li>
        <li className="list-none margin-bottom-20">Anh ấy thường sống trong một căn hộ nhỏ.</li>

        <li value="9">she Usually WORKS from HOME on FRIdays.</li>
        <li className="list-none margin-bottom-20">Cô ấy thường làm việc tại nhà vào thứ Sáu.</li>

        <li value="10">he Usually PLAYS BASketball with his FRIENDS on WEEKends.</li>
        <li className="list-none margin-bottom-20">Anh ấy thường chơi bóng rổ với bạn bè vào cuối tuần.</li>

      </ol>

      <p>** Các cụm từ trên đều được sử dụng để diễn tả những hành động, tình trạng hoặc sự việc xảy ra một cách thường xuyên, có tính chất lặp đi lặp lại trong cuộc sống hàng ngày. Chúng giúp chúng ta hiểu rõ hơn về thói quen, lịch trình và cách sống của một người hoặc một sự vật nào đó.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Usually</strong>" thường đứng ở đầu câu hoặc trước hành động để nhấn mạnh tính thường xuyên của một hành động.</li>

          <li className="margin-bottom-20">Từ này có thể được thay thế bằng các từ đồng nghĩa như: <Link to="/vocabulary/OFten-1">OFten</Link>, GENERally, COMmonly.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 4, 2024 · by 💎GEM ·</span>
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