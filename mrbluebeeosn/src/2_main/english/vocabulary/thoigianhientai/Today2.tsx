import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Today2(): React.JSX.Element {

  const postId = "Today2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#thoi-gian-hien-tai-terms"><mark className="highlight-tertiary-padding-4-8">Thời gian hiện tại</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">today
        <sup>
          <Link to="/vocabulary/today-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/today-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>today</strong>" (hôm nay) trong tiếng Anh nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <strong>Today&nbsp;</strong>
            
            <span className="highlight-255-padding-3-6">
              
              /təˈdeɪ/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">tơdāy</Link>/ 
              
              <sup>&nbsp;•⬤ (2x)</sup>
              
            </span>
              
            &nbsp;là một trạng cơ chỉ thời gian rất phổ biến, thường được dùng để chỉ thời điểm hiện tại.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">Today <strong>is</strong> /ɪz/</li>
        <li className="list-none">______ Monday.</li>
        <li className="list-none margin-bottom-20">Hôm nay là thứ Hai.</li>

        <li value="2">Today, <strong>I</strong> /aɪ/</li>
        <li className="list-none">______ am going to the park.</li>
        <li className="list-none margin-bottom-20">Hôm nay, tôi sẽ đi công viên.</li>

        <li value="3"><strong>As of</strong> today /æz əv/</li>
        <li className="list-none">______, we have sold 100 products.</li>
        <li className="list-none margin-bottom-20">Tính đến hôm nay, chúng tôi đã bán được 100 sản phẩm.</li>

        <li value="4"><strong>Even</strong> today /ˈiːvən/</li>
        <li className="list-none">______, many people believe in ghosts.</li>
        <li className="list-none margin-bottom-20">Ngay cả ngày nay, nhiều người vẫn tin vào ma.</li>

        <li value="5"><strong>Later</strong> today /ˈleɪtər/</li>
        <li className="list-none">I will call you ______.</li>
        <li className="list-none margin-bottom-20">Tôi sẽ gọi cho bạn vào cuối ngày hôm nay.</li>

        <li value="6"><strong>Earlier</strong> today /ˈɜː.li.ər/</li>
        <li className="list-none">I met him ______.</li>
        <li className="list-none margin-bottom-20">Tôi gặp anh ấy sớm hơn hôm nay.</li>

        <li value="7"><strong>From</strong> today <strong>onwards</strong> /frɒm ˈɒnwərdz/</li>
        <li className="list-none">______, I will start exercising.</li>
        <li className="list-none margin-bottom-20">Từ hôm nay trở đi, tôi sẽ bắt đầu tập thể dục.</li>

        <li value="8">Today <strong>is the day</strong> /ɪz ðə deɪ/</li>
        <li className="list-none">______ I get married.</li>
        <li className="list-none margin-bottom-20">Hôm nay là ngày tôi kết hôn.</li>

        <li value="9"><strong>Up to</strong> today /ʌp tuː/</li>
        <li className="list-none">______, we have completed 50% of the project.</li>
        <li className="list-none margin-bottom-20">Cho đến hôm nay, chúng tôi đã hoàn thành 50% dự án.</li>

        <li value="10">On this day /ɒn ðɪs deɪ/</li>
        <li className="list-none">______, many years ago, a great war began.</li>
        <li className="list-none margin-bottom-20">Vào ngày này, nhiều năm trước, một cuộc chiến tranh lớn đã bắt đầu.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Today</strong>" thường đứng ở đầu câu hoặc giữa câu.</li>

          <li className="margin-bottom-20">Ý nghĩa chính xác của cụm từ phụ thuộc vào ngữ cảnh sử dụng.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này sẽ giúp bạn hiểu rõ hơn về cách sử dụng từ "<strong>today</strong>" trong tiếng Anh! 🐝🐝</p>

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