import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function HAPpily2(): React.JSX.Element {

  const postId = "HAPpily2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-tich-cuc-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: tích cực</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">HAPpily
        <sup>
          <Link to="/vocabulary/HAPpily-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/HAPpily-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>HAPpily</strong>" (một cách vui vẻ) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [HAPpily][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">HAP pi̛ ly</Link>] /ˈhæpəli/ ⬤•• (3x)
              
            </span>
              
            &nbsp;thường được sử dụng để diễn tả trạng thái vui vẻ, hạnh phúc hoặc sự hài lòng.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">they LIVED HAPpily EVer after.</li>
        <li className="list-none margin-bottom-20">Và họ sống hạnh phúc mãi mãi.</li>

        <li value="2">they have been HAPpily MARried for TWENty YEARS.</li>
        <li className="list-none margin-bottom-20">Họ đã kết hôn hạnh phúc được 20 năm.</li>

        <li value="3">she was HAPpily surPRISED to SEE him.</li>
        <li className="list-none margin-bottom-20">Cô ấy rất vui mừng khi gặp anh ấy.</li>

        <li value="4">my GRANDfather is HAPpily reTIred and enJOYS GARdening.</li>
        <li className="list-none margin-bottom-20">Ông nội tôi đã vui vẻ nghỉ hưu và thích làm vườn.</li>

        <li value="5">the COUPle is HAPpily enGAGED and PLANning their WEDding.</li>
        <li className="list-none margin-bottom-20">Cặp đôi đang rất hạnh phúc khi đính hôn và đang lên kế hoạch cho đám cưới.</li>

        <li value="6">i HAPpily aGREE to your proPOsal.</li>
        <li className="list-none margin-bottom-20">Tôi vui vẻ đồng ý với đề xuất của bạn.</li>

        <li value="7">i HAPpily acCEPT your inviTAtion.</li>
        <li className="list-none margin-bottom-20">Tôi vui vẻ chấp nhận lời mời của bạn.</li>

        <li value="8">i'll HAPpily oBLIGE.</li>
        <li className="list-none margin-bottom-20">Tôi rất vui lòng.</li>

        <li value="9">HAPpily for us, the WEAther was BEAUtiful.</li>
        <li className="list-none margin-bottom-20">May mắn thay cho chúng tôi, thời tiết rất đẹp.</li>

        <li value="10">she is HAPpily OCcupied with her NEW HOBby.</li>
        <li className="list-none margin-bottom-20">Cô ấy đang bận rộn một cách vui vẻ với sở thích mới của mình.</li>

      </ol>

      <p>** Các cụm từ trên đều được sử dụng để diễn tả trạng thái vui vẻ, hạnh phúc hoặc sự hài lòng. Chúng thường được sử dụng trong các ngữ cảnh tích cực và mang lại cảm giác ấm áp, vui tươi.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>HAPpily</strong>" thường được đặt trước hành động hoặc Tính Cơ để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này thường được sử dụng trong văn nói và văn viết để làm cho câu nói thêm phần sinh động và cảm xúc.</li>

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