import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Absolutely2(): React.JSX.Element {

  const postId = "Absolutely2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-chac-chan-terms"><mark className="highlight-tertiary-padding-4-8">Tính chắc chắn</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">absolutely
        <sup>
          <Link to="/vocabulary/absolutely-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/absolutely-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>absolutely</strong>" (hoàn toàn, tuyệt đối) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <strong>Absolutely&nbsp;</strong>
            
            <span className="highlight-255-padding-3-6">
              
              /ˌæbsə'luːtli/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">absơlütely</Link>/ 
              
              <sup>&nbsp;••⬤• (4x)</sup>
              
            </span>
              
            &nbsp;là một trạng từ thường được dùng để nhấn mạnh một ý kiến, một câu trả lời hoặc một tình huống. Nó mang ý nghĩa hoàn toàn đồng ý, chắc chắn hoặc không có ngoại lệ nào.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">Absolutely <strong>certain</strong> /ˈsɜːtn/</li>
        <li className="list-none">I am ______ that he will win the race.</li>
        <li className="list-none margin-bottom-20">Tôi hoàn toàn chắc chắn rằng anh ấy sẽ thắng cuộc đua.</li>

        <li value="2">Absolutely <strong>necessary</strong> /ˈnesəseri/</li>
        <li className="list-none">It is ______ to have a passport to travel abroad.</li>
        <li className="list-none margin-bottom-20">Cần phải có hộ chiếu để đi du lịch nước ngoài là điều hoàn toàn cần thiết.</li>

        <li value="3">Absolutely <strong>right</strong> /raɪt/</li>
        <li className="list-none">You are ______ about that.</li>
        <li className="list-none margin-bottom-20">Bạn hoàn toàn đúng về điều đó.</li>

        <li value="4">Absolutely <strong>love</strong> /lʌv/</li>
        <li className="list-none">I ______ chocolate ice cream.</li>
        <li className="list-none margin-bottom-20">Tôi rất thích kem sô cô la.</li>

        <li value="5">Absolutely <strong>hate</strong> /heɪt/</li>
        <li className="list-none">I ______ spiders.</li>
        <li className="list-none margin-bottom-20">Tôi ghét rắn độc.</li>

        <li value="6">Absolutely <strong>beautiful</strong> /ˈbjuːtɪfəl/</li>
        <li className="list-none">The sunset was ______.</li>
        <li className="list-none margin-bottom-20">Hoàng hôn thật đẹp.</li>

        <li value="7">Absolutely <strong>perfect</strong> /ˈpɜːrfɪkt/</li>
        <li className="list-none">The cake was ______.</li>
        <li className="list-none margin-bottom-20">Chiếc bánh thật hoàn hảo.</li>

        <li value="8">Absolutely <strong>true</strong> /truː/</li>
        <li className="list-none">What he said was ______.</li>
        <li className="list-none margin-bottom-20">Những gì anh ấy nói hoàn toàn đúng sự thật.</li>

        <li value="9">Absolutely <strong>convinced</strong> /kənˈvɪnst/</li>
        <li className="list-none">I am ______ that she is innocent.</li>
        <li className="list-none margin-bottom-20">Tôi hoàn toàn tin rằng cô ấy vô tội.</li>

        <li value="10">Absolutely <strong>exhausted</strong> /ɪɡˈzɔːstɪd/</li>
        <li className="list-none">After the marathon, I was ______.</li>
        <li className="list-none margin-bottom-20">Sau cuộc đua marathon, tôi mệt mỏi rã rời.</li>

      </ol>

      <p>** Các cụm từ trên đều được sử dụng để nhấn mạnh một ý kiến, cảm xúc hoặc tình huống một cách mạnh mẽ. Chúng thường được đặt ở đầu câu để tạo sự chú ý và nhấn mạnh.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Absolutel</strong>" thường được đặt trước tính từ hoặc trạng từ để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này có thể được sử dụng trong cả văn nói và văn viết.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 8, 2024 · by 💎Gem ·</span>
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