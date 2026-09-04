import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function BAsically2(): React.JSX.Element {

  const postId = "BAsically2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-ve-co-ban"><mark className="highlight-tertiary-padding-4-8">ADverbs: về cơ bản</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">BAsically
        <sup>
          <Link to="/vocabulary/BAsically-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/BAsically-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>BAsically</strong>" (về cơ bản) và các cụm từ thường đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [BAsically][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">BĀ sic a̛lly</Link>] /ˈbeɪsɪkli/ ⬤•• (3x)
              
            </span>
              
            &nbsp;trong tiếng Anh có nghĩa là "về cơ bản", "một cách đơn giản", được dùng để nhấn mạnh ý chính hoặc ý tưởng cốt lõi của một vấn đề.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">These TWO PROducts are BAsically the SAME.</li>
        <li className="list-none margin-bottom-20">Hai sản phẩm này về cơ bản là giống nhau.</li>

        <li value="2">it's BAsically imPOSsible to FInish <strong>this</strong> TASK in ONE DAY.</li>
        <li className="list-none margin-bottom-20">Về cơ bản là không thể hoàn thành nhiệm vụ này trong một ngày.</li>

        <li value="3">what he SAID was BAsically TRUE.</li>
        <li className="list-none margin-bottom-20">Những gì anh ấy nói về cơ bản là đúng.</li>

        <li value="4">the PROject is BAsically FInished.</li>
        <li className="list-none margin-bottom-20">Dự án về cơ bản là đã hoàn thành.</li>

        <li value="5">APples and PEARS are BAsically the SAME THING.</li>
        <li className="list-none margin-bottom-20">Táo và lê về cơ bản là một loại quả.</li>

        <li value="6">WATCHing <strong>that</strong> MOvie was BAsically a WASTE of TIME.</li>
        <li className="list-none margin-bottom-20">Xem bộ phim đó về cơ bản là lãng phí thời gian.</li>

        <li value="7">BAsically the iDEa is to SIMplify the PROcess.</li>
        <li className="list-none margin-bottom-20">Về cơ bản, ý tưởng là đơn giản hóa quy trình.</li>

        <li value="8">i THINK everyone BAsically underSTOOD the inSTRUCtions.</li>
        <li className="list-none margin-bottom-20">Tôi nghĩ mọi người về cơ bản là đã hiểu các hướng dẫn.</li>

        <li value="9">THIS NEW MOdel is BAsically the SAME as the OLD one.</li>
        <li className="list-none margin-bottom-20">Mô hình mới này về cơ bản là giống như mô hình cũ.</li>

        <li value="10">BAsically SPEAKing, we NEED MORE TIME to FInish the PROject.</li>
        <li className="list-none margin-bottom-20">Nói một cách đơn giản, chúng ta cần thêm thời gian để hoàn thành dự án.</li>

      </ol>

      <p>** Các cụm từ trên thường được sử dụng để làm cho ý tưởng trở nên dễ hiểu hơn, đơn giản hóa thông tin và tập trung vào những điểm chính. Chúng thường được sử dụng trong giao tiếp hàng ngày và trong nhiều lĩnh vực khác nhau.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>BAsically</strong>" thường được đặt ở đầu câu hoặc trước một cụm từ để nhấn mạnh ý nghĩa.</li>

          <li className="margin-bottom-20">Từ này có thể được sử dụng trong nhiều ngữ cảnh khác nhau, từ cuộc trò chuyện hàng ngày đến các bài thuyết trình.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 8, 2024 · by 💎GEM ·</span>
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