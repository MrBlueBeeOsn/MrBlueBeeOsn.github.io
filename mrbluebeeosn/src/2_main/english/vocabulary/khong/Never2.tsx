import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Never2(): React.JSX.Element {

  const postId = "Never2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#khong-terms"><mark className="highlight-tertiary-padding-4-8">Không</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">never
        <sup>
          <Link to="/vocabulary/never-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/never-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>never</strong>" (không bao giờ) trong tiếng Anh nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <strong>Never&nbsp;</strong>
            
            <span className="highlight-255-padding-3-6">
              
              /ˈnevər/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">neve̛r</Link>/ 
              
              <sup>&nbsp;⬤• (2x)</sup>
              
            </span>
              
            &nbsp;là một trạng từ chỉ tần suất, dùng để diễn tả một hành động hoặc sự việc không xảy ra bao giờ cả.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">Never <strong>before</strong> /bɪˈfɔːr/</li>
        <li className="list-none">I have ______ seen such a beautiful sunset.</li>
        <li className="list-none margin-bottom-20">Tôi chưa bao giờ thấy một cảnh hoàng hôn đẹp như vậy.</li>

        <li value="2">Never <strong>again</strong> /əˈɡen/</li>
        <li className="list-none">I will ______ make that mistake.</li>
        <li className="list-none margin-bottom-20">Tôi sẽ không bao giờ lặp lại sai lầm đó nữa.</li>

        <li value="3">Never <strong>mind</strong> /maɪnd/</li>
        <li className="list-none">______, it's not important.</li>
        <li className="list-none margin-bottom-20">Thôi đi, không quan trọng đâu.</li>

        <li value="4">Never <strong>seen</strong> /siːn/</li>
        <li className="list-none">I have ______ such a big dog.</li>
        <li className="list-none margin-bottom-20">Tôi chưa bao giờ thấy con chó nào to như vậy.</li>

        <li value="5">Never <strong>heard of</strong> /hɜːrd ɒv/</li>
        <li className="list-none">I have ______ that band.</li>
        <li className="list-none margin-bottom-20">Tôi chưa bao giờ nghe nói về ban nhạc đó.</li>

        <li value="6">Never <strong>forget</strong> /fərˈɡet/</li>
        <li className="list-none">I will ______ your kindness.</li>
        <li className="list-none margin-bottom-20">Tôi sẽ không bao giờ quên lòng tốt của bạn.</li>

        <li value="7">Never <strong>too late</strong> /tuː leɪt/</li>
        <li className="list-none">It's ______ to learn something new.</li>
        <li className="list-none margin-bottom-20">Không bao giờ là quá muộn để học điều mới.</li>

        <li value="8">Never <strong>say</strong> never /seɪ ˈnevər/</li>
        <li className="list-none">______, anything is possible.</li>
        <li className="list-none margin-bottom-20">Đừng nói không bao giờ, mọi thứ đều có thể xảy ra.</li>

        <li value="9">Never <strong>in my life</strong> /ɪn maɪ laɪf/</li>
        <li className="list-none">I have ______ seen such a beautiful flower.</li>
        <li className="list-none margin-bottom-20">Tôi chưa bao giờ trong đời thấy một bông hoa đẹp như vậy.</li>

        <li value="10">Never <strong>give up</strong> /ɡɪv ʌp/</li>
        <li className="list-none">______ on your dreams.</li>
        <li className="list-none margin-bottom-20">Đừng bao giờ từ bỏ ước mơ của bạn.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Never</strong>" thường đứng ở đầu câu hoặc trước động từ chính.</li>

          <li className="margin-bottom-20">Bạn có thể kết hợp "<strong>never</strong>" với nhiều trạng từ khác để tạo ra các cụm từ đa dạng hơn.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 12, 2024 · by 💎Gem ·</span>
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