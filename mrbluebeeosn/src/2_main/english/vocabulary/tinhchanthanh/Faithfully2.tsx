import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function FAITHfully2(): React.JSX.Element {

  const postId = "FAITHfully2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-chan-thanh-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: chân thành</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">FAITHfully
        <sup>
          <Link to="/vocabulary/FAITHfully-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/FAITHfully-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>FAITHfully</strong>" (một cách trung thành, tin cậy) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [FAITHfully][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">FĀITH fưl ly</Link>] /ˈfeɪθfʊli/ ⬤•• (3x)
              
            </span>
              
            &nbsp;thường được sử dụng để miêu tả một hành động được thực hiện một cách trung thành, đáng tin cậy, tuân thủ theo một điều gì đó.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">he FAITHfully SERVED his COUNtry for many YEARS.</li>
        <li className="list-none margin-bottom-20">Ông ấy đã trung thành phục vụ đất nước trong nhiều năm.</li>

        <li value="2">she FAITHfully FOLlowed the DOCtor's ORders.</li>
        <li className="list-none margin-bottom-20">Cô ấy đã tuân theo chỉ dẫn của bác sĩ một cách trung thành.</li>

        <li value="3">the PAINTing was FAITHfully reproDUCED in the PRINT.</li>
        <li className="list-none margin-bottom-20">Bức tranh đã được tái tạo một cách trung thành trong bản in.</li>

        <li value="4">the eVENTS were FAITHfully reCORDed in the DIary.</li>
        <li className="list-none margin-bottom-20">Các sự kiện đã được ghi chép một cách trung thành trong nhật ký.</li>

        <li value="5">the PAINTing FAITHfully repreSENTed the BEAUty of the LANDscape.</li>
        <li className="list-none margin-bottom-20">Bức tranh đã đại diện một cách trung thành cho vẻ đẹp của phong cảnh.</li>

        <li value="6">the PLAN was FAITHfully EXecuted.</li>
        <li className="list-none margin-bottom-20">Kế hoạch đã được thực hiện một cách trung thành.</li>

        <li value="7">they FAITHfully beLIEVED in the POWer of LOVE.</li>
        <li className="list-none margin-bottom-20">Họ tin tưởng một cách trung thành vào sức mạnh của tình yêu.</li>

        <li value="8">she FAITHfully adHERED to her PRINciples.</li>
        <li className="list-none margin-bottom-20">Cô ấy đã tuân thủ các nguyên tắc của mình một cách trung thành.</li>

        <li value="9">the GARden was FAITHfully mainTAINED.</li>
        <li className="list-none margin-bottom-20">Khu vườn đã được chăm sóc một cách cẩn thận.</li>

        <li value="10">he FAITHfully reMEMbered his CHILDhood.</li>
        <li className="list-none margin-bottom-20">Ông ấy nhớ lại tuổi thơ của mình một cách rõ nét.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh sự trung thành, tin cậy và sự tuân thủ trong việc thực hiện một hành động hoặc giữ một niềm tin nào đó. Chúng thường được sử dụng để miêu tả một thái độ tích cực và đáng khen ngợi.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>FAITHfully</strong>" thường được đặt trước hành động để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này thường được sử dụng trong văn viết trang trọng để tạo ra một cảm giác trang trọng và chính thức.</li>

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