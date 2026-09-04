import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function beLAtedly2(): React.JSX.Element {

  const postId = "beLAtedly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-cham"><mark className="highlight-tertiary-padding-4-8">ADverbs: chậm</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">beLAtedly
        <sup>
          <Link to="/vocabulary/beLAtedly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/beLAtedly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>beLAtedly</strong>" (một cách muộn màng) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [beLAtedly][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">bė LĀ tėd ly</Link>] /bɪˈleɪ.tɪd.li/ •⬤•• (4x)
              
            </span>
              
            &nbsp;thường được dùng để mô tả một hành động hoặc sự kiện xảy ra muộn hơn so với thời điểm dự kiến hoặc mong đợi.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">he beLAtedly REalized he had forGOTten his WALlet.</li>
        <li className="list-none margin-bottom-20">Anh ấy muộn màng nhận ra mình đã quên ví.</li>

        <li value="2">she beLAtedly aPOLogized for her RUDE beHAVior.</li>
        <li className="list-none margin-bottom-20">Cô ấy muộn màng xin lỗi vì hành vi thô lỗ của mình.</li>

        <li value="3">they beLAtedly arRIVED at the MEEting due to TRAFfic.</li>
        <li className="list-none margin-bottom-20">Họ đến cuộc họp một cách muộn màng do tắc đường.</li>

        <li value="4">he beLAtedly SENT the BIRTHday CARD, WEEKS after the ACtual DATE.</li>
        <li className="list-none margin-bottom-20">Anh ấy gửi thiệp sinh nhật một cách muộn màng, vài tuần sau ngày sinh nhật thật.</li>

        <li value="5">she beLAtedly reSPONded to his EMail after a LONG deLAY.</li>
        <li className="list-none margin-bottom-20">Cô ấy trả lời email của anh ấy một cách muộn màng sau một thời gian dài trì hoãn.</li>

        <li value="6">they beLAtedly conGRATulated the NEW PArents on the BIRTH of their BAby.</li>
        <li className="list-none margin-bottom-20">Họ muộn màng chúc mừng cặp vợ chồng mới sinh em bé.</li>

        <li value="7">the COMpany beLAtedly acKNOWledged the ERror in their PRODuct.</li>
        <li className="list-none margin-bottom-20">Công ty muộn màng thừa nhận lỗi trong sản phẩm của họ.</li>

        <li value="8">they beLAtedly disCOVered the MISSing DOCuments.</li>
        <li className="list-none margin-bottom-20">Họ muộn màng phát hiện ra những tài liệu bị thiếu.</li>

        <li value="9">he beLAtedly UNderSTOOD the MEANing of her CRYPtic MESsage.</li>
        <li className="list-none margin-bottom-20">Anh ấy muộn màng hiểu ra ý nghĩa của tin nhắn khó hiểu của cô ấy.</li>

        <li value="10">the COMpany beLAtedly OFfered compenSAtion to the afFECted CUStomers.</li>
        <li className="list-none margin-bottom-20">Công ty muộn màng đề nghị bồi thường cho những khách hàng bị ảnh hưởng.</li>

      </ol>

      <p>** Các cụm từ trên đều chỉ ra rằng hành động hoặc sự kiện xảy ra sau thời điểm thích hợp hoặc mong đợi, thường mang theo ý nghĩa hối tiếc hoặc sự chậm trễ không đáng có.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>beLAtedly</strong>" thường đứng trước hành động để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này mang nghĩa về sự muộn màng.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>April 23, 2025 · by 💎GEM ·</span>
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