import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Extremely2(): React.JSX.Element {

  const postId = "Extremely2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#muc-do-cao-terms"><mark className="highlight-tertiary-padding-4-8">Mức độ cao</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">extremely
        <sup>
          <Link to="/vocabulary/extremely-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/extremely-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>extremely</strong>" (cực kỳ) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <strong>Extremely&nbsp;</strong>
            
            <span className="highlight-255-padding-3-6">
              
              /ɪkˈstriːmli/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">ėxtrēmely</Link>/ 
              
              <sup>&nbsp;•⬤• (3x)</sup>
              
            </span>
              
            &nbsp;là một trạng từ dùng để nhấn mạnh mức độ cao nhất của một tính từ hoặc trạng từ. Nó thường được sử dụng để diễn tả cảm xúc, tình huống hoặc sự vật vượt quá mức bình thường.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">Extremely <strong>happy</strong> /ˈhæpi/</li>
        <li className="list-none">She was ______ to see her family.</li>
        <li className="list-none margin-bottom-20">Cô ấy rất vui khi gặp lại gia đình.</li>

        <li value="2">Extremely <strong>tired</strong> /ˈtaɪərd/</li>
        <li className="list-none">After working all night, he was ______.</li>
        <li className="list-none margin-bottom-20">Sau khi làm việc cả đêm, anh ấy rất mệt mỏi.</li>

        <li value="3">Extremely <strong>difficult</strong> /ˈdɪfɪkəlt/</li>
        <li className="list-none">The exam was ______.</li>
        <li className="list-none margin-bottom-20">Bài kiểm tra rất khó.</li>

        <li value="4">Extremely <strong>dangerous</strong> /ˈdeɪndʒərəs/</li>
        <li className="list-none">It's ______ to swim in this river.</li>
        <li className="list-none margin-bottom-20">Bơi ở con sông này rất nguy hiểm.</li>

        <li value="5">Extremely <strong>talented</strong> /ˈtæləntɪd/</li>
        <li className="list-none">She is an ______ musician.</li>
        <li className="list-none margin-bottom-20">Cô ấy là một nhạc sĩ rất tài năng.</li>

        <li value="6">Extremely <strong>beautiful</strong> /ˈbjuːtɪfəl/</li>
        <li className="list-none">The sunset was ______.</li>
        <li className="list-none margin-bottom-20">Hoàng hôn rất đẹp.</li>

        <li value="7">Extremely <strong>rich</strong> /rɪtʃ/</li>
        <li className="list-none">He is an ______ businessman.</li>
        <li className="list-none margin-bottom-20">Ông ấy là một doanh nhân rất giàu có.</li>

        <li value="8">Extremely <strong>cold</strong> /koʊld/</li>
        <li className="list-none">It's ______ outside today.</li>
        <li className="list-none margin-bottom-20">Trời hôm nay lạnh quá.</li>

        <li value="9">Extremely <strong>hungry</strong> /ˈhʌŋɡri/</li>
        <li className="list-none">After playing sports all day, I was ______.</li>
        <li className="list-none margin-bottom-20">Sau khi chơi thể thao cả ngày, tôi rất đói.</li>

        <li value="10">Extremely <strong>angry</strong> /ˈæŋɡri/</li>
        <li className="list-none">She was ______ when she heard the news.</li>
        <li className="list-none margin-bottom-20">Cô ấy rất tức giận khi nghe tin đó.</li>

      </ol>

      <p>** Các cụm từ trên đều được sử dụng để nhấn mạnh mức độ cao nhất của một tính từ hoặc trạng từ, tạo nên một hiệu ứng nhấn mạnh và tăng cường cảm xúc.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Extremely</strong>" thường được đặt trước tính từ hoặc trạng từ để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này có thể được sử dụng trong cả văn nói và văn viết.</li>

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