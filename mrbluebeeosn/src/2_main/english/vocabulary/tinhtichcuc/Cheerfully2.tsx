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
    
      <h4><HashLink smooth to="/vocabulary#adverbs-tich-cuc"><mark className="highlight-tertiary-padding-4-8">ADverbs: tích cực</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">CHEERfully
        <sup>
          <Link to="/vocabulary/CHEERfully-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/CHEERfully-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#aGREED">aGREED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#WAVED-GOODbye-to">WAVED GOODbye to</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#OFfered">OFfered</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#comPLIED-with">comPLIED with</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#acCEPTed">acCEPTed</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#parTICipated-in">parTICipated in</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#SANG-in">SANG in</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#DANCED-to">DANCED to</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#GREETed">GREETed</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#SMILED-at">SMILED at</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>CHEERfully</strong>" (vui vẻ) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              CHEERfully \<Link to="/pronunciation/5-vowel-system">CHEER fưl ly</Link>\ /ˈtʃɪrfəli/ ⬤•• (THREE SYLlables)
              
            </span>
              
            &nbsp;là một ADverb dùng để miêu tả một hành động được thực hiện một cách vui vẻ, hồ hởi, tích cực.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="aGREED">she CHEERfully aGREED to HELP with the PARTy.</li>
        <li className="list-none margin-bottom-20">Cô ấy đã vui vẻ đồng ý giúp tổ chức bữa tiệc.</li>

        <li value="2" id="WAVED-GOODbye-to">the CHILDren CHEERfully WAVED GOODbye to the BUS.</li>
        <li className="list-none margin-bottom-20">Các em nhỏ hân hoan vẫy tay chào tạm biệt chiếc xe buýt.</li>

        <li value="3" id="OFfered">he CHEERfully OFfered to CARry the HEAVy BOXes.</li>
        <li className="list-none margin-bottom-20">Anh ấy hào hứng đề nghị giúp mang những chiếc hộp nặng nề.</li>

        <li value="4" id="comPLIED-with">she CHEERfully comPLIED with his reQUEST.</li>
        <li className="list-none margin-bottom-20">Cô ấy đã vui vẻ làm theo yêu cầu của anh ấy.</li>

        <li value="5" id="acCEPTed">he CHEERfully acCEPTed the inviTAtion.</li>
        <li className="list-none margin-bottom-20">Anh ấy đã vui vẻ nhận lời mời.</li>

        <li value="6" id="parTICipated-in">the STUdents CHEERfully parTICipated in the GAME.</li>
        <li className="list-none margin-bottom-20">Các học sinh đã hào hứng tham gia vào trận đấu.</li>

        <li value="7" id="SANG-in">the BIRDS CHEERfully SANG in the MORNing.</li>
        <li className="list-none margin-bottom-20">Các chú chim hót rộn ràng vào buổi sáng.</li>

        <li value="8" id="DANCED-to">the CHILDren CHEERfully DANCED to the MUsic.</li>
        <li className="list-none margin-bottom-20">Các em nhỏ nhảy múa vui vẻ theo điệu nhạc.</li>

        <li value="9" id="GREETed">she CHEERfully GREETed her FRIENDS at the DOOR.</li>
        <li className="list-none margin-bottom-20">Cô ấy đã vui vẻ chào đón các bạn của mình ngay tại cửa.</li>

        <li value="10" id="SMILED-at">he CHEERfully SMILED at her.</li>
        <li className="list-none margin-bottom-20">Anh mỉm cười rạng rỡ với cô.</li>

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
          <span>noVEMber 14, 2024 · by 💎GEM ·</span>
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