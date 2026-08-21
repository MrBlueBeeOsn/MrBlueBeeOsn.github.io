import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function JOYfully2(): React.JSX.Element {

  const postId = "JOYfully2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-tich-cuc-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: tích cực</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">JOYfully
        <sup>
          <Link to="/vocabulary/JOYfully-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/JOYfully-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>JOYfully</strong>" (một cách vui vẻ) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [JOYfully][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">JOY fưl ly</Link>] /ˈdʒɔɪfəli/ ⬤•• (3x)
              
            </span>
              
            &nbsp;thường được dùng để mô tả một hành động, cảm xúc hoặc trạng thái được thực hiện hoặc trải nghiệm với niềm vui sướng, hạnh phúc.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">the inviTAtion was JOYfully acCEPted.</li>
        <li className="list-none margin-bottom-20">Lời mời đã được chấp nhận một cách vui vẻ.</li>

        <li value="2">the CHILdren JOYfully parTICipated in the GAMES.</li>
        <li className="list-none margin-bottom-20">Những đứa trẻ tham gia vào các trò chơi một cách vui vẻ.</li>

        <li value="3">their WEDding was JOYfully CELebrated by FRIENDS and FAMIly.</li>
        <li className="list-none margin-bottom-20">Đám cưới của họ đã được bạn bè và gia đình tổ chức một cách vui vẻ.</li>

        <li value="4">the HOLiday was JOYfully anTICipated by the CHILdren.</li>
        <li className="list-none margin-bottom-20">Các em nhỏ đã mong đợi kỳ nghỉ một cách vui vẻ.</li>

        <li value="5">the COUPle JOYfully emBRACED after a LONG sepaRAtion.</li>
        <li className="list-none margin-bottom-20">Cặp đôi đã ôm nhau thật chặt sau một thời gian dài xa cách.</li>

        <li value="6">they JOYfully SHARED their exPERiences with each OTHer.</li>
        <li className="list-none margin-bottom-20">Họ đã chia sẻ những trải nghiệm của mình với nhau một cách vui vẻ.</li>

        <li value="7">"i WON!" she JOYfully exCLAIMED.</li>
        <li className="list-none margin-bottom-20">Cô ấy vui sướng kêu lên: "Tôi thắng rồi!"</li>

        <li value="8">the TRAVelers JOYfully reTURNED HOME.</li>
        <li className="list-none margin-bottom-20">Những người du lịch đã vui vẻ trở về nhà.</li>

        <li value="9">the BIRDS JOYfully SANG in the MORning.</li>
        <li className="list-none margin-bottom-20">Những chú chim hót líu lo một cách vui vẻ vào buổi sáng.</li>

        <li value="10">the CHILdren JOYfully DANCED to the MUsic.</li>
        <li className="list-none margin-bottom-20">Những đứa trẻ nhảy múa vui vẻ theo điệu nhạc.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh cảm giác vui sướng, hạnh phúc và sự tích cực trong một hành động hoặc trạng thái. Chúng thường được sử dụng để miêu tả những khoảnh khắc đáng nhớ và những trải nghiệm tuyệt vời trong cuộc sống.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>JOYfully</strong>" thường đứng trước hành động để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này có thể được thay thế bằng các từ đồng nghĩa như "<Link to="/vocabulary/HAPpily-1">HAPpily</Link>", "GLADly", "<Link to="/vocabulary/CHEERfully-1">CHEERfully</Link>" để tạo sự đa dạng trong văn phong.</li>

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