import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SOFTly2(): React.JSX.Element {

  const postId = "SOFTly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-nhe-nhang-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: nhẹ nhàng</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">SOFTly
        <sup>
          <Link to="/vocabulary/SOFTly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/SOFTly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>SOFTly</strong>" (một cách nhẹ nhàng) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [SOFTly][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">SOFT ly</Link>] /ˈsɒftli/ ⬤• (2x)
              
            </span>
              
            &nbsp;là một Trạng Cơ thường được sử dụng để miêu tả một hành động được thực hiện một cách nhẹ nhàng, dịu dàng, không mạnh mẽ.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">she SOFTly SPOken to the BAby to CALM it DOWN.</li>
        <li className="list-none margin-bottom-20">Cô ấy nói nhỏ nhẹ với em bé để dỗ nó nín.</li>

        <li value="2">the ROOM was SOFTly LIT by CANdlelight.</li>
        <li className="list-none margin-bottom-20">Căn phòng được chiếu sáng dịu nhẹ bởi ánh nến.</li>

        <li value="3">the CHAIR was SOFTly PADded for COMfort.</li>
        <li className="list-none margin-bottom-20">Chiếc ghế được đệm mềm mại để tạo cảm giác thoải mái.</li>

        <li value="4">the MUsic was SOFTly PLAYED in the BACKground.</li>
        <li className="list-none margin-bottom-20">Âm nhạc được chơi nhẹ nhàng ở nền.</li>

        <li value="5">she SOFTly BRUSHED her HAIR with a WOODen COMB.</li>
        <li className="list-none margin-bottom-20">Cô ấy chải nhẹ nhàng mái tóc bằng chiếc lược gỗ.</li>

        <li value="6">he SOFTly WHISpered in her EAR.</li>
        <li className="list-none margin-bottom-20">Anh ấy thì thầm nhẹ nhàng vào tai cô ấy.</li>

        <li value="7">she SOFTly CLOSED the DOOR behind her.</li>
        <li className="list-none margin-bottom-20">Cô ấy đóng nhẹ nhàng cánh cửa sau lưng.</li>

        <li value="8">the FIREflies were SOFTly GLOWing in the DARKness.</li>
        <li className="list-none margin-bottom-20">Những con đom đóm phát ra ánh sáng dịu nhẹ trong bóng tối.</li>

        <li value="9">SNOWflakes were SOFTly FALLing from the SKY.</li>
        <li className="list-none margin-bottom-20">Những bông tuyết rơi nhẹ nhàng từ trên trời xuống.</li>

        <li value="10">the BIRD SOFTly LANDed on the BRANCH.</li>
        <li className="list-none margin-bottom-20">Con chim hạ cánh nhẹ nhàng trên cành cây.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh sự nhẹ nhàng, dịu dàng của một hành động hoặc trạng thái. Chúng thường được sử dụng để tạo ra một bầu không khí yên bình, thư thái hoặc để miêu tả những cảnh vật, sự vật đẹp đẽ, tinh tế.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>SOFTly</strong>" thường đứng trước hành động để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này có thể được thay thế bằng các từ đồng nghĩa như "<Link to="/vocabulary/gently-1">gently</Link>", "QUIetly" để tạo sự đa dạng trong văn phong.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 12, 2024 · by 💎GEM ·</span>
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