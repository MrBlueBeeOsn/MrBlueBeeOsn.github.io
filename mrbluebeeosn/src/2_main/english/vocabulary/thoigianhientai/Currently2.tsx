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

        <li value="1"><strong>Currently</strong> working: Đang làm việc /ˈkʌrəntli ˈwɜːkɪŋ/</li>
        <li className="list-none margin-bottom-20">I am <strong>currently</strong> working on a new project. (Tôi đang làm việc trên một dự án mới.)</li>

        <li value="2"><strong>Currently</strong> studying: Đang học /ˈkʌrəntli ˈstʌdiɪŋ/</li>
        <li className="list-none margin-bottom-20">She is <strong>currently</strong> studying for her exams. (Cô ấy đang ôn thi.)</li>

        <li value="3"><strong>Currently</strong> living: Đang sống /ˈkʌrəntli ˈlɪvɪŋ/</li>
        <li className="list-none margin-bottom-20">They are <strong>currently</strong> living in Saigon. (Họ đang sống ở Sài Gòn.)</li>

        <li value="4"><strong>Currently</strong> unavailable: Hiện không có mặt /ˈkʌrəntli ʌnəˈveɪləbl/</li>
        <li className="list-none margin-bottom-20">The manager is <strong>currently</strong> unavailable. (Quản lý hiện không có mặt.)</li>

        <li value="5"><strong>Currently</strong> under construction: Đang được xây dựng /ˈkʌrəntli ˈʌndər kənˈstrʌkʃn/</li>
        <li className="list-none margin-bottom-20">The new building is <strong>currently</strong> under construction. (Tòa nhà mới đang được xây dựng.)</li>

        <li value="6"><strong>Currently</strong> being reviewed: Đang được xem xét /ˈkʌrəntli biːɪŋ rɪˈvjuːd/</li>
        <li className="list-none margin-bottom-20">Your application is <strong>currently</strong> being reviewed. (Đơn đăng ký của bạn đang được xem xét.)</li>

        <li value="7"><strong>Currently</strong> in effect: Đang có hiệu lực /ˈkʌrəntli ɪn əˈfɛkt/</li>
        <li className="list-none margin-bottom-20">This rule is <strong>currently</strong> in effect. (Quy tắc này hiện đang có hiệu lực.)</li>

        <li value="8"><strong>Currently</strong> being developed: Đang được phát triển /ˈkʌrəntli biːɪŋ dɪˈvɛləpt/</li>
        <li className="list-none margin-bottom-20">A new vaccine is <strong>currently</strong> being developed. (Một loại vắc xin mới đang được phát triển.)</li>

        <li value="9"><strong>Currently</strong> trending: Đang thịnh hành /ˈkʌrəntli ˈtrɛndɪŋ/</li>
        <li className="list-none margin-bottom-20">This song is <strong>currently</strong> trending on TikTok. (Bài hát này đang rất hot trên TikTok.)</li>

        <li value="10"><strong>Currently</strong> available: Hiện có sẵn /ˈkʌrəntli əˈveɪləbl/</li>
        <li className="list-none margin-bottom-20">This product is <strong>currently</strong> available in all stores. (Sản phẩm này hiện có sẵn ở tất cả các cửa hàng.)</li>

      </ol>

      <p>** Các cụm từ trên đều được sử dụng để nhấn mạnh tính thời sự của một hành động, trạng thái hoặc tình huống. Chúng giúp chúng ta hiểu rõ hơn về những gì đang xảy ra tại thời điểm nói.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Currently</strong>" thường được đặt ở đầu câu hoặc trước động từ để bổ nghĩa.</li>

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