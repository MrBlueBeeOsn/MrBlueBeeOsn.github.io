import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function CAREfully2(): React.JSX.Element {

  const postId = "CAREfully2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-can-than-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: cẩn thận</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">CAREfully
        <sup>
          <Link to="/vocabulary/CAREfully-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/CAREfully-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>CAREfully</strong>" (một cách cẩn thận) và các cụm từ thường đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [CAREfully][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">CĀ̄RE fưl ly</Link>] /ˈkerfəli/ ⬤•• (3x)
              
            </span>
              
            &nbsp;trong tiếng Anh có nghĩa là "một cách cẩn thận", "một cách chu đáo", thường được dùng để mô tả một hành động được thực hiện một cách tỉ mỉ, tránh sai sót.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">the proPOsal was CAREfully conSIDered by the comMITtee.</li>
        <li className="list-none margin-bottom-20">Đề xuất đã được ủy ban cân nhắc kỹ lưỡng.</li>

        <li value="2">the DOCtor CAREfully exAMined the PAtient.</li>
        <li className="list-none margin-bottom-20">Bác sĩ đã khám bệnh nhân rất kỹ lưỡng.</li>

        <li value="3">the inGREdients were CAREfully seLECTed for the DISH.</li>
        <li className="list-none margin-bottom-20">Nguyên liệu đã được chọn lựa kỹ lưỡng cho món ăn.</li>

        <li value="4">the FRAGile Item was CAREfully WRAPPED to preVENT BREAKage.</li>
        <li className="list-none margin-bottom-20">Vật liệu dễ vỡ đã được gói cẩn thận để tránh bị vỡ.</li>

        <li value="5">she CAREfully LIStened to his explaNAtion.</li>
        <li className="list-none margin-bottom-20">Cô ấy lắng nghe lời giải thích của anh ấy rất cẩn thận.</li>

        <li value="6">the inGREdients were CAREfully MEASured to enSURE the PERfect TASTE.</li>
        <li className="list-none margin-bottom-20">Nguyên liệu đã được đo lường cẩn thận để đảm bảo hương vị hoàn hảo.</li>

        <li value="7">the TRIP was CAREfully PLANNED to aVOID any PROBlems.</li>
        <li className="list-none margin-bottom-20">Chuyến đi đã được lên kế hoạch cẩn thận để tránh bất kỳ vấn đề nào.</li>

        <li value="8">the PAtient's conDITion was CAREfully MONitored.</li>
        <li className="list-none margin-bottom-20">Tình trạng của bệnh nhân đã được theo dõi chặt chẽ.</li>

        <li value="9">the anTIQUE VASE was CAREfully preSERVED for generAtions.</li>
        <li className="list-none margin-bottom-20">Cái bình cổ đã được bảo quản cẩn thận qua nhiều thế hệ.</li>

        <li value="10">the FRAGile GLASS was CAREfully HANDled.</li>
        <li className="list-none margin-bottom-20">Cái ly thủy tinh dễ vỡ đã được xử lý cẩn thận.</li>

      </ol>

      <p>** Các cụm từ trên đều được sử dụng để nhấn mạnh sự cẩn thận và tỉ mỉ trong việc thực hiện một hành động nào đó. Chúng thường được dùng trong các tình huống đòi hỏi sự chính xác, an toàn hoặc bảo quản.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>CAREfully</strong>" thường được đặt trước hành động để nhấn mạnh cách thức thực hiện một hành động.</li>

          <li className="margin-bottom-20">Từ này thường được sử dụng trong các văn bản hướng dẫn, báo cáo hoặc các văn bản mang tính chuyên môn.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 5, 2024 · by 💎GEM ·</span>
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