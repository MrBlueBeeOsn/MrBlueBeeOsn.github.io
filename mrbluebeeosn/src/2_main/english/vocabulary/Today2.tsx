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
              
            &nbsp;là một trạng từ chỉ thời gian rất phổ biến, thường được dùng để chỉ thời điểm hiện tại.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1"><strong>Today</strong> is: Hôm nay là /təˈdeɪ ɪz/</li>
        <li className="list-none margin-bottom-20"><strong>Today</strong> is Monday. (Hôm nay là thứ Hai.)</li>

        <li value="2"><strong>Today</strong>, I: Hôm nay, tôi /təˈdeɪ, aɪ/</li>
        <li className="list-none margin-bottom-20"><strong>Today</strong>, I am going to the park. (Hôm nay, tôi sẽ đi công viên.)</li>

        <li value="3">As of <strong>today</strong>: Tính đến hôm nay /æz əv təˈdeɪ/</li>
        <li className="list-none margin-bottom-20">As of <strong>today</strong>, we have sold 100 products. (Tính đến hôm nay, chúng tôi đã bán được 100 sản phẩm.)</li>

        <li value="4">Even <strong>today</strong>: Ngay cả ngày nay /ˈiːvən təˈdeɪ/</li>
        <li className="list-none margin-bottom-20">Even <strong>today</strong>, many people believe in ghosts. (Ngay cả ngày nay, nhiều người vẫn tin vào ma.)</li>

        <li value="5">Later <strong>today</strong>: Vào cuối ngày hôm nay /ˈleɪtər təˈdeɪ/</li>
        <li className="list-none margin-bottom-20">I will call you later <strong>today</strong>. (Tôi sẽ gọi cho bạn vào cuối ngày hôm nay.)</li>

        <li value="6">Earlier <strong>today</strong>: Sớm hơn hôm nay /ˈɜː.li.ər təˈdeɪ/</li>
        <li className="list-none margin-bottom-20">I met him earlier <strong>today</strong>. (Tôi gặp anh ấy sớm hơn hôm nay.)</li>

        <li value="7">From <strong>today</strong> onwards: Từ hôm nay trở đi /frɒm təˈdeɪ ˈɒnwərdz/</li>
        <li className="list-none margin-bottom-20">From <strong>today</strong> onwards, I will start exercising. (Từ hôm nay trở đi, tôi sẽ bắt đầu tập thể dục.)</li>

        <li value="8"><strong>Today</strong> is the day: Hôm nay là ngày quan trọng /təˈdeɪ ɪz ðə deɪ/</li>
        <li className="list-none margin-bottom-20"><strong>Today</strong> is the day I get married. (Hôm nay là ngày tôi kết hôn.)</li>

        <li value="9">Up to <strong>today</strong>: Cho đến hôm nay /ʌp tuː təˈdeɪ/</li>
        <li className="list-none margin-bottom-20">Up to <strong>today</strong>, we have completed 50% of the project. (Cho đến hôm nay, chúng tôi đã hoàn thành 50% dự án.)</li>

        <li value="10">On this day: Vào ngày này /ɒn ðɪs deɪ/</li>
        <li className="list-none margin-bottom-20">On this day, many years ago, a great war began. (Vào ngày này, nhiều năm trước, một cuộc chiến tranh lớn đã bắt đầu.)</li>

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