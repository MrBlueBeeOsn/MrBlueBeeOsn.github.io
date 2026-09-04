import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function PROBably2(): React.JSX.Element {

  const postId = "PROBably2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-khong-chac"><mark className="highlight-tertiary-padding-4-8">ADverbs: không chắc</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">PROBably
        <sup>
          <Link to="/vocabulary/PROBably-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/PROBably-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>PROBably</strong>" (có lẽ) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [PROBably][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">PROB a̛ ly</Link>] /ˈprɒbli/ ⬤• (3x)
              
            </span>
              
            &nbsp;là một Trạng Cơ chỉ khả năng, thường được dùng để diễn tả sự không chắc chắn hoàn toàn nhưng có khả năng xảy ra cao.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">THIS is PROBably the BEST RESTAUrant in TOWN.</li>
        <li className="list-none margin-bottom-20">Đây có lẽ là nhà hàng ngon nhất trong thị trấn.</li>

        <li value="2">i PROBably will NOT be ABle to MAKE it to the PARTy.</li>
        <li className="list-none margin-bottom-20">Có lẽ tôi sẽ không đến được buổi tiệc.</li>

        <li value="3">the MOST PROBably, she will arRIVE LATE.</li>
        <li className="list-none margin-bottom-20">Rất có thể cô ấy sẽ đến muộn.</li>

        <li value="4">i will PROBably GO to the MOvies toMORrow.</li>
        <li className="list-none margin-bottom-20">Tôi sẽ có lẽ đi xem phim vào ngày mai.</li>

        <li value="5">the deLAY was PROBably due to the TRAFfic.</li>
        <li className="list-none margin-bottom-20">Sự chậm trễ có lẽ là do giao thông.</li>

        <li value="6">it is PROBably the BEST deCISion you can MAKE.</li>
        <li className="list-none margin-bottom-20">Có lẽ đó là quyết định tốt nhất bạn có thể đưa ra.</li>

        <li value="7">PROBably the REAson is that he's TIred.</li>
        <li className="list-none margin-bottom-20">Có lẽ lý do là anh ấy mệt.</li>

        <li value="8">PROBably the BEST WAY is to CALL him FIRST.</li>
        <li className="list-none margin-bottom-20">Có lẽ cách tốt nhất là gọi điện cho anh ấy trước.</li>

        <li value="9">she's PROBably upSET be<strong>cause</strong> he DIDN'T CALL.</li>
        <li className="list-none margin-bottom-20">Cô ấy có lẽ buồn vì anh ấy không gọi điện.</li>

        <li value="10">THIS is PROBably the MOST DIFficult TASK i've ever HAD.</li>
        <li className="list-none margin-bottom-20">Đây có lẽ là nhiệm vụ khó khăn nhất mà tôi từng làm.</li>

      </ol>

      <p>** Các cụm từ trên đều mang ý nghĩa không chắc chắn hoàn toàn nhưng có khả năng xảy ra cao. Chúng thường được sử dụng để diễn tả suy đoán, dự đoán hoặc đưa ra những nhận định chủ quan.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>PROBably</strong>" thường đứng ở đầu câu hoặc trước hành động để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này có thể được thay thế bằng các từ đồng nghĩa như "LIKEly", "<Link to="/vocabulary/POSsibly-1">POSsibly</Link>", "<Link to="/vocabulary/perHAPS-1">perHAPS</Link>" để tạo sự đa dạng trong văn phong.</li>

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