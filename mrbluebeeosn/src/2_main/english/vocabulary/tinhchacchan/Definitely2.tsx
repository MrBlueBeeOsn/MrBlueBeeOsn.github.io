import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Definitely2(): React.JSX.Element {

  const postId = "Definitely2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-chac-chan-terms"><mark className="highlight-tertiary-padding-4-8">Tính chắc chắn</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">definitely
        <sup>
          <Link to="/vocabulary/definitely-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/definitely-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>definitely</strong>" (chắc chắn) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <strong>Definitely&nbsp;</strong>
            
            <span className="highlight-255-padding-3-6">
              
              /ˈdɛfɪnətli/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">defini̛tely</Link>/ 
              
              <sup>&nbsp;⬤••• (4x)</sup>
              
            </span>
              
            &nbsp;là một trạng cơ thường được sử dụng để nhấn mạnh sự chắc chắn hoặc quyết tâm về một điều gì đó.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">Definitely <strong>not</strong> /nɒt/</li>
        <li className="list-none">I ______ going to that party.</li>
        <li className="list-none margin-bottom-20">Tôi chắc chắn sẽ không đi bữa tiệc đó.</li>

        <li value="2">Definitely <strong>will</strong> /wɪl/</li>
        <li className="list-none">I ______ be there on time.</li>
        <li className="list-none margin-bottom-20">Tôi chắc chắn sẽ đến đúng giờ.</li>

        <li value="3">Definitely <strong>the best</strong> /ðə bɛst/</li>
        <li className="list-none">This is ______ pizza I've ever had.</li>
        <li className="list-none margin-bottom-20">Đây chắc chắn là pizza ngon nhất mà tôi từng ăn.</li>

        <li value="4">Definitely <strong>need</strong> /niːd/</li>
        <li className="list-none">I ______ a vacation.</li>
        <li className="list-none margin-bottom-20">Tôi chắc chắn cần một kỳ nghỉ.</li>

        <li value="5">Definitely <strong>worth it</strong> /wɜːθ ɪt/</li>
        <li className="list-none">The movie was ______ watching.</li>
        <li className="list-none margin-bottom-20">Bộ phim đó chắc chắn đáng xem.</li>

        <li value="6">Definitely <strong>know</strong> /noʊ/</li>
        <li className="list-none">I ______ the answer to that question.</li>
        <li className="list-none margin-bottom-20">Tôi chắc chắn biết câu trả lời cho câu hỏi đó.</li>

        <li value="7">Definitely <strong>recommend</strong> /ˌrekəˈmɛnd/</li>
        <li className="list-none">I ______ this restaurant.</li>
        <li className="list-none margin-bottom-20">Tôi chắc chắn đề xuất nhà hàng này.</li>

        <li value="8">Definitely <strong>agree</strong> /əˈɡriː/</li>
        <li className="list-none">I ______ with you.</li>
        <li className="list-none margin-bottom-20">Tôi hoàn toàn đồng ý với bạn.</li>

        <li value="9">Definitely <strong>not true</strong> /nɒt truː/</li>
        <li className="list-none">That story is ______.</li>
        <li className="list-none margin-bottom-20">Câu chuyện đó chắc chắn không đúng.</li>

        <li value="10">Definitely <strong>the best choice</strong> /ðə bɛst tʃɔɪs/</li>
        <li className="list-none">Buying this house is ______.</li>
        <li className="list-none margin-bottom-20">Mua căn nhà này chắc chắn là lựa chọn tốt nhất.</li>

      </ol>

      <p>** Các cụm từ trên đều được sử dụng để nhấn mạnh sự chắc chắn, quyết tâm hoặc sự đồng ý về một điều gì đó. Chúng giúp cho câu nói trở nên mạnh mẽ và thuyết phục hơn.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Definitely</strong>" thường được đặt ở đầu câu hoặc trước động cơ để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này có thể được sử dụng trong cả văn nói và văn viết.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 5, 2024 · by 💎Gem ·</span>
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