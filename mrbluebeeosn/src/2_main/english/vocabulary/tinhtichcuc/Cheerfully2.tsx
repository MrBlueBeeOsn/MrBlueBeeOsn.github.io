import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function CHEERfully2(): React.JSX.Element {

  const postId = "CHEERfully2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-tich-cuc-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: tích cực</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">CHEERfully
        <sup>
          <Link to="/vocabulary/CHEERfully-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/CHEERfully-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>CHEERfully</strong>" (một cách vui vẻ) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [CHEERfully][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">CHEER fưl ly</Link>] /ˈtʃɪrfəli/ ⬤•• (3x)
              
            </span>
              
            &nbsp;là một Trạng Cơ dùng để miêu tả một hành động được thực hiện một cách vui vẻ, hồ hởi, tích cực.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">she CHEERfully aGREED to HELP with the PARty.</li>
        <li className="list-none margin-bottom-20">Cô ấy vui vẻ đồng ý giúp đỡ tổ chức bữa tiệc.</li>

        <li value="2">the CHILdren CHEERfully WAVED GOODbye to the BUS.</li>
        <li className="list-none margin-bottom-20">Những đứa trẻ vui vẻ vẫy tay chào tạm biệt xe buýt.</li>

        <li value="3">he CHEERfully OFfered to CARry the HEAVy BOXes.</li>
        <li className="list-none margin-bottom-20">Anh ấy vui vẻ tình nguyện mang những chiếc hộp nặng.</li>

        <li value="4">she CHEERfully comPLIED with his reQUEST.</li>
        <li className="list-none margin-bottom-20">Cô ấy vui vẻ tuân theo yêu cầu của anh ấy.</li>

        <li value="5">he CHEERfully acCEPted the inviTAtion.</li>
        <li className="list-none margin-bottom-20">Anh ấy vui vẻ chấp nhận lời mời.</li>

        <li value="6">the STUdents CHEERfully parTICipated in the GAME.</li>
        <li className="list-none margin-bottom-20">Học sinh vui vẻ tham gia trò chơi.</li>

        <li value="7">the BIRDS CHEERfully SANG in the MORning.</li>
        <li className="list-none margin-bottom-20">Những chú chim vui vẻ hót líu lo vào buổi sáng.</li>

        <li value="8">the CHILdren CHEERfully DANCED to the MUsic.</li>
        <li className="list-none margin-bottom-20">Những đứa trẻ vui vẻ nhảy múa theo nhạc.</li>

        <li value="9">she CHEERfully GREETed her FRIENDS at the DOOR.</li>
        <li className="list-none margin-bottom-20">Cô ấy vui vẻ chào đón bạn bè ở cửa.</li>

        <li value="10">he CHEERfully SMILED at her.</li>
        <li className="list-none margin-bottom-20">Anh ấy cười tươi với cô ấy.</li>

      </ol>

      <p>** Các cụm từ trên đều mang ý nghĩa tích cực, thể hiện sự vui vẻ, hồ hởi và thái độ lạc quan trong cuộc sống. Chúng thường được sử dụng để miêu tả những hành động, thái độ hoặc cảm xúc tích cực.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>CHEERfully</strong>" thường được đặt trước hành động để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này thường được sử dụng trong các ngữ cảnh không quá trang trọng, thường liên quan đến cuộc sống hàng ngày.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 14, 2024 · by 💎GEM ·</span>
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