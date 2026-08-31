import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function GREATly2(): React.JSX.Element {

  const postId = "GREATly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#muc-do-cao-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: mức độ cao</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">GREATly
        <sup>
          <Link to="/vocabulary/GREATly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/GREATly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>GREATly</strong>" (rất nhiều, rất lớn) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [GREATly][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">GREȦT ly</Link>] /ˈɡreɪtli/ ⬤• (2x)
              
            </span>
              
            &nbsp;thường được dùng để nhấn mạnh mức độ cao của một hành động, cảm xúc hoặc sự thay đổi.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">your HELP is GREATly apPREciated.</li>
        <li className="list-none margin-bottom-20">Tôi rất biết ơn sự giúp đỡ của bạn.</li>

        <li value="2">his HEALTH has GREATly imPROVED since he STARTed EXercising.</li>
        <li className="list-none margin-bottom-20">Sức khỏe của anh ấy đã cải thiện đáng kể kể từ khi anh ấy bắt đầu tập thể dục.</li>

        <li value="3">his PARents GREATly INfluenced his deCISion.</li>
        <li className="list-none margin-bottom-20">Cha mẹ anh ấy đã ảnh hưởng rất lớn đến quyết định của anh ấy.</li>

        <li value="4">she is GREATly adMIred for her COURage.</li>
        <li className="list-none margin-bottom-20">Cô ấy được rất nhiều người ngưỡng mộ vì sự dũng cảm của mình.</li>

        <li value="5">the PRICE of the PRODuct has been GREATly reDUCED.</li>
        <li className="list-none margin-bottom-20">Giá của sản phẩm đã giảm đáng kể.</li>

        <li value="6">SALES have GREATly inCREASED since the NEW MARketing camPAIGN.</li>
        <li className="list-none margin-bottom-20">Doanh số đã tăng lên đáng kể kể từ khi chiến dịch tiếp thị mới được triển khai.</li>

        <li value="7">i am GREATly conCERNED about the enVIronment.</li>
        <li className="list-none margin-bottom-20">Tôi rất lo lắng về môi trường.</li>

        <li value="8">i was GREATly disapPOINTed with the reSULTS.</li>
        <li className="list-none margin-bottom-20">Tôi rất thất vọng với kết quả.</li>

        <li value="9">the STORy was GREATly exAGgerated.</li>
        <li className="list-none margin-bottom-20">Câu chuyện đã bị phóng đại quá mức.</li>

        <li value="10">he has GREATly BENefited from the NEW PROgram.</li>
        <li className="list-none margin-bottom-20">Anh ấy đã được lợi rất nhiều từ chương trình mới.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh mức độ cao của một hành động, cảm xúc hoặc sự thay đổi. Chúng thường được sử dụng để làm nổi bật tầm quan trọng, cường độ hoặc tác động của một điều gì đó.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>GREATly</strong>" thường đứng trước hành động hoặc Tính Cơ để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này có thể được thay thế bằng các từ đồng nghĩa như "sigNIFicantly", "subSTANtially", "conSIDerably" để tạo sự đa dạng trong văn phong.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 6, 2024 · by 💎GEM ·</span>
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