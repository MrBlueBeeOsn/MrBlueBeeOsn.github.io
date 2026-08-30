import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function PRESently2(): React.JSX.Element {

  const postId = "PRESently2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#thoi-gian-hien-tai-terms"><mark className="highlight-tertiary-padding-4-88">ADverbs: hiện tại</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">PRESently
        <sup>
          <Link to="/vocabulary/PRESently-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/PRESently-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>PRESently</strong>" (hiện tại) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [PRESently][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">PRES e̛nt ly</Link>] /ˈprezəntli/ ⬤•• (3x)
              
            </span>
              
            &nbsp;thường được dùng để chỉ một thời điểm xảy ra ngay bây giờ hoặc trong tương lai gần.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">the MANager is PRESently enGAGED in a MEETing.</li>
        <li className="list-none margin-bottom-20">Quản lý đang bận họp.</li>

        <li value="2">engiNEERS are PRESently WORKing on a NEW PROJect.</li>
        <li className="list-none margin-bottom-20">Các kỹ sư đang làm việc trên một dự án mới.</li>

        <li value="3">the PRODuct is PRESently aVAILable in all our STORES.</li>
        <li className="list-none margin-bottom-20">Sản phẩm hiện đang có sẵn tại tất cả các cửa hàng của chúng tôi.</li>

        <li value="4">the NEW BRIDGE is PRESently under conSTRUCtion.</li>
        <li className="list-none margin-bottom-20">Cây cầu mới đang được xây dựng.</li>

        <li value="5">he is PRESently LIVing in LONdon.</li>
        <li className="list-none margin-bottom-20">Cô ấy hiện đang sống ở London.</li>

        <li value="6">we are PRESently conSIDering DIFFERent OPtions.</li>
        <li className="list-none margin-bottom-20">Chúng tôi đang cân nhắc các lựa chọn khác nhau.</li>

        <li value="7">he is PRESently STUDying for his EXams.</li>
        <li className="list-none margin-bottom-20">Anh ấy đang ôn thi.</li>

        <li value="8">the WEIter is PRESently SERving the CUStomers.</li>
        <li className="list-none margin-bottom-20">Người phục vụ đang phục vụ khách hàng.</li>

        <li value="9">she is PRESently atTENDing a CONFERence in PAris.</li>
        <li className="list-none margin-bottom-20">Cô ấy hiện đang tham dự một hội nghị ở Paris.</li>

        <li value="10">the CITy is PRESently exPEriencing a HEAT WAVE.</li>
        <li className="list-none margin-bottom-20">Thành phố hiện đang trải qua một đợt nắng nóng.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh tính thời sự của một hành động, sự việc hoặc trạng thái. Chúng thường được sử dụng để mô tả những gì đang diễn ra tại thời điểm nói hoặc viết.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>PRESently</strong>" thường đứng trước hành động để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này có thể được thay thế bằng các từ đồng nghĩa như "<Link to="/vocabulary/currently-1">CURrently</Link>", "<Link to="/vocabulary/NOW-1">NOW</Link>", "at the MOment" để tạo sự đa dạng trong văn phong.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 7, 2024 · by 💎GEM ·</span>
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