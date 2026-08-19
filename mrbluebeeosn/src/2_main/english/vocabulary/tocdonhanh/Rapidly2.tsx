import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function RAPidly2(): React.JSX.Element {

  const postId = "RAPidly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#toc-do-nhanh-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: nhanh</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">RAPidly
        <sup>
          <Link to="/vocabulary/RAPidly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/RAPidly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>RAPidly</strong>" (một cách nhanh chóng) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [RAPidly][RAP id ly] /ˈræpɪdli/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">RAPidly</Link>/ 
              
              &nbsp;⬤•• (3x)
              
            </span>
              
            &nbsp;thường được sử dụng để mô tả một quá trình, sự thay đổi hoặc sự phát triển diễn ra một cách nhanh chóng.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">The CITy's popuLAtion is RAPidly GROWing.</li>
        <li className="list-none margin-bottom-20">Dân số thành phố đang tăng trưởng nhanh chóng.</li>

        <li value="2">The WORLD is RAPidly CHANGing due to technoLOGical adVANCEments.</li>
        <li className="list-none margin-bottom-20">Thế giới đang thay đổi nhanh chóng do sự phát triển của công nghệ.</li>

        <li value="3">The disEASE is RAPidly SPREADing throughout the COUNtry.</li>
        <li className="list-none margin-bottom-20">Bệnh đang lan rộng nhanh chóng khắp cả nước.</li>

        <li value="4">The NUMber of enDANgered SPEcies is RAPidly deCLINing.</li>
        <li className="list-none margin-bottom-20">Số lượng các loài động vật có nguy cơ tuyệt chủng đang giảm nhanh chóng.</li>

        <li value="5">techNOlogy is RAPidly eVOLVing, MAKing our LIVES EAsier.</li>
        <li className="list-none margin-bottom-20">Công nghệ đang phát triển nhanh chóng, giúp cuộc sống của chúng ta dễ dàng hơn.</li>

        <li value="6">The DEADline is RAPidly apPROACHing.</li>
        <li className="list-none margin-bottom-20">Hạn chót đang đến gần.</li>

        <li value="7">The COMpany is RAPidly exPANding into NEW MARkets.</li>
        <li className="list-none margin-bottom-20">Công ty đang mở rộng nhanh chóng vào các thị trường mới.</li>

        <li value="8">The OLD BUILDing is RAPidly deTERiorating.</li>
        <li className="list-none margin-bottom-20">Tòa nhà cũ đang xuống cấp nhanh chóng.</li>

        <li value="9">The CAR RAPidly acCELerated down the HIGHway.</li>
        <li className="list-none margin-bottom-20">Chiếc xe tăng tốc nhanh chóng trên đường cao tốc.</li>

        <li value="10">The RAINforest is RAPidly disapPEARing due to deforesTAtion.</li>
        <li className="list-none margin-bottom-20">Rừng nhiệt đới đang biến mất nhanh chóng do nạn phá rừng.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh tính chất nhanh chóng, cấp bách của một sự thay đổi hoặc quá trình. Chúng thường được sử dụng để mô tả những sự kiện hoặc xu hướng có tác động lớn và đáng chú ý.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>RAPidly</strong>" thường được đặt trước hành động để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này thường được sử dụng trong các ngữ cảnh liên quan đến khoa học, kinh tế, xã hội và môi trường.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>December 5, 2024 · by 💎Gem ·</span>
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