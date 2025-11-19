import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Presently2(): React.JSX.Element {

  const postId = "Presently2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#thoi-gian-hien-tai-terms"><mark className="highlight-tertiary-padding-4-8">Thời gian hiện tại</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">presently
        <sup>
          <Link to="/vocabulary/presently-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/presently-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>presently</strong>" (hiện tại) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <strong>Presently&nbsp;</strong>
            
            <span className="highlight-255-padding-3-6">
              
              /ˈprezəntli/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">prese̛ntly</Link>/ 
              
              <sup>&nbsp;⬤•• (3x)</sup>
              
            </span>
              
            &nbsp;thường được dùng để chỉ một thời điểm xảy ra ngay bây giờ hoặc trong tương lai gần.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1"><strong>Presently</strong> engaged: Đang bận rộn /ˈprezntlɪ ɛnˈɡeɪdʒd/</li>
        <li className="list-none margin-bottom-20">The manager is <strong>presently</strong> engaged in a meeting. (Quản lý đang bận họp.)</li>

        <li value="2"><strong>Presently</strong> working: Đang làm việc /ˈprezntlɪ ˈwɜːkɪŋ/</li>
        <li className="list-none margin-bottom-20">The engineers are <strong>presently</strong> working on a new project. (Các kỹ sư đang làm việc trên một dự án mới.)</li>

        <li value="3"><strong>Presently</strong> available: Đang có sẵn /ˈprezntlɪ əˈveɪləbl/</li>
        <li className="list-none margin-bottom-20">The product is <strong>presently</strong> available in all our stores. (Sản phẩm hiện đang có sẵn tại tất cả các cửa hàng của chúng tôi.)</li>

        <li value="4"><strong>Presently</strong> under construction: Đang được xây dựng /ˈprezntlɪ ˈʌndər kənˈstrʌkʃn/</li>
        <li className="list-none margin-bottom-20">The new bridge is <strong>presently</strong> under construction. (Cây cầu mới đang được xây dựng.)</li>

        <li value="5"><strong>Presently</strong> living: Đang sống /ˈprezntlɪ ˈlɪvɪŋ/</li>
        <li className="list-none margin-bottom-20">She is <strong>presently</strong> living in London. (Cô ấy hiện đang sống ở London.)</li>

        <li value="6"><strong>Presently</strong> considering: Đang cân nhắc /ˈprezntlɪ kənˈsɪdərɪŋ/</li>
        <li className="list-none margin-bottom-20">We are <strong>presently</strong> considering different options. (Chúng tôi đang cân nhắc các lựa chọn khác nhau.)</li>

        <li value="7"><strong>Presently</strong> studying: Đang học /ˈprezntlɪ ˈstʌdiɪŋ/</li>
        <li className="list-none margin-bottom-20">He is <strong>presently</strong> studying for his exams. (Anh ấy đang ôn thi.)</li>

        <li value="8"><strong>Presently</strong> serving: Đang phục vụ /ˈprezntlɪ ˈsɜːvɪŋ/</li>
        <li className="list-none margin-bottom-20">The waiter is <strong>presently</strong> serving the customers. (Người phục vụ đang phục vụ khách hàng.)</li>

        <li value="9"><strong>Presently</strong> attending: Đang tham dự /ˈprezntlɪ əˈtɛndɪŋ/</li>
        <li className="list-none margin-bottom-20">She is <strong>presently</strong> attending a conference in Paris. (Cô ấy hiện đang tham dự một hội nghị ở Paris.)</li>

        <li value="10"><strong>Presently</strong> experiencing: Đang trải qua /ˈprezntlɪ ɪkˈspɪəriənsɪŋ/</li>
        <li className="list-none margin-bottom-20">The city is <strong>presently</strong> experiencing a heat wave. (Thành phố hiện đang trải qua một đợt nắng nóng.)</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh tính thời sự của một hành động, sự việc hoặc trạng thái. Chúng thường được sử dụng để mô tả những gì đang diễn ra tại thời điểm nói hoặc viết.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Presently</strong>" thường đứng trước động từ để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này có thể được thay thế bằng các từ đồng nghĩa như "<Link to="/vocabulary/currently-1">currently</Link>", "<Link to="/vocabulary/now-1">now</Link>", "at the moment" để tạo sự đa dạng trong văn phong.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 7, 2024 · by 💎Gem ·</span>
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