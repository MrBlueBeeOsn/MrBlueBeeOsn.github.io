import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function toMORrow2(): React.JSX.Element {

  const postId = "toMORrow2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#thoi-gian-tuong-lai-terms"><mark className="highlight-tertiary-padding-4-88">ADverbs: tương lai</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">toMORrow
        <sup>
          <Link to="/vocabulary/toMORrow-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/toMORrow-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>toMORrow</strong>" (ngày mai) trong tiếng Anh nhé.

</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [toMORrow][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">tơ MÖR rōw</Link>] /təˈmɔː.roʊ/ •⬤• (3x)
              
            </span>
              
            &nbsp;là một Trạng Cơ chỉ thời gian, thường được dùng để diễn tả một hành động hoặc sự việc sẽ xảy ra vào ngày mai.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">i have a MEETing toMORrow MORNing.</li>
        <li className="list-none margin-bottom-20">Tôi có một cuộc họp vào sáng mai.</li>

        <li value="2">let's GO to the BEACH toMORrow afterNOON.</li>
        <li className="list-none margin-bottom-20">Chúng ta hãy đi biển vào chiều mai.</li>

        <li value="3">i'm GOing to a PARty toMORrow EVEning.</li>
        <li className="list-none margin-bottom-20">Tôi sẽ đi dự tiệc vào tối mai.</li>

        <li value="4">it will be COLD toMORrow NIGHT.</li>
        <li className="list-none margin-bottom-20">Đêm mai sẽ lạnh.</li>

        <li value="5">i'll SEE you DAY AFter toMORrow.</li>
        <li className="list-none margin-bottom-20">Tôi sẽ gặp bạn vào ngày kia.</li>

        <li value="6">i have a DENtist apPOINTment the DAY AFter toMORrow.</li>
        <li className="list-none margin-bottom-20">Tôi có hẹn với nha sĩ vào ngày kia.</li>

        <li value="7">i'm going on vaCAtion toMORrow WEEK.</li>
        <li className="list-none margin-bottom-20">Tôi sẽ đi nghỉ mát vào tuần sau.</li>

        <li value="8">my BIRTHday is toMORrow MONTH.</li>
        <li className="list-none margin-bottom-20">Sinh nhật tôi vào tháng sau.</li>

        <li value="9">i'll be BUSy toMORrow and the NEXT DAY.</li>
        <li className="list-none margin-bottom-20">Tôi sẽ bận rộn vào ngày mai và ngày kia.</li>

        <li value="10">we can MEET toMORrow or the DAY AFter.</li>
        <li className="list-none margin-bottom-20">Chúng ta có thể gặp nhau vào ngày mai hoặc ngày kia.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>toMORrow</strong>" thường được dùng để chỉ một thời điểm gần trong tương lai.</li>

          <li className="margin-bottom-20">Bạn có thể kết hợp "<strong>toMORrow</strong>" với nhiều Trạng Cơ khác để tạo ra các cụm từ đa dạng hơn.</li>

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