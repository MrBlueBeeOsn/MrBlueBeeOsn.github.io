import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function FREquently2(): React.JSX.Element {

  const postId = "FREquently2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#thoi-gian-lap-lai-terms"><mark className="highlight-tertiary-padding-4-88">ADverbs: lặp lại</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">FREquently
        <sup>
          <Link to="/vocabulary/FREquently-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/FREquently-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>FREquently</strong>" (thường xuyên) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [FREquently][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">FRĖ que̛nt ly</Link>] /ˈfriːkwəntli ⬤•• (3x)
              
            </span>
              
            &nbsp;thường được sử dụng để chỉ một hành động, sự việc xảy ra nhiều lần hoặc trong một khoảng thời gian ngắn.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">the fAQ SECtion proVIDES ANswers to FREquently ASKED QUESTions about the PRODuct.</li>
        <li className="list-none margin-bottom-20">Phần FAQ cung cấp câu trả lời cho những câu hỏi thường gặp về sản phẩm.</li>

        <li value="2">this is a FREquently USED PHRASE in EVERyday converSAtion.</li>
        <li className="list-none margin-bottom-20">Đây là một cụm từ được sử dụng thường xuyên trong cuộc trò chuyện hàng ngày.</li>

        <li value="3">TRAFfic ACcidents are a FREquently ocCURring PROBlem in this CITy.</li>
        <li className="list-none margin-bottom-20">Tai nạn giao thông là một vấn đề thường xảy ra ở thành phố này.</li>

        <li value="4">this is ONE of the MOST FREquently VISited WEBsites in the WORLD.</li>
        <li className="list-none margin-bottom-20">Đây là một trong những trang web được truy cập nhiều nhất trên thế giới.</li>

        <li value="5">his NAME was FREquently menTIONED in the NEWS.</li>
        <li className="list-none margin-bottom-20">Tên của ông ấy được đề cập thường xuyên trên tin tức.</li>

        <li value="6">every WEBSITE is FREquently upDAted with NEW inforMAtion.</li>
        <li className="list-none margin-bottom-20">Trang web được cập nhật thường xuyên với thông tin mới.</li>

        <li value="7">his QUESTion is FREquently ASKED by our CUStomers.</li>
        <li className="list-none margin-bottom-20">Câu hỏi này được khách hàng của chúng tôi hỏi thường xuyên.</li>

        <li value="8">this TYPE of ERror is FREquently enCOUNTered in this SOFTware.</li>
        <li className="list-none margin-bottom-20">Loại lỗi này thường gặp phải trong phần mềm này.</li>

        <li value="9">this imPORtant DEtail is FREquently overLOOKED by PEOple.</li>
        <li className="list-none margin-bottom-20">Chi tiết quan trọng này thường bị mọi người bỏ qua.</li>

        <li value="10">this BOOK is FREquently recomMENDed by TEACHers.</li>
        <li className="list-none margin-bottom-20">Cuốn sách này thường được giáo viên khuyến nghị.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh tính thường xuyên của một hành động, sự việc hoặc trạng thái. Chúng thường được sử dụng để mô tả các thói quen, xu hướng hoặc đặc điểm của một đối tượng, hiện tượng hoặc quá trình.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>FREquently</strong>" thường được đặt trước hành động hoặc Tính Cơ để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này thường được sử dụng trong văn nói và văn viết hàng ngày.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 2, 2024 · by 💎GEM ·</span>
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