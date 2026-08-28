import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function DEFinitely2(): React.JSX.Element {

  const postId = "DEFinitely2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-chac-chan-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: chắc chắn</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">DEFinitely
        <sup>
          <Link to="/vocabulary/DEFinitely-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/DEFinitely-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>DEFinitely</strong>" (chắc chắn) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [DEFinitely][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">DEF i̛ ni̛te ly</Link>] /ˈdɛfɪnətli/ ⬤••• (4x)
              
            </span>
              
            &nbsp;là một Trạng Cơ thường được sử dụng để nhấn mạnh sự chắc chắn hoặc quyết tâm về một điều gì đó.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">i DEFinitely NOT GOing to that PARty.</li>
        <li className="list-none margin-bottom-20">Tôi chắc chắn sẽ không đi bữa tiệc đó.</li>

        <li value="2">i DEFinitely will be THERE on TIME.</li>
        <li className="list-none margin-bottom-20">Tôi chắc chắn sẽ đến đúng giờ.</li>

        <li value="3">this is DEFinitely the BEST PIZza i've EVer had.</li>
        <li className="list-none margin-bottom-20">Đây chắc chắn là pizza ngon nhất mà tôi từng ăn.</li>

        <li value="4">i DEFinitely NEED a vaCAtion.</li>
        <li className="list-none margin-bottom-20">Tôi chắc chắn cần một kỳ nghỉ.</li>

        <li value="5">the MOvie was DEFinitely WORTH it WATChing.</li>
        <li className="list-none margin-bottom-20">Bộ phim đó chắc chắn đáng xem.</li>

        <li value="6">i DEFinitely KNOW the ANswer to that QUEStion.</li>
        <li className="list-none margin-bottom-20">Tôi chắc chắn biết câu trả lời cho câu hỏi đó.</li>

        <li value="7">i DEFinitely recomMEND this REStaurant.</li>
        <li className="list-none margin-bottom-20">Tôi chắc chắn đề xuất nhà hàng này.</li>

        <li value="8">i DEFinitely aGREE with you.</li>
        <li className="list-none margin-bottom-20">Tôi hoàn toàn đồng ý với bạn.</li>

        <li value="9">that STOry is DEFinitely NOT TRUE.</li>
        <li className="list-none margin-bottom-20">Câu chuyện đó chắc chắn không đúng.</li>

        <li value="10">BUYing this HOUSE is DEFinitely the BEST CHOICE.</li>
        <li className="list-none margin-bottom-20">Mua căn nhà này chắc chắn là lựa chọn tốt nhất.</li>

      </ol>

      <p>** Các cụm từ trên đều được sử dụng để nhấn mạnh sự chắc chắn, quyết tâm hoặc sự đồng ý về một điều gì đó. Chúng giúp cho câu nói trở nên mạnh mẽ và thuyết phục hơn.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>DEFinitely</strong>" thường được đặt ở đầu câu hoặc trước hành động để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này có thể được sử dụng trong cả văn nói và văn viết.</li>

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