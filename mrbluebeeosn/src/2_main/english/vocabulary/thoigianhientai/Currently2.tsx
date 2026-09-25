import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function CURrently2(): React.JSX.Element {

  const postId = "CURrently2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-hien-tai"><mark className="highlight-tertiary-padding-4-88">ADverbs: hiện tại</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">CURrently
        <sup>
          <Link to="/vocabulary/CURrently-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/CURrently-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#WORKing-on">WORKing on</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#STUDying-for">STUDying for</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#LIVing-in">LIVing in</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#unaVAILable">unaVAILable</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#under-conSTRUCtion"><strong>un</strong>der conSTRUCtion</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#being-reVIEWED"><strong>be</strong>ing reVIEWED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#in-efFECT">in efFECT</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#being-deVELoped"><strong>be</strong>ing deVELoped</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#TRENDing-on">TRENDing on</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#aVAILable-in">aVAILable in</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>CURrently</strong>" (hiện tại) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              CURrently \<Link to="/pronunciation/5-vowel-system">CƯR re̛nt ly</Link>\ /ˈkʌrəntli/ ⬤•• (THREE SYLlables)
              
            </span>
              
            &nbsp;thường được sử dụng để chỉ một hành động, trạng thái hoặc tình huống đang diễn ra tại thời điểm nói.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="WORKing-on">i am CURrently [WORKing on] a NEW PROJect.</li>
        <li className="list-none margin-bottom-20">Tôi hiện [đang làm việc trên] một dự án mới.</li>

        <li value="2" id="STUDying-for">she is CURrently [STUDying for] her eXAMS.</li>
        <li className="list-none margin-bottom-20">Cô ấy hiện tại [đang học cho] các kỳ thi của mình.</li>

        <li value="3" id="LIVing-in">they are CURrently [LIVing in] vietNAM.</li>
        <li className="list-none margin-bottom-20">Họ hiện [đang sống ở] Việt Nam.</li>

        <li value="4" id="unaVAILable">the MANager is CURrently [unaVAILable].</li>
        <li className="list-none margin-bottom-20">Quản lý hiện [không có mặt].</li>

        <li value="5" id="under-conSTRUCtion">the NEW BUILDing is CURrently [<strong>un</strong>der conSTRUCtion].</li>
        <li className="list-none margin-bottom-20">Tòa nhà mới hiện [đang được xây dựng].</li>

        <li value="6" id="being-reVIEWED">your APplication is CURrently [<strong>be</strong>ing reVIEWED].</li>
        <li className="list-none margin-bottom-20">Đơn đăng ký của bạn hiện [đang được xem xét].</li>

        <li value="7" id="in-efFECT">this RULE is CURrently [in efFECT].</li>
        <li className="list-none margin-bottom-20">Quy tắc này hiện [đang có hiệu lực].</li>

        <li value="8" id="being-deVELoped">this VACcine is CURrently [<strong>be</strong>ing deVELoped].</li>
        <li className="list-none margin-bottom-20">Vắc xin này hiện [đang được phát triển].</li>

        <li value="9" id="TRENDing-on">this SONG is CURrently [TRENDing on] TIKTok.</li>
        <li className="list-none margin-bottom-20">Bài hát này hiện [đang rất HOT trên] TikTok.</li>

        <li value="10" id="aVAILable-in">the PRODuct is CURrently [aVAILable in] all our STORES.</li>
        <li className="list-none margin-bottom-20">Sản phẩm này hiện [có sẵn ở] tất cả các cửa hàng.</li>

      </ol>

      <p>** Các cụm từ trên đều được sử dụng để nhấn mạnh tính thời sự của một hành động, trạng thái hoặc tình huống. Chúng giúp chúng ta hiểu rõ hơn về những gì đang xảy ra tại thời điểm nói.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>CURrently</strong>" thường được đặt ở đầu câu hoặc trước hành động để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này thường được sử dụng trong văn nói và văn viết để cung cấp thông tin cập nhật.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 5, 2024 · by 💎GEM ·</span>
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