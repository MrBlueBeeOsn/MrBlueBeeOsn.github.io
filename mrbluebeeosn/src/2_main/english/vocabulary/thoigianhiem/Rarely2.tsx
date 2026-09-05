import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function RAREly2(): React.JSX.Element {

  const postId = "RAREly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-hiem"><mark className="highlight-tertiary-padding-4-88">ADverbs: hiếm</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">RAREly
        <sup>
          <Link to="/vocabulary/RAREly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/RAREly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>RAREly</strong>" (hiếm khi) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [RAREly][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">RĀ̄RE ly</Link>] /ˈrerli/ ⬤• (2x)
              
            </span>
              
            &nbsp;là một Trạng Cơ dùng để diễn tả một hành động, sự việc hoặc tình huống xảy ra không thường xuyên, ít khi hoặc hiếm có.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">it RAREly HAPpens that we GET SNOW in this PART of the COUNtry.</li>
        <li className="list-none margin-bottom-20">Hiếm khi có tuyết ở vùng này.</li>

        <li value="2">that TYPE of BIRD is RAREly SEEN in this ARea.</li>
        <li className="list-none margin-bottom-20">Loại chim đó hiếm khi được nhìn thấy ở khu vực này.</li>

        <li value="3">the TOPic is RAREly MENtioned in PUBlic.</li>
        <li className="list-none margin-bottom-20">Chủ đề đó hiếm khi được nhắc đến công khai.</li>

        <li value="4">that WORD is RAREly USED in everyday converSAtion.</li>
        <li className="list-none margin-bottom-20">Từ đó hiếm khi được sử dụng trong cuộc nói chuyện hàng ngày.</li>

        <li value="5">ANcient ARtifacts are RAREly FOUND in this REgion.</li>
        <li className="list-none margin-bottom-20">Các hiện vật cổ xưa hiếm khi được tìm thấy ở khu vực này.</li>

        <li value="6">my GRANDmother RAREly VISits us.</li>
        <li className="list-none margin-bottom-20">Bà tôi hiếm khi đến thăm chúng tôi.</li>

        <li value="7">such a seVERE STORM RAREly ocCURS in this AREa.</li>
        <li className="list-none margin-bottom-20">Một cơn bão nghiêm trọng như vậy hiếm khi xảy ra ở khu vực này.</li>

        <li value="8">she RAREly EAT MEAT.</li>
        <li className="list-none margin-bottom-20">Cô ấy hiếm khi ăn thịt.</li>

        <li value="9">due to her BUSy SCHEDule, she RAREly SLEEPS MORE than SIX HOURS a NIGHT.</li>
        <li className="list-none margin-bottom-20">Vì lịch trình bận rộn, cô ấy hiếm khi ngủ quá sáu tiếng mỗi đêm.</li>

        <li value="10">he is a VERy QUIet PERson and RAREly TALKS.</li>
        <li className="list-none margin-bottom-20">Anh ấy là một người rất trầm tính và hiếm khi nói chuyện.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh tính không thường xuyên, ít xảy ra của một hành động, sự việc hoặc tình huống. Chúng thường được sử dụng để tạo ra sự tương phản hoặc nhấn mạnh sự đặc biệt của một điều gì đó.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>RAREly</strong>" thường đứng ở đầu câu hoặc trước hành động để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này có thể được thay thế bằng các từ đồng nghĩa như "<Link to="/vocabulary/SELdom-1">SELdom</Link>", "inFREquently", "HARDly EVer" để tạo sự đa dạng trong văn phong.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 15, 2024 · by 💎GEM ·</span>
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