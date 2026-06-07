import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Currently2(): React.JSX.Element {

  const postId = "Currently2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#thoi-gian-hien-tai-terms"><mark className="highlight-tertiary-padding-4-8">Thời gian hiện tại</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">currently
        <sup>
          <Link to="/vocabulary/currently-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/currently-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>currently</strong>" (hiện tại) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <strong>Currently&nbsp;</strong>
            
            <span className="highlight-255-padding-3-6">
              
              /ˈkʌrəntli/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">cûrre̛ntly</Link>/ 
              
              <sup>&nbsp;⬤•• (3x)</sup>
              
            </span>
              
            &nbsp;thường được sử dụng để chỉ một hành động, trạng thái hoặc tình huống đang diễn ra tại thời điểm nói.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">Currently <strong>working</strong> /ˈwɜːkɪŋ/</li>
        <li className="list-none">I am ______ on a new project.</li>
        <li className="list-none margin-bottom-20">Tôi đang làm việc trên một dự án mới.</li>

        <li value="2">Currently <strong>studying</strong> /ˈstʌdiɪŋ/</li>
        <li className="list-none">She is ______ for her exams.</li>
        <li className="list-none margin-bottom-20">Cô ấy đang ôn thi.</li>

        <li value="3">Currently <strong>living</strong> /ˈlɪvɪŋ/</li>
        <li className="list-none">They are ______ in Saigon.</li>
        <li className="list-none margin-bottom-20">Họ đang sống ở Sài Gòn.</li>

        <li value="4">Currently <strong>unavailable</strong> /ʌnəˈveɪləbl/</li>
        <li className="list-none">The manager is ______.</li>
        <li className="list-none margin-bottom-20">Quản lý hiện không có mặt.</li>

        <li value="5">Currently <strong>under construction</strong> /ˈʌndər kənˈstrʌkʃn/</li>
        <li className="list-none">The new building is ______.</li>
        <li className="list-none margin-bottom-20">Tòa nhà mới đang được xây dựng.</li>

        <li value="6">Currently <strong>being reviewed</strong> /biːɪŋ rɪˈvjuːd/</li>
        <li className="list-none">Your application is ______.</li>
        <li className="list-none margin-bottom-20">Đơn đăng ký của bạn đang được xem xét.</li>

        <li value="7">Currently <strong>in effect</strong> /ɪn əˈfɛkt/</li>
        <li className="list-none">This rule is ______.</li>
        <li className="list-none margin-bottom-20">Quy tắc này hiện đang có hiệu lực.</li>

        <li value="8">Currently <strong>being developed</strong> /biːɪŋ dɪˈvɛləpt/</li>
        <li className="list-none">A new vaccine is ______.</li>
        <li className="list-none margin-bottom-20">Một loại vắc xin mới đang được phát triển.</li>

        <li value="9">Currently <strong>trending</strong> /ˈtrɛndɪŋ/</li>
        <li className="list-none">This song is ______ on TikTok.</li>
        <li className="list-none margin-bottom-20">Bài hát này đang rất hot trên TikTok.</li>

        <li value="10">Currently <strong>available</strong> /əˈveɪləbl/</li>
        <li className="list-none">This product is ______ in all stores.</li>
        <li className="list-none margin-bottom-20">Sản phẩm này hiện có sẵn ở tất cả các cửa hàng.</li>

      </ol>

      <p>** Các cụm từ trên đều được sử dụng để nhấn mạnh tính thời sự của một hành động, trạng thái hoặc tình huống. Chúng giúp chúng ta hiểu rõ hơn về những gì đang xảy ra tại thời điểm nói.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Currently</strong>" thường được đặt ở đầu câu hoặc trước động cơ để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này thường được sử dụng trong văn nói và văn viết để cung cấp thông tin cập nhật.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 5, 2024 · by 💎Gem ·</span>
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