import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Tomorrow2(): React.JSX.Element {

  const postId = "Tomorrow2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#thoi-gian-tuong-lai-terms"><mark className="highlight-tertiary-padding-4-8">Thời gian tương lai</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">tomorrow
        <sup>
          <Link to="/vocabulary/tomorrow-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/tomorrow-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>tomorrow</strong>" (ngày mai) trong tiếng Anh nhé.

</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <strong>Tomorrow&nbsp;</strong>
            
            <span className="highlight-255-padding-3-6">
              
              /təˈmɔː.roʊ/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">tơmörrōw</Link>/ 
              
              <sup>&nbsp;•⬤• (3x)</sup>
              
            </span>
              
            &nbsp;là một trạng từ chỉ thời gian, thường được dùng để diễn tả một hành động hoặc sự việc sẽ xảy ra vào ngày mai.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">Tomorrow <strong>morning</strong> /ˈmɔːrnɪŋ/</li>
        <li className="list-none">I have a meeting ______.</li>
        <li className="list-none margin-bottom-20">Tôi có một cuộc họp vào sáng mai.</li>

        <li value="2">Tomorrow <strong>afternoon</strong> /ˌɑːftərˈnuːn/</li>
        <li className="list-none">Let's go to the beach ______.</li>
        <li className="list-none margin-bottom-20">Chúng ta hãy đi biển vào chiều mai.</li>

        <li value="3">Tomorrow <strong>evening</strong> /ˈiːvnɪŋ/</li>
        <li className="list-none">I'm going to a party ______.</li>
        <li className="list-none margin-bottom-20">Tôi sẽ đi dự tiệc vào tối mai.</li>

        <li value="4">Tomorrow <strong>night</strong> /naɪt/</li>
        <li className="list-none">It will be cold ______.</li>
        <li className="list-none margin-bottom-20">Đêm mai sẽ lạnh.</li>

        <li value="5"><strong>Day after</strong> tomorrow /deɪ ˈɑːftər/</li>
        <li className="list-none">I'll see you ______.</li>
        <li className="list-none margin-bottom-20">Tôi sẽ gặp bạn vào ngày kia.</li>

        <li value="6"><strong>The day after</strong> tomorrow /ðə deɪ ˈɑːftər/</li>
        <li className="list-none">I have a dentist appointment ______.</li>
        <li className="list-none margin-bottom-20">Tôi có hẹn với nha sĩ vào ngày kia.</li>

        <li value="7">Tomorrow <strong>week</strong> /wiːk/</li>
        <li className="list-none">I'm going on vacation ______.</li>
        <li className="list-none margin-bottom-20">Tôi sẽ đi nghỉ mát vào tuần sau.</li>

        <li value="8">Tomorrow <strong>month</strong> /mʌnθ/</li>
        <li className="list-none">My birthday is ______.</li>
        <li className="list-none margin-bottom-20">Sinh nhật tôi vào tháng sau.</li>

        <li value="9">Tomorrow <strong>and the next day</strong> /ænd ðə nekst deɪ/</li>
        <li className="list-none">I'll be busy ______.</li>
        <li className="list-none margin-bottom-20">Tôi sẽ bận rộn vào ngày mai và ngày kia.</li>

        <li value="10">Tomorrow <strong>or the day after</strong> /ɔːr ðə deɪ ˈɑːftər/</li>
        <li className="list-none">We can meet ______.</li>
        <li className="list-none margin-bottom-20">Chúng ta có thể gặp nhau vào ngày mai hoặc ngày kia.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Tomorrow</strong>" thường được dùng để chỉ một thời điểm gần trong tương lai.</li>

          <li className="margin-bottom-20">Bạn có thể kết hợp "<strong>tomorrow</strong>" với nhiều trạng từ khác để tạo ra các cụm từ đa dạng hơn.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 4, 2024 · by 💎Gem ·</span>
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