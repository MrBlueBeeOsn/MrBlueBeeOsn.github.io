import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Openly2(): React.JSX.Element {

  const postId = "Openly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-chan-thanh-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: chân thành</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">Openly
        <sup>
          <Link to="/vocabulary/Openly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/Openly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>Openly</strong>" (một cách công khai) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [Openly][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">Ō pe̛n ly</Link>] /ˈoʊpənli/ ⬤•• (3x)
              
            </span>
              
            &nbsp;trong tiếng Anh có nghĩa là "một cách công khai", thường được dùng để mô tả hành động, thái độ hoặc thông tin được chia sẻ một cách rõ ràng, không giấu giếm.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">the ISsue was Openly disCUSSED at the MEETing.</li>
        <li className="list-none margin-bottom-20">Vấn đề này đã được thảo luận công khai tại cuộc họp.</li>

        <li value="2">the poliTICian was Openly CRITicized for his POLicies.</li>
        <li className="list-none margin-bottom-20">Vị chính trị gia đã bị chỉ trích công khai vì các chính sách của ông ấy.</li>

        <li value="3">the ATHlete was Openly adMIred for his aCHIEVEments.</li>
        <li className="list-none margin-bottom-20">Vận động viên này được ngưỡng mộ công khai vì những thành tích của anh ấy.</li>

        <li value="4">the CAUSE was Openly supPORTed by many ceLEBrities.</li>
        <li className="list-none margin-bottom-20">Nguyên nhân này đã được nhiều người nổi tiếng ủng hộ công khai.</li>

        <li value="5">the THEORy was Openly QUEStioned by many SCIentists.</li>
        <li className="list-none margin-bottom-20">Thuyết này đã bị nhiều nhà khoa học đặt câu hỏi công khai.</li>

        <li value="6">the PLAN was Openly opPOSED by the LOcal RESidents.</li>
        <li className="list-none margin-bottom-20">Kế hoạch này đã bị người dân địa phương phản đối công khai.</li>

        <li value="7">their FEELings were Openly exPRESSED in the LETter.</li>
        <li className="list-none margin-bottom-20">Cảm xúc của họ đã được bày tỏ công khai trong bức thư.</li>

        <li value="8">his contriBUtions to the PROJect were Openly acKNOWledged by the TEAM.</li>
        <li className="list-none margin-bottom-20">Những đóng góp của anh ấy cho dự án đã được nhóm công nhận công khai.</li>

        <li value="9">the proTESters Openly deFIEd the GOVernment's ORders.</li>
        <li className="list-none margin-bottom-20">Những người biểu tình đã công khai thách thức lệnh của chính phủ.</li>

        <li value="10">the NEW iDEa was Openly WELcomed by the TEAM.</li>
        <li className="list-none margin-bottom-20">Ý tưởng mới đã được đội ngũ nhiệt liệt chào đón.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh tính công khai, rõ ràng và không che giấu của một hành động, thái độ hoặc thông tin. Chúng thường được sử dụng để mô tả những tình huống mà mọi người có thể dễ dàng biết đến và đánh giá.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Openly</strong>" thường được đặt trước hành động quá khứ phân từ để nhấn mạnh ý nghĩa.</li>

          <li className="margin-bottom-20">Từ này thường được sử dụng trong văn viết hoặc nói để tạo ra một hiệu ứng minh bạch và rõ ràng.</li>

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